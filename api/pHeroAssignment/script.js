// new portal catargori
const catagori = async () => {
  const catagoriContainer = document.getElementById("catagori");
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await response.json();
    data.data.news_category.forEach((element) => {
      console.log(element);
      const catagoriDiv = document.createElement("div");
      catagoriDiv.innerHTML = `
        <h1 onClick="newsDetails('${element.category_id}')">${element.category_name}</h>
        `;
      catagoriContainer.appendChild(catagoriDiv);
    });
  } catch (err) {
    console.log(err);
  }
};

const newsDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((response) => response.json())
    .then((data) => newsItems(data))
    .catch((err) => console.log(err));
};

const newsItems = (data) => {
  const catagoris = document.getElementById("catagori-items");
  data.data.forEach((element) => {
    const { author, details, rating, thumbnail_url, title, total_view, _id } =
      element;
    const catagorisDiv = document.createElement("div");
    catagorisDiv.innerHTML = `
    <p>Author Info :</p>
    <hr>
    <h1 onClick="loadMoreData('${_id}')">${author?.name}</h1>  <span>${author?.published_date}</span>
    <img src="${author?.img}"></img>
   
    <h1></h1>
    <h1></h1>
    `;
    catagoris.appendChild(catagorisDiv);
    console.log(element);
  });
};

const loadMoreData = (id) => {
  try {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err);
  }
};
catagori();
