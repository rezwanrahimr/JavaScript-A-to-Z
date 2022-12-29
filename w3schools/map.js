/* const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);
 */

/* const letter = new Map([
  ["a", 100],
  ["b", 200],
]);
letter.set("apple", 500);
// console.log(letter.get("apple"));
console.log(letter.has("apple")); */

// console.log(myFunction(5).toString());

// function myFunction(y) {
//   return y * y;
// }

/* 
(function () {
  let x = "Hello!!";
  console.log(x); // I will invoke myself
})();
 */

// Function Expression
// const fun = function (y) {
//   return y * y;
// };
// console.log(fun(3, 4));

// rest paramenter
function sum(...args) {
  console.log(arguments[7]);
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);
