// TypeScript Version: 2.1

export function compactJoin(join: string, x: ArrayLike<any>): string;
export function compactJoin(join: string): (x: ArrayLike<any>) => string;
export function compactJoin(): (join: string, x: ArrayLike<any>) => string;

export function dotJoin(x: ArrayLike<any>): string;
export function dotJoin(): (x: ArrayLike<any>) => string;

export function dotJoinWith<T>(
  fn: (e: T) => boolean
): (x: ArrayLike<T>) => string;

export function repeated<T>(values: ArrayLike<T>): T[];
export function push<T>(value: T, arr: ArrayLike<T>): T[];
export function pushIn<T>(arr: ArrayLike<T>, val: T): ArrayLike<T>;
export function pushIn<T>(arr: ArrayLike<T>): (val: T) => ArrayLike<T>;
export function pushOn<T>(arr: ArrayLike<T>, val: T): ArrayLike<T>;
export function pushOn<T>(arr: ArrayLike<T>): (val: T) => ArrayLike<T>;

export function insertAtIndex(index: number, val: string, str: string): string;
export type Range = [number, number];
export function mergeRanges(ranges: Range[]): Range[];

export function cycle<T>(a: ArrayLike<T>): (n: T) => T;

export function arrayToObject<T, V>(
  k: (e: T) => string,
  v: (e: T) => V,
  a: ArrayLike<T>
): { [k: string]: V };
export function arrayToObject<T>(
  k: (e: T) => string
): <V>(v: (e: T) => V) => (a: ArrayLike<T>) => { [k: string]: V };

export function zipObjectDeepWith<V>(
  x: ArrayLike<string>
): (y: (n: number) => V) => { [id: string]: V };

export function zipObjectDeepWith<V>(
  x: ArrayLike<string>,
  y: (n: number) => V
): { [id: string]: V };

export function flags(x: ArrayLike<string>): { [id: string]: boolean };

export function prefixes<T>(x: ArrayLike<T>): T[][];

export interface Encoder {
  encode: (x: ArrayLike<string>) => string;
  decode: (s: string) => string[];
}

export function encoder(separator: string): Encoder;

export const dotEncoder: Encoder;
export const slashEncoder: Encoder;

export function chunkBy<T>(f: (a: T[], b: T) => boolean, a: ArrayLike<T>): T[][];
export function chunkBy<T>(
  f: (a: T[], b: T) => boolean
): (a: ArrayLike<T>) => T[][];
