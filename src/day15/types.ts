export type Node = {
  weight: number;
  distance: number;
  neighbors: Node[];
};

export type Graph = Node[];
