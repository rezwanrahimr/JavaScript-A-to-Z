/* //1. Some Middle Console Log Will Be Logged after 3.5 Seconds.
console.log("Name: Rezwan Rahim");
console.log("Father Name: Mozaffar Hossain");
setTimeout(() => {
  console.log("Mother Name: Rokeya Sultana");
}, 3500);
console.log("Loaction: Feni Town"); */

/* //2. Take a Number From Users,Using Prompt and Add 250 to that Number.
function getNumber() {
  let number = prompt("Enter a Number: ", 0);
  let sum = parseInt(number) + 250;
  alert(`The Number is : ${sum}`);
}
getNumber(); */

//3. what is cookies,writing in English at least 5-7 lines
/* 
cookies are small pices of data that store the user device or computer.commonly cookies are using  keep tracking
the user performance,session information,  and other information thats user interaction on the web site.
when user visit on the website,the website can send a cookies to the user browser. and which store the cookies
on ther user computer or device. the next time user visit this website the website can access the cookies
retrive the information of user performance and interaction data.




//4. Write at least 3 dirrernces between local storage and session storage?
//5. differences between cookies local storage and sessionstorage
//6.what is event loop in javascript

/*.......................
 Level 2
 ........................ */

// problem 1

document.getElementById("btn").addEventListener("click", function () {
  //   let inputField = document.getElementById("input-value").value;
  let getValue = localStorage.getItem("number");
  document.getElementById("input-value").value = JSON.parse(getValue);

  //
  if (localStorage.getItem("number")) {
    let getNum = localStorage.getItem("number");
    let updateNumber = JSON.parse(getNum);
    updateNumber++;
    localStorage.setItem("number", JSON.stringify(updateNumber));
  } else {
    localStorage.setItem("number", "0");
  }
});

const allTime = () => {
  let getValue = localStorage.getItem("number");
  document.getElementById("input-value").value = JSON.parse(getValue);
};
allTime();

// Level 3
//set Name
document.getElementById("name-send").addEventListener("click", function () {
  const userName = document.getElementById("user-name").value;
  setLocalStorage("name", userName);
});
//Delete Name
document.getElementById("name-delete").addEventListener("click", function () {
  deleteLocalStorage("name");
});

//set Eamil
document.getElementById("email-send").addEventListener("click", function () {
  const userEamil = document.getElementById("user-email").value;
  setLocalStorage("eamil", userEamil);
});

//Delete Email
document.getElementById("email-delete").addEventListener("click", function () {
  deleteLocalStorage("eamil");
});
// Set Message
document.getElementById("message-send").addEventListener("click", function () {
  const userMessage = document.getElementById("user-message").value;
  setLocalStorage("Message", userMessage);
});
//Delete Message
document
  .getElementById("message-delete")
  .addEventListener("click", function () {
    deleteLocalStorage("Message");
  });
//SET LOCAL STORAGE
const setLocalStorage = (key, value) => {
  localStorage.setItem(`${key}`, `${value}`);
};
//DELETE LOCAL STORAGE
const deleteLocalStorage = (keyName) => {
  localStorage.removeItem(`${keyName}`);
};

// Reset
document.getElementById("reset").addEventListener("click", function () {
  localStorage.clear();
});
