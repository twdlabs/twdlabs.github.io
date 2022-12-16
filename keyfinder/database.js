


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


// Define list of keys. 
const keyList = [

	{
		keyid:'C',
		keytype:'white c',
		keyflatname:'C',
		keysharpname:'C',
		// keysharpname:'B#',
	},
	{
		keyid:'CD',
		keytype:'black cd p1',
		keyflatname:'Db',
		keysharpname:'C#',
	},
	{
		keyid:'D',
		keytype:'white d',
		keyflatname:'D',
		keysharpname:'D',
	},

	{
		keyid:'DE',
		keytype:'black de p2',
		keyflatname:'Eb',
		keysharpname:'D#',
	},
	{
		keyid:'E',
		keytype:'white e',
		keyflatname:'E',
		keysharpname:'E',
		// keyflatname:'Fb',
	},
	{
		keyid:'F',
		keytype:'white f',
		keyflatname:'F',
		keysharpname:'F',
		// keysharpname:'E#',
	},

	{
		keyid:'FG',
		keytype:'black fg p4',
		keyflatname:'Gb',
		keysharpname:'F#',
	},
	{
		keyid:'G',
		keytype:'white g',
		keyflatname:'G',
		keysharpname:'G',
	},
	{
		keyid:'GA',
		keytype:'black ga p5',
		keyflatname:'Ab',
		keysharpname:'G#',
	},

	{
		keyid:'A',
		keytype:'white a',
		keyflatname:'A',
		keysharpname:'A',
	},
	{
		keyid:'AB',
		keytype:'black ab p6',
		keyflatname:'Bb',
		keysharpname:'A#',
	},
	{
		keyid:'B',
		keytype:'white b',
		keyflatname:'Cb',
		keysharpname:'B',
	},
	
];



// Define indexes for home keys (tonics) in circle of fifths (for major and minor keys). 
const cofList = [

	// Major Keys: 'C','G','D','A','E','B','FG','CD','GA','DE','AB','F',
	// Minor Keys: 'A','E','B','FG','CD','GA','DE','AB','F','C','G','D',

	{
		namingkey:'keysharpname',
		// Key: C
		majorkeytonicindex:0,
		// Key: Am
		minorkeytonicindex:9,
	},

	{
		namingkey:'keysharpname',
		// Key: G
		majorkeytonicindex:7,
		// Key: Em
		minorkeytonicindex:4,
	},
	{
		namingkey:'keysharpname',
		// Key: D
		majorkeytonicindex:2,
		// Key: Bm
		minorkeytonicindex:11,
	},
	{
		namingkey:'keysharpname',
		// Key: A
		majorkeytonicindex:9,
		// Key: FGm
		minorkeytonicindex:6,
	},
	{
		namingkey:'keysharpname',
		// Key: E
		majorkeytonicindex:4,
		// Key: CDm
		minorkeytonicindex:1,
	},
	{
		namingkey:'keysharpname',
		// Key: B
		majorkeytonicindex:11,
		// Key: GAm
		minorkeytonicindex:8,
	},

	// {
	// 	namingkey:'keysharpname',
	// 	// Key: FG
	// 	majorkeytonicindex:6,
	// 	// Key: DEm
	// 	minorkeytonicindex:3,
	// },
	{
		namingkey:'keyflatname',
		// Key: FG
		majorkeytonicindex:6,
		// Key: DEm
		minorkeytonicindex:3,
	},
	
	{
		namingkey:'keyflatname',
		// Key: CD
		majorkeytonicindex:1,
		// Key: ABm
		minorkeytonicindex:10,
	},
	{
		namingkey:'keyflatname',
		// Key: GA
		majorkeytonicindex:8,
		// Key: Fm
		minorkeytonicindex:5,
	},
	{
		namingkey:'keyflatname',
		// Key: DE
		majorkeytonicindex:3,
		// Key: Cm
		minorkeytonicindex:0,
	},
	{
		namingkey:'keyflatname',
		// Key: AB
		majorkeytonicindex:10,
		// Key: Gm
		minorkeytonicindex:7,
	},
	{
		namingkey:'keyflatname',
		// Key: F
		majorkeytonicindex:5,
		// Key: Dm
		minorkeytonicindex:2,
	},

	{
		namingkey:'keysharpname',
		// Key: C
		majorkeytonicindex:0,
		// Key: Am
		minorkeytonicindex:9,
	},
	
];


// Initialize list of all key scales. 
const scaleList = [
	

	// Major key scales

	// {
	// 	scalename:'C Major',
	// 	keyindexlist: [0,2,4,5, 7,9,11,0],
	// 	namingkey:'keyid',
	// },

	// {
	// 	scalename:'G Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keysharpname',
	// },
	// {
	// 	scalename:'D Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keysharpname',
	// },
	// {
	// 	scalename:'A Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keysharpname',
	// },
	// {
	// 	scalename:'E Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keysharpname',
	// },
	// {
	// 	scalename:'B Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keysharpname',
	// },

	// {
	// 	scalename:'FG Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keysharpname',
	// },
	// {
	// 	scalename:'FG Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keyflatname',
	// },

	// {
	// 	scalename:'CD Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keyflatname',
	// },
	// {
	// 	scalename:'GA Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keyflatname',
	// },
	// {
	// 	scalename:'DE Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keyflatname',
	// },
	// {
	// 	scalename:'AB Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keyflatname',
	// },
	// {
	// 	scalename:'F Major',
	// 	keyindexlist: [0,0,0,0, 0,0,0,0],
	// 	namingkey:'keyflatname',
	// },

	// {
	// 	scalename:'C Major',
	// 	keyindexlist: [0,2,4,5, 7,9,11,0],
	// 	namingkey:'keyid',
	// },


	// Natural minor key scales
	

	// Harmonic minor key scales

];


// Initialize list of indexes for matching key scales. 
let matchingScaleResults = [];



/*****/



// Create list of key scales. 
listAllKeyScales();



/*****/



// Define list of key scales. 
// Fill repository with all key (base/type) combinations. 
// (C Db D Eb E F Gb G Ab A Bb B) × (M Nm Hm). 
function listAllKeyScales() {

	// Get naming keys from 'circle of fifths' list. 
	let namingKeys = getNamingKeys( cofList );

	// Get major key indexes from 'circle of fifths' list. 
	let majorTonicIndexList = getTonicKeyIndexes( cofList, 'majorkeytonicindex' );
	// Get minor key indexes from 'circle of fifths' list. 
	let minorTonicIndexList = getTonicKeyIndexes( cofList, 'minorkeytonicindex' );
	
	// console.log('Scale list:',scaleList);

	// Add major scales. 
	addScales(majorTonicIndexList,'Major','major');

	// Add natural minor scales. 
	addScales(minorTonicIndexList,'Minor','natMinor');

	// Add harmonic minor scales. 
	addScales(minorTonicIndexList,'H-Minor','hMinor');

	// console.log('Scale list:',scaleList);
	
	/****/

	// Add scales. 
	function addScales(tonicIndexList,keyTypeName,keyTypeIndicator) {

		// Go thru all keys (in 'circle of fifths' order). 
		for(let i in tonicIndexList) {
	
			// Get index of tonic key. 
			let tonicKeyIndex = tonicIndexList[i];
			let namingkey = namingKeys[i];
	
			// Get key id for tonic key. 
			let tonicKey = keyList[tonicKeyIndex];
			let tonicKeyName = formatKeyName(tonicKey,namingkey);
	
			// Create new scale. 
			let newScale = {
				scalename: `${tonicKeyName} ${keyTypeName}`,
				keyindexlist: createKeyIndexList( tonicKeyIndex, keyTypeIndicator ),
				namingkey: namingKeys[i],
			};

			// Save new scale to list. 
			scaleList.push(newScale);
		}
	}

	// 
	function getNamingKeys(itemlist) {
		// 
		return itemlist.map( item => item.namingkey );
	}

	// Format key name. 
	function formatKeyName(keyitem,namingkey) {
		// 
		// return keyitem['keyid'];
		return keyitem[namingkey];
	}

	// Get list of key indexes from list of key items. 
	function getTonicKeyIndexes(itemlist,indexkey) {
		// indexkey = 'majorkeytonicindex' || 'minorkeytonicindex';

		// Map list to get subsidiary indexes from key items. 
		return itemlist.map( item => item[indexkey] );
	}

	// Fill keys for given scale. 
	function createKeyIndexList(basekeyindex, keytypeindicator) {
		let keytypeindexes = keyTypes[keytypeindicator].indexes;

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

