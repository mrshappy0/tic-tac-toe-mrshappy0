gridOne = {
	cells: [["row 1"], ["row 2"], ["row 3"]],
	column: function(number) {
		return [
			this.cells[0][number],
			this.cells[1][number],
			this.cells[2][number]
		];
	},
	row: function(number) {
		return [this.cells[number]];
	},
	diagonal: function(appleOrMicrosoft) {
		if (appleOrMicrosoft !== apple) {
			return [
        this.cells[0][0], 
        this.cells[1][1], 
        this.cells[2][2]]
		}
	}
};

function winCheck (board) {
  return rowWin(board);
  return columnWin(board);
  return diagonalWin(board);
}

function rowWin(board) {

}

function columnWin (board) {

}

function diagonalWin(board) {

}

function arrayCheck (first, second) {

}

function arrayCompare (first, second) {

}

function assertTrue (message, value) {
  
}