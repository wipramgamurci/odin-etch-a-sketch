// const gridSize = 16;

const createGridButton = document.querySelector("#createGrid");
createGridButton.addEventListener("click", () => {
  let gridSize = prompt("masukan angka", 16);
  createGrid(gridSize);
});

const container = document.querySelector(".container");

const createGrid = (gridSize) => {
  container.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.setAttribute("class", "gridItem");
    gridItem.style.width = `${500 / gridSize - 2}px`;
    gridItem.style.height = `${500 / gridSize - 2}px`;
    container.appendChild(gridItem);
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = randomColor();
    });
  }
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};

// createGrid(8);
