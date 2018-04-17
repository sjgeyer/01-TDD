'use strict';

const greet = module.exports = {};

greet.hello = (name) => {
  try {
    if (name === '' || typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    return `hello ${name}`;
  } catch (err) {
    console.error(err);
  }
  return null;
};
