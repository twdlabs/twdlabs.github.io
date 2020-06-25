
// --- Global Variables --- //
var loans = [
	{ loan_year:2020, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2021, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2022, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2023, loan_amount:10000, loan_int_rate:0.0453 },
	{ loan_year:2024, loan_amount:10000, loan_int_rate:0.0453 }
]; 


// --- function: loadDoc() --- //
function loadDoc() {

	// Calculate amounts 
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
	$('input[type=text]').blur( function(){ updateLoanData(); });

	// Run this function whenever the year text box loses focus. 
	// $('#loan_year01').blur( function(){ updateLoanYears(); });
	// Run this function whenever the loan amount text boxes loses focus. 
	// $('#loan_amt01, #loan_amt02, #loan_amt03, #loan_amt04, #loan_amt05').blur( function(){ updateLoanAmounts(); } );
	// Run this function whenever the loan interest rate boxes lose focus. 
	// $('#loan_int01').blur( function(){ updateLoanInterestRates(); } );

	// Run this function whenever the loan interest rate boxes lose focus. 
	$('input[type=text]').change( function(){ validateInput(); } );
} 
// end: function loadDoc()




// Format a given number value (with commas separating groups of 3 digits). 
function toCommas(value) {
	return value.toString().replace( /\B(?=(\d{3})+(?!\d))/g , "," );
}

// Format a given number value (with commas separating groups of 3 digits). 
function toMoney(value) {
	return `\$${toComma(value.toFixed(2))}`;
}





// Update the loans array (whenever the text box loses focus). 
function updateLoanData() {

	// Update the loan array (years, amounts, interest rates). 
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

	// Display the newly updated data on the screen for the user to see. 
	updateForm();
}





// Validate user input using regular expressions. 
function validateInput() {
	var pattern = /^abcd$/;

	// Log the validation activity in the console. 
	console.log( 'Validated user input' );
}

// Refresh the loan data on the screen (using the loan data in the array). 
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




// TODO: Take the user input, and use it to populate the payments table. 
function processForm() {
	var principalAmount = 0;
	for (var i=0 ; i<loans.length ; i++) {
		principalAmount += loans[i].loan_amount;
		principalAmount *= (1 + loans[i].loan_int_rate);
	}

	var paymentAmount = principalAmount;
}

// Load loan array from local storage. 
function loadForm() {
	// Display the contents of localStorage. 
	showLocalStorage();

	// Retrieve stringified version of loans array from local storage. 
	var strLoanInfo = localStorage.getItem('savedLoanInfo');
	// Save actual loans array into global variable 'loans'. 
	loans = JSON.parse(strLoanInfo);

	// Display the newly loaded data on the screen for the user to see. 
	updateForm()

	// Log the loading activity in the console. 
	console.log('Loaded loan array from localStorage:\n'+strLoanInfo);
}

// Save loan array to local storage. 
function saveForm() {
	// Create stringified version of loans array from global variable 'loans'. 
	var strLoanInfo = JSON.stringify(loans);
	// Save stringified version of loans array into local storage. 
	localStorage.setItem('savedLoanInfo',strLoanInfo);

	// Log the saving activity in the console. 
	console.log('Saved loan array to localStorage:\n'+strLoanInfo);

	// Display the contents of localStorage. 
	showLocalStorage();
}

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


