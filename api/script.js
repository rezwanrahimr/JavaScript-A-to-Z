function loadData() {
  fetch("http://127.0.0.1:5500/api/data.json")
    .then((result) => result.json())
    .then((data) => console.log(data));
}
