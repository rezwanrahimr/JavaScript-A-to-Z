/* function getVar() {
  var x;
  setTimeout(() => {
    x = 12;
  }, 3000);
  return x;
}
var value = getVar();
console.log(`The Value is: ${value}`); */

// js first class function
/* function get(name, callBack) {
  var call = callBack();
  return `${name} This is callBack: ${call}`;
}

function callback() {
  return `Hello I am Call Back Function`;
}

console.log(get("Rezwan Rahim", callback)); */

// return function to function
function fun(name) {
  return function (menu) {
    return `${name} ${menu}`;
  };
}
console.log(fun("rezwan rahim")("Jr Programmer"));
