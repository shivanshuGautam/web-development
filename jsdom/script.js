console.log("Dom-document object model");
function submit() {
  console.log("submit button clicked");

  const fn = document.getElementById("fullname").value;
  console.log(fn);

  document.getElementById("mydata").innerText = fn;
  document.getElementById("fullname").value = "";

  document.getElementById("datacard").classList.add("divShow");
   document.getElementById("datacard").classList.remove("divHide");
}
