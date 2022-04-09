


// Get date of first commit (in ms). 
const dateFirstCommit = new Date('2020-05-15 12:00:00').valueOf();


// Get grid containers. 
let recentgrid = document.getElementById('recentgrid');
let yearlygridA = document.getElementById('yearA');
let yearlygridB = document.getElementById('yearB');
let yearlygridC = document.getElementById('yearC');
let yearlygridD = document.getElementById('yearD');
let yearlygridE = document.getElementById('yearE');
let yearlygridF = document.getElementById('yearF');


// Initialize list of most recent years. 
var recentYears = [];



/*****/


// Start it up. 
startItUp();



/*****/


function startItUp() {
	
	
	// Add calendar for contributions in last 52 wks. 
	addRecentCalendar();


	// Add navigation for yearly calendars. 
	// addYearCalendarNavigation();
	
	
	// Add calendars for contributions in past few years. 
	// addAllYearlyCalendars();
	
	
	// Handle events. 
	// handleEvents();
}



// TODO: Add single calendar for last 52 wks of contributions. 
function addRecentCalendar() {
	console.log('\nRecent Calendar');

	// Get start date (in ms): 52 wks prior. 
	let startDate = getDateFromWksAgo(52);
	let endDate = Date.now();
	// console.log('Start date:',startDate);

	// Initialize grid. 
	let grid = '';
	
	// Add day labels. 
	grid += createDayLabels();
	// Add dots for days. 
	grid += createSeriesOfWks( startDate, endDate );
	
	// Add recent grid to page. 
	recentgrid.innerHTML = grid;

	/****/


	// Calculate millisecond representation for recent calendar start date. 
	function getDateFromWksAgo(numWks) {
		// 1. Get Sunday of most recently passed wk. 
		// 2. Subtract 364 days. 
		// 3. Save millisecond id for that day. 

		// Get today's date. 
		let todayDate = Date.now();

		// Get number of buffer days to get a Sunday (same as index for day of week). 
		let numBufferDays = new Date(todayDate).getDay();

		// Recent mode
		// Get date 52 wks (364 days) prior to Sunday of most recent week. 
			// Get date 52 weeks (364 days) prior to today (same day of week). 
			// Get actual start date -- Sunday prior to that day. 
		let result = todayDate - numWks*(numDaysPerWk*msPerDay) - (numBufferDays*msPerDay);

		// Return resulting start date. 
		return result;
	}
}


// Add navigation for yearly calendars. 
function addYearCalendarNavigation() {

	// Get container of year navigation. 
	let yrlist = document.querySelector('nav#yrchooser ul.yrlist');

	// Initialize year choices. 
	let chooseyr = '';

	// Initialize number of years.
	let numYrs = 6;

	// Get current year. 
	let currentYr = ( new Date() ).getFullYear();

	// Create array of most recent 6 years. 
	recentYears = []
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
	let navbtns = document.querySelectorAll('nav#yrchooser ul.yrlist li.year');
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


		// TODO: Show only page for selected year. 

		// Hide grid pages for other years. 
		let yearpages = document.querySelectorAll('.yeargrid');
		for(let yg of yearpages) {
			yg.classList.remove('active');
		}
		// Show page for selected year. 
		let yr = selectedYrBtn.innerText;
		let selectedPage = document.getElementById(`year${yr}`);
		selectedPage.classList.add('active');
	}
}

// TODO: Add calendars for past few years' contributions with separate page for each year. 
function addAllYearlyCalendars() {
	for(let yr of recentYears) {
		addYearlyCalendar(yr);
	}
}

// TODO: Add calendar for given year's contributions. 
function addYearlyCalendar(year) {
	console.log('\nYearly Calendar');

	// Initialize grid. 
	let grid = '';
	
	// Yearly mode: Jan 1 of year of earliest contribution
	// 1. Get date of earliest contribution
	// 2. Get year associated with that date. 
	// 3. Save millisecond id for Jan 1 of that year

	// Go thru last few recentYears, starting with most recent year (current year). 
	for(let yr of recentYears) {

		// Get yearly date range -- first and last day of given year (in ms). 
		let startDate = ( new Date(`${yr}-01-01 12:00:00`) ).valueOf();
		let endDate = ( new Date(`${yr}-12-31 12:00:00`) ).valueOf();
		console.log(`Year ${yr} date range:`,startDate,endDate);
	
		// Add day labels. 
		grid += createDayLabels();
		// Add dots for days. 
		grid += createSeriesOfWks( startDate, endDate );
	}
	
	// TODO: Add yearly grid to page. 
	yearlygrid.innerHTML = grid;
}
	
// TODO: Create series of dot groups for actual wks within given date range. 
function createSeriesOfWks( startDate, endDate ) {
	console.log('Start date:', new Date(startDate) );
	console.log('End date:', new Date(endDate) );

	// Initialize result. 
	let seriesOfWks = '';

	// Create 7-day groups of day dots. 
	for(let currentDate=1*startDate; currentDate<endDate; currentDate+=onewk) {
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
		seriesOfWks += `
		<!-- wk -->
		<div class="wk">`;

		// Create space for month label. 
		seriesOfWks += `
		<!-- label -->
		<div class="label month">-</div>
		<!-- /label -->`;

		// 
		seriesOfWks += createSeriesOfDays(currentDate);
		
		// End period. 
		seriesOfWks += `
		</div>
		<!-- /wk -->`;
	}

	// Return result. 
	return seriesOfWks;

	/*****/
	
	// TODO: Add dots for actual days within given wk. 
	function createSeriesOfDays(startDate) {

		// 
		let numEmptyDays = ( new Date(startDate) ).getDay();
		let numActualDays = 7 - numEmptyDays;
		let endDate = 1*startDate + numActualDays*oneday;

		// let wklydata = 

		// Create dots for days (in 7-day groups). 
		{
	 
			// Get day differential from origin date. 
			// let numDaysFromStart = 7*h + 1*i;
			// console.log('Day:',i);
			// console.log('Days from start:',i);
	
			// Get number of contributions for given day. 
			// let count = wklydata[i];
			// console.log(`Day ${numDaysFromStart}:`,count,'contributions');
			
			// Get date id. 
			// let dateId = 1*startDate + numDaysFromStart*msPerDay;
			// console.log('dateId:',dateId);

			// Create date object to get elements of date. 
			// let dateObj = new Date(dateId);
			// let yr = 1 * dateObj.getFullYear();	// four digit yr
			// let mo = 1 * dateObj.getMonth();	// 0-11
			// let date = 1 * dateObj.getDate();	// 1-31
			// console.log('dateObj:',dateObj);
			// console.log('Year:',yr);
			// console.log('Month index:',mo);
			// console.log('Date:',date);
			



		}
	
		// 
		let result = '';

		// Create dots for given set of days. 
		for(let d=1*startDate ; d<endDate ; d+=oneday) {
			
			// Create sample data. 
			count = Math.floor( 32*Math.random() );
			let yr = 2022;	// four digit yr
			let mo = 0;	// 0-11
			let date = 1;	// 1-31

			// Create representations of date. 
			let datecode = `${yr}-${ format2Dgt(mo+1) }-${ format2Dgt(date) }`;		// 2022-01-01
			let datestring = `${monthNames[mo]} ${date}, ${yr}`;					// Jan 1, 2022

			console.log(datecode,count,'contributions');

			// Create representation of contribution count. 
			let contrstring = `${ (count)?(count):('No') } contribution${ (count==1)?(''):('s') }`;
			// Create note of contributions for given date. 
			let contributionnote = `${contrstring} on ${datestring}`;						// xyz contributions on Jan 1, 2022
			let contributiontagnote = `<strong>${contrstring}</strong> on ${datestring}`;	// *xyz contributions* on Jan 1, 2022

			// 
			result += `
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

			// // 
			// result += `
			// <!-- day -->
			// <div class="day">

			// 	<!-- dot -->
			// 	<div class="dot"></div>
			// 	<!-- /dot -->

			// 	<!-- tag -->
			// 	<div class="tag"></div>
			// 	<!-- /tag -->

			// </div>
			// <!-- /day -->`;
		}

		return result;
	}

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

	/*****/
	/*****/
	/*****/
	
	for(let h in contributiondata) {
		// Add days. 
		for(let i in wk) {
		}
	}
}

// Create day labels. 
function createDayLabels() {

	// Initialize result. 
	let daylabels = '';

	// Begin period. 
	daylabels += `
	<!-- wk -->
	<div class="wk labels">`;

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
	let dayDots = document.querySelectorAll('figure.grid div.day div.dot');
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
			recentgrid.classList.remove('off');
			yearlygridA.classList.remove('off');
			yearlygridB.classList.remove('off');
			yearlygridC.classList.remove('off');
			yearlygridD.classList.remove('off');
			yearlygridE.classList.remove('off');
			yearlygridF.classList.remove('off');
			
			// Un-focus single selected dot. 
			selectedDot.classList.remove('on');
		}

		// Focus things. 
		else {

			// Dim entire dot grid. 
			recentgrid.classList.add('off');
			yearlygridA.classList.add('off');
			yearlygridB.classList.add('off');
			yearlygridC.classList.add('off');
			yearlygridD.classList.add('off');
			yearlygridE.classList.add('off');
			yearlygridF.classList.add('off');
			
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

