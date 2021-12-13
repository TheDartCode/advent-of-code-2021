import { Dot, Fold, FoldDirection, Paper } from './types';
import { maxValue } from '../shared/helpers';

export const parseInput = (input: string): { dots: Dot[]; folds: Fold[] } => {
  const [dotsConfig, foldConfig] = input.split('\n\n');
  const dots: Dot[] = dotsConfig
    .split('\n')
    .filter((l) => l.length > 0)
    .map((dot) => {
      const [x, y] = dot.split(',');
      return { x: parseInt(x), y: parseInt(y) };
    });

  const folds: Fold[] = foldConfig
    .split('\n')
    .filter((l) => l.length > 0)
    .map((fold) => {
      const [direction, position] = fold.replace('fold along ', '').split('=');
      return {
        direction: direction as FoldDirection,
        position: parseInt(position),
      };
    });

  return { dots, folds };
};

export const generatePaper = (dots: Dot[]): Paper => {
  const xMax = maxValue(dots.map((dot) => dot.x));
  const yMax = maxValue(dots.map((dot) => dot.y));

  const paper = new Array(yMax + 1)
    .fill(null)
    .map(() => new Array(xMax + 1).fill('.'));

  dots.forEach((dot) => {
    paper[dot.y][dot.x] = '#';
  });

  return paper;
};

const foldPaperHorizontally = (paper: Paper, position: number) => {
  for (let y = 1; y < paper.length - position; y++) {
    for (let x = 0; x < paper[y].length; x++) {
      if (paper[position + y][x] === '#') {
        paper[position - y][x] = '#';
      }
    }
  }
  paper.splice(position, paper.length - position);
};

function foldPaperVertically(paper: Paper, position: number) {
  for (let y = 0; y < paper.length; y++) {
    for (let x = 1; x < paper[y].length - position; x++) {
      if (paper[y][position + x] === '#') {
        paper[y][position - x] = '#';
      }
    }
    paper[y].splice(position, paper[y].length - position);
  }
}

export const foldPaper = (paper: Paper, fold: Fold) => {
  switch (fold.direction) {
    case FoldDirection.y:
      return foldPaperHorizontally(paper, fold.position);
    case FoldDirection.x:
      return foldPaperVertically(paper, fold.position);
  }
};
