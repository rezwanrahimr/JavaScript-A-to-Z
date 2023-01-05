let info = document.getElementById("userInfo");
let data = document.querySelectorAll("p");
try {
  data == undefined;
  for (var i = 0; i < info.length; i++) {
    data[i].innerHTML = info.elements[i].value;
  }
} catch (err) {
  console.log("Error:" + err);
}
