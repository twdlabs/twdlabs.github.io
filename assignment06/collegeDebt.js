
// --- Global Variables --- //

var loans = [
	{ loan_year:2020, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2021, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2022, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2023, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2024, loan_amount:10000, loan_int_rate:0.0453 }
];


var loanBalance;
var paymentData;

// Format a given number value (with commas separating groups of 3 digits). 
function toCommas(value) {
	return value.toString().replace( /\B(?=(\d{3})+(?!\d))/g , "," );
}

// Format a given number value (with commas separating groups of 3 digits). 
function toMoney(value) {
	return `\$${ toComma(value.toFixed(2)) }`;
}


// Save loan array to local storage. 
function saveForm() {
	// Save stringified version of loans array into local storage. 
	localStorage.setItem('savedLoan', JSON.stringify(loans) );

	// Log the saving activity in the console. 
	console.log('Saved loans array to localStorage');

	// Display the contents of localStorage. 
	showLocalStorage();
}

// Load loan array from local storage. 
function loadForm() {
	// Display the contents of localStorage. 
	showLocalStorage();

	// Get loans array from local storage and display the new data on screen. 
	if(localStorage.getItem('savedLoan')) {
		loans = JSON.parse( localStorage.getItem('savedLoan') );
		updateForm();
	}
	// Let the user know if the item is not found in local storage.
	else {
		alert('Error: There is no saved data to load.');
	}
	
	// Log the loading activity in the console. 
	console.log('Loaded loans array from localStorage');
}

// Display the contents of localStorage in the console. 
function showLocalStorage() {
	var str = '';
	str += 'localStorage ['+localStorage.length+' item(s)]';
	for(let i=0 ; i<localStorage.length ; i++) {
		var dataItem = localStorage.key(i);
		str += '\nlocalStorage['+i+']: '+dataItem;
	}
	console.log(str);
}





// --- function: loadDoc() --- //
function loadDoc() {

	// Get amounts for first loan year. 
	var defaultYear = loans[0].loan_year;
	var defaultLoanAmount = loans[0].loan_amount;
	var defaultInterestRate = loans[0].loan_int_rate;
	var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
	// document.getElementById('loan_year0'+1).value = defaultYear++;
	// document.getElementById('loan_amt0'+1).value = defaultLoanAmount.toFixed(2);
	// document.getElementById('loan_int0'+1).value = defaultInterestRate;
	// document.getElementById('loan_bal0'+1).innerHTML = toCommas(loanWithInterest.toFixed(2));
	// Pre-fill default values for the first loan year. (jQuery equivalent of above 4 statements)
	$('#loan_year0'+1).val( defaultYear++ );
	$('#loan_amt0'+1).val( defaultLoanAmount.toFixed(2) );
	$('#loan_int0'+1).val( defaultInterestRate );
	$('#loan_bal0'+1).html( toCommas(loanWithInterest.toFixed(2)) );


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

		// document.getElementById('loan_bal0'+i).innerHTML = toCommas(loanWithInterest.toFixed(2));
		// Update the ending balance for the year. (jQuery equivalent of above statement)
		$('#loan_bal0'+i).html( toCommas(loanWithInterest.toFixed(2)) );
	} // end: "for" loop

	// Select contents and highlight box when text input has focus. 
	$('input[type=text]').focus(function() {
		$(this).select();
		$(this).css('background-color', '#fe7');
	}); 
	// Update loan data when text input loses focus. 
	$('input[type=text]').blur(function() {
		$(this).css('background-color', 'white');
		updateLoansArray();
	});

	// set focus to first year: messes up codepen
	// $('#loan_year01').focus();
} 
// end: function loadDoc()







// Update the loans data with user-entered values. 
function updateLoansArray() {
	// Validate user input using regular expressions. RegEx Tester: https://www.regexpal.com/
	var valid = true;										// Valid by default until regex detects mismatch. 
	var regexYear = /^(19|20)\d{2}$/;						// Enforces rule: Four numerical digits staring with 19 or 20
	var regexLoanAmt = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;	// Enforces rule: ?
	var regexIntRate = /^(0|)+(.[0-9]{1,5})?$/;				// Enforces rule: Start with '0.' or '.', followed by 1-5 digits

	// Prevent update and turn red if user-entered year doesn't match regex. 
	if( !regexYear.test( $(`#loan_year01`).val() ) ) {
		$('#loan_year01').css('background-color','#f33');
		valid = false;
	}

	// Prevent update and turn red if user-entered loan amount doesn't match regex. 
	for (var i=0 ; i<loans.length ; i++) {
		if( !regexLoanAmt.test( $(`#loan_amt0${i+1}`).val() ) ) {
			$(`#loan_amt0${i}`).css('background-color','#f33');
			valid = false;
		}
	}

	// Prevent update and turn red if user-entered interest rate doesn't match regex. 
	if( !regexIntRate.test( $(`#loan_int01`).val() ) ) {
		$('#loan_int01').css('background-color','#f33');
		valid = false;
	}

	// Proceed if user-enetered data is valid. 
	if(valid) {

		// Save first loan year in array
		loans[0].loan_year = parseInt( $('#loan_year01').val() );

		// Get interest rate from firs year. 
		let intRate = parseFloat( $('#loan_int01').val() );

		// Update loan data in array (years, amounts, interest rates). 
		for(var i=0 ; i<loans.length ; i++) {
			// Save year in array. 
			loans[i].loan_year = loans[0].loan_year + i;

			// Save loan amount in array. 
			loans[i].loan_amount = parseFloat( $(`#loan_amt0${i+1}`).val() ).toFixed(2);

			// Save interest rate in array. 
			loans[i].loan_int_rate = intRate;
		}

		// Log the updating activity in the console. 
		console.log( 'Updated loan data in array.' );

		// Display updated loans data on the form. 
		updateForm();

		// Log the updating activity in the console. 
		console.log( 'Updated loan data on form.' );
	}
}





// Display updated data on the form (using loan data in array). 
function updateForm() {
	var loanPrincipal = 0;
	loanBalance = 0;

	// For every year of the loan, ...
	for (var i=0 ; i<loans.length ; i++) {
		// Update loan year. 
		$(`#loan_year0${i+1}`).val( loans[i].loan_year );

		// Update new loan amount. 
		let newLoan = parseFloat( loans[i].loan_amount );
		$(`#loan_amt0${i+1}`).val( newLoan );
		loanPrincipal += newLoan;

		// Update loan interest rate. 
		let rate = parseFloat( loans[i].loan_int_rate );
		$(`#loan_int0${i+1}`).val( rate );

		// Update year-end loan balance. 
		loanBalance = (loanBalance + newLoan) * (1 + rate);
		$(`#loan_bal0${i+1}`).text( toMoney(loanBalance.toFixed(2)) );
	}

	// Display the total amount of interest accrued while in school. 
	$(`#loan_int_accrued`).text( toMoney(loanBalance - loanPrincipal) );
}




/***********/
// ANGULAR //
/***********/

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	$scope.payments = [];

	$scope.populate = function() {
		// Update the form prior to calculating payments. 
		updateForm();

		// Get principal amount (loan balance at start of payment period). 
		let currentBalance = loanBalance;

		// Get annual interest rate. 
		let intRate = loans[0].loan_int_rate;

		// Get monthly iterest rate. 
		let r = intRate / 12;

		// Set number of years for payment phase
		let n = 11;

		// Loan Payment Formula (https://www.thebalance.com/loan-payment-calculations-315564)
		let paymentAmount = currentBalance * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
		// A = P * i * Math.pow(1+i,n) / ( Math.pow(1+i,n) - 1 )

		for (let i=0 ; i<n-1 ; i++) {
			currentBalance -= paymentAmount;
			let intAmount = currentBalance * intRate;
			$scope.payments[i] = {
				'year': (loans[loans.length-1].loan_year + 1 + i),
				'payment': toMoney(paymentAmount),
				'intAmount': toMoney(intAmount),
				'ye': toMoney(currentBalance += intAmount)
			}
		}

		$scope.payments[10] = {
			'year': (loans[loans.length-1].loan_year + n),
			'payment': toMoney(currentBalance),
			'intAmount': toMoney(0),
			'ye': toMoney(0)
		}

		paymentData = $scope.payments;
	}

} );




// TODO: Take the user input, and use it to populate the payments table. 
// function processForm() {
// 	var currentBalance = 0;
// 	for (var i=0 ; i<loans.length ; i++) {
// 		currentBalance += loans[i].loan_amount;
// 		currentBalance *= (1 + loans[i].loan_int_rate);
// 	}

// 	var paymentAmount = currentBalance;
// }


