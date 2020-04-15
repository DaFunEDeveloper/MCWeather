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

		var temp = Farenheit;


		$("#humidity").text(result.main.humidity);

		var hum = result.main.humidity;

		if(temp > 69) {
			if(hum < 65) {
				$("#biome").text("Desert");
			}
			if(hum > 89) {
				$("#biome").text("Jungle");
			}

			if(hum <= 89) {
				if(hum >= 65) {
				$("#biome").text("Plains");
			}

			}
		}

		if(temp < 50) {
			if(hum < 65) {
				$("#biome").text("Mountains");
			}
			if(hum > 89) {
				$("#biome").text("Tundra");
			}

			if(hum <= 89) {
				if(hum >= 65) {
				$("#biome").text("Taiga");
			}

			}
		}
		if(temp <= 89) {
				if(temp >= 65) {
			if(hum < 85) {
				$("#biome").text("Plains");
			}
			if(hum >= 85) {
				$("#biome").text("Swamp");
			}
		}
	}
}
})