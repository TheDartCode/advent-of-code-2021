import { parseInput } from './helpers';
import day12 from './index';
import { followCave, stringifyPath } from './moduleB';

const TEST_DATA = `start-A
start-b
A-c
A-b
b-d
A-end
b-end
`;

const TEST_DATA_B = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc
`;

const TEST_DATA_C = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW
`;

describe('day12', () => {
  describe('#parseInput', () => {
    it('parses the list of cave names successfully', () => {
      const caveSystem = parseInput(TEST_DATA);
      expect(
        caveSystem.map((cave) => ({
          name: cave.name,
          connections: cave.connections.map((c) => c.name),
        }))
      ).toEqual([
        { name: 'start', connections: ['A', 'b'] },
        { name: 'A', connections: ['start', 'c', 'b', 'end'] },
        { name: 'b', connections: ['start', 'A', 'd', 'end'] },
        { name: 'c', connections: ['A'] },
        { name: 'd', connections: ['b'] },
        { name: 'end', connections: ['A', 'b'] },
      ]);
    });
  });
  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day12('a', TEST_DATA)).toBe('10');
    });
  });
  describe('second part', () => {
    describe('#followCave', () => {
      it('follows all possible paths starting from that cave until the `end` cave and returns them', () => {
        const caves = parseInput(TEST_DATA);
        const start = caves.find((c) => c.name === 'start');

        const paths = followCave(start, [start]);
        expect(paths.map(stringifyPath).sort()).toMatchObject(
          [
            'start,A,b,A,b,A,c,A,end',
            'start,A,b,A,b,A,end',
            'start,A,b,A,b,end',
            'start,A,b,A,c,A,b,A,end',
            'start,A,b,A,c,A,b,end',
            'start,A,b,A,c,A,c,A,end',
            'start,A,b,A,c,A,end',
            'start,A,b,A,end',
            'start,A,b,d,b,A,c,A,end',
            'start,A,b,d,b,A,end',
            'start,A,b,d,b,end',
            'start,A,b,end',
            'start,A,c,A,b,A,b,A,end',
            'start,A,c,A,b,A,b,end',
            'start,A,c,A,b,A,c,A,end',
            'start,A,c,A,b,A,end',
            'start,A,c,A,b,d,b,A,end',
            'start,A,c,A,b,d,b,end',
            'start,A,c,A,b,end',
            'start,A,c,A,c,A,b,A,end',
            'start,A,c,A,c,A,b,end',
            'start,A,c,A,c,A,end',
            'start,A,c,A,end',
            'start,A,end',
            'start,b,A,b,A,c,A,end',
            'start,b,A,b,A,end',
            'start,b,A,b,end',
            'start,b,A,c,A,b,A,end',
            'start,b,A,c,A,b,end',
            'start,b,A,c,A,c,A,end',
            'start,b,A,c,A,end',
            'start,b,A,end',
            'start,b,d,b,A,c,A,end',
            'start,b,d,b,A,end',
            'start,b,d,b,end',
            'start,b,end',
          ].sort()
        );
      });
    });
    it('satisfies test data', () => {
      expect(day12('b', TEST_DATA)).toBe('36');
      expect(day12('b', TEST_DATA_B)).toEqual('103');
      expect(day12('b', TEST_DATA_C)).toEqual('3509');
    });
  });
});
