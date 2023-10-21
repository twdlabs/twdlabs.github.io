


// Get header box for recipient. 
const recipientbox = document.querySelector('#recipient');

// Get name box for recipient. 
const recipientnamebox = document.querySelector('#recipientname');

// Get avatar box for recipient. 
const recipientavatarbox =  document.querySelector('#recipientavatar');

// 
const msghistorybox = document.querySelector('#msghistory');

// 
const msghistorythread = document.querySelector('section#chat div#msghistory div.inner');

// Get text input field for new message composition. 
const newmsgfield = document.querySelector('#newmessage');


/*****/


// Prepare composer field for sending new messages. 
prepareComposerField();


/*****/


// Prepare composer field for sending new messages. 
function prepareComposerField() {

	// Activate enter key to send message. 
	newmsgfield.addEventListener('keyup',checkForEnter);

	/*****/

	// Check for enter on key press within message input text field. 
	function checkForEnter(event) {
		// console.log(event);
		if(event.keyCode==13 || event.key=='Enter') sendNewMessage();
	}
}

// Send new message. 
function sendNewMessage() {

	// Get new message. 
	let newMessage = getNewMessage();
	console.log(`Sending message to ${ userDataList[selectedRecipientId] }:`, newMessage);

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
		let msgfield = document.querySelector('#newmessage');
	
		// Save message from text input field. 
		let newMsg = msgfield.value;
	
		// Clear text input field. 
		msgfield.value = '';
	
		// Return focus to text input field. 
		// msgfield.focus();

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
	msghistorythread.innerHTML = '';
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
	msghistorythread.innerHTML = result;

	// Scroll to bottom of message history thread box. 
	msghistorybox.scrollTop = msghistorybox.scrollHeight;


	/*****/


	// Sort messages by time (ascending -- ending with most recent). 
	function sortByTimeAsc(msgA,msgB) {
		return msgA.timestamp - msgB.timestamp;
	}

	// Create chat bubble. 
	function createChatBubble(msgitem) {

		// Get user identifying information. 
		let senderid = msgitem.senderid;
		let avatarurl = userDataList[senderid].avatarurl;

		// Get contents of  message. 
		let timestamp = ( new Date(msgitem.timestamp) ).toUTCString();
		let msgcontent = msgitem.messagetext;

		// Create correspoonding message bubble block and return result. 
		return `
		<!-- msgblock -->
		<div class="msgblock ${ (senderid==currentUserId) ? ('s') : ('r') }">
		
			<!-- content -->
			<div class="content">
					
				<!-- avatar -->
				<div class="avatar">
					<img src="${ avatarurl }">
				</div>
				<!-- /avatar -->
						
				<!-- block -->
				<div class="block">
						
					<!-- bubble -->
					<div class="bubble" title="${ timestamp }">
			
						<!-- caption -->
						<span class="caption">${ msgcontent }</span>
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

