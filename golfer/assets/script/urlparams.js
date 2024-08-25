


// Get current search parameters from url. 
const urlparams = new URLSearchParams(window.location.search);

// Get id of selected table. 
const selectedtableid = urlparams.get('tid');
console.log('Selected table id:',selectedtableid);

// Get id of selected table entry. 
const selectedentryid = urlparams.get('eid');
console.log('Selected table entry id:',selectedentryid);
