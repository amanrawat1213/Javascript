let a = 1;
// Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }

// let obj = {
//     name: "Harry",
//     role: "Programmer",
//     company: "CodeWithHarry AI"
// }
// The JavaScript for in statement loops through the properties of an Object:
// for (const key in obj) {  
//         console.log(key)
// }
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// for (const c of "Harry") {
//     console.log(c)
// }

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);