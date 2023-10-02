


// Define data for development tools and methods. 
const methodData = [

	{
		icontag:'piechart',
		header:'Statistics',
		description:'Applying concepts of probability thoery descriptive statistics, and inferential statistics',
	},

	{
		icontag:'keyboard',
		header:'Programming',
		description:'Using concepts of programming and applied mathematics to build models of the real world',
	},

	{
		icontag:'easel',
		header:'Design',
		description:'Using best practice design principles to create aesthetic user interfaces and optimal user experiences',
	},

	{
		icontag:'bricks',
		header:'HTML',
		description:'Establishing hierarchichally arranged page structures and building layers with hypertext markup',
	},

	{
		icontag:'paintbrush',
		header:'CSS',
		description:'Decorating, smoothing transformations, and adding aesthetic beauty with cascading style sheets',
	},

	{
		icontag:'gear',
		header:'JavaScript',
		description:'Enabling dynamic page movements, and practical functionality with the engine of JavaScript',
	},

	// {
	// 	icontag:'calculator',
	// 	header:'',
	// 	description:'',
	// },

	// {
	// 	icontag:'paintpalette',
	// 	header:'',
	// 	description:'',
	// },
	
];


// Define ids for featured projects. 
const featuredProjectIdList = [
	'admin','autoslideshow','analogclock','blog',
	'calendar','chat','cluster','compound','crud',
	'desktop','gallery','keyfinder','livesearch',
	'merch','musicplayer',/* 'pong', */'resume','rolodex',
	'toastprogress','univ','video',
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


// Define groups of groups of projects. 
const projectMetaGroupData = [
	{
		groupid:'l',
		groupname:'Lessons',
		groupicontag:'lightbulb',
		groupdescription:'Learning new concepts in web development',
		grouplist:[
			'cl','jl',
		],
	},
	{
		groupid:'c',
		groupname:'Clones',
		groupicontag:'copy',
		groupdescription:'Inspired heavily by designs of other sites',
		grouplist:[
			'ssc','sac',
		],
	},
	{
		groupid:'w',
		groupname:'Widgets',
		groupicontag:'motherboard',
		groupdescription:'Reusable sub-components for other projects',
		grouplist:[
			'aw','fw','gw','mw','nw','ww',
		],
	},
	{
		groupid:'p',
		groupname:'Prototypes',
		groupicontag:'smartphone',
		groupdescription:'Seeds of potential stand-alone applications',
		grouplist:[
			'ap','gp','dp','ld',
		],
	},
	{
		groupid:'s',
		groupname:'Sites',
		groupicontag:'tv',
		groupdescription:'Larger site projects created for other people',
		grouplist:[
			'ssd','sbs','sss','pbs','esp',/* 'eap', */
		],
	},
];
console.log('Project meta-groups:',projectMetaGroupData);


// Define groups of projects. 
const projectGroupData = [

	// {
	// 	groupid:'xyz',
	// 	groupname:'XyzName',
	// 	groupicontag:'xyzabcxyz',
	// 	groupdescription:'',
	// 	grouplist:[
	// 	],
	// },

	{
		groupid:'ni',
		groupname:'New Ideas',
		groupicontag:'lightbulb',
		groupdescription:'Currently work in progress',
		grouplist:[
			'analogclock','autoslideshow','admin',
			'band','banner','bizmath','blockmenu','blog',
			'calendar','canvas','chat','chess','chooser','cluster','compound','crud',
			'desktop','device','dragndrop','gallery','keyfinder','lander','livesearch',
			'merch','musicplayer','pagination','pinyin','pixelart','pong',
			'resume','rolodex','storage','tasks','toastprogress',
			'univ','video','wts1',
			'100pure','360finance','3dnav',
		],
	},

	{
		groupid:'cl',
		groupname:'CSS Lessons',
		groupicontag:'paintpalette',
		groupdescription:'Page design lessons in CSS',
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
		groupdescription:'Page functionality lessons in JavaScript',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
		groupdescription:'Lorem ipsum dolor emet',
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
	// 	groupdescription:'',
	// 	grouplist:[
			'360finance',
		],
	},

];
console.log('Project groups:',projectGroupData);


// Define project data. 
const projectData = [
	

	// {
	// 	created:'xyz',
	// 	authorid:'atg',
	// 	projectid:'xyz',
	// 	projectname:'XyzLinkName',
	// },
	

	{
		created:'xyz',
		authorid:'atg',
		projectid:'accordion',
		projectname:'Sliding Accordion',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'accordion2',
		projectname:'Sliding Accordion',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'admin',
		projectname:'Admin Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'admin2',
		projectname:'Admin Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'analogclock',
		projectname:'Analog Clock',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'angeldemon',
		projectname:'Sample Site Design',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'animation',
		projectname:'Scroll Animation',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'anime',
		projectname:'Square Animation',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'apple',
		projectname:'E-Commerce',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'application',
		projectname:'Application Site',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'aspectratio',
		projectname:'Aspect Ratio',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'atg',
		projectname:'Personal Brands',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'audio',
		projectname:'Audio Player',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'autoslideshow',
		projectname:'Automatic Slideshow',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'backToTop',
		projectname:'Back To Top',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'band',
		projectname:'Sample Band Site',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'banner',
		projectname:'Scrolling Banner',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'bell',
		projectname:'Notification Bell',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'big3dcard',
		projectname:'Rotating Card (3D)',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'bizmath',
		projectname:'Business Math',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'blockmenu',
		projectname:'Block Menu',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'blog',
		projectname:'Sample Blog Site',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'blogsocial',
		projectname:'Social Blog',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'blogtoggler',
		projectname:'Blog Toggler',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'bodyshop',
		projectname:'Fitness Launch Site',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'book',
		projectname:'Reading Book',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'bookmark',
		projectname:'Bookmark Button',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'books',
		projectname:'Sample Book List',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'bounce',
		projectname:'Bouncing Arrow',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'boxshadow',
		projectname:'Box Shadow',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'breadcrumbs',
		projectname:'Navigation Breadcrumbs',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'bubblesort',
		projectname:'Bubble Sort',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'buttonpress',
		projectname:'Button Press',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'calc',
		projectname:'Calculator',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'calculator',
		projectname:'Calculator',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'calendar',
		projectname:'Calendar',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cali',
		projectname:'CaliIsMe',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'caliB',
		projectname:'CaliIsMe',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'canvas',
		projectname:'Chart Canvas',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cardflipgallery3d',
		projectname:'Card Flip Gallery (3D)',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cardstacks',
		projectname:'Card Stacks',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'carnell',
		projectname:'Carnell Tate',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'carnell2',
		projectname:'Carnell Tate',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'carousel3d',
		projectname:'Slide Carousel (3D)',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'chadpiff',
		projectname:'Chad Piff',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'charlimit',
		projectname:'Input Limiter',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'chart',
		projectname:'Chart',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'chat',
		projectname:'Chat Messenger',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'checkout',
		projectname:'Checkout',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'checkout2',
		projectname:'Checkout',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'chess',
		projectname:'Chess',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cis255',
		projectname:'Coding Class',
	},{
		created:'xyz',
		authorid:'w3',
		projectid:'clearfix',
		projectname:'Clear Fix',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'clipboard',
		projectname:'Clipboard Copier',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'clock',
		projectname:'Clock Counter',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'clockspinner',
		projectname:'Clock Spinner',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'clubhouse',
		projectname:'Clubhouse',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cluster1d',
		projectname:'K-Means Clustering',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cluster',
		projectname:'K-Means Clustering (2D)',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cms',
		projectname:'CMS',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'collapsible',
		projectname:'Collapsible',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'colorpicker',
		projectname:'Color Picker',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'comingsoon',
		projectname:'Coming Soon Page',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'compound',
		projectname:'Compound Interest',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'contact',
		projectname:'Contact Form',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'contactform',
		projectname:'Contact Form',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'contextmenu',
		projectname:'Context Menu',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cookie',
		projectname:'Web Cookies',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'countdown',
		projectname:'Countdown',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'crm',
		projectname:'CRM',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'crud',
		projectname:'CRUD Database Manager',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'crud2',
		projectname:'CRUD Inventory Manager',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'cubecarousel',
		projectname:'Morphing Cube',
	},{
		created:'xyz',
		authorid:'w3',
		projectid:'cutout',
		projectname:'Text Cutout',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'delta',
		projectname:'Number Delta Clicker',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'desktop',
		projectname:'Draggable Element Arena',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'device',
		projectname:'Devices',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'diagram',
		projectname:'Code Diagram',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'dice',
		projectname:'Dice n Cards',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'dotcollector',
		projectname:'Dalio Dot Collector',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'dotnav',
		projectname:'Dot Navigation',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'dragndrop',
		projectname:'Drag n Drop',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'dragndrop1',
		projectname:'Drag n Drop',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'dynamicnavbar',
		projectname:'Dynamic Navbar',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'enter',
		projectname:'Action on Enter',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'essay',
		projectname:'Essay Writing Guide',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'event',
		projectname:'Event Listeners',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'fam',
		projectname:'Family Tree Diagram',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'filter',
		projectname:'List Filter',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'flashlight',
		projectname:'Flashlight Page',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'flex',
		projectname:'Flex Box',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'flexbreak',
		projectname:'Flex Break',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'floatmenu',
		projectname:'Floating Menu',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'format',
		projectname:'Text Formatter',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'form3d',
		projectname:'Lead Form (3D)',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'gallery',
		projectname:'Image Gallery',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'gallerywalk',
		projectname:'Moving Gallery (3D)',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'gameboard',
		projectname:'Game Board',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'gitcalendar',
		projectname:'Git Calendar',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'graph',
		projectname:'Bar Graph',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'grid',
		projectname:'CSS Grid',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'grocery',
		projectname:'Grocery Manager',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'hamburger',
		projectname:'Nav Toggler',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'hero',
		projectname:'Hero Resume',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'hero2',
		projectname:'Sample Hero Page',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'hexagon',
		projectname:'Lit Hexagon',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'hovercard',
		projectname:'Hover Cards (3D)',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'iglive',
		projectname:'Instagram Live',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'igprofile',
		projectname:'Instagram Profile',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'igt',
		projectname:'Iowa Gambling Test',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'image',
		projectname:'Image Modal',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'input',
		projectname:'Input Counter',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'instagram',
		projectname:'Instagram Feed',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'inventory',
		projectname:'Inventory Manager',
	},

	{
		created:'xyz',
		authorid:'atg',
		projectid:'jenna',
		projectname:'Fitness Launch Site',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'keyfinder',
		projectname:'Piano Key Finder',
	},{
		created:'xyz',
		authorid:'w3',
		projectid:'keyframes',
		projectname:'Key Frames',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'keypress',
		projectname:'Key Press',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'land',
		projectname:'Sample Landing Page',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'lander',
		projectname:'Sample Landing Page',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'laundry',
		projectname:'Laundry Timer',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'leads',
		projectname:'Sample Lead Generator',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'learner',
		projectname:'Learner Bug',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'lightSwitch',
		projectname:'Light Switch',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'linktree',
		projectname:'Link Tree',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'livesearch',
		projectname:'Live Search',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'loader',
		projectname:'Page Loader',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'loading',
		projectname:'Page Loader',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'login',
		projectname:'User Access',
	},
	
	{
		created:'xyz',
		authorid:'xyz',
		projectid:'macbook',
		projectname:'Macbook Animation',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'mandorespect',
		projectname:'Mando Respect',
	},{
		created:'xyz',
		authorid:'w3',
		projectid:'maskimage',
		projectname:'Image Masking',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'matrix',
		projectname:'Matrix Operations',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'megamenu',
		projectname:'Mega Menu',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'merch',
		projectname:'Sample Merch Store',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'message',
		projectname:'Text Messages',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'minion',
		projectname:'Minion',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'musicplayer',
		projectname:'Music Player',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'musicplaylist',
		projectname:'Music Playlist',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'multimenu',
		projectname:'Multi-Level Menu',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'navcircle',
		projectname:'Circular Navigation',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'netflix',
		projectname:'TV Show Site',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'neuro67',
		projectname:'Neuro67',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'orbit',
		projectname:'Orbiter',
	},{
		created:'xyz',
		authorid:'w3',
		projectid:'overflow',
		projectname:'Overflow',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'pagination',
		projectname:'Pagination',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'periodictable',
		projectname:'Periodic Table of Elements',
	},{
		created:'xyz',
		authorid:'w3',
		projectid:'perspective',
		projectname:'Perspective',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'pinyin',
		projectname:'Pinyin Soundboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'pixelart',
		projectname:'Pixel Art Generator',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'podcast',
		projectname:'Podcast Site',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'popup',
		projectname:'Popup',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'pong',
		projectname:'Awesome Pong',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'pricing',
		projectname:'Price Packages',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'profilecard',
		projectname:'Dynamic Profile Card',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'resume',
		projectname:'Simple Resume',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'retool',
		projectname:'Sliding Multi-Ticker',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'rating',
		projectname:'Rating Bar',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'rolodex',
		projectname:'Contact Rolodex',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'safari',
		projectname:'Safari Compass',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'scrollProgressBar',
		projectname:'Scroll Progress Bar',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'scrollsnap',
		projectname:'Scroll Snap',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'shape',
		projectname:'Rotating Shape',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'skeleton',
		projectname:'Content Skeleton',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'slideshow',
		projectname:'Manual Slideshow',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'slideshow2',
		projectname:'Simple Slideshow',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'smoothscroll',
		projectname:'Smooth Scroll',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'smosa',
		projectname:'Smosa USA',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'solarsystem',
		projectname:'Solar System',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'sort',
		projectname:'List Sorter',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'soundfx',
		projectname:'Sound FX',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'spinner',
		projectname:'Menu Spinner',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'splash',
		projectname:'Splash Page',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'stepprogress',
		projectname:'Step Progress Bar',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'storage',
		projectname:'Local Storage',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'superforg',
		projectname:'Superforg USA',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'switcher',
		projectname:'Tab Switcher',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'syntax',
		projectname:'Syntax Highlighter',
	},

	{
		created:'xyz',
		authorid:'atg',
		projectid:'tags',
		projectname:'Tag Typer',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'tagslider',
		projectname:'Tag Slider',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'tasks',
		projectname:'Task Manager',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'testimonial',
		projectname:'Testimonial Slider',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'theme',
		projectname:'Theme Switcher',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'thermometer',
		projectname:'Thermometer',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'throttle',
		projectname:'Input Controller',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'ticker',
		projectname:'News Ticker',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'time',
		projectname:'Time Calculator',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'timeline',
		projectname:'Timeline',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'timeline2',
		projectname:'Timeline',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'timing',
		projectname:'Timing Functions',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'toastprogress',
		projectname:'Toast Progress Bar',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'touch',
		projectname:'Touch Sensor',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'traffic',
		projectname:'Traffic Light',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'travel',
		projectname:'Travel Site',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'trifold3d',
		projectname:'Trifold Gallery (3D)',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'tropicalghana',
		projectname:'Tropical Ghana',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'typer',
		projectname:'Type Counter',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'typetest',
		projectname:'Typing Test',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'typewriter',
		projectname:'Counter Typewriter',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'univ',
		projectname:'Sample University',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'unseenstrts',
		projectname:'Unseen Streets',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'upload',
		projectname:'Image Uploader',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'urlparams',
		projectname:'URL Search Parameters',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'user',
		projectname:'User Profile',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'user2',
		projectname:'User Profile',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'valueslider',
		projectname:'Value Slider',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'vanilla',
		projectname:'Vanilla Scroll Parallax',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'vidbg',
		projectname:'Video Background',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'video',
		projectname:'Video Gallery',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'viewport',
		projectname:'Viewport Sizer',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'voisey',
		projectname:'Voisey',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'waves',
		projectname:'Wave Generator',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'wordcube',
		projectname:'Word Cube',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'wordswitcher',
		projectname:'Word Switcher',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'wts1',
		projectname:'Watch The Screen',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'zbar',
		projectname:'Z-Index Bar',
	},
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'10000cards',
		projectname:'Social Profile',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'100pure',
		projectname:'100% Pure Music',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'360finance',
		projectname:'360 Finance',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'3d',
		projectname:'Card Controller (3D)',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'3dnav',
		projectname:'3D Navigation',
	},
	
	
	{
		created:'xyz',
		authorid:'atg',
		projectid:'chooser',
		projectname:'Page Chooser',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'clone',
		projectname:'App Clone Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'evolution',
		projectname:'Evolutionary Game Theory',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'fitness',
		projectname:'Fitness Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'finance',
		projectname:'Finance Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'layouts',
		projectname:'Layout Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'math',
		projectname:'Math Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'music',
		projectname:'Music Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'probability',
		projectname:'Probability Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'reast',
		projectname:'Real Estate Dashboard',
	},{
		created:'xyz',
		authorid:'atg',
		projectid:'stocks',
		projectname:'Stocks Dashboard',
	},
	
	
];
console.log('Projects:',projectData);


/*****/


// Check sizes of project groups. 
// checkProjectGroupSizes();

// Get projects missing from database. 
let missingProjectIds = getMissingProjects();
console.log('Missing project ids:',missingProjectIds);

// Get projects missing from project groups. 
let orphanProjectIds = getOrphanProjects();
console.log('Orphan project ids:',orphanProjectIds);


/*****/


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

// Check sizes of project groups. 
function checkProjectGroupSizes() {

	// Go thru each project meta-group. 
	for(let projectmetagroup of projectMetaGroupData) {

		// Get id of project meta-group. 
		let mgid = projectmetagroup.groupid;

		// Initialize size of project meta-group. 
		let metagroupsize = 0;

		// Get list of project groups for project meta-group. 
		let projectmetagrouplist = projectmetagroup.grouplist;

		// Go thru each project group. 
		for(let pgid of projectmetagrouplist) {

			// Get size of current project group. 
			let groupsize = getProjectGroupById(pgid).grouplist.length;
			console.log('\t',pgid,groupsize);

			// Add size of current project group to size of project meta-group. 
			metagroupsize += groupsize;
		}
		console.log(mgid,metagroupsize);
	}
}

// Get projects missing from database. 
function getMissingProjects() {

	// Initialize result. 
	let result = [];

	// Go thru each project id. 
	for(let pid of projectNames) {

		// Check if project found. 
		let projectFound = !!getProjectById(pid);

		// Save id if project not found. 
		if (!projectFound) result.push(pid);
	}

	// Return result. 
	return result;
}

// Get projects missing from project groups. 
function getOrphanProjects() {

	// Initialize result. 
	let result = [];

	// Go thru each project. 
	for(let p of projectData) {

		// Get id of project. 
		let pid = p.projectid;

		// Initialize if project found in any group. 
		let projectFoundInGroup = false;

		// Go thru each project group to find project id. 
		for(let pg of projectGroupData) {

			// Check if project found in group. 
			projectFoundInGroup = pg.grouplist.includes(pid);
			// End search if project found in group. 
			if(projectFoundInGroup) break;
		}

		// Save id if project not found in any group. 
		if (!projectFoundInGroup) result.push(pid);
	}

	// Return result. 
	return result;
}
