let a = 5;
console.log(a);
console.log(b);

var b = 7;
console.log(a);
console.log(b);

//variable-- global,local ,block

let test = "this is a global variable";

function classA() {
  console.log("classA", test);
}

function classb() {
  console.log("classb", test);
}

function classc() {
  let test2 = "this is a local variable";
  console.log("classc", test);
  console.log("classc", test2);
  {
    let s = "this is block variable";
    console.log(s);
  }
}

function classd() {
  console.log("classd", test);
  {
    let v = 10;
    console.log(v);
  }
}

function classe() {
  console.log("classe", test);
}

classA();
classb();
classc();
classd();
classe();
