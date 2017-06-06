var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var F = 0;
var D = 0;
var C = 0;
var B = 0;
var A = 0;
var highScore = Math.max.apply(null, scores);
var lowScore = Math.min.apply(null, scores);

for(var i = 0; i <= scores.length; i++) {
	if(scores[i] <= 60) {
		F++; 
	} else if (scores[i] <= 70){
		D++;
	} else if (scores[i] <= 80){
		C++;
	} else if (scores[i] <=90) {
		B++;
	} else if (scores[i] <= 100) {
		A++
	}
}

console.log("There are " + F + " F's")
console.log("There are " + D + " D's")
console.log("There are " + C + " C's")
console.log("There are " + B + " B's")
console.log("There are " + A + " A's")
console.log("The highest score is " + highScore)
console.log("The lowest score is " + lowScore)
