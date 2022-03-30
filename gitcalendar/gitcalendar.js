


// Get date of origin. 
const dateOfOrigin = getDateOfOrigin();

// Get main container. 
let main = document.querySelector('main.main');

// let isFocusedIn = false;


/*****/


// Initialize result. 
let result = '';
// Add day labels. 
result += createDayLabels();
// Add dots for days. 
result += createDotsForDays();

// Add result to page. 
main.innerHTML = result;


// Handle events. 
handleEvents();


/*****/


// Get date of origin. 
function getDateOfOrigin() {

	// Define date of first contribution. 
	let firstDateId = new Date('2020-05-15').valueOf();		// 1589515200000
	// Create object for date of first contribution. 

	let firstDate = new Date(firstDateId);
	console.log('Date of first contribution:', firstDateId, firstDate.getDay(), firstDate );
	
	
	// Get date of origin. 
	let origDateId = firstDateId;
	while( new Date(origDateId).getDay()!=0 ) origDateId -= msPerDay;

	// Create object for date of origin. 
	let origDate = new Date(origDateId);
	console.log('Date of calendar origin:', origDateId, origDate.getDay(), origDate );
	

	// Return result. 
	return origDate;
}

// Create day labels. 
function createDayLabels() {

	// Initialize result. 
	let daylabels = '';

	// Begin period. 
	daylabels += `
	<!-- wk -->
	<div class="wk">`;

	// Create space for month label. 
	daylabels += `
	<!-- label -->
	<div class="label month">x</div>
	<!-- /label -->`;

	// Create labels for 7 days. 
	for(let daylabel of dayNames) {
		// 
		daylabels += `
		<!-- label -->
		<div class="label day">${daylabel}</div>
		<!-- /label -->`;
	}

	// End period. 
	daylabels += `
	</div>
	<!-- /wk -->`;

	// Return result. 
	return daylabels;
}

// Create dots for days. 
function createDotsForDays() {

	// Initialize result. 
	let dotsForDays = '';

	// Create dots for days (in 7-day groups). 
	for(let h in contributiondata) {		// for(let h=0;h<52;h++) {
		console.log('\nWk',h);
	
		// Get contribution dat for given period. 
		let wk = contributiondata[h];
	
		// Begin period. 
		dotsForDays += `
		<!-- wk -->
		<div class="wk">`;

		// Create space for month label. 
		dotsForDays += `
		<!-- label -->
		<div class="label month">x</div>
		<!-- /label -->`;
	
		// Add days. 
		for(let i in wk) {		// for(let i=0;i<7;i++) {
	
			// Get day differential from origin date. 
			let index = 7*h + 1*i;
			// console.log('Day:',i);
	
			// Get date id. 
			let dateId = 1*dateOfOrigin + index*msPerDay;
			let dateObj = new Date(dateId);
	
			// Get number of contributions. 
			let count = wk[i];
			// console.log(`Day ${index}:`,count,'contributions');
	
			// Get components of date string. 
			let yr = 1*dateObj.getFullYear();	// four digit yr
			let mo = 1*dateObj.getMonth();	// 0-11
			let date = 1*dateObj.getDate();		// 1-31
			let datecode = `${yr}-${ format2Dgt(mo+1) }-${ format2Dgt(date) }`;		// 2022-01-01
			let datestring = `${monthNames[mo]} ${date}, ${yr}`;					// Jan 1, 2022
			console.log(datecode,count,'contributions');
	
			// 
			let level = '';
			if(count>24) level = 'l4';
			else if(count>16) level = 'l3';
			else if(count>8) level = 'l2';
			else if(count>0) level = 'l1';
			else level = 'l0';
	
			// // 
			// dotsForDays += `
			// <!-- dot -->
			// <div class="dot" data-count="-1" data-date="2022-03-29" title="xyz contributions on 2022-03-29"></div>
			// <!-- /dot -->`;
	
			// 
			dotsForDays += `
			<!-- dot -->
			<div class="dot ${level}" data-count="${count}" data-date="${datecode}" title="${count} contributions on ${datestring}">

				<!-- tag -->
				<div class="tag">${count} contributions on ${datestring}</div>
				<!-- /tag -->

			</div>
			<!-- /dot -->`;
		}
	
		// End period. 
		dotsForDays += `
		</div>
		<!-- /wk -->`;
	}

	// Return result. 
	return dotsForDays;

	/*****/

	// Format number with two digits. 
	function format2Dgt(n) {
		// 
		return (n>=0 && n<=9) ? ('0'+n) : (n) ;
	}
}

// Handle events. 
function handleEvents() {

	// Get all day dots. 
	let dayDots = document.querySelectorAll('main.main div.dot');
	// console.log('dayDots:',dayDots);
	
	// Enable click of day dots to focus single dot. 
	for(let dot of dayDots) {
		dot.addEventListener('click',focusSingleDot);
	}

	// Enable double click to flip the grid. 
	main.addEventListener('dblclick',flipTheGrid);

	/****/

	// Dim all dots. Focus single selected dot. 
	function focusSingleDot(event) {
		console.log(event);
		
		// Get selected dot. 
		let selectedDot = event.currentTarget;

		// Check if already selected. 
		let alreadySelected = selectedDot.classList.contains('on');

		// Unfocus things. 
		if(alreadySelected) {

			// Un-dim entire dot grid. 
			main.classList.remove('off');
			
			// Un-focus single selected dot. 
			selectedDot.classList.remove('on');
		}

		// Focus things. 
		else {

			// Dim entire dot grid. 
			main.classList.add('off');
			
			// Un-focus all other dots. 
			for(let dot of dayDots) {
				dot.classList.remove('on');
			}
			
			// Focus single selected dot. 
			selectedDot.classList.add('on');

		}
	}

	// Flip the grid. 
	function flipTheGrid(event) {
		console.log(event);
		
		// 
		main.classList.toggle('flip');
	}
}
