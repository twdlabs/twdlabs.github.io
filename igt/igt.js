
/*
	States
	0 initial (start button showing)
	1 start turn (select msg on)
	2 end turn (deck already chosen - next btn on)
*/

// Define initial account balance. 
let cashBalance = 2000;
let loan = 2000;

// Define initial card count. 
let count = 0;

// Define number of turns. 
let numTurns = 100;

// Define deck data: rewards, penalties, and penalty probabilities. 
let deckData = {
	deckA:{
		name:'Deck A',
		reward:100,
		penalty:1250,
		penaltyProb:.10
	},
	deckB:{
		name:'Deck B',
		reward:100,
		penalty:500,
		penaltyProb:.25
	},
	deckC:{
		name:'Deck C',
		reward:50,
		penalty:250,
		penaltyProb:.10
	},
	deckD:{
		name:'Deck D',
		reward:50,
		penalty:100,
		penaltyProb:.25
	}
}




// 
$(document).ready(function() {

	// Handle 'start' button click. 
	$('section#action button.start').click(startGame);

	// Handle deck clicks. 
	$('section#cards div.deck').click(selectDeck);

	// Handle 'next' button clicks. 
	$('section#action button.next').click(nextTurn);
	$('section#cards div.deck button.next').click(nextTurn);
});


/*****/


// Start the game. 
function startGame() {
	// Add 'on' class to main container. 
	$('div#container').addClass('on');

	// Show initial cash balance. 
	refreshTheRecord();
}

// Select deck. 
function selectDeck(event) {
	// Only acknowledge deck clicks when done with previos turn. 
	let notDone = $('div#container').hasClass('going');
	if(notDone) {
		console.log('Not yet done with turn, new deck not selected.')
		return;
	}

	// Get selected deck element. 
	let deck = event.currentTarget;
	console.log('Deck selected', deck.id);
	let dData = deckData[deck.id];

	// Highlight selected deck. 
	highlightDeck(deck);

	// Determine whether penalty applied. 
	let addPenalty = checkIfPenalty();

	// Update cash amount with reward ad potential penalty. 
	let r = deckData[deck.id].reward;
	let p = deckData[deck.id].penalty;
	cashBalance += r;
	if(addPenalty) cashBalance -= p;

	// Update message of gains and losses. 
	$(`section#cards div#${deck.id} div.msg span.gain`).html(''+r);
	if(addPenalty) $(`section#cards div#${deck.id} div.msg span.loss`).html(''+p);
	else $(`section#cards div#${deck.id} div.msg span.loss`).html(0);

	// Show gain/loss message. 
	$(`section#cards div#${deck.id} div.msg`).removeClass('gone');

	// Update game record on screen. 
	refreshTheRecord();

	/*****/

	// Highlight selected deck. 
	function highlightDeck(deck) {
		// Remove highlight from all decks. 
		$('section#cards div.deck').removeClass('active');

		// Add highlight to selected deck. 
		$(deck).addClass('active');
		$('div#container').addClass('going');
	}

	// Determine whether penalty should be applied. 
	function checkIfPenalty() {
		// Generate random number. 
		let rn = Math.random();

		// Compare random number to probability value. 
		return (rn < dData.penaltyProb);
	}
}

// Go to next turn. 
function nextTurn() {
	// Remove 'going' class from container. 
	$('div#container').removeClass('going');

	// Remove highlight from all decks. 
	$('section#cards div.deck').removeClass('active');

	// Remove gain/loss message. 
	$('section#cards div.deck div.msg').addClass('gone');
}

// Update game record on screen. 
function refreshTheRecord() {
	// Update card count. 
	$('#cardCount').html(count);
	// Update account balance. 
	$('#cashAmount').html(cashBalance);
}

