// let user = [
//   {
//     name: "ws",
//     email: "shivanshu@1234",
//   },

//   {
//     name1: "ws1",
//     email: "shivanshu@12345",
//   },
// ];

// localStorage.setItem("name", JSON.stringify(user));

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  let name = event.target.Name.value;
  let email1 = event.target.email.value;
  let phone = event.target.phone.value;

  var userdata = JSON.parse(localStorage.getItem("UserDetails")) ?? [];
  userdata.push({
    name: name,
    email: email1,
    phonenumber: phone,
  });

  localStorage.setItem("UserDetails", JSON.stringify(userdata));
  //   console.log(userdata);
  //    console.log(name, email1, phone);

  event.preventDefault();
});
