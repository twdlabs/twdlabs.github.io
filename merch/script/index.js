

// Load navigation bar from file. 
$(document).ready(function() {
	
	// Load site navbar. 
	loadNav(atRootDirectory);

	// Load site footer. 
	loadFooter(atRootDirectory);

	// Start it up. 
	setTimeout(startItUp,500);
});


/*****/


// Start up site for current user. 
function startItUp() {
	console.log('Starting up...');
	// if(!confirm('Start it up ?')) return;

	// Update accounts. 
	updateAccounts();

	// Update cart. 
	updateCart();

	// Update favorites. 
	updateFavs();

	// Add product items to page. 
	addProductItems();

	// Complete startup. 
	console.log('Started up...');

	// Get user's name. 
	let firstname = ( isLoggedIn() ) ? ( userdata[currentuserid].fname ) : ( undefined );

	// Notify of status. 
	if(firstname) {
		console.log(`${firstname} is now logged in...`);
		passTheToast(`Welcome, ${firstname}!`);
	}
	else console.log(`Nobody is logged in...`);

	// Set page's login status. 
	if( isLoggedIn() ) document.getElementById('navbar').classList.add('loggedin');
	else document.getElementById('navbar').classList.remove('loggedin');
}


// Load navigation bar from file. 
function loadNav(atRootDirectory) {

	// Get relative url of navbar file. 
	let url = ( (atRootDirectory) ? ('') : ('../') ) + 'navbar.html';
	// console.log('Load navbar from:',url);

	// Load default navbar. Populate navigation lists. 
	$('#navbar').load(url, populateNavList);

	/*****/

	// Populate header navigation list. 
	function populateNavList() {
	
		// Create elements for navigation data items. 
		let result = '';
		for(item of navdata[0].data) {
			// console.log('item',item);
			result += `
			<!-- navitem -->
			<li class="navitem">
	
				<!-- navlink -->
				<a class="navlink page" href="${item.url}">${item.name}</a>
				<!-- /navlink -->
	
			</li>
			<!-- /navitem -->`;
		}
		// console.log('result',result);
	
		// Add result to page. 
		document.querySelector('div#navlist ul.navlist').innerHTML = (result);
	}
}


// Load footer bar from file. 
function loadFooter(atRootDirectory) {

	// Get relative url of navbar file. 
	let url = ( (atRootDirectory) ? ('') : ('../') ) + 'footer.html';
	// console.log('Load footer from:',url);

	// Load default footer. Populate navigation lists. 
	$('footer#footer').load(url, populateFooter);

	/*****/

	// Populate footer navigation list. 
	function populateFooter() {
		
		// Initialize result. 
		let result = '';

		// Create elements for navigation data items. 
		for(navlist of navdata) {
			// console.log('navlist', navlist);

			// Add column opener. 
			result += `
			<!-- col -->
			<div class="col">`;

			// Add list header. 
			result += `
			<!-- navhead -->
			<h3 class="navhead">${navlist.title}</h3>
			<!-- /navhead -->`;

			// Add list opener. 
			result += `
			<!-- navlist -->
			<ul class="navlist">`;

			// Add list items. 
			for(navitem of navlist.data) {
				// console.log('\tnavitem', navitem);

				// 
				let name = navitem.name;
				let url = navitem.url;
				result += `
				<!-- navitem -->
				<li class="navitem">`;
				result += `
					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">`;
				result += (navitem.innersvg) ? (navitem.innersvg) : (`
						<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>`);
				result += `
					</svg>
					<!-- /icon -->`;
				result += `
					<!-- navlink -->
					<a class="navlink" href="${url}">${name}</a>
					<!-- /navlink -->`;
				result += `
				</li>
				<!-- /navitem -->`;
			}

			// Add list closer. 
			result += `
			</ul>
			<!-- /navlist -->`;

			// Add column closer. 
			result += `
			</div>
			<!-- /col -->`;
		}

		// Create elements for newsletter form. 
		result += `
		<!-- col -->
		<div class="col wide">

			<!-- navhead -->
			<h3 class="navhead">Newsletter</h3>
			<!-- /navhead -->

			<!-- textcopy -->
			<p class="textcopy">
				Subscribe for latest updates.
			</p>
			<!-- /textcopy -->

			<!-- #email -->
			<input type="email" id="email" placeholder="Enter your email..." autocomplete="off">
			<!-- /#email -->

			<!-- #subscribe -->
			<button id="subscribe">Subscribe</button>
			<!-- /#subscribe -->

		</div>
		<!-- /col -->`;

		// Add result to page. 
		let navsection = document.querySelector('footer#footer section#nav');
		navsection.innerHTML = result;
	}
}
