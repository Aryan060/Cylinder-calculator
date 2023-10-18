// Cylinder calculator

// button click listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  console.log("gigliusdul");
  // input
  let rad = +document.getElementById("rad-in").value;
  let height = +document.getElementById("height-in").value;

  //process
  let Volume = rad ** 2 * height * 3.14;
  let area = rad ** 2 * 3.14 * 2 + 2 * 3.14 * rad * height;
  //output
  document.getElementById("output").innerHTML = Math.round(Volume);
  document.getElementById("output2").innerHTML = Math.round(area);
}
