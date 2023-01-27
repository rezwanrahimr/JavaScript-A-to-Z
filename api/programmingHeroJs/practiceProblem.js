// Pratice problme 1
/* var takeMony = 1000,
  apples = 50,
  orange = 90;
var result = takeMony - (apples + orange);
console.log("Result : ", result); */

// pratice problme 2
/* var mathematics = 80,
  biology = 60,
  chemistry = 100,
  physics = 77,
  bangla = 80;
var calculate = (mathematics + biology + chemistry + physics + bangla) / 5;
console.log(calculate.toFixed(2)); */

// Pratice problme 3
/* var first = "Hello This is Rezwan Rahim",
  second = "I am a become a Programmer in the world!";
console.log(first + " " + second);
 */

// Pratice Problem 4
/* var fruits = ["apple", "banana", "orange"];
fruits[1] = "Mango";
fruits.pop();
fruits.push("Water");
console.log(fruits); */

/*
Loop pratice
*/
// 1. Display "ajke amar mon valo nei" for 39 times
/* for (var i = 0; i <= 39; i++) {
  console.log(i, "ajke amar mon valo nei");
} */

// 2. Display numbers between 58 to 98.
/* for (var i = 58; i <= 98; i++) {
  console.log(i);
}
 */

// 3. show all even numbers from 412 to 456
/* let i = 412;
while (i <= 456) {
  console.log(i);
  i++;
} */

//4. show all odd numbers 581 to 623.
/* let i = 581;
while (i <= 623) {
  console.log(i);
  i++;
}
 */

//5. run a loop from 30 to 86. this loop will stop if the values get higher the 86.
/* for (var i = 30; i < 86; i++) {
  if (i > 50) {
    break;
  }
  console.log(i);
}
 */

//6. practise task 1
/* function foo() {
  console.log("Foo");
  bar();
}
function bar() {
  console.log("Bar");
}
foo(); */

// practise task 2
function make_avg(one, two, three) {
  return (one + two + three) / 3;
}
console.log(make_avg(2, 3, 4));
