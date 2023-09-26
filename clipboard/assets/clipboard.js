


// Get input text field. 
const textfield = document.querySelector('div#container main.main div.item input.text');
console.log('Text field:',textfield);

// Get copy button. 
const copybtn = document.querySelector('div#container main.main div.item button.copybtn');
console.log('Copy button:',copybtn);

// Get tooltip on copy button. 
const copybtntooltip = document.querySelector('div#container main.main div.item button.copybtn span.tooltip');
console.log('Copy button tooltip:',copybtntooltip);

// Define time delay. 
const dt = 2500;

// Initialize timed reset. 
let timedreset;


/*****/


// Copy input text to clipboard upon button click. 
copybtn.addEventListener('click',copyToClipboard);

// Reset tooltip contents upon mouse leaving button. 
copybtn.addEventListener('mouseleave',resetCopyBtn);


/*****/


// Copy input text to clipboard. 
function copyToClipboard() {

	// Copy text from text field onto clipboard. 
	navigator.clipboard.writeText(textfield.value);

	// Select text in text field. 
	selectTextField();

	// Update state of copy button. 
	updateCopyBtn();
	// Reset state of copy button after time delay. 
	timedreset = setTimeout(resetCopyBtn,dt);

	/****/

	// Select text in text field. 
	function selectTextField() {
		// Select text on computer. 
		textfield.select();
		// Select text on mobile. 
		textfield.setSelectionRange(0,99999);
	}
}

// Update state of copy button. 
function updateCopyBtn() {

	// Update tooltip caption. 
	copybtntooltip.innerHTML = 'Copied';
	copybtntooltip.innerHTML = `Copied: "${textfield.value}"`;

	// Update button state. 
	copybtn.classList.add('done');
}

// Reset state of copy button. 
function resetCopyBtn() {

	// Reset tooltip caption. 
	// copybtntooltip.innerHTML = 'Copy text';
	copybtntooltip.innerHTML = 'Copy to clipboard';

	// Reset button state. 
	copybtn.classList.remove('done');
	
	// Clear timed reset. 
	clearTimeout(timedreset);
}
