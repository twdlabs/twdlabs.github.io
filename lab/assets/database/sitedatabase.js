


// Define general site data. 
let siteData = {
	sitename:'TWD',
	sitename:'TWDLabs',
	headline:'Lab Experiments',
	tagline:'Practical applications of abstract ideas to make work life easier, using mathematics, statistics, and best practice design principles.',
};


/*****/


// Get destinations for site name. 
let sitenamedestinations = [
	// Get destination for site name at header. 
	document.querySelector('div#container header.navbar div.bin a.brand span.caption'),
	// Get destination for site name at footer. 
	document.querySelector('div#container footer.footer div.grid div.brand div.trademark h1.head span.caption'),
];

// Get destination for hero headline. 
let headlinedestination = document.querySelector('div#container section.hero div.grid div.col h1.head span.caption');

// Get destinations for tagline. 
let taglinedestinations = [
	// Get destination for hero tagline. 
	document.querySelector('div#container section.hero div.grid div.col p.textcopy span.caption'),
	// Get destination for footer tagline. 
	document.querySelector('div#container footer.footer div.grid div.brand div.trademark p.textcopy span.caption'),
	// Get destination for xyz tagline. 
	// document.querySelector('xyz'),
];


/*****/


// Load general site data. 
loadSiteData();


/*****/


// Load general site data. 
function loadSiteData() {

	// Load site name. 
	for(let destination of sitenamedestinations) {

		// Load site name if valid destination available. 
		if(destination) destination.innerHTML = siteData.sitename;
	}

	// Load hero headline. 
	if(headlinedestination) headlinedestination.innerHTML = siteData.headline;

	// Load tagline. 
	for(let destination of taglinedestinations) {

		// Load tagline if valid destination available. 
		if(destination) destination.innerHTML = siteData.tagline;
	}
}
