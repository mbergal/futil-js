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

export function converge<T, T1, R>(
  converger: (t: T1) => R,
  branches: [(t: T) => T1]
): (t: T) => R;

export function converge<T, T1, T2, R>(
  converger: (t: T1, t2: T2) => R,
  branches: [(t: T) => T1, (t: T) => T2]
): (t: T) => R;

export function composeApply<T, T1, T2>(f: (t1: T1) => T2, g: (t: T) => T1): T2;
export function comply<T, T1, T2>(f: (t1: T1) => T2, g: (t: T) => T1): T2;

export interface Deferred<T> {
  resolve: (t: T) => Promise<T>;
  reject: (e: any) => Promise<T>;
  promise: Promise<T>;
}

export function defer<T>(): Deferred<T>;

export function debounceAsync<R>(
  n: number,
  f: () => Promise<R>
): () => Promise<R>;
export function debounceAsync<R, T>(
  n: number,
  f: (t: T) => Promise<R>
): (t: T) => Promise<R>;

export function debounceAsync<R, T, T1>(
  n: number,
  f: (t: T, t1: T1) => Promise<R>
): (t: T, t1: T1) => Promise<R>;

export function flurry<A, R>(f: (a: A) => R): R;
export function flurry<A, T, R>(f: (a: A) => T, f1: (t: T) => R): R;
export function flurry<A, T, T1, R>(
  f: (a: A) => T,
  f1: (t: T) => T1,
  f2: (t: T1) => R
): R;

export function flurry<A, A1, R>(f: (a: A, a1: A1) => R): R;
export function flurry<A, A1, T, R>(
  f: (a: A, a1: A1) => T,
  f1: (t: T) => R
): (a: A, a1: A1) => R;
export function flurry<A, A1, A2, R>(f: (a: A, a1: A1, a2: A2) => R): R;
export function flurry<A, A1, A2, A3, R>(
  f: (a: A, a1: A1, a2: A2, a3: A3) => R
): R;
