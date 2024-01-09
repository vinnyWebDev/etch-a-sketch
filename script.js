console.log("TEST");

const gridContainer = document.querySelector("#gridContainer");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");
sliderValue.textContent = slider.value;

/* START FROM HERE */

//working, now make it dynamic
function makeGrid(gridSize) {
  //these need to defined inside our function for sizing to work
  let squareHeight = `${960 / gridSize}px`;
  let root = document.querySelector(":root");
  root.style.setProperty("--divHeight", squareHeight);
  root.style.setProperty("--divWidth", squareHeight);

  for (i = 0; i < gridSize ** 2; i++) {
    const square = document.createElement("div");
    //event listener to alter div colour
    square.addEventListener("mouseover", (e) => {
      //with this we target the div which is currently hovered on, affecting only this div
      e.target.style.backgroundColor = "black";
    });
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}
//we need to make it so grid matches slider.value
slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
  //sizing gets messed up when called in here
  makeGrid(slider.value);
});
//works here, but not in sldier?
//it might be somehting that's happening on load
makeGrid(56);
