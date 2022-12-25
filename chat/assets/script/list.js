

const contactfilterbox = document.querySelector('section#list div#contacts form.search');
const filterqueryfield = document.getElementById('searchquery');


// Open search. 
function openSearch() {
	console.log('Opening chat search');

	// Clear previous search query. 
	filterqueryfield.value = '';

	// Activate search section. 
	contactfilterbox.classList.add('active');
	// console.log(contactfilterbox);

	// Bring focus to search box. 
	filterqueryfield.focus();
}

// Filter contacts by query. 
function filterContacts() {
	console.log('FIltering contacts by search query...');

	// Get filter query. 
	let filterquery = filterqueryfield.value;
	console.log('Filter query:',filterquery);

	// Apply filter to contact list. 
	filterContactList(filterquery);
}

// Close search. 
function closeSearch() {
	console.log('Closing chat search');

	// De-activate search section. 
	contactfilterbox.classList.remove('active');
	// console.log(contactfilterbox);

	// Clear previous search query. 
	filterqueryfield.value = '';

	// Remove filter from contact list. 
	filterContactList('');
}

// Apply filter to contact list. 
function filterContactList(query) {

	// Get all contact list items. 
	let allContactListItems = document.querySelectorAll('section#list div#contacts ul.contactlist li.contactitem');
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
		let contact = userdata[id];
		let f = contact.fname.toUpperCase();
		let l = contact.lname.toUpperCase();

		// Return condition. 
		return ( f.includes(q) || l.includes(q) );
	}
}
