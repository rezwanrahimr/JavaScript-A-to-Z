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
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
catagori();
