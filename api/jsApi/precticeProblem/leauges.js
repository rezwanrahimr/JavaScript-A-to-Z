const loadLueagus = () => {
  try {
    fetch("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")
      .then((response) => response.json())
      .then((data) => console.log(data.leagues));
  } catch (error) {
    console.log(error);
  }
};

loadLueagus();
