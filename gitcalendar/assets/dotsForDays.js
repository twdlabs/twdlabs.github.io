
// TODO: Add dots for filler days. 
function createDotsForFillerDays() {

	// How many filler days we need: What's the index of current day of week ?
	// 0 Sun: Add 0 filler day(s)
	// 1 Mon: Add 1 filler day(s)
	// 2 Tue: Add 2 filler day(s)
	// 3 Wed: Add 3 filler day(s)
	// 4 Thu: Add 4 filler day(s)
	// 5 Fri: Add 5 filler day(s)
	// 6 Sat: Add 6 filler day(s)
	
	// How many filler days ?
	while(currentDateId<firstDateIndex) fillerDays += ``;
}

// TODO: Add dots for actual days between given date range. 
function createDotsForDays(startingDate) {
	// console.log('Starting date:',startingDate);

	// Initialize result. 
	let dotsForDays = '';

	// Create dots for days (in 7-day groups). 
	for(let h in contributiondata) {
	// for(let h=0;h<52;h++) {
		// console.log('\nWk',h);
	
		// Get contribution data for given period. 
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
		// dotsForDays += fillPeriod();
		for(let i in wk) {
		// for(let i=0;i<7;i++) {
	
			// Get day differential from origin date. 
			let numDaysFromStart = 7*h + 1*i;
			// console.log('Day:',i);
			// console.log('Days from start:',i);
	
			// Get number of contributions for given day. 
			let count = wk[i];
			// console.log(`Day ${numDaysFromStart}:`,count,'contributions');
			
			// Get date id. 
			let dateId = 1*startingDate + numDaysFromStart*msPerDay;
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
				<div class="dot ${ getLevelName(count) }" data-count="${count}" data-date="${datecode}" title="${contributionnote}">`;
	
				// // 
				// dotsForDays += `
				// <span>${yr}</span>
				// <span>${format2Dgt(mo+1)}</span>
				// <span>${format2Dgt(date)}</span>`;
	
				// 
				dotsForDays += `</div>
				<!-- /dot -->

				<!-- tag -->
				<div class="tag">${contributiontagnote}</div>
				<!-- /tag -->

			</div>
			<!-- /day -->`;
	
			// // 
			// dotsForDays += `
			// <!-- dot -->
			// <div class="dot" data-count="-1" data-date="2022-03-29" title="xyz contributions on 2022-03-29"></div>
			// <!-- /dot -->`;
	
			// // 
			// dotsForDays += `
			// <!-- dot -->
			// <div class="dot" data-count="-1" data-date="2022-03-29" title="xyz contributions on 2022-03-29">

			// 	<!-- tag -->
			// 	<div class="tag">xyz contributions on 2022-03-29</div>
			// 	<!-- /tag -->

			// </div>
			// <!-- /dot -->`;
		}
	
		// End period. 
		dotsForDays += `
		</div>
		<!-- /wk -->`;
	}

	// Return result. 
	return dotsForDays;

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

	// // Fill period with days. 
	// function fillPeriodWithDays() {
	// 	// 
	// }
}
