// Load Comments
async function loadComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  displayComments(data);
}

const displayComments = (data) => {
  const commantSection = document.getElementById("comments");
  data.slice(0, 20).map((comment) => {
    const { postId, name, email, body } = comment;
    const newElement = document.createElement("div");
    newElement.classList.add("comment");
    newElement.innerHTML = `
    <h1>PostID: ${postId}</h1>
    <h1>Name: ${name}</h1>
    <h1>Email: ${email}</h1>
    <p>Body: ${body}</p>
    <button>See Post</button>

    `;
    commantSection.appendChild(newElement);
  });
  //   console.log(data);
};
loadComments();
