


// Get media source. 
// const mediasourcelist = galleryMediaData;
let mediasourcelist = blogDataList;

// Define data for each slide row. 
const mediadatamatrix = [
];
// Define data for each slide row. 
const samplemediadatamatrix = [
	{
		rowtitle:'Genre Category A',
		rowtitle:'Category A',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category B',
		rowtitle:'Category B',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category C',
		rowtitle:'Category C',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category D',
		rowtitle:'Category D',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category E',
		rowtitle:'Category E',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category F',
		rowtitle:'Category F',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category G',
		rowtitle:'Category G',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category H',
		rowtitle:'Category H',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category I',
		rowtitle:'Category I',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
	{
		rowtitle:'Genre Category J',
		rowtitle:'Category J',
		mediaindexlist:[],
		mediasourcelist:/* tossItIn */(mediasourcelist),
	},
];


// Select project library as data source. 
// selectProjectLibrary();


// Select project library as data source (by category). 
function selectProjectLibrary() {

	// Go thru each category in library. 
	for( let category of projectCategoryData ) {

		// Initialize list of projects for given category. 
		let projectlist = [];

		// Go thru each project in category. 
		for( let projectid of category['groupitemsidlist'] ) {

			// Get data for current project. 
			let projectdata = getProjectById(projectid);

			// Get image from gallery. 
			// let randomimage = getRandomImage();
			// console.log('randomimage:',randomimage);

			// Add data of current project to list. 
			projectlist.push( {
				// pid:projectid,
				title: projectdata ? projectdata['projectname'] : '[Undefined Project]',
				// thumbnailurl: randomimage['thumbnailurl'],
				thumbnailurl: getRandomImage()['thumbnailurl'],
			} );
		}

		// 
		mediadatamatrix.push( {
			rowicon:category['groupicontag'],
			rowtitle:category['groupname'],
			mediasourcelist:projectlist,
		} );
	}

	// Choose random image from gallery. 
	function getRandomImage() {

		// Get number of images in gallery. 
		let imagecount = galleryMediaData.length;
		// console.log('imagecount:',imagecount);

		// Get random number. 
		let r = Math.random();
		// console.log('r:',r);

		// Get random index from gallery image list. 
		let randomindex = Math.floor( r * imagecount );
		// console.log('randomindex:',randomindex);

		// Get random image from gallery. 
		return galleryMediaData[randomindex];
	}

	// // Go thru each collection. 
	// for( let collection of projectCollectionData ) {

	// 	// 
	// 	mediadatamatrix.push( {
	// 		rowicon:collection['groupicontag'],
	// 		rowtitle:collection['groupname'],
	// 		mediasourcelist:[],
	// 	} );

	// 	// Go thru each category. 
	// 	for( let category of xyz ) {

	// 		// 

	// 		// Go thru each projects. 
	// 		for( let project of xyz ) {

	// 			// 
	// 		}
	// 	}
	// }
}


// Define index of selected show episode. 
let selectedepisodeindex = 0;

// Define data for show episodes. 
const episodeData = [
	{
		title:'Episode Title A',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis aspernatur eaque totam asperiores.',
		duration:3
	},
	{
		title:'Episode Title B',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis aspernatur eaque totam asperiores.',
		duration:30
	},
	{
		title:'Episode Title C',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis aspernatur eaque totam asperiores.',
		duration:30
	},
	{
		title:'Episode Title D',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis aspernatur eaque totam asperiores.',
		duration:30
	},
	{
		title:'Episode Title E',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis aspernatur eaque totam asperiores.',
		duration:30
	},
	{
		title:'Episode Title F',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis aspernatur eaque totam asperiores.',
		duration:30
	},
	{
		title:'Episode Title G',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis aspernatur eaque totam asperiores.',
		duration:30
	},
	{
		title:'Episode Title H',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis aspernatur eaque totam asperiores.',
		duration:30
	},
];


// TODO: Toss it in from given list of media. 
function tossItIn(srcmedialist) {

	// 
	let newlength = getRandomIndex(srcmedialist.length);

	// 
	let newmedialist = [];
}
