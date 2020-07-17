
/* 
Discounted Cashflow Valuation
	Inputs: explicitly projected cash flows (cf1, cf2,..., cfn), 
		long-term terminal value (ptv),
		discount rate (r),
		outstanding liabilities (debtAmount),
		shares outstanding (numShares)
	Output: enterprise value (npv),
		equity value (equityValue),
		fair price for share of company (shareValue)
*/

// Clear all projected and discounted cash flows. Clear output.
function onClear() {
	$('.cf').val('');
	$('.dcf').html('&nbsp;');

	document.getElementById('discountRate').value = "";
	document.getElementById('growthRate').value = "";
	// document.getElementById('debtAmount').value = "";
	// document.getElementById('numShares').value = "";
	// document.getElementById('marginOfSafety').value = "";
	document.getElementById('NPV').innerHTML = "&nbsp;";
	document.getElementById('equityValue').innerHTML = "&nbsp;";
	document.getElementById('shareValue').innerHTML = "&nbsp;";
	document.getElementById('output').innerHTML = "";

	$('.output-row').slideUp();
}

function setDefault() {
	$('#cf0').val( -3000 );

	var amount = 8000;
	for(var x=1 ; x<=numYears ; x++){
		$('#cf'+x).val( amount.toFixed(2) );
		amount += 8000; // Increase amount by 10%.
	}

	if(usePTV) {
		$('#ptv').val( amount.toFixed(2) );
		// calcPTV();
	}
	$('#discountRate').val( $('#discountRate').attr('placeholder') );
	$('#growthRate').val( $('#growthRate').attr('placeholder') );
	$('#debtAmount').val( $('#debtAmount').attr('placeholder') );
	$('#numShares').val( $('#numShares').attr('placeholder') );
	$('#marginOfSafety').val( $('#marginOfSafety').attr('placeholder') );
}


function onSubmit() {
	var outputText = "";
	// outputText += "<div class='col-6'><h4>Discounted Cashflows</h4></div>";
	// outputText += "<div class='col-6'><h4>Net Present Values</h4></div>";

	// Save user input.
	r = document.getElementById('discountRate').value / 100;
	
	$('.dcf').html( '&nbsp;' );

	// Calculate enterprise value (aka net present value) by summing up all discounted cash flows.
	var cf = 0, dcf = 0, npv = 0;
	for( var i = 0 ; i<=numYears ; i++ ){
		cf = 1 * $('#cf'+i).val();
		dcf = presentValue(cf, i);
		npv += dcf;
		$('#dcf'+i).html( dollar(dcf) );
		$('#npv'+i).html( dollar(npv) );
		// outputText += "<div class='col-6'>";
			// outputText += 'CF<sub>' + i + '</sub> = <b>' + dollar(dcf) + '</b>';
		// outputText += "</div>";
		// outputText += "<div class='col-6'>";
			// outputText += "<span style='position:relative; top:5px;'><span style='font-size:24px'>&Sigma;</span><sub style='position:absolute; top:19px; left:3px;'>i=0</sub><sup style='position:relative; top:-18px; left:-10px;'>"+i+"</sup></span>"+'[CF<sub>i</sub>] = <b>' + dollar(npv) + '</b>';
		// outputText += "</div>";
	}
	if(usePTV){
		ptv = document.getElementById('ptv').value;
		dptv = presentValue(ptv, numYears);
		npv += dptv;
		$('#dptv').html( dollar(dptv) );
		$('#npvf').html( dollar(npv) );
		// outputText += "<div class='col-6'>";
			// outputText += 'PTV = <b>' + dollar(dptv) + '</b>';
		// outputText += "</div>";
		// outputText += "<div class='col-6'>";
			// outputText += "<span style='position:relative; top:5px;'><span style='font-size:24px'>&Sigma;</span><sub style='position:absolute; top:19px; left:3px;'>i=0</sub><sup style='position:relative; top:-18px; left:-10px;'>&infin;</sup></span>"+'[CF<sub>i</sub>] = <b>' + dollar(npv) + '</b>';
		// outputText += "</div>";
		// alert("Using PTV")
	}
	// outputText += "<div class='col-md-4' style='text-align:center;'><p>";
	// outputText += 'Enterprise Value<br><b>' + dollar(npv) + '</b>';
	// outputText += "</p></div>";
	
	// Calculate equity value by subtracting debt amount from enterprise value.
	var debtAmount = document.getElementById('debtAmount').value;
	var equityValue = (npv - debtAmount);
	// outputText += "<div class='col-md-4' style='text-align:center;'><p>";
	// outputText += 'Equity Value<br>';
	// outputText += '(Enterprise Value) - (Debt Amount)<br>';
	// outputText += '<b>' + dollar(equityValue) + '</b>';
	// outputText += "</p></div>";

	// Calculate share value by dividing equity value into shares.
	var numShares = document.getElementById('numShares').value;
	var shareValue = (equityValue / numShares);
	// outputText += "<div class='col-md-4' style='text-align:center;'><p>";
	// outputText += 'Share Value<br>'
	// outputText += '(Equity Value) / (Shares Outstanding)<br>';
	// outputText += '<b>' + dollar(shareValue) + '</b>';
	// outputText += "</p></div>";

	var marginOfSafety = .01 * document.getElementById('marginOfSafety').value;
	var safePrice = shareValue*(1-marginOfSafety);
	if(safePrice<0) safePrice = 0;
	
	// Display detailed output.
	document.getElementById('NPV').innerHTML = dollar(npv);
	document.getElementById('equityValue').innerHTML = dollar(equityValue);
	document.getElementById('shareValue').innerHTML = dollar(shareValue);
	document.getElementById('safePrice').innerHTML = dollar(safePrice);

	// document.getElementById('output').innerHTML = outputText;

	$('.output-row').slideDown();

	/*****/

	function presentValue(value, t) {
		return (  value / Math.pow( (1+r) , t )  );
	}
}


var minYrs = 0, maxYrs = 5;
var r;	// interest rate
var numYears = 3;
var usePTV = true;


// Set the number of years for explicit cash flow projection
function setNumYears() {
	n = document.getElementById('numYears').value;
	
	// Hide old projection sections.
	$('#cfInput div.dynamic').slideUp(250);
	setTimeout(
		function(){ 
			// Remove old projection sections.
			$('#cfInput div.dynamic').remove();

			// Add new projection sections -- hidden.		
			for(var x=1; x<=n; x++){
				newSection(x);
			}
			// Reveal new projection sections.
			$('#cfInput div.dynamic').slideDown(250);
		}
	, 250);

	numYears = n;
}
// Decrease the number of explicit cash flow projections by 1.
function decrYears() {
	if(numYears<=minYrs) {
		toast("Minimum number of projections reached.");
		return;
	}

	// Hide old projection section.
	$('#cfInput div#s'+numYears).slideUp(250);
	setTimeout( function(){
		// Remove old projection section.
		$('#cfInput div#s'+numYears).remove();
		numYears--;
		document.getElementById('numYears').value = numYears;
		// alert('numYears:'+numYears);
	}, 250);
}

// Increase the number of explicit cash flow projections by 1.
function incrYears() {
	if(numYears>=maxYrs) {
		toast("Maximum number of projections reached.");
		return;
	}

	numYears++;
	newSection(numYears);
	$('#cfInput div#s'+numYears).slideDown(250);
	document.getElementById('numYears').value = numYears;
}
function newSection(x){
	var newSection = "";
	newSection += "<div id='s"+x+"' class='input-row row dynamic' style='display:none;'>";
		newSection += "<div class='col-3 col-sm-3'>";
			if(x) {
				newSection += "<label for='cf"+x+"' class='cfLabel'>";
				newSection += '<div class="d-block d-sm-none">Yr ' + x + '</div>';
				newSection += '<div class="d-none d-sm-block">Year ' + x + '</div>';
				newSection += '</label>';
			}
			else newSection += "<label for='cf"+x+"' class='cfLabel'>Now</label>";
		newSection += "</div>";
		newSection += "<div class='col-4 col-sm-3'>";
			newSection += "<input type='number' id='cf"+x+"' class='cf' placeholder='10000' step='.01'>";
		newSection += "</div>";
		newSection += "<div class='col-5 col-sm-3'>";
			newSection += "<div id='dcf"+x+"' class='dcf'>&nbsp;</div>";
		newSection += "</div>";
		newSection += "<div class='col-4 col-sm-3 d-none d-sm-block'>";
			newSection += "<div id='npv"+x+"' class='npv'>&nbsp;</div>";
		newSection += "</div>";
	newSection += "</div>";
	$('#sptv').before(newSection);
}

// Calculate the perpetual terminal value show in input.
function calcPTV() {
	var cf_n = 1 * $( '#cf'+numYears ).val();	// last projected cash flow
	var r = .01 * $('#discountRate').val();
	var g = .01 * $('#growthRate').val();

	if( r && r>g ){
		ptv = cf_n * (1+g) / (r-g);
		document.getElementById('ptv').value = ptv.toFixed(2);
	} else {
		document.getElementById('ptv').value = '0.00';
		toast('PTV = CF<sub>n</sub>&bull;(1+g)/(r-g)<br>Interest rate must be (1) greater than zero and (2) greater than growth rate.');
	}
}

// Decide whether using perpetual tterminal value (PTV)
function toggleUsePTV() {
	usePTV = document.getElementById('usePTV').checked;

	if(usePTV) {
		document.getElementById('ptv').disabled = false;
		$('.ptvSection').slideDown();
	}
	else {
		$('.ptvSection').slideUp();
		document.getElementById('ptv').disabled = true;
	}
}

