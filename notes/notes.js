
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Index of selected note in chooser list 
var selectedIndex = -1;

var noteData = [
	{
		name:'Quote by C.G. Jung',
		content:'The repressed content must be made conscious so as to produce a tension of opposites, without which no forward movement is possible. The conscious mind is on top, the shadow underneath, and just as high always longs for low and hot for cold, so all consciousness, perhaps without being aware of it, seeks its unconscious opposite, lacking which it is doomed to stagnation, congestion, and ossification. Life is born only of the spark of opposites.',
		dateEdited:1603575979825,
		dateCreated:0
	},
	{
		name:'Note B',
		content:'The quote comes from Alchemy and there are several places in Jung’s work where he uses the term filth. The most basic definition of the filth would be our unconsciousness. (You can read the Red Sea section of Mysterium Coniunctionis for more on that idea, where he calls unconsciousness man’s original sin.)\n\nFor Jung, Alchemical texts and images established the historical background for his psychology and its ultimate aim: redemption (recognizing and accepting what is unconscious) and wholeness (integrating what we recognize into consciousness). Wholeness in Jungian psychology and the Lapis in Alchemy are the same.\n\nFrom the psychological side, redemption is about the reclamation of everything we have rejected, denied, or despised in ourselves, as well as discovering everything that we never even knew was there. We lose track of all of these other qualities in ourselves through conventional indoctrination and when we get caught up in our one-sided ego demands. \n\nAll of that forgotten/unknown stuff is in the filth. As I said, for Jung, that filth and unconsciousness are the same thing.\n\nThe it to which he refers is that precious thing which we find in the filth - the inner gold which is buried in every shitty experience we have endured or pushed away.\n\nAll of that filth pushes its way into conscious first by means of unbridled emotions, anxiety, depression, or unexplained moodiness - to name a few of its manifestations.\n\nGetting into this filth is not about intellectually recognizing it. Recognizing it intellectually is the easier part of the task. Integrating all of those experiences - the shame, humiliation, pain, and suffering - that is the difficult part. Again, this is experiential, not intellectual.\n\nNot only will the ego resist integration at every turn, but so too will the deeper layers of the unconscious. For example, almost every time that we feel we’ve crossed a threshold, will we suffer some kind of relapse which drags us back into the filth. All of it is part of the process of transformation.\n\nIn Mysterium Coniunctionis, Jung says,\nThe prima materia is “saturnine,” and the malefic Saturn is the abode of the devil, or again it is the most despised and rejected thing, “thrown out into the street,” “cast on the dunghill,” “found in filth.”\n\nThe prima materia is whatever a person brings into analysis - i.e., his presenting problem. If you are doing the work on your own, then it’s whatever is happening in your life right now. That’s where the work begins, and, always keep in the mind that there is no end. Individuation has no destination. As long as there is an Unconscious - and it is infinite - there will always be work to do.\n\nThe filth is the stuff you dive into when you want to explore the unknown psychic. To repeat myself, an example of the unknown psychic would be a sudden shift in mood, such as a depression or anxiety or an unexplained outburst. Going into the filth is going inward instead of blaming something or someone in the external world.\n\nFinding the gold is not about finding the positive in these experiences, but rather it is about accepting those dark aspects of life. Finding the inner gold isn’t about being eternally positive or good, it’s about being whole.\n\nWholeness was always Jung’s goal. Adding the dark to the light gives our personality dimension.',
		dateEdited:1604575979825,
		dateCreated:0
	},
	{
		name:'Note C',
		content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
		dateEdited:1703575979825,
		dateCreated:0
	},
	{
		name:'Note D',
		content:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		dateEdited:1803575979825,
		dateCreated:0
	},
	{
		name:'Note E',
		content:'',
		dateEdited:1903575979825,
		dateCreated:0
	}
];






// Act when page elements are loaded. 
// $(document).ready(function() {
window.onload = (function() {
	// Clear all input fields when page is first loaded. 
	clearUserInput();

	// Make entries editable when selected. 
	// $('select#chooser').on('change', onSelectEntry)
	document.getElementById('chooser').addEventListener('change', onSelectEntry);


	// Highlight the text of name input field on focus. 
	document.getElementById('noteName').addEventListener('focus', function(event) {
		this.select();
	} );

	// Refresh on-screen data list from data array. 
	refreshList();

	// Enter selector mode: note selector enabled, note editor disabled. 
	enterSelectorMode();
});




// Clear all user input fields. 
function clearUserInput() {
	// Clear selector form. 
	document.getElementById('chooser').value = '';
	// Clear editor form. 
	document.getElementById('noteName').value = '';
	document.getElementById('noteDate').innerHTML = '';
	document.getElementById('noteContent').value = '';
}

// Refresh on-screen data list from data array. 
function refreshList() {
	// console.log('noteData',noteData);

	// Create entries as 'option' elements. 
	let optElements = '';
	for(let i=0 ; i<noteData.length ; i++) {
		// Get entry data. 
		let n = noteData[i]['name'];
		let c = noteData[i]['content'];
		let d = noteData[i]['dateEdited'];

		// Fill in representations for empty data points. 
		if(!n && !c) n = 'Empty Note';
		else if(!n) n = 'New Note';
		else if(!c) c = '';

		// Add to 'option' elements. 
		optElements += '<option name="'+n+'" content="'+c+'" date="'+d+'">' + n + '</option>';
	}

	// Add entries to page inside select box. 
	// $('select#chooser').html(optElements);
	document.getElementById('chooser').innerHTML = optElements;

	// Edit an entry when it is double-clicked in the list. 
	let options = document.getElementsByTagName('option');
	for(let i=0 ; i<options.length ; i++) {
		options[i].addEventListener('dblclick', enterEditorMode);
	}

	// Disable 'edit' and 'delete' buttons until a valid entry is selected. 
	document.getElementById('editBtn').setAttribute('disabled','');
	document.getElementById('deleteBtn').setAttribute('disabled','');
}

// Selector mode: note selector enabled, note editor disabled. 
function enterSelectorMode() {
	// Get all user input fields. 
	let inputs = document.getElementsByClassName('userAccessible');

	// Disable user input fields. 
	for (let i=0 ; i<inputs.length ; i++) {
		inputs[i].setAttribute('disabled', '');
	}

	// Disable save button. 
	document.getElementById('saveBtn').setAttribute('disabled', '');
	// Enable note chooser list. 
	document.getElementById('chooser').removeAttribute('disabled');

	// Dim the chooser side. 
	$('#noteEditor').removeClass('active');
	// Light up the editor side. 
	$('#noteSelector').addClass('active');
}
// Editor mode: note editor enabled, note selector disabled. 
function enterEditorMode() {
	// Get all input fields. 
	let inputs = document.getElementsByClassName('userAccessible');

	// Enable user input fields. 
	for (let i=0 ; i<inputs.length ; i++) {
		// console.log(inputs[i]);
		inputs[i].removeAttribute('disabled');
	}

	// Disable selector mode buttons. 
	document.getElementById('editBtn').setAttribute('disabled','');
	document.getElementById('deleteBtn').setAttribute('disabled','');
	// Disable note chooser list. 
	document.getElementById('chooser').setAttribute('disabled','');
	// Enable edit mode buttons. 
	document.getElementById('saveBtn').removeAttribute('disabled');

	// Dim the chooser side. 
	$('#noteSelector').removeClass('active');
	// Light up the editor side. 
	$('#noteEditor').addClass('active');

	/*****/

	function disableThe(id) {
		document.getElementById(id).setAttribute('disabled','');
	}
	function enableThe(id) {
		document.getElementById(id).removeAttribute('disabled');
	}
}



// Create a new entry. 
// (C in CRUD)
function createNewEntry() {
	// Clear all input fields. 
	clearUserInput();

	// Enable note editor. 
	enterEditorMode();

	// Save new entry to end of array. 
	selectedIndex = -1;

	// Save new entry. 
	// saveEntry();

	// Refresh data list. 
	// refreshList();
}

// Display details of selected entry (if valid). 
// (R in CRUD)
function onSelectEntry(event) {
	// Get selected option. 
	let selected = event.target.selectedOptions[0];
	selectedIndex = event.target.selectedIndex;
	console.log( 'selected:', selectedIndex, selected, event );

	// Get attributes from the selected option. 
	let n = selected.getAttribute('name');
	let c = selected.getAttribute('content');
	let d = new Date( 1*selected.getAttribute('date') );
	console.log('n =',n)
	console.log('c =',c)
	console.log('d =',formatDate(d))

	// Show note data for selected entry. 
	document.getElementById('noteName').value = n;
	document.getElementById('noteDate').innerHTML = formatDate(d);
	document.getElementById('noteContent').value = c;

	// Enable 'edit' and 'delete' buttons if a valid entry is selected. 
	if(selectedIndex>-1) {
		document.getElementById('editBtn').removeAttribute('disabled');
		document.getElementById('deleteBtn').removeAttribute('disabled');
	}
	// Disable 'edit' and 'delete' buttons until a valid entry is selected. 
	else {
		document.getElementById('editBtn').setAttribute('disabled','');
		document.getElementById('deleteBtn').setAttribute('disabled','');
	}
}

// Save user entry. 
// (U in CRUD)
function saveEntry(event) {
	console.log('saveEntry()');

	// Get attributes from the form. 
	let n = document.getElementById('noteName').value;
	let c = document.getElementById('noteContent').value;

	// Get the current date and time (in milliseconds). 
	let d = new Date().getTime();

	// Note is invalid only if there is (no name) and (no content). 
	let validNote = n||c;

	// Save updated information into existing entry. 
	if(selectedIndex > -1) {
		// Update entry. 
		noteData[selectedIndex]['name'] = n;
		noteData[selectedIndex]['content'] = c;
		noteData[selectedIndex]['dateEdited'] = d;

		// Notfiy user. 
		toast('Note successfully updated');
	}

	// Save new information into new entry (if valid). 
	else {
		// Check note validity. 
		if(validNote) {
			// Create new entry. 
			let newNote = { name:n, content:c, dateEdited:d, dateCreated:d };
			noteData.push(newNote);

			// Notfiy user. 
			toast('Note successfully saved');
		}

		// Discard any invalid notes. 
		else {
			console.log('Empty note discarded.');
			toast('🗑');
		}
	}

	// Update the displayed date. 
	$('#noteDate')
	.hide(1)
	.html(  formatDate( new Date(d) )  )
	.fadeIn(100) ;

	// Empty all user input fields. 
	// clearUserInput();

	// Disable further user input after saving new information. 
	enterSelectorMode();

	// Refresh the data list. 
	refreshList();
}

// Delete selected entry. 
// (D in CRUD)
function deleteSelectedEntry() {
	// Clear all input fields. 
	clearUserInput();

	// Check validity. 
	if(selectedIndex<0) {
		console.error('No entry selected.');
		return;
	}

	// Find entry in array by index. 
	// noteData[selectedIndex];

	// Remove selected entry from array. 
	let removedItems = noteData.splice(selectedIndex,1);
	console.log('removedItems',removedItems);

	// Refresh data list. 
	refreshList();

	return removedItems;
}




/*****/

// Format number as date. 
function formatDate(d) {
	var h = d.getHours();
	var m = d.getMinutes();

	let result = '';
	result += months[d.getMonth()] +' ' + d.getDate() +', '+ d.getFullYear();
	result += ' at ';
	result += ( h ? (h%12) : (12) );
	result += ':';
	result += (m<10) ? ('0'+m) : (m) ;
	result += (h<12) ? ' AM' : ' PM';
	return result;
}

