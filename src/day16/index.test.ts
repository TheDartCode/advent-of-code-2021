import day16 from './index';
import { hexToBinary } from './helpers';
import { StreamProcessor } from './types';

const TEST_DATA = 'A0016C880162017C3686B18A3D4780';

describe('day16', () => {
  describe('hexToBinary', () => {
    it('converts from hex to binary', () => {
      expect(hexToBinary('0123456789ABCDEF')).toEqual(
        '0000000100100011010001010110011110001001101010111100110111101111'
      );
    });
  });
  describe('StreamProcessor', () => {
    describe('#process()', () => {
      it('reads the packet as whole and returns the end index', () => {
        expect(
          new StreamProcessor('110100101111111000101000').process()
        ).toEqual({
          versionSum: 6,
          packetTypeId: 4,
          endIndex: 21,
          result: 2021,
        });

        expect(
          new StreamProcessor(
            '00111000000000000110111101000101001010010001001000000000'
          ).process()
        ).toEqual({
          versionSum: 9,
          packetTypeId: 6,
          endIndex: 49,
          result: 1,
        });

        expect(
          new StreamProcessor(
            '11101110000000001101010000001100100000100011000001100000'
          ).process()
        ).toEqual({
          versionSum: 14,
          packetTypeId: 3,
          endIndex: 51,
          result: 3,
        });
      });
    });
  });

  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day16('a', TEST_DATA)).toBe('31');
    });
  });
  describe('second part', () => {
    it('satisfies test data', () => {
      expect(day16('b', 'C200B40A82')).toEqual('3');
      expect(day16('b', '04005AC33890')).toEqual('54');
      expect(day16('b', '880086C3E88112')).toEqual('7');
      expect(day16('b', 'CE00C43D881120')).toEqual('9');
      expect(day16('b', 'D8005AC2A8F0')).toEqual('1');
      expect(day16('b', 'F600BC2D8F')).toEqual('0');
      expect(day16('b', '9C005AC2F8F0')).toEqual('0');
      expect(day16('b', '9C0141080250320F1802104A08')).toEqual('1');
    });
  });
});
