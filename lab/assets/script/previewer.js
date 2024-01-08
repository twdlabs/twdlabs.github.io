


// Get page previewer. 
const pagepreviewer = document.querySelector('div#container section.desktop div.grid figure.previewer iframe.page');

// Get id of current project. 
const urlparams = new URLSearchParams(window.location.search);
const projectid = urlparams.get('pid');
// console.log('Project id:',projectid);

// Get data for current project. 
const projectdata = getProjectById(projectid);
console.log('Project data:',projectdata);

// Get name of current project. 
const projectname = projectdata ? projectdata.projectname : '';
console.log('Project name:',projectname);

// Get description of current project. 
const projectdesc = projectdata ? projectdata.projectdescription : '';
console.log('Project description:',projectdesc);


/*****/


// Customize category headers. 
customizeHeaders();

// Load post details. 
loadSelectedPost();


/*****/


// Customize category headers. 
function customizeHeaders() {
	if(!projectname) return;

	// Set custom document title. 
	document.title = `${projectname} | TWD Labs`;
	
	// Get custom headers for category name. 
	const custompageheaders = document.querySelectorAll('div#container section div.grid h1.head.custom');
	// console.log('Page headers:', [...custompageheaders].map( h => h.parentElement.parentElement) );
	
	// Set custom headers. 
	for(let header of custompageheaders) {
		header.innerHTML = projectname;
	}
	
	// Get custom paragraph for category description. 
	// const custompageparagraph = document.querySelector('section div.grid p.textcopy.custom');

	// Set custom paragraph to category description. 
	// custompageparagraph.innerHTML = projectdesc;
}

// Load post details in page previewer. 
function loadSelectedPost() {
	let validproject = projectid && getProjectById(projectid);
	pagepreviewer.src = validproject ? getRelativeUrl(`../${projectid}`) : '';
}
