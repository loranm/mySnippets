var monTableau = [1,2,3,4, 'Laurent']; 
var test = [];

var maFonction = function(data, crit, callback){
  maCallback(data);
  console.log(test)
}


var maCallback = function(tableau, crit){
  for (var i of monTableau){
    test.push(i)
  };
};



maFonction(monTableau,maCallback); 
