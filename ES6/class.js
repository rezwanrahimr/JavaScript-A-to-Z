class Instractor {
  name;
  position;
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  tagLine() {
    console.log(`try to the best!`);
  }
}

const amir = new Instractor("amir", "js developer");
console.log(amir);
console.log(amir.tagLine());
