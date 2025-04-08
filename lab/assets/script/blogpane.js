


// Get components of tag filter pane. 
const tagfilterpane = {

	// Get container for filter pane. 
	block: document.querySelector('div#container section.blog div.grid div.body div.filterpane'),

	// Get buttons in filter pane. 
	applybtn: document.querySelector('div#container section.blog div.grid div.body div.filterpane div.btnpanel div.applybtn'),
	clearbtn: document.querySelector('div#container section.blog div.grid div.body div.filterpane div.btnpanel div.clearbtn'),

	// Get destination for grouped types of filter items in filter pane. 
	filterlistdestination: document.querySelector('div#container section.blog div.grid div.body div.filterpane ul.filtergroups'),
	// Get group headers in filter pane. 
	// groupheaders: document.querySelectorAll('div#container section.blog div.grid div.body div.filterpane ul.filtergroups li.filtergroup div.filterblock div.blockhead'),
	// Get tag filter controllers. 
	tagfiltercontrollers:undefined,

	// Get destination for list of applied filters. 
	taglistdestination: document.querySelector('div#container section.blog div.grid div.body div.appliedfilters ul.taglist'),
};
// console.log('Tag filter pane components:',tagfilterpane);

// Get components of layout style pane. 
const layoutstylepane = {

	// Get container for layout style pane. 
	block: document.querySelector('div#container section.blog div.grid div.body div.stylepane'),
};

// Get components of settings pane. 
const settingspane = {

	// Get container for settings pane. 
	block: document.querySelector('div#container section.blog div.grid div.body div.settingspane'),

	// Get switch for filter type (matching any criterion vs matching all criteria). 
	scopeswitch: {
		anybtn: document.querySelector('div#container section.blog div.grid div.body div.settingspane div.switchpanel div.switchblock span.choice.any'),
		allbtn: document.querySelector('div#container section.blog div.grid div.body div.settingspane div.switchpanel div.switchblock span.choice.all'),
		switchcontroller: document.querySelector('div#container section.blog div.grid div.body div.settingspane div.switchpanel div.switchblock label.switch input.switchcontroller.anyall'),
	},

	// Get switch for search filter type (post layout modification vs post layout reload). 
	strengthswitch: {
		softbtn: document.querySelector('div#container section.blog div.grid div.body div.settingspane div.switchpanel div.switchblock span.choice.soft'),
		hardbtn: document.querySelector('div#container section.blog div.grid div.body div.settingspane div.switchpanel div.switchblock span.choice.hard'),
		switchcontroller: document.querySelector('div#container section.blog div.grid div.body div.settingspane div.switchpanel div.switchblock label.switch input.switchcontroller.softhard'),
	},
};


/*****/


// Close all window panes. 
function closeWindowPanes() {

	// Close settings pane. 
	settingspane['block'].classList.remove('open');

	// Close tag filter pane. 
	tagfilterpane['block'].classList.remove('open');
}

// Toggle tag filter pane. 
function toggleTagFilterPane() {

	// Close all window panes. 
	closeWindowPanes();

	// Toggle tag filter pane. 
	tagfilterpane['block'].classList.toggle('open');
}

// Toggle settings pane. 
function toggleSettingsPane() {

	// Close all window panes. 
	closeWindowPanes();

	// Toggle settings pane. 
	settingspane['block'].classList.toggle('open');
}

// Toggle layout style pane. 
function toggleStylePane() {

	// Close all window panes. 
	closeWindowPanes();

	// Toggle tag filter pane. 
	layoutstylepane['block'].classList.toggle('open');
}
