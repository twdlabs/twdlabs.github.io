


// Define user navigation elements. 
const usernav = {
	// Get user navigation menu. 
	menu:document.querySelector('div#container nav.navbar div.bin div.navmenu.usermenu'),
	// Get toggler for user navigation menu. 
	toggler:document.querySelector('div#container nav.navbar div.bin a.togglebtn.um'),
};

// Define table navigation elements. 
const tablenav = {
	// Get table navigation menu. 
	menu:document.querySelector('div#container nav.navbar div.bin div.navmenu.tablemenu'),
	// Get toggler for table navigation menu. 
	toggler:document.querySelector('div#container nav.navbar div.bin a.togglebtn.tm'),
};


// Get entry composer. 
const entrycomposer = document.querySelector('div#container section.composer');
// Get all entry editors. 
const allentryeditors = document.querySelectorAll('div#container section.editor');
// Get all entry viewers. 
const allentryviewers = document.querySelectorAll('div#container section.viewer');

// Get all message boxes in message center. 
let msgcenterboxes = document.querySelectorAll('div#container section div.msgcenter div.msg');


/*****/


// Activate menu togglers. 
activateMenuTogglers();

// Activate form togglers. 
activateFormTogglers();

// Activate message center. 
activateMsgCenter();


/*****/


// Activate menu togglers. 
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
function toggleEntryComposer() {
	if(!entrycomposer) return;

	// Check if composer already open. 
	let alreadyopen = entrycomposer.classList.contains('open');

	// Open composer (if not already open). 
	if(!alreadyopen) {

		// Close all table entry editors. 
		closeEntryEditors();

		// Close all table entry viewers. 
		closeEntryViewers();

		// Open entry composer. 
		entrycomposer.classList.add('open');
		let selectedform = entrycomposer.querySelector('form input[type=text]');
		console.log('selectedform:',selectedform);
		if(selectedform) selectedform.focus();
	}
	// Close composer (if already open). 
	else {

		// Close entry composer. 
		entrycomposer.classList.remove('open');
	}
}

// Close table entry composer. 
function closeEntryComposer() {
	if(!entrycomposer) return;
	entrycomposer.classList.remove('open');
}

// Toggle table entry viewer. 
function toggleEntryViewer(viewbtn) {

	// Get entry id from view button. 
	let entryid = viewbtn.getAttribute('data-entryid');

	// Get selected entry viewer. 
	let selectedentryviewer = document.querySelector('div#container section.viewer#viewer'+entryid);
	if(!selectedentryviewer) return;

	// Check if viewer already open. 
	let alreadyopen = selectedentryviewer.classList.contains('open');

	// Open viewer (if not already open). 
	if(!alreadyopen) {

		// Close table entry composer. 
		closeEntryComposer();

		// Close all table entry editors. 
		closeEntryEditors();

		// Close all table entry viewers. 
		closeEntryViewers();

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

	// Get entry id from edit button. 
	let entryid = editbtn.getAttribute('data-entryid');

	// Get selected entry editor. 
	let selectedentryeditor = document.querySelector('div#container section.editor#editor'+entryid);
	if(!selectedentryeditor) return;

	// Check if editor already open. 
	let alreadyopen = selectedentryeditor.classList.contains('open');

	// Open editor (if not already open). 
	if(!alreadyopen) {

		// Close table entry composer. 
		closeEntryComposer();

		// Close all table entry editors. 
		closeEntryEditors();

		// Close all table entry viewers. 
		closeEntryViewers();

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

// Close all table entry editors. 
function closeEntryEditors() {

	// Go thru each editor. 
	for(let currenteditor of allentryeditors) {

		// Close editor. 
		currenteditor.classList.remove('open');
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


// Activate message center. 
function activateMsgCenter() {

	// Go thru each message box in message center. 
	for(let msgbox of msgcenterboxes) {
	
		// Activate clicks on message box. 
		msgbox.addEventListener('click',closeMsgBox);
	}

	/****/
	
	// Close message box. 
	function closeMsgBox(event) {

		// Get selected message box. 
		let selectedmsgbox = event.currentTarget;

		// Hide selected message box. 
		selectedmsgbox.classList.add('gone');

		// Remove selected message box (after delay). 
		setTimeout( ()=>{deleteMsgBox(selectedmsgbox)} , 750);

		/***/

		// Delete message box. 
		function deleteMsgBox(selectedmsgbox) {
			selectedmsgbox.remove();
		}
	}
}
