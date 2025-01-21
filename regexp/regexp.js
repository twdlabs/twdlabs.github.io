


// Get regular expression field. 
const regexpfield = document.querySelector('div#container main.main section.regexp div.input input#regexp');

// Get test string field. 
const teststringfield = document.querySelector('div#container main.main section.teststring div.input textarea#teststring');

// Get backdrop of test string field. 
const teststringbackdrop = document.querySelector('div#container main.main section.teststring div.input div.backdrop');



/*****/


// Get height of text area. 
let h = teststringfield.style.height;
// console.log('h',h);

// Assign same height to test strings backdrop. 
teststringbackdrop.style.height = h;


/*****/


// Test regular expression. 
function testRegex() {

	// Get regular expression. 
	let regexp = regexpfield.value;
	let regexpobj = new RegExp(regexp,'g');

	// Get test string. 
	let teststring = teststringfield.value;//.split('\n');
	console.log('Test string:',teststring);

	// Test the given strings for a match to the regular expression. 
	let validity = [];
	for(let i=0; i<teststring.length; i++) {
		let v = regexpobj.test();
		console.log(v,teststring[i]);
		validity.push(v);
	}

	// Get text for test strings. 
	let ts = teststringfield.value;
	console.log('Test string:',ts);

	// Copy test strings to test strings backdrop highlighter. 
	teststringbackdrop.innerHTML = ts;
}
