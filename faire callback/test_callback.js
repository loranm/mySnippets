var capitalString = 'PARIS'

var shuffle = function(string, size, callback){
 var mixer = [];
 for (var i = 0; i < string.length ; i++){
   mixer.push(string.charAt(i));
 };
  console.log(mixer)
};

shuffle(capitalString,16,generateShuffledArray)


var generateShuffledArray = function(size){
  var range = [];
  range.push.apply(range,mixer)
  var max = 91; 
  var min = 65;
  
  for(var i = 0; i < size ; i++ ){
   var randChar = Math.floor(Math.random()*(max-min+1))+min; 
   range.push(String.fromCharCode(randChar));
  };
  
  console.log(range)
}; 


//generateShuffledArray(16); 
