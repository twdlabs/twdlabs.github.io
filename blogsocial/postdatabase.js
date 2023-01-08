


// 
const storyPostData = [

	{
		title:'Xyz Title',
		authorid:'xdoe',
		createdAt:0,
	},

	{
		title:'Xyz Title',
		authorid:'xdoe',
		createdAt:0,
	},

	{
		title:'Xyz Title',
		authorid:'xdoe',
		createdAt:0,
	},

	{
		title:'Xyz Title',
		authorid:'xdoe',
		createdAt:0,
	},

	{
		title:'Xyz Title',
		authorid:'xdoe',
		createdAt:0,
	},

	{
		title:'Xyz Title',
		authorid:'xdoe',
		createdAt:0,
	},

	{
		title:'Xyz Title',
		authorid:'xdoe',
		createdAt:0,
	},

];


/*****/


// Add additional data to story posts. 
addAdditionalStoryData();


/*****/


// Add additional data to story posts. 
function addAdditionalStoryData() {
	
	// Get early date. 
	let t0 = new Date('2022-01-01').valueOf();
	console.log('t0:',t0);
	
	// Get late date. 
	let t1 = Date.now();
	console.log('t1:',t1);

	// Go thru all post data items. 
	for(let post of storyPostData) {
		post.createdAt = getRandomNumberBetween(t0,t1);
	}

	/****/

	// Get random integer between two given boundary integers. 
	function getRandomNumberBetween(a,b) {

		// Get difference between numbers. 
		let diff = b - a;

		// 
		return Math.floor( (Math.random()*diff) + a );
	}
}
