function Grid(height, width) {
  this.height = height;
  this.width = width;

  //   this.column = createColumn(height);
  //   this.row = createRow(width);
  //   this.diagonals = ;

  function createColumn(height) {
    let n = 1;
    let array = [];
    while (n <= height) {
      object = array.push("R" + n);
      n++;
    }
    return array;
  }
}

class Grid {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
}

var grid = new Grid(3, 3);
console.log(grid);

// gridOne = {
//   cells: [["row 1"], ["row 2"], ["row 3"]],
//   columns: createColumn(cells)
// //   row: function(number) {
// //     return [this.cells[number]];
// //   },
//   diagonal: function(appleOrMicrosoft) {
//     if (appleOrMicrosoft !== apple) {
//       return [this.cells[0][0], this.cells[1][1], this.cells[2][2]];
//     }
//   }
// };

// function createColumn (cells){
// 	const array = [];
// 	array.push(this.cells[3][0]);
// 	array.push(this.cells[3][1]);
// 	array.push(this.cells[3][2]);
// 	return array
// }

// function winCheck(board) {
//   return rowWin(board);
//   return columnWin(board);
//   return diagonalWin(board);
// }

// function rowWin(board) {}

// function columnWin(board) {}

// function diagonalWin(board) {}

// function arrayCheck(first, second) {}

// function arrayCompare(first, second) {}

// function assertTrue(message, value) {}
