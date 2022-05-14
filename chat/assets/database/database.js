

// Initialize message data. 
const messageData = [
	{
		senderid:1,
		recipientid:0,
		timestamp:1577854806,
		messagetext:'Necessitatibus iure quos iste saepe totam illum ',
		// messagetext:'aliquid quibusdam accusantium.'
	},
	{
		senderid:1,
		recipientid:0,
		timestamp:1577854800,
		messagetext:'Yerrrrr'
	},
	{
		senderid:1,
		recipientid:0,
		timestamp:1577854801,
		messagetext:'Yerrrrr'
	},
	{
		senderid:1,
		recipientid:0,
		timestamp:1577854802,
		messagetext:'What\'s the word'
	},
	{
		senderid:0,
		recipientid:1,
		timestamp:1577854803,
		messagetext:'What\'s the word'
	},
	{
		senderid:1,
		recipientid:0,
		timestamp:1577854804,
		messagetext:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	},
	{
		senderid:0,
		recipientid:1,
		timestamp:1577854805,
		messagetext:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	},
	{
		senderid:0,
		recipientid:2,
		timestamp:1577854807,
		messagetext:'Necessitatibus iure quos iste saepe totam illum aliquid quibusdam accusantium.'
	},
	{
		senderid:1,
		recipientid:2,
		timestamp:1577854808,
		messagetext:'Aliquam dignissimos et modi aut temporibus a natus, atque dolor iste iure.'
	},
	{
		senderid:0,
		recipientid:2,
		timestamp:1577854809,
		messagetext:'Aliquam dignissimos et modi aut temporibus a natus, atque dolor iste iure.'
	},
	{
		senderid:1,
		recipientid:2,
		timestamp:1577854810,
		messagetext:'Peace out'
	},
	{
		senderid:2,
		recipientid:1,
		timestamp:1577854811,
		messagetext:'See you later'
	},
];






// // Find last message sent between two users. 
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









// Choose user: Start user functionality. 
function chooseUser() {

	// Prompt user for login or registration. 
	let haveValidResponse = false;
	let alreadyMember = false;

	// Continue till valid response received. 
	while(!haveValidResponse) {

		// Get user response. 
		let r = prompt('Are you already a member? (Y or N)');
		let response = (r) ? r.toUpperCase() : ('');

		// Check user response. 
		haveValidResponse = response=='Y' || response=='YES' || response=='N' || response=='NO';
		alreadyMember = response=='Y' || response=='YES';
	}

	// Prompt user for login. 
	if(alreadyMember) {
		goLoginUser();
	}
	// Prompt user for registration. 
	else {
		goRegisterUser();
	}
}

// // Prompt user for login. 
// function goLoginUser() {

// 	// Initialize state of username input. 
// 	let haveValidUsername = false;
// 	// Initialize decision to cancel input. 
// 	let cancelInput = false;

// 	// Continue trying for input until valid input accepted or input process cancelled. 
// 	while(!haveValidUsername && !cancelInput) {

// 		// Get input username. 
// 		let un = prompt('Please enter your username');

// 		// Check if input is valid username. 
// 		haveValidUsername = checkForValidUsername(un);
// 		if(haveValidUsername) console.log('Username validated');

// 		// Check for input cancellation. 
// 		cancelInput = (un==null || un=='');
// 		if(cancelInput) console.log('Username input cancelled');
// 	}
	
// 	// Go for password only if username validated. 
// 	if(haveValidUsername) {

// 		// Initialize state of password match. 
// 		let haveMatchingPassword = false;

// 		// Initialize number of password attempts. 
// 		let numPasswordAttempts = 0;

// 		// Initialize decision to cancel input. 
// 		cancelInput = false;

// 		// Continue trying for input until valid input accepted or input process cancelled. 
// 		while(!haveMatchingPassword && !cancelInput) {

// 			// Get input password. 
// 			let pw = prompt('Please enter your password');

// 			// Check for matching password. 
// 			haveMatchingPassword = (pw==userdata[selectedUserIndex].password);

// 			// Increment number of password attempts. 
// 			numPasswordAttempts++;

// 			// Allow for only up to 3 failed password attempts. 
// 			cancelInput = (numPasswordAttempts>=3)
// 			if(cancelInput) break;
// 		}
// 	}
// }

// // Prompt user for registration. 
// function goRegisterUser() {

// 	// 
// 	let un = prompt('Please enter your new username');
// 	let pw0 = prompt('Please enter your new password');
// 	let pw1 = prompt('Please confirm your password');
// 	// let avurl = prompt('Please enter your avatar url');
// }






// // Check for valid login credentials. 
// function checkCredentials0() {

// 	// Initialize result. 
// 	let matchFound = false;

// 	// Go thru each user item, checking for match. 
// 	for(let i in userdata) {

// 		// Check for matching username. 
// 		let matchingUsername = (un == userdata[i].username);

// 		// Check for matching password. 
// 		let matchingPassword = (pw == userdata[i].password);

// 		// Check for all matching user credentials to initiate login.
// 		let matchFound = matchingUsername && matchingPassword;

// 		// End search upon finding match. 
// 		if(matchFound) break;
// 	}

// 	// Return result. 
// 	return matchFound;
// }







// // Refresh messages in thread. 
// function refreshMsgHistory0() {

// 	// Find all messages relevant to current user cohort. 
// 	let relevantMessages = findRelevantMessages(currentUserId,selectedRecipientId);
// 	console.log('\tRelevant messages:', relevantMessages);
// 	let msgThreadLayout = createMessageLayout(relevantMessages);

// 	// Create separate groups of messages from original list of messages. 
// 	// let allMessageGroups = createSeparateMessageGroups(relevantMessages);
// 	// console.log('\tAll message groups:\t', allMessageGroups);

// 	// Create message history layout (grouped by time proximity) from time-linked groups of messages. 
// 	// let msgThreadLayout = createMessageLayout(allMessageGroups);
// 	// console.log('\tMessage thread layout:', msgThreadLayout);
	
// 	// Load message history into thread. 
// 	document.querySelector('section#chat div#msghistory div.inner').innerHTML = msgThreadLayout;


// 	/*****/

	
// 	// Find all messages relevant to current user cohort (sorted in time order). 
// 	function findRelevantMessages(idA,idB) {
// 		console.log('\nGetting messages between two users...');
// 		console.log('\tThis userid:',idA);
// 		console.log('\tOther userid:',idB);

// 		// Initialize list of relevant messages. 
// 		let result = [];

// 		// Go thru message data. 
// 		for(let currentMessageObject of messageData) {
// 			// console.log('\ncurrentMessageObject: user',currentMessageObject.senderid, 'to user',currentMessageObject.recipientid);

// 			// Check for matching senderid and matching recipientid. 
// 				let foundSentMsg = currentMessageObject.senderid==idA && currentMessageObject.recipientid==idB;
// 				let foundReceivedMsg = currentMessageObject.senderid==idB && currentMessageObject.recipientid==idA;
// 				let foundMatchingMsg = foundSentMsg || foundReceivedMsg;

// 				// Proceed if matching message found. 
// 				if(foundMatchingMsg) result.push(currentMessageObject);
// 		}

// 		// Sort messages. 
// 		result.sort(timeSorter);

// 		// Return relevant messages. 
// 		// console.log('\nRelevant messages:\n', result/* , result.map((item)=>{return item.messagetext;}) */ );
// 		return result;

// 		/*****/

// 		// Sort messages by time sent. 
// 		function timeSorter(a,b) {
// 			return a.timestamp - b.timestamp;
// 		}
// 	}

// 	// TODO: Create separate groups of messages from original list of messages. Transform 1D array into new 2D array. 
// 	function createSeparateMessageGroups(messageList) {
// 		console.log('\nCreating separate groups of messages...');


// 		// Intialize resulting list of message groups. 
// 		let messageGroupList = [];

// 		// Intialize number of message groups (also used as group index). 
// 		let numGroups = 0;	// = messageGroupList.length;

// 		// Go thru message list items to separate into list of grouped message items. 
// 		for(let i=0 ; i<messageList.length ; i++) {

// 			// 
// 			let sameGroupAsLastOne = true || false;

// 			// 
// 			if(sameGroupAsLastOne) numGroups++;
// 		}

// 		// Intialize loop counter. 
// 		// let i = 0;
// 		// while(i<messageList.length) {

// 			// Create variable for message group. 
// 			let messageGroup;

// 			// Get current message item. 
// 			let currentmsgitem = messageList[i];
// 			// console.log('\tCurrent message item:', currentmsgitem);
// 			// console.log('\t\tSender id:', currentmsgitem.senderid);
// 			// console.log('\t\tRecipient id:', currentmsgitem.recipientid);
// 			// console.log('\t\tTime stamp:', currentmsgitem.timestamp);
// 			// console.log('\t\tMessage content:', currentmsgitem.messagetext);




// 			// Open message group. 
// 			/* if() */ messageGroup = openMessageGroup();

// 			// Add to current message group. 
// 			addItemToMessageGroup(currentmsgitem);


// 			// TODO: Check if next message available. 
// 			let nextMessageAvailable = ( (i+1) < messageList.length );
			
// 			// 
// 			if(nextMessageAvailable) {

// 				// Check if same sender as previous message. 
// 				let sameSender = ( messageList[i].senderid == messageList[i+1].senderid );

// 				// 
// 				if(sameSender) {

// 					// Determine whether or not to remain in current message group -- based on (a) message availability, and (b) proximity to last message in group. 
// 					let remainInCurrentMsgGroup = checkForTimeProximity( messageList[i], messageList[i+1] );
					
// 					// Add to current message group while more messages and still close to last message. 
// 					if(remainInCurrentMsgGroup) {
// 						while(remainInCurrentMsgGroup) {
							
// 							// Get next message item. 
// 							currentmsgitem = messageList[++i];
			
// 							// 
// 							messageGroup.push(currentmsgitem);
			
// 							// Check if next message available. 
// 							nextMessageAvailable = (i+1) < messageList.length;
// 							// Determine whether or not to remain in current message group -- based on (a) message availability, and (b) proximity to last message in group. 
// 							remainInCurrentMsgGroup = nextMessageAvailable && checkForTimeProximity( messageList[i], messageList[i+1] );
// 						}
// 					}
// 				}
// 			}


// 			// Close message group. 
// 			/* if() */ closeMessageGroup();


			
// 			// Increment counter after iteration. 
// 			// i++;
// 		// }

// 		// Return resulting list of message groups. 
// 		// console.log('\tList of message groups:',messageGroupList);
// 		return messageGroupList;

// 		/*****/

// 		// TODO: Open message group. 
// 		function openMessageGroup() {

// 			// Initialize new message group. 
// 			return [];
// 		}

// 		// TODO: Add to current message group. 
// 		function addItemToMessageGroup(msgitem) {

// 			// Include current message item in current message group. 
// 			messageGroup.push(msgitem);
// 			// console.log('\tCurrent message group:',messageGroup);
// 		}

// 		// TODO: Close message group. 
// 		function closeMessageGroup() {

// 			// Save current message group to group list. 
// 			messageGroupList.push(messageGroup);
// 		}

// 		// Check for time proximity btwn two messages. 
// 		function checkForTimeProximity(msgitemA,msgitemB) {

// 			// Define temporal proximity boundary for message grouping. 
// 			const dtDistantBoundary = 4800000;	// 80 min = 4,800 sec = 4,800,000 ms
// 			// Define temporal proximity boundary for closely attached messages. 
// 			// const dtCloseBoundary = 60000;		// 1 min = 60 sec = 60,000 ms

// 			// Get timestamp of messages (in ms). 
// 			timeA = msgitemA.timestamp;
// 			timeB = msgitemB.timestamp;

// 			// Get time difference (in ms), assuming (time of message B) is after (time of message A). 
// 			let dt = timeB - timeA;

// 			return (dt < dtDistantBoundary);
// 		}

// 		/*****/

// 		// Delete all this: Accumulate message data for each block and create each block. 

// 		// Get message item. 
// 		let msgitem = messageList[index];

// 		// Add message item to group. 
// 		msgblocks.push(msgitem);

// 		// Set values of logic testers. 
// 		let keepGoing = true;
// 		keepGoing = (index+1)<messageList.length;
// 		let nextMsgItem = undefined;
// 		nextMsgItem = keepGoing && messageList[index+1];
// 		let matchingMsgMetadata = false;
// 		matchingMsgMetadata = keepGoing && (msgitem.senderid==nextMsgItem.senderid) && (msgitem.recipientid==nextMsgItem.recipientid);
// 		let proximalMsgTime = false;
// 		proximalMsgTime = keepGoing && (nextMsgItem.timestamp - msgitem.timestamp)<dt;
// 		let stillSameBlock = true;
// 		stillSameBlock = keepGoing && matchingMsgMetadata && proximalMsgTime;
// 	}

// 	// Create message history layout (grouped by time proximity) from time-linked groups of messages. 
// 	function createMessageLayout(messageBlockList) {
// 		console.log('\nCreating layout from message blocks...');
// 		// console.log('\tmessageBlockList:',messageBlockList);

// 		// Initiate resulting message layout. 
// 		let result = '';

// 		// 
// 		for(let msgBlock of messageBlockList) {
// 			let firstmsgitem = msgBlock[0];
// 			// Begin message block. 
// 			result += beginMessageBlock(firstmsgitem);
// 			// Fill message block. 
// 			result += fillMessageBlock(msgBlock);
// 			// End message block. 
// 			result += endMessageBlock();
// 		}

// 		// Return result of all message blocks. 
// 		return result;

// 		/*****/

// 		// Begin message block. 
// 		function beginMessageBlock(msgitem) {

// 			// 
// 			return `
// 			<!-- msgblock -->
// 			<div class="msgblock ${ (msgitem.senderid==currentUserId) ? ('s') : ('r')}">

// 				<!-- timestamp -->
// 				<div class="timestamp">${ formatDate(msgitem.timestamp) }</div>
// 				<!-- /timestamp -->

// 				<!-- content -->
// 				<div class="content">
		
// 					<!-- avatar -->
// 					<div class="avatar">
// 						<img src="${userdata[msgitem.senderid].avatarurl}">
// 					</div>
// 					<!-- /avatar -->
		
// 					<!-- block -->
// 					<div class="block">`;

// 			/*****/

// 			// Format date (given milliseconds from start point). 
// 			function formatDate(nummilliseconds) {

// 				// Define days. 
// 				const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',];
// 				// Define months. 
// 				const months = ['Jan','Feb','Mar', 'Apr','May','Jun', 'Jul','Aug','Sep', 'Oct','Nov','Dec'];

// 				// Create date/time object. 
// 				const d = new Date(nummilliseconds);
// 				let day = days[d.getDay()];
// 				let year = d.getFullYear();
// 				let month = months[d.getMonth()];
// 				let date = d.getDate();
// 				let hour = d.getHours();
// 				let minute = d.getMinutes();
// 				let result = `${day}, ${year} ${month} ${date}, ${ (hour) ? (hour%12) : ('12') }:${ (minute<10) ? ('0'+minute) : (minute) } ${ (hour<12) ? ('AM') : ('PM') }`;

// 				return result;
// 			}
// 		}

// 		// Fill message block. 
// 		function fillMessageBlock(msgblockitems) {
// 			// console.log('\tmsgblockitems:',msgblockitems);

// 			// Initiate result. 
// 			let result = '';

// 			// Add to result. 
// 			for(let msgitem of msgblockitems) {
// 				result += `

// 						<!-- bubble -->
// 						<div class="bubble">
				
// 							<!-- caption -->
// 							<span class="caption">${msgitem.messagetext}</span>
// 							<!-- /caption -->
							
// 						</div>
// 						<!-- /bubble -->`;
// 			}

// 			// Return result. 
// 			return result;
// 		}

// 		// End message block. 
// 		function endMessageBlock() {

// 			// 
// 			return `

// 					</div>
// 					<!-- /block -->

// 				</div>
// 				<!-- /content -->

// 			</div>
// 			<!-- /msgblock -->`;
// 		}
// 	}
// }




