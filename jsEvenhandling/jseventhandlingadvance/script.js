// red
document.getElementById("red").addEventListener("mouseover", fileredcolor);
document.getElementById("red").addEventListener("mouseout", filebasecolor);
function fileredcolor() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function filebasecolor() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

// green
document.getElementById("green").addEventListener("mouseover", fileredcolor1);
document.getElementById("green").addEventListener("mouseout", filebasecolor1);
function fileredcolor1() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}
function filebasecolor1() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

// blue
document.getElementById("blue").addEventListener("mouseover", fileredcolor11);
document.getElementById("blue").addEventListener("mouseout", filebasecolor11);
function fileredcolor11() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}
function filebasecolor11() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}