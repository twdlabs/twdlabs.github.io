


// Define month full names. 
const monthnames = [ 
	'January','February','March', 
	'April','May','June', 
	'July','August','September', 
	'October','November','December', 
];

// Get destination for list of sermon categories. 
let lecturesdestination = document.querySelector('div#container ul.categorylist');


/****/


// Load list of sermons. 
loadSermonsByMonth();


/****/


// Load list of sermons by month. 
function loadSermonsByMonth() {

	// Initialize result. 
	let result = '';

	// TODO: Sort sermon data in reverse chronological order (recent first). 
	sermonData.sort( (a,b)=>(b.monthid-a.monthid) );

	// Compile result. 
	for(let monthdata of sermonData) {
		if(monthdata.videolist.length==0) continue;

		// Open category block. 
		result += `
		<!-- categoryblock -->
		<li class="categoryblock">`;

		// Add category header. 
		result += `
		<!-- categoryhead -->
		<h2 class="categoryhead">

			<!-- caption -->
			<span class="caption">${ getMonthName(monthdata) }</span>
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
		<!-- /categoryhead -->`;

		// Open category list. 
		result += `
		<!-- lecturelist -->
		<ul class="lecturelist">`;

		// Compile list of sermons. 
		for(let video of monthdata.videolist) {
	
			// 
			if(video.videoid!='abcd1234') result += `
			<!-- lectureitem -->
			<li class="lectureitem" data-year="${monthdata.year}" data-month="${1*monthdata.month}" data-date="${video.date}">

				<!-- vidhead -->
				<h3 class="vidhead" title="${video.videoid}">${video.day} ${video.date*1}</h2>
				<!-- /vidhead -->
				
				<!-- thumbnail -->
				<a class="thumbnail" href="https://www.youtube-nocookie.com/embed/${video.videoid}" target="youtube" style="background-image:url('https://i.ytimg.com/vi/${video.videoid}/maxresdefault.jpg');"></a>
				<!-- /thumbnail -->

			</li>
			<!-- /lectureitem -->`;
		}

		// Close category list. 
		result += `
		</ul>
		<!-- /lecturelist -->`;

		// Close category block. 
		result += `
		</li>
		<!-- /categoryblock -->`;
	}

	// Return result. 
	lecturesdestination.innerHTML = result;

	// Activate list togglers. 
	activateListTogglers();

	/****/

	// Get month name. 
	function getMonthName(monthdata) {

		// Get year. 
		year = monthdata.year;

		// Get month number. 
		let monthindex = monthdata.month*1 - 1;

		// 
		return `${monthnames[monthindex]} ${year}`;
	}
}

// Load list of sermons by category. 
function loadSermonsByCategory() {

	// Initialize result. 
	let result = '';

	// TODO: Compile result. 

	// Return result. 
	lecturesdestination.innerHTML = result;

	// Activate list togglers. 
	activateListTogglers();
}

// Load list of sermons by book reference. 
function loadSermonsByBook() {

	// Initialize result. 
	let result = '';

	// TODO: Compile result. 

	// Return result. 
	lecturesdestination.innerHTML = result;

	// Activate list togglers. 
	activateListTogglers();
}

// Activate list togglers. 
function activateListTogglers() {
	
	// Get list togglers. 
	const listtogglers = document.querySelectorAll('div#container section.playlist ul.categorylist li.categoryblock h2.categoryhead');
	
	// Go thru list togglers. 
	for(let toggler of listtogglers) {
		toggler.addEventListener('click',toggleSelectedList);
	}

	/****/

	// Toggle selected list. 
	function toggleSelectedList(event) {

		// Get selected category block. 
		let selectedblock = event.currentTarget.parentElement;
		console.log(selectedblock.style.maxHeight);
		console.log(selectedblock.scrollHeight);

		// Get selected list. 
		let selectedlist = selectedblock.querySelector('ul.lecturelist');

		// Check if selected list is already open. 
		let isAlreadyOpen = selectedlist.style.maxHeight || selectedblock.classList.contains('open');

		// Toggle state of selected list. 
		if(isAlreadyOpen) {
			closeSelectedList();
		}
		else {
			openSelectedList();
		}
		
		/***/

		// Open selected category list. 
		function openSelectedList() {
			console.log('Opening...');
			
			// Toggle height of list (to full size). 
			selectedlist.style.maxHeight = `${selectedlist.scrollHeight}px`;

			// Toggle state of list (to open). 
			selectedblock.classList.add('open');
		}

		// Close selected category list. 
		function closeSelectedList() {
			console.log('Closing...');
			
			// Toggle height of list (to zero). 
			selectedlist.style.maxHeight = null;

			// Toggle state of list (to closed). 
			selectedblock.classList.remove('open');
		}
	}
}

// Open sermon. 
function openSermon(event) {

	// Get selected sermon link. 
	let selectedLink = event.currentTarget;

	// Highlight selected sermon link. 
	selectedLink.classList.add('active');

	// Scroll to video player. 
}
