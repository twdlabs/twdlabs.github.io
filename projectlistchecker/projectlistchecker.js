


// Get main container. 
const container = document.querySelector('div#container');
// console.log(container);


// Get components of list field: id adds. 
const addfield = {
	list:document.querySelector('div#container main.main div.item div.listfield textarea#addlist'),
	counter:document.querySelector('div#container main.main div.item label.fieldlabel.add span.count'),
}
// console.log(addfield);


// Get components of list field: id removals. 
const removefield = {
	list:document.querySelector('div#container main.main div.item div.listfield textarea#removelist'),
	counter:document.querySelector('div#container main.main div.item label.fieldlabel.remove span.count'),
}
// console.log(removefield);


// Get components of list field: original. 
const origfield = {
	list:document.querySelector('div#container main.main div.item div.listfield textarea.listpaster'),
	counter:document.querySelector('div#container main.main div.item label.fieldlabel.folder span.count'),
}
// console.log(origfield);


/*****/


// Paste full folder list. 
function pasteFolderList() {

	// Paste full folder list. 
	origfield['list'].value = navigator.clipboard.readText();

	// Show indication of successful paste. 
	this.classList.add('yes');

	// Remove indication after a couple seconds. 
	setTimeout( ()=>{this.classList.remove('yes');} , 1500);
}

// Check differences between project lists. 
function checkProjects() {

	// Get full folder list. 
	let fullfolderlist = (origfield['list'].value).split('\n');
	origfield['counter'].textContent = fullfolderlist.length;
	console.log('Full folder list:',fullfolderlist);

	// Get list of project folders. 
	let projectfolderlist = getDiffsList(fullfolderlist,nullProjectIds);

	// Get list of ids to add (project folder w/o id listing). 
	let idaddlist = getDiffsList(projectfolderlist,allProjectIds);
	// Get count of add list. 
	let addcount = idaddlist.length;
	// Create label for id add list. 
	let idaddlabel = `${addcount} project id(s) missing. \nAdd project ids:`;
	addfield['counter'].textContent = addcount;
	console.log(idaddlabel,idaddlist);

	// Get list of ids to remove (id listing w/o project folder). 
	let idremovallist = getDiffsList(allProjectIds,fullfolderlist);
	// Get count of removal list. 
	let removalcount = idremovallist.length;
	// Create label for id removal list. 
	let idremovelabel = `${removalcount} extraneous project id(s). \nRemove project ids:`;
	removefield['counter'].textContent = removalcount;
	console.log(idremovelabel,idremovallist);
	
	// Display result lists. 
	addfield['list'].value = `${ idaddlabel }\n${ idaddlist.join('\n') }`;
	removefield['list'].value = `${ idremovelabel }\n${ idremovallist.join('\n') }`;

	// Show appropriate signals. 
	let good = addcount==0 && removalcount==0;
	if(good) {
		container.classList.remove('warn');
		container.classList.add('good');
	}
	else {
		container.classList.remove('good');
		container.classList.add('warn');
	}
	container.classList.add('done');

	/****/

	// Get differences between lists [ listA - listB ]. 
	function getDiffsList(listA,listB) {
		return listA.filter( item=>!listB.includes(item) );
	}
}
