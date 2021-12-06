

var appearances = ['light','dark'];
var colors = ['blue','green','orange','red'];
var sizes = ['sm','md','lg'];





// Show settings editor. 
function openSettings() {
	console.log('Now opening settings editor.');

	// Prevent premature removal from previous instance. 
	clearTimeout(popupRemoval);
	
	// Add overlay effect. 
	addOverlay();


	// Create a settings popup box. 
	
	let setPop = '';
	
	setPop += '<div id="settingsEditor" class="popup anchored">';

		setPop += '<div class="inner container-fluid">';

			setPop += '<div class="row">';
				setPop += '<div class="col-12">';
					setPop += '<h4>';
						setPop += '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/><path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/></svg>';
						setPop += ' Settings'
					setPop += '</h4>';
				setPop += '</div>';
			setPop += '</div>';

			setPop += '<div class="input-row row">';
				setPop += '<div class="col-6">';
					setPop += '<label for="themeAppearance">Appearance</label>';
				setPop += '</div>';
				setPop += '<div class="col-6">';
					setPop += '<select id="themeAppearance" size="1">';
						setPop += '<option value="light">Light</option>';
						setPop += '<option value="dark">Dark</option>';
					setPop += '</select>';
				setPop += '</div>';
			setPop += '</div>';

			setPop += '<div class="input-row row">';
				setPop += '<div class="col-6">';
					setPop += '<label for="themeColor">Theme Color</label>';
				setPop += '</div>';
				setPop += '<div class="col-6">';
					setPop += '<select id="themeColor" size="1">';
						setPop += '<option value="blue">Blue</option>';
						setPop += '<option value="green">Green</option>';
						setPop += '<option value="orange">Orange</option>';
						setPop += '<option value="red">Red</option>';
					setPop += '</select>';
				setPop += '</div>';
			setPop += '</div>';

			setPop += '<div class="input-row row">';
				setPop += '<div class="col-6">';
					setPop += '<label for="fontSize">Font Size</label>';
				setPop += '</div>';
				setPop += '<div class="col-6">';
					setPop += '<select id="fontSize" size="1">';
						setPop += '<option value="sm">Small</option>';
						setPop += '<option value="md">Medium</option>';
						setPop += '<option value="lg">Large</option>';
					setPop += '</select>';
				setPop += '</div>';
			setPop += '</div>';

			setPop += '<div class="button-row row">';
				setPop += '<div class="col-6 l">';
					setPop += '<button class="endBtn" onclick="resetSettings();">Reset</button>';
				setPop += '</div>';
				setPop += '<div class="col-6 r">';
					setPop += '<button class="endBtn" onclick="saveSettings();">Save</button>';
				setPop += '</div>';
			setPop += '</div>';

		setPop += '</div>';

		setPop += '<div class="closeBtn" onclick="closeSettings();">&times;</div>';

	setPop += '</div>';


	// Show the settings popup box. 
	$('#container').append(setPop);

	// Bubble popup up from bottom of page (after delay). 
	let x = setTimeout( removeAnchor , 100 );
	// removeAnchor();

	// Retrieve saved settings. 
	retrieveSettings();

	/*****/

	// Allow popup window to come to center of screen. 
	function removeAnchor() {
		// Check if element found. 
		let elemFound = $('#settingsEditor').length;

		// Remove anchor if element is found on page. 
		if(elemFound) {
			$('#settingsEditor').removeClass('anchored');
		}
		// Repeat until element is found on page. 
		else {
			setTimeout(removeAnchor,100);
		}
	}

	// Retrieve and display previously saved settings. 
	function retrieveSettings() {
		console.log('Now displaying previously saved settings.');

		// Get saved settings from local storage. 
		let themeAppearance = localStorage.themeAppearance;
		let themeColor = localStorage.themeColor;
		let fontSize = localStorage.fontSize;

		// Show previously saved settings. 
		$('select#themeAppearance').val(themeAppearance);
		$('select#themeColor').val(themeColor);
		$('select#fontSize').val(fontSize);
	}
}


// Close settings editor. 
function closeSettings() {
	console.log('Now closing settings editor.');

	// Slide popup down to bottom of page. 
	$('#settingsEditor').addClass('anchored');

	// Remove popup from page (after 1 sec delay). 
	popupRemoval = setTimeout( removePopup, 1000 );

	// Remove overlay effect. 
	removeOverlay();

	 /*****/

	function removePopup() {
		$('#settingsEditor').remove();
	}
}


// Save settings. 
function saveSettings() {
	console.log('Now saving settings.');

	// Get user-input settings from popup. 
	let themeAppearance = $('select#themeAppearance').val();
	let themeColor = $('select#themeColor').val();
	let fontSize = $('select#fontSize').val();

	// Save user-input settings to local storage. 
	localStorage.themeAppearance = themeAppearance;
	localStorage.themeColor = themeColor;
	localStorage.fontSize = fontSize;

	// Apply the saved settings. 
	applySettings();

	console.log('Saved to local storage:');
	console.log('themeAppearance', themeAppearance, '\t', 'themeColor', themeColor, '\t', 'fontSize', fontSize);

	// Close settings editor. 
	closeSettings();
}
// Reset settings to default values. 
function resetSettings() {
	console.log('Now resetting theme to default.');

	// Clear existing settings in local storage. 
	localStorage.themeAppearance = '';
	localStorage.themeColor = '';
	localStorage.fontSize = '';

	// Apply settings. 
	applySettings();

	// Close settings editor. 
	closeSettings();
}
// Apply saved settings. 
function applySettings() {
	// Get saved settings from local storage. 
	let themeAppearance = localStorage.themeAppearance;
	let themeColor = localStorage.themeColor;
	let fontSize = localStorage.fontSize;

	// Remove all previous appearance settings. 
	for (var i=0; i<appearances.length; i++) {
		$('#container').removeClass(appearances[i]);
		$('body').removeClass(appearances[i]);
	}
	// Apply saved appearance setting. 
	if(themeAppearance && themeAppearance!='null') {
		$('#container').addClass(themeAppearance);
		$('body').addClass(themeAppearance);
	}

	// Remove all previous color settings. 
	for (var i=0; i<colors.length; i++) {
		$('#container').removeClass(colors[i]);
	}
	// Apply saved color setting. 
	if(themeColor && themeColor!='null') {
		$('#container').addClass(themeColor);
	}

	// Remove all previous size settings. 
	for (var i=0; i<sizes.length; i++){
		$('#container').removeClass(sizes[i]);
	}
	// Apply saved size setting. 
	if(fontSize && fontSize!='null') {
		$('#container').addClass(fontSize);
	}

	// console.log('Settings applied successfully.');
}

