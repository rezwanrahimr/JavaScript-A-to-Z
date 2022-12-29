class className {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  fullName() {
    return `${this.name}`;
  }
  static hello(x) {
    return x;
  }
}

class myDetails extends className {
  constructor(name, position, location) {
    super(name);
    this.position = position;
    this.location = location;
  }
  fullDetials() {
    return `${this.name}
            ${this.position}
            ${this.location}
    `;
  }
  get skill() {
    return this.sk;
  }
  set skill(sk) {
    this.sk = sk;
  }
}

let myObj = new className("Rezwan Rahim", 2023);
console.log(className.hello("Hello How are you"));
let myDetail = new myDetails(
  "Rezwan Rahim Rupak",
  "Jr Programmer",
  "Feni,Bangladesh"
);
myDetail.skill = "JavaScript,React,NOdeJs";
console.log(myDetail.skill);
