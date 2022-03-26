var container = document.querySelector(".container");

var board = document.createElement('board');

for(i = 0; i < 16; i++) {
  // Create row
  var row = document.createElement('tr');
  for(j = 0; j < 16; j++) {
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
