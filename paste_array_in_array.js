

var myNumber = [1,2,3,4]; 
var myNames = ['lison', 'Virginie','laurent']; 

var myNewArray = []; 
myNewArray.push.apply(myNewArray, myNumber);
myNewArray.push.apply(myNewArray, myNames)

console.log(myNewArray)


