import { flowMap, findApply, map } from 'futil-js';

// $ExpectType number[]
flowMap((x: number) => x + 1, x => x + 1)([1, 2, 3]);
// $ExpectType number[]
flowMap((x: number) => x + 1, x => x + 1, x => x + 1)([1, 2, 3]);
// $ExpectType number[]
flowMap((x: number) => x + 1, x => x + 1, x => x + 1, x => x + 1)([1, 2, 3]);
// $ExpectType number[]
flowMap((x: number) => x + 1, x => x + 1, x => x + 1, x => x + 1, x => x + 1)([
  1,
  2,
  3,
]);
// $ExpectType number[]
flowMap(
  (x: number) => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1
)([1]);
// $ExpectType LodashMap1x1<number, number>
flowMap(
  (x: number) => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1,
  x => x + 1
);

const x: { [id: string]: number } = {
  a: 1,
};

// $ExpectType number
findApply(f => x[f], ['b', 'c', 'a']);

// $ExpectType number
findApply((f: string) => x[f])(['b', 'c', 'a']);

// $ExpectType number[]
map((x: number) => x + 1, [1, 2, 3]);

// $ExpectType number[]
map((x: number) => x + 1)([1, 2, 3]);

// $ExpectType { [id: string]: number; }
map((x: number) => x + 1, { a: 1, b: 2, c: 3 });

// $ExpectType { [id: string]: number; }
map((x: number) => x + 1)({ a: 1, b: 2, c: 3 });

// deepMap is not supported
