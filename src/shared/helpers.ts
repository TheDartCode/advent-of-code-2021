import { performance } from 'perf_hooks';

export class PerformanceMonitor {
  start = performance.now();

  constructor(private resetOnTick = true) {}

  public tick(): number {
    const now = performance.now();
    const diff = now - this.start;
    if (this.resetOnTick) {
      this.start = now;
    }
    return diff;
  }
}

export const sumArray = (arr: number[]): number => {
  return arr.reduce((total, entry) => total + entry, 0);
};

export const uniqueArray = (arr: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    }
    result.push(arr[i]);
  }

  return result;
};

export const sortAsc = (arr: number[]): number[] => {
  return arr.sort((a, b) => a - b);
};
export const sortDesc = (arr: number[]): number[] => {
  return arr.sort((a, b) => b - a);
};

export const maxValue = (arr: number[]): number => {
  return sortDesc([...arr])[0];
};

export const minValue = (arr: number[]): number => {
  return sortAsc([...arr])[0];
};
