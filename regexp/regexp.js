


// Get regular expression field. 
const regexpfield = document.querySelector('div#container main.main section.regexp div.input input#regexp');

// Get test string field. 
const teststringfield = document.querySelector('div#container main.main section.teststring div.input textarea#teststring');

// Get backdrop of test string field. 
const teststringbackdrop = document.querySelector('div#container main.main section.teststring div.input div.backdrop');



/*****/


// Test regular expression. 
testRegExp();


/*****/


// Test regular expression. 
function testRegExp() {

	// Get regular expression. 
	let regexp = regexpfield.value;
	let regexpobj = new RegExp(regexp,'gi');
	console.log('Regular expression:',/* regexp, */regexpobj.toString());

	// Get test string. 
	let teststring = teststringfield.value;//.split('\n');
	console.log('Test string:',teststring);
	
	// Check if pattern found in test string. 
	// let patternfound = regexpobj.test(teststring);
	let patternfound = regexpobj.exec(teststring);
	console.log('Pattern found:',patternfound);

	// Indicate with color if pattern found. 
	if(patternfound) teststringbackdrop.classList.add('yes');
	else teststringbackdrop.classList.remove('yes');

	// Mirror test string to backdrop. 
	mirrorTestStr();

	/****/

	// Mirror test string to backdrop. 
	function mirrorTestStr() {
		teststringbackdrop.innerHTML = teststring;
	}

	/****/

	// Test the given strings for a match to the regular expression. 
	function xyz() {
		let validity = [];
		for(let i=0; i<teststring.length; i++) {
			let v = regexpobj.test('ss');
			console.log(v,teststring[i]);
			validity.push(v);
		}
		console.log(validity,teststring);
	}
}

