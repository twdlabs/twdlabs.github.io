


// Select CRUD table by id. 
function selectTableById(selectedtableid) {

	// Define ids of database tables. 
	let databasetableids = ['shots','holes','clubs',];

	// Show selected table. 
	showSelectedTable();

	// Show selected table. 
	function showSelectedTable() {

		// Define selector prefix. 
		let prefix = 'div#container section.crud.';

		// Go thru each table id. 
		for(let tid of databasetableids) {

			// Define selector. 
			let selector = prefix+tid;

			// Get current section. 
			let section = document.querySelector(selector);
			if(tid==selectedtableid) section.classList.add('on');
			else section.classList.remove('on');
		}
	}
}
