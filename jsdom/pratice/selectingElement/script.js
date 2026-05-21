// DOM Selection Methods Explained

// Method	                     Syntax	                                                             Description
// By ID    	   document.getElementById("id")	               1.   Ek specific element ko uske unique id se select karta hai
// By Tag Name	  document.getElementsByTagName("tag")	          2.  Saare elements select karta hai jo ek particular HTML tag ke hain
// By Class Name	document.getElementsByClassName("class")	  3.  Saare elements select karta hai jo ek particular class ke hain
// Query Selector	document.querySelector("selector")	          4. Pehla element select karta hai jo CSS selector match karta hai
// Query Selector All	document.querySelectorAll("selector")	  5. Saare elements select karta hai jo CSS selector match karte hain

// 1.document.getAnimations("id");

let headingElement = document.getElementById("heading");
let resElement = document.getElementById("res");
console.log(headingElement.innerText);
console.log(headingElement.innerHTML);
resElement.innerHTML = headingElement.innerHTML;

// 2.document.getElementsByTagName("tag")

let tagElement = document.getElementsByTagName("p");
console.log(tagElement[0].innerHTML);

// 3.	document.getElementsByClassName("class")

let classElement = document.getElementsByClassName("main");
console.log(classElement[0].innerText);

// 4.document.querySelector("selector")



