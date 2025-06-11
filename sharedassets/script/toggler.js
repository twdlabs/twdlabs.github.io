


// Get entry composer. 
// const entrycomposer = document.querySelector('div#container section.composer');
// Get all entry composers. 
const allentrycomposers = document.querySelectorAll('div#container section.composer');
// Get all entry editors. 
const allentryeditors = document.querySelectorAll('div#container section.editor');
// Get all entry viewers. 
const allentryviewers = document.querySelectorAll('div#container section.viewer');
// Get all entry delete viewers. 
// const alldeleteentryviewers = document.querySelectorAll('div#container section.deleteviewer');

// Define table navigation elements. 
const tablenav = {
	// Get table navigation menu. 
	menu:document.querySelector('div#container nav.navbar div.bin div.navmenu.tablemenu'),
	// Get toggler for table navigation menu. 
	toggler:document.querySelector('div#container nav.navbar div.bin a.togglebtn.tm'),
};


// Define user navigation elements. 
const usernav = {
	// Get user navigation menu. 
	menu:document.querySelector('div#container nav.navbar div.bin div.navmenu.usermenu'),
	// Get toggler for user navigation menu. 
	toggler:document.querySelector('div#container nav.navbar div.bin a.togglebtn.um'),
};


/*****/


// Activate navigation menu togglers. 
activateMenuTogglers();

// Activate form togglers. 
activateFormTogglers();

// Restore selected theme. 
restoreTheme();

// Select theme. 
// selectTheme();


/*****/



// Activate navigation menu togglers. 
function activateMenuTogglers() {

	let usermenutoggler = usernav['toggler'];
	let usernavigationmenu = usernav['menu'];
	let tablemenutoggler = tablenav['toggler'];
	let tablenavigationmenu = tablenav['menu'];

	// Activate menu toggler for user menu. 
	if( usermenutoggler ) {
		usermenutoggler.addEventListener('click',toggleUserMenu);
		// usermenutoggler.addEventListener('mouseenter',toggleUserMenu);
		// usermenutoggler.addEventListener('mouseleave',toggleUserMenu);
	}

	// Activate menu toggler for table menu. 
	if( tablemenutoggler ) {
		tablemenutoggler.addEventListener('click',toggleTableMenu);
		// tablemenutoggler.addEventListener('mouseenter',toggleTableMenu);
		// tablemenutoggler.addEventListener('mouseleave',toggleTableMenu);
	}

	/****/

	// Toggle user navigation menu. 
	function toggleUserMenu() {
		console.log('user navigation menu:',usernavigationmenu);
		if(!usernavigationmenu) return;
	
		// Check if menu already open. 
		let alreadyopen = usernavigationmenu.classList.contains('open');
	
		// Open menu (if not already open). 
		if(!alreadyopen) {
	
			// Close other menu(s). 
			if(tablenavigationmenu) tablenavigationmenu.classList.remove('open');
	
			// Open menu. 
			usernavigationmenu.classList.add('open');
		}
		// Close menu (if already open). 
		else {
	
			// Close menu. 
			usernavigationmenu.classList.remove('open');
		}
	}
	
	// Toggle table navigation menu. 
	function toggleTableMenu() {
		console.log('table navigation menu:',tablenavigationmenu);
		if(!tablenavigationmenu) return;
	
		// Check if menu already open. 
		let alreadyopen = tablenavigationmenu.classList.contains('open');
	
		// Open menu (if not already open). 
		if(!alreadyopen) {
	
			// Close other menu(s). 
			if(usernavigationmenu) usernavigationmenu.classList.remove('open');
	
			// Open menu. 
			tablenavigationmenu.classList.add('open');
		}
		// Close menu (if already open). 
		else {
	
			// Close menu. 
			tablenavigationmenu.classList.remove('open');
		}
	}
}

// TODO: Activate form togglers. 
function activateFormTogglers() {

	// 
}

// Toggle table entry composer. 
function toggleEntryComposer(newentrybtn) {
	console.log('toggleEntryComposer',newentrybtn);

	// Get table id from 'new entry' button. 
	let tableid = newentrybtn.getAttribute('data-tableid');

	// Get selected entry composer. 
	let selectedentrycomposer = document.querySelector(`div#container section.composer#${tableid}composer`);
	console.log('selectedentrycomposer:',selectedentrycomposer);
	if(!selectedentrycomposer) return;

	// Check if composer already open. 
	let alreadyopen = selectedentrycomposer.classList.contains('open');

	// Open composer (if not already open). 
	if(!alreadyopen) {

		// Close all table entry windows. 
		closeAllEntryWindows();

		// Open entry composer. 
		selectedentrycomposer.classList.add('open');
		let selectedform = selectedentrycomposer.querySelector('form input[type=text]');
		console.log('selectedform:',selectedform);
		if(selectedform) selectedform.focus();
	}
	// Close composer (if already open). 
	else {

		// Close entry composer. 
		selectedentrycomposer.classList.remove('open');
	}
}
// Toggle table entry viewer. 
function toggleEntryViewer(viewbtn) {
	console.log('toggleEntryViewer',viewbtn);

	// Get table id from edit button. 
	let tableid = viewbtn.getAttribute('data-tableid');
	// Get entry id from view button. 
	let entryid = viewbtn.getAttribute('data-entryid');

	// Get selected entry viewer. 
	let selectedentryviewer = document.querySelector(`div#container section.viewer#${tableid}viewer${entryid}`);
	console.log('selectedentryviewer:',selectedentryviewer);
	if(!selectedentryviewer) return;

	// Check if viewer already open. 
	let alreadyopen = selectedentryviewer.classList.contains('open');

	// Open viewer (if not already open). 
	if(!alreadyopen) {

		// Close all table entry windows. 
		closeAllEntryWindows();

		// Open selected entry viewer. 
		selectedentryviewer.classList.add('open');
		let selectedform = selectedentryviewer.querySelector('form input[type=text]');
		console.log('selectedform:',selectedform);
		if(selectedform) selectedform.focus();
	}
	// Close viewer (if already open). 
	else {

		// Close selected entry viewer. 
		selectedentryviewer.classList.remove('open');
	}
}
// Toggle table entry editor. 
function toggleEntryEditor(editbtn) {
	console.log('toggleEntryEditor',editbtn);

	// Get table id from edit button. 
	let tableid = editbtn.getAttribute('data-tableid');
	// Get entry id from edit button. 
	let entryid = editbtn.getAttribute('data-entryid');

	// Get selected entry editor. 
	let selectedentryeditor = document.querySelector(`div#container section.editor#${tableid}editor${entryid}`);
	console.log('selectedentryeditor:',selectedentryeditor);
	if(!selectedentryeditor) return;

	// Check if editor already open. 
	let alreadyopen = selectedentryeditor.classList.contains('open');

	// Open editor (if not already open). 
	if(!alreadyopen) {

		// Close all table entry windows. 
		closeAllEntryWindows();

		// Open selected entry editor. 
		selectedentryeditor.classList.add('open');
		let selectedform = selectedentryeditor.querySelector('form input[type=text]');
		console.log('selectedform:',selectedform);
		if(selectedform) selectedform.focus();
	}
	// Close editor (if already open). 
	else {

		// Close selected entry editor. 
		selectedentryeditor.classList.remove('open');
	}
}
// Toggle table entry delete viewer. 
function toggleEntryDeleter(deletebtn) {
	console.log('toggleEntryDeleter',deletebtn);

	// Get table id from edit button. 
	let tableid = deletebtn.getAttribute('data-tableid');
	// Get entry id from edit button. 
	let entryid = deletebtn.getAttribute('data-entryid');

	// Get selected entry delete viewer. 
	let selectedentrydeleter = document.querySelector(`div#container section.deleteviewer#${tableid}deleteviewer${entryid}`);
	console.log('selectedentrydeleter:',selectedentrydeleter);
	if(!selectedentrydeleter) return;

	// Check if delete viewer already open. 
	let alreadyopen = selectedentrydeleter.classList.contains('open');

	// Open delete viewer (if not already open). 
	if(!alreadyopen) {

		// Close all table entry windows. 
		closeAllEntryWindows();

		// Open selected entry delete viewer. 
		selectedentrydeleter.classList.add('open');
		let selectedform = selectedentrydeleter.querySelector('form input[type=text]');
		console.log('selectedform:',selectedform);
		if(selectedform) selectedform.focus();
	}
	// Close delete viewer (if already open). 
	else {

		// Close selected entry delete viewer. 
		selectedentrydeleter.classList.remove('open');
	}
}

// Close all table entry composers. 
function closeEntryComposers() {

	// Go thru each composer. 
	for(let currentcomposer of allentrycomposers) {

		// Close composer. 
		currentcomposer.classList.remove('open');
	}
}
// Close all table entry viewers. 
function closeEntryViewers() {

	// Go thru each viewer. 
	for(let currentviewer of allentryviewers) {

		// Close viewer. 
		currentviewer.classList.remove('open');
	}
}
// Close all table entry editors. 
function closeEntryEditors() {

	// Go thru each editor. 
	for(let currenteditor of allentryeditors) {

		// Close editor. 
		currenteditor.classList.remove('open');
	}
}

// Close all table entry windows. 
function closeAllEntryWindows() {

	// Close all table entry composers. 
	closeEntryComposers();

	// Close all table entry viewers. 
	closeEntryViewers();

	// Close all table entry editors. 
	closeEntryEditors();
}


// Restore selected theme. 
function restoreTheme() {

	// Check for currently selected theme. 
	let selectedtheme = localStorage.getItem('selectedtheme');
	console.log('Selected theme:',selectedtheme);

	// Apply currently selected theme. 
	if(selectedtheme=='dark') document.body.classList.add('dark');
}
