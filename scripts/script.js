const createGridButton = document.querySelector("#create-grid");

createGridButton.addEventListener("click", () => {
  let gridSize = prompt("masukan angka", 16);
  createGrid(gridSize);
});

const container = document.querySelector(".container");

const createGrid = (gridSize) => {
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Insert number from 1 to 100");
  } else {
    container.innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridItem = document.createElement("div");
      gridItem.setAttribute("class", "grid-item");
      gridItem.style.width = `${500 / gridSize - 2}px`;
      gridItem.style.height = `${500 / gridSize - 2}px`;
      container.appendChild(gridItem);
      gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = randomColor();
      });
    }
  }
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};

const clearGridButton = document.querySelector("#clear-grid");
clearGridButton.addEventListener("click", () => {
  clearGrid();
});
const clearGrid = () => {
  gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item) => {
    item.style.backgroundColor = "white";
  });
};

createGrid(16);
