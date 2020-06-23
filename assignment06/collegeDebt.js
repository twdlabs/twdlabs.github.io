// --- global variables ---
var loans = [
	{ loan_year:2020, loan_amount:10000.00, loan_int_rate:0.0453 },
	{ loan_year:2021, loan_amount:10000.00, loan_int_rate:0.0453 },
	{ loan_year:2022, loan_amount:10000.00, loan_int_rate:0.0453 },
	{ loan_year:2023, loan_amount:10000.00, loan_int_rate:0.0453 },
	{ loan_year:2024, loan_amount:10000.00, loan_int_rate:0.0453 }
]; 


// --- function: loadDoc() ---
function loadDoc() {

	// Pre-fill default values for the first loan year. 

	var defaultYear = loans[0].loan_year;
	var defaultLoanAmount = loans[0].loan_amount;
	var defaultInterestRate = loans[0].loan_int_rate;
	var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);

	// document.getElementById('loan_year0'+1).value = defaultYear++;
	// document.getElementById('loan_amt0'+1).value = defaultLoanAmount.toFixed(2);
	// document.getElementById('loan_int0'+1).value = defaultInterestRate;
	// document.getElementById('loan_bal0'+1).innerHTML = toComma(loanWithInterest.toFixed(2));
	$('#loan_year0'+1).val( defaultYear++ );
	$('#loan_amt0'+1).val( defaultLoanAmount.toFixed(2) );
	$('#loan_int0'+1).val( defaultInterestRate );
	$('#loan_bal0'+1).html( toComma(loanWithInterest.toFixed(2)) );


	// Pre-fill default values for the remaining loan years. 
	for(var i=2 ; i<=5 ; i++) {
		// document.getElementById('loan_year0'+i).value = defaultYear++;
		// document.getElementById('loan_year0'+i).disabled = true;
		// document.getElementById('loan_year0'+i).style.backgroundColor = 'gray';
		// document.getElementById('loan_year0'+i).style.color = 'white';
		// Make changes to the year box. (jQuery equivalent of above 4 statements)
		$('#loan_year0'+i).val( defaultYear++ )
						  .prop('disabled', true)
						  .css('background-color','#999')
						  .css('color','white');

		// document.getElementById('loan_amt0'+i).value = defaultLoanAmount.toFixed(2);
		// Make changes to the loan amount box. (jQuery equivalent of above statement)
		$('#loan_amt0'+i).val( defaultLoanAmount.toFixed(2) );

		// document.getElementById('loan_int0'+i).value = defaultInterestRate;
		// document.getElementById('loan_int0'+i).disabled = true;
		// document.getElementById('loan_int0'+i).style.backgroundColor = 'gray';
		// document.getElementById('loan_int0'+i).style.color = 'white';
		// Make changes to the interest box. (jQuery equivalent of above 4 statements)
		$('#loan_int0'+i).val( defaultInterestRate )
						 .prop('disabled', true)
						 .css('background-color','#999')
						 .css('color','white');

		// Calculate the ending balance for the year. 
		loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);

		// document.getElementById('loan_bal0'+i).innerHTML = toComma(loanWithInterest.toFixed(2));
		// Update the ending balance for the year. (jQuery equivalent of above statement)
		$('#loan_bal0'+i).html( toComma(loanWithInterest.toFixed(2)) );
	} // end: "for" loop

	// Select contents on focus (for all text input fields). 
	$('input[type=text]').focus(function() {
		$(this).select();
		$(this).css('background-color', '#fe7');
	}); 
	$('input[type=text]').blur(function() {
		$(this).css('background-color', 'white');
	});

	// set focus to first year: messes up codepen
	// $('#loan_year01').focus();

	// Run this function whenever the year text box loses focus. 
	$('#loan_year01').blur( function() {
		updateLoanYears();
	});

	// Run this function whenever the loan amount text boxes loses focus. 
	$('#loan_amt01, #loan_amt02, #loan_amt03, #loan_amt04, #loan_amt05').blur( function(){ updateLoanAmounts(); } );

	// Run this function whenever the loan interest rate boxes lose focus. 
	$('#loan_int01').blur( function(){ updateLoanInterestRates(); } );

	// Run this function whenever the loan interest rate boxes lose focus. 
	$('input[type=text]').change( function(){ validateInput(); } );
} 
// end: function loadDoc()


// Validate user input using regular expressions. 
function validateInput() {
	// Log the validation activity in the console. 
	console.log( 'Now validating user input...' );

	var pattern = /abcd/;

	// Log the validation activity in the console. 
	console.log( 'Validated user input' );
}


// Format a given number value (with commas separating groups of 3 digits). 
function toComma(value) {
	return value.toString().replace( /\B(?=(\d{3})+(?!\d))/g , "," );
}

// Update loan years in the loans array (whenever the text box loses focus). 
function updateLoanYears() {
	// Log the updating activity in the console. 
	console.log( 'Now updating loan years:\n'+JSON.stringify(loans) );

	// Update the loan interest rates in array. 
	loans[0].loan_year = parseInt( $('#loan_year01').val() );
	for(var i=1 ; i<5 ; i++) {
		// Update in array. 
		loans[i].loan_year = loans[0].loan_year + i;
		// Update on screen. 
		$('#loan_year0'+ (i+1) ).val(loans[i].loan_year);
	}

	// Log the updating activity in the console. 
	console.log( 'Updated loan years:\n'+JSON.stringify(loans) );

	// Display the newly updated data on the screen for the user to see. 
	refreshScreenData()
}

// Update loan amounts in the loans array (whenever the text boxes loses focus). 
function updateLoanAmounts() {
	// Log the updating activity in the console. 
	console.log( 'Now updating loan amounts:\n'+JSON.stringify(loans) );

	// Update the loan amounts in array. 
	for (var i=0 ; i<loans.length ; i++) {
		loans[i].loan_amount = parseInt(  $( '#loan_amt0'+(i+1) ).val()  );
	}

	// Log the updating activity in the console. 
	console.log( 'Updated loan amounts:\n'+JSON.stringify(loans) );

	// Display the newly updated data on the screen for the user to see. 
	refreshScreenData()
}

// Update loan interest rates in the loans array (whenever the text boxes loses focus). 
function updateLoanInterestRates() {
	// Log the updating activity in the console. 
	console.log( 'Now updating loan interest rates:\n'+JSON.stringify(loans) );

	// Update the loan interest rates in array. 
	for (var i=0 ; i<loans.length ; i++) {
		// Update in array. 
		loans[i].loan_int_rate = Number.parseFloat(  $('#loan_int01').val()  );
		// Update on screen. 
		$('#loan_int0'+ (i+1) ).val(loans[i].loan_int_rate);
		console.log('int_rate0'+i+' updated')
	}

	// Log the updating activity in the console. 
	console.log( 'Updated loan interest rates:\n'+JSON.stringify(loans) );

	// Display the newly updated data on the screen for the user to see. 
	refreshScreenData()
}

// Refresh the loan data on the screen with the loan data in the array. 
function refreshScreenData() {
	var loanBalance = 0;
	// For every year of the loan, ...
	for (var i=0 ; i<loans.length ; i++) {
		// Update loan year. 
		$('#loan_year0'+(i+1)).val( loans[i].loan_year );
		// Update loan amount. 
		$('#loan_amt0'+(i+1)).val( loans[i].loan_amount );
		// Update loan interest rate. 
		$('#loan_int0'+(i+1)).val( loans[i].loan_int_rate );
		// Calculate year-end loan balance. 
		loanBalance += 1*loans[i].loan_amount * (1 + 1*loans[i].loan_int_rate);
		// Update year-end loan balance. 
		$('#loan_bal0'+(i+1)).html( toComma(loanBalance.toFixed(2)) );
	}
}

// Load loan array from local storage. 
function loadLoanData() {
	// Display the contents of localStorage. 
	showLocalStorage();

	// Log the loading activity in the console. 
	console.log('Now loading loan array from localStorage...');

	// Retrieve stringified version of loans array from local storage. 
	var strLoanInfo = localStorage.getItem('savedLoanInfo');
	// Save actual loans array into global variable 'loans'. 
	loans = JSON.parse(strLoanInfo);

	// Display the newly loaded data on the screen for the user to see. 
	refreshScreenData()

	// Log the loading activity in the console. 
	console.log('Loaded loan array from localStorage:\n'+strLoanInfo);
}

// Take the user input, and use it to populate the payments table. 
function processForm() {
	var principalAmount = 0;
	for (var i=0 ; i<loans.length ; i++) {
		principalAmount += loans[i].loan_amount;
		principalAmount *= (1 + loans[i].loan_int_rate);
	}

	var paymentAmount = principalAmount;
}

// Save loan array to local storage. 
function saveLoanData() {
	// Log the saving activity in the console. 
	console.log('Now saving loan array to localStorage...');

	// Create stringified version of loans array from global variable 'loans'. 
	var strLoanInfo = JSON.stringify(loans);
	// Save stringified version of loans array into local storage. 
	localStorage.setItem('savedLoanInfo',strLoanInfo);

	// Log the saving activity in the console. 
	console.log('Saved loan array to localStorage:\n'+strLoanInfo);

	// Display the contents of localStorage. 
	showLocalStorage();
}

/*****/

// Display the contents of localStorage in the console. 
function showLocalStorage() {
	var str = '';
	str += 'localStorage['+localStorage.length+' item(s)]';
	for(let i=0 ; i<localStorage.length ; i++) {
		var dataItem = localStorage.key(i);
		str += '\nlocalStorage['+i+']: '+dataItem;
	}
	console.log(str);
}
