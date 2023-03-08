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
// console.log(...myObject.skill);
