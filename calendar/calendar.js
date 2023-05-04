// 'use strict';



// Get calendar display window. 
// const calendar = document.querySelector('main.calendar');
// Get head of month display window. 
const calendarhead = document.querySelector('main.calendar section.head h1.name');
// Get body of month display window. 
const calendarbody = document.querySelector('main.calendar section.body ul.monthdays');

// Get month selector window. 
const monthselector = document.querySelector('main.calendar nav.monthselector');
// Get head of month selector window. 
const monthselectorhead = document.querySelector('main.calendar nav.monthselector div.head h1.year');
// Get body of month selector window. 
const monthselectorbody = document.querySelector('main.calendar nav.monthselector div.body ul.monthlist');

// Get day reader window. 
const dayreader = document.querySelector('main.calendar article.dayreader');
// Get day reader content. 
const dayreadercontent = document.querySelector('main.calendar article.dayreader div.content');


/*****/


// Create new date item for current date time. 
const now = new Date();
// Define today's year. 
const todayYear = now.getFullYear();		// 2022;
// Define index of today's month. 
const todayMonthIndex = now.getMonth();		// 11 (December);
// Define today's date. 
const todayDateOfMonth = now.getDate();		// 17 (17th);

// console.log('Now:',now);
// console.log('Today year:', todayYear);
// console.log('Today month index:', todayMonthIndex);
// console.log('Today date of month:', todayDateOfMonth);
console.log( 'Today\'s date:', todayYear, monthfullname[todayMonthIndex], todayDateOfMonth,'\n\n' );


// Define current display year. 
let currentDisplayYear = todayYear;
// Define index of current display month. 
let currentDisplayMonthIndex = todayMonthIndex;

// console.log('Current display year:',currentDisplayYear);
// console.log('Current display month index:',currentDisplayMonthIndex);


// Initialize current year of month selector window. 
let monthselectorcurrentyear/*  = currentDisplayYear */;


// Initialize current year of day reader window. 
let dayreadercurrentyear/*  = todayYear */;

// Initialize current year of day reader window. 
let dayreadercurrentmonthindex/*  = todayMonthIndex */;

// Initialize current year of day reader window. 
let dayreadercurrentdate/*  = todayDateOfMonth */;


/*****/


// Update calendar display. 
updateCalendarDisplay();

// Activate keyboard shortcuts. 
activateShortcutKeys();


/*****/


// Update contents of calendar display. 
function updateCalendarDisplay() {
	
	// Update calendar head. 
	updateCalendarHead();
	
	// Update calendar body. 
	updateCalendarBody();

	
	/****/


	// Update contents of calendar head. 
	function updateCalendarHead() {
		console.log( 'Currently displayed month:', currentDisplayYear, monthfullname[currentDisplayMonthIndex] );
	
		// Display label for current month. 
		calendarhead.innerHTML = `${ monthfullname[currentDisplayMonthIndex] } ${currentDisplayYear}`;
	}
	
	// Update contents of calendar body. 
	function updateCalendarBody() {
	
		// Initialize result. 
		let result = '';
	
		// Add days for previous month. 
		result += addPrevMonthDays();
	
		// Add days for current month. 
		result += addCurrentMonthDays();
	
		// Add days for following month. 
		result += addNextMonthDays();
		
		// Display days in calendar body. 
		calendarbody.innerHTML = result;

		// Activate days in calendar display. 
		activateCalendarDays();
	
		/***/
	
		// Add days for previous month. 
		function addPrevMonthDays() {
	
			// Initialize result. 
			let result = '';
	
			// Get last day of last month. 
			let lastMonthLastDay = new Date(currentDisplayYear,currentDisplayMonthIndex,0);
			let lastMonthLastDayDate = lastMonthLastDay.getDate();
			// let lastMonthLastDayIndex = lastMonthLastDay.getDay();
			// console.log('\tlastMonthLastDay:',lastMonthLastDayIndex,lastMonthLastDay);
	
			// Get first day of current month. 
			let currentMonthFirstDay = new Date(currentDisplayYear,currentDisplayMonthIndex,1);
			let currentMonthFirstDayIndex = currentMonthFirstDay.getDay();
			// console.log('\tcurrentMonthFirstDay:',currentMonthFirstDayIndex,currentMonthFirstDay);
		
			// Add days for previous month. 
			for( let d=1 ; d<=currentMonthFirstDayIndex ; d++ ) {

				// Get current date. 
				let currentDate = lastMonthLastDayDate - currentMonthFirstDayIndex + d;

				// Create box for current date. 
				result += `
				<!-- day -->
				<li class="day off">${currentDate}</li>
				<!-- /day -->`;
			}
	
			// Return result. 
			return result;
		}
	
		// Add days for current month. 
		function addCurrentMonthDays() {
	
			// Initialize result. 
			let result = '';
	
			// Get number of days in current month. 
			let currentMonthLength = new Date(currentDisplayYear,currentDisplayMonthIndex+1,0).getDate();
			// console.log('\tcurrentMonthLength:',currentMonthLength);
	
			// Add days for current month. 
			for( let d=1 ; d<=currentMonthLength ; d++ ) {

				// Check if current date is same as today. 
				let isToday = ( d==todayDateOfMonth && currentDisplayMonthIndex==todayMonthIndex && currentDisplayYear==todayYear );

				// Create box for current date. 
				result += `
				<!-- day -->
				<li class="day on${ (isToday)?' today':'' }" data-yr="${currentDisplayYear}" data-mo="${currentDisplayMonthIndex}" data-date="${d}">${d}</li>
				<!-- /day -->`;
			}
	
			// Return result. 
			return result;
		}
	
		// Add days for following month. 
		function addNextMonthDays() {
	
			// Initialize result. 
			let result = '';
	
			// Get last day of current month. 
			let currentMonthLastDay = new Date(currentDisplayYear,currentDisplayMonthIndex+1,0);
			let currentMonthLastDayIndex = currentMonthLastDay.getDay();
			// console.log('\tcurrentMonthLastDay:',currentMonthLastDayIndex,currentMonthLastDay);
			
			// Get first day of next month. 
			// let nextMonthFirstDay = new Date(currentDisplayYear,currentDisplayMonthIndex+1,1);
			// let nextMonthFirstDayIndex = nextMonthFirstDay.getDay();
			// console.log('\tnextMonthFirstDay:',nextMonthFirstDayIndex,nextMonthFirstDay);
		
			// Add days for following month. 
			for( let d=currentMonthLastDayIndex+1 ; d<=6 ; d++ ) {

				// Get current date. 
				let currentDate = d - currentMonthLastDayIndex;

				// Create box for current date. 
				result += `
				<!-- day -->
				<li class="day off">${currentDate}</li>
				<!-- /day -->`;
			}
	
			// Return result. 
			return result;
		}

		// Activate days in calendar display. 
		function activateCalendarDays() {

			// Get all days of current month. 
			let allmonthdays = document.querySelectorAll('div#container main.calendar section.body ul.monthdays li.day.on');

			// Go thru all days of current month. 
			for(let day of allmonthdays) {

				// 
				day.addEventListener('click',prepDayReader);
			}
	
			/**/

			// Prepare day reader
			function prepDayReader(event) {

				// Get day button. 
				let daybtn = event.currentTarget;
				console.log('daybtn:',daybtn);

				// Get year. 
				let y = daybtn.getAttribute('data-yr');
				// Get month index. 
				let m = daybtn.getAttribute('data-mo');
				// Get date. 
				let d = daybtn.getAttribute('data-date');

				// Open day reader window. 
				openDayReader(y,m,d);
			}
		}
	}
}

// Display today's month. 
function displayTodayMonth() {

	// Reset current year. 
	currentDisplayYear = todayYear;

	// Reset current month index. 
	currentDisplayMonthIndex = todayMonthIndex;
	
	// Update calendar display. 
	updateCalendarDisplay();
}

// Change displayed calendar month by given amount. 
function shiftDisplayMonth(delta) {

	// Change month index. 
	currentDisplayMonthIndex += delta;

	// Ensure month index within range (from above). 
	if(currentDisplayMonthIndex>=12) {
		currentDisplayMonthIndex -= 12;
		currentDisplayYear += 1;
	}

	// Ensure month index within range (from below). 
	else if(currentDisplayMonthIndex<0) {
		currentDisplayMonthIndex += 12;
		currentDisplayYear -= 1;
	}
	
	// Update calendar display. 
	updateCalendarDisplay();
}


// Open month selector window. 
function openMonthSelector() {

	// Get current year for newly opened selector. 
	monthselectorcurrentyear = currentDisplayYear;

	// Update month selector. 
	updateMonthSelector();

	// Activate month selector window. 
	monthselector.classList.add('active');

	// Close day reader window. 
	closeDayReader();
}

// Shift year of month selector. 
function shiftMonthSelectorYear(delta) {

	// Increment current selector year by delta. 
	monthselectorcurrentyear += delta;

	// Update month selector. 
	updateMonthSelector();
}

// Update month selector. 
function updateMonthSelector() {

	// Fill body of month selector. 
	fillMonthSelectorBody();

	// Fill head of month selector. 
	fillMonthSelectorHead();

	// Activate month selector buttons. 
	activateMonthSelector();

	/****/

	// Add to month selector: current year. 
	function fillMonthSelectorHead() {
		
		// Update current year. 
		monthselectorhead.innerHTML = monthselectorcurrentyear;
	}

	// Add to month selector: month data for current year. 
	function fillMonthSelectorBody() {
		
		// Initialize result. 
		let result = '';

		// Go thru all months. 
		for(let monthindex in monthData) {
	
			// Get data for current month. 
			let month = monthData[monthindex];
			// console.log('m:',1*i,m);

			// Check if on today's month. 
			let onTodayMonth = (monthselectorcurrentyear==todayYear) && (monthindex==todayMonthIndex);
	
			// Add month button. 
			result += `
			<!-- month -->
			<li class="month ${ onTodayMonth ? 'current' : '' }" data-yr="${monthselectorcurrentyear}" data-mo="${monthindex}">
	
				<!-- caption -->
				<span class="caption">${month.name}</span>
				<!-- /caption -->
	
			</li>
			<!-- /month -->`;
		}

		// Add result to selector body
		monthselectorbody.innerHTML = result;
	}

	// Activate month selector buttons. 
	function activateMonthSelector() {
		
		// Get all month buttons. 
		const monthbtns = document.querySelectorAll('main.calendar nav.monthselector div.body ul.monthlist li.month');

		// Go thru all month buttons. 
		for(let btn of monthbtns) {
			// Activate click of month button. 
			btn.addEventListener('click',selectMonth);
		}

		/***/

		// Select month to be displayed. 
		function selectMonth(event) {

			// Get selected month button. 
			const btn = event.currentTarget;

			// Get selected year. 
			let yr = btn.getAttribute('data-yr');
			// Save selected year. 
			currentDisplayYear = 1*yr;

			// Get selected month. 
			let mo = btn.getAttribute('data-mo');
			// Save selected month. 
			currentDisplayMonthIndex = 1*mo;

			// Update calendar display. 
			updateCalendarDisplay();

			// Close month selector window. 
			closeMonthSelector();
		}
	}
}

// Close month selector window. 
function closeMonthSelector() {

	// De-activate month selector window. 
	monthselector.classList.remove('active');
	
	// Clear body of month selector. 
	monthselectorbody.innerHTML = '';
	
	// Clear head of month selector. 
	monthselectorhead.innerHTML = '';
}


// Open day reader window. 
function openDayReader(y,m,d) {

	// Update value of current year for day reader. 
	dayreadercurrentyear = !isNaN(y) ? y : todayYear;
	// Update value of current month index for day reader. 
	dayreadercurrentmonthindex = !isNaN(m) ? m : todayMonthIndex;
	// Update value of current date for day reader. 
	dayreadercurrentdate = !isNaN(d) ? d : todayDateOfMonth;

	// Update day reader contents. 
	updateDayReader();

	// Activate month selector window. 
	dayreader.classList.add('active');

	// Close month selector window. 
	closeMonthSelector();
}

// Update day reader contents. 
function updateDayReader() {

	// 
	dayreadercontent.innerHTML = `${ dayreadercurrentyear }-${ monthData[dayreadercurrentmonthindex].name }-${ dayreadercurrentdate }`;
}

// Close day reader window. 
function closeDayReader() {

	// De-activate month selector window. 
	dayreader.classList.remove('active');
}


// Activate keyboard shortcuts. 
function activateShortcutKeys() {

	// Check for shortcut key upon key press. 
	// document.addEventListener('keyup',checkForShortcutKey);
	document.addEventListener('keydown',checkForShortcutKey);

	/****/

	// Check for press of special shortcut keys. 
	function checkForShortcutKey(event) {
		console.log(event);


		// Check if month selector window open. 
		let monthSelectorOpen = monthselector.classList.contains('active');

		// Check if day reader window open. 
		let dayReaderOpen = dayreader.classList.contains('active');


		// Press 'T': Go to today's month. 
		if(event.keyCode==84 || event.key=='t' || event.key=='T') displayTodayMonth();

		// Press 'S': Open month selector. 
		// if(event.keyCode==83 || event.key=='s' || event.key=='S') {
		
		// Press 'M': Open month selector. 
		if(event.keyCode==77 || event.key=='m' || event.key=='M') {
			if(monthSelectorOpen) closeMonthSelector();
			else openMonthSelector();
		}

		// Press 'D': Open day reader. 
		if(event.keyCode==68 || event.key=='d' || event.key=='D') {
			if(dayReaderOpen) closeDayReader();
			else openDayReader();
		}

		// Press 'Esc': Close month selector and/or day reader. 
		else if(event.keyCode==27 || event.key=='Escape') {
			closeMonthSelector();
			closeDayReader();
		}

		
		// Press left arrow: Decrement month or year. 
		else if(event.keyCode==37 || event.key=='ArrowLeft') {
			if(monthSelectorOpen) shiftMonthSelectorYear(-1);
			else if(dayReaderOpen) ;
			else shiftDisplayMonth(-1);
		}
		
		// Press right arrow: Increment month or year. 
		else if(event.keyCode==39 || event.key=='ArrowRight') {
			if(monthSelectorOpen) shiftMonthSelectorYear(+1);
			else if(dayReaderOpen) ;
			else shiftDisplayMonth(+1);
		}
	}
}

