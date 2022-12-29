// js call function.
const person = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const person1 = {
  firstName: "Rezwan Rahim",
  lastName: "Rupak",
};
const person2 = {
  firstName: "Hello",
  lastName: "World",
};
console.log(person.fullName.call(person2));
