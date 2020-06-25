
// --- Global Variables --- //
var loans = [
	{ loan_year:2020, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2021, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2022, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2023, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2024, loan_amount:10000, loan_int_rate:0.0453 }
];




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
	var valid = true;									// Valid by default until regex detects mismatch. 
	var regexYr = /^(19|20)\d{2}$/;						// Enforces: 4 numerical digits staring with 19 or 20
	var regexAmt = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;	// Enforces: ?
	var regexInt = /^(0|)+(.[0-9]{1,5})?$/;				// Enforces: ?

	// Proceed if user-enetered data is valid. 
	if(valid) {
		// Update the loan data in array (years, amounts, interest rates). 
		for(var i=0 ; i<loans.length ; i++) {
			// Save year in array. 
			if(i==0) loans[i].loan_year = parseInt( $('#loan_year01').val() );
			else loans[i].loan_year = loans[0].loan_year + i;

			// Save loan amount in array. 
			loans[i].loan_amount = parseInt(  $( '#loan_amt0'+(i+1) ).val()  );

			// Save interest rate in array. 
			loans[i].loan_int_rate = Number.parseFloat(  $('#loan_int01').val()  );
		}

		// Log the updating activity in the console. 
		console.log( 'Updated loan data:\n'+JSON.stringify(loans) );

		// Display updated loans data on the form. 
		updateForm();
	}
}





// Display updated loans data on the form (using loan data in array). 
function updateForm() {
	// Enforces rule: four numerical digits starting with 19 or 20.
	var yearP = /^(19|20)\d{2}$/;
	var amtP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
	var intP = /^$/;

	if( yearP.test( $().val() ) );

	var loanBalance = 0;
	// For every year of the loan, ...
	for (var i=0 ; i<loans.length ; i++) {
		// Update loan year. 
		$('#loan_year0'+(i+1)).val( loans[i].loan_year );
		// Update loan amount. 
		$('#loan_amt0'+(i+1)).val( loans[i].loan_amount.toFixed(2) );
		// Update loan interest rate. 
		$('#loan_int0'+(i+1)).val( loans[i].loan_int_rate );
		// Calculate year-end loan balance. 
		loanBalance += 1*loans[i].loan_amount * (1 + 1*loans[i].loan_int_rate);
		// Update year-end loan balance. 
		$('#loan_bal0'+(i+1)).html( toCommas(loanBalance.toFixed(2)) );
	}
}




/***********/
// ANGULAR //
/***********/

// var app = angular.module('myApp',[]);

// app.controller('myCtrl', function($scope){
// 	$scope.payments = [];
// 	$scope.populate = function() {
// 		updateForm();
// 		let total = ;

// 		let pay = 12 * (total / ((( ))) )
// 	}
// } );




// TODO: Take the user input, and use it to populate the payments table. 
function processForm() {
	var principalAmount = 0;
	for (var i=0 ; i<loans.length ; i++) {
		principalAmount += loans[i].loan_amount;
		principalAmount *= (1 + loans[i].loan_int_rate);
	}

	var paymentAmount = principalAmount;
}


