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
		if (tile[i].dataset.x == x && tile[i].dataset.y == y) {
			return tile[i];
		}
	}
		
}

function upPress(playerName) {
	let activePlayer = activeCharacterSelector(playerName);
	
	let otherPlayer = otherCharacterSelector(playerName);
	if (activePlayer.dataset.y != 0) {
		// potential valid move
		if (otherPlayer.dataset.x != activePlayer.dataset.x && otherPlayer.dataset.y != activePlayer.dataset.y - 1) {
			// valid move
			let newTile = selectGridElem(activePlayer.dataset.x, activePlayer.dataset.y - 1);
			newTile.classList.add(playerName);
			activePlayer.classList.remove(playerName);
		}
	}
}

function downPress(playerName) {
	let p = characterSelector(playerName);
}

function leftPress(playerName) {
	let p = characterSelector(playerName);
}

function rightPress(playerName) {
	let p = characterSelector(playerName);
}