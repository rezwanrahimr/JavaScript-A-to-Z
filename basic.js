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
const car = ["volvo", "BMW", "corola"];
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
console.log(result);
