


// Load universal page components. 
startItUp();


/*****/


// Load universal page components. 
function startItUp() {
	
	// Load site navbar header. 
	loadNav();

	// Load site footer. 
	loadFooter();


	/*****/


	// Load external resource onto page. 
	function loadPiece(selector, resourceUrl, doneFunction) {
		// console.log( `loadPiece('${selector}', '${resourceUrl}', doneFunction)` );
	
		// Get destination for resource. 
		let destination = document.querySelector(selector);
		
		// Create and specify resource request. 
		const xhttp = new XMLHttpRequest();
		xhttp.open('GET',resourceUrl,false);
		xhttp.onreadystatechange = checkStatus;
		xhttp.onload = doneFunction;

		// Send resource request to server. 
		xhttp.send();
	
		// Call done function. 
		// doneFunction();
	
		/*****/
	
		// Check status of resource request. 
		function checkStatus() {
			// console.log('Checking status of resource request...');
	
			if(this.readyState==4 && this.status==200) {
				// Add requested resource to destination. 
				// destination.innerHTML = xhttp.responseText;
				destination.innerHTML = this.responseText;
			}
		}
	}
	
	// Load head navigation bar from file. 
	function loadNav() {
	
		// Get relative url of navbar file. 
		let navurl = getRelativeUrl('./navbar.html');
		console.log('Load navbar from:',navurl);
	
		// Load default navbar. Load header navigation and user data. 
		// $('#navbar').load(navurl, loadBoth);
		loadPiece('#navbar',navurl, loadBoth);
	
		// Add click handler for closing nav drawers. 
		document.getElementById('container').onclick = closeAllDrawersBut;
	
		/*****/
	
		// Load both. 
		function loadBoth() {
			loadNavList();
			loadUserData();
		}
	
		// Load header navigation. 
		function loadNavList() {
		
			// Create elements for navigation data items. 
			let result = '';
			let mainnavlist = navdata[0].data;
			for(item of mainnavlist) {
				// console.log('item',item);
				result += `
				<!-- navitem -->
				<li class="navitem">
		
					<!-- navlink -->
					<a class="navlink page" href="${ (item.url) ? (item.url) : 'javascript:void(0)' }">${item.name}</a>
					<!-- /navlink -->
		
				</li>
				<!-- /navitem -->`;
			}
			// console.log('result',result);
		
			// Add result to page. 
			document.querySelector('div#navlist ul.navlist').innerHTML = (result);
		}
	
		// Start up site for current user. 
		function loadUserData() {
			console.log('Starting up...');
			// if(!confirm('Start it up ?')) return;
	
			// Update accounts. 
			updateAccounts();
	
			// Update cart. 
			updateCart();
	
			// Update favorites. 
			updateFavs();
	
			// Complete startup. 
			console.log('Started up.');
	
			// Get user's name. 
			let firstname = ( isLoggedIn() ) ? ( userdata[currentuserid].fname ) : ( undefined );
	
			// Notify of status. 
			if(firstname) {
				console.log(`${firstname} is now logged in.`);
				// passTheToast(`Welcome, ${firstname}!`);
			}
			else console.log(`Nobody is logged in.`);
	
			// Set page's login status. 
			if( isLoggedIn() ) document.getElementById('navbar').classList.add('loggedin');
			else document.getElementById('navbar').classList.remove('loggedin');
		}
	}
	
	// Load footer bar from file. 
	function loadFooter() {
	
		// Get relative url of navbar file. 
		let footerurl = getRelativeUrl('./footer.html');
		console.log('Load footer from:',footerurl);
	
		// Load default footer. Load footer navigation. 
		// $('footer#footer').load(footerurl, loadNavLists);
		loadPiece('footer#footer',footerurl, loadNavLists);
	
		/*****/
	
		// Load footer navigation. 
		function loadNavLists() {
			
			// Get destination for elements. 
			let destination = document.querySelector('footer#footer section#nav');
	
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
	
					// Get parameters for result string. 
					let url = (navitem.url) ? (navitem.url) : 'javascript:void(0)';
					let innersvg = (navitem.innersvg) ? (navitem.innersvg) : (`<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>`);
					let iconclass = (navitem.innersvg)?(''):('arrow');
	
					// Create result string. 
					result += `
					<!-- navitem -->
					<li class="navitem">
	
						<!-- icon -->
						<svg class="icon ${ iconclass }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">${ innersvg }</svg>
						<!-- /icon -->
	
						<!-- navlink -->
						<a class="navlink" href="${ url }">${ navitem.name }</a>
						<!-- /navlink -->
						
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
	
				<!-- textcopy -->
				<p class="textcopy">
	
					<!-- #email -->
					<input type="email" id="email" placeholder="Enter your email..." autocomplete="off">
					<!-- /#email -->
	
					<!-- #subscribe -->
					<button id="subscribe">Subscribe</button>
					<!-- /#subscribe -->
					
				</p>
				<!-- /textcopy -->
	
			</div>
			<!-- /col -->`;
	
			// Add elements to page. 
			destination.innerHTML = result;
		}
	}
}
