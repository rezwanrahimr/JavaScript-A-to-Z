function loadImage() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => allImage(data));
}

function allImage(data) {
  data.map((image) => {
    const { id, title, thumbnailUrl } = image;
    console.log(id, title, thumbnailUrl);
  });
}
