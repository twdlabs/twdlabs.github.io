

// Initialize current user id. 
let currentUserId = 1;

// Initialize current recipient id. 
let currentRecipientId = -1;

// Initialize state of app pages. 
// let brandNew = true;


/*****/


// Refresh user data. 
refreshUserData();


/*****/


// Handle events. 
handleEvents();


/*****/


// Handle events. 
function handleEvents() {
	// console.log('Handling events...');

	// Handle home events. 
	{

		// Get contact list items. 
		let contactitems = document.querySelectorAll('article.home section.contacts ul.contactlist li.contactitem');
		// console.log('contactitems',contactitems);
	
		// Activate contact list item clicks. 
		for(item of contactitems) {
			// console.log('item',item);
			item.addEventListener('click',openMsgThread);
		}
	}

	// Handle thread events. 
	{

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
	}
}

// Refresh user data. 
function refreshUserData() {

	// Get user data for current user. 
	let currentuser = userData[currentUserId];
	// console.log('\nLoading user data for:',currentUserId, currentuser.fname, currentuser.lname, currentuser);

	// Refresh recipient on messaging thread. 
	document.getElementById('currentusername').innerHTML = `${currentuser.fname} ${currentuser.lname}`;
	document.getElementById('currentuseravatar').innerHTML = `<img src="${currentuser.avatarurl}">`;
	let userheader = document.getElementById('currentuser');
	if(currentuser.online) userheader.classList.add('online');
	else userheader.classList.remove('online');

	// Refresh contacts list. 
	refreshContactList();

	/*****/

	// Refresh contacts list. 
	function refreshContactList() {
		
		// Initiate result. 
		let result = '';

		// Accumulate contact item data for contact list. 
		for(let id in userData) {

			// Skip oneself in contact list. 
			if(id==currentUserId) continue;

			result += createContactItem(id);
		}

		// Add contacts to contact list. 
		document.querySelector('article.home section.contacts ul.contactlist').innerHTML = result;


		/*****/


		// Create contact item. 
		function createContactItem(contactid) {

			// Get contact's user data. 
			let contact = userData[contactid];

			// Get last message sent between two users: current user and current contact. 
			let lastMessage = findLastMessageBtwn(currentUserId,1*contactid);

			return `
			<!-- contactitem -->
			<li class="contactitem${ (contact.online) ? (' active') : ('') }" data-userid="${contactid}">

				<!-- avatar -->
				<div class="avatar">
					<img src="${contact.avatarurl}">
				</div>
				<!-- /avatar -->

				<!-- remainder -->
				<div class="remainder">

					<!-- name -->
					<div class="name">${contact.fname} Doe</div>
					<!-- /name -->

					<!-- preview -->
					<div class="preview">${ (lastMessage) ? (lastMessage) : ('') }</div>
					<!-- /preview -->

				</div>
				<!-- /remainder -->

				<!-- status -->
				<div class="status" title="${ (contact.online) ? ('Online') : ('Offline') }"></div>
				<!-- /status -->

			</li>
			<!-- /contactitem -->`;
		}

		// Find last message sent between two users. 
		function findLastMessageBtwn(idA,idB) {
			// console.log('\n\nGetting last message between users: ',idA, 'and',idB);

			// Initialize default message for if not found. 
			let savedMessageObject = undefined;
			let isOutgoingMessage = false;

			// Go thru message data. 
			for(let currentMessageObject of messageData) {
				// console.log('\ncurrentMessageObject: user',currentMessageObject.senderid, 'to user',currentMessageObject.recipientid);

				// Check for matching senderid and matching recipientid. 
				let foundSentMsg = currentMessageObject.senderid==idA && currentMessageObject.recipientid==idB;
				let foundReceivedMsg = currentMessageObject.senderid==idB && currentMessageObject.recipientid==idA;
				let foundMatchingMsg = foundSentMsg || foundReceivedMsg;
				// console.log('foundSentMsg',foundSentMsg);
				// console.log('foundReceivedMsg',foundReceivedMsg);
				// console.log('foundMatchingMsg',foundMatchingMsg);

				// Check if another message has already been found. 
				let alreadyFoundMessage = savedMessageObject!=undefined;
				// console.log('alreadyFoundMessage:',alreadyFoundMessage);

				// Proceed if matching message found. 
				if(foundMatchingMsg) {

					// Save if only one found so far. 
					if(!alreadyFoundMessage) {
						// console.log('We found one !!!',currentMessageObject);
						savedMessageObject = currentMessageObject;
						isOutgoingMessage = foundSentMsg;
					}

					// Compare to last found object if exists. 
					else {

						// Replace last message object if current messsage object was sent later. 
						let laterThanSavedMsg = currentMessageObject.timestamp>savedMessageObject.timestamp;
						// console.log('laterThanSavedMsg:',laterThanSavedMsg);
						if(laterThanSavedMsg) {
							// console.log('We found another one !!!',currentMessageObject);
							savedMessageObject = currentMessageObject;
							isOutgoingMessage = foundSentMsg;
						}
					}
				}
			}

			if(savedMessageObject) {
				// console.log( '\nLast message found between users:',idA, 'and',idB);
				// console.log( ''+savedMessageObject.messagetext );
				return `${ (isOutgoingMessage) ? ('You: ') : ('') } ${savedMessageObject.messagetext}`;
			}
			else {
				return '';
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
	// console.log('\ncurrentRecipientId:', currentRecipientId);
	// console.log('Recipient:',recipient.fname,recipient.lname, recipient, selectedItem);

	// Refresh recipient on messaging thread. 
	document.getElementById('recipientname').innerHTML = `${recipient.fname} ${recipient.lname}`;
	document.getElementById('recipientavatar').innerHTML = `<img src="${recipient.avatarurl}">`;
	if(recipient.online) document.getElementById('recipient').classList.add('active');
	else document.getElementById('recipient').classList.remove('active');

	// Refresh message history on messaging thread. 
	refreshMsgHistory();

	// Open messaging thread. 
	document.querySelector('main div.innermain').classList.add('open');
	// if(brandNew) {
	// 	document.querySelector('main article.thread').classList.remove('gone');
	// 	brandNew = false;
	// }

	// Bring focus to message composer box. 
	document.getElementById('newmessage').focus();
}

// Go to home page. 
function closeMsgThread() {
	console.log('Closing message thread...');

	// Close messaging thread. 
	document.querySelector('main div.innermain').classList.remove('open');

	// Remove previous recipient id. Is this necessary? Maybe not, just in case the desktop version is open. 
	// currentRecipientId = -1;
}
