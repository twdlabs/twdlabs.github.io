
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


console.log('\n\n1. DECLARE INITIAL VARIABLES\n\n\n');

// Store screen result components globally. 
let numbers = [];		// list of numbers
let operators = [];		// list of operators
let workingNum = [];	// digits of working number
let breadcrumbList = [];	// list of operations being performed

// Store input completion status globally. 
let digitsPresent = false;	// (is there a zero or a non-zero number)


/********************************************************************************/


console.log('\n\n2. SET EVENT LISTENERS\n\n\n');

// Add click handler for clear button. 
$('button#clear').click(onClear);

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


/********************************************************************************/


console.log('\n\n3. TAKE INITIAL ACTIONS\n\n\n');

// Reset result. 
onClear();

// Turn off debug mode right after page is opened. 
// setTimeout(toggleDebugMode,100);


/********************************************************************************/



console.log('\n\n4. DECLARE FUNCTIONS\n\n\n');



// Reset based on entry state. Update screen. 
function onClear() {
	console.log('\nonClear()');
	// console.log('Currently typing:', digitsPresent );

	// Reset just the digit entry if digits present. 
	if(digitsPresent) {
		clearEntry();
	}
	// Reset entire operation to scratch if no digits present. 
	else {
		clearAll();
	}

	// Set typing state: digits not present. 
	digitsPresent = false;

	// Remove active state from operator button. 
	$('button.op').removeClass('active');

	// Update result on screen. 
	refreshStateOnPage();

	/*****/

	// Reset entry to zero and update screen. 
	function clearEntry() {
		console.log('C clearEntry(): Clearing current entry');

		// Clear working number to zero. 
		workingNum = [];
	}

	// Reset results. Clear entry and update screen. 
	function clearAll() {
		console.log('AC clearAll(): Clearing all entries and operators');

		// Clear out saved numbers. 
		numbers = [];
		
		// Clear out saved operators. 
		operators = [];

		// Clear working number to zero. 
		workingNum = [];

		// Erase previous breadcrumbs. 
		breadcrumbList = [];
	}
}



// Update state on screen -- working number, breadcrumbs, clear button. 
function refreshStateOnPage() {
	console.log('\nrefreshStateOnPage()');
	console.log('Currently typing:', digitsPresent );
	var fnum;
	let breadcrumbs = '';

	// Update digit typing state. 
	if(digitsPresent) {
		$('div#container').addClass('typing');
		fnum = formatNumber(workingNum.join(''));
	}
	else {
		$('div#container').removeClass('typing');
		// workingNum = [];
		fnum = ''+0;
	}

	// Create breadcrumbs. 
	for(let i=0 ; i<numbers.length ; i++) {
		// Add number. 
		breadcrumbs += ' ' + numbers[i];
		// Add operator. 
		if(operators[i]) {
			breadcrumbs += ' ' + operators[i];
		}
	}

	// Change value of on-screen fnum. 
	console.log('formatted number:', fnum );
	$('div#screen input.caption#workingNum').val( fnum );

	// Update calculation breadcrumbs. 
	console.log('breadcrumbs:', breadcrumbs );
	$('div#screen input.caption#breadcrumbs').val( breadcrumbs );


	// Update debug tracker. 
	updateTracker();

	/*****/

	// Format result number. 
	function formatNumber(number) {
		console.log('formatNumber('+number+')');

		// Sanitize user input. Remove invalid characters from working number before use. 
		let validStringNumber = sanitizeUserInput(number);
		// console.log('validStringNumber',validStringNumber);

		// Separate into two pieces: whole number and fractional number. 
		let pieces = validStringNumber.split('.');
		let wholenumber = pieces[0];
		let fractionalnumber = pieces[1];
		// console.log('pieces', pieces);

		// console.log('Pre-format:  ', wholenumber,'.',fractionalnumber);
		// TODO: Add commas to whole number. 
		if(wholenumber) {
			// Convert string to array of chars. 
			wholenumber = wholenumber.split('');
			
			// Get length of number fragment. 
			let l = wholenumber.length - 1;
			// console.log('l',l);

			// Calculate number of decimal group separators. 
			let n = Math.floor(l/3);
			// console.log('n',n);

			// Add decimal group separators to number fragment. 
			for(let i=n ; i>0 ; i--) {
				wholenumber.splice(-3*i,0,',');
			}

			// Convert array back to string. 
			wholenumber = wholenumber.join('');
		}
		// TODO: Add spaces to fractional number. 
		if(fractionalnumber) {
			// Convert string to array of chars. 
			fractionalnumber = fractionalnumber.split('');
			
			// Get length of number fragment. 
			let l = fractionalnumber.length - 1;
			// console.log('l',l);

			// Calculate number of decimal group separators. 
			let n = Math.floor(l/3);
			// console.log('n',n);

			// Add decimal group separators to number fragment. 
			for(let i=n ; i>0 ; i--) {
				fractionalnumber.splice(3*i,0,' ');
			}

			// Convert array back to string. 
			fractionalnumber = fractionalnumber.join('');
		}
		// console.log('Post-format: ', wholenumber,'.',fractionalnumber);

		// Re-combine formatted string. 
		str = wholenumber + (fractionalnumber ? '.'+fractionalnumber : '');

		// Return formatted number. 
		return str;

		/*****/

		// TODO: Ensure only numbers and at most 1 decimal point (or none). 
		function sanitizeUserInput(source) {
			// Define valid characters. 
			let validChars = ['0','1','2','3','4','5','6','7','8','9','.'];

			// Ensure all characters are in the right range (ASCII: '.', '0'-'9'). 
			for(let i=0 ; i<source.length ; i++) {
				// Get character at index. 
				let char = source.charAt(i);
				// console.log('char:', char );

				// Remove character if not valid. 
				if( !validChars.includes(char) ) {
					source = source.replace(char,'');
				}
			}

			// Return sanitized version. 
			return source;
		}
	}

	// Update debug tracker. 
	function updateTracker() {
		let track = '';
		track += '<span class="name">digitsPresent</span>' + `<span class="value">${digitsPresent}</span>`;
		track += '<span class="name">workingNum</span>' + `<span class="value">${fnum}</span>`;
		track += '<span class="name">breadcrumbs</span>' + `<span class="value">${breadcrumbs}</span>`;
		track += '<span class="name">numbers</span>' + `<span class="value">${numbers}</span>`;
		track += '<span class="name">operators</span>' + `<span class="value">${operators}</span>`;
		$('aside#tracker').html(track);
	}
}



// Update state upon clicking number button. 
// Update screen. 
function clickDigitButton(event) {
	console.log('\nclickDigitButton(event)');
	// console.log(); console.log();

	// Get pressed number/digit. 
	let digit = event.currentTarget.value;
	// let digit = event.currentTarget.children[0].innerHTML;

	// Set new working number if no previous digits present. 
	if(!digitsPresent) {
		workingNum = [digit];
	}
	// Add to current working number if digits already present. 
	else if(digitsPresent && workingNum.length<=16) {

		// Check if new digit is decimal point. 
		let newDecimalPoint = (digit=='.');

		// Check if working number already contains decimal point. 
		let alreadyDecimalPoint = workingNum.includes('.');
		// let alreadyDecimalPoint = (''+workingNum).includes('.');

		// Determine digit validity: Limit to one decimal point per working number. 
		let validDigit = !( newDecimalPoint && alreadyDecimalPoint);

		// Add new digit if valid. 
		if(validDigit) workingNum.push(digit);
	}

	// Set typing state: digits present. 
	digitsPresent = true;

	// Remove active state from operator button. 
	$('button.op').removeClass('active');

	// Update state on screen. 
	refreshStateOnPage();

	console.log('digit pressed:', digit, workingNum);
}



// TODO: Select operator. Update state upon selecting operator. 
function clickOperatorButton(event) {
	console.log('\nclickOperatorButton(event)');

	// Stop typing mode. Close further input to previous working number. 
	digitsPresent = false;

	// Get selected operator button. 
	let operatorButton = event.currentTarget;
	console.log('operatorButton',operatorButton);

	// De-activate all other operator buttons. 
	$('button.op').removeClass('active');

	// Activate selected operator button. 
	$(operatorButton).addClass('active');

	// Save operation signifier to operator list. 
	operators.push(operatorButton.value);

	// TODO: Perform operation ??? 
	performOperation();

	// Update state on screen. 
	refreshStateOnPage();

	/*****/

	// TODO: Perform operation and save result as new operand. 
	function performOperation() {
		console.log('performOperation()');

		// TODO: Sanitize user input: Remove invalid characters from working number before use. Ensure only numbers and at most 1 decimal point (or none). 

		// Save previous working number. 
		let wn = workingNum.join('');
		numbers.push(1*wn);
		console.log('Saving', 1*wn, 'to number list: ', numbers);
	}
}



// TODO: End operation and show result upon clicking equals button. 
// Update screen. 
function completeOperation(event) {
	console.log('\ncompleteOperation(event)');
	console.log('Numbers:', numbers);
	console.log('Operators:', operators);

	// TODO: Confirm appropriate count of numbers (n) and appropriate count of operators (n-1). 

	// TODO: Calculate result of calculation. 
	let result = 1000000;

	// Reset working number to result of calculation. 
	workingNum = (''+result).split('');

	// Update state on screen. 
	refreshStateOnPage();
}



// Handle key press. 
function pressKey(event) {
	console.log('\npressKey(event)');
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
		// console.log('checkIfDigitKey()');

		// Initialize flag. 
		let flag = false;

		// Click digit button upon pressing associated key. 
		if(key>=48&&key<=57) {
			$('button#digit'+keyValue).click();	// Key: 1-9
			flag = true;
		}
		else if(key==190||key==46) {
			$('button#digitDP').click();		// Key: .
			flag = true;
		}

		console.log('DigitKey: ',flag);
	}

	// Handle operator key press. 
	function checkIfOperatorKey() {
		// console.log('checkIfOperatorKey()');

		// Initialize flag. 
		let flag = false;

		// Click operator button upon pressing associated key. 
		if(key==43) {
			$('button#plus').click();			// Key: +
			flag = true;
		}
		else if(key==45) {
			$('button#minus').click();			// Key: -
			flag = true;
		}
		else if(key==42) {
			$('button#times').click();			// Key: *
			flag = true;
		}
		else if(key==47) {
			$('button#divide').click();			// Key: /
			flag = true;
		}

		console.log('OperatorKey: ',flag);
	}

	// Handle special key press. 
	function checkIfSpecialKey() {
		// console.log('checkIfSpecialKey()');

		// Initialize flag. 
		let flag = false;

		// Click special button upon pressing associated key. 
		if(key==13) {
			$('button#equals').click();		// Key: Enter
			flag = true;
		}
		// else if(key==61) {
		// 	$('button#equals').click();		// Key: =
		// 	flag = true;
		// }
		else if(key==27) {
			$('button#clear').click();		// Key: Esc
			flag = true;
		}
		else if(key==37) {
			$('button#percent').click();	// Key: %
			flag = true;
		}
		else if(key==40) {
			$('button#openparen').click();	// Key: (
			flag = true;
		}
		else if(key==41) {
			$('button#closeparen').click();	// Key: )
			flag = true;
		}

		console.log('SpecialKey: ',flag);
	}
}



// Toggle scientific mode. 
function toggleSciMode() {
	console.log('\ntoggleSciMode()');
	$('div#container').toggleClass('sci');
}



// Toggle debug mode to show/hide borders. 
function toggleDebugMode() {
	console.log('\ntoggleDebugMode()');
	$('div#container').toggleClass('debug');
}



/********************************************************************************/



console.log('\n\n5. FURTHER ACTIONS\n\n\n');

