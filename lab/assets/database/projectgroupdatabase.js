


// Define categories of projects. 
const projectCategoryData = [

	// {
	// 	groupid:'xyz',
	// 	groupname:'XyzName',
	// 	groupicontag:'pencileditor',
	// 	groupicontag:'motherboard',
	// 	groupicontag:'clipboard',
	// 	groupdescription:'',
	// 	groupitemsidlist:[
	// 	],
	// },

	{
		groupid:'cl',
		groupname:'CSS Examples',
		groupicontag:'paintpalette',
		groupdescription:'Various concepts and tools to facilitate design process using design seeds and animations in cascading style sheets',
		groupitemsidlist:[
			'anime',
			'aspectratio',
			'banner',
			'books',
			'bounce',
			'boxshadow',
			'buttonpress',
			'clearfix',
			'cutout',
			'diagram',
			'flex',
			'flexbreak',
			'format',
			'gradient',
			'graph',
			'grid',
			'hovercard',
			'keyframes',
			'maskimage',
			'overflow',
			'profilecard',
			'safari',
			'scrollsnap',
			'smoothscroll',
			'timing',
			'viewport',
		],
	},
	{
		groupid:'fl',
		groupname:'Front-end Tools',
		groupicontag:'paintbrush',
		groupicontag:'tools',
		groupdescription:'Tools on the local client-side to facilitate design and development process using JavaScript',
		groupitemsidlist:[
			'audio',
			'bubblesort',
			'colorpicker',
			'cookie',
			'coordinates',
			'enter',
			'event',
			'filter',
			'keypress',
			'projectlistchecker',
			'sort',
			'storage',
			'syntax',
			'uitest',
			'urlparams',
		],
	},
	{
		groupid:'bl',
		groupname:'Back-end Tools',
		groupicontag:'gear',
		groupdescription:'Tools on the dynamic server-side to facilitate design and development process using XML, HTTP, JSON, APIs',
		groupitemsidlist:[
			'json',
			'loader',
			'loading',
			'xhr',
		],
	},
	{
		groupid:'3d',
		groupname:'3D Widgets',
		groupicontag:'dpad',
		groupdescription:'Web components and tools exploring three-dimensional capabilities',
		groupitemsidlist:[
			'3dbox',
			'3dcard',
			'3dcardgallery',
			'3dnav',
			'3dsimulator',
			'3dspincard',
			'3dtrifold',
			'blockmenu',
			'cardstacks',
			'3dcarousel',
			'cubecarousel',
			'form3d',
			'herotrack',
			'macbook',
			'orbit',
			'perspective',
			'plax',
			'plax1',
			'plax2',
			'plax3',
			'postercircle',
			'postercirclelibrary',
			'3dshape',
			'solarsystem',
			'sphere',
			'vanilla',
			'wavyloader',
			'zbar',
		],
	},

	{
		groupid:'aw',
		groupname:'General App Widgets',
		groupicontag:'app',
		groupdescription:'Web components and tools developed to enhance app design and functionality',
		groupitemsidlist:[
			'accordion',
			'accordion2',
			'bell',
			'blogtoggler',
			'book',
			'bookmark',
			'calendar',
			'canvas',
			'charlimit',
			'chart',
			'collapsible',
			'contextmenu',
			'delta',
			'device',
			'lightSwitch',
			'livesearch',
			'login',
			'overlay',
			'paginator',
			'popup',
			'progressbar',
			'rating',
			'rolodex',
			'scrollProgressBar',
			'skeleton',
			'stepprogress',
			'switcher',
			'tagscroller',
			'tagslider',
			'tagtyper',
			'tasks',
			'theme',
			'theme1',
			'theme2',
			'throttle',
			'ticker',
			'toastprogress',
			'upload',
			'user',
			'user2',
			'valueslider',
			'wordswitcher',
		],
	},
	{
		groupid:'cw',
		groupname:'Commerce Widgets',
		groupicontag:'money',
		groupdescription:'Web components and tools developed to support ecommerce process',
		groupitemsidlist:[
			'admin',
			'admin2',
			'checkout',
			'checkout2',
			'cms',
			'contact',
			'contactform',
			'crm',
			'land',
			'lander',
			'merch',
			'payment',
			'pricing',
			'stepprogressbar',
			'testimonial',
		],
	},
	{
		groupid:'sw',
		groupname:'Communication Widgets',
		groupicontag:'people',
		groupdescription:'Web components and tools developed for social media sharing and social communication',
		groupitemsidlist:[
			'bloglist',
			'chat',
			'chatpopup',
			'message',
			'share',
			'socialbtns',
			'socialmedia',
		],
	},
	{
		groupid:'gw',
		groupname:'Game Widgets',
		groupicontag:'joystick',
		groupdescription:'Web components and tools developed for use in game design and game development',
		groupitemsidlist:[
			'animation',
			'chess',
			'clockspinner',
			'dice',
			'dragndrop',
			'dragndrop1',
			'flashlight',
			'gameboard',
			'hexagon',
			'learner',
			'minion',
			'pixelart',
			'pokeball',
			'pong',
			'refresh',
			'splash',
			'thermometer',
			'touch',
			'traffic',
			'wordcube',
		],
	},
	{
		groupid:'mt',
		groupname:'Math Tools',
		groupicontag:'calculator',
		groupdescription:'Tools for understanding and applying various principles in mathematics, statsistics, and finance',
		groupitemsidlist:[
			'bizmath',
			'calc',
			'calculator',
			'cluster1d',
			'cluster',
			'compound',
			'matrix',
			'trig',
		],
	},
	{
		groupid:'wt',
		groupname:'Writing Tools',
		groupicontag:'pencileditor',
		groupdescription:'Web components and tools to facilitate various types of short-form and long-form writing endeavors',
		groupitemsidlist:[
			'clipboard',
			'essay',
			'input',
			'typecounter',
			'typetest',
			'typewriter',
		],
	},
	{
		groupid:'tw',
		groupname:'Time Widgets',
		groupicontag:'clock',
		groupdescription:'Web components and tools for various representations of time and dates',
		groupitemsidlist:[
			'analogclock',
			'clock',
			'countdown',
			'gitcalendar',
			'time',
			'timeline',
			'timeline2',
		],
	},
	{
		groupid:'mw',
		groupname:'Media Widgets',
		groupicontag:'mediacollection',
		groupdescription:'Web components and tools developed for seamless presentations of various communication media',
		groupitemsidlist:[
			'autoslideshow',
			'desktop',
			'gallery',
			'gallerywalk',
			'image',
			'masonry',
			'slideshow',
			'slideshow2',
			'snapslider',
			'soundfx',
			'upload1',
			'vidbg',
			'video',
		],
	},
	{
		groupid:'nw',
		groupicontag:'dropmenu',
		groupname:'Navigation Widgets',
		groupicontag:'signpost',
		groupdescription:'Web components and tools developed to facilitate smooth navigation bewteen pages',
		groupitemsidlist:[
			'3dnav',
			'backToTop',
			'breadcrumbs',
			'dotnav',
			'dynamicnavbar',
			'floatmenu',
			'hamburger',
			'megamenu',
			'multimenu',
			'navcircle',
			'navorbit',
			'pagenexter',
			'searchbar',
			'spinner',
		],
	},
	
	{
		groupid:'dc',
		groupname:'Design Seeds',
		groupicontag:'tv',
		groupdescription:'Various design ideas for visual arrangement of applications and landing pages',
		groupitemsidlist:[
			'10000cards',
			'angeldemon',
			'apple',
			'application',
			'band',
			'bodyshop',
			'bst',
			'clubhouse',
			'comingsoon',
			'dotcollector',
			'fam',
			'font',
			'hero',
			'hero2',
			'iglive',
			'igprofile',
			'instagram',
			'jenna',
			'leads',
			'mandorespect',
			'mementomori',
			'netflix',
			'neuro67',
			'periodictable',
			'podcast',
			'retool',
			'skills',
			'sky',
			'travel',
			'tropicalghana',
			'voisey',
			'wave',
			'ytblp',
		],
	},
	{
		groupid:'ap',
		groupname:'App Prototypes',
		groupicontag:'smartphone',
		groupdescription:'Design seeds developed for future potential stand-alone applications and websites',
		groupitemsidlist:[
			'blogsocial',
			'crud',
			'crud2',
			'grocery',
			'igt',
			'inventory',
			'keyfinder',
			'laundry',
			'musicplayer',
			'musicplaylist',
			'notepad',
			'notes',
			'notesquares',
			'pinyin',
			'quiz',
			'smartphone',
			'waves',
		],
		// wideblock:true,
	},
	{
		groupid:'cp',
		groupname:'Client Projects',
		groupicontag:'receipt',
		groupdescription:'Projects for websites and applications developed for various clients',
		groupitemsidlist:[
			'adepa',
			'affiliate',
			'blog',
			'cali',
			'caliB',
			'carnell',
			'carnell2',
			'chadpiff',
			'cruchcalhoun',
			'eazechain',
			'escapebrand',
			'goodz',
			'koan',
			'portfolio',
			'portfolio0',
			'resume',
			'sermons',
			'smosa',
			'superforg',
			'unseenstrts',
			'univ',
			'wts1',
			'www',
			'100pure',
			'360finance',
		],
		wideblock:true,
	},

	{
		groupid:'ld',
		groupname:'Legacy Dashboards',
		groupicontag:'oldpc',
		groupdescription:'Remainder of original dashboard projects and various design ideas from apps and websites',
		groupitemsidlist:[
			'atg',
			'cis255',
			'linktree',
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
		ghostblock:true,
	},
	{
		groupid:'orphans',
		groupname:'Other Projects',
		groupicontag:'clipboard',
		groupdescription:'Various uncategorized projects that are not already included in any other groups',
		groupitemsidlist:[
		],
		ghostblock:true,
	},
	{
		groupid:'missing',
		groupname:'Miscellaneous',
		groupicontag:'clipboard',
		groupdescription:'',
		groupitemsidlist:[
		],
		ghostblock:true,
	},

	// {
	// 	groupid:'xyz',
	// 	groupname:'Xyz Group',
	// 	groupicontag:'xyz',
	// 	groupdescription:'',
	// 	groupitemsidlist:[
	// 	],
	// },

];
// console.log('Project categories:',projectCategoryData);


// Define sets of project categories in matrix. 
const projectCategoryMatrixData = [
	{
		setid:'categorysetA',
		setlist:['cl','fl','nw','tw',],
	},
	{
		setid:'categorysetB',
		setlist:['bl','aw','mt','wt',],
	},
	{
		setid:'categorysetC',
		setlist:['cw','gw','mw','sw',],
	},
	{
		setid:'categorysetD',
		setlist:['3d','dc',],
	},
	{
		setid:'categorysetE',
		setlist:['ld','ap','cp',],
	},
	{
		setid:'categorysetX',
		setlist:['orphans','missing',],
	},
];
// console.log('Project category matrix:',projectCategoryMatrixData);


/*****/


// Add extra project categories. 
addExtraProjectGroups();


/*****/


// Get project category by id. 
function getProjectCategoryById(categoryid) {

	// Go thru each project category. 
	for(let projectcategory of projectCategoryData) {

		// Check if project category matches query id. 
		let matchFound = (projectcategory.groupid == categoryid);

		// Return matching project category if found. 
		if(matchFound) return projectcategory;
	}

	// Return nothing if project category not found. 
	return null;
}

// Get name of project category by id. 
function getProjectCategoryNameById(categoryid) {

	// Get category. 
	let category = getProjectCategoryById(categoryid);
	// if(!category) console.log(categoryid);

	// Return name if project category found. 
	return category ? category.groupname : '[none]';
}

// Get projects that do not belong to any project category. 
function getOrphanProjectIds() {

	// Initialize result. 
	let result = [];

	// Go thru each project. 
	for(let p of projectData) {

		// Get id of project. 
		let pid = p.projectid;

		// Initialize if project found in any category. 
		let projectFoundInGroup = false;

		// Go thru each project category to find project id. 
		for(let category of projectCategoryData) {

			// Check if project found in category. 
			projectFoundInGroup = category.groupitemsidlist.includes(pid);
			// End search if project found in category. 
			if(projectFoundInGroup) break;
		}

		// Save id if project not found in any category. 
		if (!projectFoundInGroup) result.push(pid);
	}

	// Return result. 
	return result;
}

// Add extra project categories. 
function addExtraProjectGroups() {

	// Save list of projects missing from project database. 
	let nullCategory = getProjectCategoryById('missing');
	
	// Save list of projects missing from project category database. 
	let orphanCategory = getProjectCategoryById('orphans');

	// console.log('Missing projects:',nullCategory);
	nullCategory.groupitemsidlist = getMissingProjectIds();
	// console.log('Missing projects:',nullCategory);
	
	// console.log('Orphan projects:',orphanCategory);
	orphanCategory.groupitemsidlist = getOrphanProjectIds();
	// console.log('Orphan projects:',orphanCategory);
}
