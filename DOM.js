var myName = document.getElementById("name");
myName.innerHTML = "hello rezwan";
// get element by id.
var welcomeMessage = (document.getElementById("welcome").innerHTML =
  "welcome to js");
// get element by class.
var byeMessage = (document.getElementsByClassName("bye")[0].innerHTML = "bye");
// get element by tag name.
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

function clickMe() {
  var click = document.querySelector("#clickMe");
  click.src =
    "https://th.bing.com/th/id/OIP.NMHAU2Gll4qBVSlAOOsIUwEsDI?pid=ImgDet&rs=1";
}
