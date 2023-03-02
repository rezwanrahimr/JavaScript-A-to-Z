const country = () => {
  const api = "https://restcountries.com/v3.1/all";
  fetch(api)
    .then((response) => response.json())
    .then((data) => showData(data));
};

const showData = (data) => {
  let countryContainer = document.getElementById("country-container");
  data.map((country) => {
    const { name, flags, capital } = country;
    console.log(capital);
    const newElement = document.createElement("div");
    newElement.innerHTML = `
    <h3>Name: ${name.common}</h3>
    <Img src='${flags.png}'></Img>
    <h3>Name: ${capital[0]}</h3>
    `;
    countryContainer.appendChild(newElement);
  });
};
country();
