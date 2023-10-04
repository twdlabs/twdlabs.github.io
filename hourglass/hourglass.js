


// Get input field for size of hour glass. 
const sizefield = document.querySelector('div#container main.main input.size');

// Get input field for outer character. 
const outercharfield = document.querySelector('div#container main.main input.char.o');
// Get input field for inner character. 
const innercharfield = document.querySelector('div#container main.main input.char.i');


/*****/


// Define size of hour glass. 
let hourglasswidth = 1*sizefield.value || 15;

// Define characters for hour glass. 
let outerchar = outercharfield.value || '#';
let innerchar = innercharfield.value || '.';


/*****/


// Print hour glass. 
for(let t=0 ; t<hourglasswidth ; t++) {
	// Print hour glass at time t. 
	printHourGlass(t);
}


/*****/


// Print hour glass at time t. 
function printHourGlass(t) {


	// Initialize hour glass output. 
	let finaloutput = '';


	// Add each individual line to output. 
	for(let g=0 ; g<hourglasswidth ; g++) {
	
		// Check if on single character line. 
		let onSingleCharLine = g==(hourglasswidth-1);
		// Skip line if on single character line. 
		if(onSingleCharLine) continue;
	
		// Add indentation spaces to output. 
		for(let h=0 ; h<g ; h++) {
			finaloutput += ' ';
		}
		// Add characters to output. 
		for(let i=g ; i<hourglasswidth ; i++) {
	
			// Check if on edge of hour glass. 
			let onedge = (g==0) || (i==g) || (i==hourglasswidth-1);
	
			// Add outer character if on edge of hour glass. 
			if(onedge) {
				finaloutput += `${outerchar} `;
			}
			// Add inner character if not on edge of hour glass. 
			else {
				let fillThisLine = true;
				if(fillThisLine) finaloutput += `${innerchar} `;
				else finaloutput += '  ';
			}
		}
	
		// Add line break to output. 
		finaloutput += '\n';
	}
	
	
	// Add each individual line to output. 
	for(let g=hourglasswidth-1 ; g>=0 ; g--) {
	
		// Check if on single character line. 
		let onSingleCharLine = g==(hourglasswidth-1);
		// Skip line if on single character line. 
		if(onSingleCharLine) continue;
	
		// Add indentation spaces to output. 
		for(let h=0 ; h<g ; h++) {
			finaloutput += ' ';
		}
		// Add characters to output. 
		for(let i=g ; i<hourglasswidth ; i++) {
	
			// Check if on edge of hour glass. 
			let onedge = (g==0) || (i==g) || (i==hourglasswidth-1);
	
			// Add outer character if on edge of hour glass. 
			if(onedge) {
				finaloutput += `${outerchar} `;
			}
			// Add inner character if not on edge of hour glass. 
			else {
				let fillThisLine = false;
				if(fillThisLine) finaloutput += `${innerchar} `;
				else finaloutput += '  ';
			}
		}
	
		// Add line break to output. 
		finaloutput += '\n';
	}


	// Print output. 
	console.log(`\n${finaloutput}\n`);
}
