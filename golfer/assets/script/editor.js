


// Get selected table. 
const selectedtable = getTableById(selectedtableid);
if(selectedtable) console.log('Selected table:',selectedtable);

// Get selected table entry (if exists). 
let selectedtableentry = getTableEntryById(selectedtableid,selectedentryid);
if(selectedtableentry) console.log('Selected table entry:',selectedtableentry);


/*****/


// Display fields for editing table entry. 
if(loadItUp) displayEntryEditor();

// Display title for current table. 
if(loadItUp) displayTableTitle();


/*****/



// Check for valid field value. 
function checkFieldValue(givenvalue) {
	return !!givenvalue || !isNaN(givenvalue);
}

// Display fields for editing table entry. 
function displayEntryEditor() {

	// Check if editing existing entry. 
	let editingexistingentry = !!selectedtableentry;
	console.log('Editing existing entry?',editingexistingentry);

	// Get destination for fields in editor form. 
	let editorfieldsdestination = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldslistlayout = createFieldsListLayout( selectedtable['tablefields'] );

	// Display list of fields in editor form. 
	editorfieldsdestination.innerHTML = fieldslistlayout;

	// Fill in current field values for selected entry. 
	if(editingexistingentry) fillEntryValues();

	/****/

	// Compile layout for given list of fields. 
	function createFieldsListLayout(fieldslist) {
	
		// Initialize layout for list of fields. 
		let fieldslistresult = '';
	
		// Go thru each field in given list. 
		for(let currentfield of fieldslist) {
			
			// Get field ids. 
			let fieldid = currentfield['fieldid'];
			let inputid = `${ editingexistingentry ? '' : 'new' }${fieldid}`;
			// Get field type. 
			let type = currentfield['fieldtype'];
			let tableid = currentfield['selectortableid'];
			let namekey = currentfield['selectornamekey'];
			// Get field caption. 
			let caption = currentfield['fieldcaption'];
			// Check for default field value. 
			let hasdefaultvalue = currentfield['fielddefaultvalue'] != undefined;
			// Get default field value. 
			let defaultfieldvalue = hasdefaultvalue ? currentfield['fielddefaultvalue'] : '';
			// Get field input placeholder. 
			let ph = checkFieldValue(defaultfieldvalue) ? defaultfieldvalue : '';

			// Compile layout for current field. 
			fieldslistresult += `
			<!-- fielditem -->
			<li class="fielditem">
	
				<!-- entryfield -->
				<div class="entryfield">
	
					<!-- fieldname -->
					<label class="fieldname" for="${inputid}">${caption}</label>
					<!-- /fieldname -->

					${ type=='select' ? createDropdownInput(inputid,tableid,namekey) : createSimpleInput(type,inputid,ph) }

				</div>
				<!-- /entryfield -->
				
			</li>
			<!-- /fielditem -->`;
		}
	
		// Return layout for list of fields. 
		return fieldslistresult;

		/***/

		// Create simple input. 
		function createSimpleInput(type,id,ph) {

			// Compile simple input. 
			return `
			<!-- fieldvalue -->
			<input class="fieldvalue" type="${type}" id="${id}" name="${id}" placeholder="${ph}">
			<!-- /fieldvalue -->`;
		}

		// Create dropdown input. 
		function createDropdownInput(inpid,giventableid,entrynamekey) {

			// Compile dropdown input. 
			return `
			<!-- fieldvalue -->
			<select class="fieldvalue" id="${inpid}" name="${inpid}">${ createSelectOptions(giventableid,entrynamekey) }</select>
			<!-- /fieldvalue -->`;

			/**/

			// Create list of options for select menu. 
			function createSelectOptions(tableid,namekey) {

				// Initialize layout of select options. 
				let optionslayout = '';

				// Get table (using given id). 
				let giventable = getTableById(tableid);

				// Go thru each entry in given table. 
				for(entry of giventable['currententries']) {

					// Add to layout of select options. 
					optionslayout += `<option value="${ entry['id'] }">${ entry[namekey] }</option>`;
				}

				// Initialize layout of select options. 
				return optionslayout;
			}
		}
	}

	// Fill in current field values for selected entry. 
	function fillEntryValues() {
		
		// Ensure valid table entry selected before proceeding. 
		if(!selectedtableentry) {
			console.warn('Invalid table entry selected...',selectedtableentry);
			return;
		}

		// Go thru each field in selected table entry. 
		for(let currentfield of selectedtable['tablefields']) {
	
			// Get field value. 
			let fieldid = currentfield.fieldid;
			let fieldvalue = selectedtableentry[fieldid];
			console.log('Field value:',fieldvalue);
	
			// Get input field. 
			let inputfield = document.querySelector(`div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#${currentfield.fieldid}`);
			
			// Display current value in input field. 
			// Fill in current values for selected entry. 
			inputfield.value = fieldvalue;
			// console.log('input field value:',fieldvalue,inputfield);
		}
	}
}
