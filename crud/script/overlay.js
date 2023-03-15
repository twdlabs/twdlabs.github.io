


// Get overlay for item creator/editor. 
const overlay = document.querySelector('div#container div.overlay');


// Get overlay creator. 
// const overlaycreator = document.querySelector('div#container div.overlay main#creator');

// Get field box of overlay creator. 
const overlaycreatorfieldbox = document.querySelector('div#container div.overlay main#creator div.fieldbox');

// Get input field elements of item creator. 
const creatorinputs = {
	xyz: document.querySelector('div#container div.overlay main#creator div.fieldbox div.field input#newxyz'),
	fname: document.querySelector('div#container div.overlay main#creator div.fieldbox div.field input#newfname'),
	lname: document.querySelector('div#container div.overlay main#creator div.fieldbox div.field input#newlname'),
	email: document.querySelector('div#container div.overlay main#creator div.fieldbox div.field input#newemail'),
	mobilenumber: document.querySelector('div#container div.overlay main#creator div.fieldbox div.field input#newmobilenumber'),
};

// Get add button in item creator. 
// const editoraddbtn = document.querySelector('div#container div.overlay main#creator input.addbtn');


// Get overlay editor. 
// const overlayeditor = document.querySelector('div#container div.overlay main#editor');

// Get field box of overlay editor. 
const overlayeditorfieldbox = document.querySelector('div#container div.overlay main#editor div.fieldbox');

// Get input field elements of item editor. 
const editorinputs = {
	xyz: document.querySelector('div#container div.overlay main#editor div.fieldbox div.field input#xyz'),
	fname: document.querySelector('div#container div.overlay main#editor div.fieldbox div.field input#fname'),
	lname: document.querySelector('div#container div.overlay main#editor div.fieldbox div.field input#lname'),
	email: document.querySelector('div#container div.overlay main#editor div.fieldbox div.field input#email'),
	mobilenumber: document.querySelector('div#container div.overlay main#editor div.fieldbox div.field input#mobilenumber'),
};

// Get update button in item editor. 
const editorupdatebtn = document.querySelector('div#container div.overlay main#editor input.updatebtn');


/*****/


// Open overlay (in indicated mode). 
function openOverlay(inEditorMode) {

	// Set creator mode. 
	if(!inEditorMode) {

		// 
		creatorinputs = {};
		overlaycreatorfieldbox.innerHTML = '';
		for(key in userListMetaData) {

			// 
			let xyzinput = `
			<!-- field -->
			<div class="field">

				<!-- #xyz -->
				<input id="xyz" type="text" placeholder="Enter xyz"/>
				<!-- /#xyz -->

			</div>
			<!-- /field -->`;

			// 
			overlaycreatorfieldbox.insertAdjacentHTML('beforeend',xyzinput);
			// 
			creatorinputs[key] = document.querySelector('xyzabcxyz');
		}

		// Set creator mode. 
		overlay.classList.remove('edit');
	}

	// Set editor mode. 
	else {

		// 
		editorinputs = {};
		overlayeditorfieldbox.innerHTML = '';
		for(key in userListMetaData) {

			// 
			let xyzinput = `
			<!-- field -->
			<div class="field">

				<!-- #xyz -->
				<input id="xyz" type="text" placeholder="Enter xyz"/>
				<!-- /#xyz -->

			</div>
			<!-- /field -->`;

			// 
			overlayeditorfieldbox.insertAdjacentHTML('beforeend',xyzinput);
			// 
			editorinputs[key] = document.querySelector('xyzabcxyz');
		}
		
		// Set editor mode. 
		overlay.classList.add('edit');
	}

	// Activate overlay. 
	overlay.classList.add('active');
	overlay.focus();
}

// Close overlay. 
function closeOverlay() {

	// TODO: Remove previous fields. 

	// De-activate overlay. 
	overlay.classList.remove('active');
	overlay.blur();
}
