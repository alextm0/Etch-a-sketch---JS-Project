const DIMENSION = 8;

var container = document.querySelector(".container");
var board = document.createElement('board');

function generateBoard() {
  for(i = 0; i < DIMENSION; i++) {
    // Create row
    var row = document.createElement('tr');
    for(j = 0; j < DIMENSION; j++) {
      // Create a cell
      var cell = document.createElement('td');
  
      if((i + j) % 2 == 0) {
        cell.setAttribute('class', 'cell whitecell');
        row.append(cell);
      }
      else {
        cell.setAttribute('class', 'cell blackcell');
        row.append(cell);
      }
    }
    board.append(row);
  }
  
  container.append(board);
}

generateBoard();

var colorButton = document.querySelector
