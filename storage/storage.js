


// Get container for inventory keys. 
let inventorykeysbox = document.querySelector('select#inventorykeys');

// Get container for inventory values. 
let inventoryvaluesbox = document.querySelector('textarea#inventoryvalues');

// Get click counter box. 
let clickcountbox = document.querySelector('div#clickcount');

// Define not supported message. 
var notSupported = "Sorry, your browser does not support web storage..."


/*****/


// Show all contents of local storage. 
showStorage();


/*****/


// Show all contents of local storage. 
function showStorage() {

	// Initialize list of full inventory. 
	let fullinventory = '';

	// Initialize list of inventory keys. 
	let inventorykeys = '';

	// Go thru contents of local storage. 
	for(var i=0 ; i<localStorage.length ; i++) {

		// Get key for current item. 
		var key = localStorage.key(i);
		inventorykeys += `<option value="${key}">${i}: ${key}</option>`;

		// Get value for current item. 
		var value = localStorage.getItem(key);

		// Add item to full inventory. 
		fullinventory += `\n[${i}] ${key}: ${value}\n`;
	}

	// Update size of key selection box. 
	inventorykeysbox.size = i;
	// console.log(i);

	// Reset displayed inventory contents. 
	inventorykeysbox.innerHTML = inventorykeys;
	inventoryvaluesbox.innerHTML = fullinventory;
}

// Display value of selected key. 
function displayKeyValue(event) {

	// Get selected key. 
	let key = event.currentTarget.value; 
	// console.log('Selected key:',key);

	// Get value for selected key. 
	let value = localStorage.getItem(key)

	// 
	inventoryvaluesbox.innerHTML = value;
}

// Add to click count. 
function clickCounter() {

	// Check browser support for localStorage and sessionStorage. 
	if( typeof(Storage)=='undefined' ) {
		clickcountbox.innerHTML = notSupported;
		return;
	}

	// Increment click count if already exists. 
	if (localStorage.getItem('clickcount')) {
		localStorage.setItem('clickcount', Number(localStorage.clickcount) + 1);
	}

	// Initialize click count if not. 
	else localStorage.setItem('clickcount', 1);

	// Update displayed click count. 
	updateClickCountDisplay( localStorage.getItem('clickcount') );
}

// Add to click count. 
function clickCounter2() {

	// Check browser support for localStorage and sessionStorage. 
	if( typeof(Storage)=='undefined' ) {
		clickcountbox.innerHTML = notSupported;
		return;
	}

	// Increment click count if already exists. 
	if (localStorage.clickcount) {
		localStorage.clickcount = Number(localStorage.clickcount) + 1;
	}

	// Initialize click count if not. 
	else localStorage.clickcount = 1;

	// Update displayed click count. 
	updateClickCountDisplay( localStorage.clickcount );
}

// Add to click count. 
function clickCounter3() {

	// Check browser support for localStorage and sessionStorage. 
	if( typeof(Storage)=='undefined' ) {
		clickcountbox.innerHTML = notSupported;
		return;
	}

	// Increment click count if already exists. 
	if (localStorage['clickcount']) {
		localStorage['clickcount'] = Number(localStorage['clickcount']) + 1;
	}

	// Initialize click count if not. 
	else localStorage['clickcount'] = 1;

	// Update displayed click count. 
	updateClickCountDisplay( localStorage['clickcount'] );
}

// Update displayed click count. 
function updateClickCountDisplay(clickcount) {
	clickcountbox.innerHTML = `Click count: ${clickcount} time(s)`;
}
