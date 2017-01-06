let tableau = [
    {forme: 'rond', couleur:'bleu'},
    {forme: 'carré', couleur:'rouge'}
]



function test(el,couleur){
    return el.couleur === 'bleu'
};


console.log(tableau.findIndex(test));
