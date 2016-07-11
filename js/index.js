var responses = 0
var mostDemonPoints = 0
var press = function() {
	responses++;
	document.getElementById('score').innerHTML =  + responses + " said that it was crowded";
	if (responses > mostDemonPoints) {
		document.getElementById('highscore').innerHTML = + responses + " said that it was crowded";
	}
}
var responses2 = 0
var mostDemonPoints2 = 0
var press = function() {
	responses2++;
	document.getElementById('score').innerHTML =  + responses2 + " said that it was normal";
	if (responses2 > mostDemonPoints2) {
		document.getElementById('highscore').innerHTML = + responses2 + " said that it was normal";
	}
}
var responses3 = 0
var mostDemonPoints3 = 0
var press = function() {
	responses3++;
	document.getElementById('score').innerHTML =  + responses3 + " said that it was deserted";
	if (responses3 > mostDemonPoints3) {
		document.getElementById('highscore').innerHTML = + responses3 + " said that it was deserted";
	}
}


var rest1 = function(){
	document.getElementById("title").innerHTML = "A Place to Eat";
	document.getElementById("buttons").innerHTML =
		"<buttons onclick='rest1low()'>Not Crowded</buttons><buttons onclick='rest1low()'>Not Crowded</buttons><buttons onclick='rest1low()'>Not Crowded</buttons>"
}

var loop = function(){
	for (var i = 0; i < 10; i++) {
		console.log("The number is "+i);
	}
}

loop();