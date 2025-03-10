const square = document.createElement("div");
const fullPageContainer = document.querySelector(".containerAllContent");

const fullPageLayout = (containerSize) => {
  fullPageContainer.setAttribute(
    "style",
    `display:flex; flex-wrap: wrap; align-content: flex-start; max-width: ${containerSize}px; min-height: ${containerSize}px; max-height: ${containerSize}px;`
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
    newSquare.setAttribute(
      "style",
      `display: flex; border: solid 1px black; min-width: ${squareSize}px; max-width: ${squareSize}px; min-height: ${squareSize}px; max-height:${squareSize}px; box-sizing: border-box`
    );
    i++;
  }
};

const calculateSquareSize = (nOfSquares) => {
  let containerSize = 520;
  let squareSize = containerSize / nOfSquares;
  console.log(squareSize);
  return squareSize;
};

document.addEventListener("DOMContentLoaded", () => {
  let containerSize = 520;
  fullPageLayout(containerSize);
  userPrompt();
});
