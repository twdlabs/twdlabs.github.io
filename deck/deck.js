


// Get destination for cards. 
const cardsdestination = document.querySelector('div#container main.main');


/*****/


// Create new card deck. 
const newDeck = createNewDeck();
console.log('New deck:',newDeck);

// Display card deck. 
displayDeck(newDeck);


/*****/


// Create new card deck. 
function createNewDeck() {

	// Initialize result. 
	let result = [];
	
	// Go thru each card rank. 
	for(let rankindex in cardRanks) {
	
		// Go thru each suit. 
		for(let suitid in cardSuits) {
	
			// Define new card. 
			let newcard = {
				suitid:suitid,
				cardrankindex:rankindex,
			};
	
			// Save new card to deck. 
			result.push(newcard);
		}
	}
	
	// Return result. 
	return result;
}

// Display card deck. 
function displayDeck(deck) {
		
	// Initialize layout of cards. 
	let cardslayout = '';
	
	// Go thru each card in given deck. 
	for(let card of deck) {

		// Get card details. 
		let cardsuit = cardSuits[card.suitid];
		let cardrank = cardRanks[card.cardrankindex];
		
		// Add layout for card. 
		cardslayout += createCardLayout(cardsuit,cardrank);
	}

	// Display layout of cards. 
	cardsdestination.innerHTML = cardslayout;

	/****/

	// Create layout for card. 
	function createCardLayout(cardsuit,cardrank) {

		// Get card caption. 
		let cardcaption = cardrank.caption;
		
		// Create layout for card center. 
		let cardcenterlayout = '';

		// Acumulate icons for card center. 
		for(let i=0 ; i<cardrank.iconcount ; i++) {
			cardcenterlayout += `
			<!-- icon -->
			<svg class="icon ${ cardsuit.suitname }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				${ cardsuit.iconpath }
			</svg>
			<!-- /icon -->`;
		}

		// 
		return `
		<!-- card -->
		<div class="card ${ cardsuit.suitcolor } ${ (cardrank.iconcount==1) ? 'lg' : '' }">

			<!-- edge -->
			<div class="edge a">

				<!-- caption -->
				<span class="caption">${ cardcaption }</span>
				<!-- /caption -->

				<!-- icon -->
				<svg class="icon ${ cardsuit.suitname }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					${ cardsuit.iconpath }
				</svg>
				<!-- /icon -->

			</div>
			<!-- /edge -->

			<!-- center -->
			<div class="center">${ cardcenterlayout }</div>
			<!-- /center -->

			<!-- edge -->
			<div class="edge b">

				<!-- caption -->
				<span class="caption">${ cardcaption }</span>
				<!-- /caption -->

				<!-- icon -->
				<svg class="icon ${ cardsuit.suitname }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					${ cardsuit.iconpath }
				</svg>
				<!-- /icon -->

			</div>
			<!-- /edge -->
			
		</div>
		<!-- /card -->`;
	}
}

// const main = document.querySelector('div#container main.main');
// let result = '';
// for(let i=1 ; i<=4 ; i++) {
// 	result += `
// 	<!-- item -->
// 	<div class="item">${i}</div>
// 	<!-- /item -->`;
// }
// main.innerHTML = result;
