/*Page working well, needs to be made presentable */

//container for grid
const gridContainer = document.querySelector("#gridContainer");
//slider and it's value output
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");
sliderValue.textContent = slider.value;

//slider allows user to resize the grid
slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
  makeGrid(slider.value);
});

//color selector, the suer can use custom colours
let color = "black";
const colorSelector = document.querySelector("#colorSelector");
colorSelector.addEventListener("input", () => {
  color = colorSelector.value;
});

//eraser button, allows us to erase squares
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
  colorSelector.value = "#FFFFFF";
  color = colorSelector.value;
});

//reset button, erases grid and reverts to default value
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  makeGrid(16);
  slider.value = 16;
  sliderValue.textContent = slider.value;
  colorSelector.value = "#000000";
  color = colorSelector.value;
});

//this is used to check whether a grid already exists later in the execution
let isGrid;

function makeGrid(gridSize) {
  //this if statement deletes the previous grid before replacing it with the new one
  if (isGrid) {
    gridContainer.textContent = "";
  }

  //we're making sure the squares fit inside our 960px container
  let squareHeight = `${960 / gridSize}px`;

  //selects the root element of the document, <html>
  let root = document.querySelector(":root");

  //setting dimensions of gird squares
  root.style.setProperty("--divHeight", squareHeight);
  root.style.setProperty("--divWidth", squareHeight);

  //this loop creates a grid of squares which fit inside our container
  for (i = 0; i < gridSize ** 2; i++) {
    const square = document.createElement("div");
    //event listener to alter div colour
    square.addEventListener("mouseover", (e) => {
      //with this we target the div which is currently hovered on, affecting only this div
      e.target.style.backgroundColor = color;
    });
    //append the squares to the grid's container
    square.classList.add("square");
    gridContainer.appendChild(square);
    isGrid = true;
  }
}

//by default we start with a 16 square grid
makeGrid(16);
