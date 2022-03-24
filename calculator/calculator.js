

// Initialize state of calculator. 
var digitRequiredNext = true;
var readyToClear = false;

// Get screen displays. 
let display = document.getElementById('display');
let breadcrumbs = document.getElementById('breadcrumbs');

// Handle button presses. 
activateButtons();

// Clear display. 
clearDisplays();


/*****/


// Handle button presses. 
function activateButtons() {
	
	// Activate operator buttons. 
	let opbtns = document.querySelectorAll('button.op');
	for(let btn of opbtns) {
		btn.addEventListener('click',pressOperator);
	}

	// Activate digit buttons. 
	let digitbtns = document.querySelectorAll('button.digit');
	for(let btn of digitbtns) {
		btn.addEventListener('click',pressDigit);
	}

	// Activate equals button. 
	let eqbtn = document.querySelector('button.e');
	eqbtn.addEventListener('click',getResult);

	// Activate clear button. 
	let clrbtn = document.querySelector('button.c');
	clrbtn.addEventListener('click',clearDisplays);

	// Activate backspace button. 
	let backbtn = document.querySelector('button.b');
	backbtn.addEventListener('click',backspaceDisplay);

	// Activate keyboard buttons. 
	document.addEventListener('keyup',translateKeyPress);
}

// Press digit button. 
function pressDigit(event) {

	// Get selected digit. 
	let d = event.currentTarget.value || event.key;
	console.log('Pressing digit',d);

	// Clear previous number if operator selected. 
	if(readyToClear) display.value = '';

	// TODO: Check for repeated dot digit in single number. 
	let repeatedDot = display.value.includes('.') && d=='.';

	// Append digit to display. 
	if(!repeatedDot) appendDisplay(d);

	// Un-prepare to clear display with next digit. 
	readyToClear = false;

	// Update state of calculator. 
	digitRequiredNext = false;
}

// Press operator button. 
function pressOperator(event) {

	// Get selected operator. 
	let op = event.currentTarget.value || event.key;
	console.log('Pressing operator',op);

	if(digitRequiredNext) {
		console.log('Replacing operator');
		let bsop = backspaceDisplay();
		console.log('\told operator:',bsop);
		console.log('\tnew operator:',op);
		appendBreadDisplay(op);
	}
	// Append operator to breadcrumbs display. 
	else appendBreadDisplay(op);

	// Prepare to clear display with next digit. 
	readyToClear = true;

	// Update state of calculator. 
	digitRequiredNext = true;
}

// Get result of operation. 
function getResult() {
	
	// Get expression entered by user. 
	let exp = breadcrumbs.value;

	// Evaluate expression. 
	let result = evaluateExpression(exp);

	// Update display with result. 
	display.value = result;

	/****/

	// Evaluate expression. 
	function evaluateExpression(expr) {

		// Notify of empty input. 
		if(expr.length==0) {
			alert('Please enter an expression to evaluate.');
			return '';
		}

		// Evaluate expression and return result. 
		else return eval(expr);
	}
}

// Remove last character from breadcrumbs. 
function backspaceDisplay() {
	// console.log('Backspacing last char');

	// Get old text. 
	let oldvalue = breadcrumbs.value;
	// console.log('\toldvalue:',oldvalue);

	// Create new text. 
	let newvalue = oldvalue.substr(0,oldvalue.length-1);
	// console.log('\tnewvalue:',newvalue);
	let removedChar = oldvalue.substr(oldvalue.length-1,1);
	// console.log('\tremovedChar:',removedChar);

	// Update display with new text. 
	breadcrumbs.value = newvalue;

	// Return removed character. 
	return removedChar;
}

// Append character to display. 
function appendDisplay(chars) {
	display.value += chars;
	appendBreadDisplay(chars);
}

// Append character to breadcrumbs. 
function appendBreadDisplay(chars) {
	breadcrumbs.value += chars;
}

// Clear all characters from displays. 
function clearDisplays() {
	display.value = '';
	breadcrumbs.value = '';
}

// Translate key press. 
function translateKeyPress(event) {
	console.log(event.key,event.keyCode,event,);

	// Get character associated with pressed key. 
	let keychar = event.key;
	let keycode = event.keyCode;

	// Handle digit keys. 
	let digitKeyPressed = (keycode>=48 && keycode<=57) || keycode==190;
	if(digitKeyPressed) pressDigit(event);

	// Handle operator keys. 
	let opKeyPressed = keychar=='+' || keychar=='-' || keychar=='*' || keychar=='/';
	if(opKeyPressed) pressOperator(event);

	// Handle backspace key. 
	if(keycode=='8') backspaceDisplay();

	// Handle clear keys. 
	if(keycode=='27'|| keychar=='c' || keychar=='C') backspaceDisplay();

	// Handle keys for equals button (Enter key, '=' key). 
	if(keycode=='13'|| keychar=='=') getResult();
}
