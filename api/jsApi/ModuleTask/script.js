/*....................
TASK
....................*/
// 1. Object With 6 Properties,String,Boolean,Number,Function(method,access any object property and return it).
const myObject = {
  name: "Rezwan Rahim Rupak",
  isStudent: true,
  roll: 31,
  details: function () {
    return `${this.name} and ${this.roll}`;
  },
  skill: ["Html", "Css", "JavaScript"],
  Location: {
    currentLocation: "Badda",
    permanentLocation: "Feni Town",
  },
};
//2
// console.log(`${myObject.skill[2]} and ${myObject.details()}`);
// console.log(...myObject.skill);

//3
const num = (nu1, nu2) => {
  if (nu1 + nu2 / 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
console.log(num(7, 5));

//3.3
const squareNum = (arr) => {
  let square = arr[0];
  arr.forEach((element) => {
    square *= element;
  });
  console.log(square);
};
squareNum([3, 4, 5, 6, 7]);
