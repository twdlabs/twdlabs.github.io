


// Refresh messages in thread. 
function refreshMsgHistory() {
	console.log('\nRefreshing message thread...');

	// Find all messages relevant to current user cohort. 
	let relevantMessages = findRelevantMessages(currentUserId,currentRecipientId);
	
	// Load message history into thread. 
	let msgblocks = createMessageBlocks(relevantMessages);
	let msghistorycontainer = document.querySelector('article.thread section#msghistory div.inner');
	msghistorycontainer.innerHTML = msgblocks;

	// Scroll to bottom of message history thread. 
	let msghistory = document.getElementById('msghistory');
	msghistory.scrollTop = msghistory.scrollHeight;


	/*****/

	
	// Find all messages relevant to current user cohort. 
	function findRelevantMessages(idA,idB) {
		console.log('\nGetting all messages between users:',idA, 'and',idB);

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
		console.log('Relevant messages:', result/* , result.map((item)=>{return item.messagetext;}) */ );
		return result;

		/*****/

		// Sort messages by time sent. 
		function timeSorter(a,b) {
			return a.timestamp - b.timestamp;
		}
	}

	// Create message blocks. 
	function createMessageBlocks(relevantMessages) {
		console.log('\nCreating message blocks...');

		// Set time boundary for attached messages (1 min = 60 sec = 60,000 ms). 
		const dt = 60000;

		// Initiate result of all message blocks. 
		let result = '';

	
		// Accumulate message data for each block and create each block. 
		for(let index=0 ; index<relevantMessages.length ; index++) {
			console.log('\n\trelevantMessages index:',index);

			// Get message item. 
			let msgitem = relevantMessages[index];
			console.log('\tCurrent message item:',msgitem);

			// Begin message block. 
			result += beginMessageBlock(msgitem);

			// Start preparing message block data. 
			let msgblockdata = [  ];

			// {

			// 	// Set initial values of logic testers. 
			// 	let keepGoing = true;
			// 	let nextMsgItem = undefined;
			// 	let matchingMsgMetadata = false;
			// 	let proximalMsgTime = false;
			// 	let stillSameBlock = true;

			// 	// 
			// 	while(stillSameBlock) {

			// 		// Increment index. 
			// 		index++;

			// 		// Get message item. 
			// 		msgitem = relevantMessages[index];
			// 		msgblockdata.push(msgitem);
					
			// 		// Refresh values of logic testers. 
			// 		keepGoing = (index+1)<relevantMessages.length;
			// 		nextMsgItem = keepGoing && relevantMessages[index+1];
			// 		matchingMsgMetadata = keepGoing && (msgitem.senderid==nextMsgItem.senderid) && (msgitem.recipientid==nextMsgItem.recipientid);
			// 		proximalMsgTime = keepGoing && (nextMsgItem.timestamp - msgitem.timestamp)<dt;
			// 		stillSameBlock = keepGoing && matchingMsgMetadata && proximalMsgTime;
			// 		console.log('\tNext message item:',nextMsgItem);
			// 		console.log('\tKeep going ?',keepGoing);
			// 		console.log('\tMatching message metadata ?',matchingMsgMetadata);
			// 		console.log('\tProximal message time:',proximalMsgTime);
			// 		console.log('\tStill in same block ?',stillSameBlock);
			// 	}
			// }
			
			// Fill message block. 
			result += fillMessageBlock( msgblockdata );

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

			// 
			for(let msgitem of msgblockitems) {
				return `
				<!-- bubble -->
				<div class="bubble">
		
					<!-- caption -->
					<span class="caption">${msgitem.messagetext}</span>
					<!-- /caption -->
					
				</div>
				<!-- /bubble -->`;
			}
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
