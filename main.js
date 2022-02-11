let box = document.querySelectorAll(".box")
let right = document.querySelector("#right")
let left = document.querySelector("#left")
let random = document.querySelector("#random")
let btn = document.querySelectorAll(".btn")
let boxes = document.querySelector(".container")
let counter = 0


box[counter].style.display = "block"




right.addEventListener("click", event => {
    box[counter].style.display = "none"
    counter++
    if (counter >= box.length) {
        counter = 0
    }

    box[counter].style.display = "block"

})
left.addEventListener("click", event => {
    box[counter].style.display = "none"
    counter--
    if (counter < 0) {
        counter = 5
    }
    box[counter].style.display = "block"
})
random.addEventListener("click", event => {
    box[counter].style.display = "none"
    counter = (Math.floor(Math.random() * box.length))
    box[counter].style.display = "block"
})

// console.log)