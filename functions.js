// function nice(name) {
//     console.log("Hey " + name + " you are nice!")
//     console.log("Hey " + name + " you are good!")
//     console.log("Hey " + name + " your tshirt is nice!")
//     console.log("Hey " + name + " your course is good too!")
// }
// nice("aman")
// nice("shivansh")

// function sum(a, b, c = 3) {
//     // console.log(a + b)
//     console.log(a, b, c)
//     return a + b + c
// }



// result1 = sum(3, 2)
// result2 = sum(7, 5)
// result3 = sum(3, 13, 1)

// console.log("The sum of these numbers is: ", result1)
// console.log("The sum of these numbers is: ", result2)
// console.log("The sum of these numbers is: ", result3)

// The JavaScript Array forEach() method is a built-in function that executes a provided function once for each array element. 
// It does not return a new array and does not
//  modify the original array. It’s commonly used for iteration and performing actions on each array element.
// array.forEach(callback(element, index, arr), thisValue);
// callback	It is a callback function executes on each array element.
// element	The current element being processed in the array.
// index (Optional)	The index of current element. The array indexing starts from 0.
// array (Optional)	The array on which forEach() is called.
// thisArg (Optional)	Value to use as this when executing the callback function.

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//     console.log(item);
// });
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }


// // An Arrow Function in JavaScript, introduced in ES6, offers a concise syntax for defining 
// function expressions using =>. It maintains lexical `this` binding and provides shorter, more readable code 
// compared to traditional functions. Arrow functions enhance code structure by simplifying function syntax 
// without sacrificing functionality or clarity.

// with arrow function we can send the variable or function directly to another function as an argument
// const func1 = (x)=>{
//     console.log("I am an arrow function", x)
// }

// func1(34);
// func1(66);
// func1(84);