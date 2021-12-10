type DayFunc = (
  part: 'a' | 'b',
  data: string,
  extraOptions?: unknown
) => string;

enum DayPart {
  'a' = 'a',
  'b' = 'b',
}

export { DayFunc, DayPart };
