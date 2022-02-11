let bcolors = ["red", "blue", "yellow", "orange", "green", "indigo"]
let box = document.querySelectorAll(".box")
let red = document.querySelector("#red")

for (i = 0; i < bcolors.length; i++) {
    bgcolor = (bcolors[i])
    bcolors = bgcolor.slice(-1)

    console.log(bgcolor)
}


// box.forEach(box => {
//     box.style.backgroundColor = bcolors

// });

console.log(box[1])