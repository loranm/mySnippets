function Point(x,y){
  this.x = x;
  this.y = y
}


function Grille(largeur, hauteur){
  this.largeur = largeur;
  this.hauteur = hauteur;
  this.cellules = new Array (largeur * hauteur);
}

Point.prototype.add = function(autre){
  return new Point (this.x + autre.x, this.y + autre.y);
};


Point.prototype.isEqualTo = function(autre){
  return this.x == autre.x && this.y == autre.y;
}


var testGrille = new Grille(3,2)
var counter = 0;
var penible = setInterval(function(){
  counter ++;
  counter <= 10 ?
    console.log("c'est chiant hein ? " + counter) :
    clearInterval(penible);
  }, 400)

console.log(testGrille.cellules)

console.log((new Point(3,1)).add(new Point(2,4)));
