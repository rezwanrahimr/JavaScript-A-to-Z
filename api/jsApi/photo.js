function loadImage() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => allImage(data));
}

function allImage(data) {
  let imageContainer = document.getElementById("image-container");
  data.map((image) => {
    const { id, title, thumbnailUrl } = image;
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("imag-div");
    imageDiv.innerHTML = `
    <h3>${id}</h3>
    <h3>${title}</h3>
    <img src="${thumbnailUrl}"></img>
    `;
    imageContainer.appendChild(imageDiv);
  });
}
