
/*

	Components of Calculation:

	NumA
	+ - × ÷ 
	NumB
	+ - × ÷ 
	NumC
	========
	Result

*/

/********************************************************************************/

// Store screen result components globally. 
let numbers = [];		// list of numbers
let operators = [];		// list of operators
let workingNum = '';	// working number
let breadcrumbs = '';	// list of operations being performed

// let result = '';		// resultant number

// Store input completion status globally. 
let digitsEntered = getDigitTypingState();	// (is there a zero or a non-zero number)


/********************************************************************************/


// Reset result. 
clickClearButton();

// Turn off debug mode right after page is opened. 
setTimeout(toggleDebugMode,500);



// Add click handler for clear button. 
$('button#clear').click(clickClearButton);


// Add keyboard handler for key presses. 
$(document).keyup(pressKey);

// Add click handler for operator buttons. 
$('button.op').click(clickOperatorButton);

// Add click handler for digit buttons. 
$('button.digit').click(clickDigitButton);


// Add click handler for equals button. 
$('button#equals').click(completeOperation);


// TODO: Add click handler for modification buttons. 
// $('button.mod').click(clickOperatorButton);
// TODO: Add click handler for function buttons. 
// $('button.function').click(clickOperatorButton);


// Add click handler for debug button. 
$('div#debug button').click(toggleDebugMode);


/********************************************************************************/



// Get digit typing state. 
function getDigitTypingState() {
	return $('div#container').hasClass('de');
}
// Set digit typing state. 
function setDigitTypingState(state) {
	if(state) {
		$('div#container').addClass('de');
	}
	else {
		$('div#container').removeClass('de');
		workingNum = 0;
		updateScreen();
	}
}



// Reset based on entry state. Update screen. 
function clickClearButton() {

	// Reset digit entry. 
	if(digitsEntered) {
		clearEntry();
	}
	// Reset operation back to scratch. 
	else {
		clearAll();
	}

	/*****/

	// Reset results. Clear entry and update screen. 
	function clearAll() {
		console.log('Clearing result');

		// Clear out saved numbers. 
		numbers = [];
		
		// Clear out saved operators. 
		operators = [];

		// Reset entry to zero. 
		clearEntry();
	}

	// Reset entry to zero and update screen. 
	function clearEntry() {
		console.log('Clearing entry');

		// Clear working number to zero. 
		workingNum = 0;

		// Update result on screen. 
		updateScreen();

		// Reset digit entry state. 
		setDigitTypingState(false);
	}
}


// Update state upon clicking number button. 
// Update screen. 
function clickDigitButton(event) {
	console.log(); console.log();

	// Get pressed number/digit. 
	let digit = event.currentTarget.value;
	// let digit = event.currentTarget.children[0].innerHTML;
	// console.log('digit pressed:',digit);

	// Set new working number if no previous digits entered. 
	if(!digitsEntered) {
		workingNum = ''+digit;
	}
	// Add to current working number if digits already entered. 
	else if(!!digitsEntered && workingNum.length<=16) {
		// Check if new digit is decimal point. 
		let isDecimalPoint = (digit=='.');
		// Check if working number already contains decimal point. 
		let alreadyDecimalPoint = (''+workingNum).includes('.');
		// Determine digit validity: Limit to one decimal point per working number. 
		let validDigit = !(isDecimalPoint && alreadyDecimalPoint);

		// Add new digit if valid. 
		if(validDigit) workingNum += ''+digit;
	}

	// Open further input to end of working number (till operator is selected). 
	setDigitTypingState(true);

	// Update working number on screen. 
	updateScreen();
}


// Select operator. Update state upon selecting operator. 
function clickOperatorButton(event) {

	// Stop typing mode. Close further input to previous working number. 
	digitsEntered = false;

	// Get selected operator button. 
	let operatorButton = event.currentTarget;
	console.log('operatorButton',operatorButton);

	// De-activate all other operator buttons. 
	$('button.op').removeClass('active');

	// Activate selected operator button. 
	$(operatorButton).addClass('active');

	// Perform operation ??? 
	performOperation();

	/*****/

	// Perform operation. 
	function performOperation() {
		// TODO: Sanitize user input: Remove invalid characters from working number before use. 
		// TODO: Ensure only numbers and at most 1 decimal point (or none). 

		// Save previous working number. 
		numbers.push(1*workingNum);
		console.log('Saving', 1*workingNum, 'to', numbers);
	}
}


// End operation and show result upon clicking equals button. 
// Update screen. 
function completeOperation(event) {
	console.log('Numbers:', numbers);
	console.log('Operators:', operators);

	// Confirm appropriate count of working ÷numbers and operators. 

	// Calculate result of calculation. 
	let result = '';

	// Reset working number. 
	workingNum = result;

	// Update working number on screen. 
	updateScreen();
}



// Update working number on screen. 
function updateScreen() {
	// console.log();
	var result;

	if (!digitsEntered) {
		console.log('digitsEntered:', digitsEntered );
		breadcrumbs = '';
		workingNum = 0;
		result = ''+0;
	}
	else {
		console.log('digitsEntered:', digitsEntered );
		result = formatResult(workingNum);
	}

	// Change value of on-screen result. 
	console.log('result:', result );
	$('div#screen input.caption#workingNum').val( result );

	// Update calculation breadcrumbs. 
	console.log('breadcrumbs:', breadcrumbs );
	$('div#screen input.caption#breadcrumbs').val( breadcrumbs );


	// Update debug tracker. 
	let track = '';
	track += '<span class="name">numbers</span>' + `<span class="value">${numbers}</span>`;
	track += '<span class="name">operators</span>' + `<span class="value">${operators}</span>`;
	track += '<span class="name">workingNum</span>' + `<span class="value">${workingNum}</span>`;
	track += '<span class="name">breadcrumbs</span>' + `<span class="value">${breadcrumbs}</span>`;
	track += '<span class="name">digitsEntered</span>' + `<span class="value">${digitsEntered}</span>`;
	$('div#tracker').html(track);

	/*****/

	// Format result number. 
	function formatResult(number) {

		// Initialize formatted string. 
		let str = ''+number;

		// TODO: Sanitize user input: Remove invalid characters from working number before use. 
		// TODO: Ensure only numbers and at most 1 decimal point (or none). 

		// Separate into whole number and fractional number. 
		let pieces = str.split('.');
		let whole = pieces[0];
		let fract = pieces[1];
		// console.log('pieces', pieces);

		console.log('Pre-format:  ', whole,'.',fract);
		// TODO: Add commas to whole number. 
		if(whole) {
			// Convert string to array of chars. 
			whole = whole.split('');
			
			// Get length of number fragment. 
			let l = whole.length - 1;
			// console.log('l',l);

			// Calculate number of decimal group separators. 
			let n = Math.floor(l/3);
			// console.log('n',n);

			// Add decimal group separators to number fragment. 
			for(let i=n ; i>0 ; i--) {
				whole.splice(-3*i,0,',');
			}

			// Convert array back to string. 
			whole = whole.join('');
		}
		// TODO: Add spaces to fractional number. 
		if(fract) {
			// Convert string to array of chars. 
			fract = fract.split('');
			
			// Get length of number fragment. 
			let l = fract.length - 1;
			// console.log('l',l);

			// Calculate number of decimal group separators. 
			let n = Math.floor(l/3);
			// console.log('n',n);

			// Add decimal group separators to number fragment. 
			for(let i=n ; i>0 ; i--) {
				fract.splice(3*i,0,' ');
			}

			// Convert array back to string. 
			fract = fract.join('');
		}
		console.log('Post-format: ', whole,'.',fract);

		// Re-combine formatted string. 
		str = whole + (fract ? '.'+fract : '');

		// Return result. 
		return str;
	}
}


// Add to breadcrumbs. 
function addToBreadcrumbs(str) {
	breadcrumbs += str;
}



// Handle key press. 
function pressKey(event) {
	let key = event.originalEvent.keyCode;
	let keyValue = event.originalEvent.key;
	// console.log('Key pressed:', key, keyValue);
	// console.log(event.originalEvent);

	// Check for digit key press. 
	checkIfDigitKey();
	// Check for operator key press. 
	checkIfOperatorKey();
	// Check for special key press. 
	checkIfSpecialKey();

	/*****/

	// Handle digit key press. 
	function checkIfDigitKey() {
		// Click digit button upon pressing associated key. 
		if(key>=48&&key<=57) $('button#digit'+keyValue).click();// Key: 1-9
		else if(key==190||key==46) $('button#digitDP').click();	// Key: .
	}

	// Handle operator key press. 
	function checkIfOperatorKey() {
		// Click operator button upon pressing associated key. 
		if(key==43) $('button#plus').click();				// Key: +
		else if(key==45) $('button#minus').click();			// Key: -
		else if(key==42) $('button#times').click();			// Key: *
		else if(key==47) $('button#divide').click();		// Key: /
	}

	// Handle special key press. 
	function checkIfSpecialKey() {
		// Click special button upon pressing associated key. 
		if(key==13||key==61) $('button#equals').click();	// Key: =,Enter
		else if(key==27) $('button#clear').click();			// Key: Esc
		else if(key==37) $('button#percent').click();		// Key: %
		else if(key==40) $('button#openparen').click();		// Key: (
		else if(key==41) $('button#closeparen').click();	// Key: )
	}
}



// Toggle debug mode to show/hide borders. 
function toggleDebugMode() {
	$('div#container').toggleClass('debug');
}

