
let experience = [
	{
		jobtitle:'WordPress Development Intern',
		employer:'Command Web Services',
		city:'Saginaw, MI',
		startdate:'May 2021',
		enddate:'Present',
		duties:[
			'Build lead generation websites while applying web development principles and best practices',
			'Responsible for developing code using HTML, CSS, JavaScript, and PHP',
			'Support businesses in maintaining their websites using the WordPress content management system',
		]
	},
	{
		jobtitle:'Virtual Marketing Rotational Intern',
		employer:'Real Social Dynamics',
		city:'Chicago, IL',
		startdate:'Sep 2018',
		enddate:'Mar 2019',
		duties:[
			'Provided logistical support in organizing local community events and for promoting live events',
			'Responsible for maintaining online presence and improving search engine response rates',
			'Responsible for recommending new website optimizations while working closely with development team to implement changes',
		]
	},
	{
		jobtitle:'I.T. / Web Development Rotational Intern',
		employer:'Proctor Gallagher Institute',
		city:'Chicago, IL',
		startdate:'Sep 2016',
		enddate:'Jan 2017',
		duties:[
			'Responsible for developing custom modern responsive webpages for the company’s website using HTML, CSS, JavaScript, and WordPress',
		]
	},
	{
		jobtitle:'Cooperative System Maintenance Intern',
		employer:'Ansaldo STS',
		address:'1000 Technology Drive',
		city:'Pittsburgh, PA',
		startdate:'Aug 2011',
		enddate:'Jan 2013',
		duties:[
			'Supported senior technicians and engineers in the process of analyzing, developing, testing, and maintaining train dispatching and railway signaling systems',
			'Responsible for changes to system configuration files, and for providing solutions to software and hardware related issues',
		]
	},
	// {
	// 	jobtitle:'xyz',
	// 	employer:'xyz',
	// 	address:'xyz',
	// 	city:'xyz',
	// 	startdate:'xyz',
	// 	enddate:'xyz',
	// 	duties:[
	// 		'xyz',
	// 		'xyz',
	// 		'xyz',
	// 		'xyz',
	// 	]
	// }
];


/*****/


// Import work experience. 
importExperience();


/*****/


// Import work experience to resume section of page. 
function importExperience() {

	// Create result html. 
	let result = '';
	for(let h=0 ; h<experience.length ; h++) {
		// 
		let item = experience[h];

		// Add from list of experiences. 
		result += `
		<!-- details -->
		<div class="details">

			<!-- title -->
			<h4 class="title">${item.jobtitle}</h4>
			<!-- /title -->

			<!-- copy -->
			<p class="copy">
				<span class="company">${item.employer}</span><span class="comma">,</span>`;

				if(item.address) result += `
				<span class="location">${item.address}</span><span class="comma">,</span>`;

				result += `
				<span class="location">${item.city}</span>
			</p>
			<!-- /copy -->

			<!-- time -->
			<div class="time">${item.startdate} - ${item.enddate}</div>
			<!-- /time -->

			<ul>`;

			// Add from duties list from experience. 
			for(let i=0 ; i<item.duties.length ; i++) {
				result += `<li>${item.duties[i]}</li>`
			}

			result += `
			</ul>

		</div>
		<!-- /details -->`;
	}
	// console.log('result',result);

	// 
	document.getElementById('experience').innerHTML = result;
}
