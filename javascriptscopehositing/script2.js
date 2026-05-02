//  Hoisting

let a;
let b;
let c;

a=10;

console.log(a);
console.log(b);
console.log(c);

b=15;
console.log(a);
console.log(b);
console.log(c);

c = 16;
console.log(a);
console.log(b);
console.log(c);