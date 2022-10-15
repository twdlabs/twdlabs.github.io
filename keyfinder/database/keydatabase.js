


// Define semitone intervals for key types. 
const keyTypes = {
	
	// Major Key
	major:{
		indexes:[ 0,2,4,5, 7,9,11,12 ],
		// intervals:[ 0,2,2,1, 2,2,2,1 ],
	},
	
	// Natural Minor Key
	natMinor:{
		indexes:[ 0,2,3,5, 7,8,10,12 ],
		// intervals:[ 0,2,1,2, 2,1,2,2 ],
	},

	// Harmonic Minor Key
	hMinor:{
		indexes:[ 0,2,3,5, 7,8,11,12 ],
		// intervals:[ 0,2,1,2, 2,1,3,1 ],
	},
};


// Define key repository. 
const keyRepo = {

	// 
	majorIds:[
		'C','CD','D','DE','E','F',
		'FG','G','GA','A','AB','B',
	],
	// // 
	// minorIds:[
	// 	'A','AB','B','C','CD','D',
	// 	'DE','E','F','FG','G','GA',
	// ],

	// 
	cof:[
		// 'C','G','D','A','E','B',
		0, 7, 2, 9, 4, 11,
		// 'FG','CD','GA','DE','AB','F',
		6, 1, 8, 3, 10, 5,
	],

	// 
	keylist:[

		{
			keyid:'C',
			keyflatname:'C',
			keysharpname:'B#',
		},
		{
			keyid:'CD',
			keyflatname:'Db',
			keysharpname:'C#',
		},
		{
			keyid:'D',
			keyflatname:'D',
			keysharpname:'D',
		},

		{
			keyid:'DE',
			keyflatname:'Eb',
			keysharpname:'D#',
		},
		{
			keyid:'E',
			keyflatname:'Fb',
			keysharpname:'E',
		},
		{
			keyid:'F',
			keyflatname:'F',
			keysharpname:'E#',
		},

		{
			keyid:'FG',
			keyflatname:'Gb',
			keysharpname:'F#',
		},
		{
			keyid:'G',
			keyflatname:'G',
			keysharpname:'G',
		},
		{
			keyid:'GA',
			keyflatname:'Ab',
			keysharpname:'G#',
		},

		{
			keyid:'A',
			keyflatname:'A',
			keysharpname:'A',
		},
		{
			keyid:'AB',
			keyflatname:'Bb',
			keysharpname:'A#',
		},
		{
			keyid:'B',
			keyflatname:'Cb',
			keysharpname:'B',
		},
		
	],
};


// Define key scale repository. 
const keyScaleRepo = [

	// Major key scales
	// {
	// 	scalename:'C Major',
	// 	scalekeys: [0,2,4,5, 7,9,11,0]
	// },
	// {
	// 	scalename:'G Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'D Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'A Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'E Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'B Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'FG Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'CD Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'GA Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'DE Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'AB Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },
	// {
	// 	scalename:'F Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0]
	// },

	// Natural minor key scales
	
	// Harmonic minor key scales

];


/*****/


// Create list of key scales. 
listAllKeyScales();


/*****/


// Define list of key scales. 
// Fill repository with all key (base/type) combinations. 
// (C Db D Eb E F Gb G Ab A Bb B) × (M Nm Hm). 
function listAllKeyScales() {

	// Go thru all keys (in order of circle of fifths). 
	for(let basekeyindex of keyRepo.cof) {

		// Initialize new key scale. 
		let keyid = keyRepo.keylist[basekeyindex].keyid;
		let newKeyScale = {
			scalename:`${keyid} Major`,
			scalekeys: []
		};
		
		// Go thru all scale keys. 
		for(let keyindex of keyTypes.major.indexes) {
			
			// Get key item. 
			let keyitem = keyRepo.keylist[keyindex%12];
			// console.log(keyindex,keyitem);
			// Get key id. 
			let keyid = keyitem.keyid;
			
			// Add new key scale to list. 
			newKeyScale.scalekeys.push( (basekeyindex+keyindex)%12 );
		}
		
		// 
		keyScaleRepo.push(newKeyScale);
	}
	// console.log('keyScaleRepo:',keyScaleRepo);
	
	/****/
	
	// Show key at given. 
	function showKeyAt(index) {
		return keyBases[index].rawname;
	}
	
	// Create list of key scales. 
	function createKeyScale(baseIndex) {
	
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
		// 
	}
}
