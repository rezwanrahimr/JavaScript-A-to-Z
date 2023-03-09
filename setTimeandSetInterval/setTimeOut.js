/* setTimeout((element) => {
  console.log("js");
}, 5000);

 */

//setInterval
let num = 0;
const inv = setInterval((element) => {
  console.log(++num);
  if (num === 10) {
    clearInterval(inv);
  }
}, 1000);
