


// Get history restore buttons. 
const undobtn = document.querySelector('div#container section.viewer div.grid div.head div.btnpanel button.undobtn');
const redobtn = document.querySelector('div#container section.viewer div.grid div.head div.btnpanel button.redobtn');


/*****/


// Check if previous table state exists. 
function checkForPrevTable() {

	// Check if previous table state exists. 
	return !!( selectedtable['bcktablestack'][0] );
}
// Check if following table state exists. 
function checkForNextTable() {

	// Check if following table state exists. 
	return !!( selectedtable['fwdtablestack'][0] );
}

// Update table history navigation buttons. 
function updateHistoryBtns() {
	console.log('Updating table history nav...')

	// Ensure both history buttons present (viewer page). 
	if( !undobtn || !redobtn ) {
		console.warn('History button missing...',undobtn,redobtn);
		return;
	}

	// Check if previous table state exists. 
	let prevexists = checkForPrevTable();
	// Check if following table state exists. 
	let nextexists = checkForNextTable();
	console.log('Prev/Next table?',prevexists,nextexists);

	// Enable undo button if previous table exists. 
	if(prevexists) enableBtn(undobtn);
	// Disable undo button if no previous table exists. 
	else disableBtn(undobtn);
	
	// Enable redo button if following table exists. 
	if(nextexists) enableBtn(redobtn);
	// Disable redo button if no following table exists. 
	else disableBtn(redobtn);

	/****/

	// Enable button. 
	function enableBtn(btn) {
		btn.removeAttribute('disabled');
	}

	// Disable button. 
	function disableBtn(btn) {
		btn.setAttribute('disabled','');
	}
}

// Go backward in table state history (if possible). 
function undoAction() {
	console.log('Going backward in table history...');

	// Ensure previous table available. 
	if( !checkForPrevTable() ) {
		console.warn('Prev table unavailable');
		return;
	}

	// Shift history tables forward. 
	shiftTableHistoryFwd();

	// Go to updated table. 
	goToUpdatedTable();

	/****/

	// Shift table history forward. 
	function shiftTableHistoryFwd() {

		// Shift current table to fwd history. 
		pushToStack( selectedtable['fwdtablestack'] , selectedtable['currententries'] );

		// Shift first back history table to current. 
		selectedtable['currententries'] = popFromStack( selectedtable['bcktablestack'] );
	}
}
// Go forward in table state history (if possible). 
function redoAction() {
	console.log('Going forward in table history...');

	// Ensure following table available. 
	if( !checkForNextTable() ) {
		console.warn('Next table unavailable');
		return;
	}

	// Shift history tables backward. 
	shiftTableHistoryBack();

	// Go to updated table. 
	goToUpdatedTable();

	/****/

	// Shift table history backward. 
	function shiftTableHistoryBack() {

		// Shift current table to back history. 
		pushToStack( selectedtable['bcktablestack'] , selectedtable['currententries'] );

		// Shift first fwd history table to current. 
		selectedtable['currententries'] = popFromStack( selectedtable['fwdtablestack'] );
	}
}
// Push item onto top of stack. 
function pushToStack(stack,newitem) {

	// Add item to first position of stack. 
	stack.unshift(newitem);
}
// Pop item off from top of stack. 
function popFromStack(stack) {

	// Remove item from first position of stack. 
	return stack.shift();
}
