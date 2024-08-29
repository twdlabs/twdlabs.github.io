


// Get current search parameters from url. 
const urlparams = new URLSearchParams(window.location.search);

// Get id of selected table (for editor). 
let selectedtableid = urlparams.get('tid');
// Get id of selected table (for viewer). 
if( !selectedtableid && typeof displaytableid!='undefined' ) selectedtableid = displaytableid;

// Get id of selected table entry. 
let selectedentryid = urlparams.get('eid');

console.log('Selected table id:',selectedtableid);
console.log('Selected table entry id:',selectedentryid);
