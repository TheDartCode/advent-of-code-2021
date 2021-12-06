const TOTAL_DAYS = 256;

const moduleB = (input: string) => {
  const list = input.split(",").map((n) => parseInt(n));

  const fishGroups = new Array(9).fill(0);
  list.forEach((num) => fishGroups[num]++);
  for (let i = 0; i < TOTAL_DAYS; i++) {
    const temp = fishGroups[0];
    fishGroups[0] = fishGroups[1];
    fishGroups[1] = fishGroups[2];
    fishGroups[2] = fishGroups[3];
    fishGroups[3] = fishGroups[4];
    fishGroups[4] = fishGroups[5];
    fishGroups[5] = fishGroups[6];
    fishGroups[6] = temp + fishGroups[7];
    fishGroups[7] = fishGroups[8];
    fishGroups[8] = temp;
  }

  return fishGroups.slice(0, 9).reduce((total, count) => total + count, 0);
};

export default moduleB;
