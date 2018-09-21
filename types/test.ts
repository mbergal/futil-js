// TypeScript Version: 3.0

import {
  compactJoin,
  repeated,
  dotJoin,
  insertAtIndex,
  pushIn,
  mergeRanges,
  cycle,
  arrayToObject,
  zipObjectDeepWith,
  prefixes,
  encoder,
  dotEncoder,
  slashEncoder,
  chunkBy,
} from "futil-js";

// $ExpectType string
compactJoin(",", [1, undefined, 2, null, 3]);
// $ExpectType string
compactJoin(",")([1, undefined, 2, null, 3]);
// $ExpectType string
compactJoin(" and ", [null, "Alice", "Bob", false]);

// $ExpectType string
dotJoin([1, undefined, 2, null, 3]);

const fn = pushIn([1, 2, 3]);
// $ExpectType ArrayLike<number>
fn(4);

// $ExpectType string
insertAtIndex(1, "1", "A");

repeated([1, 2, 3]);
// $ExpectType string[]
repeated(["a", "b", "c"]);

// $ExpectType [number, number][]
mergeRanges([[0, 2], [1, 4]]);

const cycle1 = cycle([1, 2, 3]);
// $ExpectType number
cycle1(1);

const cycle2 = cycle([true, false]);
// $ExpectType boolean
cycle2(true);

// $ExpectType { [id: string]: number; }
zipObjectDeepWith(["a", "b"], () => 1);

// $ExpectType { [id: string]: number; }
zipObjectDeepWith(["a", "b"], n => n + 1);

// $ExpectType { [k: string]: string; }
arrayToObject(x => `key${x}`, x => `vala`, ["a", "b", "c"]);

// $ExpectType { [k: string]: string; }
arrayToObject(x => `key${x}`)(x => `val${x}`)(["a", "b", "c"]);

// $ExpectType string[][]
prefixes(["root", "criteria", "someNode"]);

// $ExpectType number[][]
prefixes([1, 2, 3]);

// $ExpectType string
encoder("->").encode(["a", "b"]);

// $ExpectType string
dotEncoder.encode(["a", "b"]);

// $ExpectType string
slashEncoder.encode(["a", "b"]);

// $ExpectType number[][]
chunkBy(([a], b) => b % a === 0, [2, 2, 2, 3, 2, 2]);

// $ExpectType number[][]
chunkBy(([x]: number[], y) => (x * y) % 3 === 0)([1, 2, 3, 4, 5, 6, 7, 8, 9]);
