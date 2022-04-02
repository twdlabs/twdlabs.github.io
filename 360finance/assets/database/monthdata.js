

// Define month labels. 
const monthNames = [ 
	'Jan','Feb','Mar', 
	'Apr','May','Jun', 
	'Jul','Aug','Sep', 
	'Oct','Nov','Dec' 
];
// console.log('monthNames:',monthNames);

// Define full month labels. 
const monthFullNames = [ 
	'January','February','March', 
	'April','May','June', 
	'July','August','September', 
	'October','November','December' 
];
// console.log('monthFullNames:',monthFullNames);


// Define month initials. 
const monthInitials = monthFullNames.map( (name)=>(name.charAt(0)) );
// console.log('monthInitials:',monthInitials);
