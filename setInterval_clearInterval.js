var counter = 0;
var clickid
function timer(){
	counter++
	if (counter < 15){
	var maintenant = new Date(); 
	console.log(maintenant.getSeconds());

	}else {
		console.log('fin');
		stopclicker()
	};
};

function clicker(){
	clickid = setInterval(timer,1000)
}

function stopclicker(){
	clearInterval(clickid);
};


clicker();
