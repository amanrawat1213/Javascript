// Note
// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.
// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.
// Global Scope
// Variables declared with the var always have Global Scope.

// var a=24;

// console.log(a);
// {
//     console.log(a);
// }

// Variables defined with var can be redeclared.
// var x = "John Doe";

// var x = 0;
// console.log(x);


// Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:

// Example
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

console.log(x);
// Here x is 2