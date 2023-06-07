


// Get turn indicator. 
const turnIndicator = document.querySelector('div#container aside.turner');

// Define team ids. 
const teamIds = ['light','dark'];

// Initialize index of current player. 
let currentPlayerIndex = 0;

// Initialize total number of moves made. 
let totalNumberOfMoves = 0;

// Initialize selected piece. 
let selectedPiece = null;


/*****/


// Activate pieces on board for current player. 
activateCurrentPlayer();


/*****/


// Activate pieces on board for current player. 
function activateCurrentPlayer() {

	// Get team id for current turn. 
	let teamid = teamIds[currentPlayerIndex];

	// Get all pieces on board. 
	let allPieces = document.querySelectorAll(`div#container main.board div.row div.square div.piece.${teamid}`);

	// Activate squares with pieces. 
	for(let piece of allPieces) {

		// Get square where piece is located. 
		let square = piece.parentElement;
		// console.log('square:',square);

		// Activate clicks on squares with pieces. 
		square.addEventListener('click',selectSquare);
	}

	// Indicate turn with color indicator. 
	turnIndicator.style.setProperty('--turncolor',`var(--${teamid}piecebackcolor)`);
}

// Highlight square of selected piece. 
function selectSquare(event) {

	// Get selected square of chess board. 
	let selectedSquare = event.currentTarget;
	// Get id of selected board location. 
	let selectedBoardLocationId = selectedSquare.getAttribute('data-id');

	// Check if square already selected. 
	let sqrAlreadySelected = selectedSquare.classList.contains('active');
	// console.log('Square already selected:',sqrAlreadySelected);
	
	// Un-select all other squares on board. 
	unselectAllSquares();
	
	// Highlight selected square if not already selected. 
	if(!sqrAlreadySelected) {

		// Update reference to selected piece. 
		selectedPiece = selectedSquare.querySelector('div.piece');
		// Get type of selected piece. 
		let selectedPieceType = selectedPiece.getAttribute('data-piecetype');
		// Get team of selected piece. 
		let selectedPieceTeamId = selectedPiece.getAttribute('data-teamid');

		console.log('Selecting new square...', selectedPiece);
		console.log('\tTeam:', selectedPieceTeamId);
		console.log('\tPiece type:', selectedPieceType);
		console.log('\tLocation:', selectedBoardLocationId);
		
		// Highlight selected square. 
		selectedSquare.classList.add('active');

		// TODO: Get selected piece. 
		// let selectedPiece = 

		// Allow movement of selected piece. 
		enterMoveMode();
	}
	// Leave all squares un-highlighted otherwise (if piece was already selected). 
	// else {
	// 	// Dis-allow movement of any piece. 
	// 	exitMoveMode();
	// }

	/****/

	// TODO: Allow movement of selected piece. 
	function enterMoveMode() {
		console.log('\tNow moving...');
		
		// Go thru all squares on board. 
		for(let sqr of allSquares) {
			sqr.addEventListener('click',movePiece);
		}
	}
}

// Un-highlight all squares on board. 
function unselectAllSquares() {
	// console.log('Unselecting all squares');
	
	// Un-highlight all other squares. 
	for(let sqr of allSquares) {
		sqr.classList.remove('active');
	}

	// Dis-allow movement of any piece. 
	exitMoveMode();

	/****/

	// Dis-allow movement of any piece. 
	function exitMoveMode() {
		console.log('\tDone moving.');

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

	// Get team id for current turn. 
	let teamid = teamIds[currentPlayerIndex];

	// Check for teammate piece at destination. 
	let friendlyPieces = destinationSquare.querySelectorAll(`div.piece.${teamid}`);
	let friendlyPiecePresent = (friendlyPieces.length > 0);
	console.log('\tFriendly piece present:',friendlyPiecePresent/* ,friendlyPieces */);

	// Check if movement is valid. 
	let isValidMovement = ( properMovePattern && !friendlyPiecePresent );
	console.log('\tValid movement:',isValidMovement);

	// Make movement if valid. 
	if(isValidMovement) {

		// Get opposing team id for current turn. 
		let oppteamid = teamIds[(currentPlayerIndex+1)%2];

		// Check for opponent piece at destination. 
		let opposingPieces = destinationSquare.querySelectorAll(`div.piece.${oppteamid}`);
		let opposingPiecePresent = (opposingPieces.length > 0);
		console.log('\tOpposing piece present:',opposingPiecePresent/* ,opposingPieces */);

		// TODO: Animate movement of piece. 
		
		// Move selected piece to destination. 
		// selectedPiece.remove();
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

	// Check if piece currently selected. 
	function checkForSelectedPiece() {
	
		// Get all selected squares. 
		let allSelectedSquares = document.querySelectorAll('div#container main.board div.row div.square.active');
		// console.log('Number of selected squares',allSelectedSquares.length);
	
		// 
		return (allSelectedSquares.length>0);
	}
}
