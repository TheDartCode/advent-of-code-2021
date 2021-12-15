import {
  createGraph,
  getShortestDistanceToDestination,
  parseInput,
} from './helpers';

const moduleA = (input: string) => {
  const lines = parseInput(input);
  const graph = createGraph(lines);
  return getShortestDistanceToDestination(graph);
};

export default moduleA;
