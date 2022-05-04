


// Initialize current recipient id. 
var currentRecipientId;


/*****/


// Handle events. 
handleEvents();


/*****/


// Handle universal events. 
function handleEvents() {
	// Get text input field for new messages. 
	let msgfield = document.getElementById('newmessage');

	// Activate enter key to send message. 
	msgfield.addEventListener('keyup',checkForEnter);

	/*****/

	// Check for enter on key press within message input text field. 
	function checkForEnter(event) {
		// console.log(event);
		if(event.keyCode==13) sendNewMessage();
	}

	// Handle custom user events. 
	handleUserEvents();
}

// Handle custom user events. 
function handleUserEvents() {
	
	// Get contact list items. 
	let contactitems = document.querySelectorAll('section#list div#contacts ul.contactlist li.contactitem');
	// console.log('contactitems',contactitems);

	// Activate contact list item clicks. 
	for(item of contactitems) {
		// console.log('item',item);
		item.addEventListener('click',openMsgThread);
	}
}

// Refresh data for currently selected user. 
function refreshUserData() {

	// Get data for current user. 
	let currentuser = !isNaN(currentUserId) ? (userData[currentUserId]) : (null);
	let fname = (currentuser) ? (currentuser.fname) : ('[First Name]');
	let lname = (currentuser) ? (currentuser.lname) : ('[Last Name]');
	console.log('\nLoading user data:',currentUserId, fname, lname, currentuser);

	// Refresh name of current user above contact list. 
	let namebox = document.getElementById('currentusername');
	namebox.innerHTML = `${fname} ${lname}`;

	// Refresh image of current user above contact list. 
	let avatarbox = document.getElementById('currentuseravatar');
	avatarbox.innerHTML = `<img src="${currentuser.avatarurl}">`;

	// Refresh current user status above contact list. 
	let userheader = document.getElementById('currentuser');
	if(currentuser.online) userheader.classList.add('online');
	else userheader.classList.remove('online');

	// Refresh list of contacts for current user. 
	refreshContactList();

	// Handle custom events for current user. 
	handleUserEvents();

	/*****/

	// Refresh list of contacts. 
	function refreshContactList() {
		
		// Initiate result. 
		let result = '';

		// Accumulate contact item data for contact list. 
		for(let id in userData) {

			// Exclude oneself from contact list. 
			if(id==currentUserId) continue;

			// Create contact item and add to list. 
			result += createContactItem(id);
		}

		// Add contacts to contact list on page. 
		document.querySelector('section#list div#contacts ul.contactlist').innerHTML = result;

		/****/

		// Create contact item. 
		function createContactItem(contactid) {

			// Get contact's user data. 
			let contact = userData[contactid];

			// Get last message sent between two users: current user and current contact. 
			// let lastMessage = findLastMessageBtwn(1*currentUserId,1*contactid);
			let lastMessage = findLastMessageBtwnUsers(1*currentUserId,1*contactid);

			return `
			<!-- contactitem -->
			<li class="contactitem ${ (contact.online) ? ('active') : ('') }" data-userid="${contactid}">

				<!-- avatar -->
				<div class="avatar">
					<img src="${ contact.avatarurl }">
				</div>
				<!-- /avatar -->

				<!-- remainder -->
				<div class="remainder">

					<!-- name -->
					<div class="name">${ contact.fname } ${ contact.lname }</div>
					<!-- /name -->

					<!-- preview -->
					<div class="preview">${ (lastMessage) ? (lastMessage) : ('Click here to chat') }</div>
					<!-- /preview -->

				</div>
				<!-- /remainder -->

				<!-- status -->
				<div class="status" title="${ (contact.online) ? ('Online') : ('Offline') }"></div>
				<!-- /status -->

			</li>
			<!-- /contactitem -->`;
		}

		// Find most recent message sent among two-user cohort. 
		function findLastMessageBtwnUsers(idA,idB) {
			// console.log('\tFinding last msg btwn users:',idA,idB);

			// Get tagged list of sent messages. 
			let sentMessages = getSentMessages();
			// console.log( '\t\tList of sent messages:',sentMessages );
			
			// Get tagged list of received messages. 
			let receivedMessages = getReceivedMessages();
			// console.log( '\t\tList of received messages:',receivedMessages );

			// Combine tagged lists for general list of messages. 
			let allRelevantMessages = [...sentMessages, ...receivedMessages];
			// Sort general message list by time (descending). 
			allRelevantMessages.sort(sortByTimeDesc);

			// console.log( '\t\tFull list of relevant messages:', allRelevantMessages );

			// Get content of most recent message (if exists). 
			let result = getMostRecentMsg();

			// Return resulting message. 
			return result;

			/***/

			// Get tagged list of sent messages. 
			function getSentMessages() {

				// Get untagged list of sent messages. 
				let resultList = messageDataMatrix[idA][idB];
				
				// Tag sent messages. 
				for(let msgItem of resultList) {
					msgItem.senderid = idA;
					msgItem.recipientid = idB;
				}

				// Return result. 
				return resultList;
			}
			
			// Get tagged list of received messages. 
			function getReceivedMessages() {

				// Get untagged list of received messages. 
				let resultList = messageDataMatrix[idB][idA];
				
				// Tag received messages. 
				for(let msgItem of resultList) {
					msgItem.senderid = idB;
					msgItem.recipientid = idA;
				}

				// Return result. 
				return resultList;
			}

			// Sort messages by time (descending -- starting with most recent). 
			function sortByTimeDesc(msgA,msgB) {
				return msgB.timestamp - msgA.timestamp;
			}

			// Get content of most recent message (if exists). 
			function getMostRecentMsg() {

				// Initialize result. 
				let recentMsgContent;
			
				// Get result for non-empty list. 
				if(allRelevantMessages.length>0) {
	
					// Get most recent message item. 
					let recentMsgItem = allRelevantMessages[0];
	
					// Determine if last message is outgoing. 
					let isOutgoing = (recentMsgItem.senderid==idA) && (recentMsgItem.recipientid==idB);
	
					// Get contents of most recent message. 
					recentMsgContent = (isOutgoing) ? (`You: ${recentMsgItem.messagetext}`) : (recentMsgItem.messagetext);
				}
	
				// Get result for empty list. 
				else {
	
					// Use empty message if no messages found. 
					recentMsgContent = '';
				}

				// Return result. 
				return recentMsgContent;
			}
		}
	}
}

// Open messaging thread. 
function openMsgThread(event) {
	console.log('Opening message thread...');

	// Set new recipient id. 
	let selectedItem = event.currentTarget;
	currentRecipientId = 1*selectedItem.getAttribute('data-userid');

	// Get user data for selected contact. 
	let recipient = userData[currentRecipientId];
	let fname = recipient.fname;
	let lname = recipient.lname;
	// console.log('\nCurrent recipient id:', currentRecipientId);
	// console.log('Recipient:', fname,lname, recipient, selectedItem);

	// Refresh recipient name. 
	document.getElementById('recipientname').innerHTML = `${ (fname)?(fname):('') } ${ (lname)?(lname):('') }`;

	// Refresh recipient avatar. 
	document.getElementById('recipientavatar').innerHTML = `<img src="${recipient.avatarurl}">`;

	// Refresh online/offline status on recipient box. 
	let recipientbox = document.getElementById('recipient');
	if(recipient.online) recipientbox.classList.add('active');
	else recipientbox.classList.remove('active');

	// Refresh message history for current cohort. 
	refreshMsgHistory(currentUserId, currentRecipientId);

	// Make messaging thread visible. 
	document.querySelector('main div.slider').classList.add('open');

	// Bring focus to input field in message composer box. 
	document.getElementById('newmessage').focus();
}

// Go to home page. 
function closeMsgThread() {
	console.log('Closing message thread...');

	// Close messaging thread. 
	document.querySelector('main div.slider').classList.remove('open');

	// Remove previous recipient id. Is this necessary? Maybe not, just in case the desktop version is open. 
	// currentRecipientId = -1;
}






// // TODO: Find last message sent between two users. 
// function findLastMessageBtwn(idA,idB) {
// 	// console.log('\n\nGetting last message between users: ',idA, 'and',idB);

// 	// Initialize default message for if not found. 
// 	let savedMessageObject = undefined;
// 	let isOutgoingMessage = false;

// 	// Go thru message data. 
// 	for(let currentMessageObject of messageData) {
// 		// console.log('\ncurrentMessageObject: user',currentMessageObject.senderid, 'to user',currentMessageObject.recipientid);

// 		// Check for matching senderid and matching recipientid. 
// 		let foundSentMsg = currentMessageObject.senderid==idA && currentMessageObject.recipientid==idB;
// 		let foundReceivedMsg = currentMessageObject.senderid==idB && currentMessageObject.recipientid==idA;
// 		let foundMatchingMsg = foundSentMsg || foundReceivedMsg;
// 		// console.log('foundSentMsg',foundSentMsg);
// 		// console.log('foundReceivedMsg',foundReceivedMsg);
// 		// console.log('foundMatchingMsg',foundMatchingMsg);

// 		// Check if another message has already been found. 
// 		let alreadyFoundMessage = savedMessageObject!=undefined;
// 		// console.log('alreadyFoundMessage:',alreadyFoundMessage);

// 		// Proceed if matching message found. 
// 		if(foundMatchingMsg) {

// 			// Save if only one found so far. 
// 			if(!alreadyFoundMessage) {
// 				// console.log('We found one !!!',currentMessageObject);
// 				savedMessageObject = currentMessageObject;
// 				isOutgoingMessage = foundSentMsg;
// 			}

// 			// Compare to last found object if exists. 
// 			else {

// 				// Replace last message object if current messsage object was sent later. 
// 				let laterThanSavedMsg = currentMessageObject.timestamp>savedMessageObject.timestamp;
// 				// console.log('laterThanSavedMsg:',laterThanSavedMsg);
// 				if(laterThanSavedMsg) {
// 					// console.log('We found another one !!!',currentMessageObject);
// 					savedMessageObject = currentMessageObject;
// 					isOutgoingMessage = foundSentMsg;
// 				}
// 			}
// 		}
// 	}

// 	if(savedMessageObject) {
// 		// console.log( '\nLast message found between users:',idA, 'and',idB);
// 		// console.log( ''+savedMessageObject.messagetext );
// 		return `${ (isOutgoingMessage) ? ('You: ') : ('') } ${savedMessageObject.messagetext}`;
// 	}
// 	else {
// 		return '';
// 	}
// }

