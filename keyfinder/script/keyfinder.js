



// Define key scale template. 
class KeyScale {

	// Create new key scale object. 
	constructor(i,scaleIntervals) {
		// this.intervals = scaleIntervals;
		this.tonicId = (i + scaleIntervals[0]) % 12;
		this.secondId = (i + scaleIntervals[1]) % 12;
		this.thirdId = (i + scaleIntervals[2]) % 12;
		this.fourthId = (i + scaleIntervals[3]) % 12;
		this.fifthId = (i + scaleIntervals[4]) % 12;
		this.sixthId = (i + scaleIntervals[5]) % 12;
		this.seventhId = (i + scaleIntervals[6]) % 12;
	}
	
	// Get key name of given scale interval. 
	getKey(intervalLabel) {
		// 
		if(intervalLabel==1) return keyRepo.raw[ this.tonicId ];
		else if(intervalLabel==2) return keyRepo.raw[ this.secondId ];
		else if(intervalLabel==3) return keyRepo.raw[ this.thirdId ];
		else if(intervalLabel==4) return keyRepo.raw[ this.fourthId ];
		else if(intervalLabel==5) return keyRepo.raw[ this.fifthId ];
		else if(intervalLabel==6) return keyRepo.raw[ this.sixthId ];
		else if(intervalLabel==7) return keyRepo.raw[ this.seventhId ];
		else return null;
	}
}



// Define key input template. 
class KeyInput {

	// Create new key input object. 
	constructor() {
		// 
	}
	
	// Check for match between key input and given scale. 
	checkIfMatchingScale(scale) {
		// 
	}
}



// Define key scale intervals. 
const intervals = {
	major: [0,2,4,5, 7,9,11,0],
	minor: [0,2,3,5, 7,8,10,0],
	hminor: [0,2,3,5, 7,8,11,0],
};



// Define major key scales. 
const cMajor = new KeyScale( 0, intervals.major );
const gMajor = new KeyScale( 7, intervals.major );
const dMajor = new KeyScale( 2, intervals.major );
const aMajor = new KeyScale( 9, intervals.major );
const eMajor = new KeyScale( 4, intervals.major );
const bMajor = new KeyScale( 11, intervals.major );
const fgMajor = new KeyScale( 6, intervals.major );
const cdMajor = new KeyScale( 1, intervals.major );
const gaMajor = new KeyScale( 8, intervals.major );
const deMajor = new KeyScale( 3, intervals.major );
const abMajor = new KeyScale( 10, intervals.major );
const fMajor = new KeyScale( 5, intervals.major );

// Define minor key scales. 
const aMinor = new KeyScale( 9, intervals.minor );
const eMinor = new KeyScale( 4, intervals.minor );
const bMinor = new KeyScale( 11, intervals.minor );
const fgMinor = new KeyScale( 6, intervals.minor );
const cdMinor = new KeyScale( 1, intervals.minor );
const gaMinor = new KeyScale( 8, intervals.minor );
const deMinor = new KeyScale( 3, intervals.minor );
const abMinor = new KeyScale( 10, intervals.minor );
const fMinor = new KeyScale( 5, intervals.minor );
const cMinor = new KeyScale( 0, intervals.minor );
const gMinor = new KeyScale( 7, intervals.minor );
const dMinor = new KeyScale( 2, intervals.minor );

// Define harmonic minor key scales. 
const aHarmMinor = new KeyScale( 9, intervals.hminor );
const eHarmMinor = new KeyScale( 4, intervals.hminor );
const bHarmMinor = new KeyScale( 11, intervals.hminor );
const fgHarmMinor = new KeyScale( 6, intervals.hminor );
const cdHarmMinor = new KeyScale( 1, intervals.hminor );
const gaHarmMinor = new KeyScale( 8, intervals.hminor );
const deHarmMinor = new KeyScale( 3, intervals.hminor );
const abHarmMinor = new KeyScale( 10, intervals.hminor );
const fHarmMinor = new KeyScale( 5, intervals.hminor );
const cHarmMinor = new KeyScale( 0, intervals.hminor );
const gHarmMinor = new KeyScale( 7, intervals.hminor );
const dHarmMinor = new KeyScale( 2, intervals.hminor );

