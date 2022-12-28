// declear a objects using object literal.
// const obj = {
//   firstName: "Rezwan Rahim",
//   lastName: "Rupak",
//   age: 23,
// };
//  delete propratics
//  delete obj.age;
// delete obj["lastName"];
// console.log(obj);
//  console.log(obj.firstName);
//  console.log(obj["lastName"]);

// /* for (var x in obj) {
//   console.log(obj[x]);
// } */

// Create a single object, with the keyword new.
// const objNew = new Object();
// objNew.FirstName = "Rezwan Rahim Rupak";
// console.log(objNew);
/* const obj = {
  firstName: "Rezwan Rahim",
  lastName: "Rupak",
  moreDetails: [
    { name: "karim", models: ["sofiq", "rofiq"] },
    { name: "zabbar", models: ["rahim", "karim"] },
  ],
};

for (let x in obj.moreDetails) {
  console.log(obj.moreDetails[x].name);
  for (let y in obj.moreDetails[x].models) {
    console.log(obj.moreDetails[x].models[y]);
  }
} */

// Objects Methods
/* const obj = {
  firstName: "rezwan Rahim",
  lsatName: "rupak",
  get location() {
    return this.lsatName + "Bangladesh";
  },
  set currentLocation(loc) {
    return loc;
  },
  fullName: function () {
    return `Full-Name: ${this.firstName} ${this.lsatName}`;
  },
};
console.log("Location :", (obj.currentLocation = "en"));
obj.name = function () {
  return this.firstName;
};
let myobj = Object.values(obj);
let myJson = JSON.stringify(obj); */

// Constuructors objects
// Constuructors Function
function Person(name, age, position) {
  this.Name = name;
  this.Age = age;
  this.Position = position;
}
Person.prototype.Location = "IN THE WORLD";
Person.prototype.about = function () {
  return this.Name;
};
const karim = new Person("Karim", 23, "Seo");
console.log(karim.about());
