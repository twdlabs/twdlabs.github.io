


// Get current url search parameters. 
const urlparams = new URLSearchParams(window.location.search);

// Get id of current table entry. 
const tableid = urlparams.get('tableid');
console.log('tableid:',tableid);
