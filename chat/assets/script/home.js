


// Open search. 
function openSearch() {
	console.log('Opening chat search');

	// Clear previous search query. 
	document.getElementById('searchquery').value = '';

	// Activate search section. 
	let search = document.querySelector('article.home section.contacts div.search');
	search.classList.add('active');
	// console.log(search);

	// Bring focus to search box. 
	document.getElementById('searchquery').focus();
}

// Filter contacts by query. 
function filterContacts() {
	console.log('FIltering contacts by search query...');

	// Get filter query. 
	let query = document.getElementById('searchquery').value;
	console.log('query:',query);

	// Apply filter to contact list. 
	filterContactList(query);
}

// Close search. 
function closeSearch() {
	console.log('Closing chat search');

	// De-activate search section. 
	let search = document.querySelector('article.home section.contacts div.search');
	search.classList.remove('active');
	// console.log(search);

	// Clear previous search query. 
	document.getElementById('searchquery').value = '';

	// Remove filter from contact list. 
	filterContactList('');
}

// Apply filter to contact list. 
function filterContactList(query) {

	// Get all contact list items. 
	let allContactListItems = document.querySelectorAll('article.home section.contacts ul.contactlist li.contactitem');
	// console.log('allContactListItems',allContactListItems);

	// Apply contact list filter using given query. 
	if(query) {
		
		// Go thru all contact list items. 
		for(let contactitem of allContactListItems) {

			// Get contact's user id. 
			let contactid = 1*contactitem.getAttribute('data-userid');
			// console.log('contactid',contactid);

			// Check if contact's user data contains query. 
			let weGotAMatch = checkForMatch(query,contactid);

			// Show only matching contact list items. 
			if(weGotAMatch) contactitem.classList.remove('gone');
			else contactitem.classList.add('gone');
		}
	}

	// Remove contact list filter if no query provided. 
	else {

		// Go thru all contact list items. 
		for(let contactitem of allContactListItems) {
			
			// Show all contact list items. 
			contactitem.classList.remove('gone');
		}
	};

	/*****/

	// Check if contact's user data contains query. 
	function checkForMatch(q,id) {

		// Fix query. 
		q = q.toUpperCase();

		// Get and fix contact info. 
		let contact = userData[id];
		let f = contact.fname.toUpperCase();
		let l = contact.lname.toUpperCase();

		// Return condition. 
		return ( f.includes(q) || l.includes(q) );
	}
}
