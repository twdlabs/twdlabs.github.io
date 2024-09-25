


// 
// let databasetables = <?php json_encode($databasetables); ?>;

// Define ids for CRUD operations. 
const crudoperations = [ 'create', 'read', 'update', 'delete', ];
// console.log('CRUD operations:',crudoperations);


/*****/


// Display form fields for clubs table. 
displayFormFields('clubs');

// Display form fields for holes table. 
displayFormFields('holes');

// Display form fields for shots table. 
displayFormFields('shots');


/*****/


// TODO: Display form fields for currently selected table. 
function displayFormFields(tableid) {
	console.log('Displaying form fields...',tableid);

	// Get destinations for form fields. 
	let fielddestinations = {};
	// fielddestinations = crudoperations.map(getFieldsDestination);

	// Go thru each operation id. 
	for(let opid of crudoperations) fielddestinations[opid] = getFieldsDestination(opid);
	console.log('fielddestinations:',fielddestinations);

	// TODO: Display 'create' form fields. 
	// xyz = xyz;
	fielddestinations['create'].insertAdjacentHTML('beforeend',xyz);

	// TODO: Display 'read' form fields. 
	// xyz = xyz;
	fielddestinations['read'].insertAdjacentHTML('beforeend',xyz);

	// TODO: Display 'update' form fields. 
	// xyz = xyz;
	fielddestinations['update'].insertAdjacentHTML('beforeend',xyz);

	// TODO: Display 'delete' form fields. 
	// xyz = xyz;
	fielddestinations['delete'].insertAdjacentHTML('beforeend',xyz);

	/****/

	// Get destination for list of fields. 
	function getFieldsDestination(opid) {

		// Get selected element. 
		let destination = document.querySelector(`div#container section.crud.${tableid} div.grid form.form.${opid} ul.fieldlist`);
		// console.log('\t',tableid,opid,destination);

		// Return selected element. 
		return (destination);
	}
}
