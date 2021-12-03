const extractGammaAndEpsilon = (input: string[]): [number, number] => {
  let gamma = "";
  let epsilon = "";
  const wordSize = input[0].length;

  for (let i = 0; i < wordSize; i++) {
    let ones = 0;
    let zeros = 0;
    for (let index = 0; index < input.length; index++) {
      if (input[index].charAt(i) === "1") {
        ones++;
      } else {
        zeros++;
      }
    }
    if (ones > zeros) {
      gamma += "1";
      epsilon += "0";
    } else if (zeros > ones) {
      epsilon += "1";
      gamma += "0";
    } else {
      throw new Error("Number of 0s === number of 1s");
    }
  }

  return [parseInt(gamma, 2), parseInt(epsilon, 2)];
};

const moduleA = (list: string) => {
  const items = list.split("\n").filter((l) => l.length > 0);
  const [gamma, epsilon] = extractGammaAndEpsilon(items);
  return gamma * epsilon;
};

export default moduleA;
