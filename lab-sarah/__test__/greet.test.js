'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  test('Should return "null" on non-string values', () => {
    expect(greet.hello('')).toEqual(null);
  });
  test('Should return "hello world"', () => {
    expect(greet.hello('world')).toEqual('hello world');
  });
});
