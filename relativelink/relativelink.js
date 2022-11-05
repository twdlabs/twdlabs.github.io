

// Get relative url for given link url. 
function getRelativeUrl(url) {

	// Initialize page level tracker. 
	let level = currentPageLevel;

	// Initialize link prefix. 
	let prefix = '';

	// Create link prefix. 
	while(level > 0) {
		prefix += '../';
		level -= 1;
	}

	// Return relative url. 
	return (prefix + url);
}
