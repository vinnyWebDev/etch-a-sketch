console.log("TEST");

const gridContainer = document.querySelector("#gridContainer");

//Grid creation is now working dynamically
let gridSize = 16;
let gridTotal = gridSize ** 2;
console.log(gridTotal);
let squareHeight = `${960 / gridSize}px`;

let root = document.querySelector(":root");

root.style.setProperty("--divHeight", squareHeight);
root.style.setProperty("--divWidth", squareHeight);

//working, now make it dynamic
for (i = 0; i < gridTotal; i++) {
  const square = document.createElement("div");
  //event listener to alter div colour
  square.addEventListener("mouseover", (e) => {
    //with this we target the div which is currently hovered on, affecting only this div
    e.target.style.backgroundColor = "black";
  });
  square.classList.add("square");
  gridContainer.appendChild(square);
}
