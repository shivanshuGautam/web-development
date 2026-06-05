let fd = [
  ["Shivanshu Gautam", "09-07-2005", 47944646, "Bhopal", "Student"],
  ["Satyanshu Gautam", "09-07-2005", 47944646, "Bhopal", "Student"],
  ["Himanshu Gautam", "09-07-2005", 47944646, "Bhopal", "Student"],
  ["Shva Gautam", "09-07-2005", 47944646, "Bhopal", "Student"],
];

fd.forEach((e1) => {
  console.log(e1);
});

// json format

let fddata = [
  {
    name: "Shivanshu gautam",
    dob: "2004-03-15",
    phone: "+91-9876543210",
    city: "Satna",
    profession: "Computer Science Student",
  },
  {
    name: "Amit Mishra",
    dob: "1999-07-22",
    phone: "+91-9123456789",
    city: "Bhopal",
    profession: "Web Developer",
  },
  {
    name: "Neha Singh",
    dob: "2001-11-05",
    phone: "+91-9988776655",
    city: "Indore",
    profession: "UI/UX Designer",
  },
  {
    name: "Rohit Sharma",
    dob: "1998-02-10",
    phone: "+91-9090909090",
    city: "Jabalpur",
    profession: "Software Engineer",
  },
  {
    name: "Priya Patel",
    dob: "2000-09-30",
    phone: "+91-9876501234",
    city: "Rewa",
    profession: "Data Analyst",
  },
];

fddata.forEach((e) => {
  console.log(e);
});

console.log(fddata);
console.log(fddata[1].phone);

// objectkey
// objectvalue

// let fddata1 = [
//   {
//     name: "Shivanshu gautam",
//     dob: "2004-03-15",
//     phone: "+91-9876543210",
//     city: "Satna",
//     profession: "Computer Science Student",
//   },
// ];
// console.log(Object.keys(fddata1));
// console.log(Object.values(fddata1));
// console.log(Object.entriess(fddata1));

// sort
// let ar = [22, 34, 4, 5, 6, 7, 89, 4, 3, 6, 1];
// ar.sort((a, b) => a - b);
// console.log(ar);
// array.find(callback(element, index, array))
// findfunction
// console.log(ar.findIndex((val) => val === 6));
// console.log(ar.find((val) => val === 6));
// console.log(ar.findLastIndex((val) => val === 6));

// map , filter (function)
// slice
let arr2 = [1, 3, 4, 56, 32, 67, 87, 9, 1, 2, 32, 76, 43, 23, 31, 27, 96, 90];
console.log(arr2.slice(0, 7));
// split
let ab = "this is a web";
console.log(ab.split(" "));
console.log(ab.split("-"));

let str = "this is a string";
console.log(str.charAt(5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let a = 3.12;
console.log(a);
console.log(typeof a);
// console.log(b);

let c = 3.766655970044;
console.log(c.toFixed(5));

let d = "shivanshu gautam";
console.log("my name is ${fullname}");

// example-------
let student = {
  name: "Shivanshu",
  age: 21,
  course: "Computer Science",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

// Access karna
console.log(student.name);   // Output: Shivanshu
console.log(student["age"]); // Output: 21


// 
for (let key in student) {
  console.log(key + " : " + student[key]);
}


// 1. Create Object

let student1 = {
  name: "Shivanshu",
  age: 21,
  course: "Computer Science"
};

// 2. Access Properties
console.log(student.name);     // Shivanshu
console.log(student["course"]); // Computer Science

// 3. Add / Update Property
javascript
student.city = "Satna";   // Add new property
student.age = 22;         // Update existing property

// 4. Delete Property
javascript
delete student.course;
console.log(student); 
// { name: "Shivanshu", age: 22, city: "Satna" }

// 5. Check Property
javascript
console.log("name" in student); // true
console.log("marks" in student); // false

// 6. Loop Through Object
javascript
for (let key in student) {
  console.log(key + " : " + student[key]);
}

// 7. Object Methods
javascript
let car = {
  brand: "Ford",
  start: function() {
    console.log(this.brand + " is starting...");
  }
};

car.start(); // Ford is starting...
//7th [point object 

