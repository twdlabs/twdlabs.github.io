


class TimeCalculator {

	// Construct a new time calculator. 
	constructor(logDetails) {

		// Define whether logging details or not. 
		this.loggingDetails = logDetails;

		// Define month names. 
		this.monthnames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		// Define potential time units. 
		this.suffix = ['ms','s','m','h','d','w','y','c'];

		// Define potential divisors of time coefficient. 
		this.limits = [1000, 60, 60, 24, 7, 52, 100];

		// Get number for current moment. 
		this.now = Date.now();
		if(this.loggingDetails) console.log('now:',this.now);
	}

	// Format time elapsed since given date/time. 
	formatDate(num) {

		// 
		let dt = new Date(num);

		// Get year. 
		let y = dt.getFullYear();
		console.log('y:',y);

		// Get month. 
		let m = dt.getMonth();
		console.log('m:',m);
		
		// Get date. 
		let d = dt.getDate();
		console.log('d:',d);

		// Compile date string. 
		return `${ y }-${ this.monthnames[m] }-${ (d<10) ? `0${d}` : d }`;
		// return `${ y }-${ (m+1<10) ? `0${m+1}` : (m+1) }-${ (d<10) ? `0${d}` : d }`;
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
