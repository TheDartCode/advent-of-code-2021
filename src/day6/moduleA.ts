const TOTAL_DAYS = 80;

const incrementPopulation = (
  populationByDay: number[],
  startingDay: number,
  maxDays: number
): void => {
  for (let day = startingDay; day <= maxDays; day += 7) {
    populationByDay[day] += 1;
    incrementPopulation(populationByDay, day + 9, maxDays); // track down offspring
  }
};

const moduleA = (input: string) => {
  const list = input.split(",").map((n) => parseInt(n));

  const days = new Array(TOTAL_DAYS + 1).fill(0);
  days[0] = list.length;
  list.forEach((num) => {
    incrementPopulation(days, num + 1, TOTAL_DAYS);
  });
  return days.reduce((total, count) => total + count, 0);
};

export default moduleA;
