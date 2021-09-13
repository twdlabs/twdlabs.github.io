


// List operation classes. 
// var ops = ['add','multiply','exponent','determinant','inverse'];
var ops = ['add','mul','exp','det','inv','tra'];

// Class name of current operation
var currentOperation;

// Is this a square matrix operation ?
let nowUsingSquareMatrices = true;

// Initiate matrix sizes. 
var size = 6;
var rowsA = 6;
var colsA = 6;
var rowsB = 6;
var colsB = 6;

// Initiate result matrix data. 
var resultMatrices = [
	{	// resultMatrices[0]
		name:'A',
		determinant:8,
		data:[
			[2,0,0],
			[0,2,0],
			[0,0,2]
		]
	},{	// resultMatrices[1]
		name:'A2',
		determinant:64,
		data:[
			[4,0,0],
			[0,4,0],
			[0,0,4]
		]
	},{	// resultMatrices[2]
		name:'A3',
		determinant:512,
		data:[
			[8,0,0],
			[0,8,0],
			[0,0,8]
		]
	}
];



$(document).ready(function() {
	// Choose operation on select radio button. 
	$('div.operation.m1 input, div.operation.m2 input').change(chooseOperation);

	// Reset operation. 
	resetOperation();

	// Automate form button click by enter key press in input field (add mul exp det inv). 
	attachByEnter('size','newSqInputBtn');
	attachByEnter('degree','goBtn');

	// Automate form button click by enter key press in input field (add). 
	attachByEnter('rows','newIdenticalInputBtn');
	attachByEnter('cols','newIdenticalInputBtn');

	// Automate form button click by enter key press in input field (mul). 
	attachByEnter('sizeX','newNonSqInputBtn');
	attachByEnter('sizeY','newNonSqInputBtn');
	attachByEnter('sizeZ','newNonSqInputBtn');
});



// Automate form button click by enter key press in input field. 
function attachByEnter(inputid,btnid) {
	var input = document.getElementById(inputid);
	input.addEventListener('keyup', function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById(btnid).click();
		}
	});
}


// Reset operation. 
function resetOperation(event) {
	// Remove class for all operations. 
	for(let i=0 ; i<ops.length ; i++) {
		$('section.input').removeClass(ops[i]);
	}

	// Clear operation choice. 
	$('div.operation.clear input').click();
}


// Choose operation. 
function chooseOperation(event) {
	// Reset from previous operation. 
	resetOperation();
	
	// Clear previous selections. 
	$('div.operation').removeClass('on');

	// Add 'on' class to parent of radio button. 
	let radioBtn = event.currentTarget;
	$(radioBtn.parentElement).addClass('on');

	// Get operation id from radio button. 
	let radioId = radioBtn.id;
	currentOperation = radioId.substr(0,3);
	console.log('Current operation:',currentOperation);

	// Add class for chosen operation. 
	$('section.input').addClass(currentOperation);

	// Clear all previous results and output. 
	clearResults();

	// Show new matrix input. 
	newMatrixInput();
}


// Chang size by given amount. 
function deltaSize(deltaAmount) {
	// Get current size from page. 
	size = 1*$('input#size').val();

	// Change size by delta amount. 
	size += deltaAmount;

	// Ensure size is at least 1. 
	if(size<1) {
		size = 1;
		toast('Size must be at least 1.');
	}

	// Show new size on page. 
	$('input#size').val(size);
}


// Show new matrix input. 
function newMatrixInput(notSquare) {
	// Default is square matrices (null aka false value for notSquare). 
	nowUsingSquareMatrices = !notSquare;
	console.log('square',nowUsingSquareMatrices);

	// Include zeroes in empty matrix fields. 
	let includeZeroes = true;
	// console.log('includeZeroes',includeZeroes);

	// Initiate matrix input form. 
	let inputA = '<h4>Define matrix A:</h4>';
	let inputB = '<h4>Define matrix B:</h4>';



	// Create non-square matrices for input. 
	if(notSquare) {
		// Get size of input matrices for addition. 
		if(currentOperation=='add') {
			rowsA = 1*$('input#rows').val();
			colsA = 1*$('input#cols').val();
			rowsB = 1*$('input#rows').val();
			colsB = 1*$('input#cols').val();
			console.log('sizeA ',rowsA,'x',colsA);
			console.log('sizeB ',rowsB,'x',colsB);
		}
		// Get size of input matrices for multiplication. 
		else if(currentOperation=='mul') {
			rowsA = 1*$('input#sizeX').val();
			colsA = 1*$('input#sizeY').val();
			rowsB = 1*$('input#sizeY').val();
			colsB = 1*$('input#sizeZ').val();
			console.log('sizeA ',rowsA,'x',colsA);
			console.log('sizeB ',rowsB,'x',colsB);
		}
		// Handle extra scenarios. 
		else {
			rowsA = 0;
			colsA = 0;
			rowsB = 0;
			colsB = 0;
			console.error('Invalid multi-matrix operation chosen.');
		}

		// Assert valid numbers for size of matrices. 
		if(rowsA<=0 || colsA<=0 || rowsB<=0 || colsB<=0) {
			alert('Please enter valid positive numbers for sizes of matrices. ')
			return;
		}
	}


	// Create square matrices for input. 
	else {
		// Get size of input matrices. 
		size = 1*$('input#size').val();
		console.log('size',size);
		rowsA = size;
		colsA = size;
		rowsB = size;
		colsB = size;
		console.log('sizeA ',rowsA,'x',colsA);
		console.log('sizeB ',rowsB,'x',colsB);

		// Assert valid number for size of matrices. 
		if(size<=0) {
			alert('Please enter a valid positive number for size of matrices. ')
			return;
		}

		// Add buttons for matrixA setters. 
		// inputA += 'Fill matrix: ';
		inputA += '<button onclick="fillIdentity(\'a\');">Identity</button>';
		inputA += '<button onclick="fillRandomStochastic(\'a\');">Stochastic</button>';
		inputA += '<br>';
		// inputA += 'Alter matrix: ';
		inputA += '<button onclick="transposeInputEntries(\'a\');">Transpose</button>';

		// Add buttons for matrixB setters. 
		// inputB += 'Fill matrix: ';
		inputB += '<button onclick="fillIdentity(\'b\');">Identity</button>';
		inputB += '<button onclick="fillRandomStochastic(\'b\');">Stochastic</button>';
		inputB += '<br>';
		// inputB += 'Alter matrix: ';
		inputB += '<button onclick="transposeInputEntries(\'b\');">Transpose</button>';

	}


	// Create matrixA input form. 
	for(let h=0 ; h<rowsA ; h++) {
		// console.log('\th',h);
		// Fill row for matrixA. 
		inputA += '<!-- row -->';
		inputA += '<div class="row">';
		for(let i=0 ; i<colsA ; i++) {
			// console.log('\t\ti',i);
			// Fill matrix entry. 
			inputA += '<!-- entry -->';
			inputA += '<div class="entry">';
				inputA += '<input type="number" id="a'+h+''+i+'"';
				if(includeZeroes) inputA += ' placeholder="0"';
				inputA += '/>';
			inputA += '</div>';
			inputA += '<!-- /entry -->';
		}
		inputA += '</div>';
		inputA += '<!-- /row -->';
	}

	// Create matrixB input form. 
	for(let h=0 ; h<rowsB ; h++) {
		// console.log('\th',h);
		// Fill row for matrixB. 
		inputB += '<!-- row -->';
		inputB += '<div class="row">';
		for(let i=0 ; i<colsB ; i++) {
			// console.log('\t\ti',i);
			// Fill matrix entry. 
			inputB += '<!-- entry -->';
			inputB += '<div class="entry">';
				inputB += '<input type="number" id="b'+h+''+i+'"';
				if(includeZeroes) inputB += ' placeholder="0"';
				inputB += '/>';
			inputB += '</div>';
			inputB += '<!-- /entry -->';
		}
		inputB += '</div>';
		inputB += '<!-- /row -->';
	}


	// Show matrix input form on page. 
	$('section#definer div#matrixA').html(inputA);
	$('section#definer div#matrixB').html(inputB);

	// Hide output section. 
	$('#output').addClass('gone');
}


// Create matrix data set from data on page. 
function createMatrixDataSet(prefix,notSquare) {
	// Initiate result matrix data. 
	let result = [];

	// Initiate size parameters. 
	let rowCount;
	let colCount;

	// Get appropriate size parameters. 
	if(!notSquare) {
		rowCount = size;
		colCount = size;
	}
	else if(prefix=='a') {
		rowCount = rowsA;
		colCount = colsA;
	}
	else if(prefix=='b') {
		rowCount = rowsB;
		colCount = colsB;
	}
	else {
		console.error('Invalid parameter given to method createMatrixDataSet('+prefix+','+notSquare+')');
	}

	// Create non-square matrices. 
	if(notSquare) {
		// Fill matrix data set with data from input fields. 
		for(let h=0 ; h<rowCount ; h++) {
			result[h] = [];
			for(let i=0 ; i<colCount ; i++) {
				result[h][i] = 1*$('input#'+prefix+''+h+''+i).val();
			}
		}
	}
	// Create square matrices. 
	else {
		// Fill matrix data set with data from input fields. 
		for(let h=0 ; h<rowCount ; h++) {
			result[h] = [];
			for(let i=0 ; i<colCount ; i++) {
				result[h][i] = 1*$('input#'+prefix+''+h+''+i).val();
			}
		}
	}


	// Return result matrix data. 
	return result;
}


// Fill matrix data input with identity matrix. 
function fillIdentity(prefix) {
	if(!nowUsingSquareMatrices) {
		console.error('Identity matrix invalid for non-square matrix.');
		return;
	}

	// Fill matrix input fields with identity matrix data. 
	for(let h=0 ; h<size ; h++) {
		for(let i=0 ; i<size ; i++) {
			if(h==i) $('input#'+prefix+''+h+''+i).val(1);
			else $('input#'+prefix+''+h+''+i).val('');
		}
	}
}


// Fill matrix data input with a stochastic matrix. 
function fillRandomStochastic(prefix) {
	if(!nowUsingSquareMatrices) {
		console.error('Stochastic matrix invalid for non-square matrix.');
		return;
	}

	// Get n distinct random numbers that aggregate to 1 (differences between ordered randos). 
	// Fill matrix input fields with stochastic matrix data. 
	for(let i=0 ; i<size ; i++) {
		// For each column...

		// Generate n-1 random numbers (0 < r < 1) [n = size]. 
		let randos = [0,1];
		for(let i=0 ; i<size-1 ; i++) {
			randos.push( Math.random());
		}

		// Sort numbers from small to large. 
		randos.sort(sortSmallToLarge);
		console.log('randos',i,randos);

		for(let h=0 ; h<size ; h++) {
			// For each field in a column (or row)...
			let entry = (randos[h+1] - randos[h]).toPrecision(3);
			$('input#'+prefix+''+h+''+i).val(entry);
		}
	}

	// Sort function: Sort numbers from small to large. 
	function sortSmallToLarge(a,b) {
		return (a-b);
	}
}


// Transpose input entries. 
function transposeInputEntries(prefix) {
	// Save all input entries to data set. 
	matrixData = createMatrixDataSet(prefix,false);

	// Load all input entries as transposed data set. 
	for(let h=0 ; h<size ; h++) {
		for(let i=0 ; i<size ; i++) {
			let entry = matrixData[i][h];
			if(entry==0) $('input#'+prefix+''+h+''+i).val('');
			else $('input#'+prefix+''+h+''+i).val(entry);
		}
	}
}


// Switch input matrices (square matrix operation). 
function switchInputMatrices() {
	// Save data from matrix A. 
	let matrixDataA = createMatrixDataSet('a',false);

	// Save data from matrix B. 
	let matrixDataB = createMatrixDataSet('b',false);

	// Populate data into matrix A. 
	populateInputMatrixWithDataSet('a',matrixDataB);

	// Populate data into matrix B. 
	populateInputMatrixWithDataSet('b',matrixDataA);

	/*****/

	// Populate matrix input fields with data from given source. 
	function populateInputMatrixWithDataSet(prefix,datasource) {
		// Assert valid data source. 
		let compatible = (datasource.length == size);
		if(!compatible) {
			console.error('Data set size incompatible');
			return;
		}

		// Fill matrix input fields from given data source. 
		for(let h=0 ; h<size ; h++) {
			for(let i=0 ; i<size ; i++) {
				let entry = datasource[h][i];
				if(entry==0) $('input#'+prefix+''+h+''+i).val('');
				else $('input#'+prefix+''+h+''+i).val(entry);
			}
		}
	}
}




// Handle chosen operation. 
function handleOperation() {

	// Create matrix data sets from input data on page. 
	let matrixDataA = createMatrixDataSet('a',true);
	console.log('matrixDataA',matrixDataA);
	let matrixDataB = createMatrixDataSet('b',true);
	console.log('matrixDataB',matrixDataB);


	// Clear all previous results and output. 
	clearResults();


	// Add: Add two matrices. 
	if(currentOperation==ops[0]) {
		console.log('Operation: Add');
		nowUsingSquareMatrices = false;

		// Calculate result of matrix addition. 
		let matrixDataAplusB = addMatrices(matrixDataA,matrixDataB);

		// Save result of matrix addition. 
		saveToResultMatrixList(matrixDataAplusB,'A + B');
		console.log('matrixA+B',matrixDataAplusB);
	}
	
	// Multiply: Multiply two matrices. 
	else if(currentOperation==ops[1]) {
		console.log('Operation: Multiply');
		nowUsingSquareMatrices = false;

		// Calculate result of matrix multiplication. 
		let matrixDataAxB = multiplyMatrices(matrixDataA,matrixDataB);
		let matrixDataBxA = multiplyMatrices(matrixDataB,matrixDataA);

		// Save result of matrix multiplication. 
		saveToResultMatrixList(matrixDataAxB,'A * B');
		saveToResultMatrixList(matrixDataBxA,'B * A');
		console.log('matrixDataAxB',matrixDataAxB);
		console.log('matrixDataBxA',matrixDataBxA);
	}
	
	// Exponent: Get exponential of matrix. 
	else if(currentOperation==ops[2]) {
		console.log('Operation: Exponent');
		nowUsingSquareMatrices = true;

		// Get final degree of multiplication. 
		let degree = 1*$('input#degree').val();
		console.log('degree',degree);

		// Copy original matrix data. 
		let matrixDataAk = matrixDataA;

		// Save original result. 
		saveToResultMatrixList(matrixDataAk,'A');
		console.log('matrixDataAk',matrixDataAk,1);

		let dontStopTillYouGetEnuff = $('#untilStabilized').prop('checked');

		// Multiply until stabilized. 
		if(dontStopTillYouGetEnuff) {
			// Initialize operation continuation flag. 
			keepGoing = true;

			// Multiply the matrix as many times as needed (until last two results are equal). 
			for(let k=2 ; keepGoing && !checkExpStability(3) ; k++) {
				// Check to continue after every 100 iterations. 
				if(k%100==0) keepGoing = confirm('Keep going ?');

				// Multipy matrices. 
				matrixDataAk = multiplyMatrices(matrixDataAk, matrixDataA);

				// Save result of matrix multiplication. 
				saveToResultMatrixList(matrixDataAk,'A<sup>'+k+'</sup>');
				console.log('matrixDataA'+k,matrixDataAk);
			}

			// Create initial probability vector. 
			let matrixDataR0 = [];
			for(let h=0 ; h<size ; h++) {
				matrixDataR0.push([1/size]);
			}
			console.log('matrixDataR0',matrixDataR0);
			saveToResultMatrixList(matrixDataR0,'R<sub>0</sub>');

			// Multiply last (stabilized) matrix by initial probability vector. 
			let matrixDataRf = multiplyMatrices(matrixDataAk,matrixDataR0);
			console.log('matrixDataRf',matrixDataRf);

			// Save resulting rank vector to list of results. 
			saveToResultMatrixList(matrixDataRf,'R<sub>f</sub>');
		}

		// Multiply to given degree. 
		else {
			// Multiply the matrix as many times as chosen. (1 thru k-1) aka (2 thru k)
			for(let k=2 ; k<=degree ; k++) {
				// Multipy matrices. 
				matrixDataAk = multiplyMatrices(matrixDataAk, matrixDataA);

				// Save result of matrix multiplication. 
				saveToResultMatrixList(matrixDataAk,'A<sup>'+k+'</sup>');
				console.log('matrixDataA'+k,matrixDataAk);
			}
		}
	}
	
	// Determinant: Get determinant of matrix. 
	else if(currentOperation==ops[3]) {
		console.log('Operation: Determinant');
		nowUsingSquareMatrices = true;

		// Calculate determinant of square matrix. 
		let result = getDeterminant(matrixDataA);
		
		// Save result of determinant calculation. 
		saveToResultMatrixList( [[result]] ,'det(A)');
		console.log('det(A)', result, [[result]] );
	}
	
	// Inverse: Get inverse matrix of square matrix. 
	else if(currentOperation==ops[4]) {
		console.log('Operation: Inverse');
		nowUsingSquareMatrices = true;

		// Calculate inverse of square matrix (if it exists). 
		let matrixDataInvA = getInverseMatrix(matrixDataA);

		// Save result of operations. 
		saveToResultMatrixList( matrixDataInvA ,'A<sup>-1</sup>');
		console.log('inverse(A)', matrixDataInvA );
	}
	
	// Transpose: Get transposed version of matrix. 
	else if(currentOperation==ops[5]) {
		console.log('Operation: Transpose');
		nowUsingSquareMatrices = false;

		// Calculate inverse of square matrix (if it exists). 
		let matrixDataTrA = getTransposeMatrix(matrixDataA);

		// Save result of operations. 
		saveToResultMatrixList( matrixDataTrA ,'A<sup>T</sup>');
		console.log('transpose(A)', matrixDataTrA );
	}

	// Non-op
	else {
		console.error('Invalid operation chosen');
	}


	// Show all result matrices. 
	console.log('resultMatrices',resultMatrices);
	showResults();


	/*****/


	// Get result of adding two matrices. 
	function addMatrices(m1data, m2data) {
		// Initiate result matrix data. 
		let resultdata = [];

		// Fill each matrix row with data. 
		for(let h=0 ; h<size ; h++) {
			// Create new row. 
			resultdata[h] = [];

			// Fill each matrix field with data. 
			for(let i=0 ; i<size ; i++) {
				let entry = m1data[h][i] + m2data[h][i];
				// console.log('entry',entry);
				resultdata[h][i] = entry;
			}
		}

		// Return result matrix data. 
		return resultdata;
	}

	// Get result of multiplying two matrices. 
	function multiplyMatrices(m1data, m2data) {
		// Initiate result matrix data. 
		let resultdata = [];

		// Get size of result matrix. 
		let sizeX = getRowCount(m1data);
		let sizeY = getColCount(m1data);
		let sizeZ = getColCount(m2data);
		console.log('product sizes: ',sizeX,sizeY,sizeZ);

		// Fill each matrix row with data. 
		for(let h=0 ; h<sizeX ; h++) {
			// Create new row. 
			resultdata[h] = [];

			// Fill each matrix field with data. 
			for(let i=0 ; i<sizeZ ; i++) {
				let entry = 0;
				// Accumulate value for matrix field. 
				for(let j=0 ; j<sizeY ; j++) {
					// console.log('h',h, 'i',i, 'j',j);
					entry += m1data[h][j] * m2data[j][i];
					// console.log('entry',h,i,j,entry);
				}
				resultdata[h][i] = entry;
			}
		}

		// Return result matrix data. 
		return resultdata;
	}

	// Check stability of matrix exponential by equality of last two result matrices. 
	function checkExpStability(numDigits) {
		// Get number of result matrices. 
		let l = resultMatrices.length;

		// Assume to be false if matrices are not the same size. 
		if(l>=2) {
			// Get data sets from last two result matrices. 
			let matrixDataY = resultMatrices[l-2].data;
			let matrixDataZ = resultMatrices[l-1].data;

			// Check for equality of matrix sizes. 
			let sameRowCount = matrixDataY.length==matrixDataZ.length;
			let sameColCount = matrixDataY[0].length==matrixDataZ[0].length;

			// Compare matrices for equality of all entries. 
			if(sameRowCount && sameColCount) {
				// Get matrix size components. 
				let rowCount = matrixDataY.length;
				let colCount = matrixDataY[0].length;

				// Start with asssumption of equality of matrices until unequal value is found. 
				let itsAllGood = true;

				// Go thru rows. 
				for(let h=0 ; h<rowCount ; h++) {
					// Go thru columns. 
					for(let i=0 ; i<colCount ; i++) {
						// Get entries of each matrix. 
						entryY = matrixDataY[h][i];
						entryZ = matrixDataZ[h][i];

						// Define conditions of entry equality (equal up to n digits). 
						let equalEntries = entryY.toPrecision(numDigits) == entryZ.toPrecision(numDigits);
						if(!equalEntries) return false;
					}
				}

				// Return true (matrices equal) if gone thru each entry without an inequallity found. 
				return true;
			}

			// Assume to be false if matrices differ in size (# rows or columns). 
			else return false;
		}

		// Assume to be false if not enough (2 or more) matrices to check. 
		else return false;
	}

	// Calculate determinant of square matrix. 
	function getDeterminant(matrixData) {
		// Get size of given matrix. 
		let dataSize = matrixData.length;

		// 
		if(dataSize==1) { // det(A) = a
			return matrixData[0][0];
		}
		else if(dataSize==2) { // det(A) = ad-bc
			let a = matrixData[0][0];
			let b = matrixData[0][1];
			let c = matrixData[1][0];
			let d = matrixData[1][1];
			return (a*d - b*c);
		}
		else if(dataSize>=2) {
			// Initiate determinant sum. 
			let sum = 0;

			// Expand minor matrix along 1st row. 
			let h = 0;
			for(let i=0 ; i<dataSize ; i++) {
				sum += Math.pow(-1,(h+i)) * matrixData[h][i] * getDeterminant( getSubMatrixOf(matrixData,h,i) );
			}
			return sum;
		}
		else {
			console.error('Error in matrix determinant calculation...',matrixData);
			return null;
		}
	}

	// Calculate inverse of square matrix. 
	function getInverseMatrix(matrixData) {
		// Calculate determinant of matrix. 
		let determinant = getDeterminant(matrixData);

		// Initiate result matrix data. 
		let invMatrixData = [];


		// Check for zero determinant. 
		if(determinant==0) {
			console.log('Degenerate matrix: Inverse of matrix A does not exist. [det(A) = 0]');
			invMatrixData = [['DNE']];
		}

		// Check for non-square matrix. 
		else if(matrixData.length!=matrixData[0].length) {
			console.log('Non-square matrix: Inverse of matrix A does not exist. [rows(A) != cols(A)]');
			console.log('rows(A)',matrixData.length);
			console.log('cols(A)',matrixData[0].length);
			invMatrixData = [['DNE']];
		}

		// Perform necessary operations to find inverse matrix. 
		else {
			// Get cofactor matrix data. 
			let cofMatrixData = getCofactorMatrix(matrixData);
			console.log('\ncofMatrixData');
			console.table(cofMatrixData);

			// Get adjugate matrix data. 
			let adjMatrixData = getTransposeMatrix(cofMatrixData);
			console.log('\nadjMatrixData');
			console.table(adjMatrixData);

			// Get scalar matrix for inverse determinant. 
			let matrixDataInvDet = getScalarMatrix(1/determinant);
			console.log('\nmatrixDataInvDet');
			console.table(matrixDataInvDet);

			// Get inverse matrix data. 
			invMatrixData = multiplyMatrices(matrixDataInvDet,adjMatrixData);
			console.log('\ninvMatrixData');
			console.table(invMatrixData);
		}


		// Return resulting inverse matrix data. 
		return invMatrixData;

		/*****/

		// Compose cofactor matrix, matrix of determinants of all sub-matrices. 
		function getCofactorMatrix(matrixDataOriginal) {
			// Initiate result matrix data. 
			let result = [];

			// Fill with cofactor matrix data. 
			for(let h=0 ; h<size ; h++) {
				// Create new row. 
				result[h] = []
				for(let i=0 ; i<size ; i++) {
					// Set entry value to determinant of corresponding sub-matrix. 
					result[h][i] = Math.pow(-1,h+i) * getDeterminant( getSubMatrixOf(matrixDataOriginal,h,i) );
				}
			}

			// Return result matrix data. 
			return result;
		}

		// Get scalar matrix of magnitude. 
		function getScalarMatrix(k) {
			// Initiate result matrix data. 
			let result = [];

			// Fill with identity matrix data. 
			for(let h=0 ; h<size ; h++) {
				// Create new row. 
				result[h] = []
				for(let i=0 ; i<size ; i++) {
					if(h==i) result[h][i] = k;
					else result[h][i] = 0;
				}
			}

			// Return result matrix data. 
			return result;
		}
	}

	// Get transpose of matrix. 
	function getTransposeMatrix(matrixData) {
		// Initiate result matrix data. 
		let resultdata = [];

		// Load all input entries as transposed data set. 
		for(let h=0 ; h<colsA ; h++) {
			// Create new row. 
			resultdata[h] = [];

			// Fill each matrix field with data. 
			for(let i=0 ; i<rowsA ; i++) {
				resultdata[h][i] = matrixData[i][h];
			}
		}

		// Return result matrix data. 
		return resultdata;
	}

	// Get sub-matrix: Create duplicate of all matrix elements, except those in row x & column y.
	function getSubMatrixOf(matrixData,x,y) {
		// Initiate result. 
		let result = [];

		// Get data size. 
		let dataSize = matrixData.length;

		// Handle rows 0 to (x-1). 
		for(let h=0 ; h<x ; h++) {
			// Create new row. 
			result.push([]);
			// Handle columns 0 to (y-1). 
			for(let i=0 ; i<y ; i++) {
				// Create new entry. 
				result[h][i] = matrixData[h][i];
			}
			// Handle columns (y+1) to (n-1). 
			for(let i=y+1 ; i<dataSize ; i++) {
				// Create new entry. 
				result[h][i-1] = matrixData[h][i];
			}
		}
		// Handle rows (x+1) to (n-1). 
		for(let h=x+1 ; h<dataSize ; h++) {
			// Create new row. 
			result.push([]);
			// Handle columns 0 to (y-1). 
			for(let i=0 ; i<y ; i++) {
				// Create new entry. 
				result[h-1][i] = matrixData[h][i];
			}
			// Handle columns (y+1) to (n-1). 
			for(let i=y+1 ; i<dataSize ; i++) {
				// Create new entry. 
				result[h-1][i-1] = matrixData[h][i];
			}
		}

		// Return result. 
		// console.log('\nMinor('+x+','+y+') of',matrixData,result);
		// console.table(matrixData);
		// console.table(result);
		return result;
	}

	// Save result matrix to list. 
	function saveToResultMatrixList(matrixdata, matrixname, matrixdet) {

		// Create matrix object. 
		matrixObj = {
			name:matrixname,
			determinant:matrixdet,
			data:matrixdata
		}

		// Add to final list of matrix objects. 
		resultMatrices.push(matrixObj);
		console.log('\nSaving matrix data in this matrix object',matrixObj);
	}
}




// Get row count of matrix. 
function getRowCount(mdata) {
	// console.log('mdata',mdata);
	return mdata.length;
}

// Get column count of matrix. 
function getColCount(mdata) {
	// console.log('mdata',mdata);
	return mdata[0].length;
}




// Clear all result matrices. 
function clearResults() {
	// Clear result matrix list. 
	resultMatrices = [];

	// Update on page. 
	showResults();
}

// Show all result matrices in page output section. 
function showResults() {
	// Initiate result. 
	let result = '<h3>Results</h3>';

	// Add matrices to output. 
	for(let g=0 ; g<resultMatrices.length ; g++) {
		// Get matrix object. 
		let matrix = resultMatrices[g];

		// Get name of matrix. 
		let matrixname = matrix.name;

		// Get matrix data. 
		let matrixdata = matrix.data;

		// Get size of matrix. 
		let rowCount = getRowCount(matrixdata);
		let colCount = getColCount(matrixdata);

		// Get determinant of matrix. 
		// let det = matrix.determinant;
		// let det = getDeterminant(matrixdata);


		// Show matrix representation on page. 

		result += '<!-- matrix -->';
		result += '<div class="matrix">';
		result += '<h4>'+matrixname+'</h4>';

		// Add each row in matrix. 
		for(let h=0 ; h<rowCount ; h++) {
			result += '<!-- row -->';
			result += '<div class="row">';

			// Add each element in the row. 
			for(let i=0 ; i<colCount ; i++) {
				result += '<!-- entry -->';
				result += '<div class="entry">';
					result += '<!-- value -->';
					result += '<div class="value" id="r'+h+''+i+'">';

					// Get entry. 
					let entry = matrixdata[h][i];

					// Check if entry is a non-integer. 
					let entryHasFraction = !!(entry%1);

					// Attempt to show non-integer number as rational number. 
					if(entryHasFraction) {
						// Get greatest common factor between entry value and 1. 
						let gcf = euclidGCF( Math.abs(entry), 1 );
						// Show as rational number if sufficiently rational. 
						if(gcf > 1/100) 
							result += (entry/gcf)+'/'+(1/gcf);
						// Show as decimal otherwise. 
						else 
							result += (entry).toPrecision(5);
					}
					// Show integer number as is. 
					else {
						result += entry;
					}

					result += '</div>';
					result += '<!-- /value -->';
				// console.log(entry);
				result += '</div>';
				result += '<!-- /entry -->';
			}

			result += '</div>';
			result += '<!-- /row -->';
		}
		result += '</div>';
		result += '<!-- /matrix -->';

	}

	// Show matrix on page. 
	$('section#output').html(result).removeClass('gone');

	/*****/

	// Find greatest common factor (gcf) between two integers.
	function euclidGCF(a,b){
		console.log('a =',a);
		console.log('b =',b);

		// Initiate result. 
		var gcf;

		// Get numbers in proper order. 
		var c = Math.max(a,b);	// larger number
		var d = Math.min(a,b);	// smaller number
		console.log('c =',c);
		console.log('d =',d);

		var index = 0;
		while(true){
			index++;

			// console.log('Loop ' + index);

			// console.log('c =',c,'%',d,'=', c%d);
			c = c % d;
			if(c==0) {
				gcf = d;
				break;
			}
			// console.log('d =',d,'%',c,'=', d%c);
			d = d % c;
			if(d==0) {
				gcf = c;
				break;
			}
		}

		console.log('gcf('+a+','+b+') =', gcf);
		console.log( (a+':'+b),'=', (a/gcf)+':'+(b/gcf) );

		return gcf;
	}
}


// Save input matrices to memory. 
function saveMatrices() {
	// Get object versions of matrixA and matrixB from input fields. 
	let matrixDataA = createMatrixDataSet('a',true);
	let matrixDataB = createMatrixDataSet('b',true);

	// Get string versions of matrixA and matrixB. 
	let mdA = JSON.stringify(matrixDataA);
	let mdB = JSON.stringify(matrixDataB);

	// Save string versions of matrixA and matrixB into local storage. 
	localStorage.setItem('matrixDataA',mdA);
	localStorage.setItem('matrixDataB',mdB);

	// Notify user. 
	toast('Matrix data successfuly saved');
}

// Load input matrices from memory. 
function loadMatrices() {
	// Get string versions of matrixA and matrixB from local storage. 
	let mdA = localStorage.getItem('matrixDataA');
	let mdB = localStorage.getItem('matrixDataB');

	// Get object versions of matrixA and matrixB. 
	let matrixDataA = JSON.parse(mdA);
	let matrixDataB = JSON.parse(mdB);


	// TODO: Set appropriate size to data input field(s). 

	// 1. Change global variables. 
	// size = ;

	// 2. Update page reps of those variables. 
	// $('input#size').val(size);


	// Display entries of matrixA and matrixB in input fields. 
	let doneLoadingA = populateInputMatrixWithDataSet('a',matrixDataA);
	let doneLoadingB = populateInputMatrixWithDataSet('b',matrixDataB);

	// Notify user. 
	if(doneLoadingA && doneLoadingB) toast('Matrix data successfuly loaded');
	else toast('Error loading matrix data');

	/*****/

	// Populate matrix input fields with data from given source. 
	function populateInputMatrixWithDataSet(prefix,datasource) {
		// Assert valid data source by size. 
		if(datasource.length != size) {
			console.warn('input field size ',size,'x',size);
			console.warn('datasource size ',datasource.length,'x',datasource[0].length);
			console.error('Loading data set size incompatible');
			return;
		}

		// Initiate size parameters. 
		let rowCount = 0;
		let colCount = 0;
		if(prefix=='a') {
			rowCount = rowsA;
			colCount = colsA;
		}
		else if(prefix=='b') {
			rowCount = rowsB;
			colCount = colsB;
		}
		else {
			console.error('Matrix size(s) incompatible');
		}

		// Fill matrix input fields from given data source. 
		for(let h=0 ; h<rowCount ; h++) {
			for(let i=0 ; i<colCount ; i++) {
				let entry = datasource[h][i];
				if(entry==0) $('input#'+prefix+''+h+''+i).val('');
				else $('input#'+prefix+''+h+''+i).val(entry);
			}
		}

		return true;
	}
}

