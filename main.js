let bcolors = ["red", "blue", "yellow", "orange", "green", "indigo"]
let box = document.querySelectorAll(".box")
let red = document.querySelector("#red")



box.forEach(box => {
    for (i = 0; i < bcolors.length; i++) {
        box.style.backgroundColor = bcolors[i]
        console.log(bcolors[i])

    }

});