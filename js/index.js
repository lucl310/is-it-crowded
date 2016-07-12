var arr{"it is crowded", "it is normal", "it is empty"}
var responses = 0
var mostDemonPoints = 0 
var restlow = function() {
	responses++;
	document.getElementById('score').innerHTML =  + responses + " said that it was crowded";
}
var responses2 = 0
var mostDemonPoints2 = 0
var restmid = function() {
	responses2++;
	document.getElementById('score').innerHTML =  + responses2 + " said that it was normal";
	
}
var responses3 = 0
var mostDemonPoints3 = 0
var resthigh = function() {
	responses3++;
	document.getElementById('score').innerHTML =  + responses3 + " said that it was deserted";
}

onclick(){getElementById arr 0}
var rest1 = function(){
	document.getElementById("title").innerHTML = "Highway Inn";
	document.getElementById("buttons").innerHTML =
		"<buttons onclick='restlow(one)'>Not Crowded</buttons><buttons onclick='restmid(two)'></buttons><buttons onclick='resthigh(three)'>crowded</buttons>"
}


