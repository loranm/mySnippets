(function(){
	var nums = [1,2,3,4];
	var myArr = ['laurent','virginie','lison'];
	var arrOfObj = [{prenom: 'lison','age': 1},{prenom:'virginie'},{prenom:'lison'}];

	var newArr = myArr.map(function(a){
		return a;
	});

	var newArrWithIndex = myArr.map(function(a, index){
		return index + ' - ' + a;
	});

	var myArrFiltered = myArr.filter(function(a){
		return a === 'lison' || a === 'virginie'
	})

	var onlyLison = myArr.filter(function(a){
		return a === 'lison' ;
	});

	var sum = nums.reduce(function(a,b){
		return a + b;
	});

	var complex = nums.map(function(a){
		return a*3; //3,6,9,12
	})
	.filter(function(a){
		return a % 2 === 0//6,12
	})
	.reduce (function(a,b){
		return a * b//72
	})


var withObj = arrOfObj.map(function(a,i){
	return Object.keys(a)[0] + ' - ' + a.prenom
})


	console.log('myArr', newArr);
	console.log('myArrFiltered', myArrFiltered)
	console.log('with index : ',newArrWithIndex)
	console.log('sum : ', sum);
	console.info('complex : ', complex)
	console.log('with objects : ', withObj);
	console.log('using completion in console : %s' , myArrFiltered)
})();
