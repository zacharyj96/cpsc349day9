function activeCharacterSelector(playerName) {
	let p;
	if (playerName == "player1") {
		p = document.getElementsByClassName("player1");
	} else {
		p = document.getElementsByClassName("player2");
	}
	return p[0];
}

function otherCharacterSelector(playerName) {
	let p;
	if (playerName == "player1") {
		p = document.getElementsByClassName("player2");
	} else {
		p = document.getElementsByClassName("player1");
	}
	
	return p[0];
}

function selectGridElem(x, y) {
	let tile = document.getElementsByTagName("td");
	for (let i = 0; i < tile.length; i++) {
		if (Number(tile[i].dataset.x) == x && Number(tile[i].dataset.y) == y) {
			return tile[i];
		}
	}
		
}

function upPress(playerName) {
	let activePlayer = activeCharacterSelector(playerName);
	
	let otherPlayer = otherCharacterSelector(playerName);
	if (Number(activePlayer.dataset.y) != 0) {
		// potential valid move
		if (Number(otherPlayer.dataset.x) != Number(activePlayer.dataset.x) || Number(otherPlayer.dataset.y) != Number(activePlayer.dataset.y) - 1) {
			// valid move
			let newTile = selectGridElem(Number(activePlayer.dataset.x), Number(activePlayer.dataset.y) - 1);
			newTile.classList.add(playerName);
			activePlayer.classList.remove(playerName);
		}
	}
}

function downPress(playerName) {
	let activePlayer = activeCharacterSelector(playerName);
	
	let otherPlayer = otherCharacterSelector(playerName);
	if (Number(activePlayer.dataset.y) != 7) {
		// potential valid move
		if (Number(otherPlayer.dataset.x) != Number(activePlayer.dataset.x) || Number(otherPlayer.dataset.y) != Number(activePlayer.dataset.y) + 1) {
			// valid move
			let newTile = selectGridElem(Number(activePlayer.dataset.x), Number(activePlayer.dataset.y) + 1);
			newTile.classList.add(playerName);
			activePlayer.classList.remove(playerName);
		}
	}
}

function leftPress(playerName) {
	let activePlayer = activeCharacterSelector(playerName);
	
	let otherPlayer = otherCharacterSelector(playerName);
	if (Number(activePlayer.dataset.x) != 0) {
		// potential valid move
		if (Number(otherPlayer.dataset.x) != Number(activePlayer.dataset.x) - 1 || Number(otherPlayer.dataset.y) != Number(activePlayer.dataset.y)) {
			// valid move
			let newTile = selectGridElem(Number(activePlayer.dataset.x) - 1, Number(activePlayer.dataset.y));
			newTile.classList.add(playerName);
			activePlayer.classList.remove(playerName);
		}
	}
}

function rightPress(playerName) {
	let activePlayer = activeCharacterSelector(playerName);
	
	let otherPlayer = otherCharacterSelector(playerName);
	if (Number(activePlayer.dataset.x) != 7) {
		// potential valid move
		if (Number(otherPlayer.dataset.x) != Number(activePlayer.dataset.x) + 1 || Number(otherPlayer.dataset.y) != Number(activePlayer.dataset.y)) {
			// valid move
			let newTile = selectGridElem(Number(activePlayer.dataset.x) + 1, Number(activePlayer.dataset.y));
			newTile.classList.add(playerName);
			activePlayer.classList.remove(playerName);
		}
	}
}

document.onkeyup = function(event) {
	event = event || window.event;
	var key = event.key || event.which || event.keyCode;
	if (key == 'w') {
		upPress("player1");
	} else if (key == 'a') {
		leftPress("player1");
	} else if (key == 's') {
		downPress("player1");
	} else if (key == 'd') {
		rightPress("player1");
	} else if (key == 'i') {
		upPress("player2");
	} else if (key == 'j') {
		leftPress("player2");
	} else if (key == 'k') {
		downPress("player2");
	} else if (key == 'l') {
		rightPress("player2");
	}
};