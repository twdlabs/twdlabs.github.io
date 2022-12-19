// 'use strict';



// Get month display window. 

// Get head of month display window. 
const calendarhead = document.querySelector('main.calendar section.head h1.name');
// Get body of month display window. 
const calendarbody = document.querySelector('main.calendar section.body ul.monthdays');


// Get month selector window. 
const selector = document.querySelector('main.calendar div.selector');
// Get body of month selector window. 
const selectorbody = document.querySelector('main.calendar div.selector ul.select');
// Get head of month selector window. 
const selectorhead = document.querySelector('main.calendar div.selector div.head h1.year');

// Initialize current year of month selector window. 
let selectorCurrentYear;


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


// Update calendar. 
updateCalendar();

// Activate keyboard shortcuts. 
activateShortcuts();


/*****/


// Update calendar. 
function updateCalendar() {
	
	// Update calendar head. 
	updateCalendarHead();
	
	// Update calendar body. 
	updateCalendarBody();

	
	/****/


	// Update calendar head. 
	function updateCalendarHead() {
		console.log( 'Currently displayed month:', currentYear, monthfullname[currentMonthIndex] );
	
		// Update label for current month. 
		calendarhead.innerHTML = `${ monthfullname[currentMonthIndex] } ${currentYear}`;
	}
	
	// Update calendar body. 
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
	
	// Update calendar. 
	updateCalendar();
}

// Go to previous month. 
function goToPrevMonth() {

	// Decrement current month index. 
	deltaMonth(-1);
	
	// Update calendar. 
	updateCalendar();
}

// Go to next month. 
function goToNextMonth() {

	// Increment current month index. 
	deltaMonth(+1);

	// Update calendar. 
	updateCalendar();
}

// Delta month index. 
function deltaMonth(delta) {

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
}

// Open month selector window. 
function openSelector() {

	// Get current year for newly opened selector. 
	selectorCurrentYear = currentYear;

	// Update selector. 
	updateSelector();

	// Activate selector. 
	selector.classList.add('active');
}

// Update selector. 
function updateSelector() {

	// Fill body of selector. 
	fillSelectorBody();

	// Fill head of selector. 
	fillSelectorHead();

	// Activate selector buttons. 
	activateSelector();

	/****/

	// Add to selector: current year. 
	function fillSelectorHead() {
		// Update current year. 
		selectorhead.innerHTML = selectorCurrentYear;
	}

	// Add to selector: month data for current year. 
	function fillSelectorBody() {
		
		// Initialize result. 
		let result = '';

		// Go thru all months. 
		for(let i in monthData) {
	
			// Get data for current month. 
			let m = monthData[i];
	
			// Add month button. 
			result += `
			<!-- month -->
			<li class="month" data-yr="${selectorCurrentYear}" data-mo="${i}">
	
				<!-- caption -->
				<span class="caption">${m.name}</span>
				<!-- /caption -->
	
			</li>
			<!-- /month -->`;
		}

		// Add result to selector body
		selectorbody.innerHTML = result;
	}

	// Activate selector buttons. 
	function activateSelector() {
		
		// Get all month buttons. 
		const monthbtns = document.querySelectorAll('main.calendar div.selector ul.select li.month');

		// Go thru all month buttons. 
		for(let btn of monthbtns) {
			btn.addEventListener('click',selectMonth);
		}

		/***/

		// Select month to be dsiplayed. 
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

			// Update calendar. 
			updateCalendar();

			// Close month selector window. 
			closeSelector();
		}
	}
}

// Shift current year of selector. 
function shiftSelectorYr(delta) {

	// Increment current selector year by delta. 
	selectorCurrentYear += delta;

	// Update selector. 
	updateSelector();
}

// Close month selector window. 
function closeSelector() {

	// De-activate selector. 
	selector.classList.remove('active');
	
	// Clear body of selector. 
	selectorbody.innerHTML = '';
	
	// Clear head of selector. 
	selectorhead.innerHTML = '';
}

// Activate keyboard shortcuts. 
function activateShortcuts() {

	// Check for shortcut key upon key press. 
	document.addEventListener('keyup',checkForShortcutKey);

	/****/

	// Check for shortcut key. 
	function checkForShortcutKey(event) {
		// console.log(event);

		// Check if selector window open. 
		let selectorOpen = selector.classList.contains('active');

		// Check for special keys pressed. 
		if(event.keyCode==83 || event.key=='s' || event.key=='S') openSelector();
		else if(event.keyCode==27 || event.key=='Escape') closeSelector();
		else if(event.keyCode==37 || event.key=='ArrowLeft') {
			if(selectorOpen) shiftSelectorYr(-1);
			else goToPrevMonth();
		}
		else if(event.keyCode==39 || event.key=='ArrowRight') {
			if(selectorOpen) shiftSelectorYr(+1);
			else goToNextMonth();
		}
	}
}
