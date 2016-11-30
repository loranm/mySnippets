var range = [];
for(var i = 65; i < 91; i++)
{
 range.push(String.fromCharCode(i));
}
//range = range.join(','); //pour générer une string

var amIInTheArray = function(value){
  if(range.indexOf(value) == -1){
    return false; 
  }else{
    return true; 
  }
}

console.log(range)


console.log(amIInTheArray('d')); 
