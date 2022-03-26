const DIMENSION = 8;
const BLACK = 333333;
const WHITE = "FFFFFF";

var buttons = document.querySelectorAll("button");
var container = document.querySelector(".container");
var rows = document.querySelectorAll("tr");

var board = document.createElement('board');

let brushColor;
let brushActive;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function generateBoard() {
  for(i = 0; i < DIMENSION; i++) {
    var row = document.createElement('tr'); // Create row
    for(j = 0; j < DIMENSION; j++) {
      var cell = document.createElement('td'); // Create a cell
      cell.addEventListener("click", (e) => {
        if(brushActive == true) {
          if(brushColor != BLACK && brushColor != WHITE)
            brushColor = randColor();
          e.target.style.background = `#${brushColor}`;
        }
      });

      cell.setAttribute('class', 'cell');
      row.append(cell);
    }
    board.append(row);
  }
  container.append(board);
}

// Default board
generateBoard();
setDefault();

function setDefault() {
  buttons.forEach(button => {
    button.style.background = "white";
    button.style.color = `#${BLACK}`;
    brushColor = BLACK; 
    brushActive = true;
    mouseDown = false;
  });
}

function clearBoard() {
  board.innerHTML = "";
  generateBoard();
}

// Color button
var colorButton = document.querySelector(".colorMode");
colorButton.addEventListener("click", colorButtonPressed)

function colorButtonPressed() {
  setDefault();
  colorButton.style.backgroundColor = `#${BLACK}`; 
  colorButton.style.color = "white";
  brushColor = BLACK;
  brushActive = true;
}

// Erase button
var eraseButton = document.querySelector(".eraser");
eraseButton.addEventListener("click", eraserButtonPressed)

function eraserButtonPressed() {
  setDefault();
  eraseButton.style.background = `#${BLACK}`;
  eraseButton.style.color = "white";
  brushColor = WHITE;
  brushActive = true;
}

// Clear button
var clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearButtonPressed);

function clearButtonPressed() {
  setDefault();
  clearButton.style.background = `#${BLACK}`;
  clearButton.style.color = "white";
  clearBoard();
  brushActive = false;
}

// Rainbow button
var rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", rainbowButtonPressed);

function rainbowButtonPressed() {
  setDefault();
  rainbowButton.style.background = `#${BLACK}`;
  rainbowButton.style.color = "white";
  brushColor = randColor();
}

const randColor = () =>  {
  return Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}