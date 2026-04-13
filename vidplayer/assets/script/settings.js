


// Toggle speed pane. 
function toggleSpeedPane() {

	// Close settings pane (if already open). 
	if( isSettingsPaneOpen('speedpane') ) {
		vidplayer['speedbtn'].classList.remove('on');
		vidplayer['speedpane'].classList.remove('open');
	}
	
	// Open settings pane (if not already open). 
	else {
		closeAllSettingsPanes();
		vidplayer['speedbtn'].classList.add('on');
		vidplayer['speedpane'].classList.add('open');
	}
}

// Toggle settings pane. 
function toggleSettingsPane(/* paneid */) {

	// Close settings pane (if already open). 
	if( isSettingsPaneOpen('generalpane') ) {
		vidplayer['settingsbtn'].classList.remove('on');
		vidplayer['settingspane'].classList.remove('open');
	}

	// Open settings pane (if not already open). 
	else {
		closeAllSettingsPanes();
		vidplayer['settingsbtn'].classList.add('on');
		vidplayer['settingspane'].classList.add('open');
	}
}

// Check if given settings pane already open. 
function isSettingsPaneOpen(panename) {

	// Get selected settings button. 
	// let settingsbtn = vidplayer['settingsbtn'];
	// Get selected settings pane. 
	// let settingspane = vidplayer['settingspane'];

	// Get selected settings pane. 
	const settingspane = document.querySelector(`div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.settingspane.${panename}`);

	// Return result based on state of settings button. 
	// return settingsbtn.classList.contains('on');
	// Return result based on state of settings pane. 
	return settingspane.classList.contains('open');
	// Return result based on state of settings pane and settings button. 
	// return settingsbtn.classList.contains('on') || settingspane.classList.contains('open');
}

// Close all the settings panes. 
function closeAllSettingsPanes() {
	vidplayer['speedbtn'].classList.remove('on');
	vidplayer['speedpane'].classList.remove('open');
	vidplayer['settingsbtn'].classList.remove('on');
	vidplayer['settingspane'].classList.remove('open');
}
