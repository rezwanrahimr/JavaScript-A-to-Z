function getVar() {
  var x;
  setTimeout(() => {
    x = 12;
  }, 3000);
  return x;
}
var value = getVar();
console.log(`The Value is: ${value}`);
