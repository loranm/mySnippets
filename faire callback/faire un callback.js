/*
 * Ceci est une ardoise JavaScript.
 *
 * Saisissez du code JavaScript, puis faites un clic droit ou sélectionnez à partir du menu Exécuter :
 * 1. Exécuter pour évaluer le texte sélectionné (Cmd-R),
 * 2. Examiner pour mettre en place un objet Inspector sur le résultat (Cmd-I), ou,
 * 3. Afficher pour insérer le résultat dans un commentaire après la sélection. (Cmd-L)
 */

var maFonction = function(data,callback){

  var maVar2 = callback(data);
  var maVar = 'laurent';
  return maVar + maVar2
};


var x = 0;

var fonctionCallback = function(value){
  for (var i = 0; i < value; i++){
   x += i;
  }
  return x
}; 





console.log(maFonction(100,fonctionCallback)); 

/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:10
*/
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:25
*/