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
  const detailsCountry = document.getElementById("single-country-details");
  const { name, capital } = singleCountry[0];
  const newEle = document.createElement("div");
  newEle.innerHTML = `
  <h1>${name.common}</h1>
  <h1>${capital[0]}</h1>
  `;
  detailsCountry.appendChild(newEle);
  console.log(capital[0]);
};
country();
