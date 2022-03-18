

// Get all input fields. 
const inputfields = document.querySelectorAll('main.main section.controller div.control input');
// console.log(inputfields);

// Activate input fields. 
for(let field of inputfields) {
	field.addEventListener('input',changeParameters);
}

// Handle change of parameter. 
function changeParameters() {
	// console.log('Parameters changed...');

	// Get all parameter values. 
	let paramList = [];
	for(let field of inputfields) {
		let value = field.value;
		paramList.push(value);
	}
	let params = paramList.join(' ');
	// console.log('Parameter list:', paramList);
	// console.log('Parameters:', params);
	

	// let params = 
	console.log('Parameters:', params);

	// 
	document.getElementById('output').innerHTML = `box-shadow: ${params}`;
}

// Copy text. 
function copyText() {

	// Get text output box. 
	let outputbox = document.getElementById('output');

	// Highlight text in output box. 
	outputbox.select();
	outputbox.setSelectionRange(0,99999);
	
	// Write output text to clipboard. 
	let output = outputbox.value;
	console.log('Navigator:',navigator);
	window.navigator.clipboard.writeText(output);

	console.log('Output:',output);
	// toast(output);
}