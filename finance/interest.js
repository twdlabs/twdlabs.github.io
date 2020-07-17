
/* Compound Interest Calculator
Inputs: principal amount, annual rate of return, periodic contribution, # compounding periods per year
Output: accumulated amounts for each period
*/



function toggleAddition() {
	var checked = document.getElementById('addPeriodically').checked;

	if(checked) {
		// document.getElementById('cTable').style.display = "block";
		$('#cTable').slideDown();
	}
	else {
		// document.getElementById('cTable').style.display = "none";
		$('#cTable').slideUp();
	}
}
function toggleAdditionDelay() {
	var checked = document.getElementById('additionHoldup').checked;

	if(checked) {
		$('#additionHoldupTime').removeAttr('disabled').css('opacity',1);
	}
	else {
		$('#additionHoldupTime').attr('disabled','').css('opacity',.5);
	}
}

// This section is commented out of the HTML code. 
function toggleTaxSection() {
	var checked = document.getElementById('includeTax').checked;

	// Show the tax section whenever the checkbox is checked. It's hidden otherwise.
	if(checked) {
		document.getElementById('taxSection').style.display = "block";
		$('#taxSection').slideDown();
	}
	else {
		document.getElementById('taxSection').style.display = "none";
		$('#taxSection').slideUp();
	}
}

// Change numbers to maintain the same total yearly contribution amount.
// [x]oldFreq [x]newFreq [x]oldAmouunt [x]newAmount
function updateContribution(updateAmount){
	var newFreq = $('#additionFreq').val();
	var freqBox = $('#currentFreq');

	var oldFreq = 1*(freqBox.html());
	freqBox.html(newFreq);

	var rowOpen = "<div class='row'>";
	var colFull = "<div class='col-12'>";
	var colHalf = "<div class='col-6'>";
	var colLeft = "<div class='col-4' style='text-align:left;'>";
	var colRight = "<div class='col-8' style='text-align:right;'>";
	var divClose = "</div>";

	if(updateAmount && newFreq!=0){
		var oldAmount = 1*document.getElementById('addAmount').value;
		var newAmount = oldAmount * oldFreq / newFreq;
		document.getElementById('addAmount').value = newAmount;

		var msg = "";
		// msg += rowOpen + colFull+"Contribution Changed"+divClose + divClose;
		msg += rowOpen + colFull+oldFreq + "x/yr"+divClose + colFull+newFreq + "x/yr"+divClose + divClose;
		msg += rowOpen + colHalf+dollar(oldAmount)+divClose + colHalf+dollar(newAmount)+divClose + divClose;
		// msg += rowOpen + colLeft+"Amount: "+divClose + colRight+dollar(oldAmount)+" to "+dollar(newAmount)+divClose + divClose;
		// msg += rowOpen + colLeft+"Frequency: "+divClose + colRight+ oldFreq + "x/yr to " + newFreq + "x/yr"+divClose + divClose;
		showToast(msg);
	}
}



function onClear() {
	// Clear all the user input fields.

	document.getElementById('principal').value="";
	document.getElementById('time').value="";
	document.getElementById('apy').value="";
	document.getElementById('fee').value="";
	document.getElementById('compoundFreq').value = 0;

	document.getElementById('addPeriodically').checked = false; toggleAddition();
	document.getElementById('addAmount').value="";
	document.getElementById('additionFreq').value = 0;
	document.getElementById('additionHoldupTime').value="";
	updateContribution(0,false);

	// Hide output & output table. 
	document.getElementById('outputBox').style.display="none";
	document.getElementById('toggleTable').checked = false;
	document.getElementById('outputTableWrapperX').style.display = "none";
	document.getElementById('outputTableWrapper').style.display = "none";
}

function setDefault() {
	// Set all the user input fields to their default values.
	document.getElementById('principal').value = document.getElementById('principal').placeholder;
	document.getElementById('time').value = document.getElementById('time').placeholder;
	document.getElementById('apy').value = document.getElementById('apy').placeholder;
	document.getElementById('fee').value = document.getElementById('fee').placeholder;
	document.getElementById('compoundFreq').value = 1;

	// document.getElementById('addPeriodically').checked = true; toggleAddition();
	document.getElementById('addAmount').value = document.getElementById('addAmount').placeholder;
	document.getElementById('additionFreq').value = 1;
	document.getElementById('additionHoldupTime').value = document.getElementById('additionHoldupTime').placeholder;
	updateContribution(1,false);
}

function onSubmit() {

	var amountInvested = 0;
	var periodName = "Period", pdName = "pd", pName = "P";

	// Save the general user input values.
	var compoundsPerYr = 1 * document.getElementById('compoundFreq').value;
	var numPeriods = compoundsPerYr * document.getElementById('time').value;
	var principal = 1 * document.getElementById('principal').value;
	var ppy = (.01 * document.getElementById('apy').value / compoundsPerYr);
	var fee = (.01 * document.getElementById('fee').value / compoundsPerYr);
	// Save the user input values for periodic additions.
	var addPeriodicallyGo = document.getElementById('addPeriodically').checked;
	var additionFreq = 1 * document.getElementById('additionFreq').value;
	var additionHoldupPeriods = compoundsPerYr * document.getElementById('additionHoldupTime').value;
	var addAmount = (additionFreq / compoundsPerYr) * document.getElementById('addAmount').value;

	// Create a brand new output table for the new data.
	var outputTable = newTable();
	var outputTableX = newTableX();
	var allRows = "",row = "", rowX;
	var rowLabel;

	// Initialize the table values. 
	var begin = 0, earn = 0, expense = 0, add = 0, end = 0;
	var partialPeriod = numPeriods % 1;	// Extract the decimal portion from the number by finding the remainder after dividing by 1. 
	var lastIndex = -1;

	periodName = periodNameOf(compoundsPerYr); pdName = pdNameOf(compoundsPerYr); pName = pNameOf(compoundsPerYr);
	document.getElementById('period').innerHTML = periodName;

	// Calculate the future value (including fee) during each period. 
	for( var i=0 ; i<=numPeriods ; i++ ) {
		// Calculate values for the given period.
		begin = end;
		earn = begin * ppy;
		expense = begin * fee;
		if (i==0)	add = principal;
		else if(addPeriodicallyGo && i>additionHoldupPeriods) add = addAmount; // There is some work to be done here in this area. 
		else		add = 0;
		end = 1*begin + 1*earn - 1*expense + 1*add;

		// Increment counter for the amount of money invested. 
		amountInvested += add;

		// sub-annual compounding period
		if(compoundsPerYr>1) {
			if(i==0) rowLabel = "Initial";
			else rowLabel = "Y" + (1+Math.floor((i-1)/compoundsPerYr))+" "+pName+(1+(i-1)%compoundsPerYr);
		}
		// annual compounding period
		else if(compoundsPerYr==1){
			if(i==0) rowLabel = "Initial";
			else rowLabel = i;
		}
		// multi-annual compounding period
		else {
			if(i==0) rowLabel = "Initial";
			else rowLabel = i+" (" + (i/compoundsPerYr).toFixed(0)+" yrs)";
		}

		// Create row and fill the row with new data.
		rowX = outputTableX.insertRow(-1);
		rowX.insertCell().innerHTML = rowLabel;
		rowX.insertCell().innerHTML = dollar(begin);
		rowX.insertCell().innerHTML = dollar(earn);
		rowX.insertCell().innerHTML = dollar(expense);
		rowX.insertCell().innerHTML = dollar(add);
		rowX.insertCell().innerHTML = dollar(end);

		// Create row and fill the row with new data.
		row = "";
		row += "<div class='row'>";
		row += "<div class='col-2 col-sm-2'>" + "<div>" + rowLabel + "</div>" + "</div>";
		row += "<div class='col-5 col-sm-2'>" + "<div>" + dollar(begin) + "</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div>" + dollar(earn) + "</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div>" + dollar(expense) + "</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div>" + dollar(add) + "</div>" + "</div>";
		row += "<div class='col-5 col-sm-2'>" + "<div>" + dollar(end) + "</div>" + "</div>";
		row += "</div>";
		allRows += row;

		if(partialPeriod) lastIndex = i;
	}

	// For compunding periods greater than 1 year, there may be a few extra years left over after the last full compounding period is finished. 
	if(partialPeriod){
		// Calculate values for the given period. 
		begin = end;
		earn = begin * ppy * partialPeriod;
		expense = begin * fee * partialPeriod;
		if(addPeriodicallyGo && i>additionHoldupPeriods) add = addAmount * partialPeriod; // There is some work to be done here in this area. 
		else                add = 0;
		end = 1*begin + 1*earn - 1*expense + 1*add;

		// Increment counter for the amount of money invested. 
		amountInvested += add;

		// sub-annual compounding period
		rowLabel = (1*lastIndex+1)+"* ("+((lastIndex+partialPeriod)/compoundsPerYr).toFixed(0)+" yrs)";

		// Create row and fill the row with new data.
		rowX = outputTableX.insertRow(-1);
		rowX.insertCell().innerHTML = rowLabel;
		rowX.insertCell().innerHTML = dollar(begin);
		rowX.insertCell().innerHTML = dollar(earn);
		rowX.insertCell().innerHTML = dollar(expense);
		rowX.insertCell().innerHTML = dollar(add);
		rowX.insertCell().innerHTML = dollar(end);

		// Create row and fill the row with new data.
		row = "";
		row += "<div class='row'>";
		row += "<div class='col-2 col-sm-2'>" + "<div>" + rowLabel + "</div>" + "</div>";
		row += "<div class='col-5 col-sm-2'>" + "<div>" + dollar(begin) + "</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div>" + dollar(earn) + "</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div>" + dollar(expense) + "</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div>" + dollar(add) + "</div>" + "</div>";
		row += "<div class='col-5 col-sm-2'>" + "<div>" + dollar(end) + "</div>" + "</div>";
		row += "</div>";
		allRows += row;
	}

	outputTable.innerHTML += allRows;

	var finalAmount = end;

	// Calculate future value (excluding fee).
	for( var i=0 ; i<=numPeriods ; i++ ) {
		if (i==0) {
			begin = 0;
			earn = 0;
			expense = 0;
			add = principal;
		}
		else {
			begin = end;
			earn = begin * ppy;
			expense = begin * fee;
			if(addPeriodicallyGo && i>additionHoldupPeriods) add = addAmount; // There is some work to be done in this area. 
			else add = 0;
		}
		end = 1*begin + 1*earn - 0*expense + 1*add;
	}
	var finalAmountWithoutFee = end;

	var feeDifference = finalAmountWithoutFee - finalAmount;


	var rowOpen = "<div class='row'>";
	var colFull = "<div class='col-12'>";
	var colHalf = "<div class='col-6'>";
	var colLeft = "<div class='col-7' style='text-align:left;'>";
	var colRight = "<div class='col-5' style='text-align:right;'>";
	var divClose = "</div>";
	var msg = "";
	msg += rowOpen + colLeft+"Principal: "+divClose + colRight+dollar(principal)+divClose + divClose;
	msg += rowOpen + colLeft+"Periods: "+divClose + colRight+numPeriods+divClose + divClose;
	msg += rowOpen + colLeft+periodName+"ly Growth: "+divClose + colRight+(ppy*100.0).toFixed(2) + '%'+divClose + divClose;
	msg += rowOpen + colLeft+"Fee: "+divClose + colRight+(fee*100.0).toFixed(2) + '%'+divClose + divClose;
	msg += rowOpen + colLeft+"Addition: "+divClose + colRight+dollar(addAmount) + "/" + pdName.toLowerCase()+divClose + divClose;
	longToast(msg);

	// Display the final result.
	document.getElementById('outputPV').innerHTML = dollar(amountInvested);
	document.getElementById('outputFV').innerHTML = dollar(finalAmount);
	document.getElementById('outputFFFV').innerHTML = dollar(finalAmountWithoutFee);
	document.getElementById('outputDeltaFV').innerHTML = '' + dollar(feeDifference) + " ("+(100.0*feeDifference/finalAmountWithoutFee).toFixed(1)+"%)";
	document.getElementById('outputBox').style.display="block";

	// Turn on the table display. 
	document.getElementById('toggleTable').checked = true;
	$('#outputTableWrapper').slideDown();


	// 
	function periodNameOf(c) {
		if(c==1) return "Year";
		else if(c==4) return "Quarter";
		else if(c==12) return "Month";
		else if(c==52) return "Week";
		else if(c==365) return "Day";
		else return "Period";
	}
	function pdNameOf(c) {
		if(c==1) return "yr";
		else if(c==4) return "qtr";
		else if(c==12) return "mo";
		else if(c==52) return "wk";
		else if(c==365) return "day";
		else return "period";
	}
	function pNameOf(c) {
		if(c==1) return "Y";
		else if(c==4) return "Q";
		else if(c==12) return "M";
		else if(c==52) return "W";
		else if(c==365) return "D";
		else return "P";
	}

	// Create a brand new table.
	function newTable() {
		var table = document.getElementById('outputTable');
		row = "";

		row += "<div class='row'>";
		row += "<div class='col-2 col-sm-2'>" + "<div class='header' id='period'>Period</div>" + "</div>";
		row += "<div class='col-5 col-sm-2'>" + "<div class='header'>Begin Balance</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div class='header'>Earn</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div class='header'>Pay</div>" + "</div>";
		row += "<div class='col-2 col-sm-2 d-none d-sm-block'>" + "<div class='header'>Add</div>" + "</div>";
		row += "<div class='col-5 col-sm-2'>" + "<div class='header'>End Balance</div>" + "</div>";
		row += "</div>";

		table.innerHTML = row;
		return table;
	}
	// Clear the table data.
	function newTableX() {
		var table = document.getElementById('outputTableX');

		// Delete all output data rows, except for the header row.
		while(table.rows.length > 1){
			table.deleteRow(-1);
		}
		document.getElementById('outputFV').innerHTML = "";
		document.getElementById('outputFFFV').innerHTML = "";
		document.getElementById('outputDeltaFV').innerHTML = "";

		return table;
	}
}

function toggleFeeInfo() {
	var on = document.getElementById('toggleFeeInfo').checked;

	if(on) {
		// document.getElementById('feeInfo').style.display = "block";
		$('.feeInfo').slideDown();
		$('input#toggleFeeInfo+label>div.chkLabel').html('Show less...');
	} else {
		// document.getElementById('feeInfo').style.display = "none";
		$('.feeInfo').slideUp();
		$('input#toggleFeeInfo+label>div.chkLabel').html('Show more...');
	}
}

function toggleTable() {
	var on = document.getElementById('toggleTable').checked;

	if(on) {
		// document.getElementById('outputTableWrapper').style.display = "block";
		// document.getElementById('outputTableWrapperX').style.display = "block";
		$('#outputTableWrapper').slideDown();
		// $('#outputTableWrapperX').slideDown();
	} else {
		// document.getElementById('outputTableWrapper').style.display = "none";
		// document.getElementById('outputTableWrapperX').style.display = "none";
		$('#outputTableWrapper').slideUp();
		// $('#outputTableWrapperX').slideUp();
	}
}

