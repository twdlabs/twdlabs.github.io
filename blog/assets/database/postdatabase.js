


// Define metadata for list of blog post data. 
const blogListMetaData = {
	title:{
		label:'Post Title',
		visible:true,
	},
	postid:{
		label:'Post ID',
		visible:true,
	},
	authorid:{
		label:'Author ID',
		visible:true,
	},
	imgurl:{
		label:'Image URL',
		visible:false,
	},
	fullimageurl:{
		label:'Full Image URL',
		visible:false,
	},
	thumbnailurl:{
		label:'Thumbnail Image URL',
		visible:false,
	},
	vidurl:{
		label:'Video URL',
		visible:false,
	},
	content:{
		label:'Content',
		visible:true,
	},
	published:{
		label:'Published',
		visible:true,
	},
};

// Define list of blog post data. 
const blogDataList = [

	// {
	// 	title:'Post Title',
	// 	postid:'posttag',
	// 	authorid:'authortag',
	// 	imgurl:'./../resources/images/scenery/xyz.jpg',
	// 	fullimageurl:'./../resources/images/scenery/xyz.jpg',
	// 	thumbnailurl:'./../resources/images/scenery/thumbnail/xyz.jpg',
	// 	vidurl:'./../resources/videos/xyz.mp4',
	// 	content:[],
	// 	published:{
	// 		year:9999,
	// 		month:99,
	// 		date:99,
	// 	},
	// 	keywords:[
	// 		'xyz',
	// 		'',
	// 	],
	// },

	{
		title:'Beach Life',
		postid:'beach',
		authorid:'aventura',
		imgurl:'./../resources/images/scenery/fd21366fc13ca502751ebb8f7d18f2dd.jpg',
		fullimageurl:'./../resources/images/scenery/fd21366fc13ca502751ebb8f7d18f2dd.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/fd21366fc13ca502751ebb8f7d18f2dd.jpg',
		vidurl:'./../resources/videos/2231485.mp4',
		content:[],
		published:{
			year:2023,
			month:1,
			date:31,
		},
		keywords:[
			'beach',
			'water',
			'sky',
			'',
		],
	},
	{
		title:'Metropolis',
		postid:'metropolis',
		authorid:'irobertson',
		imgurl:'./../resources/images/scenery/b.jpeg',
		fullimageurl:'./../resources/images/scenery/b.jpeg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/b.jpeg',
		vidurl:'./../resources/videos/1436812.mp4',
		content:[],
		published:{
			year:2023,
			month:1,
			date:31,
		},
		keywords:[
			'city',
			'trees',
			'streets',
			'',
		],
	},
	{
		title:'Green',
		postid:'green',
		authorid:'jjenkins',
		imgurl:'./../resources/images/scenery/2.jpg',
		fullimageurl:'./../resources/images/scenery/2.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/2.jpg',
		vidurl:'./../resources/videos/0000002.mp4',
		content:[],
		published:{
			year:2023,
			month:2,
			date:31,
		},
		keywords:[
			'water',
			'mountain',
			'sky',
			'',
		],
	},
	{
		title:'City Life',
		postid:'citylife',
		authorid:'rroy',
		imgurl:'./../resources/images/city/city.jpg',
		fullimageurl:'./../resources/images/city/city.jpg',
		thumbnailurl:'./../resources/images/city/thumbnail/city.jpg',
		vidurl:'./../resources/videos/1654216.mp4',
		vidurl:'./../resources/videos/2818546.mp4',
		content:[],
		published:{
			year:2023,
			month:2,
			date:31,
		},
		keywords:[
			'city',
			'trees',
			'buildings',
			'streets',
			'',
		],
	},
	{
		title:'Island City',
		postid:'islandcity',
		authorid:'xtoven',
		imgurl:'./../resources/images/scenery/1.jpg',
		fullimageurl:'./../resources/images/scenery/1.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/1.jpg',
		vidurl:'./../resources/videos/1436812.mp4',
		content:[],
		published:{
			year:2023,
			month:3,
			date:31,
		},
		keywords:[
			'city',
			'water',
			'',
		],
	},
	{
		title:'Brown Office',
		postid:'brownoffice',
		authorid:'aventura',
		imgurl:'./../resources/images/desk/Squarespace+Learning+-+Forum+Banner.jpg',
		fullimageurl:'./../resources/images/desk/Squarespace+Learning+-+Forum+Banner.jpg',
		thumbnailurl:'./../resources/images/desk/thumbnail/Squarespace+Learning+-+Forum+Banner.jpg',
		vidurl:'./../resources/videos/0000001.mp4',
		content:[],
		published:{
			year:2023,
			month:3,
			date:31,
		},
		keywords:[
			'device',
			'desk',
			'',
		],
	},
	{
		title:'City Buildings',
		postid:'citybuildings',
		authorid:'qdoe',
		imgurl:'./../resources/images/city/Dubai.jpg',
		fullimageurl:'./../resources/images/city/Dubai.jpg',
		thumbnailurl:'./../resources/images/city/thumbnail/Dubai.jpg',
		vidurl:'./../resources/videos/1654216.mp4',
		content:[],
		published:{
			year:2023,
			month:4,
			date:31,
		},
		keywords:[
			'sky',
			'city',
			'buildings',
			'',
		],
	},
	{
		title:'Warm Color Terrain',
		postid:'warm',
		authorid:'aventura',
		imgurl:'./../resources/images/scenery/2 2.jpg',
		fullimageurl:'./../resources/images/scenery/2 2.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/2 2.jpg',
		vidurl:'./../resources/videos/1583096.mp4',
		content:[],
		published:{
			year:2023,
			month:4,
			date:31,
		},
		keywords:[
			'mountain',
			'',
		],
	},
	{
		title:'Scenery',
		postid:'scenery',
		authorid:'jjenkins',
		imgurl:'./../resources/images/scenery/np3.jpg',
		fullimageurl:'./../resources/images/scenery/np3.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/np3.jpg',
		vidurl:'./../resources/videos/2231485.mp4',
		content:[],
		published:{
			year:2023,
			month:5,
			date:31,
		},
		keywords:[
			'beach',
			'mountain',
			'water',
			'sky',
			'',
		],
	},
	{
		title:'Park',
		postid:'park',
		authorid:'aventura',
		imgurl:'./../resources/images/scenery/3.jpg',
		fullimageurl:'./../resources/images/scenery/3.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/3.jpg',
		vidurl:'./../resources/videos/0000002.mp4',
		content:[],
		published:{
			year:2023,
			month:5,
			date:31,
		},
		keywords:[
			'dog',
			'grass',
			'park',
			'',
		],
	},
	{
		title:'Real Estate',
		postid:'reast',
		authorid:'irobertson',
		imgurl:'./../resources/images/scenery/a.jpg',
		fullimageurl:'./../resources/images/scenery/a.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/a.jpg',
		vidurl:'./../resources/videos/1644693.mp4',
		content:[],
		published:{
			year:2023,
			month:6,
			date:31,
		},
		keywords:[
			'buildings',
			'water',
			'sky',
			'grass',
			'',
		],
	},
	{
		title:'Matrix',
		postid:'matrix',
		authorid:'kcroix',
		imgurl:'./../resources/images/code/code.jpg',
		fullimageurl:'./../resources/images/code/code.jpg',
		thumbnailurl:'./../resources/images/code/thumbnail/code.jpg',
		vidurl:'./../resources/videos/1654216.mp4',
		content:[],
		published:{
			year:2023,
			month:6,
			date:31,
		},
		keywords:[
			'code',
			'',
		],
	},
	{
		title:'Island Life',
		postid:'island',
		authorid:'aventura',
		imgurl:'./../resources/images/scenery/ze0NeqF.jpg',
		fullimageurl:'./../resources/images/scenery/ze0NeqF.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/ze0NeqF.jpg',
		vidurl:'./../resources/videos/2231485.mp4',
		content:[],
		published:{
			year:2023,
			month:7,
			date:31,
		},
		keywords:[
			'beach',
			'mountain',
			'water',
			'sky',
			'trees',
			'',
		],
	},
	{
		title:'Sky Light',
		postid:'skylight',
		authorid:'ejah',
		imgurl:'./../resources/images/sky/wallpapersden.com_starry-sky-night-purple_1920x1200.jpg',
		fullimageurl:'./../resources/images/sky/wallpapersden.com_starry-sky-night-purple_1920x1200.jpg',
		thumbnailurl:'./../resources/images/sky/thumbnail/wallpapersden.com_starry-sky-night-purple_1920x1200.jpg',
		vidurl:'./../resources/videos/1654216.mp4',
		content:[],
		published:{
			year:2023,
			month:7,
			date:31,
		},
		keywords:[
			'sky',
			'stars',
			'',
		],
	},
	{
		title:'Water Life',
		postid:'waterlife',
		authorid:'ddoe',
		imgurl:'./../resources/images/scenery/Navagio.jpg',
		fullimageurl:'./../resources/images/scenery/Navagio.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/Navagio.jpg',
		vidurl:'./../resources/videos/2231485.mp4',
		content:[],
		published:{
			year:2023,
			month:8,
			date:31,
		},
		keywords:[
			'beach',
			'mountain',
			'water',
			'sky',
			'',
		],
	},
	{
		title:'Device Work',
		postid:'devicework',
		authorid:'mmyers',
		imgurl:'./../resources/images/desk/devicework.jpg',
		fullimageurl:'./../resources/images/desk/devicework.jpg',
		thumbnailurl:'./../resources/images/desk/thumbnail/devicework.jpg',
		vidurl:'./../resources/videos/0000001.mp4',
		content:[],
		published:{
			year:2022,
			month:8,
			date:31,
		},
		keywords:[
			'device',
			'hands',
			'suit',
			'',
		],
	},

];
// console.log('Blog data list:',blogDataList);


/*****/


// Sort list of blog posts chronologically. 
// console.log('Blog post list (unsorted):', blogDataList.map(x=>x.postid) );
blogDataList.sort( sortPosts );
// console.log('Blog post list (sorted by date):', blogDataList.map(x=>x.postid) );


/*****/


// Get post by id. 
function getPostById(querypostid) {

	// Go thru blog post data items. 
	for(let postitem of blogDataList) {

		// Check if match found. 
		let matchFound = (postitem.postid==querypostid);

		// Return post item if found. 
		if(matchFound) return postitem;
	}

	// Return nothing if not found. 
	return null;
}

// Define sort function by publish date. 
function sortPosts(a,b) {

	// Initialize result. 
	let result = 0;

	// 
	let pA = a.published;
	let pB = b.published;

	// Add year differential. 
	result += 366 * (pB.year-pA.year);

	// Add month differential. 
	result += 31 * (pB.month-pA.month);

	// Add date differential. 
	result += (pB.date-pA.date);

	// Return result. 
	return result;
}
