


// Get chess board container. 
const boardContainer = document.querySelector('div#container main.board');

// Define column letters. 
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Define board size. 
const boardSize = 8;

// Initialize set of all squares on game board. 
let allBoardSquares;


/*****/


// Create layout for game board. 
createGameBoard();

// Fill game board with pieces. 
fillGameBoardPieces();


/*****/


// Create layout for game board. 
function createGameBoard() {
	
	// Initialize contents of game board. 
	let boardContent = '';

	// Compile contents of game board. 
	for(let i=0 ; i<boardSize ; i++) {

		// Get row number. 
		let rownumber = boardSize-i;

		// Add row to game board. 
		boardContent += `
		<!-- row -->
		<div class="row">
			${ createRow(rownumber) }
		</div>
		<!-- /row -->`;
	}

	// Display contents of game board. 
	boardContainer.innerHTML = boardContent;

	// Get all squares on game board. 
	allBoardSquares = document.querySelectorAll('div#container main.board div.row div.square');

	/****/ 

	// Create row. 
	function createRow(rownumber) {
	
		// Initialize contents of row on game board. 
		let rowinner = '';
		
		// Compile contents of game board row. 
		for(let i=0 ; i<boardSize ; i++) {

			// Get square id. 
			let sqid = alphabet[i]+rownumber;

			// Get uppercase square id. 
			let SQID = `${sqid}`.toUpperCase();

			// Add square to row. 
			rowinner += `
			<!-- square -->
			<div class="square" data-id="${sqid}" title="${SQID}">

				<!-- caption -->
				<span class="caption">${sqid}</span>
				<!-- /caption -->

			</div>
			<!-- /square -->`;
		}

		// Return contents of game board row. 
		return rowinner;
	}
}

// Fill game board with game pieces. 
function fillGameBoardPieces() {

	// Add chess pieces to board. 
	for(let piece of boardData) {

		// Get type of current game piece. 
		let piecetype = getPieceTypeById( piece.piecetypeid || 'null' );
		let piecetypename = piecetype.name || 'unknownPiece';
		// console.log('Game piece type:',piecetypename);

		// Get team id of current piece. 
		let teamid = piece.teamid;
		// console.log('Game piece team:',teamid);

		// Get board location for current piece. 
		let destinationsquare = getGameBoardSquareById(piece.boardlocationid);
		// console.log('Game piece location:', piece.boardlocationid, destinationsquare);

		// Create piece to be added. 
		let pieceLayout = createGamePiece(piecetype,teamid,true);

		// Add piece to destination square on game board. 
		destinationsquare.insertAdjacentHTML('beforeend',pieceLayout);
	}

	/****/

	// Get piece type by id. 
	function getPieceTypeById(piecetypeid) {

		// Return nothing if id not given. 
		if(!piecetypeid) return null;

		// Go thru all piece types. 
		for(let piecetype of pieceTypeData) {

			// Check for matching piece type. 
			let matchingPiece = ( (piecetype.id).toUpperCase() == piecetypeid.toUpperCase() );

			// Return matching piece type if found. 
			if(matchingPiece) return piecetype;
		}

		// Return nothing if not found. 
		return null;
	}

	// Get square on game board by id. 
	function getGameBoardSquareById(queryId) {
		
		// Go thru all squares on game board. 
		for(let square of allBoardSquares) {
	
			// Get id of current square. 
			let currentId = square.getAttribute('data-id');
	
			// Check for matching square. 
			let matchingSquare = (currentId==queryId);
	
			// Return matching square if found. 
			if(matchingSquare) return square;
		}
	
		// Return nothing if not found. 
		return null;
	}

	// Create layout for game piece. 
	function createGamePiece(piecetype,teamid,useIcon) {

		// Compile layout for game piece. 
		return `
		<!-- piece -->
		<div class="piece ${piecetype.name} ${teamid}" data-piecetype="${piecetype.name}" data-teamid="${teamid}" draggable="true">

			<!-- label -->
			<span class="label">${ getPieceLabel() }</span>
			<!-- /label -->

		</div>
		<!-- /piece -->`;

		/***/
		
		// Get label for current piece. 
		function getPieceLabel() {

			// Return simple label for current piece. 
			if(!useIcon) return `${piecetype.id}`;
		
			// Get icon data for current piece. 
			let pieceicon = piecetype[`${ teamid }icon`];
			// console.log('Game piece icon data:',pieceicon);

			// Return full icon label for current piece. 
			return `
			<!-- icon -->
			<img class="icon" src="${ pieceicon.fileurl }" draggable="false">
			<!-- /icon -->`;
		}
	}
}
