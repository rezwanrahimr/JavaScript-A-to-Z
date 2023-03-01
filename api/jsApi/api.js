/* const myData = {
  name: "Rezwan Rahim Rupak",
  roll: 31,
  position: "Jr Developer",
};

const strify = JSON.stringify(myData);
console.log(strify);

console.log(myData);
const reObj = JSON.parse(strify);
console.log(reObj);
 */

// api
function api() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function callMeNow() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => callMe(data));
}
function callMe(data) {
  data.map((x) => {
    const { id, name } = x;
    let p = document.createElement("p");
    let pragrapText = document.createTextNode(name);
    p.appendChild(pragrapText);
    let main = document.getElementById("main-d");
    main.appendChild(p);
  });
}
