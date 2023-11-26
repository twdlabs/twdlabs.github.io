


// Get main container. 
const container = document.querySelector('div#container');
// console.log('container:',container);


// Get components of list field: existing ids. 
const projectidfield = {
	listbox:document.querySelector('div#container main.main section.item#orig div.listfield textarea#idoriglist'),
	counter:document.querySelector('div#container main.main section.item#orig label.fieldlabel span.count'),
}
// console.log('projectidfield:',projectidfield);


// Get components of list field: id adds. 
const projectidaddfield = {
	listbox:document.querySelector('div#container main.main section.item#idadd div.listfield textarea#idaddlist'),
	counter:document.querySelector('div#container main.main section.item#idadd label.fieldlabel span.count'),
}
// console.log('projectidaddfield:',projectidaddfield);


// Get components of list field: id removals. 
const projectidremovefield = {
	listbox:document.querySelector('div#container main.main section.item#idremove div.listfield textarea#idremovelist'),
	counter:document.querySelector('div#container main.main section.item#idremove label.fieldlabel span.count'),
}
// console.log('projectidremovefield:',projectidremovefield);


// Get components of list field: project adds. 
const projectdetailaddfield = {
	listbox:document.querySelector('div#container main.main section.item#projectadd div.listfield textarea#projectaddlist'),
	counter:document.querySelector('div#container main.main section.item#projectadd label.fieldlabel span.count'),
}
// console.log('projectdetailaddfield:',projectdetailaddfield);


// Get components of list field: project group adds. 
const projectgroupaddfield = {
	listbox:document.querySelector('div#container main.main section.item#projectgroupadd div.listfield textarea#projectgroupaddlist'),
	counter:document.querySelector('div#container main.main section.item#projectgroupadd label.fieldlabel span.count'),
}
// console.log('projectgroupaddfield:',projectgroupaddfield);


/*****/


// Paste original list of project ids. 
function pasteFolderList() {

	// Paste original list of project ids. 
	projectidfield['listbox'].value = navigator.clipboard.readText();

	// Show indication of successful paste. 
	this.classList.add('yes');

	// Remove indication after a couple seconds. 
	setTimeout( ()=>{this.classList.remove('yes');} , 1500);
}

// Check differences between project lists. 
function checkProjects() {

	// Get original list of project ids. 
	let origprojectidlist = (projectidfield['listbox'].value).split('\n');
	projectidfield['counter'].textContent = origprojectidlist.length;
	console.log('Original project id list:',origprojectidlist);

	// Get list of project folders. 
	let projectfolderlist = getDiffsList(origprojectidlist,nullProjectIds);


	// Get list of ids to add (project folder w/o id listing). 
	let idaddlist = getDiffsList(projectfolderlist,allProjectIds);
	// Create label for id add list. 
	let idaddlabel = `missing project id(s)`;
	// Display result in list box. 
	displayResult(projectidaddfield,idaddlabel,idaddlist);


	// Get list of ids to remove (id listing w/o project folder). 
	let idremovallist = getDiffsList(allProjectIds,origprojectidlist);
	// Create label for id removal list. 
	let idremovelabel = `extraneous project id(s)`;
	// Display result in list box. 
	displayResult(projectidremovefield,idremovelabel,idremovallist);


	// Get list of projects to add (project ids w/o full listing). 
	let projectlistings = projectData.map(x=>x.projectid);
	console.log('projectlistings:',projectlistings);
	let projectaddlist = getDiffsList(allProjectIds, projectlistings);
	// Create label for project add list. 
	let projectaddlabel = `missing project listing(s)`;
	// Display result in list box. 
	displayResult(projectdetailaddfield,projectaddlabel,projectaddlist);


	// Get list of projects to add to group (project listings w/o affiliated group). 
	let projectgrouplistings = projectGroupData.map(x=>x.groupitemsidlist)/* .join() */;
	console.log('projectgrouplistings:',projectgrouplistings);
	let projectgroupaddlist = getDiffsList(xyzlist,xyzlist);
	// Create label for project group add list. 
	let projectgroupaddlabel = `project(s) without group`;
	// Display result in list box. 
	displayResult(projectgroupaddfield,projectgroupaddlabel,projectgroupaddlist);


	// Set completion state. 
	setCompletionState(idaddlist.length,idremovallist.length);

	/****/

	// Get differences between lists [ listA - listB ]. 
	function getDiffsList(listA,listB) {
		return listA.filter( item=>!listB.includes(item) );
	}

	// Make things abstract. 
	function xyz() {

		// 
	}

	// Display result in list box. 
	function displayResult(field,resultlabel,resultlist) {

		// Get count of given list. 
		let resultcount = resultlist.length;
		// resultlabel = resultcount + resultlabel;
		// console.log('resultcount:',resultcount);

		// Display result in list box. 
		field['listbox'].value = `${resultcount} ${ resultlabel }\n${ resultlist.join('\n') }`;;
		field['counter'].textContent = resultcount;
		console.log(resultcount,resultlabel,resultlist);
	}

	// Set completion state. 
	function setCompletionState(addcount,removalcount) {

		// Check if database completed. 
		let completed = addcount==0 && removalcount==0;
		
		// Show appropriate signals. 
		if(completed) {
			container.classList.remove('warn');
			container.classList.add('good');
		}
	
		// 
		else {
			container.classList.remove('good');
			container.classList.add('warn');
		}
	
		// 
		container.classList.add('done');
	}
}
