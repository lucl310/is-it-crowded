var arr= ["it is crowded", "it is normal", "it is empty"];

var one = {
	relow: 0,
	remid: 0,
	rehigh: 0
};
var two = {
	relow: 0,
	remid: 0,
	rehigh: 0
};
var three = {
	relow: 0,
	remid: 0,
	rehigh: 0
};

var responses = 0
var mostDemonPoints = 0 
var restlow = function(re) {
	re.relow++

	//responses++;
	document.getElementById('results').innerHTML = re.relow + " said that it was crowded";
}
var responses2 = 0
var mostDemonPoints2 = 0
var restmid = function(re) {
	responses2++;
	document.getElementById('results').innerHTML = responses2 + " said that it was normal";
	
}
var responses3 = 0
var mostDemonPoints3 = 0
var resthigh = function(re) {
	responses3++;
	document.getElementById('results').innerHTML = responses3 + " said that it was deserted";
}

var rest1 = function(){
	document.getElementById("title").innerHTML = "Highway Inn";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(one)'>crowded</button><button onclick='restmid(one)'>Medium</button><button onclick='resthigh(one)'>not crowded</button>";
	document.getElementById("results").innerHTML = one.relow+"said it was not crowded";
}


