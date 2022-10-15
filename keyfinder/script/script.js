


// Get key input boxes. 
const keyInputBox0 = document.getElementById('keyInputBox0');
const keyInputBox1 = document.getElementById('keyInputBox1');
const keyInputBox2 = document.getElementById('keyInputBox2');
const keyInputBox3 = document.getElementById('keyInputBox3');
const keyInputBox4 = document.getElementById('keyInputBox4');
const keyInputBox5 = document.getElementById('keyInputBox5');
const keyInputBox6 = document.getElementById('keyInputBox6');

// Get main output box. 
const ouputBox = document.getElementById('outputBox');



/*****/


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

// Show output. 
// Output: Show results on page. 
function showOutput() {

	// Initialize list of input keys. 
	let inputKeys = [];
	let inputKeyIndexes = [];
	
	// Initialize list of indexes for matching scales. 
	let matchingScales = [];

	// Save list of input keys. 
	saveInputKeys();

	// Get matching key scales. 
	getMatchingScales(inputKeys);
	console.log('matchingScales:',matchingScales);

	// 
	ouputBox.innerHTML = '&nbsp;';
	
	// Show matching scales. 
	showMatchingScales();

	/****/

	// Input: Save input keys to list. 
	function saveInputKeys() {
	
		// // 
		// inputKeys = [
		// 	keyInputBox0.value,
		// 	keyInputBox1.value,
		// 	keyInputBox2.value,
		// 	keyInputBox3.value,
		// 	keyInputBox4.value,
		// 	keyInputBox5.value,
		// 	keyInputBox6.value,
		// ];
		inputKeys[0] = keyInputBox0.value;
		inputKeys[1] = keyInputBox1.value;
		inputKeys[2] = keyInputBox2.value;
		inputKeys[3] = keyInputBox3.value;
		inputKeys[4] = keyInputBox4.value;
		inputKeys[5] = keyInputBox5.value;
		inputKeys[6] = keyInputBox6.value;
		console.log('inputKeys:',inputKeys);
	
		// 
		let i0 = (keyRepo.majorIds).indexOf(inputKeys[0]);
		let i1 = (keyRepo.majorIds).indexOf(inputKeys[1]);
		let i2 = (keyRepo.majorIds).indexOf(inputKeys[2]);
		let i3 = (keyRepo.majorIds).indexOf(inputKeys[3]);
		let i4 = (keyRepo.majorIds).indexOf(inputKeys[4]);
		let i5 = (keyRepo.majorIds).indexOf(inputKeys[5]);
		let i6 = (keyRepo.majorIds).indexOf(inputKeys[6]);
	
		// Add all valid indices to list. 
		if(i0>-1) inputKeyIndexes.push(i0);
		if(i1>-1) inputKeyIndexes.push(i1);
		if(i2>-1) inputKeyIndexes.push(i2);
		if(i3>-1) inputKeyIndexes.push(i3);
		if(i4>-1) inputKeyIndexes.push(i4);
		if(i5>-1) inputKeyIndexes.push(i5);
		if(i6>-1) inputKeyIndexes.push(i6);
		// console.log('inputKeyIndexes:',inputKeyIndexes);
		
	}
	
	// Process: Get key scales that match user input (scale contains all input keys). 
	function getMatchingScales(keyInput) {
	
		// Go thru each key scale. 
		for(let i in keyScaleRepo) {

			// Get key scale. 
			let keyScale = keyScaleRepo[i];

			// Check if key scale matches input. 
			let scaleMatchesInput = checkForMatchingScale(keyInput,keyScale);
			// console.log(1*i,'scaleMatchesInput:',scaleMatchesInput);

			// Save index of key scale if matches input. 
			if(scaleMatchesInput) matchingScales.push(i);
		}
	
		/****/
	
		// Check if key scale matches input keys (scale contains all input keys). 
		function checkForMatchingScale(keyInput,keyScale) {
		
			// Go thru each input key. 
			for(let keyIndex of inputKeyIndexes) {
		
				// Exclude if input key is missing from given list. 
				let missingAKey = !(keyScale.scalekeys).includes(keyIndex);
				if( missingAKey ) return false;
			}
		
			// Return true if no input keys missing from given list. 
			return true;
		}
	}
	
	// Show key scales that match user input. 
	function showMatchingScales() {

		// 
		let result = '';

		// 
		for(let scaleIndex of matchingScales) {
			// result += ``;
			result += `
			<!-- scale -->
			<div class="scale">

				<!-- scalename -->
				<span class="scalename">${ keyScaleRepo[scaleIndex].scalename }</span>
				<!-- /scalename -->

				<!-- scalekeylist -->
				<span class="scalekeylist">[ ${ formatKeys( keyScaleRepo[scaleIndex].scalekeys ).join(' ') } ]</span>
				<!-- /scalekeylist -->
				
			</div>
			<!-- /scale -->`;

			result += `
			<!-- scale -->
			<span class="scale"></span>
			<!-- /scale -->`;
		}

		// 
		// ouputBox.innerHTML = matchingScales;
		ouputBox.innerHTML = result;

		/***/

		// Format keys by index. 
		function formatKeys(listOfKeyIndexes) {
			// 
			// return listOfKeyIndexes.map( (i)=>( keyRepo.keylist[i].keyid ) );
			return listOfKeyIndexes.map( (i)=>( keyRepo.keylist[i].keyid || keyRepo.keylist[i].keyflatname || keyRepo.keylist[i].keysharpname ) );
		}
	}
}


