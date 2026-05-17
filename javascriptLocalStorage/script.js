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
let main = document.querySelector(".main");
form.addEventListener("submit", (event) => {
  let name = event.target.Name.value;
  let email1 = event.target.email.value;
  let phone = event.target.phone.value;

  let userdata = JSON.parse(localStorage.getItem("UserDetails")) ?? [];
  userdata.push({
    name: name,
    email: email1,
    phonenumber: phone,
  });

  localStorage.setItem("UserDetails", JSON.stringify(userdata));
  displayData();
  //   console.log(userdata);
  //    console.log(name, email1, phone);

  event.preventDefault();
});

let displayData = () => {
  let userdata = JSON.parse(localStorage.getItem("UserDetails")) ?? [];
  let finaldata = "";
  userdata.forEach((element, i) => {
    finaldata += `<div class="items">
        <span>&times;</span>
        <h5>Name:</h5>
        <div>${element.name}</div>

        <h5>Email:</h5>
        <div>${element.email}</div>

        <h5>Phone number:</h5>
         <div>${element.phonenumber}</div>
      </div>
    `;
  });

  main.innerHTML = finaldata;
};
