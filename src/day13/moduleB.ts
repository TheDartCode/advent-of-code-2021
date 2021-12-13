import fs from 'fs';
import path from 'path';
import { foldPaper, generatePaper, parseInput } from './helpers';

const moduleB = (input: string) => {
  const { dots, folds } = parseInput(input);
  const paper = generatePaper(dots);
  folds.forEach((fold) => {
    foldPaper(paper, fold);
  });

  const filename = path.resolve(process.cwd(), 'output/day13-b.txt');

  fs.writeFileSync(
    filename,
    paper
      .map((r) => r.join(''))
      .join('\n')
      .replace(/\./g, ' ')
  );

  return filename;
};

export default moduleB;
