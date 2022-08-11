

// Define slide data. 
const slideData = [
	{
		caption:'a',
		imageurl:'images/img_5terre.jpg'
	},
	{
		caption:'b',
		imageurl:'images/img_mountains.jpg'
	},
	{
		caption:'c',
		imageurl:'images/img_snow.jpg'
	},
	{
		caption:'d',
		imageurl:'images/img_lights.jpg'
	},
];


/*****/


// Load initial slide data. 
loadSlideData();


/*****/


// Load initial slide data. 
function loadSlideData() {

	// Initialize result. 
	let result = '';

	// Add slides. 
	for(i in slideData) {
		// console.log(i);
		result += `
		<!-- img -->
		<img src="${ slideData[i].imageurl }" alt="${ slideData[i].caption }">
		<!-- /img -->`;
	}

	// Add extra copy of first slide (for smooth transition from last back to first slide). 
	result += `
	<!-- img -->
	<img src="${ slideData[0].imageurl }" alt="${ slideData[0].caption }">
	<!-- /img -->`;

	// Add result to page. 
	document.getElementById('slideinner').innerHTML = result;
}
