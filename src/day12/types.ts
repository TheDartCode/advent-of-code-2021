export type Cave = {
  name: string;
  connections: Cave[];
  big: boolean;
};

export type Path = Cave[];
