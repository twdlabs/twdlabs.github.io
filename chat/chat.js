

let currentUserId = 0;

/*****/

// Refresh messages in thread. 
refreshThread();

/*****/

// Refresh messages in thread. 
function refreshThread() {

	// Load initial message data. 
	loadMessages();

	// Scroll to bottom of thread. 
	thread.scrollTop = thread.scrollHeight;

	/*****/

	// Load initial message data. 
	function loadMessages() {
	
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
		document.querySelector('div#container main section#thread div.inner').innerHTML = result;

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
			result = `<br>${day}, ${year} ${month} ${date}, ${ (hour) ? (hour%12) : ('12') }:${ (minute<10) ? ('0'+minute) : (minute) } ${ (hour<12) ? ('AM') : ('PM') }`;

			return result;
		}
	}
}

// Send new message. 
function sendNewMessage() {
	console.log('Sending message...');

	// Add new message directly to thread. 
	let result = ``;
	document.querySelector('div#container main section#thread div.inner').innerHTML = result;

	// Add copy of message to database. 
}

// Go to home page. 
function goHome() {}

// Open message thread. 
function openMsgThread() {}

