// TypeScript Version: 2.8

import { LodashMap1x1 } from 'lodash/fp';

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

export function aspect(params: {
  name?: 'aspect'
  init?: (state: {}) => void
  after?: (result: any, args: any[], state: {}) => any
  before?: (args: any[], state: {}) => any
  always?: (state: {}, args: any[]) => any
  onError?: (state: {}) => any
}): {
  state: {}
  <R>(f: (...args: any[]) => R | Promise<R>): Promise<R>
};

export function aspectSync(params: {
  name?: 'aspect'
  init?: (state: {}) => void
  after?: (result: any, args: any[], state: {}) => any
  before?: (args: any[], state: {}) => any
  always?: (state: {}, args: any[]) => any
  onError?: (state: {}) => any
}): {
  state: {}
  <R>(f: (...args: any[]) => R): R
};

export interface AspectedFunction {
  state: { [key: string]: any };
  <R>(f: (...args: any[]) => R): R;
}

export type ExtendFunction = (a: any) => (b: any) => any;
export function logs(extend?: ExtendFunction): AspectedFunction;
export function error(extend?: ExtendFunction): AspectedFunction;
export function errors(extend?: ExtendFunction): AspectedFunction;
export function status(extend?: ExtendFunction): AspectedFunction;

export function deprecate(
  subject: string,
  version: string,
  alternative: string
): AspectedFunction;

export function clearStatus(timeout?: number): AspectedFunction;
export function concurrency(): AspectedFunction;
export function command(
  extend?: ExtendFunction,
  timeout?: number
): AspectedFunction;

export type Many<T> = T | ReadonlyArray<T>;
// 0-argument first function
export function flowMap<R1, R2>(f1: () => R1, f2: (a: R1) => R2): () => R2;
export function flowMap<R1, R2, R3>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): () => R3;
export function flowMap<R1, R2, R3, R4>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): () => R4;
export function flowMap<R1, R2, R3, R4, R5>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): () => R5;
export function flowMap<R1, R2, R3, R4, R5, R6>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): () => R6;
export function flowMap<R1, R2, R3, R4, R5, R6, R7>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): () => R7;
export function flowMap<R1, R2, R3, R4, R5, R6, R7>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  ...funcs: Array<Many<(a: any) => any>>
): LodashMap1x1<R1, any>;
export function flowMap<A1, R1, R2>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2
): LodashMap1x1<R1, R2>;
export function flowMap<A1, R1, R2, R3>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): LodashMap1x1<R1, R3>;
export function flowMap<A1, R1, R2, R3, R4>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): LodashMap1x1<R1, R4>;
export function flowMap<A1, R1, R2, R3, R4, R5>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): LodashMap1x1<R1, R5>;
export function flowMap<A1, R1, R2, R3, R4, R5, R6>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): LodashMap1x1<R1, R6>;
export function flowMap<A1, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): LodashMap1x1<A1, R7>;
export function flowMap<A1, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  ...funcs: Array<Many<(a: any) => any>>
): LodashMap1x1<A1, R7>;

export function findApply<T, R>(f: (t: T) => R, arr: ArrayLike<T>): R;
export function findApply<T, R>(f: (t: T) => R): (arr: ArrayLike<T>) => R;

export function map<T, R, A extends { [id: string]: T } | ArrayLike<T>>(
  f: (t: T) => R,
  a: A
): A extends { [id: string]: T } ? { [id: string]: R } : R[];

export function map<T, R>(
  f: (t: T) => R
): <A extends { [id: string]: R } | ArrayLike<R>>(
  a: A
) => A extends { [id: string]: T } ? { [id: string]: R } : R[];

export function maybeCall<R>(f: () => R): R | undefined;
export function maybeCall<T1, R>(f: () => R, a1: T1): R | undefined;
export function maybeCall<T1, T2, R>(f: () => R, a1: T1, a2: T2): R | undefined;
export function maybeCall<T1, T2, T3, R>(
  f: () => R,
  a1: T1,
  a2: T2,
  a3: T3
): R | undefined;
export function maybeCall<T1, T2, T3, T4, R>(
  f: () => R,
  a1: T1,
  a2: T2,
  a3: T3,
  a4: T4
): R | undefined;
export function maybeCall<T1, T2, T3, T4, T5, R>(
  f: () => R,
  a1: T1,
  a2: T2,
  a3: T3,
  a4: T4,
  a5: T5
): R | undefined;

export function callOrReturn<R>(f: () => R): R | (() => R);

// // (a, Monoid f) -> f[a] :: f a
export function boundMethod<T, A extends keyof T>(method: A, object: T): any;

// // http://ramdajs.com/docs/#converge
// export let converge = (converger, branches) => (...args) =>
//   converger(_.over(branches)(...args))

// export let composeApply = (f, g) => x => f(g(x))(x)
// export let comply = composeApply

// // Prettier version of `defer` the one from bluebird docs
// export let defer = () => {
//   let resolve
//   let reject
//   let promise = new Promise((res, rej) => {
//     resolve = res
//     reject = rej
//   })
//   return {
//     resolve,
//     reject,
//     promise,
//   }
// }
// // `_.debounce` for async functions, which require consistently returning a single promise for all queued calls
// export let debounceAsync = (n, f) => {
//   let deferred = defer()
//   let debounced = _.debounce(n, (...args) => {
//     deferred.resolve(f(...args))
//     deferred = defer()
//   })
//   return (...args) => {
//     debounced(...args)
//     return deferred.promise
//   }
// }

// let currier = f => (...fns) => _.curryN(fns[0].length, f(...fns))
// // (f1, f2, ...fn) -> f1Args1 -> f1Arg2 -> ...f1ArgN -> fn(f2(f1))
// export let flurry = currier(_.flow)
