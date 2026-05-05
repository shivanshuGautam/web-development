const tempp = document.getElementById("secondname");
console.log(tempp.innerText);
console.log(tempp);

// function submit() {
//   console.log("submit button clicked");

//   const fn = document.getElementById("fullname").value;
//   console.log(fn);

//   document.getElementById("mydata").innerText = fn;
//   document.getElementById("fullname").value = "";

//   document.getElementById("datacard").classList.add("divShow");
//    document.getElementById("datacard").classList.remove("divHide");
// }

function submit() {
  console.log("Submit button clicked");

  const fn = document.getElementById("fullname").value;
  console.log(fn);

  document.getElementById("mydata").innerText = fn;
}




//    <div class=" border rounded shadow w-25 p-2 divHide" id="datacard">
//         <span>Name:</span>
//       <span id="mydata"></span>
//     </div>