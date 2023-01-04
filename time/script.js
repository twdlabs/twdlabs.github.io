


// Get input field. 
const datefield = document.querySelector('div#container main.main div.input input.datebox');
const timefield = document.querySelector('div#container main.main div.input input.timebox');

// Get output boxes. 
const numoutputbox = document.querySelector('div#container main.main div.output.num');
const sinceoutputbox = document.querySelector('div#container main.main div.output.since');
const numoutputresult = document.querySelector('div#container main.main div.output.num span.result');
const sinceoutputresult = document.querySelector('div#container main.main div.output.since span.result');


/*****/


// Create new time calculator. 
const t = new TimeCalculator(true);


/*****/


// Activate ability to copy result: time number. 
activateResultCopy(numoutputbox);

// Activate ability to copy result: time since string. 
activateResultCopy(sinceoutputbox);


/*****/


// Calculate number. 
function calculateNumbers() {

	// Get number value of input date. 
	let datenumber = datefield.valueAsNumber;
	console.log('datenumber:',datenumber,datefield);

	// Get number value of input time. 
	let timenumber = timefield.valueAsNumber;
	console.log('timenumber:',timenumber,timefield);

	// Handle missing input: date. 
	if(!datenumber) {
		console.error('Missing input: date');
		return;
	}
	// Handle missing input: time. 
	if(!timenumber) {
		console.error('Missing input: time');
		return;
	}

	// Get date/time number for given user input. 
	let n = getDateTimeNumber(datenumber,timenumber);


	// Show number result. 
	numoutputresult.innerHTML = n ? n : '--';

	// Show time since result. 
	sinceoutputresult.innerHTML = n ? t.formatTimeSince(n) : '--';

	/****/

	// Get date/time number. 
	function getDateTimeNumber(date,time) {

		// Create date/time object. 
		let datetime = new Date( date + time );
		// console.log('datetime:',datetime,datetime.getTimezoneOffset() );
	
		// Get difference in minutes between UTC time and local time zone. 
		let dmin = datetime.getTimezoneOffset();
		let timezoneoffset = dmin*60*1000;
	
		// Create date/time object. 
		datetime = new Date( date + time + timezoneoffset );
		console.log('datetime:',datetime );
	
		// 
		return datetime.valueOf();
	}
}

// Activate ability to copy result. 
function activateResultCopy(outputbox) {

	// Copy result to clipboard upon click. 
	outputbox.addEventListener('click',copyToClipboard);

	// Reset tooltip to default upon mouse leave. 
	outputbox.addEventListener('mouseleave',resetTooltip);

	/****/

	// Reset tooltip caption. 
	function resetTooltip(event) {

		// Get selected output box. 
		let outputbox = event.currentTarget;
		let tooltipbox = outputbox.querySelector('span.tooltip');

		// Reset tooltip caption. 
		tooltipbox.innerHTML = 'Copy to clipboard';
	}

	// Copy selected result to clipboard. 
	function copyToClipboard(event) {
	
		// Get output box. 
		let outputbox = event.currentTarget;
	
		// Get output result box. 
		let resultbox = outputbox.querySelector('span.result');
	
		// Get tooltip box. 
		let tooltipbox = outputbox.querySelector('span.tooltip');
	
		// Copy text from output result to clipboard. 
		navigator.clipboard.writeText(resultbox.innerText);
	
		// 
		tooltipbox.innerHTML = `Copied: "${resultbox.innerText}"`;
	}
}
