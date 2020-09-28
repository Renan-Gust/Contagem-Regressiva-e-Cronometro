var stopwatch = document.querySelector(".stopwatch")

stopwatch.addEventListener("click", () => {
    stopwatch.style.background = "rgba(204, 204, 204, 0.226)"
    stopwatch.style.borderTop = "1px solid #ccc"

    cronomether.style.background = "none"
    cronomether.style.borderTop = "none"
})

var cronomether = document.querySelector(".cronomether")

cronomether.addEventListener("click", () => {
    cronomether.style.background = "rgba(204, 204, 204, 0.226)"
    cronomether.style.borderTop = "1px solid #ccc"

    stopwatch.style.background = "none"
    stopwatch.style.borderTop = "none"
})

