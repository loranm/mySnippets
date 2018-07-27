(function () {
	"use strict";
	const generateArray = iterations  => {
		return new Array(iterations)
			.fill(null)
			.map((value, index) => value = index);
	}

	const isFizz = value => value % 3 === 0;
	const isBuzz = value => value % 5 === 0;
	const isFizzBuzz = value => isBuzz(value) && isFizz(value);
	
	const generateFizzBuzzArray = array => { 
		return array.map(el => {
			if (isFizzBuzz(el)) return 'fizzbuzz'
			if (isFizz(el)) return 'fizz'
			if (isBuzz(el)) return 'buzz'
			return el
		})
	}
	
	const fizzBuzz = generateFizzBuzzArray(generateArray(100))

	console.warn(fizzBuzz);

})();
