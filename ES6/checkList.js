// 1
let myAge = 22;
const myName = "Rezwan Rahim Rupak";

// 2
const myObj = {
  myAge,
  education: "Bsc in Computer Science and Engineering",
};
let text = `${myName} i am a student! i stady in ${myObj.education}. my age is ${myAge} `;
console.log(text);

// 3
const myFun = (p) => {
  let x = p / 5;
  console.log(x);
};
myFun(5);

// 4
const myFun2 = (x, y) => {
  let final = (x + 2) * (y + 2);
  console.log(final);
};
myFun2(5, 10);

// 5
const myFun3 = (x, y, z) => {
  let final = x * y * z;
  console.log(final);
};
myFun3(2, 3, 4);

//6
const arr = [3, 34, 54, 65, 3, 4, 76, 56, 86, 353];
const newArr = arr.map((x) => x * 5);
console.log("new array : ", newArr);

// 7
const fil = arr.filter((x) => {
  if (x % 2 === 1) {
    console.log("bijod", x);
  }
});

// 8
const user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
  },
  {
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

let data = user.find((num) => {
  console.log("Num:", num);
});
console.log("data:", data);

//
const userOne = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const { name, email, ...allD } = userOne;
console.log("Name: ", name, "Email:", email, "Other Data:", allD);

const newarr = [5, 6, 7];
const [one, two, three] = newarr;
console.log(three);

//
const my = {
  name: "Rezwan Rahim",
  roll: 31,
  moreDetails: {
    location: "Feni Town",
    time: [1, 2, 3, 4, 5],
  },
};
console.log(my?.moreDetails?.time);
