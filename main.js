let box = document.querySelectorAll(".box")
let right = document.querySelector("#right")
let boxes = document.querySelector(".container")
let counter = 0
box[counter].style.display = "block"


// console.log(box[counter])


// red.style.display = "block"

right.addEventListener("click", event => {
    box[counter].style.display = "none"
    counter++
    box[counter].style.display = "block"
    console.log(counter)
})