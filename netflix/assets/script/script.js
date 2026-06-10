


// Get navbar. 
const navbar = document.querySelector('div#container nav.navbar');
// console.log('Navbar:',navbar);

// Get components of billboard. 
const billboard = {

	// Define index of selected media. 
	selectedmediaindex:-1,

	// Get play button. 
	playbtn: document.querySelector('div#container div.app div.bbrow div.billboard div.poster div.vignette div.actionbox a.playbtn'),
	// Get more button. 
	morebtn: document.querySelector('div#container div.app div.bbrow div.billboard div.poster div.vignette div.actionbox a.morebtn'),

	// Get billboard media poster. 
	mediaposter: document.querySelector('div#container div.app div.bbrow div.billboard div.mediaposter'),
	// Get billboard media poster image. 
	mediaposterimg: document.querySelector('div#container div.app div.bbrow div.billboard div.mediaposter img.hero'),
	// Get billboard media title. 
	mediatitle: document.querySelector('div#container div.app div.bbrow div.billboard div.poster div.vignette div.mediatitle'),
	// Get billboard media description. 
	mediadescription: document.querySelector('div#container div.app div.bbrow div.billboard div.poster div.vignette div.mediadescription'),
};
// console.log('Billboard:',billboard);

// Get components of slide rows. 
const sliderows = {

	// Get all slide row heads. 
	grid:document.querySelector('div#container div.app div.slidergrid'),

	// Get all slide row heads. 
	// heads:document.querySelectorAll('div#container div.app div.sldrow h2.rowhead'),
	// Get all slide row head titles. 
	// titles:document.querySelectorAll('div#container div.app div.sldrow h2.rowhead a.rowtitle'),
	// Get all slide row dot lists. 
	// dotlists:document.querySelectorAll('div#container div.app div.sldrow h2.rowhead ul.dotlist'),

	// Get all slide row bodies. 
	// bodies:document.querySelectorAll('div#container div.app div.sldrow div.rowbody'),
	// Get all slide row shifter buttons. 
	// leftshifterbtns:document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.shifter.leftbtn'),
	// rightshifterbtns:document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.shifter.rightbtn'),
	// Get all slide row media lists in row bodies. 
	// bodymedialists:document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.slider ul.medialist'),
}
// console.log('Slide rows:',sliderows);


/*****/


// Activate dynamic change of navbar. 
activateDynamicNavbar();

// Set random media item as featured media on billboard. 
featureBillboardMedia();

// Load media sliders. 
loadMediaSliders();

// Activate overlay button. 
activateOverlayBtns();
