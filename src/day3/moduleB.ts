const calculateRatingValue = (
  input: string[],
  isUsingMostCommonBit: boolean
): number => {
  let result = "";
  const wordSize = input[0].length;

  let wordsUnderSearch = [...input];

  for (let i = 0; i < wordSize; i++) {
    let ones = 0;
    let zeros = 0;
    for (let index = 0; index < wordsUnderSearch.length; index++) {
      if (wordsUnderSearch[index].charAt(i) === "1") {
        ones++;
      } else {
        zeros++;
      }
    }
    result += isUsingMostCommonBit
      ? ones >= zeros
        ? "1"
        : "0"
      : ones >= zeros
      ? "0"
      : "1";

    wordsUnderSearch = wordsUnderSearch.filter((word) =>
      word.startsWith(result)
    );
    if (wordsUnderSearch.length === 1) {
      result += wordsUnderSearch[0].substring(result.length);
      break;
    }
  }

  return parseInt(result, 2);
};

export const extractLifeSupportRating = (input: string[]): [number, number] => {
  return [
    calculateRatingValue(input, true),
    calculateRatingValue(input, false),
  ];
};

const moduleB = (list: string) => {
  const items = list.split("\n").filter((l) => l.length > 0);
  const [oxygen, co2] = extractLifeSupportRating(items);
  return oxygen * co2;
};

export default moduleB;
