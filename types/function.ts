import { converge, comply, debounceAsync, flurry } from 'futil-js';

const average = converge((x: number, y: number) => x / y, [
  (a: number[]) => a.reduce((x: number, y: number) => x + y, 0),
  (a: number[]) => a.length,
]);
// $ExpectType number
average([1, 2, 3, 4, 5, 6, 7]); // => 4

const append = (x: number) => (y: number) => y + x;

// $ExpectType number
comply(append, (x: number) => x * 2)(5);

async function inner(i: number) {
  return Promise.resolve(i);
}

// $ExpectType (t: number) => Promise<number>
debounceAsync(10, inner);

const add = (x: number, y: number) => x + y;
const double = (x: number) => x * 2;

// $ExpectType number
flurry(add, double)(1, 4);
