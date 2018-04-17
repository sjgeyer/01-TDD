'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('Should return "null" on non-number values', () => {
      expect(arithmetic.add('', 5)).toEqual(null);
    });
    test('Should return 7', () => {
      expect(arithmetic.add(3, 4)).toEqual(7);
    });
  });
  describe('arithmetic.sub', () => {
    test('Should return "null" on non-number values', () => {
      expect(arithmetic.sub('', 3)).toEqual(null);
    });
    test('Should return 1', () => {
      expect(arithmetic.sub(4, 3)).toEqual(1);
    });
  });
});
