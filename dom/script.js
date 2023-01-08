function myFunction() {
  let animation = document.getElementById("animate");
  let interval = setInterval(animate, 5);
  let count = 0;
  function animate() {
    if (count < 420) {
      count++;
      animation.style.top = count + "px";
      animation.style.left = count + "px";
    } else {
      clearInterval(interval);
    }
  }
}
