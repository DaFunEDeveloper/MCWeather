"use strict"

var place = prompt("What is Your Zipcode?")

var url = "https://api.openweathermap.org/data/2.5/weather?zip=" + place + ",us&appid=ad0ad46e12935e5d07614976f2b10ef1"

$.ajax ({
	url: url,
	success: function (result){
		console.log(result);
		console.log(result.name)

		$("#location").text(result.name);

		var F = Math.round(result.main.temp * (9/5) -459.67);
		var Farenheit = F.toString();
		$("#temperature").text(Farenheit);

		

		$("#humidity").text(result.main.humidity);
	}
})