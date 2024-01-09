console.log("TEST");

const gridContainer = document.querySelector("#gridContainer");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");
sliderValue.textContent = slider.value;

slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
  //sizing gets messed up when called in here
  makeGrid(slider.value);
});

let isGrid;

function makeGrid(gridSize) {
  //this if statement delets the previosu grid before replacing it with the new one
  if (isGrid) {
    gridContainer.textContent = "";
  }

  let squareHeight = `${960 / gridSize}px`;
  let root = document.querySelector(":root");

  root.style.setProperty("--divHeight", squareHeight);
  root.style.setProperty("--divWidth", squareHeight);
  //working, now make it dynamic
  for (i = 0; i < gridSize ** 2; i++) {
    const square = document.createElement("div");
    //event listener to alter div colour
    square.addEventListener("mouseover", (e) => {
      //with this we target the div which is currently hovered on, affecting only this div
      e.target.style.backgroundColor = "black";
    });
    square.classList.add("square");
    gridContainer.appendChild(square);
    isGrid = true;
  }
}

//Problem: everything works when hardcoded but not when I try to take input
// in order for this to be made dynamic, it has to be a function call
// that function should take in a grid size value.

//this works, we need size to be dynamic
// all we need to do, is be able to call function and pass in a new value

//the problem is that we're not getting rid of the original grid when we make a new one
// we could check if there is an exisitng grid upon creation, if there is, remove it and then append new sollution

makeGrid(16);
console.log(isGrid);
