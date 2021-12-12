import { parseInput } from './helpers';
import { Cave } from './types';

type Path = Cave[];
type FrontierItem = {
  cave: Cave;
  path: Path;
};

const moduleA = (input: string) => {
  const caves = parseInput(input);
  const frontier: FrontierItem[] = [
    { cave: caves.find((c) => c.name === 'start'), path: [] },
  ];
  const paths = [];

  while (frontier.length > 0) {
    const { cave, path } = frontier.shift();
    if (paths.includes(path.map((c) => c.name).join())) {
      continue;
    }

    if (!cave.big && path.includes(cave)) {
      continue;
    }

    if (cave.name === 'end') {
      paths.push([...path, cave]);
      continue;
    }

    cave.connections.forEach((otherCave) => {
      frontier.push({
        cave: otherCave,
        path: [...path, cave],
      });
    });
  }

  return paths.length;
};

export default moduleA;
