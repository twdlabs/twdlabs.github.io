


// Define data for development tools and methods. 
const methodData = [

	{
		icontag:'piechart',
		header:'Statistics',
		description:'Applying concepts of probability thoery descriptive statistics, and inferential statistics',
	},

	{
		icontag:'calculator',
		icontag:'keyboard',
		header:'Programming',
		description:'Using concepts of programming and applied mathematics to build models of the real world',
	},

	{
		icontag:'paintbrush',
		header:'Design',
		description:'Using best practice design principles to create aesthetic user interfaces and optimal user experiences',
	},

	{
		icontag:'bricks',
		header:'HTML',
		description:'Establishing hierarchichally arranged page structures and building layers with hypertext markup',
	},

	{
		icontag:'paintpalette',
		header:'CSS',
		description:'Decorating, smoothing transformations, and adding aesthetic beauty with cascading style sheets',
	},

	{
		icontag:'gear',
		header:'JavaScript',
		description:'Enabling dynamic page movements, and practical functionality with the engine of JavaScript',
	},
	
];


// Define primary projects by project id. 
const featuredProjectIdList = [
	'analogclock','autoslideshow','admin',
	'band','banner','bizmath','blockmenu','blog',
	'calendar','canvas','chat','chess','chooser','cluster','compound','crud',
	'desktop','device','dragndrop','gallery','keyfinder','lander','livesearch',
	'merch','musicplayer','pagination','pinyin','pixelart','pong',
	'resume','rolodex','storage','tasks','toastprogress',
	'univ','video','wts1',
	'100pure','360finance','3dnav',
	// 'xyz','xyz','xyz','xyz','xyz',
];
// console.log('Featured project ids:',featuredProjectIdList);


// Define sets of project groups in matrix. 
const projectGroupMatrixData = [
	['cl','jl','ssc',],
	['aw',],
	['fw','gw','mw',],
	['nw','ww','ld',],
	['ap','gp','dp',],
	['sac','ssd','sbs','sss','pbs','esp',/* 'eap', */],
];
console.log('Project group sets:',projectGroupMatrixData);


// Define groups of projects. 
const projectGroupData = [

	// {
	// 	groupid:'xyz',
	// 	groupname:'XyzGroupName',
	// 	groupicontag:'xyzabcxyz',
	// 	groupdescription:'This is currently serving as a sample group description.',
	// 	grouplist:[
	// 	],
	// },

	{
		groupid:'cl',
		groupname:'CSS Lessons',
		groupicontag:'paintpalette',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'anime',
			'aspectratio',
			'boxshadow',
			'clearfix',
			'cutout',
			'flex',
			'flexbreak',
			'format',
			'grid',
			'keyframes',
			'macbook',
			'maskimage',
			'overflow',
			'perspective',
			'scrollsnap',
			'smoothscroll',
			'timing',
			'zbar',
		],
	},
	{
		groupid:'jl',
		groupname:'JS Lessons',
		groupicontag:'gear',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'audio',
			'colorpicker',
			'cookie',
			'enter',
			'event',
			'filter',
			'keypress',
			'storage',
			'urlparams',
		],
	},
	{
		groupid:'sac',
		groupname:'Sample App Clones',
		groupicontag:'app',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'clubhouse',
			'iglive',
			'igprofile',
			'instagram',
			'voisey',
		],
	},

	{
		groupid:'ssc',
		groupname:'Sample Site Clones',
		groupicontag:'tv',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'10000cards',
			'apple',
			'application',
			'bodyshop',
			'jenna',
			'leads',
			'neuro67',
			'travel',
			'tropicalghana',
		],
	},
	{
		groupid:'ld',
		groupname:'Legacy Dashboards',
		groupicontag:'oldpc',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'chooser',
			'clone',
			'evolution',
			'fitness',
			'finance',
			'layouts',
			'math',
			'music',
			'probability',
			'reast',
			'stocks',
		],
	},

	{
		groupid:'aw',
		groupname:'App Widgets',
		groupicontag:'motherboard',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'analogclock',
			'bell',
			'blogtoggler',
			'bookmark',
			'calendar',
			'canvas',
			'chart',
			'clipboard',
			'clock',
			'contextmenu',
			'delta',
			'device',
			'floatmenu',
			'gitcalendar',
			'graph',
			'lightSwitch',
			'loader',
			'loading',
			'login',
			'message',
			'pagination',
			'rating',
			'rolodex',
			'stepprogress',
			'switcher',
			'tags',
			'tagslider',
			'throttle',
			'ticker',
			'time',
			'timeline',
			'timeline2',
			'toastprogress',
			'typer',
			'upload',
			'user',
			'user2',
			'valueslider',
			'viewport',
			'3dnav',
		],
	},

	{
		groupid:'fw',
		groupicontag:'pencileditor',
		groupname:'Form Widgets',
		groupicontag:'clipboard',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'charlimit',
			'checkout',
			'checkout2',
			'form3d',
			'input',
			'livesearch',
		],
	},
	{
		groupid:'gw',
		groupname:'Game Widgets',
		groupicontag:'joystick',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'3d',
			'animation',
			'blockmenu',
			'cardflipgallery3d',
			'carousel3d',
			'clockspinner',
			'cubecarousel',
			'desktop',
			'dragndrop',
			'dragndrop1',
			'flashlight',
			'gallerywalk',
			'gameboard',
			'hexagon',
			'minion',
			'orbit',
			'safari',
			'shape',
			'splash',
			'soundfx',
			'thermometer',
			'touch',
			'traffic',
			'trifold3d',
			'wordcube',
		],
	},
	{
		groupid:'mw',
		groupname:'Media Widgets',
		groupicontag:'mediacollection',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'autoslideshow',
			'gallery',
			'slideshow',
			'slideshow2',
			'video',
		],
	},

	{
		groupid:'nw',
		groupicontag:'dropmenu',
		groupname:'Navigation Widgets',
		groupicontag:'signpost',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'backToTop',
			'breadcrumbs',
			'dotnav',
			'hamburger',
			'megamenu',
		],
	},
	{
		groupid:'ww',
		groupname:'Website Widgets',
		groupicontag:'dpad',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'accordion',
			'accordion2',
			'banner',
			'big3dcard',
			'bounce',
			'buttonpress',
			'cardstacks',
			'collapsible',
			'contact',
			'contactform',
			'countdown',
			'hovercard',
			'image',
			'pricing',
			'profilecard',
			'retool',
			'scrollProgressBar',
			'skeleton',
			'testimonial',
			'typewriter',
			'vidbg',
			'wordswitcher',
		],
	},
	{
		groupid:'ap',
		groupname:'App Prototypes',
		groupicontag:'smartphone',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'bizmath',
			'blogsocial',
			'book',
			'calc',
			'calculator',
			'chat',
			'cluster1d',
			'cluster',
			'compound',
			'fam',
			'keyfinder',
			'laundry',
			'matrix',
			'musicplayer',
			'musicplaylist',
			'netflix',
			'pinyin',
			'podcast',
			'tasks',
			'typetest',
			'waves',
		],
	},

	{
		groupid:'dp',
		groupname:'Dashboard Prototypes',
		groupicontag:'speedometer',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'admin',
			'admin2',
			'cms',
			'crm',
			'crud',
			'crud2',
			'dotcollector',
			'grocery',
			'inventory',
		],
	},
	{
		groupid:'gp',
		groupname:'Game Prototypes',
		groupicontag:'gamepad',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'chess',
			'dice',
			'learner',
			'igt',
			'pixelart',
			'pong',
			'solarsystem',
		],
	},
	{
		groupid:'ssd',
		groupname:'Sample Site Designs',
		groupicontag:'paintbrush',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'angeldemon',
			'comingsoon',
			'cis255',
			'hero2',
		],
	},

	{
		groupid:'sbs',
		groupname:'Sample Branding Sites',
		groupicontag:'tv',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'band',
			'blog',
			'books',
			'univ',
		],
	},
	{
		groupid:'sss',
		groupicontag:'receipt',
		groupname:'Sample Sales Sites',
		groupicontag:'money',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'land',
			'lander',
			'merch',
		],
	},
	{
		groupid:'pbs',
		groupname:'Personal Brand Sites',
		groupicontag:'person',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'atg',
			'hero',
			'resume',
			'linktree',
		],
	},
	
	{
		groupid:'esp',
		groupname:'External Site Projects',
		groupicontag:'door',
		groupdescription:'This is currently serving as a sample group description.',
		grouplist:[
			'cali',
			'caliB',
			'carnell',
			'carnell2',
			'chadpiff',
			'mandorespect',
			'smosa',
			'superforg',
			'unseenstrts',
			'wts1',
			'100pure',
	// 	],
	// },
	// {
	// 	groupid:'eap',
	// 	groupname:'External App Projects',
	// 	groupicontag:'xyzabcxyz',
	// 	groupdescription:'This is currently serving as a sample group description.',
	// 	grouplist:[
			'360finance',
		],
	},

];
console.log('Project groups:',projectGroupData);


// Define project data. 
const projectData = [
	

	// {
	// 	projectid:'xyz',
	// 	projectname:'XyzLinkName',
	// },
	

	{
		projectid:'accordion',
		projectname:'Sliding Accordion',
	},{
		projectid:'accordion2',
		projectname:'Sliding Accordion',
	},{
		projectid:'admin',
		projectname:'Admin Dashboard',
	},{
		projectid:'admin2',
		projectname:'Admin Dashboard',
	},{
		projectid:'analogclock',
		projectname:'Analog Clock',
	},{
		projectid:'angeldemon',
		projectname:'Sample Site Design',
	},{
		projectid:'animation',
		projectname:'Scroll Animation',
	},{
		projectid:'anime',
		projectname:'Square Animation',
	},{
		projectid:'apple',
		projectname:'E-Commerce',
	},{
		projectid:'application',
		projectname:'Application Site',
	},{
		projectid:'aspectratio',
		projectname:'Aspect Ratio',
	},{
		projectid:'atg',
		projectname:'Personal Brands',
	},{
		projectid:'audio',
		projectname:'Audio Player',
	},{
		projectid:'autoslideshow',
		projectname:'Automatic Slideshow',
	},
	
	{
		projectid:'backToTop',
		projectname:'Back To Top',
	},{
		projectid:'band',
		projectname:'Sample Band Site',
	},{
		projectid:'banner',
		projectname:'Scrolling Banner',
	},{
		projectid:'bell',
		projectname:'Notification Bell',
	},{
		projectid:'big3dcard',
		projectname:'Rotating Card (3D)',
	},{
		projectid:'bizmath',
		projectname:'Business Math',
	},{
		projectid:'blockmenu',
		projectname:'Block Menu',
	},{
		projectid:'blog',
		projectname:'Sample Blog Site',
	},{
		projectid:'blogsocial',
		projectname:'Social Blog',
	},{
		projectid:'blogtoggler',
		projectname:'Blog Toggler',
	},{
		projectid:'bodyshop',
		projectname:'Fitness Launch Site',
	},{
		projectid:'book',
		projectname:'Reading Book',
	},{
		projectid:'bookmark',
		projectname:'Bookmark Button',
	},{
		projectid:'books',
		projectname:'Sample Book List',
	},{
		projectid:'bounce',
		projectname:'Bouncing Arrow',
	},{
		projectid:'boxshadow',
		projectname:'Box Shadow',
	},{
		projectid:'breadcrumbs',
		projectname:'Navigation Breadcrumbs',
	},{
		projectid:'buttonpress',
		projectname:'Button Press',
	},
	
	{
		projectid:'calc',
		projectname:'Calculator',
	},{
		projectid:'calculator',
		projectname:'Calculator',
	},{
		projectid:'calendar',
		projectname:'Calendar',
	},{
		projectid:'cali',
		projectname:'CaliIsMe',
	},{
		projectid:'caliB',
		projectname:'CaliIsMe',
	},{
		projectid:'canvas',
		projectname:'Chart Canvas',
	},{
		projectid:'cardflipgallery3d',
		projectname:'Card Flip Gallery (3D)',
	},{
		projectid:'cardstacks',
		projectname:'Card Stacks',
	},{
		projectid:'carnell',
		projectname:'Carnell Tate',
	},{
		projectid:'carnell2',
		projectname:'Carnell Tate',
	},{
		projectid:'carousel3d',
		projectname:'Slide Carousel (3D)',
	},{
		projectid:'chadpiff',
		projectname:'Chad Piff',
	},{
		projectid:'charlimit',
		projectname:'Input Limiter',
	},{
		projectid:'chart',
		projectname:'Chart',
	},{
		projectid:'chat',
		projectname:'Chat Messenger',
	},{
		projectid:'checkout',
		projectname:'Checkout',
	},{
		projectid:'checkout2',
		projectname:'Checkout',
	},{
		projectid:'chess',
		projectname:'Chess',
	},{
		projectid:'cis255',
		projectname:'Coding Class',
	},{
		projectid:'clearfix',
		projectname:'Clear Fix',
	},{
		projectid:'clipboard',
		projectname:'Clipboard Copier',
	},{
		projectid:'clock',
		projectname:'Clock Counter',
	},{
		projectid:'clockspinner',
		projectname:'Clock Spinner',
	},{
		projectid:'clubhouse',
		projectname:'Clubhouse',
	},{
		projectid:'cluster1d',
		projectname:'K-Means Clustering',
	},{
		projectid:'cluster',
		projectname:'K-Means Clustering (2D)',
	},{
		projectid:'cms',
		projectname:'CMS',
	},{
		projectid:'collapsible',
		projectname:'Collapsible',
	},{
		projectid:'colorpicker',
		projectname:'Color Picker',
	},{
		projectid:'comingsoon',
		projectname:'Coming Soon Page',
	},{
		projectid:'compound',
		projectname:'Compound Interest',
	},{
		projectid:'contact',
		projectname:'Contact Form',
	},{
		projectid:'contactform',
		projectname:'Contact Form',
	},{
		projectid:'contextmenu',
		projectname:'Context Menu',
	},{
		projectid:'cookie',
		projectname:'Web Cookies',
	},{
		projectid:'countdown',
		projectname:'Countdown',
	},{
		projectid:'crm',
		projectname:'CRM',
	},{
		projectid:'crud',
		projectname:'CRUD Database Manager',
	},{
		projectid:'crud2',
		projectname:'CRUD Inventory Manager',
	},{
		projectid:'cubecarousel',
		projectname:'Morphing Cube',
	},{
		projectid:'cutout',
		projectname:'Text Cutout',
	},
	
	{
		projectid:'delta',
		projectname:'Number Delta Clicker',
	},{
		projectid:'desktop',
		projectname:'Draggable Element Arena',
	},{
		projectid:'device',
		projectname:'Devices',
	},{
		projectid:'dice',
		projectname:'Dice n Cards',
	},{
		projectid:'dotcollector',
		projectname:'Dalio Dot Collector',
	},{
		projectid:'dotnav',
		projectname:'Dot Navigation',
	},{
		projectid:'dragndrop',
		projectname:'Drag n Drop',
	},{
		projectid:'dragndrop1',
		projectname:'Drag n Drop',
	},
	
	{
		projectid:'enter',
		projectname:'Action on Enter',
	},{
		projectid:'event',
		projectname:'Event Listeners',
	},
	
	{
		projectid:'fam',
		projectname:'Family Tree Diagram',
	},{
		projectid:'filter',
		projectname:'List Filter',
	},{
		projectid:'flashlight',
		projectname:'Flashlight Page',
	},{
		projectid:'flex',
		projectname:'Flex Box',
	},{
		projectid:'flexbreak',
		projectname:'Flex Break',
	},{
		projectid:'floatmenu',
		projectname:'Floating Menu',
	},{
		projectid:'format',
		projectname:'Text Formatter',
	},{
		projectid:'form3d',
		projectname:'Lead Form (3D)',
	},
	
	{
		projectid:'gallery',
		projectname:'Image Gallery',
	},{
		projectid:'gallerywalk',
		projectname:'Moving Gallery (3D)',
	},{
		projectid:'gameboard',
		projectname:'Game Board',
	},{
		projectid:'gitcalendar',
		projectname:'Git Calendar',
	},{
		projectid:'graph',
		projectname:'Bar Graph',
	},{
		projectid:'grid',
		projectname:'CSS Grid',
	},{
		projectid:'grocery',
		projectname:'Grocery Manager',
	},
	
	{
		projectid:'hamburger',
		projectname:'Nav Toggler',
	},{
		projectid:'hero',
		projectname:'Hero Resume',
	},{
		projectid:'hero2',
		projectname:'Sample Hero Page',
	},{
		projectid:'hexagon',
		projectname:'Lit Hexagon',
	},{
		projectid:'hovercard',
		projectname:'Hover Cards (3D)',
	},
	
	{
		projectid:'iglive',
		projectname:'Instagram Live',
	},{
		projectid:'igprofile',
		projectname:'Instagram Profile',
	},{
		projectid:'igt',
		projectname:'Iowa Gambling Test',
	},{
		projectid:'image',
		projectname:'Image Modal',
	},{
		projectid:'input',
		projectname:'Input Counter',
	},{
		projectid:'instagram',
		projectname:'Instagram Feed',
	},{
		projectid:'inventory',
		projectname:'Inventory Manager',
	},

	{
		projectid:'jenna',
		projectname:'Fitness Launch Site',
	},
	
	{
		projectid:'keyfinder',
		projectname:'Piano Key Finder',
	},{
		projectid:'keyframes',
		projectname:'Key Frames',
	},{
		projectid:'keypress',
		projectname:'Key Press',
	},
	
	{
		projectid:'land',
		projectname:'Sample Landing Page',
	},{
		projectid:'lander',
		projectname:'Sample Landing Page',
	},{
		projectid:'laundry',
		projectname:'Laundry Timer',
	},{
		projectid:'leads',
		projectname:'Sample Lead Generator',
	},{
		projectid:'learner',
		projectname:'Learner Bug',
	},{
		projectid:'lightSwitch',
		projectname:'Light Switch',
	},{
		projectid:'linktree',
		projectname:'Link Tree',
	},{
		projectid:'livesearch',
		projectname:'Live Search',
	},{
		projectid:'loader',
		projectname:'Page Loader',
	},{
		projectid:'loading',
		projectname:'Page Loader',
	},{
		projectid:'login',
		projectname:'User Access',
	},
	
	{
		projectid:'macbook',
		projectname:'Macbook Animation',
	},{
		projectid:'mandorespect',
		projectname:'Mando Respect',
	},{
		projectid:'maskimage',
		projectname:'Image Masking',
	},{
		projectid:'matrix',
		projectname:'Matrix Operations',
	},{
		projectid:'megamenu',
		projectname:'Mega Menu',
	},{
		projectid:'merch',
		projectname:'Sample Merch Store',
	},{
		projectid:'message',
		projectname:'Text Messages',
	},{
		projectid:'minion',
		projectname:'Minion',
	},{
		projectid:'musicplayer',
		projectname:'Music Player',
	},{
		projectid:'musicplaylist',
		projectname:'Music Playlist',
	},
	
	{
		projectid:'netflix',
		projectname:'TV Show Site',
	},{
		projectid:'neuro67',
		projectname:'Neuro67',
	},
	
	{
		projectid:'orbit',
		projectname:'Orbiter',
	},{
		projectid:'overflow',
		projectname:'Overflow',
	},
	
	{
		projectid:'pagination',
		projectname:'Pagination',
	},{
		projectid:'perspective',
		projectname:'Perspective',
	},{
		projectid:'pinyin',
		projectname:'Pinyin Soundboard',
	},{
		projectid:'pixelart',
		projectname:'Pixel Art Generator',
	},{
		projectid:'podcast',
		projectname:'Podcast Site',
	},{
		projectid:'pong',
		projectname:'Awesome Pong',
	},{
		projectid:'pricing',
		projectname:'Price Packages',
	},{
		projectid:'profilecard',
		projectname:'Dynamic Profile Card',
	},
	
	{
		projectid:'resume',
		projectname:'Simple Resume',
	},{
		projectid:'retool',
		projectname:'Sliding Multi-Ticker',
	},{
		projectid:'rating',
		projectname:'Rating Bar',
	},{
		projectid:'rolodex',
		projectname:'Contact Rolodex',
	},
	
	{
		projectid:'safari',
		projectname:'Safari Compass',
	},{
		projectid:'scrollProgressBar',
		projectname:'Scroll Progress Bar',
	},{
		projectid:'scrollsnap',
		projectname:'Scroll Snap',
	},{
		projectid:'shape',
		projectname:'Rotating Shape',
	},{
		projectid:'skeleton',
		projectname:'Content Skeleton',
	},{
		projectid:'slideshow',
		projectname:'Manual Slideshow',
	},{
		projectid:'slideshow2',
		projectname:'Simple Slideshow',
	},{
		projectid:'smoothscroll',
		projectname:'Smooth Scroll',
	},{
		projectid:'smosa',
		projectname:'Smosa USA',
	},{
		projectid:'solarsystem',
		projectname:'Solar System',
	},{
		projectid:'soundfx',
		projectname:'Sound FX',
	},{
		projectid:'splash',
		projectname:'Splash Page',
	},{
		projectid:'stepprogress',
		projectname:'Step Progress Bar',
	},{
		projectid:'storage',
		projectname:'Local Storage',
	},{
		projectid:'superforg',
		projectname:'Superforg USA',
	},{
		projectid:'switcher',
		projectname:'Tab Switcher',
	},

	{
		projectid:'tags',
		projectname:'Tag Typer',
	},{
		projectid:'tagslider',
		projectname:'Tag Slider',
	},{
		projectid:'tasks',
		projectname:'Task Manager',
	},{
		projectid:'testimonial',
		projectname:'Testimonial Slider',
	},{
		projectid:'thermometer',
		projectname:'Thermometer',
	},{
		projectid:'throttle',
		projectname:'Input Controller',
	},{
		projectid:'ticker',
		projectname:'News Ticker',
	},{
		projectid:'time',
		projectname:'Time Calculator',
	},{
		projectid:'timeline',
		projectname:'Timeline',
	},{
		projectid:'timeline2',
		projectname:'Timeline',
	},{
		projectid:'timing',
		projectname:'Timing Functions',
	},{
		projectid:'toastprogress',
		projectname:'Toast Progress Bar',
	},{
		projectid:'touch',
		projectname:'Touch Sensor',
	},{
		projectid:'traffic',
		projectname:'Traffic Light',
	},{
		projectid:'travel',
		projectname:'Travel Site',
	},{
		projectid:'trifold3d',
		projectname:'Trifold Gallery (3D)',
	},{
		projectid:'tropicalghana',
		projectname:'Tropical Ghana',
	},{
		projectid:'typer',
		projectname:'Type Counter',
	},{
		projectid:'typetest',
		projectname:'Typing Test',
	},{
		projectid:'typewriter',
		projectname:'Counter Typewriter',
	},
	
	{
		projectid:'univ',
		projectname:'Sample University',
	},{
		projectid:'unseenstrts',
		projectname:'Unseen Streets',
	},{
		projectid:'upload',
		projectname:'Image Uploader',
	},{
		projectid:'urlparams',
		projectname:'URL Search Parameters',
	},{
		projectid:'user',
		projectname:'User Profile',
	},{
		projectid:'user2',
		projectname:'User Profile',
	},
	
	{
		projectid:'valueslider',
		projectname:'Value Slider',
	},{
		projectid:'vidbg',
		projectname:'Video Background',
	},{
		projectid:'video',
		projectname:'Video Gallery',
	},{
		projectid:'viewport',
		projectname:'Viewport Sizer',
	},{
		projectid:'voisey',
		projectname:'Voisey',
	},
	
	{
		projectid:'waves',
		projectname:'Wave Generator',
	},{
		projectid:'wordcube',
		projectname:'Word Cube',
	},{
		projectid:'wordswitcher',
		projectname:'Word Switcher',
	},{
		projectid:'wts1',
		projectname:'Watch The Screen',
	},
	
	{
		projectid:'zbar',
		projectname:'Z-Index Bar',
	},
	
	{
		projectid:'10000cards',
		projectname:'Social Profile',
	},{
		projectid:'100pure',
		projectname:'100% Pure Music',
	},{
		projectid:'360finance',
		projectname:'360 Finance',
	},{
		projectid:'3d',
		projectname:'Card Controller (3D)',
	},{
		projectid:'3dnav',
		projectname:'3D Navigation',
	},
	
	
	{
		projectid:'chooser',
		projectname:'Page Chooser',
	},{
		projectid:'clone',
		projectname:'App Clone Dashboard',
	},{
		projectid:'evolution',
		projectname:'Evolutionary Game Theory',
	},{
		projectid:'fitness',
		projectname:'Fitness Dashboard',
	},{
		projectid:'finance',
		projectname:'Finance Dashboard',
	},{
		projectid:'layouts',
		projectname:'Layout Dashboard',
	},{
		projectid:'math',
		projectname:'Math Dashboard',
	},{
		projectid:'music',
		projectname:'Music Dashboard',
	},{
		projectid:'probability',
		projectname:'Probability Dashboard',
	},{
		projectid:'reast',
		projectname:'Real Estate Dashboard',
	},{
		projectid:'stocks',
		projectname:'Stocks Dashboard',
	},
	
	
];
console.log('Projects:',projectData);


/*****/


/*****/


// Get project group by id. 
function getProjectGroupById(pgid) {

	// Go thru each project groups. 
	for(let projectgroup of projectGroupData) {

		// Check if project group matches query id. 
		let matchFound = (projectgroup.groupid == pgid);

		// Return matching project group if found. 
		if(matchFound) return projectgroup;
	}

	// Return nothing if project group not found. 
	return null;
}


// Get project by id. 
function getProjectById(pid) {

	// Go thru all projects. 
	for(let project of projectData) {

		// Check for match. 
		let matchFound = (project.projectid == pid);

		// Return match when found. 
		if(matchFound) return project;
	}

	// Return nothing if not found. 
	return null;
}
