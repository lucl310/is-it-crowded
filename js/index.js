var b
var responses = 0
var press = function() {
	responses++;
	document.getElementById('score').innerHTML =  + responses + " said that it was crowded";
	if (demonPoints > mostDemonPoints) {
		document.getElementById('highscore').innerHTML = "New high score: " + demonPoints + " points";
	}
}


var rest1 = function(){
	document.getElementById("title").innerHTML = "A Place to Eat";
	document.getElementById("buttons").innerHTML =
		"<buttons onclick='rest1low()'>Not Crowded</buttons><buttons onclick='rest1low()'>Not Crowded</buttons><buttons onclick='rest1low()'>Not Crowded</buttons>"
}