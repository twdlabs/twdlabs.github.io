

// Initialize current user id. 
let currentUserId = 0;


/*****/


// Refresh contacts list. 
refreshContactList();

// Refresh messages in thread. 
refreshMsgThread();

// Handle events. 
handleEvents();


/*****/


// Handle events. 
function handleEvents() {
	// console.log('Handling events...');

	// Get contact list items. 
	let contactitems = document.querySelectorAll('article.home section.contacts ul.contactlist li.contactitem');
	// Activate contact list item clicks. 
	// console.log(contactitems);
	for(item of contactitems) {
		item.addEventListener('click',openMsgThread);
	}

	// Get text input field for new messages. 
	let msgfield = document.getElementById('newmessage');
	// Activate enter key to send message. 
	msgfield.addEventListener('keyup',checkForEnter);
}


// Go to home page. 
function goHome() {
	document.querySelector('main div.innermain').classList.remove('open');
}

// Refresh contacts list. 
function refreshContactList() {
	
	// Initiate result. 
	let result = '';

	// Accumulate contact data. 
	for(let user of userData) {

		// TODO: Get latest message. 
		let lastMessage = '';

		result += `
		<!-- contactitem -->
		<li class="contactitem${ (user.online) ? (' active') : ('') }">

			<!-- avatar -->
			<div class="avatar">
				<img src="${user.avatarurl}">
			</div>
			<!-- /avatar -->

			<!-- remainder -->
			<div class="remainder">

				<!-- name -->
				<div class="name">${user.fname} Doe</div>
				<!-- /name -->

				<!-- preview -->
				<div class="preview">${lastMessage}</div>
				<!-- /preview -->

			</div>
			<!-- /remainder -->

			<!-- status -->
			<div class="status" title="${ (user.online) ? ('Online') : ('Offline') }"></div>
			<!-- /status -->

		</li>
		<!-- /contactitem -->`;
	}

	// Add messages into thread. 
	document.querySelector('article.home section.contacts ul.contactlist').innerHTML = result;


	// Load contacts. 
	// loadContacts();

	/*****/

	// Load contacts. 
	// function loadContacts() {
	// }
}

// Open search. 
function openSearch() {
	console.log('Opening chat search');

	// Activate search section. 
	let search = document.querySelector('article.home section.contacts div.search');
	search.classList.add('active');
	// console.log(search);

	// Bring focus to search box. 
	document.getElementById('searchquery').focus();
}

// Filter contacts by query. 
function filterContacts() {
	console.log('FIltering contacts by search query...');

	// Get filter query. 
	let query = document.getElementById('searchquery').value;
	console.log('query:',query);

	// TODO: Apply filter to contact list. 
}

// Close search. 
function closeSearch() {
	console.log('Closing chat search');

	// De-activate search section. 
	let search = document.querySelector('article.home section.contacts div.search');
	search.classList.remove('active');
	// console.log(search);

	// Clear previous search query. 
	document.getElementById('searchquery').value = '';

	// TODO: Remove filter from contact list. 
}


// Open message thread. 
function openMsgThread(event) {
	console.log('Opening message thread...',event.currentTarget);
	document.querySelector('main div.innermain').classList.add('open');
}

// Refresh messages in thread. 
function refreshMsgThread() {
	console.log('Refreshing message thread...');

	// Load message thread history. 
	loadMessageHistory();

	// Scroll to bottom of message history thread. 
	let history = document.getElementById('history');
	history.scrollTop = history.scrollHeight;

	/*****/

	// Load message thread history. 
	function loadMessageHistory() {
	
		// Initiate result. 
		let result = '';

		// Accumulate message data. 
		for(let msg of messageData) {

			result += `
			<!-- msg-group -->
			<div class="msg-group ${ (msg.userid==currentUserId) ? ('s') : ('r')}">

				<!-- timestamp -->
				<div class="timestamp">${ formatDateFromSeconds(msg.timestampsec) }</div>
				<!-- /timestamp -->

				<!-- content -->
				<div class="content">
		
					<!-- avatar -->
					<div class="avatar">
						<img src="${userData[msg.userid].avatarurl}">
					</div>
					<!-- /avatar -->
		
					<!-- msgs -->
					<div class="msgs">`;
		
					for(let text of msg.messagetext) result += `
					<!-- bubble -->
					<div class="bubble">

						<!-- caption -->
						<span class="caption">${text}</span>
						<!-- /caption -->
						
					</div>
					<!-- /bubble -->`
		
					result += `
					</div>
					<!-- /msgs -->

				</div>
				<!-- /content -->
	
			</div>
			<!-- /msg-group -->`;
		}

		// Add messages into thread. 
		document.querySelector('article.thread section#history div.inner').innerHTML = result;

		/*****/
	
		// Format date (given seconds from start point). 
		function formatDateFromSeconds(numseconds) {

			const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',];
			const months = ['Jan','Feb','Mar', 'Apr','May','Jun', 'Jul','Aug','Sep', 'Oct','Nov','Dec'];

			const d = new Date(1000*numseconds);

			let result = d;
			let day = days[d.getDay()];
			let year = d.getFullYear();
			let month = months[d.getMonth()];
			let date = d.getDate();
			let hour = d.getHours();
			let minute = d.getMinutes();
			result = `${day}, ${year} ${month} ${date}, ${ (hour) ? (hour%12) : ('12') }:${ (minute<10) ? ('0'+minute) : (minute) } ${ (hour<12) ? ('AM') : ('PM') }`;

			return result;
		}
	}
}

// Check for enter on key press within message input text field. 
function checkForEnter(event) {
	// console.log(event);
	if(event.keyCode==13) sendNewMessage();
}

// Send new message. 
function sendNewMessage() {

	// Get text input field. 
	let msgfield = document.getElementById('newmessage');

	// Save message from text input field. 
	let message = msgfield.value;
	console.log('Sending message:',message);

	// Clear text input field. 
	msgfield.value = '';

	// Save message to database. 
	let attached = false;
	if(attached) {
		let lastindex = messageData.length-1;
		messageData[lastindex].messagetext.push(message);
	}
	else {
		messageData.push({
			userid:currentUserId,
			timestampsec:Math.floor(new Date().getTime()/1000),
			messagetext:[
				message,
			]
		});
	}

	// Refresh messages in thread. 
	refreshMsgThread();
}

