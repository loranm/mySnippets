(function() {
    "use strict";

    //Créer une classe d'objet
    class Classe{

      constructor (name = 'CM2'){

        this.eleves = ['jean', 'marc', 'francine'],
        this.nom = name
      }
      afficheEleves() {
        console.log('Les élèves de la classe ', this.nom)
        this.eleves.forEach(el => {
          console.log(el)
        })
      }
    }


    let cm2 = new Classe()
    let cm1 = new Classe('CM1')

    cm2.afficheEleves();
    cm1.afficheEleves()


    // le spread operator

    class Classe2 {
      constructor (name = 'CM2', ...eleves){
        this.eleves = eleves;
        this.nom = name
      }
      afficheEleves() {
        console.log('Les élèves de la classe ', this.nom)
        this.eleves.forEach(el => {
          console.log(el)
        })
      }
    }



    //autre exemple
    let tab1 = ['teemo', 'volibear'];
    let tab2 = ['darius', 'varus', ... tab1] //on copie le tableau 1 dans le 2
    console.log(tab2)

    let newCm2 = new Classe2('CM1',...tab2 ); // on passe le tab2 en paramètre de l'instanciation de l'objet
    newCm2.afficheEleves();

    //spread fonctionne aussi avec les string
    let myStr = 'azerty'
    console.log(...myStr)

    //backtick

    class Classe3 extends Classe2 {
      // constructor (name = 'CM2', ...eleves){
      //   this.eleves = eleves;
      //   this.nom = name
      // }
      afficheEleves() {
        console.log(`Les élèves de la classe
          ${this.nom}`) //avec un saut de ligne possible grâce au backtick
        this.eleves.forEach(el => {
          console.log(el)
        })
      }
    }

    let backtick = new Classe3('backtick',...tab2);
    backtick.afficheEleves();


})();
