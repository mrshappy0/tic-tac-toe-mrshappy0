let numberCount = 0;
function TurnCounter() {
	let turnCountArea = document.getElementById("Turn Count");
	numberCount++;
	turnCountArea.textContent = "Turn Count: " + numberCount;
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
			checkWin("X");
		} else {
			blockEvent("O", cell, "X");
			checkWin("O");
		}
	});
}

function checkWin(variable) {
	if (
		document.getElementById("cell-0").textContent === variable &&
		document.getElementById("cell-1").textContent === variable &&
		document.getElementById("cell-2").textContent === variable
	) {
		alert("Player " + variable + " Wins");
	} else if (
		document.getElementById("cell-3").textContent === variable &&
		document.getElementById("cell-4").textContent === variable &&
		document.getElementById("cell-5").textContent === variable
	) {
		alert("Player " + variable + " Wins");
	} else if (
		document.getElementById("cell-6").textContent === variable &&
		document.getElementById("cell-7").textContent === variable &&
		document.getElementById("cell-8").textContent === variable
	) {
		alert("Player " + variable + " Wins");
	} else if (
		document.getElementById("cell-0").textContent === variable &&
		document.getElementById("cell-3").textContent === variable &&
		document.getElementById("cell-6").textContent === variable
	) {
		alert("Player " + variable + " Wins");
	} else if (
		document.getElementById("cell-1").textContent === variable &&
		document.getElementById("cell-4").textContent === variable &&
		document.getElementById("cell-7").textContent === variable
	) {
		alert("Player " + variable + " Wins");
	} else if (
		document.getElementById("cell-2").textContent === variable &&
		document.getElementById("cell-5").textContent === variable &&
		document.getElementById("cell-8").textContent === variable
	) {
		alert("Player " + variable + " Wins");
	} else if (
		document.getElementById("cell-0").textContent === variable &&
		document.getElementById("cell-4").textContent === variable &&
		document.getElementById("cell-8").textContent === variable
	) {
		alert("Player " + variable + " Wins");
	} else if (
		document.getElementById("cell-2").textContent === variable &&
		document.getElementById("cell-4").textContent === variable &&
		document.getElementById("cell-6").textContent === variable
	) {
		alert("Player " + variable + " Wins");
	}
}


