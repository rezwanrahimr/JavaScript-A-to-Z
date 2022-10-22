var myName = document.getElementById("name");
myName.innerHTML = "hello rezwan";

var welcomeMessage = (document.getElementById("welcome").innerHTML =
  "welcome to js");

var byeMessage = (document.getElementsByClassName("bye")[0].innerHTML = "bye");
var tag = (document.getElementsByTagName("h1")[1].innerHTML = "tag");

// use quary selector by id.
var useQuary = (document.querySelector("#name").innerHTML =
  "Hello,Rezwan Rahim ! How are you");
// use quary selector by class.
var useQuaryByClass = (document.querySelector(".bye").innerHTML =
  "Welcome to my world");

for (var i = 0; i <= 3; i++) {
  //   use quary selector all .
  var useQuaryByTag = (document.querySelectorAll("h1")[i].innerHTML =
    "Hello WOrld");
}
