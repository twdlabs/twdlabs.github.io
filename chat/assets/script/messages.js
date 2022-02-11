


// Refresh messages in thread. 
function refreshMsgHistory() {
	// console.log('Refreshing message thread...');

	// Find all messages relevant to current user cohort. 
	let relevantMessages = findMessagesBtwn(currentUserId,currentRecipientId);

	// Load message thread history. 
	{

		// Initiate result. 
		let result = '';
	
		// Accumulate message data. 
		for(let item of relevantMessages) {
			result += createMessageBlock(item);
		}
	
		// Add messages into thread. 
		document.querySelector('article.thread section#msghistory div.inner').innerHTML = result;
	
		/*****/
	
		// Scroll to bottom of message history thread. 
		let msghistory = document.getElementById('msghistory');
		msghistory.scrollTop = msghistory.scrollHeight;
	}


	/*****/
	

	// Find all messages relevant to current user cohort. 
	function findMessagesBtwn(idA,idB) {
		console.log('\n\nGetting all messages between users: ',idA, 'and',idB);

		let result = [];

		// Go thru message data. 
		for(let currentMessageObject of messageData) {
			// console.log('\ncurrentMessageObject: user',currentMessageObject.senderid, 'to user',currentMessageObject.recipientid);

			// Check for matching senderid and matching recipientid. 
				let foundSentMsg = currentMessageObject.senderid==idA && currentMessageObject.recipientid==idB;
				let foundReceivedMsg = currentMessageObject.senderid==idB && currentMessageObject.recipientid==idA;
				let foundMatchingMsg = foundSentMsg || foundReceivedMsg;

				// Proceed if matching message found. 
				if(foundMatchingMsg) result.push(currentMessageObject);
		}

		// 
		console.log('result', result.sort(timeSorter) );
		return result;

		/*****/

		// Sort messages by time sent. 
		function timeSorter(a,b) {
			return a.timestamp - b.timestamp;
		}
	}

	// Create message block. 
	function createMessageBlock(msgitem) {

		return `
		<!-- msg-group -->
		<div class="msg-group ${ (msgitem.senderid==currentUserId) ? ('s') : ('r')}">

			<!-- timestamp -->
			<div class="timestamp">${ formatDate(msgitem.timestamp) }</div>
			<!-- /timestamp -->

			<!-- content -->
			<div class="content">
	
				<!-- avatar -->
				<div class="avatar">
					<img src="${userData[msgitem.senderid].avatarurl}">
				</div>
				<!-- /avatar -->
	
				<!-- msgs -->
				<div class="msgs">
					
					<!-- bubble -->
					<div class="bubble">

						<!-- caption -->
						<span class="caption">${msgitem.messagetext}</span>
						<!-- /caption -->
						
					</div>
					<!-- /bubble -->
					
				</div>
				<!-- /msgs -->

			</div>
			<!-- /content -->

		</div>
		<!-- /msg-group -->`;
	}

	// Format date (given milliseconds from start point). 
	function formatDate(nummilliseconds) {

		// Define days. 
		const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',];
		// Define months. 
		const months = ['Jan','Feb','Mar', 'Apr','May','Jun', 'Jul','Aug','Sep', 'Oct','Nov','Dec'];

		// Create date/time object. 
		const d = new Date(nummilliseconds);
		let day = days[d.getDay()];
		let year = d.getFullYear();
		let month = months[d.getMonth()];
		let date = d.getDate();
		let hour = d.getHours();
		let minute = d.getMinutes();
		let result = `${day}, ${year} ${month} ${date}, ${ (hour) ? (hour%12) : ('12') }:${ (minute<10) ? ('0'+minute) : (minute) } ${ (hour<12) ? ('AM') : ('PM') }`;

		return result;
	}
}

// Send new message. 
function sendNewMessage() {

	// Get text input field. 
	let msgfield = document.getElementById('newmessage');

	// Save message from text input field. 
	let newMessage = msgfield.value;

	// Skip sending empty messages. 
	if(newMessage.length==0) return;
	else console.log('Sending message:', newMessage);

	// Clear text input field. 
	msgfield.value = '';

	// Save new message to database. 
	let attached = false;
	if(attached) {
		let lastindex = messageData.length-1;
		messageData[lastindex].messagetext.push(newMessage);
	}
	else {
		messageData.push({
			senderid: currentUserId,
			recipientid: currentRecipientId,
			timestamp: new Date().getTime(),
			messagetext: newMessage
		});
	}

	// Refresh messages in thread. 
	refreshMsgHistory();
	
	// Refresh user data. 
	refreshUserData();
}
