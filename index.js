var number = 20.7668;
number = "30";
number = parseInt(number);
number = toString(number);
number = parseFloat(number);

number.toFixed(2);
number.toPrecision()


console.log(typeof (number));
console.log(typeof (number));

var name = prompt("Enter your name");
document.write(name.length);

// Task 2
var firstName = prompt("Enter your first name :");
var lastName = prompt("Enter Your last name : ");
var fullName = firstName + lastName;
console.log("Your Full Name : " + fullName);
console.log(fullName.length);
fullName = fullName.toUpperCase();
console.log(fullName);
var SecondPosition = fullName.charAt(2);
console.log(SecondPosition);