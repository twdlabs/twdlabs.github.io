

$(document).ready(function() {
	// Get height of text area. 
	let h = $('textarea#testStrings').outerHeight();
	// console.log('h',h);

	// Assign same height to test strings backdrop. 
	$('div#tsBackdrop').css('height',h);
});


// Test regular expression. 
function testRegex() {
	// Get regular expression. 
	let regexText = document.getElementById('regexp').value;
	let regexp = new RegExp(regexText,'g');

	// Get test strings. 
	let userText = document.getElementById('testStrings').value;
	let testStrings = userText;//.split('\n');
	console.log('\ntestStrings',testStrings);

	// Test the given strings for a match to the regexp. 
	let validity = [];
	for(let i=0; i<testStrings.length; i++) {
		let v = regexp.test();
		console.log(v,testStrings[i]);
		validity.push(v);
	}

	// Get text for test strings. 
	let ts = $('#testStrings').val();
	console.log('testStrings',ts);

	// Copy test strings to test strings backdrop highlighter. 
	$('div#tsBackdrop').html(ts);
}
