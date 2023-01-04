


class TimeCalculator {

	// Construct a new time calculator. 
	constructor(logDetails) {

		// Define whether logging details or not. 
		this.loggingDetails = logDetails;

		// Define potential time units. 
		this.suffix = ['ms','s','m','h','d','w','y','c'];

		// Define potential divisors of time coefficient. 
		this.limits = [1000, 60, 60, 24, 7, 52, 100];

		// Get number for current moment. 
		this.now = Date.now();
		if(this.loggingDetails) console.log('now:',this.now);
	}

	// Format time elapsed since given date/time. 
	formatTimeSince(num) {

		// Calculate amount of time elapsed since given date/time. 
		let dt = this.now - 1*num;
		if(this.loggingDetails) console.log('dt:',dt);

		// Check for time in past or time in future. 
		let timeInPast = dt > 0;

		// Treat future date/times as current moment (aka now). 
		if(!timeInPast) return 'now';
	
		// Initialize time coefficient. 
		let coeff = dt;
		// Initialize index for time unit. 
		let unitindex = 0;
	
		// Divide coefficient until less than following unit... 
		while( Math.abs(coeff) > this.limits[unitindex] ) {
	
			// Divide coefficient into next unit. 
			coeff /= this.limits[unitindex];
			if(this.loggingDetails) console.log('\tcoeff',coeff);
	
			// Increment index for time unit. 
			unitindex++;
			if(this.loggingDetails) console.log('\tUnit index:',unitindex);
		}
	
		// Format time coefficient: remove decimals. 
		coeff = coeff.toFixed(0);
	
		// Compile string representing time since given date/time. 
		return ( coeff + this.suffix[unitindex] );
	}

	// // 
	// xyz() {

	// 	// 
	// }
}
