// The let keyword was introduced in ES6 (2015)


// Variables declared with let must be Declared before use

let a=10;
console.log(a);

// Variables declared with let have Block Scope
{
    let a=11;
    console.log("block scope",a);
}




// Variables declared with let cannot be Redeclared in the same scope
let b=10;
let b=10+1;
console.log(b);