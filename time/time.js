


const datebox = document.querySelector('div#container main.main div.input input.datebox');
const timebox = document.querySelector('div#container main.main div.input input.timebox');
const outputbox = document.querySelector('div#container main.main div.output');
const resultbox = document.querySelector('div#container main.main div.output span.result');


/*****/


// 
// xyz();


/*****/


// 
function go() {

	// Get date input. 
	let dateinput = datebox.valueAsNumber;
	// console.log('dateinput:',dateinput,datebox);

	// Get time input. 
	let timeinput = timebox.valueAsNumber;
	// console.log('timeinput:',timeinput,timebox);

	// 
	if(!dateinput) {
		console.warn('Missing input: date');
		return;
	}

	// 
	if(!timeinput) {
		console.warn('Missing input: time');
		return;
	}

	// Create date/time object. 
	let datetime = new Date(dateinput+timeinput);
	// console.log('datetime:',datetime,datetime.getTimezoneOffset() );

	// Get difference in minutes between UTC time and local time zone. 
	let dmin = datetime.getTimezoneOffset();
	let timezoneoffset = dmin*60*1000;

	// Create date/time object. 
	datetime = new Date(dateinput+timeinput+timezoneoffset);
	console.log('datetime:',datetime );

	// 
	resultbox.innerHTML = datetime.valueOf();

	// 
	outputbox.style.backgroundColor = 'gold';
}

// Copy to clipboard. 
function copyToClipboard() {

	// Copy text from output onto clipboard. 
	navigator.clipboard.writeText(resultbox.innerText);

	// 
	outputbox.style.backgroundColor = 'limegreen';
}
