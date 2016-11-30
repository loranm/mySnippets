/*
 * Ceci est une ardoise JavaScript.
 *
 * Saisissez du code JavaScript, puis faites un clic droit ou sélectionnez à partir du menu Exécuter :
 * 1. Exécuter pour évaluer le texte sélectionné (Cmd-R),
 * 2. Examiner pour mettre en place un objet Inspector sur le résultat (Cmd-I), ou,
 * 3. Afficher pour insérer le résultat dans un commentaire après la sélection. (Cmd-L)
 */


var table = document.getElementById("DatePreferred").firstChild;
var rowCount = table.rows.length;


for(var i= rowCount - 1; i >= 0; i--) {
    var row = table.rows[i];
    var text = row.cells[0].innerText;
    if(text.indexOf("STRING")!=-1){
        table.deleteRow(i);
    }
};