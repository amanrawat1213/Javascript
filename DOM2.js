console.log("Hello world")
// test these in the console
// this will give all the childnodes of the document including the space that is in between the elements
// document.childNodes
// another example :document.body.childNodes
// document.body.firstChild

// we can alos access the nodes or elements by storing them in variables.
// let cont=document.body.childNodes[1]
// cont.firstChild


// the main problem with firstchild and child nodes is they consider text as nodes or children so to eliminate this problem 
// below selector

// document.body.firstElementChild.style.backgroundColor="red"
// document.body.lastElementChild.style.backgroundColor="green" 
// document.body.firstElementChild.childNodes 
// document.body.firstElementChild.children
// document.body.firstElementChild.children[1]
// document.body.firstElementChild.children[1].style.backgroundColor="green" 
// document.body.firstElementChild

// for maipulating tables:as table was the 2nd child of body so we can directly apply methods of table
// document.body.children[1].rows 
