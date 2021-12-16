import { sumArray } from '../shared/helpers';
import { binToDec } from './helpers';

export type BITSStream = string;

export enum PacketType {
  Sum = '000',
  Product = '001',
  Minimum = '010',
  Maximum = '011',
  LiteralValue = '100',
  GreaterThan = '101',
  LessThan = '110',
  EqualTo = '111',
}

export type Packet = {
  versionSum: number;
  packetTypeId: number;
  endIndex: number;
  result: number;
};

export class StreamProcessor {
  private currentIndex: number;

  constructor(private stream: BITSStream) {}

  process() {
    this.currentIndex = 0;

    return this.readPacket();
  }

  private readChunk(length: number): string {
    const result = this.stream.substring(
      this.currentIndex,
      this.currentIndex + length
    );
    this.currentIndex += length;
    return result;
  }

  private processLiteralValuePacket(): number {
    let nextChunk = '';
    let packetValue = '';

    do {
      nextChunk = this.readChunk(5);
      packetValue += nextChunk.substring(1);
    } while (nextChunk.startsWith('1'));

    return parseInt(packetValue, 2);
  }

  private readSubPackets(lengthTypeId: string): Packet[] {
    const packets: Packet[] = [];

    if (lengthTypeId === '0') {
      const totalSubPacketLength = binToDec(this.readChunk(15));
      let bitsRead = 0;
      while (bitsRead < totalSubPacketLength) {
        const startIndex = this.currentIndex;
        const packet = this.readPacket();
        packets.push(packet);
        bitsRead += packet.endIndex - startIndex;
      }
    } else {
      const subPacketsCount = binToDec(this.readChunk(11));
      let packetsRead = 0;
      while (packetsRead < subPacketsCount) {
        const packet = this.readPacket();
        packets.push(packet);
        packetsRead++;
      }
    }

    return packets;
  }

  private processOperatorPacket(
    packetTypeId: PacketType
  ): Pick<Packet, 'result' | 'versionSum'> {
    const lengthTypeId = this.readChunk(1);
    const packets = this.readSubPackets(lengthTypeId);

    let result: number;
    const versionSum = sumArray(packets.map((p) => p.versionSum));

    switch (packetTypeId) {
      case PacketType.Sum:
        result = sumArray(packets.map((p) => p.result));
        break;
      case PacketType.Product:
        result = packets.reduce(
          (product, packet) => product * packet.result,
          1
        );
        break;
      case PacketType.Minimum:
        result = Math.min(...packets.map((p) => p.result));
        break;
      case PacketType.Maximum:
        result = Math.max(...packets.map((p) => p.result));
        break;
      case PacketType.GreaterThan:
        result = packets[0].result > packets[1].result ? 1 : 0;
        break;
      case PacketType.LessThan:
        result = packets[0].result < packets[1].result ? 1 : 0;
        break;
      case PacketType.EqualTo:
        result = packets[0].result === packets[1].result ? 1 : 0;
        break;
      default:
        throw new Error(`Unknown packet type ID \`${packetTypeId}\``);
    }

    return {
      result,
      versionSum,
    };
  }

  private readPacket(): Packet {
    let versionSum = 0;

    const version = this.readChunk(3);

    const packetTypeId = this.readChunk(3);

    versionSum += binToDec(version);

    let result: number;

    if (packetTypeId === PacketType.LiteralValue) {
      result = this.processLiteralValuePacket();
    } else {
      const packetData = this.processOperatorPacket(packetTypeId as PacketType);
      result = packetData.result;
      versionSum += packetData.versionSum;
    }

    return {
      versionSum,
      packetTypeId: binToDec(packetTypeId),
      endIndex: this.currentIndex,
      result,
    };
  }
}
