function bulbon() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function bulbof() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

function bulred() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}

function bulgreen() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

//
//  document.getElementById("bulred").addEventListener("click" ,bulred)

document.getElementById("bulb1").addEventListener("change", changecolor);

function changecolor() {
  const color = document.getElementById("bulb1").value;
  document.getElementById("bulb1").style.backgroundColor =  color;
}
