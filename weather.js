"use strict"

var place = prompt("What is Your Zipcode?")

var url = "https://api.openweathermap.org/data/2.5/weather?zip=" + place + ",us&appid=ad0ad46e12935e5d07614976f2b10ef1"

$.ajax ({
	url: url,
	success: function (result){
		console.log(result);
		console.log(result.name)

		$("#location").text(result.name);
		$("#location1").text(result.name);

		var F = Math.round(result.main.temp * (9/5) -459.67);
		var Farenheit = F.toString();
		$("#temperature").text(Farenheit);

		var temp = Farenheit;


		$("#humidity").text(result.main.humidity);

		var hum = result.main.humidity;

		if(temp > 69) {
			$("#trate").text("warm");
			if(hum < 65) {
				$("#biome").text("Desert");
				$("#biome1").text("desert");
				$("#hrate").text("low");
			}
			if(hum > 89) {
				$("#biome").text("Jungle");
				$("#biome1").text("jungle");
				$("#hrate").text("high");
			}

			if(hum <= 89) {
				if(hum >= 65) {
				$("#biome").text("Plains");
				$("#biome1").text("plains");
				$("#hrate").text("mild");
			}

			}
		}

		if(temp < 50) {
			$("#trate").text("cool");
			if(hum < 65) {
				$("#biome").text("Mountains");
				$("#biome1").text("mountains");
				$("#hrate").text("low");
			}
			if(hum > 89) {
				$("#biome").text("Tundra");
				$("#biome1").text("tundra");
				$("#hrate").text("high");
			}

			if(hum <= 89) {
				if(hum >= 65) {
				$("#biome").text("Taiga");
				$("#biome1").text("taiga");
				$("#hrate").text("mild");
			}

			}
		}
		if(temp <= 69) {
				if(temp >= 50) {
			$("#trate").text("mild");
			if(hum < 85) {
				$("#biome").text("Plains");
				$("#biome1").text("plains");
				$("#hrate").text("low");
			}
			if(hum >= 85) {
				$("#biome").text("Swamp");
				$("#biome1").text("swamp");
				$("#hrate").text("high");
			}
		}
	}
}
})