document.getElementById("btn").addEventListener("click", function () {
  const text = document.getElementById("input-text").value;
  localStorage.setItem("name", text);
});
