// let a = 10;
// b = 30;
// function sum(x, y) {
//   let z = x + y;
//   return z;
// }

// function expression
let abc = function () {
  console.log("Hello world");
};
console.log(abc);

// not use a let---(const)use
const abcd = function () {
  console.log("Hello world");
};
console.log(abcd);

// call back function
abc();

function addtwonumber(one, num2) {
  const num = one + num2;
  console.log(num);
}
addtwonumber(4, 5);
addtwonumber(6, 5);

function shivanshu() {
  console.log("gautam bhai");
  return 10;
}

console.log(shivanshu());

//  function expresssion

const addtwonumber1 = function (a1, a2) {
  return a1 + a2;
};
console.log(addtwonumber1(8,9));


// arrow function