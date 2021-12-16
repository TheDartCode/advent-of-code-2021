import { BITSStream } from './types';

export const parseInput = (input: string) => {
  const [hexString] = input.split('\n');

  return hexString;
};

const leftPad = (text: string, length = 4, pad = '0') => {
  const padded = new Array(length).fill(pad).join('') + text;
  return padded.substring(padded.length - length);
};

export const hexToBinary = (hex: string): BITSStream => {
  return hex
    .split('')
    .map((hexChar) => {
      return leftPad(parseInt(hexChar, 16).toString(2));
    })
    .join('');
};

export const binToDec = (bin: string): number => {
  return parseInt(bin, 2);
};
