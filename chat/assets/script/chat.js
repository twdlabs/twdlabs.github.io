

// Send new message. 
function sendNewMessage() {

	// Get new message. 
	let newMessage = getNewMessage();
	console.log(`Sending message to ${ userdata[selectedRecipientId] }:`, newMessage);

	// Skip sending empty messages. 
	if(!newMessage) {
		console.log('Empty message ignored.');
		return;
	}

	// Add message data item to database. 
	saveMessageToDatabase(newMessage);

	// Refresh messages in thread. 
	refreshMsgHistory(currentUserId, selectedRecipientId);
	
	// // Refresh user data. 
	// refreshUserData();	// for preview message in thread list

	/*****/

	// Get new message. 
	function getNewMessage() {

		// Get text input field. 
		let msgfield = document.getElementById('newmessage');
	
		// Save message from text input field. 
		let newMsg = msgfield.value;
	
		// Clear text input field. 
		msgfield.value = '';
	
		// Return focus to text input field. 
		msgfield.focus();

		return newMsg;
	}

	// Add message data item to database. 
	function saveMessageToDatabase(newMessage) {

		// Get ids of users in messaging cohort. 
		let senderid = currentUserId;
		console.log('senderid',senderid);
		let recipientid = selectedRecipientId;
		console.log('recipientid',recipientid);

		// 
		messageDataMatrix[senderid][recipientid].push({
			timestamp: new Date().getTime(),
			messagetext: newMessage
		});
	}
}


// Clear messages in thread. 
function clearMsgHistory() {
	console.log('Clearing message history...');

	// Load message history blocks into thread. 
	document.querySelector('section#chat div#msghistory div.inner').innerHTML = '';
}

// Refresh messages in thread. 
function refreshMsgHistory(myId,theirId) {
	console.log('Refreshing message history...', myId,theirId);

	// Find all messages relevant to current user cohort. 
	let allRelevantMessages = getAllRelevantMessages();
	console.log('Cohort message data:',myId,theirId,allRelevantMessages);
	
	// Create blocks of messages. 
	let result = '';
	for(let msgitem of allRelevantMessages) {
		console.log('msgitem:',msgitem);
	
		// Determine if message is outgoing. 
		// let isOutgoing = (msgitem.senderid==idA)/*  && (msgitem.recipientid==idB */);

		// Create chat bubble. 
		result += createChatBubble(msgitem);
	}

	// Load message history blocks into thread. 
	document.querySelector('section#chat div#msghistory div.inner').innerHTML = result;

	// Scroll to bottom of message history thread box. 
	let msghistorybox = document.getElementById('msghistory');
	msghistorybox.scrollTop = msghistorybox.scrollHeight;


	/*****/


	// Sort messages by time (ascending -- ending with most recent). 
	function sortByTimeAsc(msgA,msgB) {
		return msgA.timestamp - msgB.timestamp;
	}

	// Create chat bubble. 
	function createChatBubble(msgitem) {

		// 
		let msgcontent = msgitem.messagetext;
		let senderid = msgitem.senderid;
		let imageurl = userdata[senderid].avatarurl;

		// 
		return `
		<!-- msgblock -->
		<div class="msgblock ${ (senderid==currentUserId) ? ('s') : ('r') }">
		
			<!-- content -->
			<div class="content">
					
				<!-- avatar -->
				<div class="avatar">
					<img src="${imageurl}">
				</div>
				<!-- /avatar -->
						
				<!-- block -->
				<div class="block">
						
					<!-- bubble -->
					<div class="bubble">
			
						<!-- caption -->
						<span class="caption">${msgcontent}</span>
						<!-- /caption -->
						
					</div>
					<!-- /bubble -->
					
				</div>
				<!-- /block -->

			</div>
			<!-- /content -->

		</div>
		<!-- /msgblock -->
		`;
	}

	// Get tagged list of sent messages. 
	function getSentMessages() {

		// Get initial list of messages. 
		let resultList = messageDataMatrix[currentUserId][selectedRecipientId];

		// Tag sent messages. 
		for(let msgItem of resultList) {
			msgItem.senderid = currentUserId;
			msgItem.recipientid = selectedRecipientId;
		}

		// Return result. 
		return resultList;
	}

	// Get tagged list of received messages. 
	function getReceivedMessages() {

		// Get initial list of messages. 
		let resultList = messageDataMatrix[selectedRecipientId][currentUserId];

		// Tag received messages. 
		for(let msgItem of resultList) {
			msgItem.senderid = selectedRecipientId;
			msgItem.recipientid = currentUserId;
		}

		// Return result. 
		return resultList;
	}

	// Get tagged list of all relevant messages. 
	function getAllRelevantMessages() {

		// Get tagged list of sent messages. 
		let sentMessages = getSentMessages();
		// console.log( '\t\tList of sent messages:',sentMessages );
	
		// Get tagged list of received messages. 
		let receivedMessages = getReceivedMessages();
		// console.log( '\t\tList of received messages:',receivedMessages );
	
		// Combine tagged lists for general list of messages. 
		let result = [...sentMessages, ...receivedMessages];

		// Sort general message list by time (ascending). 
		result.sort(sortByTimeAsc);

		return result;
	}
}

