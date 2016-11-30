var myObject = {
  name : "Jack B Nimble",
  goto : "Jail",
  grade : "A",
  level : 3
}


//OR MAKER FUNCTION

function maker (name, where, grade, level){
  var it = {};
  it.name = name;
  it.goto = where;
  it['grade'] = grade;  //other way to type it
  it.level = level;
  return it;
}

myObject = maker("Jack B Nimble", "Jail","A", 3)


console.log(myObject)


//Inheritance
var myNewObject = Object.create(myObject);

function compare (objet1, objet2){
  return objet1 === objet2;
};

delete myObject.name;

console.log(myNewObject.name)
