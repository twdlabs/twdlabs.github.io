


// Define number of milliseconds in a day. 
const msPerDay = 86400000;
const numDaysPerWk = 7;


// Define constant increments of time. 
const oneday = 1*msPerDay;
const onewk = 7*msPerDay;



// Define month names. 
const monthNames = [ 
	'Jan', 'Feb', 'Mar', 
	'Apr', 'May', 'Jun', 
	'Jul', 'Aug', 'Sep', 
	'Oct', 'Nov', 'Dec', 
];


// Define period data. 
const dayNames = [ '', 'Mon', '', 'Wed', '', 'Fri', '' ];
// const dayNames = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];




// Define default contribution data. 
var contributiondata = [

//	Mon	Tue	Wed	Thu	Fri	Sat	Sun


	// 2020 Jan 1 (Wed)
				 0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,

	// 
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  5,  1,
	10,  3,  0,  0,  0,  4,  6,
	14,  0,  0,  6,  0,  2,  0,
	 0,  9,  5,  3,  0,  0, 28,
	14,  5,  1,  1,  5,  0,  0,
	 7,  0,  2,  1,  0, 13,  0,
	 2,  3,  0,  0,  4,  0,  0,

	// 
	 1,  1,  0,  0,  1,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  2,  0,
	 0,  0,  0,  3,  2,  3,  0,
	 0,  0,  0,  0,  0,  0,  1,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  1,  1,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,

	// 
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,

	 
	// 
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,

	// 
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,

	// 
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  4,
	38,  3,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,

	// 
	 0,  3,  0,  0,  0,  1,  0,
	 0,  3,  0,  0,  0,  6,  0,
	 4,  0,  0,  2,  2,  0, 19,
	 0, 14,  3,  0,  0,  0,  0,
	 4,  0,  0,  0,  0,  0,  0,
	 0,  0,  3,  1,  0,  0,  0,
	 0,  0,  2,  1,  2,  1,  0,
	 1,  2,  2,  0,  1,  0,  0,
	 0,  1,  1,  1,  0,  0,  1,
	 3,  2,  4,  1,  3,  7, 17,
	 5,  3, 32,  1,  1,  3,  2,
	 5,  2,  2,  7,  0,  7,  2,
	 2,  3,  4,  3,  0,  4,  
		
		
	// 
							 3,
	 0,  0, 25, 15,  0, 10,  4,
	 0,  2,  1,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  1,  0,
	 6,  0,  2,  2,  2,  0,  0,
	 1,  0,  0,  1,  1,  4,  2,
	13,  1,  0,  2,  9,  8,  1,
	 0,  1,  5,  2,  2,  0,  1,
	 0,  2,  2,  7,  0,  8,  0,
	 0,  2,  0,  0,  0,  2,  0,
	 0,  1,  0,  2,  9,  0, 17,
	 5,  3, 11,  5,  0,  2,  9,
	 2,  2,  1,  1,  0,  0, 10,

	// 
	 4,  0,  2,  7,  0,  0,  0,		// <-- today?
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,

	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,

	// 
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,
	 0,  0,  0,  0,  0,  0,  0,


];
// console.log('Contribution data:',contributiondata);




// Define default contribution data. 
contributiondata = [];

