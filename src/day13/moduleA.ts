import { foldPaper, generatePaper, parseInput } from './helpers';
import { sumArray } from '../shared/helpers';

const moduleA = (input: string) => {
  const { dots, folds } = parseInput(input);
  const paper = generatePaper(dots);
  foldPaper(paper, folds[0]);
  return sumArray(
    paper.map((row) => row.filter((point) => point === '#').length)
  );
};

export default moduleA;
