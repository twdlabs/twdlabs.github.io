


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
			'analogclock',
			'bell',
			'blogtoggler',
			'book',
			'bookmark',
			'calendar',
			'canvas',
			'charlimit',
			'chart',
			'clipboard',
			'clock',
			'collapsible',
			'contextmenu',
			'countdown',
			'delta',
			'device',
			'essay',
			'gitcalendar',
			'input',
			'lightSwitch',
			'livesearch',
			'loader',
			'loading',
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
			'throttle',
			'ticker',
			'time',
			'timeline',
			'timeline2',
			'toastprogress',
			'typer',
			'typewriter',
			'upload',
			'user',
			'user2',
			'valueslider',
			'viewport',
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
			'calc',
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
			'pagenexter',
			'periodictable',
			'retool',
			'skills',
			'sky',
			'theme',
			'theme1',
			'theme2',
			'travel',
			'trig',
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
			'bizmath',
			'blogsocial',
			'calculator',
			'chat',
			'cluster1d',
			'cluster',
			'compound',
			'crud',
			'crud2',
			'grocery',
			'igt',
			'inventory',
			'keyfinder',
			'laundry',
			'matrix',
			'musicplayer',
			'musicplaylist',
			'notepad',
			'pinyin',
			'podcast',
			'quiz',
			'smartphone',
			'typetest',
			'waves',
		],
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
	// {
	// 	groupid:'xyz',
	// 	groupname:'Xyz Group',
	// 	groupicontag:'xyz',
	// 	groupdescription:'',
	// 	groupitemsidlist:[
	// 	],
	// },

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

];
// console.log('Project categories:',projectCategoryData);


// Define groups of groups of projects. 
const projectMetaGroupData = [

	// {
	// 	groupid:'x',
	// 	groupname:'',
	// 	groupicontag:'copy',
	// 	groupdescription:'',
	// 	groupitemsidlist:[
	// 		'',
	// 	],
	// },

	{
		groupid:'p',
		groupname:'Project Samples',
		groupname:'Compilations',
		groupicontag:'smartphone',
		groupdescription:'Project designs and outcomes for various application and website ideas',
		groupitemsidlist:[
			'cp',
			'ap',
			'ld',
			'dc',
		],
	},

	{
		groupid:'w',
		groupname:'Widgets',
		groupicontag:'motherboard',
		groupdescription:'Reusable sub-components for apps, dashboards, and websites',
		groupitemsidlist:[
			'sw',
			'gw',
			'mw',
			'nw',
			'cw',
			'aw',
		],
	},

	{
		groupid:'l',
		groupname:'Dev Examples',
		groupicontag:'lightbulb',
		groupdescription:'Basic tools and concepts in web / software development',
		groupitemsidlist:[
			'cl',
			'fl',
			'bl',
			'3d',
			// 'xyz',
		],
	},

];
// console.log('Project collections:',projectMetaGroupData);


// Define sets of project groups in matrix. 
const projectGroupMatrixData = [
	{
		setid:'setA',
		setlist:['cl','fl','nw','dt',],
	},
	{
		setid:'setB',
		setlist:['bl','aw',],
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
		setlist:[/* 'orphans', */'missing',],
	},
];
// console.log('Project group sets:',projectGroupMatrixData);


// Define sets of project meta-groups in matrix. 
const projectMetaGroupMatrixData = [
	{
		setid:'setA',
		setlist:['p',],
	},
	{
		setid:'setC',
		setlist:['l',],
	},
	{
		setid:'setB',
		setlist:['w',],
	},
	// {
	// 	setid:'setX',
	// 	setlist:['x',],
	// },
];
// console.log('Project meta-group sets:',projectMetaGroupMatrixData);


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

// Get project meta group by id. 
function getProjectMetaGroupById(pmgid) {

	// Go thru each project groups. 
	for(let projectmetagroup of projectMetaGroupData) {

		// Check if project group matches query id. 
		let matchFound = (projectmetagroup.groupid == pmgid);

		// Return matching project group if found. 
		if(matchFound) return projectmetagroup;
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
