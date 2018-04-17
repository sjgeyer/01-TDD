# 01: Node Ecosystem
**Author**: Sarah Geyer <br/>
**Version**: 1.0.0

## Overview
This application's functionality includes returning the string 'hello NAME' using an input as the value of NAME, as well as returning the sum or difference of two numbers.

## Getting Started
To build this application, you must first initialize the project in Node and install the dependencies for Babel, Jest, and AirBnb linter. Then you must create the test conditions, testing for null and valid values, starting with the greet function. You then have to create the greet function to take in a value and return a hello statement. Then the user can repeat those steps for the arithmetic add and sub tests and functions.

## Architecture
 This application uses JavaScript, NodeJS, Babel, the AirBnB linter and Jest.
 
## Function Descriptions
- *Greet.js*: The exported value is an object containing the function greet.hello (arity of 1) which takes in a single 'name' parameter as a string and returns the string 'hello NAME'. If the input is not a string or is empty, the function will return 'null'.
- *Arithmetic.js*: The exported value is an object containing two functions, arithmetic.add and arithmetic.sum.
    - *arithmetic.add*: Arity of 2, takes in two numbers as an input and returns the sum of those numbers as a number. If either of the inputs are empty or not a number, the function will return 'null'.
    - *arithmetic.sub*: Arity of 2, takes in two numnbers as an input and returns the number value of the first number minus the second number. If either of the inputs are empty or not a number, the function will return 'null'.

## Change Log
- 04-17-2018 09:00 - Application is populated with all config files.<br/>
- 04-17-2018 09:30 - Application has greet.test.js and greet.js; greet.hello passing all test. <br/>
- 04-17-2018 10:00 - Application has arithmetic.test.js and greet.js; greet.hello passing all test. <br/>

## Credits and Collaborations
- Judy Vue for demoing the try/catch functionalities. <br/>
- Vinicio/Code Fellows for the .eslintrc.json, package.json, .babelrc, and .eslintignore files. <br/>
- https://www.gitignore.io for the .gitignore file contents.