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
		// Make changes to the year box. 
		// document.getElementById('loan_year0'+i).value = defaultYear++;
		// document.getElementById('loan_year0'+i).disabled = true;
		// document.getElementById('loan_year0'+i).style.backgroundColor = 'gray';
		// document.getElementById('loan_year0'+i).style.color = 'white';
		$('#loan_year0'+i).val( defaultYear++ ).prop('disabled', true).css('background-color','#aaa').css('color','white');	// jQuery equivalent of above 4 statements

		// Make changes to the loan amount box. 
		// document.getElementById('loan_amt0'+i).value = defaultLoanAmount.toFixed(2);
		$('#loan_amt0'+i).val( defaultLoanAmount.toFixed(2) );		// jQuery equivalent of above statement

		// Make changes to the interest box. 
		// document.getElementById('loan_int0'+i).value = defaultInterestRate;
		// document.getElementById('loan_int0'+i).disabled = true;
		// document.getElementById('loan_int0'+i).style.backgroundColor = 'gray';
		// document.getElementById('loan_int0'+i).style.color = 'white';
		$('#loan_int0'+i).val( defaultInterestRate ).prop('disabled', true).css('background-color','#aaa').css('color','white');	// jQuery equivalent of above 4 statements

		// Update the ending balance for the year. 
		loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
		// document.getElementById('loan_bal0'+i).innerHTML = toComma(loanWithInterest.toFixed(2));
		$('#loan_bal0'+i).html( toComma(loanWithInterest.toFixed(2)) );		// jQuery equivalent of above statement
	} // end: "for" loop

	// Select contents on focus (for all text input fields). 
	$('input[type=text]').focus(function() {
		$(this).select();
		$(this).css('background-color', '#fff6db');
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
} 
// end: function loadDoc()


// Format a given number value (with commas separating groups of 3 digits). 
function toComma(value) {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Update years in the loans array (whenever the text box loses focus). 
function updateLoanYears() {
	console.log( 'Now updating loan years:\n'+JSON.stringify(loans) );
	loans[0].loan_year = parseInt( $('#loan_year01').val() );
	for(var i=1 ; i<5 ; i++) {
		loans[i].loan_year = loans[0].loan_year + i;
		$('#loan_year0'+ (i+1) ).val(loans[i].loan_year);
	}
	console.log( 'Updated loan years:\n'+JSON.stringify(loans) );
}

// Update amounts in the loans array (whenever the text boxes loses focus). 
function updateLoanAmounts() {
	console.log( 'Now updating loan amounts:\n'+JSON.stringify(loans) );
	loans[0].loan_amount = parseInt( $('#loan_amt01').val() );
	loans[1].loan_amount = parseInt( $('#loan_amt02').val() );
	loans[2].loan_amount = parseInt( $('#loan_amt03').val() );
	loans[3].loan_amount = parseInt( $('#loan_amt04').val() );
	loans[4].loan_amount = parseInt( $('#loan_amt05').val() );
	console.log( 'Updated loan amounts:\n'+JSON.stringify(loans) );
}

// Load loan array from local storage. 
function loadLoanArray() {
	// Log the loading activity in the console. 
	console.log('Now loading loan array from memory...');

	// Retrieve stringified version of loans array from local storage. 
	var strLoanArray = localStorage.getItem('savedLoan');
	// Save actual loans array into global variable 'loans'. 
	loans = JSON.parse(strLoanArray);

	// Display the newly loaded data on the screen for the user to see. 
	refreshScreenData()

	// Log the loading activity in the console. 
	console.log('Loaded loan array from memory:\n'+strLoanArray);
	showLocalStorage();

	/*****/

	function refreshScreenData() {
		for (var i=0 ; i<loans.length ; i++) {
			$('#loan_year0'+(i+1)).val( loans[i].loan_year );
			$('#loan_amt0'+(i+1)).val( loans[i].loan_amount );
			$('#loan_int0'+(i+1)).val( loans[i].loan_int_rate );
			$('#loan_bal0'+(i+1)).html(  );
		}
	}
}

// Take the user input, and use it to populate the payments table. 
function processForm() {
	// 
}

// Save loan array to local storage. 
function saveLoanArray() {
	// Log the saving activity in the console. 
	console.log('Now saving loan array to memory...');

	// Create stringified version of loans array from global variable 'loans'. 
	var strLoanArray = JSON.stringify(loans);
	// Save stringified version of loans array into local storage. 
	localStorage.setItem('savedLoan',strLoanArray);

	// Log the saving activity in the console. 
	console.log('Saved loan array to memory:\n'+strLoanArray);
	showLocalStorage();
}

/*****/

function showLocalStorage() {
	var str = '';
	str += 'localStorage['+localStorage.length+' item(s)]';
	for(let i=0 ; i<localStorage.length ; i++) {
		var dataItem = localStorage.key(i);
		str += '\nlocalStorage['+i+']: '+dataItem;
	}
	console.log(str);
}
