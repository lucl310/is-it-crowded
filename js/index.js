var responses = 0

var mostDemonPoints = 0

var responses2 = 0

var mostDemonPoints2 = 0

var responses3 = 0

var mostDemonPoints3 = 0

var arr= ["it is crowded", "it is normal", "it is empty"];

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
var four = {
	relow: 0,
	remid: 0,
	rehigh: 0
};
var five = {
	relow: 0,
	remid: 0,
	rehigh: 0
};
var six = {
	relow: 0,
	remid: 0,
	rehigh: 0
};
var seven = {
	relow: 0,
	remid: 0,
	rehigh: 0
};
var eight = {
	relow: 0,
	remid: 0,
	rehigh: 0
};
var nine = {
	relow: 0,
	remid: 0,
	rehigh: 0
};


var restlow = function(re) {
	re.relow++

	//responses++;
	document.getElementById('results').innerHTML = re.relow + " said that it was crowded, "+ re.remid+ " said that it was normal, "+ re.rehigh + " said that it was deserted";
}

var restmid = function(re) {
	re.remid++;
	document.getElementById('results').innerHTML = re.relow + " said that it was crowded, "+ re.remid+ " said that it was normal, "+ re.rehigh + " said that it was deserted";
	
}

var resthigh = function(re) {
	re.rehigh++;
	document.getElementById('results').innerHTML = re.relow + " said that it was crowded, "+ re.remid+ " said that it was normalw "+ re.rehigh + " said that it was deserted";

}

var rest1 = function(re){
	document.getElementById("title").innerHTML = "Highway Inn";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(one)'>crowded</button><button onclick='restmid(one)'>Medium</button><button onclick='resthigh(one)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
}


var rest2 = function(re){
	document.getElementById("title").innerHTML = "jack in the box";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(two)'>crowded</button><button onclick='restmid(two)'>Medium</button><button onclick='resthigh(two)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
;
}
var rest3 = function(re){
	document.getElementById("title").innerHTML = "bucca di beppo";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(three)'>crowded</button><button onclick='restmid(three)'>Medium</button><button onclick='resthigh(three)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
;
}
var rest4 = function(re){
	document.getElementById("title").innerHTML = "morning glass";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(four)'>crowded</button><button onclick='restmid(four)'>Medium</button><button onclick='resthigh(four)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
;
}
var rest5 = function(re){
	document.getElementById("title").innerHTML = "bob's pizza";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(five)'>crowded</button><button onclick='restmid(five)'>Medium</button><button onclick='resthigh(five)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
;
}
var rest6 = function(re){
	document.getElementById("title").innerHTML = "mahina and suns";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(six)'>crowded</button><button onclick='restmid(six)'>Medium</button><button onclick='resthigh(six)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
;
}
var rest7 = function(re){
	document.getElementById("title").innerHTML = "hys steakhouse";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(seven)'>crowded</button><button onclick='restmid(seven)'>Medium</button><button onclick='resthigh(seven)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
;
}
var rest8 = function(re){
	document.getElementById("title").innerHTML = "the pig and the lady";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(eight)'>crowded</button><button onclick='restmid(eight)'>Medium</button><button onclick='resthigh(eight)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
;
}
var rest9 = function(re){
	document.getElementById("title").innerHTML = "old spaghetti factory";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(nine)'>crowded</button><button onclick='restmid(nine)'>Medium</button><button onclick='resthigh(nine)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
;
}


