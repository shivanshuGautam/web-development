// //  Hoisting

// let a;
// let b;
// let c;

// a = 10;

// console.log(a);
// console.log(b);
// console.log(c);

// b = 15;
// console.log(a);
// console.log(b);
// console.log(c);

// c = 16;
// console.log(a);
// console.log(b);
// console.log(c);

// // function

// abc();
// function abc() {
//   console.log("i am a function");
// }

var a = 10;
var b = 20;

function addnum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var sumresult1 = addnum(a, b);
var sumresult2 = addnum(4, 5);
console.log(sumresult1, sumresult2);

// q2
var c = 30;
var d = 40;
var sumresult3 = addnum(c, d);
console.log(sumresult3);
function addnum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

// q3
// console.log(e);
let e = 40;
let k = 50;
console.log(e);

console.log(a1);
const a1 =10;
const a2 = 20;


