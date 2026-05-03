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
