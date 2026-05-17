let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  let name = event.target.Name.value;
  let email1 = event.target.email.value;
  let phone = event.target.phone.value;
  console.log(name);
  console.log(email1);
  console.log(phone);
  event.preventDefault();
});
