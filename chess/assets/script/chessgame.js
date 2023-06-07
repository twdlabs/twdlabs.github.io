


// Get chess board container. 
const boardContainer = document.querySelector('div#container main.board');

// Initialize set all squares on board. 
let allSquares;

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

	// Get all squares on board. 
	allSquares = document.querySelectorAll('div#container main.board div.row div.square');

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

		// Get id for type of current piece. 
		let piecetypeid = (piece.piecetype) || 'null';
		// console.log('piecetypeid:',piecetypeid);

		// Get piece type using id. 
		let piecetype = getPieceTypeById(piecetypeid);

		// Get name of current piece. 
		let name = piecetype.name || 'unknownPiece';
		// console.log('piece name:',name);
		
		// Get icon for current piece. 
		// let icon = piecetype[`${piece.teamid}icon`];
		// Get label icon for current piece. 
		// let labelicon = icon.fileurl || 'x';
		let labelicon = `${piecetype.id}`;
		// let labelicon = `
		// <!-- icon -->
		// <svg class="icon ${icon.tag}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
		// 	${icon.innersvg}
		// </svg>
		// <!-- /icon -->`;
		// console.log('piece label icon:',labelicon);

		// Get team id of current piece. 
		let teamid = piece.teamid;
		// console.log('piece team:',teamid);

		// Get board location for current piece. 
		let boardlocationid = piece.boardlocation;
		// console.log('piece location on board:',location);

		// Get square where piece is to be located. 
		let destination = getSquareById(boardlocationid);
		// console.log('destination:',destination);

		// Create piece to be added. 
		let pieceLayout = createPieceLayout(name,labelicon,teamid);

		// Add piece to destination square on board. 
		destination.insertAdjacentHTML('beforeend',pieceLayout);
	}

	/****/

	// Create piece. 
	function createPieceLayout(name,label,teamid) {
		// 
		return `
		<!-- piece -->
		<div class="piece ${name} ${teamid}" data-name="${name}" data-teamid="${teamid}">${label}</div>
		<!-- /piece -->`;
	}

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
		enterMoveMode();
	}
	// Leave all squares un-highlighted otherwise (if piece was already selected). 
	// else {

	// 	// Dis-allow movement of any piece. 
	// 	exitMoveMode();
	// }

	/****/

	// Allow movement of selected piece. 
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
	console.log('Unselecting all squares');
	
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
}

// Check if piece currently selected. 
function checkForSelectedPiece() {

	// Get all selected squares. 
	let allSelectedSquares = document.querySelectorAll('div#container main.board div.row div.square.active');
	// console.log('Number of selected squares',allSelectedSquares.length);

	// 
	return (allSelectedSquares.length>0);
}
