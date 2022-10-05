
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


var array = new Array('rezwan','rahim','rupak');
var newArray = ['rezwan','rahim','rupak','toma'];
var singleData = newArray[2];
var i = 0;
for(var i = 0; i< newArray.length; i++){
    console.log('loop data', newArray[i]);
}

console.log(newArray.indexOf('rezwan'));
array.splice(1,1);

 console.log(array);