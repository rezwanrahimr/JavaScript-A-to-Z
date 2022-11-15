document.getElementById("ex").innerHTML = "Hello world ! how are you ";

function myName() {
  document.querySelector("#name").innerHTML = "Hello world !";
  document.getElementById("name").style.backgroundColor = "blue";
}

document.getElementsByTagName("img")[0].src =
  "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

document
  .getElementById("divv")
  .setAttribute(
    "src",
    "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  );
