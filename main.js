let numberCount = 0;
function TurnCounter () {
	let turnCountArea = document.getElementById("Turn Count");
	numberCount++;
	turnCountArea.textContent = "Turn Count: " + numberCount + ".";
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
		TurnCounter();
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


