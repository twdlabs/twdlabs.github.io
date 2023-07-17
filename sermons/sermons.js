


// Define month full names. 
const monthnames = [ 
	'January','February','March', 
	'April','May','June', 
	'July','August','September', 
	'October','November','December', 
];

// Get destination for list of lectures. 
let lecturesdestination = document.querySelector('div#container ul.monthlist');

// Load list of lectures. 
loadLectures();



/****/



// Load list of lectures. 
function loadLectures() {

	// Initialize result. 
	let result = '';

	// Compile result. 
	for(let month of sermonData) {

		// Open month block. 
		result += `
		<!-- monthblock -->
		<li class="monthblock">`;

		// Add month header. 
		result += `
		<!-- monthhead -->
		<h2 class="monthhead">

			<!-- caption -->
			<span class="caption">${ getMonthName(month.monthid) }</span>
			<!-- /caption -->

			<!-- toggleindicator -->
			<div class="toggleindicator">

				<!-- icon -->
				<svg class="icon plus" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
				</svg>
				<!-- /icon -->

				<!-- icon -->
				<svg class="icon dash" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
				</svg>
				<!-- /icon -->

			</div>
			<!-- /toggleindicator -->

		</h2>
		<!-- /monthhead -->`;

		// Open month list. 
		result += `
		<!-- lecturelist -->
		<ul class="lecturelist">`;

		// Compile result. 
		for(let video of month.videolist) {
	
			// 
			if(video.videoid!='abcd1234') result += `
			<!-- lectureitem -->
			<li class="lectureitem">

				<!-- vidhead -->
				<h3 class="vidhead" title="${video.videoid}">${video.day} ${video.date}</h2>
				<!-- /vidhead -->

				<!-- video -->
				<div class="video">

					<!-- youtube -->
					<iframe class="youtube" src="https://www.youtube-nocookie.com/embed/${video.videoid}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					<!-- /youtube -->

				</div>
				<!-- /video -->

			</li>
			<!-- /lectureitem -->`;
		}

		// Close month list. 
		result += `
		</ul>
		<!-- /lecturelist -->`;

		// Close month block. 
		result += `
		</li>
		<!-- /monthblock -->`;
	}

	// Return result. 
	lecturesdestination.innerHTML = result;

	// Activate list togglers. 
	activateListTogglers();

	/****/

	// Get month name. 
	function getMonthName(monthid) {

		// Get year. 
		year = monthid.substr(0,4);

		// Get month number. 
		let monthindex = monthid.substr(4,2) - 1;

		// 
		return `${monthnames[monthindex]} ${year}`;
	}

	// Activate list togglers. 
	function activateListTogglers() {
		
		// Get list togglers. 
		const listtogglers = document.querySelectorAll('div#container ul.monthlist li.monthblock h2.monthhead');
		
		// Go thru list of list togglers. 
		for(let toggler of listtogglers) {
			toggler.addEventListener('click',toggleSelectedList);
		}

		/****/

		// Toggle selected list. 
		function toggleSelectedList(event) {

			// Get selected list. 
			// let selectedlist = event.currentTarget.nextElementSibling;

			// Get selected block. 
			let selectedblock = event.currentTarget.parentElement;

			// Toggle state of list. 
			selectedblock.classList.toggle('on');
		}
	}
}
