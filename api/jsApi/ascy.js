const user = () => {
  const url = "https://randomuser.me/api";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.results))
    .catch((error) => console.log(error));
};
user();

const user2 = async () => {
  const url = "https://randomuser.me/api";
  const fe = await fetch(url);
  const res = await fe.json();
  console.log(res);
};
user2();
