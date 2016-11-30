var arr1 = [1,2,3];

var arr2 = [2,5,6];


//Retourne les valeurs uniques du array1
var difference2 = arr1.filter(function (x) {
  return arr2.indexOf(x) == -1;
});

console.log(difference2)// 1,3




//concatène les valeurs uniques des 2 tableaux
var difference3 = arr1
.filter(function (x) {
  return arr2.indexOf(x) == -1;
})
.concat(arr2.filter(function (x) {
  return arr1.indexOf(x) == -1;
}));


console.log(difference3)// 1,3,5,6
