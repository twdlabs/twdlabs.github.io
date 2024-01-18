

// Get relative url for given link url. 
function getRelativeUrl(url) {

	// Initialize link prefix. 
	let prefix = './';

	// Initialize tracker for current page level. 
	let currentlevel = projectPageLevel;

	// Compile link prefix. 
	while(currentlevel > 0) {

		// Add parent jumper to url prefix. 
		prefix += '../';

		// Decrement current level. 
		currentlevel -= 1;
	}

	// Return relative url. 
	return (prefix + url);
}
