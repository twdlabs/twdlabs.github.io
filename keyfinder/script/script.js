


// Get key input boxes. 
const keyInputBox0 = document.getElementById('keyInputBox0');
const keyInputBox1 = document.getElementById('keyInputBox1');
const keyInputBox2 = document.getElementById('keyInputBox2');
const keyInputBox3 = document.getElementById('keyInputBox3');
const keyInputBox4 = document.getElementById('keyInputBox4');
const keyInputBox5 = document.getElementById('keyInputBox5');
const keyInputBox6 = document.getElementById('keyInputBox6');
const inputBoxList = [keyInputBox0,keyInputBox1,keyInputBox2,keyInputBox3,keyInputBox4,keyInputBox5,keyInputBox6,];

// Get main output box. 
const ouputBox = document.getElementById('outputBox');


/*****/


// Handle events. 
handleEvents();


/*****/


// Handle events. 
function handleEvents() {

	// Respond to press of quick buttons. 
	const quickbtns = document.querySelectorAll('div#container main.main div.item div.field div.quickbtn');
	for(let btn of quickbtns) {
		btn.addEventListener('click',respondToQuickBtn);
	}

	// Respond to key press. 
	for(let inputBox of inputBoxList) {
		inputBox.addEventListener('keyup', respondToKey);
	}

	/****/

	// Respond to press of quick button. 
	function respondToQuickBtn(event) {

		// Get selected quick button. 
		let quickbtn = event.currentTarget;

		// Get key value from button. 
		let keyvalue = quickbtn.getAttribute('data-keyvalue');

		// Get adjacent input box. 
		let keyinputbox = quickbtn.parentElement.querySelector('input.key');

		// Add key value tp input box. 
		keyinputbox.value = keyvalue;

		// Show running output. 
		showOutput();
	}

	// Respond to key press. 
	function respondToKey(event) {
		// console.log('Responding to key',event.keyCode,event.key);

		// Check if enter key pressed. 
		if(event.keyCode==13 || event.key=='Enter') showOutput();
	}
}


// Clear form. 
function clearForm() {
	
	// Clear input. 
	clearInput();
	// Clear output. 
	clearOutput();
	
	/****/
	
	// Clear input. 
	function clearInput() {
		keyInputBox0.value = '';
		keyInputBox1.value = '';
		keyInputBox2.value = '';
		keyInputBox3.value = '';
		keyInputBox4.value = '';
		keyInputBox5.value = '';
		keyInputBox6.value = '';
	}
	
	// Clear output. 
	function clearOutput() {
		// 
		ouputBox.innerHTML = '';
	}
}

// Output: Show results on page. 
function showOutput() {
	let debug = false;

	// Initialize list of input keys. 
	let inputKeys = [];
	let inputKeyIndexes = [];

	// Reset list of indexes for matching scales. 
	matchingScaleResults = [];

	// Save list of input keys. 
	saveInputKeys();

	// Get matching key scales. 
	getMatchingScales(inputKeys);
	if(debug) console.log('Matching scale indexes:',matchingScaleResults);
	
	// Show matching key scales. 
	showMatchingScales();
	if(debug) console.log('Matching scale indexes:',matchingScaleResults);

	/****/

	// Input: Save input keys to list. 
	// Eb -> DE -> 3
	function saveInputKeys() {
		let debug = false;
		
		// Get list of key ids for all keys. 
		let allKeyIds = keyList.map( item => item.keyid );
		if(debug) console.log('All key ids:', allKeyIds);
	
		// 
		// inputKeys[0] = keyInputBox0.value;
		// inputKeys[1] = keyInputBox1.value;
		// inputKeys[2] = keyInputBox2.value;
		// inputKeys[3] = keyInputBox3.value;
		// inputKeys[4] = keyInputBox4.value;
		// inputKeys[5] = keyInputBox5.value;
		// inputKeys[6] = keyInputBox6.value;

		// Get user input keys. 
		inputKeys = [
			keyInputBox0.value,
			keyInputBox1.value,
			keyInputBox2.value,
			keyInputBox3.value,
			keyInputBox4.value,
			keyInputBox5.value,
			keyInputBox6.value,
		];
		if(debug) console.log('Raw user input:', inputKeys);

		// Convert user input keys. 
		inputKeys = inputKeys.map( convertKey );
		if(debug) console.log('User input ids:', inputKeys);

		// Find index for each input key. 
		let i = inputKeys.map( key => allKeyIds.indexOf(key) );
		// console.log('i:',i);
		// Create list of valid indexes. 
		if(i[0]>-1) inputKeyIndexes.push(i[0]);
		if(i[1]>-1) inputKeyIndexes.push(i[1]);
		if(i[2]>-1) inputKeyIndexes.push(i[2]);
		if(i[3]>-1) inputKeyIndexes.push(i[3]);
		if(i[4]>-1) inputKeyIndexes.push(i[4]);
		if(i[5]>-1) inputKeyIndexes.push(i[5]);
		if(i[6]>-1) inputKeyIndexes.push(i[6]);
		if(debug) console.log('User input indexes:',inputKeyIndexes);
		
		/****/

		// Convert input key names to raw key ids. 
		function convertKey(inputkeyname) {

			// Go thru list of keys to find given key. 
			for(let key of keyList) {

				// Determine key match. 
				let keyMatch = (inputkeyname==key.keyflatname || inputkeyname==key.keysharpname);

				// Return matching key id. 
				if(keyMatch) return key.keyid;
			}

			// Return empty string if not found. 
			return '';
		}
	}
	
	// Process: Get key scales that match user input (scale contains all input keys). 
	function getMatchingScales(keyInput) {
	
		// Go thru each key scale. 
		for(let i in scaleList) {

			// Get key scale. 
			let keyScale = scaleList[i];

			// Check if key scale matches input. 
			let scaleMatchesInput = checkForMatchingScale(keyInput,keyScale);
			// console.log(1*i,'scaleMatchesInput:',scaleMatchesInput);

			// Save index of key scale if matches input. 
			if(scaleMatchesInput) matchingScaleResults.push(i);
		}
	
		/****/
	
		// Check if key scale matches input keys (scale contains all input keys). 
		function checkForMatchingScale(keyInput,keyScale) {
		
			// Go thru each input key. 
			for(let keyIndex of inputKeyIndexes) {
		
				// Exclude if input key is missing from given list. 
				let missingInputKey = !(keyScale.keyindexlist).includes(keyIndex);
				if( missingInputKey ) return false;
			}
		
			// Return true if no input keys missing from given list. 
			return true;
		}
	}
	
	// Show key scales that match user input. 
	function showMatchingScales() {
		let debug = false;

		// Initialize result. 
		let result = '';

		// 
		// for(let scaleSet of matchingScaleResults) {

		// Open set. 
		result += `
		<!-- set -->
		<div class="set">`;

		// 
		// for(let scaleIndex of scaleSet) {
		// for(let scaleIndex of matchingScaleResults) {
		for(let i in matchingScaleResults) {

			// Get index of matching scale. 
			scaleIndex = matchingScaleResults[i];
			if(debug) console.log(`i${i}`,scaleIndex);

			// Get scale name. 
			let scalename = scaleList[scaleIndex].scalename;
			if(debug) console.log(`\tScale name: ${scalename}`);
			
			// Get scale naming indicator. 
			let namingkey = scaleList[scaleIndex].namingkey || ( /* 'keyid' || 'keyflatname' || */ 'keysharpname');
			if(debug) console.log(`\tScale naming key: ${namingkey}`);

			// Get list of key indexes for scale. 
			let keyindexlist = scaleList[scaleIndex].keyindexlist;
			if(debug) console.log(`\tKey index list: [ ${keyindexlist.join(' ')}]`);

			// Get formatted list of keys for given scale. 
			let scalekeyslist = formatKeyList( keyindexlist, namingkey );
			if(debug) console.log(`\tKey list: [ ${scalekeyslist.join(' ')}]`);

			// Add scale representation to page result. 
			result += `
			<!-- scale -->
			<div class="scale" data-scaleindex="${ scaleIndex }" data-resultindex="${ i }">

				<!-- scalename -->
				<span class="scalename">${ scalename }</span>
				<!-- /scalename -->

				<!-- scalekeys -->
				<span class="scalekeys">${ scalekeyslist.join(' ') }</span>
				<!-- /scalekeys -->
				
			</div>
			<!-- /scale -->`;

			// 
			// result += ``;
		}

		// Close set. 
		result += `
		</div>
		<!-- /set -->`;
		
		// }

		// Clear previous result. 
		ouputBox.innerHTML = '&nbsp;';

		// Show result of matching scales on screen. 
		ouputBox.innerHTML = result;

		// Activate clicks on scale buttons. 
		activateScaleBtns();

		/***/

		// Format keys by index (converting numbers to letters). 
		function formatKeyList( keyindexlist, namingkey = 'keyid' ) {
			if(debug) console.log('\tnamingkey:',namingkey);

			// Convert index to key name. 
			return keyindexlist.map( index => ( keyList[index][namingkey] ) );
		}

		// Activate clicks on scale buttons. 
		function activateScaleBtns() {

			// Get all scale buttons. 
			let allScaleBtns = document.querySelectorAll('div#container main.main div.item div.output div.scale');
			
			// Go thru all scale buttons. 
			for(let scalebtn of allScaleBtns) {
				// Show selected scale when button clicked. 
				scalebtn.addEventListener('click',showScale);
			}

			/**/

			// Show selected scale result. 
			function showScale(event) {

				// Get selected scale button. 
				let selectedScaleBtn = event.currentTarget;

				// Get selected result index. 
				let resultIndex = 1 * selectedScaleBtn.getAttribute('data-resultindex');

				// Show selected scale result on scale display. 
				openScaleDisplay(resultIndex);
				// console.log(`Selected result index: ${resultIndex}`);
			}
		}
	}
}
