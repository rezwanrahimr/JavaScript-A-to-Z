
// var name = new Array('rezwan','rahim','rupak');
// name.push("toma");
// name.pop("toma");
// name.shift();
// name.unshift('I love you');
// console.log(name.indexOf('rupak'));
// console.log(name.splice(2,2));
// console.log(name);
// for(var i = 0; i < name.length; i++){
//     var allName = name[i];
//     console.log(allName);
// }

// var myName = ['rezwan','rupak'];
// myName[0] = 'rahim';
// console.log(myName[0]);
// console.log(myName['length']);

/* 
var array = new Array('rezwan','rahim','rupak');
var newArray = ['rezwan','rahim','rupak','toma'];
var singleData = newArray[2];
var i = 0;
for(var i = 0; i< newArray.length; i++){
    console.log('loop data', newArray[i]);
}

console.log(newArray.indexOf('rezwan'));
array.splice(1,1);

 console.log(array); */

//  var newA = [];
//  for(var i = 0; i < 5; i++){
//      newA[i] = prompt("Enter number ");

//  }
//  console.log(newA);

//some array libary methods
// splice
var name = ['rezwan', 'rahim', 'rupak', 'toma'];
name.push('kornameKI', 'ki kors', 'gumas na ken', 'afganistan', 'unaited state');
// add array element using splice.
name.splice(1, 0, 'Bangladesh', 'pakistan');
// remove array element usign splice.
name.splice(0, 2);


// sorting array and reverse array using array libary method.
name.sort();
name.reverse();
console.log(name);

// array number sorting.
var numberr = [23, 43, 54, 2, 6, 76];
numberr.sort(function (a, b) {
    return a - b;

})
// array number reverse.
var number = [3, 545, 65, 34, 756];
number.sort(function (a, b) {
    return b - a;
})
console.log(numberr);
console.log(number);

// task 8
function highestScore(scores) {
    var result = 0;
    for (var i = 0; i < scores.length; i++) {
        if (result < scores[i]) {
            result = scores[i];

        }
    }

    return result;
}

;
console.log(highestScore([5, 6, 34, 75]));