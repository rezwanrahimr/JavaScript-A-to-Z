const allMeal = (name) => {
  console.log(name);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showMeal(data.meals));
};
const showMeal = (data) => {
  if (data?.length == null) {
    const mealList = document.getElementById("meal-list");
    mealList.innerHTML = `<h1>NO DATA FOUND !</h>`;
  }
  const mealList = document.getElementById("meal-list");
  data?.map((meal) => {
    const { strMeal, strMealThumb, strInstructions } = meal;
    const newElementt = document.createElement("div");
    newElementt.innerHTML = `
    <div class="col">
    <div class="card h-100">
        <img src="${strMealThumb}">
        <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">${strInstructions}</p>
        </div>
        
    </div>
</div>
    `;
    mealList.appendChild(newElementt);
  });

  console.log(data);
};

const searchFood = () => {
  let userText = document.getElementById("input-text").value;
  allMeal(`${userText}`);
  const mealList = document.getElementById("meal-list");
  mealList.innerHTML = "";
};
