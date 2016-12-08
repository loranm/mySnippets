function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compare(a, b) {
    return a - b;
}

function draw(nb) {
    var stats = [];
    for (var i = 0; i < nb; i++) {
        stats.push(randomizer(0, 100));
    }
    return stats.sort(compare);
}

function sum (arr){
	return arr.reduce(function(a,b){
		return a + b;
	},0);
}

function avg (arr){
	return Math.round(sum(arr) / arr.length);
}
		var arr = draw(3);
    var total = sum(arr);
		var average = avg(arr);

console.log('valeurs' , arr);
console.log('somme ', total);
console.log('moyenne ', average);
