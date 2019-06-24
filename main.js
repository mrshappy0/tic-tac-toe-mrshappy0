let numberCount = 0;
function TurnCounter() {
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

function blockEvent(turn, cell, xOrO) {
	if (cell.innerHTML === "") {
		cell.innerHTML = turn;
		statusArea.textContent = "Player " + xOrO + " Turn";
		TurnCounter();
	} else {
		alert("Try an empty cell!");
	}
}

let cellArray = document.querySelectorAll(".cells");
for (const cell of cellArray) {
	cell.addEventListener("click", () => {
		if (turnCheck(statusArea.textContent) === true) {
			blockEvent("X", cell, "O");
			checkWin();
		} else {
			blockEvent("O", cell, "X");
			checkWin();
		}
	});
}

function checkWin() {
	if (
		document.getElementById("cell-0").textContent === "X" &&
		document.getElementById("cell-1").textContent === "X" &&
		document.getElementById("cell-2").textContent === "X"
	) {
		alert("Win");
	} else if (
		document.getElementById("cell-3").textContent === "X" &&
		document.getElementById("cell-4").textContent === "X" &&
		document.getElementById("cell-5").textContent === "X"
	) {
		alert("Win");
	} else if (
		document.getElementById("cell-6").textContent === "X" &&
		document.getElementById("cell-7").textContent === "X" &&
		document.getElementById("cell-8").textContent === "X"
	) {
		alert("Win");
	} else if (
		document.getElementById("cell-0").textContent === "O" &&
		document.getElementById("cell-3").textContent === "O" &&
		document.getElementById("cell-6").textContent === "O"
	) {
		alert("Win");
	} else if (
		document.getElementById("cell-1").textContent === "O" &&
		document.getElementById("cell-4").textContent === "O" &&
		document.getElementById("cell-7").textContent === "O"
	) {
		alert("Win");
	} else if (
		document.getElementById("cell-2").textContent === "O" &&
		document.getElementById("cell-5").textContent === "O" &&
		document.getElementById("cell-8").textContent === "O"
	) {
		alert("Win");
	} else if (
		document.getElementById("cell-0").textContent === "O" &&
		document.getElementById("cell-4").textContent === "O" &&
		document.getElementById("cell-8").textContent === "O"
	) {
		alert("Win");
	} else if (
		document.getElementById("cell-2").textContent === "O" &&
		document.getElementById("cell-4").textContent === "O" &&
		document.getElementById("cell-6").textContent === "O"
	) {
	alert("Win");
	}
}




