import { parseInput } from './helpers';
import { Cave, Path } from './types';

export const stringifyPath = (path: Path): string =>
  path.map((c) => c.name).join();

export const followCave = (cave: Cave, path: Path): Path[] => {
  let result: Path[] = [];
  cave.connections.forEach((otherCave) => {
    if (otherCave.name === 'end') {
      result.push([...path, otherCave]);
      return;
    }
    if (otherCave.name === 'start') {
      return;
    }
    if (!otherCave.big) {
      const smallCavesInPath = [...new Set(path.filter((c) => !c.big))];
      const pathAlreadyIncludesCave = path.includes(otherCave);
      const aSmallPathAlreadyExistsTwice = smallCavesInPath.some(
        (c1) => path.filter((c2) => c2 === c1).length === 2
      );
      if (pathAlreadyIncludesCave && aSmallPathAlreadyExistsTwice) {
        return;
      }
    }
    result = result.concat(followCave(otherCave, [...path, otherCave]));
  });

  return result;
};

const moduleB = (input: string) => {
  const caves = parseInput(input);
  const start = caves.find((c) => c.name === 'start');
  const paths = followCave(start, [start]);

  return paths.length;
};

export default moduleB;
