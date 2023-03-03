const country = () => {
  const api = "https://restcountries.com/v3.1/all";
  fetch(api)
    .then((response) => response.json())
    .then((data) => showData(data));
};

const showData = (data) => {
  let countryContainer = document.getElementById("country-container");
  data.map((country) => {
    const { name, flags, capital, cca2 } = country;
    // console.log(country);
    const newElement = document.createElement("div");
    newElement.classList.add("country");
    newElement.innerHTML = `
    <h3>Name: ${name.common}</h3>
    <Img src='${flags.png}'></Img>
    <h3>Capital: ${capital ? capital[0] : "No Capital"}</h3>
    <button onClick="countryDetails('${cca2}')">Details</button>
    `;
    countryContainer.appendChild(newElement);
  });
};
const countryDetails = (countryCode) => {
  console.log("click");
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showCountryData(data));
};

const showCountryData = (singleCountry) => {
  const { name, capital } = singleCountry[0];
  console.log(name, capital);
};
country();
