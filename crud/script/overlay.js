


// Get overlay for item creator/editor. 
const overlay = document.querySelector('div#container div.overlay');

// Get overlay creator. 
// const overlaycreator = document.querySelector('div#container div.overlay main#creator');
// Get elements of item creator. 
const inputnewfname = document.querySelector('div#container div.overlay div.field input#newfname');
const inputnewlname = document.querySelector('div#container div.overlay div.field input#newlname');
const inputnewemail = document.querySelector('div#container div.overlay div.field input#newemail');
const inputnewmobilenumber = document.querySelector('div#container div.overlay div.field input#newmobilenumber');
// Get add button in item creator. 
// const editoraddbtn = document.querySelector('div#container div.overlay main#creator input.addbtn');

// Get overlay editor. 
// const overlayeditor = document.querySelector('div#container div.overlay main#editor');
// Get elements of item editor. 
const inputfname = document.querySelector('div#container div.overlay div.field input#fname');
const inputlname = document.querySelector('div#container div.overlay div.field input#lname');
const inputemail = document.querySelector('div#container div.overlay div.field input#email');
const inputmobilenumber = document.querySelector('div#container div.overlay div.field input#mobilenumber');
// Get update button in item editor. 
const editorupdatebtn = document.querySelector('div#container div.overlay main#editor input.updatebtn');


/*****/


// Open overlay in proper mode. 
function openOverlay(creatorMode) {

	// Set creator or editor mode. 
	if(creatorMode) overlay.classList.add('create');
	else overlay.classList.remove('create');

	// Activate overlay. 
	overlay.classList.add('active');
	overlay.focus();
}

// Close overlay. 
function closeOverlay() {

	// De-activate overlay. 
	overlay.classList.remove('active');
	overlay.blur();
}
