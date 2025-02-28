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
  console.log(`this ${a} ${b}`);
};
weFunc("asssa", 12);
