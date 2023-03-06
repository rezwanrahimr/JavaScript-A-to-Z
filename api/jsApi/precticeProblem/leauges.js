const loadLueagus = () => {
  try {
    fetch("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")
      .then((response) => response.json())
      .then((data) => showData(data.leagues));
  } catch (error) {
    console.log(error);
  }
};

// team data
const showTeamData = (id) => {
  const teamContainer = document.getElementById("teamDetails");
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const showData = (data) => {
  const lueagesContainer = document.getElementById("allLeaues");
  data.forEach((element) => {
    const { idLeague, strLeague, strSport } = element;
    const lueagesDiv = document.createElement("div");
    lueagesDiv.classList.add("leaugeDiv");
    lueagesDiv.innerHTML = `
    <h1>StrLeague: ${strLeague}</h1>
    <h1>strSpor: ${strSport}</h1>
    <a href="./team.html" target="_blank"><button onClick="showTeamData(${idLeague})">More Details</button></a>
    `;
    lueagesContainer?.appendChild(lueagesDiv);
  });
};

loadLueagus();
