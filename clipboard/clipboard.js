


// Get text field. 
const textbox = document.querySelector('input.text');
console.log('Text box:',textbox);

// Get copy button. 
const copybtn = document.querySelector('div#container main.main div.item button.copybtn');
console.log('Copy button:',copybtn);

// Get tooltip on copy button. 
const tooltip = document.querySelector('div#container main.main div.item button.copybtn span.tooltip');
console.log('Button tooltip:',tooltip);


/*****/


// Reset tooltip contents when mouse leaves. 
copybtn.addEventListener('mouseout',resetTooltip);


/*****/


// Copy text to clipboard. 
function copyToClipboard() {

	// Select text in text field. 
	textbox.select();
	textbox.setSelectionRange(0,99999);

	// Copy text from text field. 
	navigator.clipboard.writeText(textbox.value);

	// Update contents of tooltip. 
	tooltip.innerHTML = `Copied: ${textbox.value}`;
}

// Reset tooltip. 
function resetTooltip() {
	
	// Reset contents of tooltip. 
	tooltip.innerHTML = 'Copy to clipboard';
}
