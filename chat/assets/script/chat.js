


// Refresh messages in thread. 
function refreshMsgHistory() {
	console.log('\nRefreshing message thread...');return;


	// Find all messages relevant to current user cohort. 
	let relevantMessages = findRelevantMessages(currentUserId,currentRecipientId);
	console.log('\tRelevant messages:', relevantMessages);
	let msgThreadLayout = createMessageLayout(relevantMessages);

	// Create separate groups of messages from original list of messages. 
	// let allMessageGroups = createSeparateMessageGroups(relevantMessages);
	// console.log('\tAll message groups:\t', allMessageGroups);

	// Create message history layout (grouped by time proximity) from time-linked groups of messages. 
	// let msgThreadLayout = createMessageLayout(allMessageGroups);
	// console.log('\tMessage thread layout:', msgThreadLayout);
	
	// Load message history into thread. 
	document.querySelector('section#chat div#msghistory div.inner').innerHTML = msgThreadLayout;

	// Scroll to bottom of message history thread box. 
	let msghistorybox = document.getElementById('msghistory');
	msghistorybox.scrollTop = msghistorybox.scrollHeight;


	/*****/

	
	// Find all messages relevant to current user cohort (sorted in time order). 
	function findRelevantMessages(idA,idB) {
		console.log('\nGetting messages between two users...');
		console.log('\tThis userid:',idA);
		console.log('\tOther userid:',idB);

		// Initialize list of relevant messages. 
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

		// Sort messages. 
		result.sort(timeSorter);

		// Return relevant messages. 
		// console.log('\nRelevant messages:\n', result/* , result.map((item)=>{return item.messagetext;}) */ );
		return result;

		/*****/

		// Sort messages by time sent. 
		function timeSorter(a,b) {
			return a.timestamp - b.timestamp;
		}
	}

	// TODO: Create separate groups of messages from original list of messages. Transform 1D array into new 2D array. 
	function createSeparateMessageGroups(messageList) {
		console.log('\nCreating separate groups of messages...');


		// Intialize resulting list of message groups. 
		let messageGroupList = [];

		// Intialize number of message groups (also used as group index). 
		let numGroups = 0;	// = messageGroupList.length;

		// Go thru message list items to separate into list of grouped message items. 
		for(let i=0 ; i<messageList.length ; i++) {

			// 
			let sameGroupAsLastOne = true || false;

			// 
			if(sameGroupAsLastOne) numGroups++;
		}

		// Intialize loop counter. 
		// let i = 0;
		// while(i<messageList.length) {

			// Create variable for message group. 
			let messageGroup;

			// Get current message item. 
			let currentmsgitem = messageList[i];
			// console.log('\tCurrent message item:', currentmsgitem);
			// console.log('\t\tSender id:', currentmsgitem.senderid);
			// console.log('\t\tRecipient id:', currentmsgitem.recipientid);
			// console.log('\t\tTime stamp:', currentmsgitem.timestamp);
			// console.log('\t\tMessage content:', currentmsgitem.messagetext);




			// Open message group. 
			/* if() */ messageGroup = openMessageGroup();

			// Add to current message group. 
			addItemToMessageGroup(currentmsgitem);


			// TODO: Check if next message available. 
			let nextMessageAvailable = ( (i+1) < messageList.length );
			
			// TODO: 
			if(nextMessageAvailable) {

				// Check if same sender as previous message. 
				let sameSender = ( messageList[i].senderid == messageList[i+1].senderid );

				// 
				if(sameSender) {

					// Determine whether or not to remain in current message group -- based on (a) message availability, and (b) proximity to last message in group. 
					let remainInCurrentMsgGroup = checkForTimeProximity( messageList[i], messageList[i+1] );
					
					// Add to current message group while more messages and still close to last message. 
					if(remainInCurrentMsgGroup) {
						while(remainInCurrentMsgGroup) {
							
							// Get next message item. 
							currentmsgitem = messageList[++i];
			
							// 
							messageGroup.push(currentmsgitem);
			
							// Check if next message available. 
							nextMessageAvailable = (i+1) < messageList.length;
							// Determine whether or not to remain in current message group -- based on (a) message availability, and (b) proximity to last message in group. 
							remainInCurrentMsgGroup = nextMessageAvailable && checkForTimeProximity( messageList[i], messageList[i+1] );
						}
					}
				}
			}


			// Close message group. 
			/* if() */ closeMessageGroup();


			
			// Increment counter after iteration. 
			// i++;
		// }

		// Return resulting list of message groups. 
		// console.log('\tList of message groups:',messageGroupList);
		return messageGroupList;

		/*****/

		// TODO: Open message group. 
		function openMessageGroup() {

			// Initialize new message group. 
			return [];
		}

		// TODO: Add to current message group. 
		function addItemToMessageGroup(msgitem) {

			// Include current message item in current message group. 
			messageGroup.push(msgitem);
			// console.log('\tCurrent message group:',messageGroup);
		}

		// TODO: Close message group. 
		function closeMessageGroup() {

			// Save current message group to group list. 
			messageGroupList.push(messageGroup);
		}

		// Check for time proximity btwn two messages. 
		function checkForTimeProximity(msgitemA,msgitemB) {

			// Define temporal proximity boundary for message grouping. 
			const dtDistantBoundary = 4800000;	// 80 min = 4,800 sec = 4,800,000 ms
			// Define temporal proximity boundary for closely attached messages. 
			// const dtCloseBoundary = 60000;		// 1 min = 60 sec = 60,000 ms

			// Get timestamp of messages (in ms). 
			timeA = msgitemA.timestamp;
			timeB = msgitemB.timestamp;

			// Get time difference (in ms), assuming (time of message B) is after (time of message A). 
			let dt = timeB - timeA;

			return (dt < dtDistantBoundary);
		}

		/*****/

		// Delete all this: Accumulate message data for each block and create each block. 

		// Get message item. 
		let msgitem = messageList[index];

		// Add message item to group. 
		msgblocks.push(msgitem);

		// Set values of logic testers. 
		let keepGoing = true;
		keepGoing = (index+1)<messageList.length;
		let nextMsgItem = undefined;
		nextMsgItem = keepGoing && messageList[index+1];
		let matchingMsgMetadata = false;
		matchingMsgMetadata = keepGoing && (msgitem.senderid==nextMsgItem.senderid) && (msgitem.recipientid==nextMsgItem.recipientid);
		let proximalMsgTime = false;
		proximalMsgTime = keepGoing && (nextMsgItem.timestamp - msgitem.timestamp)<dt;
		let stillSameBlock = true;
		stillSameBlock = keepGoing && matchingMsgMetadata && proximalMsgTime;
	}

	// Create message history layout (grouped by time proximity) from time-linked groups of messages. 
	function createMessageLayout(messageBlockList) {
		console.log('\nCreating layout from message blocks...');
		// console.log('\tmessageBlockList:',messageBlockList);

		// Initiate resulting message layout. 
		let result = '';

		// 
		for(let msgBlock of messageBlockList) {
			let firstmsgitem = msgBlock[0];
			// Begin message block. 
			result += beginMessageBlock(firstmsgitem);
			// Fill message block. 
			result += fillMessageBlock(msgBlock);
			// End message block. 
			result += endMessageBlock();
		}

		// Return result of all message blocks. 
		return result;

		/*****/

		// Begin message block. 
		function beginMessageBlock(msgitem) {

			// 
			return `
			<!-- msgblock -->
			<div class="msgblock ${ (msgitem.senderid==currentUserId) ? ('s') : ('r')}">

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
		
					<!-- block -->
					<div class="block">`;

			/*****/

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

		// Fill message block. 
		function fillMessageBlock(msgblockitems) {
			// console.log('\tmsgblockitems:',msgblockitems);

			// Initiate result. 
			let result = '';

			// Add to result. 
			for(let msgitem of msgblockitems) {
				result += `

						<!-- bubble -->
						<div class="bubble">
				
							<!-- caption -->
							<span class="caption">${msgitem.messagetext}</span>
							<!-- /caption -->
							
						</div>
						<!-- /bubble -->`;
			}

			// Return result. 
			return result;
		}

		// End message block. 
		function endMessageBlock() {

			// 
			return `

					</div>
					<!-- /block -->

				</div>
				<!-- /content -->

			</div>
			<!-- /msgblock -->`;
		}
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
