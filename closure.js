function temp() {
  let counter = 0;
  console.log(counter);
  return function () {
    counter++;
  };
}

var result = temp();
console.dir(result);
result();
