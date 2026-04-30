// question no,1
let n = 5;
if (n > 0) {
  console.log("postive Integer");
} else {
  console.log("negative Integer");
}

// question n0.2

let age = 15;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("sorry");
}

// question no.3
let num = 5;
if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("even not");
}

// question no.4
let number = 56;
if (number > 90) {
  console.log("A");
} else if (number > 75 && number <= 89) {
  console.log("b");
} else if (number > 50 && number <= 74) {
  console.log("b");
} else {
  console.log("fail");
}

// question no.5

let user = "abcde";
let pass = "12345";
if (user === "abcde" && pass === "12345") {
  console.log("login sucess");
} else {
  console.log("login faild");
}

// question no.6
let data;
let name1 = "shivanshu";
data = name1 || "n/a";
console.log(data);
// if(name1)
// {
//     data = name1;
// }
// else{
//     data = "n/a"
// }

// question .7
let x = 2;
console.log(x > 10 && y < 5);

// question no.9

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log;
}

// switch- case

let choice = 8;
switch (choice) {
  case 1: {
    console.log("tea");
    break;
  }

  case 2: {
    console.log("lassi");
    break;
  }

  case 3: {
    console.log("water");
    break;
  }

  default: {
    console.log("jal-jeera");
  }
}
