// normal variable
let a: string | number;
a = 5;

// array
let arr: (number | string)[] = [];
arr.push("sumit", 5);

// obj
let c: {
  name: string;
  age: number;
  adult: boolean;
};
c = {
  name: "sohan",
  age: 23,
  adult: true,
};
// dynamic types
let b: any[] = [];
b.push(5);
b.push("aaaa");
// object dynamic
let obj: {
  name: any;
  age: any;
};
obj = {
  name: "afsa",
  age: "twenty",
};
// function
let myFunc: Function;
myFunc = () => {
  console.log("ahana");
};

const weFunc = (a: string, b: number) => {
  return a + b;
};
weFunc("asssa", 12);

class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }
  play() {
    console.log(`${this.name},${this.country}`);
  }
}
const sakib = new Player("sakib", 52, "BD");
