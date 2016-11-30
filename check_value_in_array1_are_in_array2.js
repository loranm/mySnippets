var arr1 = [{
    prenom: 'lison'
}, {
    prenom: 'suzette'
}, {
    prenom: 'laurent'
}, {
    prenom: 'yann'
}];

var arr2 = [{
    prenom: 'lison'
}, {
    prenom: 'suzette'
}, {
    prenom: 'laurent'
}];

function check2Arrays(a, b) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a.length > 0) {
                if (a[i].prenom === b[j].prenom) {
                    a.splice(i, 1);
                } else {
                    return a;
                }
            }
        }
    }

    return a;
}

var array3 = check2Arrays(arr1, arr2);


console.log(array3); // [{prenom: 'yann'}];
