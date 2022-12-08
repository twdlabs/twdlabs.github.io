


// Get chess board container. 
const boardContainer = document.querySelector('div#container main.board');

// Define board size. 
const boardSize = 8;

// Initialize selected piece. 
let selectedPiece = null;

// Initialize total number of moves made. 
let totalNumberOfMoves = 0;


// Define team ids. 
const teamIds = ['light','dark'];

// Initialize index of current player. 
let currentPlayerIndex = 0;


/*****/


// Create board layout. 
createBoard();

// Fill board with pieces. 
fillBoard();

// Activate pieces on board for current player. 
activateCurrentPlayer();


/*****/


// Create board layout. 
function createBoard() {
	
	// Initialize contents of chess board. 
	let boardContent = '';

	// Add rows to chess board. 
	for(let i=0 ; i<boardSize ; i++) {
		boardContent += createRow(boardSize-i);
	}

	// Show contents of chess board. 
	boardContainer.innerHTML = boardContent;


	/****/ 


	// Create row. 
	function createRow(rowId) {

		// Define column letters. 
		const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
		// Initialize contents of chess board row. 
		let rowContent = '';
	
		// Add rows to chess board. 
		for(let i=0 ; i<boardSize ; i++) {
			rowContent += createSquare(letters[i]+rowId);
		}
		// 
		return `

		<!-- row -->
		<div class="row">
			${rowContent}
		</div>
		<!-- /row -->`;

		/***/

		// Create square. 
		function createSquare(id) {

			// Get uppercase version of id. 
			let ID = `${id}`.toUpperCase();

			// Return result. 
			return `
			<!-- square -->
			<div class="square" data-id="${id}" title="${ID}">

				<!-- caption -->
				<span class="caption">${id}</span>
				<!-- /caption -->

			</div>
			<!-- /square -->`;
		}
	}
}

// Fill board with pieces. 
function fillBoard() {

	// Add chess pieces to board. 
	for(let piece of boardData) {

		// Get id of current piece. 
		let id = (piece.pieceid) || 'null';
		// console.log('id:',id);

		// 
		let xyz = getPieceNameById(id);

		// Get name of current piece. 
		let name = xyz[1] || '[Unknown piece]';
		// console.log('name:',name);

		// Get label for current piece. 
		let label = xyz[0] || 'xyz';
		// console.log('label:',label);

		// Get team id of current piece. 
		let teamid = piece.teamid;
		// console.log('teamid:',teamid);

		// Get board location for current piece. 
		let location = piece.boardlocation;
		// console.log('location:',location);

		// Add piece to board. 
		addPieceToBoard(name,label,teamid,location);
	}

	/****/
	
	// Add chess piece to board. 
	function addPieceToBoard(piecename,piecelabel,teamid,locationid) {
		// console.log('piece name:',piecename);
		// console.log('piece label:',piecelabel);
		// console.log('piece color:',teamid);
		// console.log('location id:',locationid);

		// Get square where piece is to be located. 
		let destination = getSquareById(locationid);
		// console.log('destination:',destination);

		// Create piece to be added. 
		let piece = createPiece();

		// Add piece to destination square. 
		destination.insertAdjacentHTML('beforeend',piece);
		
		/***/

		// Create piece. 
		function createPiece() {

			// 
			return `
			<!-- piece -->
			<div class="piece ${piecename} ${teamid}" data-name="${piecename}" data-teamid="${teamid}">${piecelabel}</div>
			<!-- /piece -->`;
		}
	}

	// Get piece name by id. 
	function getPieceNameById(pieceid) {

		// Return nothing if id not given. 
		if(!pieceid) return null;

		// Go thru all piece types. 
		for(let piece of pieceData) {

			// Check for matching piece type. 
			let matchingPiece = ( (piece.id).toUpperCase() == pieceid.toUpperCase() );

			// Return matching piece type if found. 
			if(matchingPiece) return ([piece.id, piece.name]);
		}

		// Return nothing if not found. 
		return null;
	}
}

// Activate pieces on board for current player. 
function activateCurrentPlayer() {

	// Get all pieces on board. 
	let allPieces = document.querySelectorAll(`div#container main.board div.row div.square div.piece.${ teamIds[currentPlayerIndex] }`);

	// Activate squares with pieces. 
	for(let piece of allPieces) {

		// Get square where piece is located. 
		let square = piece.parentElement;
		// console.log('square:',square);

		// Activate clicks on squares with pieces. 
		square.addEventListener('click',selectPiece);
	}

	// Indicate turn with color indicator. 
	document.querySelector('div#container aside.turner').style.setProperty('--turncolor',`var(--${teamIds[currentPlayerIndex]}color)`);
}

// Get square by id. 
function getSquareById(queryId) {

	// Get all squares. 
	let allSquares = document.querySelectorAll('div#container main.board div.row div.square');
	
	// Go thru all squares. 
	for(let square of allSquares) {

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

// Highlight square of selected piece. 
function selectPiece(event) {

	// Get selected square. 
	let selectedSquare = event.currentTarget;

	// Check if square already selected. 
	let alreadySelected = selectedSquare.classList.contains('active');
	// console.log('alreadySelected:',alreadySelected);

	// Update selected piece. 
	selectedPiece = selectedSquare.querySelector('div.piece');
	// Get name of selected piece. 
	let selectedPieceName = selectedPiece.getAttribute('data-name');
	// Get color of selected piece. 
	let selectedPieceColor = selectedPiece.getAttribute('data-teamid');

	// Get id of selected square. 
	let selectedSquareId = selectedSquare.getAttribute('data-id');
	
	// Un-select all squares on board. 
	unselectAllSquares();
	
	// Highlight selected square if not already selected. 
	if(!alreadySelected) {
		console.log('Selecting:',selectedPieceColor,selectedPieceName,selectedSquareId/* ,selectedPiece */);
		
		// Highlight selected square. 
		selectedSquare.classList.add('active');

		// Allow movement of selected piece. 
		enterMovingMode();
	}
	// Leave all squares un-highlighted otherwise (if something was already selected). 
	// else {

	// 	// Dis-allow movement of any piece. 
	// 	exitMovingMode();
	// }

	/****/

	// Allow movement of selected piece. 
	function enterMovingMode() {
		console.log('\tNow moving...');

		// Get all squares on board. 
		let allSquares = document.querySelectorAll('div#container main.board div.row div.square');
		
		// Go thru all squares on board. 
		for(let sqr of allSquares) {
			sqr.addEventListener('click',movePiece);
		}
	}
}

// Un-highlight all squares on board. 
function unselectAllSquares() {

	// Get all pieces on board. 
	// let allPieces = document.querySelectorAll('div#container main.board div.row div.square div.piece');

	// Get all squares that contain pieces. 
	// let allOccupiedSquares = [...allPieces].map( p=>p.parentElement );

		// Get all squares on board. 
		let allSquares = document.querySelectorAll('div#container main.board div.row div.square');
	
	// Un-highlight all other squares. 
	for(let sqr of allSquares/* allOccupiedSquares */) {
		sqr.classList.remove('active');
	}

	// Dis-allow movement of any piece. 
	exitMovingMode();

	/****/

	// Dis-allow movement of any piece. 
	function exitMovingMode() {
		console.log('\tDone moving.');

		// Get all squares on board. 
		let allSquares = document.querySelectorAll('div#container main.board div.row div.square');

		// Go thru all squares on board. 
		for(let sqr of allSquares) {
			sqr.removeEventListener('click',movePiece);
		}
	}
}

// Move piece to selected square (if valid). 
function movePiece(event) {

	// Get destination square. 
	let destinationSquare = event.currentTarget;
	console.log('Moving to:',destinationSquare.getAttribute('data-id'),destinationSquare);

	// Check for proper movement pattern. 
	let properMovePattern = checkForProperPattern();
	console.log('\tProper move pattern:',properMovePattern);

	// Check for teammate piece at destination. 
	let friendlyPieces = destinationSquare.querySelectorAll(`div.piece.${ teamIds[currentPlayerIndex] }`);
	let friendlyPiecePresent = (friendlyPieces.length > 0);
	console.log('\tFriendly piece present:',friendlyPiecePresent/* ,friendlyPieces */);

	// Check if movement is valid. 
	let isValidMovement = ( properMovePattern && !friendlyPiecePresent );
	console.log('\tValid movement:',isValidMovement);

	// Make movement if valid. 
	if(isValidMovement) {

		// Check for opponent piece at destination. 
		let opposingPieces = destinationSquare.querySelectorAll(`div.piece.${ teamIds[(currentPlayerIndex+1)%2] }`);
		let opposingPiecePresent = (opposingPieces.length > 0);
		console.log('\tOpposing piece present:',opposingPiecePresent/* ,opposingPieces */);

		// TODO: Move selected piece to destination. 
		selectedPiece.remove();
		destinationSquare.insertAdjacentElement('beforeend',selectedPiece)

		// Kill opponent piece if present. 
		if(opposingPiecePresent) {
			for(let piece of opposingPieces) {
				console.log('Now removing:',piece);
				piece.remove();
			}
		}

		// Increment total number of moves made. 
		totalNumberOfMoves++;
		console.log('totalNumberOfMoves:',totalNumberOfMoves);
		
		// Switch to turn of opposite player. 
		currentPlayerIndex = totalNumberOfMoves % 2
		activateCurrentPlayer();
		console.log('currentPlayerIndex:',currentPlayerIndex);
	}
	
	// Cancel movement if not valid. 
	else {
		console.warn('Invalid movement selected. Please try again.')
	}

	// Un-select all squares on board. 
	unselectAllSquares();

	// Update selected piece to none. 
	selectedPiece = null;

	/****/
	
	// TODO: Check for proper movement pattern. 
	function checkForProperPattern(){
		// single-L for knights
		// [|dx|,|dy|] = [1,2] || [2,1]
		// infspacediagonal for bishops
		// [|dx|,|dy|] = [a,a] for any number a
		// infspacestraight for rooks
		// [|dx|,|dy|] = [0,a] || [a,0] for any number a
		// 1spaceforwardempty 1spaceforwarddiagonalfilled for pawns
		// [|dx|,|dy|] = [0,1] for empty destination || [1,1] for opp destination
		// 1spacestraightordiagonal for kings
		// [|dx|,|dy|] = [0,1] || [1,0] || [1,1]
		// infspacestraightordiagonal for queens
		// [|dx|,|dy|] = [0,a] || [a,0] || [a,a] for any number a
		return true;
	}
}

// Check if piece currently selected. 
function checkForSelectedPiece() {

	// Get all selected squares. 
	let allSelectedSquares = document.querySelectorAll('div#container main.board div.row div.square.active');
	// console.log('Number of selected squares',allSelectedSquares.length);

	// 
	return (allSelectedSquares.length>0);
}
