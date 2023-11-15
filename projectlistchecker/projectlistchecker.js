


// Get result field for add list. 
const addlistfield = document.querySelector('div#container main.main div.item div.listfield textarea#addlist');
// console.log(addlistfield);

// Get result field for remove list. 
const removelistfield = document.querySelector('div#container main.main div.item div.listfield textarea#removelist');
// console.log(removelistfield);

// Get result field for original list. 
const origlistfield = document.querySelector('div#container main.main div.item div.listfield textarea.listpaster');
// console.log(origlistfield);


// Get counter for add list. 
const addcountfield = document.querySelector('div#container main.main div.item label.fieldlabel.add span.count');
// console.log(addcountfield);

// Get counter for remove list. 
const removecountfield = document.querySelector('div#container main.main div.item label.fieldlabel.remove span.count');
// console.log(removecountfield);

// Get counter for original list. 
const origcountfield = document.querySelector('div#container main.main div.item label.fieldlabel.folder span.count');
// console.log(origcountfield);


/*****/


// Paste full folder list. 
function pasteFolderList() {
	origlistfield.value = navigator.clipboard.readText();
	this.classList.add('yes');
	setTimeout( x=>{this.classList.remove('yes');} ,1500)
}

// Find differences between lists. 
function showDiffs() {

	// Get full folder list. 
	let fullfolderlist = (origlistfield.value).split('\n');
	origcountfield.textContent = fullfolderlist.length;
	console.log('Full folder list:',fullfolderlist);

	// Get list of ids to add (project folder w/o id listing). 
	let idaddlist = getDiffs(fullfolderlist,allProjectIds);
	let idaddhead = `${idaddlist.length} project id(s) missing. \nAdd project ids:`;
	addcountfield.textContent = idaddlist.length;
	console.log(idaddhead,idaddlist);

	// Get list of ids to remove (id listing w/o project folder). 
	let idremovelist = getDiffs(allProjectIds,fullfolderlist);
	let idremovehead = `${idremovelist.length} extraneous project id(s). \nRemove project ids:`;
	removecountfield.textContent = idremovelist.length;
	console.log(idremovehead,idremovelist);
	
	// Display result lists. 
	addlistfield.value = `${ idaddhead }\n${ idaddlist.join('\n') }`;
	removelistfield.value = `${ idremovehead }\n${ idremovelist.join('\n') }`;

	/****/

	// Get differences between lists. 
	function getDiffs(includeList,excludeList) {
		return includeList.filter( x=>!excludeList.includes(x) )
	}
}
