


// Get current search parameters from url. 
const urlparams = new URLSearchParams(window.location.search);

// Get id of selected table. 
const tableid = urlparams.get('tableid');
console.log('tableid:',tableid);

// Get id of selected table entry. 
const entryid = urlparams.get('entryid');
console.log('entryid:',entryid);
