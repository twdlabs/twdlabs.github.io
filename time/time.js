


// Get input boxes. 
const datebox = document.querySelector('div#container main.main div.input input.datebox');
const timebox = document.querySelector('div#container main.main div.input input.timebox');

// Get output boxes. 
const numoutputbox = document.querySelector('div#container main.main div.output.num');
const numoutputresult = document.querySelector('div#container main.main div.output.num span.result');
const sinceoutputbox = document.querySelector('div#container main.main div.output.since');
const sinceoutputresult = document.querySelector('div#container main.main div.output.since span.result');


/*****/


// Activate ability to copy result: time number. 
activateResultCopy(numoutputbox);

// Activate ability to copy result: time since string. 
activateResultCopy(sinceoutputbox);


/*****/


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
}

// Calculate number. 
function calculateNumbers() {

	// Get date input. 
	let dateinput = datebox.valueAsNumber;
	// console.log('dateinput:',dateinput,datebox);

	// Get time input. 
	let timeinput = timebox.valueAsNumber;
	// console.log('timeinput:',timeinput,timebox);

	// Handle missing inputs. 
	if(!dateinput) {
		console.warn('Missing input: date');
		return;
	}
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
	let n = datetime.valueOf();

	// Show number result. 
	numoutputresult.innerHTML = n;

	// Show time since result. 
	sinceoutputresult.innerHTML = formatTimeSince(n);

	/****/

	// Get time since given number. 
	// Format 'time since' number. 
	function formatTimeSince(num) {

		// Get number for current moment. 
		let now = Date.now();

		// Get estimated time since upload date (ETS). 
		let dt = now - 1*num;
		// console.log('dt:',dt);
	
		// Treat non-positive ets numbers as right now. 
		if(dt<=0) return 'now';
	
		// Define components of formatted number. 
		let coeff = dt;	// /1000/60/60/24/365
		let suffindex = 0;
		let suffix = [' millisecond',' second',' minute',' hour',' day',' week',' month',' year'];	// potential suffixes
		let limits = [1000, 60, 60, 24, 7, 4.3, 12, 1000];
	
		// Divide number until... 
		while(coeff>limits[suffindex]) {
	
			// Divide coefficient. 
			coeff /= limits[suffindex];
			// console.log('\tcoeff',coeff);
	
			// Increment suffix index. 
			suffindex++;
			// console.log('\tsuffindex',suffindex);
		}
	
		// Add final formatting to view count. 
		coeff = coeff.toFixed(0);
		// let removeExtraZero = coeff.includes('.0');
		// if(removeExtraZero) coeff = coeff.substr(0,coeff.length-2);
	
		return (coeff + suffix[suffindex]+((coeff>1)?('s ago'):(' ago')) );

		// 
		return num;
	}
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
