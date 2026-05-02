//1.function

// 1. Create a simple function that prints "Hello World".
function helloworld() {
  console.log("hello world");
}
// console.log(helloworld());
helloworld();

//2. Write a function that displays your name in the console.
function display() {
  console.log("shivanshu gautam");
}
display();

// 3. Create a function that prints "Welcome to College".
function print() {
  console.log("Welcome to College");
}
print();

// 4. Write a function that takes a name as a parameter and prints "Hello [name]".
function parameter(nameyogo) {
  console.log("hello " + nameyogo);
}
parameter("shivanshu");
parameter("shivanshu gautam ");

// 5. Create a function that takes two numbers and prints their sum.

function twonumber(num1, num2) {
  const sum = num1 + num2;
  console.log(num1 + num2);
}

twonumber(8.15, 78);

// 6. Write a function that takes a number and prints its square.
function square(num3) {
  console.log(num3 * num3);
}
square(88);

// 7. Create a function that takes two numbers and returns their addition.
function return12(num1, num2) {
  return num1 + num2;
}
let result = return12(88, 12);
console.log(result);

// 8. Write a function that returns the multiplication of two numbers.

function multiplication(num1, num2) {
  return num1 * num2;
}

let result1 = multiplication(5, 6);
console.log(result1);

// 9. Create a function that takes a name and age and prints a message.

function message(name1, age) {
  console.log("name " + name1 + "  your age " + age + " year old");
}

let result3 = message("anshu", 21);

// 10.Write a function that returns the average of three numbers.
function averagenum(num1, num2, num3) {
  //   (console.log("average of three numbers:" + num1, num2, num3));
  const result15 = num1 + num2 + num3;
  return result15;
}

let result4 = averagenum(10, 38, 16);
console.log(result4);

// 12. Build a function that takes two numbers and returns the greater number.
function greaternumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log("greaternumber:" + greaternumber(78, 89));
console.log("greaternumber:" + greaternumber(500, 89));
console.log("greaternumber:" + greaternumber(9, 89));
console.log("greaternumber:" + greaternumber(45, 89));
