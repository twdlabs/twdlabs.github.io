


// Define loader flag. 
let letitload = false;
letitload = true;

// // Display editor fields for clubs table. 
// displayEditorFields('clubs');

// // Display editor fields for holes table. 
// displayEditorFields('holes');

// // Display editor fields for shots table. 
// displayEditorFields('shots');


/*****/


// Display editor fields for currently selected table. 
function displayEditorFields(tableid) {
	console.log('Displaying editor fields for:',tableid);
	// console.log('Database tables:',databasetables);
	if(!letitload) return;

	// Get destination for given table's editor fields. 
	let editorfieldsdestination = document.querySelector(`div#container section.crud.${tableid} form.form ul.fieldlist`);
	console.log('\tFields destination:',editorfieldsdestination);

	// Get list of fields for given table. 
	let fieldslist = databasetables[tableid]['fields'];

	// Create layout for editor fields. 
	let editorfieldslayout = createFieldsLayout(fieldslist);
	// Display editor fields. 
	// editorfieldsdestination.innerHTML = (editorfieldslayout);
	editorfieldsdestination.insertAdjacentHTML('beforeend',editorfieldslayout);

	/****/

	// Create layout for form field. 
	function createFieldsLayout(fieldlist) {

		// Initialize layout. 
		let fieldslayout = '';

		// Go thru each field. 
		for(let field of fieldlist) {

			// Get field type. 
			let type = field['type'];

			// Compile layout for current field. 
			if(type=='select') fieldslayout += createSelectField(field);

			// Compile layout for current field. 
			else fieldslayout += createInputField(field);
		}

		// Return layout. 
		return fieldslayout;

		/***/

		// Create input field. 
		function createInputField(field) {

			// Get field id. 
			let fieldid = field['id'];

			// Get field type. 
			let type = field['type'];

			// Get field caption. 
			let caption = field['caption'];

			// Compile layout for given field. 
			return `
			<!-- field -->
			<li class="field">
	
				<!-- fieldlabel -->
				<label class="fieldlabel" for="${fieldid}-${tableid}">${caption}</label>
				<!-- /fieldlabel -->
	
				<!-- fieldinput -->
				<input class="fieldinput" type="${type}"${type=='number'?' min="0"':''} id="${fieldid}-${tableid}" name="${fieldid}">
				<!-- /fieldinput -->
	
			</li>
			<!-- /field -->`;
		}

		// Create select field. 
		function createSelectField(field) {

			// Get field id. 
			let fieldid = field['id'];

			// Get field type. 
			let type = field['type'];

			// Get field caption. 
			let caption = field['caption'];

			// Compile layout for given field. 
			return `
			<!-- field -->
			<li class="field">

				<!-- fieldlabel -->
				<label class="fieldlabel" for="${fieldid}-${tableid}">${caption}</label>
				<!-- /fieldlabel -->

				<!-- fieldinput -->
				<!-- <input class="fieldinput" type="${type}" id="${fieldid}-${tableid}" name="${fieldid}"> -->
				<!-- /fieldinput -->

				<!-- fieldinput -->
				<select class="fieldinput" id="${fieldid}-${tableid}" name="${fieldid}">
					<!-- <option value=""></option> -->
					${ "getSelectOptions(entries,tableid)" }
				</select>
				<!-- /fieldinput -->

			</li>
			<!-- /field -->`;

			/**/

			// Get list of table entries for dropdown menu. 
			function getSelectOptions(entrieslist/* ,tableid */) {
				// global $databasetables;
	
				// Initialize list of select options. 
				let optionslist = '';
		
				// Go thru each table entry. 
				for(let entry of entrieslist) {
		
					// Get id of table entry. 
					let id = entry['id'];
	
					// Initialize entry caption. 
					let entrycaption = 'xyz';
					// Get entry caption. 
					// if(tableid) entrycaption = $databasetables[tableid]['captioner'](entry);
					// Get entry summary as caption. 
					// else entrycaption = createEntrySummary($entry);
		
					// Save table entry as select option. 
					optionslist += `<option value=\"${id}\">${entrycaption}</option>`;
				}
		
				// Return list of select options. 
				return optionslist;
			}
		}
	}
}

// TODO: Show values associated with selected entry. 
function displaySelectedEntry(eid,tid) {
	console.log(databasetables);
	// console.log(databasetableids);

	// Get id of selected entry. 

	// Get selected entry. 

	// Get value(s) of selected entry. 

	// Display value(s) of selected entry. 
}

// Turn off primary input field. 
function turnOffPrimaryField(btn) {

	// Get associated form. 
	let form = btn.closest('form.form');
	console.log(form);

	// Get primary entry field. 
	let entryfield = form.querySelector('li.field.pfield select.fieldinput');
	console.log(entryfield);

	// Disable entry field. 
	entryfield.disabled = true;
}
