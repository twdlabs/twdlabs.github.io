
// Input:
// - Known key components
// Output:
// - Potential key choices

// TODO: Create all combinations of key bases and key types: (C Db D Eb E F Gb G Ab A Bb B) × (M Nm Hm). 


// TODO: Create list for major key. 
function createMajorKeyList(baseIndex) {

	// Initialize key index. 
	let keyIndex = baseIndex;
	
	// Initialize result. 
	let result = `{ ${ showKeyAt(keyIndex) }`;
	
	// Add elements of key list. 
	for(let dst of semitoneIntervals.keyMajor) {
		keyIndex += dst;
		result += `, ${ showKeyAt(keyIndex) }`;
	}
	
	// End result. 
	result += ' }';
	
	// Return result. 
	return result;
	
	/*****/
	
	// Show key at given. 
	function showKeyAt(index) {
		return keyBases[index].raw;
	}
}
	
	