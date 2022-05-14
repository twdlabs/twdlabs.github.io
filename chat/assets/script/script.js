


// Get page slider. 
const pageslider = document.querySelector('main#chatlist div.slider');


// Initialize current user id. 
var currentUserId = -1;

// Get header box for current user. 
const userheaderbox = document.getElementById('currentuser');
// Get name box for current user. 
const currentusernamebox = document.getElementById('currentusername');
// Get avatar box for current user. 
const currentuseravatarbox = document.getElementById('currentuseravatar');

// Get contact list for current user. 
const contactlist = document.querySelector('section#list div#contacts ul.contactlist');


// Initialize current recipient id. 
var selectedRecipientId;

// Get header box for recipient. 
const recipientbox = document.getElementById('recipient');
// Get name box for recipient. 
const recipientnamebox = document.getElementById('recipientname');
// Get avatar box for recipient. 
const recipientavatarbox =  document.getElementById('recipientavatar');

// Get text input field for new message composition. 
const newmsgfield = document.getElementById('newmessage');


/*****/


// Handle events. 
handleEvents();


/*****/


// Handle universal events. 
function handleEvents() {

	// Activate enter key to send message. 
	newmsgfield.addEventListener('keyup',checkForEnter);

	/*****/

	// Check for enter on key press within message input text field. 
	function checkForEnter(event) {
		// console.log(event);
		if(event.keyCode==13) sendNewMessage();
	}
}

// Refresh data for currently selected user. 
function refreshUserData() {
	console.log('currentUserId',currentUserId);

	// Get data for current user. 
	let currentuser = !isNaN(currentUserId) ? (userdata[currentUserId]) : (null);
	let fname = (currentuser) ? (currentuser.fname) : ('[First Name]');
	let lname = (currentuser) ? (currentuser.lname) : ('[Last Name]');
	// console.log('currentuser',currentuser);
	console.log('\nLoading user data:',currentUserId, fname, lname, currentuser);

	// Refresh name of current user above contact list. 
	currentusernamebox.innerHTML = `${fname} ${lname}`;

	// Refresh image of current user above contact list. 
	currentuseravatarbox.innerHTML = (currentuser) ? (`<img src="${ currentuser.avatarurl }">`) : ('');

	// Refresh current user status above contact list. 
	if(currentuser && currentuser.online) {
		userheaderbox.classList.add('online');
	} else {
		userheaderbox.classList.remove('online');
	}

	// Refresh list of contacts for current user. 
	refreshContactList();

	// Handle custom events for current user. 
	handleUserEvents();

	/*****/

	// Refresh list of contacts. 
	function refreshContactList() {
		if( currentUserId<0 ) return;
		
		// Initiate result. 
		let result = '';

		// Accumulate contact item data for contact list. 
		for(let id in userdata) {

			// Exclude oneself from contact list. 
			if(id==currentUserId) continue;

			// Create contact item and add to list. 
			result += createContactItem(id);
		}

		// Add contacts to contact list on page. 
		contactlist.innerHTML = result;

		/****/

		// Create contact item. 
		function createContactItem(contactid) {

			// Get contact's user data. 
			let contact = userdata[contactid];

			// Get last message sent between two users: current user and current contact. 
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

			/***/

			// Find most recent message sent among two-user cohort. 
			function findLastMessageBtwnUsers(idA,idB) {
				if( idA<0 || idB<0 ) return;
				console.log('\tFinding last msg btwn users:',idA,idB);
	
				// Get tagged list of sent messages. 
				let sentMessages = getSentMessages();
				
				// Get tagged list of received messages. 
				let receivedMessages = getReceivedMessages();
				
				// Combine tagged lists for general list of messages. 
				let allRelevantMessages = [...sentMessages, ...receivedMessages];
	
				// Sort general message list by time (descending). 
				allRelevantMessages.sort(sortByTimeDesc);
	
				// console.log( '\t\tList of sent messages:',sentMessages );
				// console.log( '\t\tList of received messages:',receivedMessages );
				// console.log( '\t\tFull list of relevant messages:', allRelevantMessages );
	
				// Get content of most recent message (if exists). 
				let result = getMostRecentMsg();
	
				// Return resulting message content. 
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
						let isOutgoing = (recentMsgItem.senderid==idA) /* && (recentMsgItem.recipientid==idB) */;
		
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

	// Handle custom user events. 
	function handleUserEvents() {
		
		// Get contact list items. 
		let contactlistitems = document.querySelectorAll('section#list div#contacts ul.contactlist li.contactitem');
		// console.log('Contact list items:',contactlistitems);
	
		// Activate contact list item clicks. 
		for(item of contactlistitems) {
			// console.log('\tContact list item:',item);
			// item.addEventListener('click',openMsgThread);
			item.addEventListener('click',function(event) {

				// Get selected contact list item. 
				let selectedContactListItem = event.currentTarget;
				console.log('Selected contact:',selectedContactListItem);

				// Save selected recipient id. 
				selectedRecipientId = selectedContactListItem.getAttribute('data-userid') * 1;

				// Open messaging thread using selected recipient id. 
				openMsgThread();
			});
		}
	}
}

// Open messaging thread. 
function openMsgThread() {
	// console.log('Opening message thread...');

	// Get user data for selected contact. 
	let recipient = userdata[selectedRecipientId];
	let fname = recipient.fname;
	let lname = recipient.lname;
	// console.log('\nCurrent recipient id:', selectedRecipientId);
	// console.log('Recipient:', fname,lname, recipient);

	// Refresh recipient name. 
	recipientnamebox.innerHTML = `${ (fname)?(fname):('') } ${ (lname)?(lname):('') }`;

	// Refresh recipient avatar. 
	recipientavatarbox.innerHTML = `<img src="${recipient.avatarurl}">`;

	// Refresh online/offline status on recipient box. 
	if(recipient.online) {
		recipientbox.classList.remove('offline');
		recipientbox.classList.add('online');
	}
	else {
		recipientbox.classList.remove('online');
		recipientbox.classList.add('offline');
	}

	// Refresh message history for current cohort. 
	refreshMsgHistory(currentUserId, selectedRecipientId);

	// Make messaging thread visible. 
	pageslider.classList.add('open');

	// 
	newmsgfield.removeAttribute('disabled');

	// Bring focus to input field in message composer box. 
	newmsgfield.focus();
}

// Go to home page. 
function closeMsgThread() {
	console.log('Closing message thread...');

	// 
	newmsgfield.setAttribute('disabled','');

	// Close messaging thread. 
	pageslider.classList.remove('open');

	// Clear messages in thread. 
	clearMsgHistory();

	// Remove online/offline status on recipient box. 
	recipientbox.classList.remove('online');
	recipientbox.classList.remove('offline');

	// Remove recipient avatar. 
	recipientavatarbox.innerHTML = '';

	// Remove recipient name. 
	recipientnamebox.innerHTML = '';

	// Remove previous recipient id (just in case the desktop version is open). 
	selectedRecipientId = -1;
}

