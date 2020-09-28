var hours = document.querySelector(".hours")
var minutes = document.querySelector(".minutes")
var seconds = document.querySelector(".seconds")
var miliSeconds = document.querySelector(".mili-seconds")

var clockHours = 0
var clockMinutes = 0
var clockSeconds = 0
var clockMiliSeconds = 0

//Iniciar a Contagem
var buttonStart = document.querySelector(".start")

var time;

buttonStart.addEventListener("click", () => {
    time = setInterval(() => {
        clockMiliSeconds++
        miliSeconds.innerHTML = clockMiliSeconds

        //Milissegundos
        if (clockMiliSeconds == 100) {

            clockMiliSeconds = 0
            clockSeconds++

            seconds.innerHTML = clockSeconds
        }

        //Segundos
        if (clockSeconds == 60) {
            clockSeconds = 0
            clockMinutes++

            minutes.innerHTML = clockMinutes
        }

        //Minutos
        if (clockMinutes == 60) {
            clockMinutes = 0
            clockHours++

            hours.innerHTML = clockHours
        }

    }, 10);
        
})

//Resetar contagem
var buttonReset = document.querySelector(".reset")
buttonReset.addEventListener("click", () => {
    miliSeconds.innerHTML = "00"
    seconds.innerHTML = "00"
    minutes.innerHTML = "00"
    hours.innerHTML = "00"

    clockMiliSeconds = 0
    clockSeconds = 0
    clockMinutes = 0
    clockHours = 0

    clearInterval(time)
})







