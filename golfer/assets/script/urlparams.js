


// Get current search parameters from url. 
const urlparams = new URLSearchParams(window.location.search);

// Get id of selected table (for editor). 
let selectedtableid = urlparams.get('tid');

// Check if on viewer page. 
let onviewerpage = (!selectedtableid) && (typeof displaytableid!='undefined');
// Get id of selected table (for viewer). 
if(onviewerpage) selectedtableid = displaytableid;

// Get id of selected table entry. 
let selectedentryid = urlparams.get('eid');
// Get id of associated table entries. 
let associatedclubid = urlparams.get('cid');
let associatedholeid = urlparams.get('hid');

if(selectedtableid) console.log('Selected table id:',selectedtableid);
if(selectedentryid) console.log('Selected entry id:',selectedentryid);
if(associatedclubid) console.log('Associated club entry id:',associatedclubid);
if(associatedholeid) console.log('Associated hole entry id:',associatedholeid);
