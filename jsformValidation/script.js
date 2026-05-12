// function submit() {
//   const fn = document.getElementById("fullname").value;

//   const fn1 = document.getElementById("phone").value;
//   const fn2 = document.getElementById("email").value;
//   const fn3 = document.getElementById("password").value;

//   console.log(fn);
//   console.log(fn1);
//   console.log(fn2);
//   console.log(fn3);

// }

function submit() {
  const fn = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const ph = document.getElementById("phone").value;

  //   document.getElementById("nameError").innerText = "";
  //   document.getElementById("emailError").innerText = "";
  //   document.getElementById("phoneError").innerText = "";

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!/^[A-Za-z\s]+$/.test(fn)) {
    document.getElementById("nameError").innerText = "Invalid Full Name";
  }

  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }

  if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("phoneError").innerText = "Invalid Phone";
  }
}
