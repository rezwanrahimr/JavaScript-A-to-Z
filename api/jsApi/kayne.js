const load = () => {
  const url = "https://api.kanye.rest/";
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));
};

const showData = (data) => {
  const { quote } = data;
  const text = document.getElementById("text");
  text.innerText = `Text : ${quote}`;
};
