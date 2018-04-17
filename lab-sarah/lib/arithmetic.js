'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (num1, num2) => {
  try {
    if (num1 === '' || typeof num1 !== 'number' || num2 === '' || typeof num2 !== 'number') {
      throw new Error('Inputs must be numbers');
    }
    return num1 + num2;
  } catch (err) {
    console.error(err);
  }
  return null;
};

arithmetic.sub = (num1, num2) => {
  try {
    if (num1 === '' || typeof num1 !== 'number' || num2 === '' || typeof num2 !== 'number') {
      throw new Error('Inputs must be numbers');
    }
    return num1 - num2;
  } catch (err) {
    console.error(err);
  }
  return null;
};
