var stopwatch = document.querySelector(".stopwatch")
var cronomether = document.querySelector(".cronomether")

stopwatch.addEventListener("click", () => {
    document.querySelector("header h1.stopwatch").classList.add("selected")
    document.querySelector("header h1.cronomether").classList.remove("selected")
})

cronomether.addEventListener("click", () => {
    document.querySelector("header h1.stopwatch").classList.remove("selected")
    document.querySelector("header h1.cronomether").classList.add("selected")
})