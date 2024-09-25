


// Define ids for CRUD operations. 
const crudoperations = [ 'create', /* 'read', */ 'update', /* 'delete', */ ];
// console.log('CRUD operations:',crudoperations);


/*****/


// Display editor fields for clubs table. 
displayFormFields('clubs');

// Display editor fields for holes table. 
displayFormFields('holes');

// Display editor fields for shots table. 
// displayFormFields('shots');


/*****/


// Display editor fields for currently selected table. 
function displayFormFields(tableid) {
	// console.log('Displaying editor fields...',tableid);

	// Get list of fields. 
	let fieldslist = databasetables[tableid]['fields'];

	// Get destinations for editor fields. 
	let fielddestinations = {};
	// fielddestinations = crudoperations.map(getFieldsDestination);

	// Go thru each operation. 
	for(let opid of crudoperations) {

		// Get fields destination for current operation. 
		fielddestinations[opid] = getFieldsDestination(opid);
	}
	// console.log('Field destinations:',fielddestinations);

	// Create editor fields: 'create'. 
	let createlayout = createFieldLayout(fieldslist,'c');
	// Display editor fields: 'create'. 
	fielddestinations['create'].insertAdjacentHTML('beforeend',createlayout);

	// // Create editor fields: 'read'. 
	// let readlayout = createFieldLayout(fieldslist,'r');
	// // Display editor fields: 'read'. 
	// fielddestinations['read'].insertAdjacentHTML('beforeend',readlayout);

	// Create editor fields: 'update'. 
	let updatelayout = createFieldLayout(fieldslist,'u');
	// Display editor fields: 'update'. 
	fielddestinations['update'].insertAdjacentHTML('beforeend',updatelayout);

	// // Create editor fields: 'delete'. 
	// let deletelayout = createFieldLayout(fieldslist,'d');
	// // Display editor fields: 'delete'. 
	// fielddestinations['delete'].insertAdjacentHTML('beforeend',deletelayout);

	/****/

	// Get destination for list of fields. 
	function getFieldsDestination(opid) {

		// Get selected element. 
		let destination = document.querySelector(`div#container section.crud.${tableid} div.grid form.form.${opid} ul.fieldlist`);
		// console.log('\t',tableid,opid,destination);

		// Return selected element. 
		return (destination);
	}

	// Create layout for form field. 
	function createFieldLayout(fieldlist,crudid) {

		// Initialize layout. 
		let fieldslayout = '';

		// Go thru each field. 
		for(let field of fieldlist) {

			// Get field id. 
			let fieldid = field['id'];

			// Get page id. 
			let pageid = field['pageid'];

			// Get field type. 
			let type = field['type'];

			// Get field caption. 
			let caption = field['caption'];

			// Compile layout for current field. 
			if(type=='select') fieldslayout += `
			<!-- field -->
			<li class="field">

				<!-- fieldlabel -->
				<label class="fieldlabel" for="${pageid}-${crudid}">${caption}</label>
				<!-- /fieldlabel -->

				<!-- fieldinput -->
				<select class="fieldinput" id="${pageid}-${crudid}" name="${fieldid}">
					<!-- <option value=""></option> -->
					<?php

						// Display clubs table entries in dropdown menu. 
						showSelectOptions($holeentries,'holes');
					?>
				</select>
				<!-- /fieldinput -->

				<!-- fieldinput -->
				<!-- <input class="fieldinput" type="${type}" id="${fieldid}-${crudid}" name="${fieldid}"> -->
				<!-- /fieldinput -->

			</li>
			<!-- /field -->`;

			// Compile layout for current field. 
			else fieldslayout += `
			<!-- field -->
			<li class="field">
	
				<!-- fieldlabel -->
				<label class="fieldlabel" for="${fieldid}-${crudid}">${caption}</label>
				<!-- /fieldlabel -->
	
				<!-- fieldinput -->
				<input class="fieldinput" type="${type}"${type=='number'?' min="0"':''} id="${fieldid}-${crudid}" name="${fieldid}">
				<!-- /fieldinput -->
	
			</li>
			<!-- /field -->`;
		}

		// Return layout. 
		return fieldslayout;
	}
}
