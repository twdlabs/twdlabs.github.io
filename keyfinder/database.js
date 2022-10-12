


// Define semitone intervals for key types. 
const keyTypes = {
	
	// Major Key
	keyMajor:{
		indexes:[ 0,2,4,5, 7,9,11,12 ],
		// intervals:[ 0,2,2,1, 2,2,2,1 ],
	},
	
	// Natural Minor Key
	keyNatMinor:{
		indexes:[ 0,2,3,5, 7,8,10,12 ],
		// intervals:[ 0,2,1,2, 2,1,2,2 ],
	},

	// Harmonic Minor Key
	keyHarmMinor:{
		indexes:[ 0,2,3,5, 7,8,11,12 ],
		// intervals:[ 0,2,1,2, 2,1,3,1 ],
	},
};


// Define key repository. 
const keyRepo = {
	// 
	raw:[
		'C','CD','D','DE','E',
		'F','FG','G','GA','A','AB','B',
	],
	flats:[
		'C','Db','D','Eb','Fb',
		'F','Gb','G','Ab','A','Bb','Cb',
	],
	sharps:[
		'C','C#','D','D#','E',
		'E#','F#','G','G#','A','A#','B',
	],
};


/*****/


// TODO: Origin: Create list for major key. 
function createMajorKeyList(baseIndex) {

	// Initialize key index. 
	let keyIndex = baseIndex;
	
	// Initialize result. 
	let result = `{ ${ showKeyAt(keyIndex) }`;
	
	// Add elements of key list. 
	for(let dst of keyTypes.keyMajor) {
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
		return keyBases[index].rawname;
	}
}
