

// Format follower count number. 
function formatFollowerCount(num,expanded=false) {
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
		else return ( numstr + ' followers' );
	}

	// Format abbreviated number. 
	else {
	
		// Define components of formatted number. 
		let coeff = 1*num;
		let suffindex = 0;
		let suffix = [' followers','K followers','M followers','B followers','T followers',' follower'];	// potential suffixes
	
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
