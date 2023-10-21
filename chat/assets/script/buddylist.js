


// Get header box for current user. 
const userheaderbox = document.querySelector('#currentuser');

// Get name box for current user. 
const currentusernamebox = document.querySelector('#currentusername');

// Get avatar box for current user. 
const currentuseravatarbox = document.querySelector('#currentuseravatar');

// Get contact list for current user. 
const contactlist = document.querySelector('section#list div#contacts ul.contactlist');

// 
const contactfilterbox = document.querySelector('section#list div#contacts form.search');

// 
const buddyfilterqueryfield = document.querySelector('#searchquery');


/*****/


// Refresh data for currently selected user (or clear data for null user). 
function refreshUserData() {
	console.log('Current user id:',currentUserId);

	// Get data for current user. 
	let currentUser = !isNaN(currentUserId) ? (userDataList[currentUserId]) : (null);
	let fname = (currentUser) ? (currentUser.fname) : ('[First Name]');
	let lname = (currentUser) ? (currentUser.lname) : ('[Last Name]');
	if(!currentUser) {
		console.log('Invalid user selected...',currentUser);
		return;
	}
	console.log('Current user:',currentUser);
	console.log('Loading user data:',currentUserId, fname, lname, currentUser);

	// Refresh name of current user above contact list. 
	currentusernamebox.innerHTML = `${fname} ${lname}`;

	// Refresh image of current user above contact list. 
	currentuseravatarbox.innerHTML = (currentUser) ? (`<img src="${ currentUser.avatarurl }">`) : ('');

	// Refresh current user status above contact list. 
	if(currentUser && currentUser.online) {
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
		for(let id in userDataList) {

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
			let contact = userDataList[contactid];

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

					// 
					if(messageDataMatrix.length<idA) return;
					if(messageDataMatrix[idA].length<idB) return;
	
					// Get untagged list of sent messages. 
					let resultList = messageDataMatrix[idA][idB];

					// 
					// if(!resultList) return [];
					
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

					// 
					if(messageDataMatrix.length<idB) return;
					if(messageDataMatrix[idB].length<idA) return;
	
					// Get untagged list of received messages. 
					let resultList = messageDataMatrix[idB][idA];

					// 
					// if(!resultList) return [];
					
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

// Open buddy filter. 
function openBuddyFilter() {
	console.log('Opening buddy filter...');

	// Clear previous search query. 
	buddyfilterqueryfield.value = '';

	// Activate search section. 
	contactfilterbox.classList.add('active');
	// console.log(contactfilterbox);

	// Bring focus to search box. 
	buddyfilterqueryfield.focus();
}

// Filter contacts by query. 
function filterContacts() {
	console.log('Filtering contacts by search query...');

	// Get filter query. 
	let buddyfilterquery = buddyfilterqueryfield.value;
	console.log('Buddy filter query:',buddyfilterquery);

	// Apply filter to contact list. 
	filterBuddyList(buddyfilterquery);
}

// Close buddy filter. 
function closeBuddyFilter() {
	console.log('Closing buddy filter...');

	// De-activate search section. 
	contactfilterbox.classList.remove('active');
	// console.log(contactfilterbox);

	// Clear previous search query. 
	buddyfilterqueryfield.value = '';

	// Remove filter from contact list. 
	filterBuddyList('');
}

// Apply filter to buddy list. 
function filterBuddyList(query) {

	// Get all contact list items. 
	let allContactListItems = document.querySelectorAll('section#list div#contacts ul.contactlist li.contactitem');
	// console.log('allContactListItems',allContactListItems);

	// Apply contact list filter using given query. 
	if(query) {
		
		// Go thru all contact list items. 
		for(let contactitem of allContactListItems) {

			// Get contact's user id. 
			let contactid = 1*contactitem.getAttribute('data-userid');
			// console.log('contactid',contactid);

			// Check if contact's user data contains query. 
			let weGotAMatch = checkForMatch(query,contactid);

			// Show only matching contact list items. 
			if(weGotAMatch) contactitem.classList.remove('gone');
			else contactitem.classList.add('gone');
		}
	}

	// Remove contact list filter if no query provided. 
	else {

		// Go thru all contact list items. 
		for(let contactitem of allContactListItems) {
			
			// Show all contact list items. 
			contactitem.classList.remove('gone');
		}
	};

	/*****/

	// Check if contact's user data contains query. 
	function checkForMatch(q,id) {

		// Fix query. 
		q = q.toUpperCase();

		// Get and fix contact info. 
		let contact = userDataList[id];
		let f = (contact.fname).toUpperCase();
		let l = (contact.lname).toUpperCase();

		// Return condition. 
		return ( f.includes(q) || l.includes(q) );
	}
}
