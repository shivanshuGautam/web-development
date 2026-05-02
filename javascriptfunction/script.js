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


// .FUNCTION
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

// 2. function expresssion

const addtwonumber1 = function (a1, a2) {
  return a1 + a2;
};
console.log(addtwonumber1(8, 9));

//3. arrow function

// const addtwonumber11 = (q1, q2) => {
//   return q1 + q2;
// };

// or
const addtwonumber11 = (q1, q2) => q1 + q2;

console.log(addtwonumber11(9, 99));

// only one parameter --- (q4)---q4 aise bhi likh sakte hai
const squareonenumber = q4 => q4 * q4;
console.log(squareonenumber(24));


// 4. IIfe function


