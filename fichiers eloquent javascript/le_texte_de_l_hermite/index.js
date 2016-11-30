window.addEventListener("DOMContentLoaded", function(){
  console.log("document chargé");


  function forEach(tableau, action){
    for(var i = 0; i <tableau.length; i++){
      action(tableau[i]);
    };
  };

  function fichierDeErmite(){
    var text = "% Le livre de programmation\n\n%% Les deux points de vue\n\nSous la surface de la machine, le programme évolue. Sans effort, il\nprend de l'ampleur et se contracte. Avec beaucoup d'harmonie, les\nélectrons se dispersent et se regroupent. Les formes sur le moniteur\nne sont que l'écume de la vague.\n\nQuand les créateurs ont construit la machine, ils y ont mis un\nprocesseur et de la mémoire. À partir de là surgissent les deux\npoints de vue sur le programme.\n\nDu côté du processeur, l'élément actif est appelé Contrôle. Du côté\nde la mémoire, l'élément passif est appelé Données.\n\nLes données sont faites de simples bits, et pourtant elles prennent\ndes formes complexes. Le contrôle consiste en de simples instructions\net pourtant il exécute des tâches difficiles, de la plus petite et la\nplus triviale, à la plus grande et la plus compliquée.\n\nLe programme source est la donnée. Le Contrôle y naît. Le Contrôle va\nensuite s'employer à créer de nouvelles données. L'un naît de\nl'autre, l'un ne sert à rien sans l'existence de l'autre. C'est le\ncycle harmonieux des Données et du Contrôle.\n\nPar nature, les Données et le Contrôle sont sans structure. Les\nprogrammeurs de la vieille école mijotaient leurs programmes à partir\nde cette soupe primitive. Le temps passant, les Données amorphes se\nsont cristallisées en de nouveaux types de données et le Contrôle\nchaotique a été restreint aux structures de contrôle et aux\nfonctions.\n\n%% Petits proverbes\n\nQuand un étudiant a questionné Fu-Tzu sur la nature du cycle des\nDonnées et du Contrôle, Fu-Tzu répondit « Pensez à un\ncompileur en train d'essayer de se compiler. »\n\nUn étudiant demanda : « Les programmeurs de la vieille école\nutilisaient des machines simples et pas de langages de programmation\net pourtant ils concevaient de beaux programmes. Pourquoi\nutilisons-nous des machines compliquées et des langages de\nprogrammation ? » Fu-Tzu répondit : « Les bâtisseurs d'autrefois\nutilisaient seulement des bâtons et de l'argile et pourtant ils\nfaisaient des cabanes magnifiques. »\n\nUn ermite passa dix ans à écrire un programme. « Mon programme peut\ncalculer le mouvement des étoiles sur un ordinateur 286 qui fait\ntourner MS DOS » annonça t-il fièrement. « Personne ne possède un\nordinateur 286 ou ne l'utilise aujourd'hui » répondit-il.\n\nFu-Tzu avait écrit un petit programme qui était plein de variables\nglobales et de raccourcis douteux. En le lisant, un étudiant demanda\n« Vous nous avez mis en garde contre ces techniques, et pourtant je\nles ai trouvées dans ce programme. Comment cela se fait-il ? » Fu-Tzu\nrépondit : « Il n'y a pas besoin d'aller chercher un tuyau d'arrosage\nquand la maison n'est pas en feu. » {Cela ne doit pas se lire comme\nun encouragement à faire du code de mauvaise qualité, mais comme un\navertissement contre une adhésion servile à la règle d'or.}\n\n%% Sagesse\n\nUn étudiant se plaignait des valeurs numériques. « Quand je prend\nla racine de deux et que je veux de nouveau son carré, le résultat est\ninexact ! ».\nEn entendant cela, Fu-Tzu rit. « Voici une feuille de papier.\nÉcrivez-moi la valeur précise de la racine de deux. »\n\nFu-Tzu dit : « Quand vous sciez du bois contre le fil, beaucoup\nd'huile de coude est nécessaire. Quand vous programmez contre le\nsens, beaucoup de code est nécessaire. »\n\nTzu-li et Tzu-ssu se vantaient de la taille de leur programmes.\n« Deux cents mille lignes », dit Tzu-li, « sans compter les\ncommentaires ! ». « Psah », dit Tzu-ssu, « le mien fait presque\nun *million* de lignes déjà. » Fu-tzu dit « Mon meilleur\nprogramme fait cinq cents lignes. » En entendant cela, Tzu-li\net Tzu-ssu furent éclairés.\n\nUn étudiant était resté assis immobile derrière son ordinateur\npendant des heures, en ruminant furieusement. Il était en train\nd'essayer de concevoir une solution élégante en réponse à un\nproblème difficile, mais il ne pouvait pas trouver le bon moyen\nde le faire. Fu-tzu le frappa sur l'arrière de la tête, et cria\n« tape quelque chose ! » L'étudiant se mit à écrire un code\ndégueulasse. Quand il eut terminé, il comprit tout à coup quelle\nétait la solution simple.\n\n%% Progression\n\nUn programmeur débutant écrit un programme à la manière d'une\nfourmis qui construit sa fourmilière, sans même penser à la\nstructure finale. Ses programmes seront comme des grains de\nsable fin. Ils peuvent tenir un moment, mais en devenant plus\ngros ils tombent {en référence aux dangers d'une\nincompatibilité interne et aux structures dupliquées dans un\ncode en désordre.}.\n\nEn prenant conscience de ce problème, le codeur commencera à\npasser plus de temps à réfléchir à la structure. Ses programmes\nseront structurés rigidement, à la manière\nde sculptures de pierre. Ils sont solides, mais quand ils doivent\nchanger, on doit leur faire violence {en référence au fait\nque la structure a tendance à brider l'évolution du\nprogramme.}.\n\nLe programmeur expérimenté sait quand la structure est\nimportante, et quand il doit laisser les choses telles quel.\nSes programmes sont comme de l'argile, à la fois solide et\nmalléable.\n\n%% Langage\n\nQuand un langage de programmation est créé, on lui donne une\nsyntaxe et des règles sémantiques. La syntaxe décrit la\nforme du programme, la sémantique décrit la fonction. Quand\nla syntaxe est belle et que les règles sont claires, le\nprogramme sera un arbre majestueux. Quand la syntaxe est\nmaladroite et que les règles sont confuses, le programme\nsera comme un tas de ronces.\n\nOn demanda à Tzu-ssu d'écrire un programme dans un langage\nappelé Java qui adopte une approche vraiment primitive avec\nles fonctions. Tous les matins, au moment où il s'asseyait\nen face de son ordinateur, il commençait à se plaindre.\nToute la journée il jurait, accusant le langage pour tout\nce qui se passait mal. Fu-tzu écouta pendant un moment,\npuis lui fit des reproches en lui disant « Chaque langage\na sa philosophie. Suis son dessein, n'essaye pas de coder\ncomme si tu  utilisais un autre langage de programmation."
    return text;
  }



  // function somme(nombres){
  //   var total = 0;
  //   forEach(nombres, function(nombre){
  //     total += nombre;
  //   });
  //   return total;
  // }

  function negate(func){
    return function(x){
      return !func(x);
    };
  }
  var isNotNaN = negate(isNaN);
  var mesNombres = [1,10,100,Math.PI];


  function reduce(combiner, base, tableau){
    forEach(tableau, function(element){
      base = combiner (base, element);
    });
  };


  function ajouter(a, b){
    return a + b;
  };

  function somme(nombres){
    return reduce(ajouter, 0, nombres)
  }

  function map(func, tableau){
    var resultat = [];
    forEach (tableau, function(element){
      resultat.push(func(element))
    })

    return resultat;
  }





function transformeParagraphe(paragraphe){
  var entete = 0;
  while (paragraphe.charAt(0) == "%"){
    paragraphe = paragraphe.slice(1);
    entete ++
  };
  return {type: (entete == 0 ? "p" : "h"+entete),
          contenu : paragraphe}
};

var paragraphes = map(transformeParagraphe,fichierDeErmite().split("\n\n"));

function extraitNotesBasDePage(paragraphes){
  var noteBasDePage = [];
  var noteEnCours = 0;

  function remplaceNoteBaseDePage(fragment){
    if (fragment.type == "noteBasDePage"){
      noteEnCours ++;
      noteBasDePage.push(fragment);
      fragment.numero = noteEnCours;
      return {type : "reference", numero : noteEnCours };
    }
    else {
      return fragment;
    }
  }

  forEach(paragraphes, function(paragraphe){
    paragraphe.contenu = map(remplaceNoteBaseDePage, paragraphe.contenu);
  });

  return notesBasDePage;
};


console.log(paragraphes)


function balise(nom, contenu, attributs){
  return {
    nom: nom,
    contenu : contenu,
    attributs : attributs
  };
};

function lien(cible, texte){
  return balise("a", [texte], {href: cible});
};

function image(src, altTexte){
  return balise("img",[altTexte], {srs : src})
}

function documentHTML(titre, contenu){
  return balise("html", [balise("head", [balise("title", [titre])], balise("body",contenu))]);
};


function renduHTML(element){
  var pieces = [];

  function renduAttributs(attributs){
    var resultat = [];
    if (attributs);{
      for (var nom in attributs){
        resultat.push (" " + nom + "=\"" + escapteHTML(attributs[nom]+ "\""));
      }
      return resultat.join("");
    }
  }

  function rendu(element){
    //Element texte
    if (typeof element == "string"){
      pieces.push(escapteHTML(element));
    }
  };

}


});
