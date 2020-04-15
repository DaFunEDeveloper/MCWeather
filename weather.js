"use strict"

const url = "https://api.openweathermap.org/data/2.5/weather?q=rochester+hills&appid=ad0ad46e12935e5d07614976f2b10ef1"

$.ajax ({
	url: url,
	success: function (result){
		console.log(result);
		console.log(result.name)

		$("#location").text(result.name);

		var F = Math.round(result.main.temp * (9/5) -459.67);
		var Farenheit = F.toString();
		$("#temperature").text(Farenheit);

		var windSpeed = Math.round(result.wind.speed / .44704);
		var wind = windSpeed.toString();
		$("#wind").text(wind)

		$("#sky").text(result.weather[0].description);
	}
})