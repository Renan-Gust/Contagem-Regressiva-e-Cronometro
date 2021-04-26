var minutes = document.querySelector(".minutes")
var seconds = document.querySelector(".seconds")
var miliSeconds = document.querySelector(".mili-seconds")

var clockMinutes = 0
var clockSeconds = 0
var clockMiliSeconds = 0

//Start couting
var buttonStart = document.querySelector("button.start")
var buttonPause = document.querySelector("button.pause")
var buttonReset = document.querySelector("button.reset")

var time;

buttonStart.addEventListener("click", () => {
    time = setInterval(() => {
        clockMiliSeconds++
        miliSeconds.innerHTML = clockMiliSeconds

        //Milliseconds
        if (clockMiliSeconds == 100) {

            clockMiliSeconds = 0
            clockSeconds++

            seconds.innerHTML = clockSeconds
        }

        //Seconds
        if (clockSeconds == 60) {
            clockSeconds = 0
            clockMinutes++

            minutes.innerHTML = clockMinutes
        }

        //Minutes
        if (clockMinutes == 60) {
            clockMinutes = 0
        }

    }, 10);

    buttonStart.style.display = "none"
    buttonPause.style.display = "block"    
})

//Pause counting
buttonPause.addEventListener("click", () => {
    clearInterval(time)

    buttonStart.style.display = "block"
    buttonPause.style.display = "none"
})

//Restart counting
buttonReset.addEventListener("click", () => {
    miliSeconds.innerHTML = "00"
    seconds.innerHTML = "00"
    minutes.innerHTML = "00"

    clockMiliSeconds = 0
    clockSeconds = 0
    clockMinutes = 0

    clearInterval(time)

    buttonStart.style.display = "block"
    buttonPause.style.display = "none" 
})