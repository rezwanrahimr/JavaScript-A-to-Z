/* //1. Some Middle Console Log Will Be Logged after 3.5 Seconds.
console.log("Name: Rezwan Rahim");
console.log("Father Name: Mozaffar Hossain");
setTimeout(() => {
  console.log("Mother Name: Rokeya Sultana");
}, 3500);
console.log("Loaction: Feni Town"); */

//2. Take a Number From Users,Using Prompt and Add 250 to that Number.
function getNumber() {
  let number = prompt("Enter a Number: ", 0);
  let sum = parseInt(number) + 250;
  alert(`The Number is : ${sum}`);
}
getNumber();
