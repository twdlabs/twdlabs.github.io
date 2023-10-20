


// Define data for development tools and methods. 
const methodData = [

	{
		icontag:'piechart',
		header:'Statistics',
		description:'Applying concepts from probability thoery, using descriptive statistics and inferential statistics',
	},

	{
		icontag:'keyboard',
		header:'Programming',
		description:'Building useful models of real world phenomena using mathematics, statistics, and programming ',
	},

	{
		icontag:'easel',
		header:'Design',
		description:'Creating aesthetic user interfaces and seamless user experiences while using best practice design principles',
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
// console.log('Method data:',methodData);


// Define groups of projects. 
const projectGroupData = [

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
		groupid:'ld',
		groupname:'Legacy Dashboards',
		groupicontag:'oldpc',
		groupdescription:'Old dashboard projects and design ideas from various apps and websites',
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
	},
	{
		groupid:'cl',
		groupname:'CSS Lessons',
		groupicontag:'paintpalette',
		groupdescription:'Practice in design and animation using cascading style sheets',
		groupitemsidlist:[
			'anime',
			'aspectratio',
			'banner',
			'big3dcard',
			'books',
			'bounce',
			'boxshadow',
			'buttonpress',
			'cardstacks',
			'clearfix',
			'cutout',
			'flex',
			'flexbreak',
			'format',
			'graph',
			'grid',
			'hovercard',
			'keyframes',
			'macbook',
			'maskimage',
			'overflow',
			'perspective',
			'profilecard',
			'safari',
			'scrollsnap',
			'smoothscroll',
			'timing',
			'trifold3d',
			'zbar',
		],
	},
	{
		groupid:'jl',
		groupname:'JS Lessons',
		groupicontag:'gear',
		groupdescription:'Local client-side functionality using JavaScript',
		groupitemsidlist:[
			'audio',
			'colorpicker',
			'cookie',
			'enter',
			'event',
			'filter',
			'keypress',
			'sort',
			'storage',
			'syntax',
			'urlparams',
		],
	},
	{
		groupid:'bl',
		groupname:'Back-end Lessons',
		groupicontag:'paintbrush',
		groupdescription:'Dynamic server-side functionality using XML, HTTP, JSON, APIs',
		groupitemsidlist:[
			'json',
			'xhr',
		],
	},

	{
		groupid:'aw',
		groupname:'App Widgets',
		groupicontag:'app',
		groupdescription:'Various tools and widgets to enhance app design and functionality',
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
			'form3d',
			'gitcalendar',
			'input',
			'lightSwitch',
			'livesearch',
			'loader',
			'loading',
			'login',
			'overlay',
			'pagination',
			'progressbar',
			'rating',
			'rolodex',
			'scrollProgressBar',
			'skeleton',
			'stepprogress',
			'switcher',
			'tags',
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
		groupdescription:'Web components to support ecommerce web development',
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
		groupid:'gw',
		groupname:'Game Widgets',
		groupicontag:'joystick',
		groupdescription:'Web components for use in game design and game development',
		groupitemsidlist:[
			'3d',
			'animation',
			'blockmenu',
			'chess',
			'clockspinner',
			'cubecarousel',
			'dice',
			'dragndrop',
			'dragndrop1',
			'flashlight',
			'gameboard',
			'hexagon',
			'igt',
			'learner',
			'minion',
			'orbit',
			'pixelart',
			'pokeball',
			'pong',
			'shape',
			'solarsystem',
			'sphere',
			'splash',
			'thermometer',
			'touch',
			'traffic',
			'wavyloader',
			'wordcube',
		],
	},
	{
		groupid:'mw',
		groupname:'Media Widgets',
		groupicontag:'mediacollection',
		groupdescription:'Seamless presentations for various forms of communication media',
		groupitemsidlist:[
			'autoslideshow',
			'cardflipgallery3d',
			'carousel3d',
			'desktop',
			'gallery',
			'gallerywalk',
			'image',
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
		groupdescription:'Web components and tools to facilitate smooth web navigation',
		groupitemsidlist:[
			'backToTop',
			'breadcrumbs',
			'dotnav',
			'dynamicnavbar',
			'floatmenu',
			'hamburger',
			'megamenu',
			'multimenu',
			'navcircle',
			'spinner',
		],
	},
	{
		groupid:'sw',
		groupname:'Social Widgets',
		groupicontag:'people',
		groupdescription:'Web components and tools for social media sharing and profile links',
		groupitemsidlist:[
			'share',
			'socialbtns',
			'socialmedia',
		],
	},
	
	{
		groupid:'dc',
		groupname:'Design Seeds',
		groupicontag:'tv',
		groupdescription:'Various design ideas for arranging apps and landing pages',
		groupitemsidlist:[
			'10000cards',
			'3dnav',
			'apple',
			'application',
			'band',
			'bodyshop',
			'calc',
			'dotcollector',
			'font',
			'hero2',
			'jenna',
			'leads',
			'neuro67',
			'travel',
			'tropicalghana',
			'voisey',
			'clubhouse',
			'comingsoon',
			'iglive',
			'igprofile',
			'instagram',
			'masonry',
			'mementomori',
			'message',
			'netflix',
			'pagenexter',
			'plax',
			'plax1',
			'plax2',
			'plax3',
			'retool',
			'skills',
			'theme',
			'theme1',
			'theme2',
			'angeldemon',
			'mandorespect',
			'periodictable',
			'wave',
			'ytblp',
		],
	},
	{
		groupid:'ap',
		groupname:'App Prototypes',
		groupicontag:'smartphone',
		groupdescription:'Seeds of potential stand-alone applications and websites',
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
			'fam',
			'grocery',
			'hero',
			'inventory',
			'keyfinder',
			'laundry',
			'matrix',
			'musicplayer',
			'musicplaylist',
			'pinyin',
			'podcast',
			'typetest',
			'waves',
		],
	},
	{
		groupid:'cp',
		groupname:'Client Projects',
		groupicontag:'receipt',
		groupdescription:'Website projects completed for various clients',
		groupitemsidlist:[
			'blog',
			'cali',
			'caliB',
			'carnell',
			'carnell2',
			'chadpiff',
			'resume',
			'smosa',
			'superforg',
			'unseenstrts',
			'univ',
			'wts1',
			'100pure',
			'360finance',
		],
	},

	{
		groupid:'orphans',
		groupname:'Misc Projects',
		groupicontag:'clipboard',
		groupdescription:'Projects not included in any other category groups',
		groupitemsidlist:[
		],
	},
	{
		groupid:'missing',
		groupname:'Missing Projects',
		groupicontag:'clipboard',
		groupdescription:'',
		groupitemsidlist:[
		],
		ghostblock:true,
	},

];
// console.log('Project groups:',projectGroupData);


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
		groupid:'l',
		groupname:'Dev Lessons',
		groupicontag:'lightbulb',
		groupdescription:'Learning new concepts in web development',
		groupitemsidlist:[
			'cl',
			'jl',
			'dc',
			'bl',
		],
	},

	{
		groupid:'w',
		groupname:'Widgets',
		groupicontag:'motherboard',
		groupdescription:'Reusable sub-components for apps, dashboards, and websites',
		groupitemsidlist:[
			'aw',
			'cw',
			'gw',
			'mw',
			'nw',
			'sw',
		],
	},

	{
		groupid:'p',
		groupname:'Project Samples',
		groupicontag:'smartphone',
		groupdescription:'Various project designs, applications, and websites',
		groupitemsidlist:[
			'cp',
			'ap',
			'ld',
		],
	},

];
// console.log('Project meta-groups:',projectMetaGroupData);


// Define sets of project groups in matrix. 
const projectGroupMatrixData = [
	{
		setid:'set0',
		setlist:['cl','jl','bl','sw',],
	},
	{
		setid:'set1',
		setlist:['aw',],
	},
	{
		setid:'set2',
		setlist:['cw','gw','nw',],
	},
	{
		setid:'set3',
		setlist:['dc','mw',],
	},
	{
		setid:'set4',
		setlist:['ap','ld','cp',],
	},
	{
		setid:'missing',
		setlist:['orphans','missing',],
	},
];
// console.log('Project group sets:',projectGroupMatrixData);


// Define sets of project meta-groups in matrix. 
const projectMetaGroupMatrixData = [
	// {
	// 	setid:'setX',
	// 	setlist:['x',],
	// },
	{
		setid:'setA',
		setlist:['p',],
	},
	{
		setid:'setB',
		setlist:['w',],
	},
	{
		setid:'setC',
		setlist:['l',],
	},
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
	for(let projectgroup of projectGroupData) {

		// Check if project group matches query id. 
		let matchFound = (projectgroup.groupid == pgid);

		// Return matching project group if found. 
		if(matchFound) return projectgroup;
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
		for(let pg of projectGroupData) {

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
