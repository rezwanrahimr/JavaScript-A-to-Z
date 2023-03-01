let loadUser = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => showUserData(data));
};

const showUserData = (data) => {
  //   console.log(data);

  for (const datas of data.results) {
    const { email, name, location } = datas;
    const { city } = location;
    console.log(name, email, location, city);
    console.log(datas);
  }
};
