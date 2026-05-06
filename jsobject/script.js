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
