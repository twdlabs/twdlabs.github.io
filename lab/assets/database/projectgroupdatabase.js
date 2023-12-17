


// Define groups of projects. 
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
			'pagination',
			'popup',
			'progressbar',
			'rating',
			'rolodex',
			'scrollProgressBar',
			'skeleton',
			'stepprogress',
			'switcher',
			'tags',
			'tagscroller',
			'tagslider',
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
			'compound',
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


// Define sets of project groups in matrix. 
const projectGroupMatrixData = [
	{
		setid:'setA',
		setlist:['cl','fl','nw','tw',],
	},
	{
		setid:'setB',
		setlist:['bl','aw','mt','wt',],
	},
	{
		setid:'setC',
		setlist:['cw','gw','mw','sw',],
	},
	{
		setid:'setD',
		setlist:['3d','dc',],
	},
	{
		setid:'setE',
		setlist:['ld','ap','cp',],
	},
	{
		setid:'setX',
		setlist:['orphans','missing',],
	},
];
// console.log('Project group sets:',projectGroupMatrixData);


/*****/


// Check sizes of project groups. 
// checkProjectGroupSizes();


// Add extra project groups. 
addExtraProjectGroups();


/*****/


// Add extra project groups. 
function addExtraProjectGroups() {

	// Save list of projects missing from project database. 
	let nullGroup = getProjectGroupById('missing');
	
	// Save list of projects missing from project group database. 
	let orphanGroup = getProjectGroupById('orphans');

	// console.log('Missing projects:',nullGroup);
	nullGroup.groupitemsidlist = getMissingProjectIds();
	// console.log('Missing projects:',nullGroup);
	
	// console.log('Orphan projects:',orphanGroup);
	orphanGroup.groupitemsidlist = getOrphanProjectIds();
	// console.log('Orphan projects:',orphanGroup);
}

// Get project group by id. 
function getProjectGroupById(pgid) {

	// Go thru each project groups. 
	for(let projectcategory of projectCategoryData) {

		// Check if project group matches query id. 
		let matchFound = (projectcategory.groupid == pgid);

		// Return matching project group if found. 
		if(matchFound) return projectcategory;
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
		let projectmetagroupitemsidlist = projectmetagroup.groupitemsidlist;

		// Go thru each project group. 
		for(let pgid of projectmetagroupitemsidlist) {

			// Get size of current project group. 
			let groupsize = getProjectGroupById(pgid).groupitemsidlist.length;
			console.log('\t',pgid,groupsize);

			// Add size of current project group to size of project meta-group. 
			metagroupsize += groupsize;
		}
		console.log(mgid,metagroupsize);
	}
}

// Get projects that do not belong to any project group. 
function getOrphanProjectIds() {

	// Initialize result. 
	let result = [];

	// Go thru each project. 
	for(let p of projectData) {

		// Get id of project. 
		let pid = p.projectid;

		// Initialize if project found in any group. 
		let projectFoundInGroup = false;

		// Go thru each project group to find project id. 
		for(let pg of projectCategoryData) {

			// Check if project found in group. 
			projectFoundInGroup = pg.groupitemsidlist.includes(pid);
			// End search if project found in group. 
			if(projectFoundInGroup) break;
		}

		// Save id if project not found in any group. 
		if (!projectFoundInGroup) result.push(pid);
	}

	// Return result. 
	return result;
}
