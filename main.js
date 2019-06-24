let numberCount = 0 
function turnCount () {
	for (const cell of cellArray) {
		if (cell.innerHTML != ""){
			numberCount ++;
		}
	}
}

let disableStartButton = document.getElementById("start");
let statusArea = document.getElementById("status area");
disableStartButton.addEventListener("click", () => {
	document.getElementById("start").disabled = true;
	statusArea.textContent = "Player X Start";
});

function turnCheck(turn) {
	if (turn === "Player X Start" || turn === "Player X Turn") {
		return true;
	} else {
		return false;
	}
}

function blockEvent (turn, cell, xOrO){
	if (cell.innerHTML === "") {
		cell.innerHTML = turn;
		statusArea.textContent = "Player " + xOrO + " Turn";
	} else {
		alert ("Try an empty cell!");
	}
}


let cellArray = document.querySelectorAll(".cells");
for (const cell of cellArray) {
	cell.addEventListener("click", () => {
		if (turnCheck(statusArea.textContent) === true) {
			blockEvent("X", cell, "O");
		} else {
			blockEvent("O", cell, "X");
		}
	});
}


// If shit breaks, cut off all the code below!---------------------------------


/*(let winCombinations = [
	[0, 1, 2, "top-row"],
	[3, 4, 5, "middle-row"],
	[6, 7, 8, "bottom-row"],
	[0, 3, 6, "first-column"],
	[1, 4, 7, "middle-column"],
	[2, 5, 8, "last-column"],
	[0, 4, 8, "microsoft",
	[2, 4, 6, "apple"]
];)*/

/*function winCheck() {
	for (let win of winCombinations) {
		if (winArray (need to defin) (win[0], win[1], win[2])) {
showWinner (need to define) (win[3] (this should draw a line on that win comibation)
}

if (turnCount() (define) === 9) {
statusArea.innerHTML = "You tied!"
}
	else {
		(change turn)
	}
}

let winningArrayX = ['X','X','X']
let winningArrayO = ['O','O','O']

function winArray () {
for (let i = 0; i < 2; i++)
	if ()
}*/