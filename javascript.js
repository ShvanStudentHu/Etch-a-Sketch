const square = document.createElement("div");
const fullPageContainer = document.querySelector(".containerAllContent");

const fullPageLayout = () => {
  fullPageContainer.setAttribute(
    "style",
    "display:flex; flex-wrap: wrap; align-content: flex-start;"
  );
};

const printGrid = () => {
  const n = prompt("how many squares");
  const squareSize = calculateSquareSize(n);
  let i = 0;
  while (i < n) {
    const newSquare = square.cloneNode(true);
    fullPageContainer.append(newSquare);
    newSquare.classList.toggle("single-square");

    newSquare.setAttribute(
      "style",
      `display: flex; border: solid 1px black; min-width: ${squareSize}px; max-width: ${squareSize}px; min-height: ${squareSize}px; max-height:${squareSize}px; `
    );

    i++;
  }
};

const calculateSquareSize = (nOfSquares) => {
  let containerSize = 520;
  squareSize = containerSize / nOfSquares;
  console.log(squareSize);
  return Math.round(squareSize);
};

document.addEventListener("DOMContentLoaded", () => {
  fullPageLayout();
  printGrid();
});
