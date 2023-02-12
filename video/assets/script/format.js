

// Format subscriber count number. 
function formatSubCount(num) {
	
	// Define components of formatted number. 
	let coeff = 1*num;
	let suffindex = 0;
	let suffix = [' subscribers','K subscribers','M subscribers','B subscribers','T subscribers',' subscriber'];	// potential suffixes

	// Divide number until less than a thousand. 
	while(coeff>1000 && suffindex<5) {

		// Divide number by thousand. 
		coeff /= 1000;
		// console.log('\tcoeff',coeff);

		// Increment suffix index. 
		suffindex++;
		// console.log('\tsuffindex',suffindex);
	}

	// Add final formatting to subscriber count. 
	coeff = coeff.toFixed(1);
	let removeExtraZero = coeff.includes('.0');
	if(removeExtraZero) coeff = coeff.substr(0,coeff.length-2);
	if(coeff==1 && suffindex==0) suffindex = 5;

	// Return final result text. 
	return ( coeff + suffix[suffindex] );
}


// Format view count number. 
function formatViewCount(num,expanded=false) {
	// console.log('num',num, (expanded)?('expanded'):('abbreviated') );
	
	// Format general integer. 
	if(expanded) {

		// Create string representation of number. 
		let numstr = '' + Math.floor(num);
		// console.log('numstr:',numstr);

		// Add commas to numbers longer than 3 digits. 
		if(numstr.length>3) {

			// Split number into pieces. 
			let splitNumber = numstr.split('');
			let newSplitNumber = [];
			// console.log('splitNumber:',splitNumber);
			// console.log('newSplitNumber:',newSplitNumber);
	

			// Get bottom digit group and add comma. Repeat till last digit group. 
			while(splitNumber.length>3) {
				newSplitNumber.unshift( splitNumber.pop() );
				newSplitNumber.unshift( splitNumber.pop() );
				newSplitNumber.unshift( splitNumber.pop() );
				newSplitNumber.unshift(',');
			}
			// console.log('splitNumber:',splitNumber);
			// console.log('newSplitNumber:',newSplitNumber);

			// Get last digit group. 
			while(splitNumber.length) {
				newSplitNumber.unshift( splitNumber.pop() );
			}
			// console.log('splitNumber:',splitNumber);
			// console.log('newSplitNumber:',newSplitNumber);
	
			// Reassemble split number into string. 
			numstr = newSplitNumber.join('');
		}

		// Return final result text. 
		if(numstr==1) return ( numstr + ' view' );
		else return ( numstr + ' views' );
	}

	// Format abbreviated number. 
	else {
	
		// Define components of formatted number. 
		let coeff = 1*num;
		let suffindex = 0;
		let suffix = [' views','K views','M views','B views','T views',' view'];	// potential suffixes
	
		// Divide number until less than a thousand. 
		while(coeff>1000 && suffindex<5) {
	
			// Divide number by thousand. 
			coeff /= 1000;
			// console.log('\tcoeff',coeff);
	
			// Increment suffix index. 
			suffindex++;
			// console.log('\tsuffindex',suffindex);
		}
	
		// Add final formatting to view count. 
		coeff = coeff.toFixed(1);
		let removeExtraZero = coeff.includes('.0');
		if(removeExtraZero) coeff = coeff.substr(0,coeff.length-2);
		if(coeff==1 && suffindex==0) suffindex = 5;
	
		// Return final result text. 
		return ( coeff + suffix[suffindex] );

	}
}


// Format 'time since upload' number. 
function formatTimeAgo(uploaddate) {

	// Get estimated time since upload date (ETS). 
	let dt = thismoment - 1*uploaddate;
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
}
