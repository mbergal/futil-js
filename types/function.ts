import { boundMethod } from 'futil-js';

const obj = {
  name: 'Wade Watts',
  greet() {
    return `Welcome, ${this.name}`;
  },
};

// $ExpectType any
boundMethod('greet', obj)();
