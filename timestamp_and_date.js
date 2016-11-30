//rappel pour créer une date

var maintenant = new Date();


//prenons une date de départ - le 1er janvier 2016
var startingDate = new Date(1995,00,01);
console.log('date de départ : ' + startingDate); // 16:20:32,512 date de départ : Fri Jan 01 2016 00:00:00 GMT+0100 (CET)1 Scratchpad/1:14:1

//transformons le en timestamp
var monTimeStamp = new Date(startingDate).getTime();
console.log('TimeStamp : ' + monTimeStamp); // TimeStamp : 1451602800000

//et repassons-le en date =
var monTest2 = new Date(monTimeStamp);
console.log('nouvelle date : ' + monTest2); //

console.log(monTest2.getTime());


//pour comparer 2 dates
var maDate = new Date(1980,1,1);
var maDate2 = new Date(1980,1,1);
console.log(maDate.getTime());


var compareDate = function(date1,date2){
  return date1.getTime() === date2.getTime();
};

console.log(compareDate(maDate, maDate2));
