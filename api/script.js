/* function loadData() {
  fetch("http://127.0.0.1:5500/api/data.json")
    .then((result) => result.json())
    .then((data) => console.log(data));
} */

let all = document.querySelectorAll(".pratice");
for (let pratice of all) {
  pratice.style.width = "500px";
  pratice.style.height = "100px";
  pratice.style.border = "2px solid red";
}
