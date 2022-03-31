

// Get date of first commit (in ms). 
const dateFirstCommit = getDateOfFirstCommit();

// Get grid containers. 
let yearlygrid = document.getElementById('yearlygrid');
let recentgrid = document.getElementById('recentgrid');


/*****/


// Add calendar for contributions in last 52 wks. 
addRecentCalendar();

// Add calendars for contributions in past few years. 
addYearlyCalendar();

// Add year navigator. 
addYearNav();

// Handle events. 
handleEvents();


/*****/


// Get millisecond representation for date of first commit. 
function getDateOfFirstCommit() {

	// Define date of first contribution. 
	let dateFirstCommit = new Date('2020-05-15 12:00:00').valueOf();

	// Create object for date of first commit contributed. 
	let dateObjFirstCommit = new Date(dateFirstCommit);
	// console.log('Date of first commit:', dateFirstCommit, dateObjFirstCommit.getDay(), dateObjFirstCommit );

	// Return result. 
	return dateFirstCommit;

	/****/
	
	// // Get date of origin. 
	// let origDate = dateFirstCommit;
	// while( new Date(origDate).getDay()!=0 ) {
	// 	origDate -= msPerDay;
	// }
	
	// // Create object for date of origin. 
	// let origDateObj = new Date(origDate);
	// console.log('Start date:', origDate, origDateObj.getDay(), origDateObj );
}


// TODO: Add single calendar for last 52 wks of contributions. 
function addRecentCalendar() {
	console.log('\nRecent Calendar');

	// Get date of origin (in ms): a year ago. 
	let startDate = getStartDate();
	// console.log('Start date:',startDate);

	// Initialize grid. 
	let grid = '';
	
	// Add day labels. 
	grid += createDayLabels();
	// Add dots for days. 
	grid += createDotsForDays(startDate);
	
	// Add recent grid to page. 
	recentgrid.innerHTML = grid;

	/****/

	// Recent mode: 52 wks (364 days) prior to Sunday of most recently passed wk. 
	// 1. Get Sunday of most recently passed wk
	// 2. Subtract 364 days
	// 2. Save millisecond id for that day

	// Calculate millisecond representation for recent calendar start date. 
	function getStartDate() {
		// startDate  =  todayDate - 52wks - numBufferDays (day of wk index)

		// Get today's date. 
		let todayDate = Date.now();

		// Get date of 52 weeks prior (same day of week as today). 
		let todayLess52Wks = todayDate - 52*7*msPerDay;

		// Get number of buffer days: same as index for day of week. 
		let numBufferDays = new Date(todayLess52Wks).getDay();

		// Get date of origin (the Sunday prior to the day 52 wks or 364 days ago). 
		let date52WksAgo = todayLess52Wks - numBufferDays*msPerDay;

		// Return resulting date of origin. 
		return date52WksAgo;
	}
}

// TODO: Add calendars for past few years' contributions with separate page for each year. 
function addYearlyCalendar() {
	console.log('\nYearly Calendar');

	// Get date of origin (in ms): a year ago. 
	// let startDate = getStartDate();
	let startDate = ( new Date('2022-01-01 12:00:00') ).valueOf();
	let endDate = ( new Date('2022-12-31 12:00:00') ).valueOf();
	// console.log('Start date:',startDate);
	// console.log('End date:',endDate);

	// Initialize grid. 
	let grid = '';
	
	// Add day labels. 
	grid += createDayLabels();
	// Add dots for days. 
	grid += createDotsForDays( startDate, endDate );
	
	// Add yearly grid to page. 
	yearlygrid.innerHTML = grid;

	/****/
	
	// Yearly mode: Jan 1 of year of earliest contribution
	// 1. Get date of earliest contribution
	// 2. Get year associated with that date. 
	// 3. Save millisecond id for Jan 1 of that year

	// Calculate millisecond representation for yearly calendar start date. 
	function getStartDate() {
		// startDate  =  todayDate - 52wks - numBufferDays (day of wk index)

		// Get today's date. 
		let todayDate = Date.now();

		// Get date of 52 weeks prior (same day of week as today). 
		let todayLess52Wks = todayDate - 52*7*msPerDay;

		// Get number of buffer days: same as index for day of week. 
		let numBufferDays = new Date(todayLess52Wks).getDay();

		// Get date of origin (the Sunday prior to the day 52 wks or 364 days ago). 
		let date52WksAgo = todayLess52Wks - numBufferDays*msPerDay;

		// Return resulting date of origin. 
		return date52WksAgo;
	}
}
	
// TODO: Add dots for actual days within given date range. 
function createDotsForDays( startDate, endDate=Date.now() ) {
	console.log('Start date:', new Date(startDate) );
	console.log('End date:', new Date(endDate) );

	// Initialize result. 
	let dotsForDays = '';

	// Create dots for days (in 7-day groups). 
	for(let currentDate=startDate; currentDate<endDate; currentDate+=1*msPerDay) {
	// for(let h=0;h<=52;h++) {

		// Check if we need empty buffer wks. 
		let needBufferDays = startDate<dateFirstCommit;
		if(needBufferDays) {
			while(startDate<dateFirstCommit) {
			}
		}
		else {
		}
	
		// TODO: Get contribution data for given wk. 
		// let wk = contributiondata[xyz+h];
	
		// Begin period. 
		dotsForDays += `
		<!-- wk -->
		<div class="wk">`;

		// Create space for month label. 
		dotsForDays += `
		<!-- label -->
		<div class="label month">-</div>
		<!-- /label -->`;

		// Create dots for days (in 7-day groups). 
		for(let currentDate=startDate; currentDate<endDate; currentDate+=1*msPerDay) {
			// 
			dotsForDays += ``;
		}
		
		// End period. 
		dotsForDays += `
		</div>
		<!-- /wk -->`;
	}

	// Return result. 
	return dotsForDays;
	
	for(let h in contributiondata) {
	
		// Add days. 
		for(let i in wk) {
	
			// Get day differential from origin date. 
			let numDaysFromStart = 7*h + 1*i;
			// console.log('Day:',i);
			// console.log('Days from start:',i);
	
			// Get number of contributions for given day. 
			let count = wk[i];
			// console.log(`Day ${numDaysFromStart}:`,count,'contributions');
			
			// Get date id. 
			let dateId = 1*startDate + numDaysFromStart*msPerDay;
			// console.log('dateId:',dateId);

			// Create date object to get elements of date. 
			let dateObj = new Date(dateId);
			let yr = 1 * dateObj.getFullYear();	// four digit yr
			let mo = 1 * dateObj.getMonth();	// 0-11
			let date = 1 * dateObj.getDate();	// 1-31
			// console.log('dateObj:',dateObj);
			// console.log('Year:',yr);
			// console.log('Month index:',mo);
			// console.log('Date:',date);

			// Create representations of date. 
			let datecode = `${yr}-${ format2Dgt(mo+1) }-${ format2Dgt(date) }`;		// 2022-01-01
			let datestring = `${monthNames[mo]} ${date}, ${yr}`;					// Jan 1, 2022
			
			// Create representation of contribution count. 
			let contrstring = `${ (count)?(count):('No') } contribution${ (count==1)?(''):('s') }`;

			// Create note of contributions for given date. 
			let contributionnote = `${contrstring} on ${datestring}`;						// xyz contributions on Jan 1, 2022
			let contributiontagnote = `<strong>${contrstring}</strong> on ${datestring}`;	// xyz contributions on Jan 1, 2022

			// console.log(datecode,count,'contributions');
	
			// 
			dotsForDays += `
			<!-- day -->
			<div class="day">

				<!-- dot -->
				<div class="dot ${ getLevelName(count) }" data-count="${count}" data-date="${datecode}" title="${contributionnote}"></div>
				<!-- /dot -->

				<!-- tag -->
				<div class="tag">${contributiontagnote}</div>
				<!-- /tag -->

			</div>
			<!-- /day -->`;
		}
	}

	/*****/

	// Get level name for given number of contributions. 
	function getLevelName(n) {

		// Initialize result. 
		let level = '';

		// 
		if(n>24) level = 'l4';
		else if(n>16) level = 'l3';
		else if(n>8) level = 'l2';
		else if(n>0) level = 'l1';
		else level = 'l0';
		// console.log('Level name:',level);

		// Return result. 
		return level;
	}

	// Format number with two digits. 
	function format2Dgt(n) {
		// 
		return (n>=0 && n<=9) ? ('0'+n) : (n) ;
	}
}

// Add year navigator. 
function addYearNav() {

	// Get container of year navigation. 
	let yrlist = document.querySelector('nav.yrchooser ul.yrlist');

	// Initialize year choices. 
	let chooseyr = '';

	// Initialize number of years.
	let numYrs = 6;

	// Get current year. 
	let currentYr = ( new Date() ).getFullYear();

	// Create array of most recent 6 years. 
	let recentYears = []
	for(let i=0;i<numYrs;i++) {
		recentYears.push( currentYr - i );
	}
	// console.log('recentYears:',recentYears);

	// Create navigation item for each year. 
	for(let year of recentYears) {
		chooseyr += `
		<!-- year -->
		<li class="year">${year}</li>
		<!-- /year -->`;
	}
	// console.log('chooseyr:',chooseyr);

	// Add navigation to page. 
	yrlist.innerHTML = chooseyr;

	// Activate year navigation buttons. 
	let navbtns = document.querySelectorAll('nav.yrchooser ul.yrlist li.year');
	for(let btn of navbtns) {
		btn.addEventListener('click',selectYear);
	}

	/****/

	// Select year. 
	function selectYear(event) {
	
		// Get selected year button. 
		let selectedYrBtn = event.currentTarget;
	
		// Un-highlight all year nav buttons. 
		for(btn of navbtns) {
			btn.classList.remove('active');
		}
	
		// Highlight selected year nav button. 
		selectedYrBtn.classList.add('active');

		// TODO: Show data for selected year. 
		// TODO: Switch to page for selected year. 
	}
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


// Handle events. 
function handleEvents() {

	// Get all day dots. 
	let dayDots = document.querySelectorAll('main.grid div.day div.dot');
	// console.log('dayDots:',dayDots);
	
	// Enable click of day dots to focus single dot. 
	for(let dot of dayDots) {
		dot.addEventListener('click',focusSingleDot);
	}

	// Enable double click to flip the grid. 
	// main.addEventListener('dblclick',flipTheGrid);

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
			yearlygrid.classList.remove('off');
			recentgrid.classList.remove('off');
			
			// Un-focus single selected dot. 
			selectedDot.classList.remove('on');
		}

		// Focus things. 
		else {

			// Dim entire dot grid. 
			yearlygrid.classList.add('off');
			recentgrid.classList.add('off');
			
			// Un-focus all other dots. 
			for(let dot of dayDots) {
				dot.classList.remove('on');
			}
			
			// Focus single selected dot. 
			selectedDot.classList.add('on');

		}
	}

	// // Flip the grid. 
	// function flipTheGrid(event) {
	// 	console.log(event);
	// 	main.classList.toggle('flip');
	// }
}

