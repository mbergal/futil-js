// TypeScript Version: 2.2

import {
  aspect,
  aspectSync,
  logs,
  error,
  errors,
  status,
  deprecate,
  concurrency,
  command,
} from 'futil-js';

// $ExpectType Promise<number>
aspect({
  init: state => {},
  after: state => {},
  before: state => {},
  always: state => {},
  onError: state => {},
})(() => 6);

// $ExpectType number
aspectSync({
  init: state => {},
  after: state => {},
  before: state => {},
  always: state => {},
  onError: state => {},
})(() => 6);

// $ExpectType number
logs()(() => 6);

logs().state.logs;

// $ExpectType number
error()(() => 6);
error().state.error;

// $ExpectType number
errors()(() => 6);
errors().state.errors;

// $ExpectType number
status()(() => 6);
status().state.logs;

// $ExpectType number
deprecate('subject', 'version', 'alternative')(() => 6);

// $ExpectType number
concurrency()(() => 6);

// $ExpectType number
command()(() => 6);
// $ExpectType number
command(undefined, 100)(() => 6);
// $ExpectType number
command(undefined)(() => 6);
