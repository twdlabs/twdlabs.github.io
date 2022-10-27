

// Get load destination. 
const destination = document.querySelector('main.main');


/*****/


// Add cards to page. 
loadCards();


/*****/


// Add cards to page. 
function loadCards() {

	// Initialize result. 
	let result = '';

	// Go thru all team members. 
	for(let i in teamdata) {
	
		// Get data for given team member. 
		let employee = teamdata[i];
		
		// Create card for given team member. 
		result += `
		<!-- card -->
		<div class="card" style="--i:${ -1*i }">
	
			<!-- avatar -->
			<img class="avatar" src="${ employee.avatarurl }" alt="avatar">
			<!-- /avatar -->
	
			<!-- details -->
			<div class="details">
	
				<!-- name -->
				<div class="name">${ employee.name }</div>
				<!-- /name -->
	
				<!-- title -->
				<div class="title">${ employee.job }</div>
				<!-- /title -->
	
			</div>
			<!-- /details -->
	
			<!-- followbtn -->
			<a class="followbtn" href="javascript:void(0)">Follow</a>
			<!-- /followbtn -->
	
		</div>
		<!-- /card -->`;
	}

	// Add result to page. 
	destination.innerHTML = result;

	// Activate card clicks. 
	activateCards();
	
	/****/

	// Activate card clicks. 
	function activateCards() {
	
		// Get all loaded cards. 
		const allCards = document.querySelectorAll('div#container main.main div.card');
	
		// Go thru all cards. 
		for(let card of allCards) {
			// Activate given card. 
			card.addEventListener('click',showCardData)
		}
	
		/***/
	
		// Show card data. 
		function showCardData(event) {
	
			// Get selected card. 
			let selectedCard = event.currentTarget;
			console.log('Selected card:',selectedCard.innerText);
		}
	}
}
