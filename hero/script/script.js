
// Initialize global access to hidden sections. 
// var revealSections;
var hiddenSectionIds;
var hiddenSectionScrollTops;



// Setup page functionality when document is ready. 
// $(document).ready(function(event) {

	// Start repeating role-typewriter animation. 
	setTimeout(startTypewriter, blinkTime);


	// Highlight navbar item when clicked. 
	// $('nav main ul.navlist li.item a.link').click(highlightNavbarItem);
	document.querySelector('nav main ul.navlist li.item a.link').addEventListener('click',highlightNavbarItem);


	// Prepare section reveal data. 
	prepareRevealData();

	// Handle further scrolling. 
	document.body.onscroll = handleScroll;
	document.documentElement.onscroll = handleScroll;
	// $('html,body').on('scroll', handleScroll);	// why is this not functioning ???
	// $('html,body').scroll(handleScroll);	// why is this not functioning ???

	// Activate contact form to update send link accordingly. 
	// $('section#contact form .forminput').on('input', updateSendLink);
	document.querySelector('section#contact form .forminput').addEventListener('input', updateSendLink);
// });



/*****/



// Prepare section reveal data. 
function prepareRevealData() {

	// Get sections with hidden content to be revealed. 
	// let hiddenSections = $('section.gone');
	let hiddenSections = document.querySelectorAll('section.gone');
	console.log('Hidden sections:', hiddenSections);
	// hiddenSectionIds = hiddenSections.map( (section) => (section.id) );
	// console.log('hiddenSectionIds:', hiddenSectionIds);

	// Get ids of sections with hidden content. 
	hiddenSectionIds = [];
	for( let section of hiddenSections ) {
		hiddenSectionIds.push(section.id);
	}
	console.log('Hidden section ids:', hiddenSectionIds);

	// Get desired scroll level for each section (somewhere near section top). 
	hiddenSectionScrollTops = hiddenSectionIds.map( getScrollTop );
	console.log('Hidden section scroll tops:', hiddenSectionScrollTops);

	// Handle initial scroll. 
	handleScroll(/* event */);

	/****/

	// Get scroll top. 
	function getScrollTop(id) {
		// 
		// return $('#'+id)[0].offsetTop;
		return document.querySelector('#'+id).offsetTop;
	}
}


// Handle scroll. 
function handleScroll(event) {
	// console.log('Scrolling...',event);
	// console.log('Scrolling...', event.target.scrollingElement);


	// Get current scroll level. 
	let scrollTopLevel = 0;
	if(event) scrollTopLevel = event.target.scrollingElement.scrollTop;
	scrollTopLevel |= document.body.scrollTop | document.documentElement.scrollTop;
	// console.log('scrollTopLevel', scrollTopLevel);

	// Include half height of window to get mid scroll level. 
	// let scrollMidLevel = scrollTopLevel + ( .5*$(window).outerHeight() );
	let scrollMidLevel = scrollTopLevel + ( .5 * window.height );
	// console.log('scrollMidLevel', scrollMidLevel);

	// Include height of window to get bottom scroll level. 
	// let scrollBottomLevel = scrollTopLevel + $(window).outerHeight();
	let scrollBottomLevel = scrollTopLevel + window.height;
	// console.log('scrollBottomLevel', scrollBottomLevel);
	
	// Check for sections that have been scrolled past. 
	revealScrolledSections(event);

	// Highlight appropriate navbar link by scroll level. 
	highlightNavbarItemByScrollLevel();
	


	// Set state of 'back to top' button based on scroll position. 
	setTopBtn(event);


	/*****/


	// Reveal scrolled sections. 
	function revealScrolledSections(event) {
		// End this method's run if everything's already revealed. 
		// if(fullyRevealed) return;

		// Get scrolled sections and reveal them (keeping sections revealed indefinitely). 
		for(let i=0 ; i<hiddenSectionScrollTops.length ; i++) {

			// Check if section scrolled (with 'buffer space' -- 14~16rem). 
			let sectionScrolled = scrollBottomLevel > (hiddenSectionScrollTops[i] + 320);

			// Reveal section if scrolled. 
			if( sectionScrolled ) {
				revealSection( hiddenSectionIds[i] );
			}
		}
		
		/*****/
		
		// Reveal section by id. 
		function revealSection(id) {
			// console.log(`Revealing section#${id}`);

			// Remove 'gone' class from section. 
			// $('section#'+id).removeClass('gone');
			document.querySelector('section#'+id).classList.remove('gone');
		}
	}

	// Highlight navbar item by scroll level (when passing mid-screen). 
	function highlightNavbarItemByScrollLevel() {
		// Deos this method have an infintie loop in it with the other method ???

		// Get lowest scrolled section's id (largest value where --> scrollMiddle > section.offsetTop). 
		let secId = 'hero';
		for(let i=0 ; i<hiddenSectionIds.length ; i++) {	// hiddenSectionIds hiddenSectionScrollTops
			if( scrollMidLevel > hiddenSectionScrollTops[i] ) 
				secId = hiddenSectionIds[i];
		}
		// console.log('secId',secId);

		// Un-highlight all other nav links. 
		// $('nav ul.navlist li.item a.link').removeClass('active');
		xyz = document.querySelectorAll('nav ul.navlist li.item a.link');
		for(let x of xyz) {
			x.classList.remove('active');
		}

		// Highlight nav link for lowest scrolled section. 
		// $('nav ul.navlist li.item a.link.'+secId).addClass('active');
		xyz = document.querySelectorAll('nav ul.navlist li.item a.link.'+secId);
		for(let x of xyz) {
			x.classList.add('active');
		}
	}
	
	// Set state of 'back to top' button based on scroll position. 
	function setTopBtn(event) {
		// console.log('setTopBtn() scrollBottomLevel', scrollBottomLevel);

		// Show button when scrolled away from top. 
		if(scrollTopLevel > 160) {
			// $('div#container button.totop').removeClass('gone');
			document.querySelector('div#container button.totop').classList.remove('gone');
		}
		// Hide button when already at/near top. 
		else {
			// $('div#container button.totop').addClass('gone');
			document.querySelector('div#container button.totop').classList.add('gone');
		}
	}

}


// Go to top of page. 
function goToTopOfPage() {
	document.body.scrollTop = 0;			// Safari
	document.documentElement.scrollTop = 0;	// Chrome, Firefox, IE, Opera
}
