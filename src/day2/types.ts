export enum Operation {
  Forward = 'forward',
  Down = 'down',
  Up = 'up',
}

export type Instruction = [Operation, number];
