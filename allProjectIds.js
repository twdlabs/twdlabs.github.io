


// List ids for all projects.
const allProjectIds = [
	'10000cards','100pure','360finance',
	'3dbox','3dcard','3dcardgallery','3dcarousel','3dnav','3dshape','3dsimulator','3dspincard',
	'accordion','accordion2','adepa','admin','admin2','affiliate','affirm','agency','alphavantage','analogclock','angeldemon','animation','anime','apple','application','article','aspectratio','atg','atm','audio','autocomplete','autoslideshow',
	'backToTop','band','banner','battlerap','bell','binarygame','bizmath','blockmenu','blog','bloglist','blogsocial','blogtoggler','bodyshop','book','bookmark','books','bounce','box','boxshadow','breadcrumbs','bs5','bst','bubblesort','buttonpress',
	'calc','calculator','calendar','calendar2','cali','caliB','canvas','canvas2','cardstacks','carnell','carnell2','carousel',
	'chadpiff','charlimit','chart','chat','chatpopup','checkout','checkout2','chess','chooser','chooser-old','cis255','clearfix','clipboard','clock','clockspinner','clone','clubhouse','cluster','cluster1d','cms',
	'code','collapsible','colorpicker','colorpicker2','comingsoon','compound','contact','contactform','contextmenu', 'cookie','coordinates','copyright','countdown','covid','crm','cruchcalhoun','crud','crud2','cubecarousel','cutout',
	'dashboard','db','decision','deck','delta','depth','desktop','device','diagram','dice','dollar','dotcollector','dotnav','dragndrop','dragndrop1','dragndroplist','dynamicnavbar',
	'eazechain','editor','education','enter','escapebrand','essay','event','evolution',
	'fam','family','filter','finance','fitness','flashlight','flex','flexbreak','floatmenu','font','form','form3d','format','formvalidation','funnel',
	'gallery','gallerywalk','gameboard','gametapes','gform','gitcalendar','glow','goodz','gooey','gradient','graph','grid','grocery','grocery2',
	'hamburger','hero','hero2','herotrack','hexagon','hourglass','hovercard',
	'iglive','igprofile','igt','image','input','instagram','inventory',
	'jay','jenna','json',
	'keyfinder','keyframes','keypress','koan','kumba',
	'lab','land','lander','laundry','layouts','leads','learner','levels','lightSwitch','linktree','livesearch','loader','loading','login','login1','login2','logo',
	'macbook','manager','mandorespect','maskimage','masonry','math','matrix','medialibrary','megamenu','mementomori','mentalmodels','multimenu','merch','message','minion','mousetrail','multimenu','music','musicplayer','musicplayer2','musicplaylist',
	'navbar','navcircle','navorbit','netflix','neuro67','news','notepad','notes','notesquares',
	'online','orbit','overflow','overlay',
	'pagenexter','pageslider','paginator','payment','periodictable','personality','perspective','pgi','pixelart','pinyin','plax','plax1','plax2','plax3',
	'podcast','pokeball','pong','popup','portfolio','portfolio0','postercircle','postercirclelibrary','pricing','prime','probability','profilecard','progressbar','projectlistchecker',
	'quiz',
	'rating','rating2','reast','reast2','refresh','regexp','resume','resume2','retool','robinhood','rolodex',
	'safari','scale3d','scroller','scrollProgressBar','scrollsnap','searchbar','select','sermons','share','sidenav','skeleton','skills','sky','slideshow','slideshow2','smartphone','smoothscroll','smosa',
	'snapslider','socialbtns','socialmedia','solarsystem','sort','soundfx','spades','sphere','spinner','splash','stepprogress','stepprogressbar','stocks','storage','storybrand','student','superforg','switch','switcher','syntax',
	'tabs','tabs3d','tagboard','tagscroller','tagslider','tagtyper','tasks','template','template1','testimonial','theme','theme1','theme2','thermometer','throttle','ticker','time','timeline','timeline2','timing',
	'toast','toastprogress','todo','topnav','touch','traffic','travel','3dtrifold','trig','tropicalghana','typecounter','typetest','typewriter',
	'uitest','univ','unseenstrts','upload','upload1','urlparams','urlparams2','user','user2',
	'valueslider','vanilla','video','video2','viewport','vidbg','vidbg2','voisey','vtabs',
	'wave','waves','wavyloader','wordcube','wordswitcher','wts','wts1','wts2','wtslegacy','www',
	'xhr',
	'ytblp',
	'zbar',
];

// List ids for null projects (no index page).
const nullProjectIds = [
	'keygenius','liveserver','relativelink',
	'svsu','travisscott','oscilloscope',
	// 'resources','xyz','xyz',
];





/*********************************************************/




//
// // List page names.
// var labels = ['Homepage','Projects In-Progress','Favorite Projects'];
// var pageNames = [
// 					'chooser', 'evolution', 'finance', 'fitness', 'math', 'music', 'probability', 'reast', 'reast2', 'stocks', 'tabs',
// 					'acito', 'layouts', 'linktree',
// 					'bgvid', 'buttonpress', 'form3d', 'git', 'hero', 'image', 'logo', 'logoanimation', 'parallax', 'parallax2', 'popup', 'storage', 'ticker',
// 					'aspectratio', 'autocomplete', 'checkout', 'cluster', 'device', 'form', 'hero', 'lightSwitch', 'loading', 'nav', 'overlay', 'pricing', 'refresh', 'scale3d', 'scroller', 'scrollProgressBar', 'search', 'sidenav', 'slideshow', 'socialMedia', 'solarsystem', 'sphere', 'splash', 'sort', 'soundfx', 'syntax', 'template', 'user', 'viewport'
// 				];
// var pageNames2d = [
// 					['chooser', 'evolution', 'finance', 'fitness', 'math', 'music', 'probability', 'reast', 'reast2', 'stocks', 'tabs'] ,
// 					['acito', 'layouts', 'linktree'] ,
// 					['bgvid', 'buttonpress', 'form3d', 'git', 'hero', 'image', 'logo', 'logoanimation', 'parallax', 'parallax2', 'popup', 'storage', 'ticker'] ,
// 					['aspectratio', 'autocomplete', 'checkout', 'cluster', 'device', 'form', 'hero', 'lightSwitch', 'loading', 'nav', 'overlay', 'pricing', 'refresh', 'scale3d', 'scroller', 'scrollProgressBar', 'search', 'sidenav', 'slideshow', 'socialMedia', 'solarsystem', 'sphere', 'splash', 'sort', 'soundfx', 'syntax', 'template', 'user', 'viewport']
// 				];
// var pageUrls = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//


// List public project names.
// const projectPublicNames = [
// 	'chooser','finance', 'math', 'music', 'probability', 'stocks',
// 	'calc','cluster','tabs','db','diagram','flex','grid','igt','levels','matrix','mementomori','notes','phonecall','regexp','sidenav','tagtyper','tasks','waves'
// ];

