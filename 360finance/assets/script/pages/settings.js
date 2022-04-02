

// Update font size. 
function updateFontSize(event) {

	// Get selected value. 
	let selectedValue = event.currentTarget.value;
	console.log('Selected value:',selectedValue);

	// Update font size. 
	document.documentElement.style.fontSize = fontsizes[selectedValue];
}

// TODO: Update font color for income amounts. 
function updateIncomeColorMode(event) {
	console.log('Selected value: ', event.currentTarget.value);

	// 
}

// TODO: Update font color for expense amounts. 
function updateExpenseColorMode(event) {
	console.log('Selected value: ', event.currentTarget.value);

	// 
}

// TODO: Update font color for budget spending categories. 
function updateCategoryColorMode(event) {
	console.log('Selected value: ', event.currentTarget.value);

	// 
}

// TODO: Update categorization mode. 
function updateCategorizationMode(event) {
	console.log('Selected value: ', event.currentTarget.value);

	// 
}
