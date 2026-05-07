document.getElementById("back").addEventListener("change", changecolor);

function changecolor() {
  const fn = document.getElementById("back").value;
  document.getElementById("back1").style.backgroundColor = fn;
}

//
document.getElementById("backk").addEventListener("change", changecolor1);

function changecolor1() {
  const fn1 = document.getElementById("backk").value;
  document.getElementById("back2").style.color = fn1;
}

//
document.getElementById("backkk").addEventListener("change", changecolor2);

function changecolor2() {
  const fn3 = document.getElementById("backkk").value;
  document.getElementById("back3").style.color = fn3;
}

//
function reset() {
  window.location.reload();
}
