function Dictionnary(valeursInitiales){
  this.valeurs = valeursInitiales;
}; 


Dictionnary.prototype.store = function(nom, valeur){
  this.valeurs[nom] = valeur; 
}; 


Dictionnary.prototype.lookup = function(nom){
  return this.valeurs[nom];
}; 



var couleurs = new Dictionnary({
  Grover : "bleu", 
  Elmo : "Orange", 
  Bart : "jaune"
})


console.log(couleurs)

console.log(couleurs.lookup("bleu"))
