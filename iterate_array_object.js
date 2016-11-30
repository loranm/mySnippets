var family1 = {dad:'Tom', mom:'Diane',daughter:'Emily', son:'David'}; 

var family2 = {dad:'Georg', mom:'Jane',daughter:'Piper', son:'John'};

var myArray = [family1, family2];

//affiche le nom de chaque propriété d'un objet
for (prop in family1){
  console.log('property is = ' + prop);
}; 

//affiche la valeur de chaque objet
for (prop in family1){
  console.log('value is = ' + family1[prop]);
}; 


//affiche les objets du tableau
for (i of myArray){
  console.log('i of myArray')
  console.log(i);//chaque objet du tableau
}; 

//affiche les valeurs objets dans un tableau 
myArray.forEach(function(i,index){
  for (prop in i){
    console.log(i[prop]);
  }
})