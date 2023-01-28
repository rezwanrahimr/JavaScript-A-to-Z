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
/* function make_avg(one, two, three) {
  return (one + two + three) / 3;
}
console.log(make_avg(2, 3, 4)); */

// practise task 3

/* function make_avg(element) {
  let result = 0;
  for (var i = 0; i < element.length; i++) {
    result += element[i];
  }
  return result / element.length;
}
console.log(make_avg([2, 3, 4, 10, 6])); */

// practise task 4
/* function odd_even(num) {
  if (num % 2 === 0) {
    console.log("Event NUmber");
  } else {
    console.log("Odd Number");
  }
}
odd_even(4); */

// practise task 5
/* function findLeapYear(element) {
  let leapYear = [];
  for (var i = 0; i < element.length; i++) {
    if (
      element[i] % 4 === 0 &&
      (element[i] % 400 === 0 || element[i] % 100 !== 0)
    ) {
      leapYear.push(element[i]);
    }
  }
  return leapYear;
}
console.log(findLeapYear([2023, 2024, 2025, 2028, 2030]));
 */

// js assignment problme
// NO: One
// Convart radianToDegree
function radianToDegree() {}
// NO: Two
// Check js file or not
function isJavaScriptFile(text) {
  if (text.includes(".js")) {
    console.log("This is js file");
  } else {
    console.log("This is not js file");
  }
}
isJavaScriptFile("hello");
// NO: Three
// Calculate the total oil price that I have to pay
// diesel,petrol,octane
function oilPrice(dieselQ, petrolQ, octaneQ) {}
// NO: Four
/*
reserved bus = 50
microbus = 11
rest people will go by public bus
people = 65
bus remaining = 15
microbus remaing = 2
public bus : 250* 
*/
function publicBusFare(OneParameter) {}
// NO: Five
/* 
 {name:'tom',friend:'rock'}
 {name:'rock',friend:'tom'}
*/
function isBestFriend(one, two) {}
