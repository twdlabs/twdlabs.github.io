


// Get page slider. 
const pageslider = document.querySelector('main#chatlist div.slider');


/*****/


// Initialize current recipient id. 
var selectedRecipientId;


/*****/


// Open conversation. 
function openMsgThread() {
	console.log('Opening message thread...','\nRecipient id:', selectedRecipientId);

	// Get user data for selected contact. 
	let recipient = userDataList[selectedRecipientId];
	let fname = recipient.fname;
	let lname = recipient.lname;
	// console.log('Recipient:', fname,lname, recipient);

	// Refresh recipient name. 
	recipientnamebox.innerHTML = `${ (fname?fname:'') } ${ (lname?lname:'') }`;
	// Refresh recipient avatar. 
	recipientavatarbox.innerHTML = `<img src="${ recipient.avatarurl }">`;
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
	// Make conversation page visible. 
	pageslider.classList.add('open');
	// Enable composer field. 
	newmsgfield.removeAttribute('disabled');

	// Bring focus to input field in message composer box. 
	// newmsgfield.focus();
}

// Close conversation, returning to home page. 
function closeMsgThread() {
	console.log('Closing message thread...');

	// Disable composer field. 
	newmsgfield.setAttribute('disabled','');
	// Make conversation page invisible. 
	pageslider.classList.remove('open');
	// Clear message history. 
	clearMsgHistory();

	// Remove recipient name. 
	recipientnamebox.innerHTML = '';
	// Remove recipient avatar. 
	recipientavatarbox.innerHTML = '';
	// Remove online/offline status from recipient box. 
	recipientbox.classList.remove('online');
	recipientbox.classList.remove('offline');

	// Remove previous recipient id (just in case the desktop version is open). 
	selectedRecipientId = -1;
}

