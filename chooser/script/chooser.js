

/*********************************************************/



$(document).ready(function() {

	// Apply saved settings.
	applySettings();

	// Syncronize the two page input text fields.
	$('input.myQuery').on('input',syncronizeInput);

	// Get text field for page url input.
	let pageInputBox = document.getElementById('pageName');

	// Add autocomplete functionality to text field (using given source list for autocomplete values).
	startAutocomplete(pageInputBox, projectNames);
	// if(currentlyOnPublicPage)
	// 	startAutocomplete(pageInputBox, projectPublicNames);
	// else
	// 	startAutocomplete(pageInputBox, projectNames);

	// Start creating new notification on regular interval.
	// startNotifying();
});



/*********************************************************/



// Clear text field for page url.
function clearUrlInput() {
	$('#pageName').val('');
}


// Open page indicated by user-entered directory.
function openPage(userInput = $('#pageName').val()) {
	if(userInput) userInput = userInput.toLowerCase();

	if(userInput.length>0) {
		// Confirm input if not found in preloaded pages.
		// if(!pageNames.includes(userInput)) {
		// 	toast('Page not listed.')
		// 	let go = confirm("Page not listed. Continue?");
		// 	if(!go) return;
		// }

		// Load the page in same window.
		window.location.href = ('../'+userInput+'/index.html');
		// window.open('../'+userInput+'/index.html');
		// window.open('../'+userInput+'/index.html','_self');
		// Load the page in new window.
		// window.open('../'+userInput+'/index.html','_blank');
	}
	else {
		toast("No input detected. Please try again.");
	}
}


// Display list of all possible pages.
function showLibraryList() {
	console.log('Opening library list');

	var outputList = getAll(projectNames);

	// Create popup.
	var popup = '';
	popup += '<div id="sharePopup" class="popup">';
		popup += '<div class="inner">';
			popup += '<h4>';
			popup += '<svg width="1em" hei ght="1em" viewBox="0 0 16 16" class="bi bi-view-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/></svg>';
			popup += ' Library List';
			popup += '</h4>';

			// popup += '<textarea id="list" readonly>'+outputList+'</textarea>';
			popup += '<select id="list" size="10">'+outputList+'</select>';

			popup += '<div class="closeBtn" onclick="closeLibraryList();">&times;</div>';
			popup += '<a href="../library.xml" style="display:block; text-decoration:none;"> <button>See more</button> </a>'
		popup += '</div>';
	popup += '</div>';

	// Add overlay  effect.
	addOverlay();

	// Add popup.
	document.getElementById('container').innerHTML += popup;

	// console.log(outputList);


	/*****/


	// Get elements as one group of select options. 
	function getAll(elements,x) {

		// Initialize result. 
		var result = '';

		// Do each one in the group. 
		for (var i=0; i<elements.length; i++) {
			result += '<option ondblclick="clipText(this);">' + elements[i] + '</option>';
		}

		// Return result. 
		return result;
	}
}

// Copy content of selected option to clipboard. 
function clipText(inputBox) {

	// Copy text to clipboard. 
	navigator.clipboard.writeText(inputBox.value);

	// Show the copied text in alert. 
	console.log('Copied:',inputBox.value);
	toast('Copied: '+inputBox.value);
}

function closeLibraryList() {
	console.log('Closing library list');

	// Remove popup.
	$('#sharePopup').remove();

	// Remove overlay effect.
	removeOverlay();
}



/*********************************************************/



// Close all popups.
function closeAllPopups() {
	console.log('Closing all popups from chooser/chooser.js');

	// Close xyz popup.
	closeSideNav();

	// Close xyz popup.
	closeLibraryList();

	// Close xyz popup.
	closeSettings();

	// Close xyz popup.
	closeFeedbackForm();

	// Remove overlay.
	removeOverlay();
}





/*********************************************************/
/*********************************************************/
/*********************************************************/





// // Load lists of page names from XML file.
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// 	if(this.readyState == 4 && this.status == 200){
// 		// Load XML data.
// 		loadItUp(this);
// 	}
// };

// Request XML for project library list.
// xhttp.open( 'GET', '../library.xml', true );
// xhttp.send();


// Load XML data. Setup autocomplete functionality.
function loadItUp(xml) {
	// console.log('xml',xml);

	// Get XML document for library.
	var xmlDoc = xml.responseXML;
	console.log('xmlDoc',xmlDoc);

	// Get all page items from XML document.
	var allItems = xmlDoc.getElementsByTagName('item');
	console.log('allItems',allItems);

	// Get page url from each page item.
	pageUrls = getUrlsByAttribute(allItems);
	console.log('pageUrls',pageUrls);

	// Filter out duplicate entries.
	let uniquePageUrls = [];
	// Create list of unique entries from list of page urls.
	for (var i=0 ; i<pageUrls.length ; i++) {
		let entry = pageUrls[i];
		let alreadyGotIt = uniquePageUrls.includes(entry);
		if(!alreadyGotIt) uniquePageUrls.push(entry);
	}
	console.log('uniquePageUrls',uniquePageUrls);
	// pageUrls.filter( (entry)=>{
	// 	// Check if entry already exists in list.
	// 	let alreadyExists = pageUrls.includes(entry)
	// 	return ( !alreadyExists );
	// } );

	// console.log( "allItems" );
	// console.table( allItems );
	// console.log( "allItems" + getAllNodes(allItems) );
	// console.log( "pageNames" );
	// console.table( pageNames );
	// console.log( "pageNames" + getAll(pageNames) );

	// Start autocomplete functionality on given text field, using given source list for autocomplete values.
	let pageInputBox = document.getElementById('pageName');
	// startAutocomplete(pageInputBox, pageUrls);
	startAutocomplete(pageInputBox, uniquePageUrls);

	/*****/

	// Get array of page urls from attributes of page items.
	function getUrlsByAttribute(orig) {
		var result = [];
		var url;

		for(var i=0 ; i<orig.length ; i++) {
			url = orig[i].getAttribute('url');
			if( !result.includes(url) ) {
				result.push( url );
			}
		}
		return result;
	}
	// // Get array of page urls from child nodes of page items.
	// function getUrlsByChildNode(orig) {
	// 	var result = [];

	// 	for(var i=0 ; i<orig.length ; i++) {
	// 		result.push( orig[i].childNodes[0].nodeValue );
	// 	}
	// 	return result;
	// }
	// // Create string representation of all elements in list.
	// function getAll(elements,x) {
	// 	var result = '['+elements.length+']';
	// 	for (var i=0; i<elements.length; i++) {
	// 		result += "\n"+i+": \"" + elements[i] + "\"";
	// 	}
	// 	return result;
	// }
	// // Create string representation of child node values from each element in list.
	// function getAllNodes(elements,x) {
	// 	var result = '['+elements.length+']';
	// 	for (var i=0; i<elements.length; i++) {
	// 		result += "\n"+i+": \"" + elements[i].childNodes[0].nodeValue + "\"";
	// 	}
	// 	return result;
	// }
}
