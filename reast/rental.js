

function onClear(){
	$('.output-row').slideUp(500);
	document.getElementById('numUnits').value = "";
	document.getElementById('purchasePrice').value = "";
	document.getElementById('downPayment').value = "";
	document.getElementById('loanPayment').value = "";
	document.getElementById('grossOpIncome').value = "";
	document.getElementById('opExpenses').value = "";
	$('.quadNum').html( 'X' );
}

function simplify(){
	var simplified = document.getElementById('simple').checked;
	if(simplified){
		$('.simple').slideDown(500); //.css('display','block');
		$('.detail').slideUp(500); //.css('display','none');
	} else {
		$('.detail').slideDown(500); //.css('display','block');
		$('.simple').slideUp(500); //.css('display','none');
	}
}

function generateDownPayment(){
	var purchasePrice = 1 * document.getElementById('purchasePrice').value;	// purchase price
	var rehabCost = 1 * document.getElementById('rehabCost').value;			// rehab cost
	var allInCost = purchasePrice + rehabCost;
	document.getElementById('downPayment').value = ((allInCost)*.25);
}

function generateLoanPayment(){
	var purchasePrice = 1 * document.getElementById('purchasePrice').value;	// purchase price
	var rehabCost = 1 * document.getElementById('rehabCost').value;			// rehab cost
	var allInCost = purchasePrice + rehabCost;								// All In cost
	var dp = document.getElementById('downPayment').value;
	document.getElementById('loanPayment').value = ((allInCost-dp)*.06);
}

function setDefault(){
	document.getElementById('numUnits').value = "16";
	document.getElementById('purchasePrice').value = "1000000";
	document.getElementById('rehabCost').value = "0";
	document.getElementById('downPayment').value = "250000";
	document.getElementById('loanPayment').value = "40000";
	document.getElementById('grossOpIncome').value = "200000";
	document.getElementById('opExpenses').value = "95000";
}

function onSubmit(){
	var simplified = document.getElementById('simple').checked;

	var numUnits = 1 * document.getElementById('numUnits').value;			// number of units

	var purchasePrice = 1 * document.getElementById('purchasePrice').value;	// purchase price
	var rehabCost = 1 * document.getElementById('rehabCost').value;			// rehab cost
	var allInCost = purchasePrice + rehabCost;								// All In cost

	var downPayment = 1 * document.getElementById('downPayment').value;		// down payment
	var loanAmount = allInCost - downPayment;								// loan amount
	var loanPayment;														// annual mortgage payment

	var grossOpIncome = 1 * document.getElementById('grossOpIncome').value;	// gross operating income
	var opExpenses;															// operating expenses
	var netOpIncome;														// net operating income

	// Dummy Proofing
	if(!allInCost) { alert('Error: Purchase price required.\nallInCost = '+allInCost); return; }
	if(loanAmount > allInCost) { alert('Error: Overfinanced.\nallInCost = '+allInCost+'\nloanAmount = '+loanAmount); return; }

	// Simplified Calculation
	if(simplified) {
		// Determine loan payment by simple calculation.
		loanPayment = loanAmount * 0.06;
		document.getElementById('loanPayment').value = loanPayment;

		// Determine NOI by simple input.
		opExpenses = 0;
	}
	// Detailed Calculation
	else {
		// Determine loan payment by user input.
		loanPayment = 1 * document.getElementById('loanPayment').value;

		// Determine NOI by calculation.
		opExpenses = 1 * document.getElementById('opExpenses').value;
	}

	netOpIncome = grossOpIncome - opExpenses;
	var ltv = loanAmount / allInCost;
	var cashReturn = (netOpIncome - loanPayment) / (allInCost - loanAmount);

	var result = "";

	//result += '<div>Annual Cashflow &nbsp;=&nbsp; [Net Operating Income] &minus; [Mortgage payment] &nbsp;=&nbsp; ' + dollar0(netOpIncome-loanPayment) +'</div>';
	//result += '<div>Money Down &nbsp;=&nbsp; [Purchase price] &minus; [Loan amount] &nbsp;=&nbsp; ' + dollar0(downPayment) +'</div>';
	//result += '<div>Cash On Cash Return &nbsp;=&nbsp; [Annual Cashflow] / [Money Down]</div>';

	result += '<div class="col-sm-6">';
		result += '<div class="row">';
			result += '<div class="col-xs-12 heading">Acquisition</div>';
		result += '</div>';
		result += '<div class="row" style="margin-bottom:6px;">';
			if(numUnits>0) result += '<div class="col-xs-8">Price per Unit:</div> <div class="col-xs-4 number">' + dollar0(allInCost/numUnits) + '</div>';
		result += '</div>';
		result += '<div class="row">';
			result += '<div class="col-xs-8">Purchase Price:</div> <div class="col-xs-4 number">' + dollar0(allInCost) + '</div>';
		result += '</div>';
		result += '<div class="row">';
			result += '<div class="col-xs-8">less Down Payment:</div> <div class="col-xs-4 number">&minus;' + dollar0(downPayment) + '</div>';
		result += '</div>';
		result += '<div class="row">';
			result += '<div class="col-xs-12"><div style="border-top:1px solid #222;"></div></div>';
			result += '<div class="col-xs-8">Loan Amount:</div> <div class="col-xs-4 number">' + dollar0(loanAmount) + '</div>';
		result += '</div>';
		result += '<div class="row">';
			result += '<div id="purchaseBar" class="col-xs-12 marginBar">';
				result += '<div id="dpBar" class="innerBar" style="width:' + (100*(1-ltv)) + '%"><div class="caption">'+(100*(1-ltv)).toFixed(1)+'%<br>DP</div></div>';
				result += '<div id="loanBar" class="innerBar" style="width:' + (100*ltv) + '%"><div class="caption">'+(100*ltv).toFixed(1)+'%<br>LTV</div></div>';
			result += '</div>';
			result += '<div class="col-xs-12 result">CAP Rate &nbsp;=&nbsp; ' + (100*(netOpIncome/purchasePrice)).toFixed(2)+'%</div>';
		result += '</div>';
	result += '</div>';

	result += '<div class="col-sm-6">';
		result += '<div class="row">';
			result += '<div class="col-xs-12 heading">Operations</div>';
		result += '</div>';
		result += '<div class="row">';
			if (!simplified) {
				result += '<div class="col-xs-8">Gross Operating Income:</div> <div class="col-xs-4 number">' + dollar0(grossOpIncome) + '</div>';
				result += '</div>';
				result += '<div class="row">';
				result += '<div class="col-xs-8">less Operating Expenses:</div> <div class="col-xs-4 number">&minus;' + dollar0(opExpenses) + '</div>';
				result += '</div>';
				result += '<div class="row">';
				result += '<div class="col-xs-12"> <div style="border-top:1px solid #222;"></div> </div>';
			}
			result += '<div class="col-xs-8">Net Operating Income:</div> <div class="col-xs-4 number">' + dollar0(netOpIncome) + '</div>';
		result += '</div>';
		result += '<div class="row">';
			result += '<div class="col-xs-8">less Loan Payment:</div> <div class="col-xs-4 number">' + dollar0(loanPayment) + '</div>';
		result += '</div>';
		result += '<div class="row">';
			result += '<div class="col-xs-12"><div style="border-top:1px solid #222;"></div></div>';
			result += '<div class="col-xs-8">Cashflow:</div> <div class="col-xs-4 number">' + dollar0(netOpIncome-loanPayment) + '</div>';
		result += '</div>';
		if(grossOpIncome || expenses){
		result += '<div class="row">';
			result += '<div id="operationsBar" class="col-xs-12 marginBar">';
				result += '<div id="profitBar" class="innerBar" style="width:' + (100*(1-(opExpenses/grossOpIncome))) + '%"><div class="caption">'+(100*(1-(opExpenses/grossOpIncome))).toFixed(1)+'%<br>Profit</div></div>';
				result += '<div id="expenseBar" class="innerBar" style="width:' + (100*(opExpenses/grossOpIncome)) + '%"><div class="caption">'+(100*(opExpenses/grossOpIncome)).toFixed(1)+'%<br>Expenses</div></div>';
			result += '</div>';
		result += '</div>';
		}
	//result += '</div>';

	//result += '<div class="col-sm-12">';
		result += '<div class="row">';
			//result += '<div class="col-xs-12 heading">Cash on Cash</div>';
			//result += '<div class="col-xs-12">COCR &nbsp;=&nbsp; ( ' + dollar0(netOpIncome) +' &minus; '+ dollar0(loanPayment) + ' ) / ( ' + dollar0(downPayment) + ' )</div>';
			result += '<div class="col-xs-12">COCR &nbsp;=&nbsp; ' + dollar0(netOpIncome - loanPayment) + ' / ' + dollar0(downPayment) + '</div>';
			result += '<div class="col-xs-12 result">COCR &nbsp;=&nbsp; ' + (100*cashReturn).toFixed(2)+'%</div>';
		result += '</div>';
	result += '</div>';


	$('#output').html( result );
	$('.output-row').slideDown(500);

	// Fill the quadrants.
	$('#quadPrice').html( dollar0(purchasePrice) );
	$('#quadRehab').html( dollar0(rehabCost) );
	if(numUnits>0){
		$('#quadPricePerUnit').html( dollar0(purchasePrice/numUnits) + ' / unit' );
		$('#quadRehabPerUnit').html( dollar0(rehabCost/numUnits) + ' / unit' );
	}
	else{
		$('#quadPricePerUnit').html( 'X' );
		$('#quadRehabPerUnit').html( 'X' );
	}
	$('#quadDP').html( dollar0(downPayment) );
	$('#quadLoan').html( dollar0(loanAmount) );
	$('#quadLoanPayment').html( dollar0(loanPayment) + '/yr' );
	$('#quadNOI').html( dollar0(netOpIncome) + '/yr' );
	$('#quadCOC').html( (100*cashReturn).toFixed(1)+'%' );
	$('#quadUnits').html( numUnits );
}

function interpretNumber() {
}
