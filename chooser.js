
// An array containing all the page names
var labels = ['Homepage','Projects In-Progress','Favorite Projects'];
var pageNames = [
					'chooser', 'evolution', 'finance', 'fitness', 'math', 'music', 'probability', 'reast', 'reast2', 'stocks', 'tabs', 
					'acito', 'layouts', 'linktree', 
					'bgvid', 'buttonpress', 'form3d', 'git', 'hero', 'image', 'logo', 'logoanimation', 'parallax', 'parallax2', 'popup', 'storage', 'ticker', 
					'aspectratio', 'autocomplete', 'checkout', 'cluster', 'device', 'form', 'hero', 'lightSwitch', 'loading', 'nav', 'overlay', 'pricing', 'refresh', 'scale3d', 'scroller', 'scrollProgressBar', 'search', 'sidenav', 'slideshow', 'socialMedia', 'solarsystem', 'sphere', 'splash', 'sort', 'soundfx', 'syntax', 'template', 'user', 'viewport'
				];
var pageNames2d = [
					['chooser', 'evolution', 'finance', 'fitness', 'math', 'music', 'probability', 'reast', 'reast2', 'stocks', 'tabs'] , 
					['acito', 'layouts', 'linktree'] , 
					['bgvid', 'buttonpress', 'form3d', 'git', 'hero', 'image', 'logo', 'logoanimation', 'parallax', 'parallax2', 'popup', 'storage', 'ticker'] , 
					['aspectratio', 'autocomplete', 'checkout', 'cluster', 'device', 'form', 'hero', 'lightSwitch', 'loading', 'nav', 'overlay', 'pricing', 'refresh', 'scale3d', 'scroller', 'scrollProgressBar', 'search', 'sidenav', 'slideshow', 'socialMedia', 'solarsystem', 'sphere', 'splash', 'sort', 'soundfx', 'syntax', 'template', 'user', 'viewport']
				];
// [];
// ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



// Load lists of page names from XML file. 
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		loadItUp(this);
	}
};
xhttp.open( 'GET', '../library.xml', true );
xhttp.send();


function loadItUp(xml) {
	// console.log('xml',xml);
	var xmlDoc = xml.responseXML;
	console.log('xmlDoc',xmlDoc);
	var items = xmlDoc.getElementsByTagName('item');
	console.log('items',items);
	pageNames = getArrayFromAttributes(items);
	console.log('pageNames',pageNames);

	// 
	// console.log( "items" );
	// console.table( items );
	// console.log( "items" + showAllNodes(items) );
	// 
	// console.log( "pageNames" );
	// console.table( pageNames );
	// console.log( "pageNames" + showAll(pageNames) );

	/*****/

	function getArrayFromChildNodes(orig) {
		var result = [];

		for(var i=0 ; i<orig.length ; i++) {
			result.push( orig[i].childNodes[0].nodeValue );
		}
		return result;
	}
	function getArrayFromAttributes(orig) {
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
	function showAll(elmnts,x) {
		var result = '['+elmnts.length+']';
		for (var i=0; i<elmnts.length; i++) {
			result += "\n"+i+": \"" + elmnts[i] + "\"";
		}
		return result;
	}
	function showAllNodes(elmnts,x) {
		var result = '['+elmnts.length+']';
		for (var i=0; i<elmnts.length; i++) {
			result += "\n"+i+": \"" + elmnts[i].childNodes[0].nodeValue + "\"";
		}
		return result;
	}
}



/*********************************************************/



// Display a list of all the possible pages. 
function showLibraryList() {
	var outputList = showAll(pageNames);
	var outputList2d = showAll2d(pageNames2d);

	// Create popup. 
	var popup = '';
	popup += '<div id="sharePopup" class="popup">';
		popup += '<h4>';
		popup += '<svg width="1em" hei ght="1em" viewBox="0 0 16 16" class="bi bi-view-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/></svg>';
		popup += ' Library List';
		popup += '</h4>';

		// popup += '<textarea id="list" readonly>'+outputList+'</textarea>';
		popup += '<select id="list" size="10">'+outputList2d+'</select>';

		popup += '<div class="closeBtn" onclick="closeLibraryList();">&times;</div>';
		popup += '<a href="../library.xml" style="display:block; text-decoration:none;"> <button>See more</button> </a>'
	popup += '</div>';

	// Add overlay  effect. 
	addOverlay();

	// Add popup. 
	document.getElementById('container').innerHTML += popup;

	// console.log(outputList);

	/*****/

	function showAll(elmnts,x) {
		var result = '';
		for (var i=0; i<elmnts.length; i++) {
			// result += '\n' + elmnts[i];
			result += '<option>' + elmnts[i] + '</option>';
		}
		return result;
	}

	function showAll2d(elmnts,x) {
		var result = '';
		for (var i=0; i<elmnts.length; i++) {
			result += '<optgroup label="'+labels[i]+'">';
			for (var j=0; j<elmnts[i].length; j++) {
				result += '<option>' + elmnts[i][j] + '</option>';
			}
			result += '</optgroup>';
		}
		return result;
	}
}
function closeLibraryList() {
	// Remove popup. 
	$('#sharePopup').remove();

	// Remove overlay effect. 
	removeOverlay();
}



/*********************************************************/



// Open the user-entered page. 
function openPage(userInput) {
	if(userInput) 
		userInput = userInput.toLowerCase();
	else 
		userInput = $('#pageName').val().toLowerCase();

	if(userInput.length>0) {
		// Confirm input if not found in preloaded pages.
		if(!pageNames.includes(userInput)) {
			toast('Page not listed.')
			// let go = confirm("Page not listed. Continue?");
			// if(!go) return;
		}

		// Load the page in the same window. 
		// window.open('../'+userInput+'/index.html');
		// window.open('../'+userInput+'/index.html','_self');
		window.location.href = ('../'+userInput+'/index.html');

		// Load the page in a new window. 
		// window.open('../'+userInput+'/index.html','_blank');
	}
	else {
		toast("No input detected. Please try again.");
	}
}



/*********************************************************/



// Close all popups. 
function closeAllPopups() {
	// Remove popups. 
	closeSideNav(); 
	closeLibraryList(); 
	closeSettings(); 
	closeFeedbackForm();

	// Remove overlay. 
	removeOverlay();
}



