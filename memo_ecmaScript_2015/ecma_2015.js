//déclarer une variable

let myVar = [1,2,3]
const PI = 3.14159

// let n'est déclarée que dans son contexte

//Oondition
if( [1,2,3].length == 2){
  let test = "ok ";
}
if( [1,2,3].length == 2){
  var test2 = "ok ";
}

// test est undefined
console.log('nope' || test) //test n'existe pas
console.log(test2) // test2 est undefined (il est défini globalement)


//Boucle

for (var l in [1,2,3]){
  //
}

for (let m in [1,2,3]){
  //
}

console.log('l : ', l);
console.log('m : ', 'nope' || m)//undefined


// PI = 4
console.log(PI) // erreur

//Fonctions fléchées

let prenoms = ['jean','marc','francine']

prenoms.forEach(function(el){
  console.log(el);
})

//ES6
prenoms.forEach((el,k) => console.log(k , el))


prenoms.forEach((el,k) => {
  k = k *2;
  console.log(k , el)
})


//this
var classe = {
  eleves : ['jean','marc','francine'],
  nom: 'CM2',
  afficheEleves : function(){
    this.eleves.forEach(function(el){
      console.log(this.nom) // renvoie undefined car this est dans le contexte de la méthode
    });
  }
}

var classe2 = {
  eleves : ['jean','marc','francine'],
  nom: 'CM2',
  afficheEleves (){ //détecte automtiquement qu'il s'agit d'une méthode dont le nom est afficheEleves
    this.eleves.forEach((el) =>
      console.log(this.nom) // avec les fonctions fléchées this correspond au contexte parent
    );
  }
}


classe.afficheEleves()
classe2.afficheEleves()


//return automatique

prenoms.map(el => 'Mr ' + el)



let a = 2
let b = 3
let c = {a,b}
console.log(c) // {a : 2, b : 3}


//Chaine de caractère
let chaine = 'azertyteemouiop'

function isIn (chaine,crit) {
  return chaine.includes(crit)
};

console.log(isIn(chaine,'teemo'))
