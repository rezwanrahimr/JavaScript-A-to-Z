function loadPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => allPost(data));
}

function allPost(data) {
  let postList = document.getElementById("post-container");
  for (const datas of data) {
    const { id, title, body } = datas;
    let newElement = document.createElement("div");
    newElement.classList.add("post");
    newElement.innerHTML = `
    <h2>${id}</h2>
    <h2>${title}</h2>
    <h2>${body}</h2>
    `;
    postList.appendChild(newElement);
  }
}
