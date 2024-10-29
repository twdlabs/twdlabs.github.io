


// Get toggler for user navigation menu. 
let usermenutoggler = document.querySelector('div#container nav.navbar div.bin a.togglebtn.um');
// Get toggler for table navigation menu. 
let tablemenutoggler = document.querySelector('div#container nav.navbar div.bin a.togglebtn.tm');

// Get user navigation menu. 
let usernavigationmenu = document.querySelector('div#container nav.navbar div.bin div.navmenu.usermenu');
// Get table navigation menu. 
let tablenavigationmenu = document.querySelector('div#container nav.navbar div.bin div.navmenu.tablemenu');

// Get entry composer. 
const entrycomposer = document.querySelector('div#container section.composer');
// Get all entry editors. 
const allentryeditors = document.querySelectorAll('div#container section.datatable div.scroller table.table tbody.body td.cell section.editor');


/*****/


// Activate menu togglers. 
activateMenuTogglers();


/*****/


// Activate menu togglers. 
function activateMenuTogglers() {

	// Activate menu toggler for user menu. 
	usermenutoggler.addEventListener('click',toggleUserMenu);
	// usermenutoggler.addEventListener('mouseenter',toggleUserMenu);
	// usermenutoggler.addEventListener('mouseleave',toggleUserMenu);

	// Activate menu toggler for table menu. 
	tablemenutoggler.addEventListener('click',toggleTableMenu);
	// tablemenutoggler.addEventListener('mouseenter',toggleTableMenu);
	// tablemenutoggler.addEventListener('mouseleave',toggleTableMenu);
}


// Toggle user navigation menu. 
function toggleUserMenu() {

	// Check if menu already open. 
	let alreadyopen = usernavigationmenu.classList.contains('open');

	// Open menu (if not already open). 
	if(!alreadyopen) {

		// Close other menu(s). 
		tablenavigationmenu.classList.remove('open');

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

	// Check if menu already open. 
	let alreadyopen = tablenavigationmenu.classList.contains('open');

	// Open menu (if not already open). 
	if(!alreadyopen) {

		// Close other menu(s). 
		usernavigationmenu.classList.remove('open');

		// Open menu. 
		tablenavigationmenu.classList.add('open');
	}
	// Close menu (if already open). 
	else {

		// Close menu. 
		tablenavigationmenu.classList.remove('open');
	}
}


// Toggle table entry composer. 
function toggleEntryComposer() {

	// Check if composer already open. 
	let alreadyopen = entrycomposer.classList.contains('open');

	// Open composer (if not already open). 
	if(!alreadyopen) {

		// Close all table entry editors. 
		closeEntryEditors();

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
	entrycomposer.classList.remove('open');
}

// Toggle table entry editor. 
function toggleEntryEditor(editbtn) {

	// Get entry id from edit button. 
	let entryid = editbtn.getAttribute('data-entryid');

	// Get selected entry editor. 
	let entryeditor = document.querySelector('div#container section.datatable div.scroller table.table tbody.body td.cell section.editor#id'+entryid);

	// Check if editor already open. 
	let alreadyopen = entryeditor.classList.contains('open');

	// Open editor (if not already open). 
	if(!alreadyopen) {

		// Close table entry composer. 
		closeEntryComposer();

		// Close all table entry editors. 
		closeEntryEditors();

		// Open selected entry editor. 
		entryeditor.classList.add('open');
		let selectedform = entryeditor.querySelector('form input[type=text]');
		console.log('selectedform:',selectedform);
		if(selectedform) selectedform.focus();
	}
	// Close editor (if already open). 
	else {

		// Close selected entry editor. 
		entryeditor.classList.remove('open');
	}
}

// Close all table entry editors. 
function closeEntryEditors() {

	// Close all editor(s). 
	for(let currenteditor of allentryeditors) currenteditor.classList.remove('open');
}
