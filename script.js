console.log("TEST");

const gridContainer = document.querySelector("#gridContainer");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");
sliderValue.textContent = slider.value;

/*working and working well
  Things to Add?
  +Eraser
  +Color Picker
  +Make page presentable
*/

slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
  //sizing gets messed up when called in here
  makeGrid(slider.value);
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
      e.target.style.backgroundColor = "black";
    });
    //append the squares to the grid's container
    square.classList.add("square");
    gridContainer.appendChild(square);
    isGrid = true;
  }
}

//by default we start with a 16 square grid
makeGrid(16);
