var button = document.querySelector(".start").addEventListener("click", start)

function start() {
	//Get the day the user selected
	var dayValue = document.querySelector(".date")
	dayValue = new Date(dayValue.value)
	dayValue.getTime()

	dayValue.setHours(dayValue.getHours() + 3)
	
	//Get the current day
	var dayCurrent = new Date()
	dayCurrent.getTime()

	var distance = dayValue - dayCurrent

	var eventName = document.querySelector(".event-name").value
	var h3 = document.querySelector("h3")

	h3.textContent = eventName

	var days = Math.floor(distance / (1000 * 86400))
	var hours = Math.floor((distance % (1000 * 86400)) / (1000 * 60 * 60))
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	var seconds = Math.floor((distance % (1000 * 60)) / 1000)

	document.querySelector(".days").innerHTML = days
	document.querySelector(".hours").innerHTML = hours
	document.querySelector(".minutes").innerHTML = minutes
	document.querySelector(".seconds").innerHTML = seconds

	var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
	var week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

	//Show the choosen date until the event end
	var dateTo = document.querySelector(".demonstration")
	dateTo.textContent = dayValue.getDate() + " de " + months[dayValue.getMonth()] + " de " + dayValue.getFullYear() + ", " + week[dayValue.getDay()]
	
	if (dayValue < dayCurrent) {
		document.querySelector(".days").innerHTML = days
		document.querySelector(".hours").innerHTML = hours
		document.querySelector(".minutes").innerHTML = minutes
		document.querySelector(".seconds").innerHTML = seconds

		dateTo.textContent = "Data inválida"
	}

	var startStopwatch = setInterval(() => {
		start()
	}, 1000)

	if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
		var audio = document.querySelector("audio")
		audio.play()

		alert("Evento Alcançado")

		clearInterval(startStopwatch)
	}
}