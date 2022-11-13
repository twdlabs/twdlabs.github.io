// 'use strict';


// Create new date item for current date time. 
const now = new Date();
// console.log('Now:',now);

// Define today's year. 
let todayYear = now.getFullYear();				// 2022;
// console.log('todayYear:',todayYear);

// Define index of today's month. 
let todayMonthIndex = now.getMonth();				// 10 (November);
// console.log('todayMonthIndex:',todayMonthIndex);

// Define today's date. 
let todayDateOfMonth = now.getDate();				// 12 (12th);
// console.log('todayDateOfMonth:',todayDateOfMonth);

console.log( 'Today\'s date:', todayYear, monthfullname[todayMonthIndex], todayDateOfMonth,'\n\n' );


// Define current year. 
let currentYear = todayYear;
// console.log('currentYear:',currentYear);

// Define index of current month. 
let currentMonthIndex = todayMonthIndex;
// console.log('currentMonthIndex:',currentMonthIndex);

console.log( 'Current month:', currentYear, monthfullname[currentMonthIndex] );


/*****/


// Update calendar. 
updateCalendar();


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
		
		// Get destination. 
		const destination = document.querySelector('main.calendar div.head h1.name');
	
		// Update label for current month. 
		destination.innerHTML = `${ monthfullname[currentMonthIndex] } ${currentYear}`;
	}
	
	// Update calendar body. 
	function updateCalendarBody() {
		
		// Get destination. 
		const destination = document.querySelector('div#container main.calendar div.body ul.monthdays');
	
		// Initialize result. 
		let result = '';
	
		// Add days for previous month. 
		result += addPrevMonthDays();
	
		// Add days for current month. 
		result += addThisMonthDays();
	
		// Add days for following month. 
		result += addNextMonthDays();
		
		// Update days in calendar body. 
		destination.innerHTML = result;
	
		/***/
	
		// Add days for previous month. 
		function addPrevMonthDays() {
	
			// Initialize result. 
			let result = '';
	
			// Get last day of last month. 
			let lastMonthLastDay = new Date(currentYear,currentMonthIndex,0);
			let lastMonthLastDayIndex = lastMonthLastDay.getDay();
			console.log('\tlastMonthLastDay:',lastMonthLastDayIndex,lastMonthLastDay);
	
			// Get first day of current month. 
			let currentMonthFirstDay = new Date(currentYear,currentMonthIndex,1);
			let currentMonthFirstDayIndex = currentMonthFirstDay.getDay();
			console.log('\tcurrentMonthFirstDay:',currentMonthFirstDayIndex,currentMonthFirstDay);
		
			// Add days for previous month. 
			for( let d=0 ; d<currentMonthFirstDayIndex ; d++ ) {
				result += `
				<!-- day -->
				<li class="day off">${d+1}</li>
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
			let currentMonthLength = monthData[currentMonthIndex].length;
			console.log('\tcurrentMonthLength:',currentMonthLength);
	
			// Add days for current month. 
			for( let d=1 ; d<=currentMonthLength ; d++ ) {
				// Check for today. 
				let isToday = ( d==todayDateOfMonth && currentMonthIndex==todayMonthIndex && currentYear==todayYear );
				// 
				if(isToday) result += `
				<!-- day -->
				<li class="day on">${d}</li>
				<!-- /day -->`;
				// 
				else result += `
				<!-- day -->
				<li class="day">${d}</li>
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
			console.log('\tcurrentMonthLastDay:',currentMonthLastDayIndex,currentMonthLastDay);
			
			// Get first day of next month. 
			let nextMonthFirstDay = new Date(currentYear,currentMonthIndex+1,1);
			let nextMonthFirstDayIndex = nextMonthFirstDay.getDay();
			console.log('\tnextMonthFirstDay:',nextMonthFirstDayIndex,nextMonthFirstDay);
		
			// Add days for following month. 
			for( let d=nextMonthFirstDayIndex ; d<=6 ; d++ ) {
				result += `
				<!-- day -->
				<li class="day off">${d-currentMonthLastDayIndex}</li>
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