const container = document.querySelector(".container");
const gridInput = document.querySelector(".grid-input");

function createSquare(gridNum) {
  let gridArea = gridNum * gridNum;
  for (let i = 1; i <= gridArea; i++) {
    let divItem = document.createElement("div");
    divItem.classList.add("origin");
    container.appendChild(divItem);
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  }
  var gridPixels = container.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseover", colorGrid)
  );
}

function colorGrid() {
  this.classList.add("change");
}
function getGridNum() {
  let gridNumAnswer = prompt("How many squares?")
    if (gridNumAnswer <= 100){
        let gridPixels = container.querySelectorAll("div");
        gridPixels.forEach((gridPixel) => gridPixel.remove());
        createSquare(gridNumAnswer);
    } else {
        getGridNum()
    }
  }
  

gridInput.addEventListener("click", getGridNum);

//Default size
createSquare(16);

