/* var a; // variable declearing.
var a = 1; */ // initialize the variable.

//addition assignment operator.
/* var b = 1;
b += 5; */
// console.log(b);

/* var name = 'rezwn"rahim"rupak';
console.log(name); */

/* var name = "rezwan rahim";
name += " rupak";
name.length - 1;
console.log(name); */

// array
/* var arrayElement = [332, 54, 65, 4];
console.log(arrayElement[1]); */

// Nested array
/* var arrayElement = [["rezwan", 31], ["rahim,01"]];
var output = arrayElement[0][1];
console.log(output);
 */

// array element add and remove.
/* var myArray = [3, 43, 5, 43, 75, 76];
myArray.push([31]); // add
console.log(myArray);
myArray.pop(); //remove
console.log(myArray); */

// Global Scope and Function
/* var name = "Rezwan Rahim";
function myName() {
  console.log("Name : ", name);
}
myName(); */

// switch case
/* function UsingSwitchCase(a) {
  switch (a) {
    case 3:
      console.log("The value is : 3");
      break;
    case 5:
      console.log("This value is : 5");
      break;
    case 9:
      console.log("This value is : 9");
      break;
    default:
      console.log("No Value here");
  }
}
UsingSwitchCase(10); */

// function
/* function jsFunction(numOne, numTwo) {
  return numOne * numTwo;
}
console.log(jsFunction(2, 1)); */

// object
/* const obj = {
  firstName: "Rezwan Rahim",
  lastName: "Rupak",
  age: 23,
  position: "Jr Developer",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
}; */
// add new propratie in objects
// obj.date = "12/19/2022";
// obj["year"] = 2022;
// Delete propratices of objects
// delete obj.age;
// console.log(obj);
/* console.log(obj.age);
console.log(obj["position"]);
console.log(obj.fullName()); */

// concat string
/* var text1 = "Hello world how are you world";
var text2 = "World";
var result = text1.concat(" ", text2);
console.log(result);
var simple = "x";
console.log(simple.padStart(4, "x"));
console.log("charAt :", text1.charAt(4));
console.log(text2[0]);
console.log(text1.indexOf("how"));
console.log(text1.search("how"));
console.log(text1.match("are"));
console.log(text1.includes("world"));
console.log(text1.startsWith("Hello"));
console.log(text1.endsWith("world")); */

// js template literals
/* const text = `hello'world! "This is Rezwan.",
              "Now I am study in Dhaka International University",
              "Computer Science and Engineering."`;
console.log(text);
var firstName = "Rezwan Rahim";
var lastName = "Rupak";
console.log(`Full Name : ${firstName} ${lastName}`);

function myDetails(name, age, position) {
  console.log(name), console.log(age), console.log(position);
}
console.log(`My Details : ${myDetails(`rezwan rahim`, `34`, `js programmer`)}`);

 */

// js bigInt
// is safe integer method
// console.log(Number.isSafeInteger(-1));
// safe interger
/* console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
const number = 10;
const num = number.toString();
console.log(typeof num); */

// let x = 3.45354;
// console.log(x.toPrecision(5));

// Js Array
/* const car = ["volvo", "BMW", "corola"];
const car2 = [];
car2[0] = "bolvo";
car.push("hero");
car[car.length] = "bike";

const car3 = new Array();
car[1] = "BBmw";
console.log(car.length);
// get the ALL element in any array
var text = "";
for (var i = 0; i < car.length; i++) {
  text += ` ${car[i]} `;
}
console.log(car.join("  "));
car.splice(0, 0, "Hello", "world");
car.splice(0, 1);
// console.log(car.toString());
console.log(car.reverse());

// comparing
const NumberOfArray = [32, 4, 655, 4, 67];
const result = NumberOfArray.sort(function (a, b) {
  return b - a;
});
console.log(result[result.length - 1]);
console.log(Math.min.apply(null, NumberOfArray)); */
//
/* const arrayElement = [4, 5, 6, 4, 7, 4, 6, 3, 2, 87];
arrayElement.map((a = (a) => console.log(a)));
arrayElement.filter((b = (b) => console.log(b)));
*/
// const numbers = [45, 4, 9, 16, 25];
// console.log(numbers.indexOf(45) + 1);
/* let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  console.log("total:", total);
  console.log("value:", value);
  console.log("index:", index);
  console.log("array:", array);
  return total + value;
}
myFunction();
 */

// numbers.every((a = (a) => console.log(a < 50)));
// numbers.some((a = (a) => console.log(a > 50)));
/* const numbers = [20, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value < 18;
}
console.log(myFunction());
 */

// console.log(new Date(2018, 11, 24, 10, 33, 30, 0));
// Math js
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.5));
// console.log(Math.trunc(4.9));
// console.log(Math.sign());
// console.log(Math.pow(8, 2));
// console.log(Math.sqrt(64));
// const d = [3, 4, 5, 6, 10];
// d.map((a = (a) => console.log(Math.max(a))));

// Math.random
// console.log(Math.ceil(Math.random() * 100));
/* var namee = "rezwan";
var age = 23;
console.log(namee.length == 4 ? "sort name" : "long name");
console.log(
  age < 25 ? "This time for challenging for you !" : "Your time is growing"
);
console.log(new Date().getDay());
var day = " ";
switch (new Date().getDay()) {
  case 0:
    day = "SunDay";
    break;
  case 1:
    day = "MonDay";
    break;
  case 2:
    day = "tuesDay";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "ThursDay";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "SaturDay";
    break;
}
console.log("To Day is : ", day);
 */
/* const a = ["rezwan", "rahim", "rupak"];
for (x of a) {
  console.log(x);
}
 */

/* const obj = { rezwan: 34, rahim: 21, rupak: 31 };
for (var x in obj) {
  console.log(obj[x]);
} */

/* const ar = [3, 4, 5, 6, 4, 6, 4, 7, 8, 1];
ar.map(myFunction);
function myFunction(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array[index]);
} */

/* const myName = "Rezwan Rahim Rupak";
for (name of myName) {
  console.log(name);
}
 */

// while loop
/* var i = 0;
while (i < 18) {
  console.log(i);
  i++;
  if (i === 5) {
    console.log("skip");
    continue;
  }
  if (i == 10) {
    break;
  }
} */

// do while loop
/* var i = 0;
do {
  console.log("rezwan rahim");
  i++;
} while (i < 10);
 */
// js Maps
/* const food = new Map();
food.set("mango", 200);
food.set("mango0", 200);
food.delete("mango0");
console.log(food.has("mango"));
console.log(food.size); */

/* const text = "Hello world! How are you";
const re = text.replace("world!", "duniya");
console.log(text);
console.log(text.search("world")); */
