


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



// Define key indexes for circle of fifths (for major and minor keys). 
const cofList = [

	// Major Keys: 'C','G','D','A','E','B','FG','CD','GA','DE','AB','F',
	// Minor Keys: 'A','E','B','FG','CD','GA','DE','AB','F','C','G','D',

	{
		// C Am
		majorkeyindex:0,
		minorkeyindex:9,
		keynametype:'keysharpname'
	},

	{
		// G Em
		majorkeyindex:7,
		minorkeyindex:4,
		keynametype:'keysharpname'
	},
	{
		// D Bm
		majorkeyindex:2,
		minorkeyindex:11,
		keynametype:'keysharpname'
	},
	{
		// A FGm
		majorkeyindex:9,
		minorkeyindex:6,
		keynametype:'keysharpname'
	},
	{
		// E CDm
		majorkeyindex:4,
		minorkeyindex:1,
		keynametype:'keysharpname'
	},
	{
		// B GAm
		majorkeyindex:11,
		minorkeyindex:8,
		keynametype:'keysharpname'
	},
	// {
	// 	// FG DEm
	// 	majorkeyindex:6,
	// 	minorkeyindex:3,
	// 	keynametype:'keysharpname'
	// },

	{
		// FG DEm
		majorkeyindex:6,
		minorkeyindex:3,
		keynametype:'keyflatname'
	},
	{
		// CD ABm
		majorkeyindex:1,
		minorkeyindex:10,
		keynametype:'keyflatname'
	},
	{
		// GA Fm
		majorkeyindex:8,
		minorkeyindex:5,
		keynametype:'keyflatname'
	},
	{
		// DE Cm
		majorkeyindex:3,
		minorkeyindex:0,
		keynametype:'keyflatname'
	},
	{
		// AB Gm
		majorkeyindex:10,
		minorkeyindex:7,
		keynametype:'keyflatname'
	},
	{
		// F Dm
		majorkeyindex:5,
		minorkeyindex:2,
		keynametype:'keyflatname'
	},

	// {
	// 	// C Am
	// 	majorkeyindex:0,
	// 	minorkeyindex:9,
	// 	keynametype:'keyflatname'
	// },
	
];


// Define list of key items. 
const keyList = [

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
	
];


// Define key scale repository. 
const keyScaleRepo = [

	// Major key scales
	// {
	// 	scalename:'C Major',
	// 	scalekeys: [0,2,4,5, 7,9,11,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'G Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'D Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'A Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'E Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'B Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'FG Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'CD Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'GA Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'DE Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'AB Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
	// },
	// {
	// 	scalename:'F Major',
	// 	scalekeys: [0,0,0,0, 0,0,0,0],
	// 	keynametype:'keynametype'
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

	// Get list of key indexes from list of key items. 
	let majorKeyBaseIndexList = getKeyIndexes( cofList );

	// Go thru all keys (in 'circle of fifths' major order). 
	for(let majorKeyBaseIndex of majorKeyBaseIndexList) {

		// Get key id for base major key. 
		let majorKeyId = keyList[majorKeyBaseIndex].keyid;

		// Create new major scale. 
		let newMajorScale = {
			scalename:`${majorKeyId} Major`,
			scalekeys: fillScaleKeys( majorKeyBaseIndex, keyTypes.major.indexes ),
			// keynametype:xyz.keynametype
		};
		// Save major scale to list. 
		keyScaleRepo.push(newMajorScale);
	}

	// Get list of key indexes from list of key items. 
	let minorKeyBaseIndexList = getKeyIndexes( cofList );

	// Go thru all keys (in 'circle of fifths' minor order). 
	for(let minorKeyBaseIndex of minorKeyBaseIndexList) {

		// Get key id for base minor key. 
		let minorKeyId = keyList[minorKeyBaseIndex].keyid;

		// Create new natural minor scale. 
		let newMinorScale = {
			scalename:`${minorKeyId} Minor`,
			scalekeys: fillScaleKeys( minorKeyBaseIndex, keyTypes.natMinor.indexes ),
			// keynametype:xyz.keynametype
		};
		// Save natural minor scale to list. 
		keyScaleRepo.push(newMinorScale);

		// Create new harmonic minor scale. 
		let newHMinorScale = {
			scalename:`${minorKeyId} H-Minor`,
			scalekeys: fillScaleKeys( minorKeyBaseIndex, keyTypes.hMinor.indexes ),
			// keynametype:xyz.keynametype
		};
		// Save harmonic minor scale to list. 
		keyScaleRepo.push(newHMinorScale);
	}

	// console.log('keyScaleRepo:',keyScaleRepo);
	
	/****/

	// Get list of key indexes from list of key items. 
	function getKeyIndexes(itemlist) {
		// Map list to get subsidiary indexes from key items. 
		return itemlist.map( (item) => (item.majorkeyindex) );
	}

	// Fill keys for given scale. 
	function fillScaleKeys(basekeyindex, keytypeindexes) {

		// Initialize resulting list. 
		let result = [];

		// Fill list with key indexes for given scale. 
		for(let keyindex of keytypeindexes) {
			// Add to list: index for new key scale. 
			result.push( (basekeyindex+keyindex)%12 );
		}

		// Return resulting list. 
		return result;
	}
}
