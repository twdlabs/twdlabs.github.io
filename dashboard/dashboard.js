

// Get url parameters. 
const params = new URLSearchParams(window.location.search);


// Executes when DOM is loaded and ready. 
$(document).ready(function(){
	// var iterator = params.keys();

	// Display splash page. 
	document.getElementById('splash').style.display = 'block';

	// Open default tab. 
	// document.getElementById('defaultOpen').click();
	// document.getElementsByClassName('tablink')[0].click();

	// Adapt page to viewport. 
	adaptToViewport();

	// Use 'tab' parameter to get specified tab. 
	let tabName = params.get('tab');

	// Get tab number of specified tab. 
	let tabNumber = tabs.indexOf(tabName);

	// Log the specified tab. 
	if(tabNumber!=-1 || tabName) 
		console.log('Starting tab: ', tabNumber, tabName);

	// Open specified tab... 
	// ... using tab number (if valid). 
	if(tabNumber>=0) {
		// console.log('Starting tabNumber: ', tabNumber);
		openPageNo(tabNumber);
	}
	// ... using tab name. 
	else if(tabName && tabName.length>0) {
		// console.log('Starting tabName: ', tabName);
		openPage(tabName);
	}
	// ... or the default tab (splash page). 
	else {
		// console.log('Starting tab:  default');
		openPageNo(0);
	}

	// Add tab class to tab buttons.
	$('div#splash button').addClass('tab');

	// Add settings button to splash page. 
	$('div.contentBox').append('<button class="setBtn" onclick="openSettings()"> <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/></svg> </button>');
	$('body').append('<div id="overlay" onclick="closeSettings();"></div>');

	// Adjust page whenever viewport is resized. 
	$(window).on('resize',adaptToViewport);
});



// Adjust page to fit viewport width. 
function adaptToViewport() {
	// Get height of document body. 
	var bodyHeight = $('body').outerHeight();

	// Get height of navbar. 
	var navHeight = $('nav.navbar').outerHeight();
	// var navHeight = 0;

	// Get height of tab link box. 
	// var buttonHeight = $('#defaultOpen').outerHeight();
	var buttonHeight = $('.tablinkBox').outerHeight();

	// Calculate height of content. 
	var contentHeight = bodyHeight - buttonHeight - navHeight;
	$('div.contentBox').css('height', contentHeight)
					.css('margin-top', navHeight)
					.css('margin-bottom', buttonHeight);
	
	// Get viewport width. 
	var vpw = $(window).outerWidth();
	// console.log('Viewport width: ',vpw,'px');

	// Adjust style of splash buttons based on viewport size. 
	if(vpw<576) $('div#splash button.tab').addClass('square');
	else 		$('div#splash button.tab').removeClass('square');
}



// Open chosen page (by id). 
function openPage( tabName, button ) {
	// Log page info. 
	console.log('Now opening: ', tabName);

	// Hide all content. 
	var tabcontent = document.getElementsByClassName('tabcontent');
	for (var i=0; i<tabcontent.length; i++) {
		tabcontent[i].style.display = '';
	}

	// Un-highlight all buttons. 
	$('button.tablink').removeClass('highlight');
	// var tablinks = document.getElementsByClassName('tablink');
	// for (var i=0; i<tablinks.length; i++) {
	// 	tablinks[i].style.color = '';
	// }

	// Show selected content. 
	document.getElementById(tabName).style.display = 'block';

	// Highlight button for selected content. 
	if(button) {
		// button.style.color = 'dodgerblue';
		$(button).addClass('highlight');
	}

	// Set the hashtag to the specified tab. 
	// window.location.hash = tabName;

	// Set the 'tab' parameter to the specified tab. Is this necessary ? 
	// params.set('tab',tabName);
	// window.location.search = '?' + params.toString();
	// console.log( '\'tab\' parameter: ', params.get('tab') );
}

// Open chosen page (by index). 
function openPageNo(index) {
	// Log page info. 
	let tabName = tabs[index];
	// console.log('Now opening: ', tabName);

	// Hide all content. 
	var tabcontent = document.getElementsByClassName('tabcontent');
	for (var i=0; i<tabcontent.length; i++) {
		tabcontent[i].style.display = '';
	}

	// Un-highlight all buttons. 
	$('button.tablink').removeClass('highlight');
	// var tablinks = document.getElementsByClassName('tablink');
	// for (var i=0; i<tablinks.length; i++) {
	// 	tablinks[i].style.color = '';
	// }

	// Show selected content. 
	var page = $('div.contentBox div.tabcontent')[index];
	page.style.display = 'block';

	// Highlight button for selected content. 
	// console.log( $('div.tablinkBox button.tablink') );
	// console.log( $('div.tablinkBox button.tablink')[index-1] );
	var button = $('div.tablinkBox button.tablink')[index-1];
	if(button) {
		// button.style.color = 'dodgerblue';
		$(button).addClass('highlight');
	}

	// Set the hashtag to the specified tab. 
	// window.location.hash = tabName;

	// Set the 'tab' parameter to the specified tab. Is this necessary ? 
	// params.set('tab',tabName);
	// window.location.search = '?' + params.toString();
	// console.log( '\'tab\' parameter: ', params.get('tab') );
}

