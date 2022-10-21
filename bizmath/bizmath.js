

// Get input and output boxes. 
const revenuebox = document.querySelector('div#container main.main div.input input#revenue');
const revenuemarginbox = document.querySelector('div#container main.main div.input span#revenuemargin');
const cogsbox = document.querySelector('div#container main.main div.input input#cogs');
const cogsmarginbox = document.querySelector('div#container main.main div.input span#cogsmargin');
const grossprofitbox = document.querySelector('div#container main.main div.input span#grossprofit');
const grossprofitmarginbox = document.querySelector('div#container main.main div.input span#grossprofitmargin');
const genadminbox = document.querySelector('div#container main.main div.input input#genadmin');
const genadminmarginbox = document.querySelector('div#container main.main div.input span#genadminmargin');
const netprofitbox = document.querySelector('div#container main.main div.input span#netprofit');
const netprofitmarginbox = document.querySelector('div#container main.main div.input span#netprofitmargin');

// Get elements for output bar segments. 
let outputbar = document.querySelector('div#container main.main div.output.bar');
let barsegmentcogs = document.querySelector('div#container main.main div.bar div.segment.cogs');
let barsegmentgenadmin = document.querySelector('div#container main.main div.bar div.segment.genadmin');
let barsegmentnetprofit = document.querySelector('div#container main.main div.bar div.segment.netprofit');


/*****/


/*****/


// Calculate segment numbers. 
function calculateNumbers() {

	// Get given revenue amount. 
	let revenue = 1 * revenuebox.value;

	// Disregard if no revenue. 
	if(revenue==0) return;

	// Get given amount for 'cost of goods sold'. 
	let cogs = 1 * cogsbox.value;
	
	// Calculate amount for gross profit. 
	let grossprofit = revenue - cogs;

	// Get given amount for 'general and administrative expenses'. 
	let genadmin = 1 * genadminbox.value;
	
	// Calculate amount for net profit. 
	let netprofit = grossprofit - genadmin;

	// Calculate segment proportions. 
	let proportioncogs = calculateProportion(cogs);
	let proportiongenadmin = calculateProportion(genadmin);
	let proportionnetprofit = calculateProportion(netprofit);

	// Show calculated amounts. 
	showAmounts();

	// Show margin percentages. 
	showMargins();

	// Show bar proportions. 
	loadBar();

	/****/

	// Calculate proportion of gross revenue. 
	function calculateProportion(xyz) {
		// 
		return `${ (100 * xyz/revenue).toFixed(1) }%`;
	}

	// Show calculated amounts. 
	function showAmounts() {

		// Show amount for gross profit. 
		grossprofitbox.innerHTML = dollar0(grossprofit);
		
		// Show amount for net profit. 
		netprofitbox.innerHTML = dollar0(netprofit);
	}

	// Show margin percentages. 
	function showMargins() {

		// Show margin for gross revenue. 
		revenuemarginbox.innerHTML = calculateProportion(revenue);
		
		// Show margin for cost of goods sold. 
		cogsmarginbox.innerHTML = calculateProportion(cogs);
		
		// Show margin for gross profit. 
		grossprofitmarginbox.innerHTML = calculateProportion(grossprofit);
		
		// Show margin for net profit. 
		genadminmarginbox.innerHTML = calculateProportion(genadmin);
		
		// Show margin for net profit. 
		netprofitmarginbox.innerHTML = calculateProportion(netprofit);
	}
	
	// Show bar proportions. 
	function loadBar() {
	
		// 
		barsegmentcogs.style.setProperty('--proportion', proportioncogs);
		barsegmentcogs.querySelector('span.value').innerHTML = proportioncogs;
		
		// 
		barsegmentgenadmin.style.setProperty('--proportion', proportiongenadmin);
		barsegmentgenadmin.querySelector('span.value').innerHTML = proportiongenadmin;
		
		// 
		barsegmentnetprofit.style.setProperty('--proportion', proportionnetprofit);
		barsegmentnetprofit.querySelector('span.value').innerHTML = proportionnetprofit;
		
		// 
		outputbar.classList.add('active');
	}
}

// Set default values. 
function setDefault() {
	// 
	revenuebox.value = revenuebox.placeholder;
	cogsbox.value = cogsbox.placeholder;
	genadminbox.value = genadminbox.placeholder;
}

// Clear all values. 
function clearInput() {
	// 
	revenuebox.value = '';
	cogsbox.value = '';
	genadminbox.value = '';
	// 
	outputbar.classList.remove('active');
}
