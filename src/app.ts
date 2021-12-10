import fs from "fs";
import path from "path";

import day1 from "./day1";
import day2 from "./day2";
import day3 from "./day3";
import day4 from "./day4";
import day5 from "./day5";
import day6 from "./day6";
import day7 from "./day7";
import day8 from "./day8";
import day9 from "./day9";
import day10 from "./day10";
import { DayFunc, DayPart } from "./types";
import { PerformanceMonitor } from "./shared/helpers";

type DaysDictionary = {
  [property: string]: DayFunc;
};

const days: DaysDictionary = {
  "1": day1,
  "2": day2,
  "3": day3,
  "4": day4,
  "5": day5,
  "6": day6,
  "7": day7,
  "8": day8,
  "9": day9,
  "10": day10,
};

const day = process.argv[2];
const part = process.argv[3] as DayPart;

console.log({ day, part });

const solveDayPart = (day: string, part: DayPart) => {
  const data = fs
    .readFileSync(path.join(__dirname, `../data/day${day}.txt`))
    .toString();
  const pm = new PerformanceMonitor();
  const result = days[day](part, data);
  const time = pm.tick();
  console.log(`Day ${day} ${part}`, { result });
  console.log(`Done in ${time.toFixed(2)}ms`);
};

if (day && part) {
  solveDayPart(day, part);
} else {
  Object.keys(days).forEach((day) => {
    solveDayPart(day, DayPart.a);
    solveDayPart(day, DayPart.b);
  });
}
