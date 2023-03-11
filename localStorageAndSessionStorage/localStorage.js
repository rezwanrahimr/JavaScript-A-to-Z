/*

what can i do in this projects
1. get the input to the user
2. set the value in local storage as a object
3. show the local storage data in UI
*/

//
document.getElementById("submit-btn").addEventListener("click", function () {
  const getName = document.getElementById("input-name").value;
  const getValue = document.getElementById("input-value").value;
  setLocalData(getName, getValue);
});
let data = {};
const setLocalData = (key, value) => {
  data[key] = value;
  if (localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(data));
  } else {
    localStorage.setItem("cart", JSON.stringify(data));
  }
};
