


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


// Initialize input keys container. 
const inputKeys = [
	// 
];

// Initialize input keys container. 
const matchingScales = [
	// 
];


/*****/


// TODO: Fill repository with all key (base/type) combinations: 
// (C Db D Eb E F Gb G Ab A Bb B) × (M Nm Hm). 


// Input: Receive input keys. 
function receiveInputKeys() {

	// 
	inputKeys[0] = keyInputBox0.value;
	inputKeys[1] = keyInputBox1.value;
	inputKeys[2] = keyInputBox2.value;
	inputKeys[3] = keyInputBox3.value;
	inputKeys[4] = keyInputBox4.value;
	inputKeys[5] = keyInputBox5.value;
	inputKeys[6] = keyInputBox6.value;

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
	
}


// Process: Get key scales that match the user input keys. 

// Get matching scales. 
function getMatchingScales(keyScale) {

	// Go thru each scale combination. ol
	for(let keyScaleCombo of keyScaleRepo0) {
		checkForMatchingScale(keyScaleCombo);
	}

	/****/

	// Check if key scale contains all input keys. 
	function checkForMatchingScale(keyScale) {
	
		// Go thru each input key. 
		for(let key of inputKeys) {
	
			// Exclude if input key is missing from given list. 
			if( !keyScale.includes(key) ) return false;
		}
	
		// Return true if no input keys missing from given list. 
		return true;
	}
}


// Output: Show results on page. 

// Clear output. 
function clearOutput() {
	// 
	ouputBox.innerHTML = '&nbsp;';
}

// Show output. 
function showOutput() {

	// Receive input keys. 
	receiveInputKeys();

	// TODO: Get matching scales. 
	getMatchingScales(keyScale);

	// 
	ouputBox.innerHTML = '&nbsp;';
}


