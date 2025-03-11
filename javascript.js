const square = document.createElement("div");
const fullPageContainer = document.querySelector(".containerAllContent");
const oneSquare = document.querySelector(".single-square");
const clearButton = document.querySelector("#clearButton");

const fullPageLayout = (containerSize) => {
  fullPageContainer.setAttribute(
    "style",
    `display:flex; flex-wrap: wrap; align-content: flex-start; max-width: ${containerSize}px; max-height: ${containerSize}px;`
  );
};

const userPrompt = () => {
  const n = prompt("how many squares");
  printGrid(n);
};

const printGrid = (n) => {
  let i = 0;
  while (i < n * n) {
    const squareSize = calculateSquareSize(n);
    const newSquare = square.cloneNode(true);
    fullPageContainer.append(newSquare);
    newSquare.classList.toggle("single-square");
    newSquare.setAttribute("id", `${i}`);
    newSquare.setAttribute(
      "style",
      `display: flex; border: solid 1px black; min-width: ${squareSize}px; max-width: ${squareSize}px; min-height: ${squareSize}px; max-height:${squareSize}px; box-sizing: border-box;`
    );
    i++;
  }
};

const calculateSquareSize = (nOfSquares) => {
  let containerSize = 520;
  let squareSize = containerSize / nOfSquares;
  return squareSize;
};

document.addEventListener("DOMContentLoaded", () => {
  let containerSize = 520;
  fullPageLayout(containerSize);
  userPrompt();
});

fullPageContainer.addEventListener("mouseover", (oneSquare) => {
  let divId = oneSquare.target.id;
  console.log(oneSquare.target.id);
  if (isMousePressed == true) {
    document.getElementById(divId).style.backgroundColor = "black";
  }
});

fullPageContainer.addEventListener("click", () => {
  isMousePressed = false;
});

let isMousePressed = false;

fullPageContainer.addEventListener("mousedown", (oneSquare) => {
  isMousePressed = true;
  let divId = oneSquare.target.id;
  document.getElementById(divId).style.background = "red";
});

fullPageContainer.addEventListener("mouseup", () => {
  isMousePressed = false;
});

clearButton.addEventListener("click", () => {
  const allSquares = document.querySelectorAll(".single-square");

  allSquares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

const randomRgbValue = () => {
  let i = 0;
  let randomColor = "";

  while (i < 3) {
    randomRGB = Math.floor(Math.random() * 255)
      .toString(16)
      .padStart(2, "0");
    randomColor = randomRGB + randomColor;
    i++;
  }
  let newColor = "#" + randomColor;
  return newColor;
};
