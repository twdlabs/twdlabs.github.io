// 'use strict';



// Get month display window. 

// Get head of month display window. 
const calendarhead = document.querySelector('main.calendar section.head h1.name');
// Get body of month display window. 
const calendarbody = document.querySelector('main.calendar section.body ul.monthdays');


// Get month selector window. 
const monthselector = document.querySelector('main.calendar div.selector');
// Get body of month selector window. 
const monthselectorbody = document.querySelector('main.calendar div.selector ul.select');
// Get head of month selector window. 
const monthselectorhead = document.querySelector('main.calendar div.selector div.head h1.year');

// Initialize current year of month selector window. 
let monthselectorcurrentyear;


// Create new date item for current date time. 
const now = new Date();
// console.log('Now:',now);

// Define today's year. 
const todayYear = now.getFullYear();		// 2022;
// console.log('Today year:', todayYear);

// Define index of today's month. 
const todayMonthIndex = now.getMonth();		// 11 (December);
// console.log('Today month index:', todayMonthIndex);

// Define today's date. 
const todayDateOfMonth = now.getDate();		// 17 (17th);
// console.log('Today date of month:', todayDateOfMonth);

console.log( 'Today\'s date:', todayYear, monthfullname[todayMonthIndex], todayDateOfMonth,'\n\n' );


// Define current year. 
let currentYear = todayYear;
// console.log('Current year:',currentYear);

// Define index of current month. 
let currentMonthIndex = todayMonthIndex;
// console.log('Current month index:',currentMonthIndex);


/*****/


// Update display calendar. 
updateDisplayCalendar();

// Activate keyboard shortcuts. 
activateShortcutKeys();


/*****/


// Update contents of display calendar. 
function updateDisplayCalendar() {
	
	// Update calendar head. 
	updateCalendarHead();
	
	// Update calendar body. 
	updateCalendarBody();

	
	/****/


	// Update contents of calendar head. 
	function updateCalendarHead() {
		console.log( 'Currently displayed month:', currentYear, monthfullname[currentMonthIndex] );
	
		// Update label for current month. 
		calendarhead.innerHTML = `${ monthfullname[currentMonthIndex] } ${currentYear}`;
	}
	
	// Update contents of calendar body. 
	function updateCalendarBody() {
	
		// Initialize result. 
		let result = '';
	
		// Add days for previous month. 
		result += addPrevMonthDays();
	
		// Add days for current month. 
		result += addThisMonthDays();
	
		// Add days for following month. 
		result += addNextMonthDays();
		
		// Update days in calendar body. 
		calendarbody.innerHTML = result;
	
		/***/
	
		// Add days for previous month. 
		function addPrevMonthDays() {
	
			// Initialize result. 
			let result = '';
	
			// Get last day of last month. 
			let lastMonthLastDay = new Date(currentYear,currentMonthIndex,0);
			let lastMonthLastDayDate = lastMonthLastDay.getDate();
			let lastMonthLastDayIndex = lastMonthLastDay.getDay();
			// console.log('\tlastMonthLastDay:',lastMonthLastDayIndex,lastMonthLastDay);
	
			// Get first day of current month. 
			let currentMonthFirstDay = new Date(currentYear,currentMonthIndex,1);
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
		function addThisMonthDays() {
	
			// Initialize result. 
			let result = '';
	
			// Get number of days in current month. 
			let currentMonthLength = new Date(currentYear,currentMonthIndex+1,0).getDate();
			// console.log('\tcurrentMonthLength:',currentMonthLength);
	
			// Add days for current month. 
			for( let d=1 ; d<=currentMonthLength ; d++ ) {

				// Check if current date is same as today. 
				let isToday = ( d==todayDateOfMonth && currentMonthIndex==todayMonthIndex && currentYear==todayYear );

				// Create box for current date. 
				result += `
				<!-- day -->
				<li class="day ${ (isToday)?'on':'' }">${d}</li>
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
			let currentMonthLastDay = new Date(currentYear,currentMonthIndex+1,0);
			let currentMonthLastDayIndex = currentMonthLastDay.getDay();
			// console.log('\tcurrentMonthLastDay:',currentMonthLastDayIndex,currentMonthLastDay);
			
			// Get first day of next month. 
			let nextMonthFirstDay = new Date(currentYear,currentMonthIndex+1,1);
			let nextMonthFirstDayIndex = nextMonthFirstDay.getDay();
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
	}
}

// Go to today's month. 
function goToTodayMonth() {

	// Reset current year. 
	currentYear = todayYear;

	// Reset current month index. 
	currentMonthIndex = todayMonthIndex;
	
	// Update display calendar. 
	updateDisplayCalendar();
}

// Change displayed month by given amount of months. 
function shiftDisplayMonth(delta) {

	// Change month index. 
	currentMonthIndex += delta;

	// Ensure month index within range (from above). 
	if(currentMonthIndex>=12) {
		currentMonthIndex -= 12;
		currentYear += 1;
	}

	// Ensure month index within range (from below). 
	else if(currentMonthIndex<0) {
		currentMonthIndex += 12;
		currentYear -= 1;
	}
	
	// Update display calendar. 
	updateDisplayCalendar();
}

// Open month selector window. 
function openMonthSelector() {

	// Get current year for newly opened selector. 
	monthselectorcurrentyear = currentYear;

	// Update month selector. 
	updateMonthSelector();

	// Activate month selector window. 
	monthselector.classList.add('active');
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
		for(let i in monthData) {
	
			// Get data for current month. 
			let m = monthData[i];
	
			// Add month button. 
			result += `
			<!-- month -->
			<li class="month" data-yr="${monthselectorcurrentyear}" data-mo="${i}">
	
				<!-- caption -->
				<span class="caption">${m.name}</span>
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
		const monthbtns = document.querySelectorAll('main.calendar div.selector ul.select li.month');

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
			currentYear = 1*yr;

			// Get selected month. 
			let mo = btn.getAttribute('data-mo');
			// Save selected month. 
			currentMonthIndex = 1*mo;

			// Update display calendar. 
			updateDisplayCalendar();

			// Close month selector window. 
			closeMonthSelector();
		}
	}
}

// Shift year of month selector. 
function shiftMonthSelectorYear(delta) {

	// Increment current selector year by delta. 
	monthselectorcurrentyear += delta;

	// Update month selector. 
	updateMonthSelector();
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

// Activate keyboard shortcuts. 
function activateShortcutKeys() {

	// Check for shortcut key upon key press. 
	// document.addEventListener('keyup',checkForShortcutKey);
	document.addEventListener('keydown',checkForShortcutKey);

	/****/

	// Check for press of special shortcut keys. 
	function checkForShortcutKey(event) {
		// console.log(event);

		// Check if selector window open. 
		let selectorOpen = monthselector.classList.contains('active');

		// Press 'S': Open month selector. 
		if(event.keyCode==83 || event.key=='s' || event.key=='S') openMonthSelector();

		// Press 'Esc': Close month selector. 
		else if(event.keyCode==27 || event.key=='Escape') closeMonthSelector();
		
		// Press left arrow: Decrement month or year. 
		else if(event.keyCode==37 || event.key=='ArrowLeft') {
			if(selectorOpen) shiftMonthSelectorYear(-1);
			else shiftDisplayMonth(-1);
		}
		
		// Press right arrow: Increment month or year. 
		else if(event.keyCode==39 || event.key=='ArrowRight') {
			if(selectorOpen) shiftMonthSelectorYear(+1);
			else shiftDisplayMonth(+1);
		}
	}
}
