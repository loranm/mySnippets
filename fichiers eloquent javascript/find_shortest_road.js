var routes = {
};
var Break = {
  toString: function () {
    return 'Break';
  }
};

function forEach(tableau, action) {
  try {
    for (var i = 0; i < tableau.length; i++) {
      action(tableau[i])
    };
  }
  catch (exception){
    if (exception != Break){
      throw exception;
    };
  };
};

function creerRoute(depart, arrivee, distance) {
  function ajouterRoute(depart, arrivee) {
    if (!(depart in routes))
    routes[depart] = [
    ];
    routes[depart].push({
      arrivee: arrivee,
      distance: distance
    });
  }
  ajouterRoute(depart, arrivee);
  ajouterRoute(arrivee, depart);
}
function creerRoutes(depart) {
  for (var i = 1; i < arguments.length; i += 2) {
    creerRoute(depart, arguments[i], arguments[i + 1]);
  };
}
creerRoutes('Point Kiukiu', 'Hanaiapa', 19, 'Mont Feani', 15, 'Taaoa', 15);
creerRoutes('Airport', 'Hanaiapa', 6, 'Mont Feani', 5, 'Atuona', 4, 'Mont Ootua', 11);
creerRoutes('Mont Temetiu', 'Mont Feani', 8, 'Taaoa', 4);
creerRoutes('Atuona', 'Taaoa', 3, 'Hanakee pearl lodge', 1);
creerRoutes('Cemetery', 'Hanakee pearl lodge', 6, 'Mont Ootua', 5);
creerRoutes('Hanapaoa', 'Mont Ootua', 3);
creerRoutes('Puamua', 'Mont Ootua', 13, 'Point Teohotepapapa', 14);

function routesDepuis(lieu) {
  var trouve = routes[lieu];
  if (trouve == undefined) {
    throw new Error('Aucun lieu nommé ' + lieu + ' trouvé');
  } else {
    return trouve
  }
}
function member(tableau, valeur) {
  var trouve = false;
  forEach(tableau, function (element) {
    if (element === valeur)
    trouve = true;
  });
  return trouve
};
var myArr = [
  'coucou'
];
console.log(typeof (myArr))
console.log(member([6,
7,
'Bordeaux'], 'Bordeaux'))



/*
undefined
*/