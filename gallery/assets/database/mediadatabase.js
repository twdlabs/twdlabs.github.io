


// Initialize list of media tags. 
const galleryTagData = [];

// Define gallery media data (i.e. urls, tags). 
const galleryMediaData = [
	// {
	// 	authorid:'twd',
	// 	fullimageurl:'./../resources/images/xyz.jpg',
	// 	thumbnailurl:'./../resources/images/xyz.jpg',
	// 	taglist:[
	// 		'',
	// 	],
	// },
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/1.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/1.jpg',
		taglist:[
			'city',
			'grass',
			'water',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/2 2.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/2 2.jpg',
		taglist:[
			'mountain',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/2.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/2.jpg',
		taglist:[
			'water',
			'mountain',
			'sky',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/3.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/3.jpg',
		taglist:[
			'dog',
			'grass',
			'park',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/sky/1033200-starry-sky-background-1330x2000-for-ipad.jpg',
		thumbnailurl:'./../resources/images/sky/thumbnail/1033200-starry-sky-background-1330x2000-for-ipad.jpg',
		taglist:[
			'sky',
			'stars',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/a.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/a.jpg',
		taglist:[
			'buildings',
			'water',
			'sky',
			'grass',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/b.jpeg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/b.jpeg',
		taglist:[
			'city',
			'trees',
			'grass',
			'streets',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/city/city.jpg',
		thumbnailurl:'./../resources/images/city/thumbnail/city.jpg',
		taglist:[
			'city',
			'trees',
			'buildings',
			'streets',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/code/code.jpg',
		thumbnailurl:'./../resources/images/code/thumbnail/code.jpg',
		taglist:[
			'code',
			'screen',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/code/codecode.jpg',
		thumbnailurl:'./../resources/images/code/thumbnail/codecode.jpg',
		taglist:[
			'code',
			'screen',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/desk/devicework.jpg',
		thumbnailurl:'./../resources/images/desk/thumbnail/devicework.jpg',
		taglist:[
			'hands',
			'device',
			'desk',
			'screen',
			'suit',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/city/Dubai.jpg',
		thumbnailurl:'./../resources/images/city/thumbnail/Dubai.jpg',
		taglist:[
			'sky',
			'city',
			'buildings',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/city/city.png',
		thumbnailurl:'./../resources/images/city/thumbnail/city.png',
		taglist:[
			'city',
			'buildings',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/map/earthmap.jpg',
		thumbnailurl:'./../resources/images/map/thumbnail/earthmap.jpg',
		taglist:[
			'map',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/fd21366fc13ca502751ebb8f7d18f2dd.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/fd21366fc13ca502751ebb8f7d18f2dd.jpg',
		taglist:[
			'beach',
			'water',
			'sky',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/library.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/library.jpg',
		taglist:[
			'buildings',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/Navagio.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/Navagio.jpg',
		taglist:[
			'beach',
			'grass',
			'mountain',
			'water',
			'sky',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/NEWSLIDER21.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/NEWSLIDER21.jpg',
		taglist:[
			'trees',
			'sky',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/palmtreebeach.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/palmtreebeach.jpg',
		taglist:[
			'trees',
			'sky',
			'beach',
			'water',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/np3.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/np3.jpg',
		taglist:[
			'beach',
			'grass',
			'mountain',
			'water',
			'sky',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/desk/Squarespace+Learning+-+Forum+Banner.jpg',
		thumbnailurl:'./../resources/images/desk/thumbnail/Squarespace+Learning+-+Forum+Banner.jpg',
		taglist:[
			'device',
			'desk',
			'screen',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/sky/starry-sky-wallpaper-dark.jpg',
		thumbnailurl:'./../resources/images/sky/thumbnail/starry-sky-wallpaper-dark.jpg',
		taglist:[
			'sky',
			'stars',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/sky/wallpapersden.com_starry-sky-night-purple_1920x1200.jpg',
		thumbnailurl:'./../resources/images/sky/thumbnail/wallpapersden.com_starry-sky-night-purple_1920x1200.jpg',
		taglist:[
			'sky',
			'stars',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/scenery/ze0NeqF.jpg',
		thumbnailurl:'./../resources/images/scenery/thumbnail/ze0NeqF.jpg',
		taglist:[
			'beach',
			'mountain',
			'water',
			'sky',
			'trees',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/1.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/1.jpg',
		taglist:[
			'stock',
			'electronic',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/2.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/2.jpg',
		taglist:[
			'stock',
			'food',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/3.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/3.jpg',
		taglist:[
			'stock',
			'food',
			'fruit',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/4.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/4.jpg',
		taglist:[
			'stock',
			'food',
			'fruit',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/5.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/5.jpg',
		taglist:[
			'stock',
			'food',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/6.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/6.jpg',
		taglist:[
			'stock',
			'food',
			'fruit',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/7.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/7.jpg',
		taglist:[
			'stock',
			'electronic',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/8.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/8.jpg',
		taglist:[
			'stock',
			'pool',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/stock/9.jpg',
		thumbnailurl:'./../resources/images/stock/thumbnail/9.jpg',
		taglist:[
			'stock',
			'food',
			'fruit',
			'',
		],
	},
	{
		authorid:'twd',
		fullimageurl:'./../resources/images/map/worldmap.jpg',
		thumbnailurl:'./../resources/images/map/thumbnail/worldmap.jpg',
		taglist:[
			'map',
			'',
		],
	},
	// {
	// 	authorid:'wts',
	// 	fullimageurl:'./../wts/assets/media/wtslogo.jpg',
	// 	thumbnailurl:'./../wts/assets/media/wtslogo.jpg',
	// 	taglist:[
	// 		'logo',
	// 		'',
	// 	],
	// },
	// {
	// 	authorid:'wts',
	// 	fullimageurl:'./../wts/assets/media/ballcap.jpg',
	// 	thumbnailurl:'./../wts/assets/media/ballcap.jpg',
	// 	taglist:[
	// 		'cap',
	// 		'',
	// 	],
	// },
	// {
	// 	authorid:'wts',
	// 	fullimageurl:'./../wts/assets/media/streetshooter.jpg',
	// 	thumbnailurl:'./../wts/assets/media/streetshooter.jpg',
	// 	taglist:[
	// 		'person',
	// 		'streets',
	// 		'',
	// 	],
	// },
	// {
	// 	authorid:'wts',
	// 	fullimageurl:'./../wts/assets/media/screenwatcher.jpg',
	// 	thumbnailurl:'./../wts/assets/media/screenwatcher.jpg',
	// 	taglist:[
	// 		'person',
	// 		'screen',
	// 		'',
	// 	],
	// },
];
