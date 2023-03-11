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
  console.log(data);
  let setData = localStorage.getItem("cart");
  let parseData = JSON.parse(setData);

  if (localStorage.getItem("cart")) {
    data = parseData;
    data[key] = value;
    localStorage.setItem("cart", JSON.stringify(data));
  } else {
    localStorage.setItem("cart", JSON.stringify(data));
  }
};

const displayLocalStorageData = (key, value) => {
  const showingData = document.getElementById("showing-data");
  const createEle = document.createElement("li");
  createEle.innerText = `key: ${key} value:${value}`;
  showingData.appendChild(createEle);
};
function callData() {
  const getData = localStorage.getItem("cart");
  console.log(getData);
  const jasonData = JSON.parse(getData);
  for (let datas in jasonData) {
    displayLocalStorageData(datas, jasonData[datas]);
  }
}
callData();
