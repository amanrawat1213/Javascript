
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"
// will give by default the first box
// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

// for applying styling to the elements having box class
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 