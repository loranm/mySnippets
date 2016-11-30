var arr1 = [{
    prenom: 'lison'
}, {
    prenom: 'suzette'
}, {
    prenom: 'laurent'
}];

var arr2 = [{
    prenom: 'lison'
}, {
    prenom: 'suzette'
}, {
    prenom: 'laurent'
}, {
    prenom: 'yann'
}];

function arrayUnique(array1, array2) {
    var a = array1.concat(array2);
    for (var i = a.length; i >= 0; i--) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i].prenom === a[j].prenom) {
                a.splice(j, 1);
                a.splice(i, 1);
            }
        }
    }

    return a;
}

var array3 = arrayUnique(arr1, arr2);


console.log(array3) // [{prenom: 'yann'}]; 
