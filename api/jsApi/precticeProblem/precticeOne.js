// Load Comments
async function loadComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  displayComments(data);
}

// Load Post Data
async function loadPost(id) {
  const getElement = document.getElementById("postName");
  getElement.innerHTML = "";
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  console.log(data.title);

  getElement.innerHTML = `'${data.title}'`;
}
const displayComments = (data) => {
  const commantSection = document.getElementById("comments");
  data.slice(0, 20).map((comment) => {
    const { id, name, email, body } = comment;
    const newElement = document.createElement("div");

    newElement.classList.add("comment");
    newElement.innerHTML = `
    <h1>PostID: ${id}</h1>
    <h2 id="postName"></h2>
    <h1>Name: ${name}</h1>
    <h1>Email: ${email}</h1>
    <p>Body: ${body}</p>

    <button onClick="loadPost(${id})">See Post</button>

    `;

    commantSection.appendChild(newElement);
  });
  //   console.log(data);
};

loadComments();
