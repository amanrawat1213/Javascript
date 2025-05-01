let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

//CONVERT ARRAY TO STRING
// console.log(arr.toString())
// JOIN ARRAY VALUES USING "AND"
// console.log(arr.join(" and "))
// TO WITHDRAW THE LAST ELEMENT OF ARRAY
// console.log(arr.pop())


 
// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3) 
// TO REMOVE THE NUMBERS FROM 1-3 INDEX AND INSERT NUMBERS AT THAT INDEX 
// numbers.splice(1, 3, 222, 333) 


// USING LOOPS IN ARRAY
// let a = [1, 93, 5, 6, 88]


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

// for (const value of a) {
//     console.log(value)
// }


// let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

// MAP FUNCTION
// let newArr = arr.map((e, index, array)=>{
//     return e**2
// })

// console.log(newArr)
// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))

// let arr2 = [1,2,3,4,5,6]

// const red = (a, b)=>{
//     return a+b
// }

// console.log(arr2.reduce(red))