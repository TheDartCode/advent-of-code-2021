import {
  createGraph,
  getShortestDistanceToDestination,
  parseInput,
} from './helpers';

const moduleB = (input: string) => {
  const lines = parseInput(input, true);
  const graph = createGraph(lines);
  return getShortestDistanceToDestination(graph);
};

export default moduleB;
