


// Get main container. 
const maincontainer = document.querySelector('div#container');
// Get page content box. 
const mainpagecontent = document.querySelector('div#container main#pagecontent');

// Get open button. 
// const openbtn = document.querySelector('div#container header#header nav.navmenu.b ul.navlist li.navitem a.navlink.search');
// Get close button. 
const closebtn = document.querySelector('div#container div#searchoverlay section.top div.input div.closebtn');

// Get search overlay window. 
const searchOverlay = document.querySelector('div#container div#searchoverlay');
// Get search query field. 
const searchField = document.querySelector('div#container div#searchoverlay section.top div.input input#searchquery');
// Get search results box. 
const resultsBox = document.querySelector('div#container div#searchoverlay section.bottom div#resultsbox');


/*****/


// Add header. 
loadHeader();

// Add breadcrumb trail. 
loadTrail();

// Add footer. 
loadFooter();

// Activate live search. 
activateLiveSearch();


/*****/


// Load header. 
function loadHeader() {
	// console.log('Loading header...');

	// Define components of header. 
	const navheadlink = `
	<!-- navlink -->
	<a class="navlink head" href="${ getRelativeUrl('./') }">

		<!-- logo -->
		<svg class="logo icon awardfull" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
			<path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
			<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
		</svg>
		<!-- /logo -->

		<!-- caption -->
		<span class="caption">
			<strong>True</strong>
			University
		</span>
		<!-- /caption -->
		
	</a>
	<!-- /navlink -->`;
	const navpagelist = `
	<!-- pagelist -->
	<ul class="navlist pagelist">
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a class="navlink" href="${ getRelativeUrl('./story') }">Story</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a class="navlink" href="${ getRelativeUrl('./programs') }">Programs</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->

		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a class="navlink" href="${ getRelativeUrl('./events') }">Events</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a class="navlink" href="${ getRelativeUrl('./blog') }">Blog</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
	</ul>
	<!-- /pagelist -->`;
	const navaccountlist = `
	<!-- accountlist -->
	<ul class="navlist accountlist in">
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a href="javascript:void(0)" class="navlink btn btnorange">
				<span class="img"></span>
				<span class="caption">My Notes</span>
			</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a href="javascript:void(0)" class="navlink btn btnred logoutbtn">
				<span class="img"></span>
				<img src="${ getRelativeUrl('./../resources/images/user/avatar-m.png') }"/>
				<span class="caption">Log out</span>
			</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
	</ul>
	<!-- /accountlist -->
	
	<!-- accountlist -->
	<ul class="navlist accountlist out">
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a href="javascript:void(0)" class="navlink btn btnred">
				<span class="img"></span>
				<span class="caption">Sign Up</span>
			</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a href="javascript:void(0)" class="navlink btn btnorange loginbtn">
				<span class="img"></span>
				<span class="caption">Login</span>
			</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
	</ul>
	<!-- /accountlist -->

	<!-- profile -->
	<a class="profile" href="javascript:void(0)">

		<!-- avatar -->
		<img class="avatar" src="${ getRelativeUrl('./../resources/images/user/avatar-m.png') }">
		<!-- /avatar -->

	</a>
	<!-- /profile -->`;
	const navremotelist = `
	<!-- remotelist -->
	<ul class="navlist remotelist">
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a href="javascript:void(0)" class="navlink toggler">

				<!-- icon -->
				<svg class="icon bars" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
				</svg>
				<!-- /icon -->

				<!-- icon -->
				<svg class="icon cross" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<!-- <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> -->
					<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
				</svg>
				<!-- /icon -->

			</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a href="javascript:void(0)" class="navlink search">

				<!-- icon -->
				<svg class="icon search" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
				</svg>
				<!-- /icon -->

			</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->
		
	</ul>
	<!-- /remotelist -->`;
	
	// Define general header. 
	const header = `
	<!-- #header -->
	<header id="header">
		
		<!-- main -->
		<main>

			<!-- navhead -->
			<h1 class="navhead">
				${navheadlink}
			</h1>
			<!-- /navhead -->

			<!-- navmenu -->
			<nav class="navmenu a">
				${navpagelist}
				${navaccountlist}
			</nav>
			<!-- /navmenu -->

			<!-- navmenu -->
			<nav class="navmenu b">
				${navremotelist}
			</nav>
			<!-- /navmenu -->

		</main>
		<!-- /main -->
		
	</header>
	<!-- /#header -->`;

	// Load header onto page (before opening of main page content). 
	// mainpagecontent.insertAdjacentHTML('beforebegin',header);

	// Load header onto page (after opening of main container). 
	maincontainer.insertAdjacentHTML('afterbegin',header);

	// Activate header buttons. 
	activateHeaderBtns();

	/****/

	// Activate header buttons. 
	function activateHeaderBtns() {

		// Get page header. 
		const pageheader = document.querySelector('div#container header#header');

		// Get toggler button. 
		const toggler = document.querySelector('div#container header#header nav.navmenu.b ul.navlist li.navitem a.navlink.toggler');
		// Activate toggler button. 
		toggler.addEventListener('click',toggleNavMenu);
		
		// Get login button. 
		const loginbtn = document.querySelector('div#container header#header nav.navmenu.a ul.navlist.accountlist li.navitem a.navlink.loginbtn');
		// Activate login button. 
		loginbtn.addEventListener('click',loginUser);

		// Get logout button. 
		const logoutbtn = document.querySelector('div#container header#header nav.navmenu.a ul.navlist.accountlist li.navitem a.navlink.logoutbtn');
		// Activate logout button. 
		logoutbtn.addEventListener('click',logoutUser);

		/***/

		// Toggle nav menu. 
		function toggleNavMenu() {
			// 
			pageheader.classList.toggle('active');
		}

		// Login user. 
		function loginUser() {
			// 
			maincontainer.classList.add('user');
		}

		// Logout user. 
		function logoutUser() {
			// 
			maincontainer.classList.remove('user');
		}
	}
}

// Load breadcrumb trail. 
function loadTrail() {

	// Disregard breadcrumb trail for home page. 
	if(currentPageId=='home' /* || projectPageLevel==0 */) {
		// console.log('No breadcrumb trail at base level.');
		return;
	}

	// Get breadcrumb trail data. 
	const trailData = getTrailData();
	// console.log('trailData:',trailData);
	
	// Get breadcrumb trail layout. 
	const trailLayout = createTrailLayout( trailData );

	// Load trail layout onto page (at start of main page content). 
	mainpagecontent.insertAdjacentHTML('afterbegin',trailLayout);

	/****/

	// Create site location breadcrumbs section. 
	function createTrailLayout(pageNodeList) {
		// console.log('Page node list:',pageNodeList);

		// Create node connector. 
		const connector = `
		<!-- link -->
		<span class="link">${rightcaret}</span>
		<!-- /link -->`;

		// Create node layouts. 
		const nodeLayouts = pageNodeList.map(createPageNodeLayout);

		// Return compiled breadcrumb result. 
		return `
		<!-- location -->
		<aside class="location">

			${ nodeLayouts.join(connector) }

		</aside>
		<!-- /location -->`;

		/***/

		// Create link for page node. 
		function createPageNodeLayout(pageNode) {
			// console.log('Page node:',pageNode);

			// Get page id. 
			let pageid = pageNode.pageid;
			// console.log('Page id:',pageid);
			
			// Check for home page node. 
			let onHomePage = (pageid=='home');
			// console.log('Home page?:',onHomePage);
			// Check for post page node. 
			let onPostPage = pageid.includes('post');
			// console.log('Post page?:',onPostPage);
			// Check for error page node. 
			let onErrorPage = (pageid=='404');
			// console.log('Error page?',onErrorPage);

			// Get associated page. 
			let page = getPageById(pageid);
			// console.log('Site map page:',page);

			// Return nothing if page not found. 
			if(!page) return '';

			// Get url for node link. 
			let pageurl = getNodeLinkUrl();
			// console.log('pageurl:',pageurl);

			// Get caption for node link. 
			let linkcaption = getNodeLinkCaption();
			// console.log('linkcaption:',linkcaption);

			// Return compiled node for current page link. 
			if(pageNode.uplevels == 0 ) {
				// console.log();
				return `
				<!-- node -->
				<a class="node here">
					
					<!-- caption -->
					<span class="caption">${linkcaption}</span>
					<!-- /caption -->
	
				</a>
				<!-- /node -->`;
			}

			// 
			// pageid.includes('archive') ? 'All' : '';

			// Return compiled node for parent page link. 
			else if( currentPageId.includes('post') && pageNode.uplevels == 1 ) {
				// console.log();
				return `
				<!-- node -->
				<a class="node back" href="${pageurl}">

					${leftchevron}
					
					<!-- caption -->
					<span class="caption">
						${linkcaption}
					</span>
					<!-- /caption -->
	
				</a>
				<!-- /node -->`;
			}

			// Return compiled node for further page links. 
			return `
			<!-- node -->
			<a class="node" href="${pageurl}">

				<!-- caption -->
				<span class="caption">${linkcaption}</span>
				<!-- /caption -->

			</a>
			<!-- /node -->`;

			/**/

			// Get caption for node link. 
			function getNodeLinkCaption() {
			
				// Set caption for home page node link: logo. 
				if(onHomePage) {
					return (houseicon || logoicon);
				}
				
				// Set caption for post page node link (maintains post id). 
				else if(onPostPage) {

					// Get search parameters from current url. 
					const urlparams = new URLSearchParams(window.location.search);

					// Check for id parameter. 
					let currentPostId = urlparams.get('id');

					// Get post item. 
					let post = getPostById(currentPostId);

					return '' || post.title;
				}

				// Set caption for child page node link: page name. 
				else {
					return (page.pagetitle);
				}
			}

			// Get url for node link. 
			function getNodeLinkUrl() {
			
				// Set page url for home page node link. 
				if(onErrorPage) {
					return '#';
				}
				
				// Set page url for post page node link (maintains post id). 
				else if(onPostPage) {
					return '';
				}

				// Set page url for child page node link. 
				else {
					return getRelativeUrl(page.rootpageurl);
				}
			}
		}
	}
}

// Load footer. 
function loadFooter() {
	// console.log('Loading footer...');

	// Define components of footer. 
	const col1 = `
	<!-- col -->
	<div class="col">

		<!-- logo -->
		<svg class="logo icon awardfull" width="12em" height="12em" fill="currentColor" viewBox="0 0 16 16">
			<path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
			<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
		</svg>
		<!-- /logo -->

	</div>
	<!-- /col -->`;
	const col2 = `
	<!-- col -->
	<div class="col wide">
		
		<a href="${ getRelativeUrl('./') }">

			<!-- navhead -->
			<h1 class="navhead">
				<strong>True</strong>
				University
			</h1>
			<!-- /navhead -->

		</a>

		<!-- address -->
		<p class="address">
			1234 Main Place<br>
			Maintown, MI 12345
		</p>
		<!-- /address -->
		
		<!-- contactlink -->
		<a class="contactlink" href="javascript:void(0)">213.456.7890</a>
		<!-- /contactlink -->
		
	</div>
	<!-- /col -->`;
	const col3 = `
	<!-- col -->
	<div class="col">
		
		<!-- navhead -->
		<h3 class="navhead">Explore</h3>
		<!-- /navhead -->
		
		<!-- navlist -->
		<ul class="navlist">
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./programs') }">Programs</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./courses') }">Courses</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./events') }">Events</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./faculty') }">Faculty</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./students') }">Students</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
		</ul>
		<!-- /navlist -->
		
	</div>
	<!-- /col -->`;
	const col4 = `
	<!-- col -->
	<div class="col">
		
		<!-- navhead -->
		<h3 class="navhead">Learn</h3>
		<!-- /navhead -->
		
		<!-- navlist -->
		<ul class="navlist">
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./story') }">Story</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./blog') }">Blog</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./careers') }">Careers</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./privacy') }">Privacy</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ getRelativeUrl('./legal') }">Legal</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
		</ul>
		<!-- /navlist -->
	
	</div>
	<!-- /col -->`;
	const col5 = `
	<!-- col -->
	<div class="col full">
		
		<!-- navhead -->
		<h3 class="navhead">Connect With Us</h3>
		<!-- /navhead -->
		
		<!-- navlist -->
		<ul class="navlist social">
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a href="javascript:void(0)" class="navlink fb">

					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
					</svg>
					<!-- /icon -->

				</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a href="javascript:void(0)" class="navlink twt">

					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
					</svg>
					<!-- /icon -->

				</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a href="javascript:void(0)" class="navlink ytb">

					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
					</svg>
					<!-- /icon -->

				</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a href="javascript:void(0)" class="navlink lin">

					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
					</svg>
					<!-- /icon -->

				</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a href="javascript:void(0)" class="navlink ig">

					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
					</svg>
					<!-- /icon -->

				</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->
			
		</ul>
		<!-- /navlist -->
		
	</div>
	<!-- /col -->`;
	const col6 = `
	<!-- col -->
	<div class="col full">

		<!-- contact -->
		<form action="" class="contact">
		
			<!-- navhead -->
			<h3 class="navhead">Get In Touch</h3>
			<!-- /navhead -->

			<!-- name -->
			<input class="input name" type="text" placeholder="Enter your name">
			<!-- /name -->

			<!-- message -->
			<textarea class="input message" name="message" placeholder="Enter your message" id="message" rows="8"></textarea>
			<!-- /message -->

			<!-- sendbtn -->
			<input class="input sendbtn" type="submit" value="Send Message">
			<!-- /sendbtn -->

		</form>
		<!-- /contact -->

	</div>
	<!-- /col -->`;

	// Define general footer. 
	const footer = `
	<!-- #footer -->
	<footer id="footer">

		<!-- main -->
		<main>

			${col1}
			${col2}
			
			<!-- break -->
			<div class="col break"></div>
			<!-- /break -->
			
			${col3}
			${col4}
			
			<!-- break -->
			<div class="col break"></div>
			<!-- /break -->
			
			${col5}
					
			<!-- break -->
			<div class="col break solid"></div>
			<!-- /break -->
			
			${col6}

			<!-- break -->
			<div class="col break solid"></div>
			<!-- /break -->
			
		</main>
		<!-- /main -->
		
	</footer>
	<!-- /#footer -->`;

	// Load footer onto page (after closing of main page content). 
	// mainpagecontent.insertAdjacentHTML('afterend',footer);
	
	// Load footer onto page (before closing of main container). 
	maincontainer.insertAdjacentHTML('beforeend',footer);
}

// Reveal current article. 
function showArticle() {

	// Get story article. 
	const storysection = document.querySelector('div#container main#pagecontent section.story');

	// Un-hide current article. 
	storysection.classList.remove('gone');
}

// Reveal current list of posts. 
function showPostList() {

	// Get post list (archive page). 
	const archivesection = document.querySelector('div#container main#pagecontent section.archive');
	// Un-hide current post list. 
	if(archivesection) archivesection.classList.remove('gone');

	// Get post lists (home page). 
	const postgroups = document.querySelectorAll('div#container section.preview div.group');
	// Un-hide current post lists. 
	for(let group of postgroups) {
		group.classList.remove('gone');
	}
}

// Get post by id. 
function getPostById(id) {

	// Get archive data. 
	const archiveData = postregister[currentPostType]['archiveData'];

	// Ensure capitalization of course id. 
	id = (`${id}`).toUpperCase();

	// Get post type. 
	let type = currentPostType;
	// console.log('type:',type,`${type}id`);
	// console.log('Archive source:',archiveData);

	// Go thru all post items. 
	for(let post of archiveData) {

		// Check for matching post. 
		let matchingPost = (id == post[`${type}id`]);

		// Return matching post if found. 
		if(matchingPost) return post;
	}

	// Return nothing if post not found. 
	return null;
}

// Activate live search. 
function activateLiveSearch() {

	// Get open button. <-- Selected after header already loaded
	const openbtn = document.querySelector('div#container header#header nav.navmenu.b ul.navlist li.navitem a.navlink.search');

	// Create new Search object. 
	/* const s =  */new SearchOverlay(openbtn,closebtn,searchOverlay,searchField,resultsBox);
}

