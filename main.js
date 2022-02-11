let box = document.querySelectorAll(".box")
let right = document.querySelector("#right")
let left = document.querySelector("#left")
let random = document.querySelector("#random")
let boxes = document.querySelector(".container")
let counter = 0

box[counter].style.display = "block"




right.addEventListener("click", event => {
    box[counter].style.display = "none"
    counter++
    box[counter].style.display = "block"
    console.log(counter)
})
left.addEventListener("click", event => {
    box[counter].style.display = "none"
    counter--
    box[counter].style.display = "block"
    console.log(counter)
})