var lapin = {}; 

function parler(tirade){
  console.log("Le lapin " + this.adjectif + " a dit '" + tirade + "'."); 
}; 


var lapinBlanc = {adjectif : "blanc", parler : parler}
var grosLapin = {adjectif : "gras", parler: parler}

grosLapin.parler("je mangerais bien un carotte");
parler.apply(grosLapin, ['Miam']); 
parler.call(grosLapin, "burp");



//fonction constructeur de lapin  

function Lapin(adjectif){
  this.adjectif = adjectif; 
}

var lapinTueur = new Lapin("tueur"); 

Lapin.prototype.dents = "petites";
Lapin.prototype.parler = parler;


function forEachIn(objet, action){
  for (var property in objet){
    if (objet.hasOwnProperty(property))
        action(property, objet[property]);
  }
}


var chimere = {
  visage : "lion", 
  corps : "chevre",
  derriere : "serpent"
}; 


forEachIn(chimere, function(nom, valeur){
  console.log("un " , nom , " de ", valeur)
}); 