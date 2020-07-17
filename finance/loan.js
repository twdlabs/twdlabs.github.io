
/* Loan Amortization Calculator */

var comparison;

function setAllToggles() {
	toggleComparison();
	toggleExtraPayment();
	toggleBaloonPayment();
}

function toggleComparison(){
	var comparison = document.getElementById('compareCheck').checked;
	if(comparison){
		$('.single').hide();
		$('.comparison').show();
	} else {
		$('.comparison').hide();
		$('.single').show();
	}
}

function toggleExtraPayment(){
	var doExtra = document.getElementById('doExtraPayment').checked;
	if(doExtra) $('.extra').show(); 
	else $('.extra').hide();
}

function toggleBaloonPayment(){
	var doBaloon = document.getElementById('doBaloonPayment').checked;
	if(doBaloon) $('.baloon').show(); 
	else $('.baloon').hide();
}

function onClear(){
	$('#principal').val('');
	$('#apr').val('');
	$('#time').val('');
	
	$('#principalA').val('');
	$('#aprA').val('');
	$('#timeA').val('');
	
	$('#principalB').val('');
	$('#aprB').val('');
	$('#timeB').val('');
	
	$('#baloonAmount').val('');

	$('#compounding').val('');
	$('.radioWrap input[type="radio"]').prop('checked', false);
	// $('.radioWrap input[type="radio"]').attr('checked', false);

	$('#timeInYears').prop('checked', true);
	
	$('#outputBox').css('display','none');
	// $('.output *').css('visibility','hidden');
}

function setDefault(){
	onClear();
	
	$('#principal').val( document.getElementById('principal').placeholder );
	$('#apr').val( document.getElementById('apr').placeholder );
	$('#time').val( document.getElementById('time').placeholder );
	
	$('#principalA').val( document.getElementById('principalA').placeholder );
	$('#aprA').val( document.getElementById('aprA').placeholder );
	$('#timeA').val( document.getElementById('timeA').placeholder );

	$('#principalB').val( document.getElementById('principalB').placeholder );
	$('#aprB').val( document.getElementById('aprB').placeholder );
	$('#timeB').val( document.getElementById('timeB').placeholder );

	$('#extraAmount').val( document.getElementById('extraAmount').placeholder );
	$('#extraFreq').val( document.getElementById('extraFreq').placeholder );
	$('#baloonAmount').val( document.getElementById('baloonAmount').placeholder );

	$('#compounding').val(12);
	$('#monthly').prop('checked', true);
}

function setCompounding(x){
	document.getElementById('compounding').value = x;
}

function onSubmit(){
	
	var c = 1*document.getElementById('compounding').value;
	var timeUnit = 1*$('input[name="timeUnit"]:checked').val();
	
	if (c==1) prefix = 'Annual ';
	else if (c==2) prefix = 'Semi-annual ';
	else if (c==4) prefix = 'Quarterly ';
	else if (c==12) prefix = 'Monthly ';
	else if (c==52) prefix = 'Weekly ';
	else if (c==365) prefix = 'Daily ';
	else prefix = 'Periodic ';
	
	
	var comparison = document.getElementById('compareCheck').checked;

	var doExtraPayment = document.getElementById('doExtraPayment').checked;
	if(doExtraPayment) {
		var extraAmount = getNumber( document.getElementById('extraAmount').value );
		var extraFreq = document.getElementById('extraFreq').value;
	}

	var doBaloon = document.getElementById('doBaloonPayment').checked;
	if(doBaloon) {
		var baloonAmount = getNumber( document.getElementById('baloonAmount').value );
	}

	if(comparison){
		
		var principalA = getNumber( document.getElementById('principalA').value );
		var aprA = .01 * document.getElementById('aprA').value;
		var timeA = document.getElementById('timeA').value / timeUnit;
		var principalB = getNumber( document.getElementById('principalB').value );
		var aprB = .01 * document.getElementById('aprB').value;
		var timeB = document.getElementById('timeB').value / timeUnit;

		// Return if compounding period is larger than the loan term. 
		if( timeA<(1/c) || timeB<(1/c) ) {
			alert("Invalid input: loan term is smaller than one compounding period.");
			return;
		}
		
		if( !principalA || !aprA || !timeA || !principalB || !aprB || !timeB || !c ) {
			if( !principalA || !principalB ) alert('Missing input: principal.');
			else if( !aprA || !aprB ) alert('Missing input: apr.');
			else if( !timeA || !timeB ) alert('Missing input: time.');
			else if( !c ) alert('Missing input: compounding period.');
			else alert('Missing input.');
			return;
		}
		
		var paymentA = calcPayment(principalA, aprA/c, c*timeA);	// principalA * (aprA/c) * Math.pow( ( 1+(aprA/c) ), (c*timeA) ) / ( Math.pow( ( 1+(aprA/c) ), (c*timeA) ) - 1 ) ;
		var paymentTotalA = paymentA * c * timeA;
		var paymentB = calcPayment(principalB, aprB/c, c*timeB);	// principalB * (aprB/c) * Math.pow( ( 1+(aprB/c) ), (c*timeB) ) / ( Math.pow( ( 1+(aprB/c) ), (c*timeB) ) - 1 ) ;
		var paymentTotalB = paymentB * c * timeB;
		if(doBaloon) {
			paymentTotalA += baloonAmount;
			paymentTotalB += baloonAmount;
		}
		
		toOutput('A', prefix, paymentA, paymentTotalA, principalA, c);
		toOutputTable('A', principalA, aprA, paymentA, c, timeB);
		toOutput('B', prefix, paymentB, paymentTotalB, principalB, c);
		toOutputTable('B', principalB, aprB, paymentB, c, timeA);
		toOutputComparison(prefix, paymentA, paymentB, paymentTotalA, paymentTotalB);
	}
	else {
		
		var principal = getNumber( document.getElementById('principal').value);
		var apr = .01 * document.getElementById('apr').value;
		var time = document.getElementById('time').value / timeUnit;

		// Return if compounding period is larger than the loan term. 
		if( time<(1/c) ) {
			alert("Invalid input: loan term is smaller than one compounding period.");
			return;
		}
		
		if( !principal || !apr || !time || !c ) {
			if(!principal) alert('Missing input: principal.');
			else if(!apr) alert('Missing input: apr.');
			else if(!time) alert('Missing input: time.');
			else if(!c) alert('Missing input: compounding period.');
			else alert('Missing input.');
			return;
		}

		var payment = calcPayment(principal, apr/c, c*time); // principal * (apr/c) * Math.pow( ( 1+(apr/c) ), (c*time) ) / ( Math.pow( ( 1+(apr/c) ), (c*time) ) - 1 ) ;
		var paymentTotal = payment * (c*time);
		if(doBaloon) paymentTotal += baloonAmount;
		
		toOutput('X', prefix, payment, paymentTotal, principal, c);
		toOutputTable('X', principal, apr, payment, c, time);
	}
	
	// $('.output *').css('visibility','visible');
	$('#outputBox').css('display','block');

	/****/

	function calcPayment(P,i,n) {
		var result  =  P * i * Math.pow(1+i,n) / ( Math.pow(1+i,n) - 1 );
		if(doBaloon) result -= (baloonAmount*i)/( Math.pow(1+i,n+1) - (1+i) );
		return result;
	}

	function getNumber(str) {
		// var msg = ("Input (before): \"" + str + "\"");

		// Remove all commas from user input number
		while(str.includes(',')) {
			str = str.replace(',','');
		}

		// msg += ("\nInput (after): \"" + str + "\"");
		// alert(msg);

		return (1 * str);
	}

	function toOutput(selectOutput, prefix, payment, paymentTotal, principal, c) {
		$('#output' + selectOutput + ' .payment .outputLabel').html( prefix + ' Payment' );
		$('#output' + selectOutput + ' .payment .outputValue').html( dollar(payment) );
		$('#output' + selectOutput + ' .paymentYr .outputValue').html( dollar(c*payment) );
		$('#output' + selectOutput + ' .interest .outputValue').html( dollar(paymentTotal - principal) );
		$('#output' + selectOutput + ' .paymentTotal .outputValue').html( dollar(paymentTotal) );
	}

	function toOutputComparison(prefix, paymentA, paymentB, paymentTotalA, paymentTotalB) {
		/* A-B Comparison */
		$('#outputC .payment .outputLabel').html( prefix + ' Payment<br/>Difference' );
		$('#outputC .payment .outputValue').html( dollar( Math.abs(paymentB-paymentA) ) );
		$('#outputC .interest .outputValue').html( dollar( Math.abs(paymentTotalB-paymentTotalA) ) );
	}

	function toOutputTable(selectOutput, principal, apr, payment, c, time) {		
		var table = $('#outputTable' + selectOutput);
		var outputRow = ""
		outputRow += "<div class='row'>";
		outputRow += ("<div class='col-xs-12'> <div class='tableHead'> <h4>Amortization Schedule</h4> </div> </div>");
		outputRow += ("<div class='col-xs-6 col-sm-3'> <div class='tableHead'> <div class='num'>"+dollar(principal)+"</div> Principal </div> </div>");
		outputRow += ("<div class='col-xs-6 col-sm-3'> <div class='tableHead'> <div class='num'>"+percent(apr)+"</div> APR </div> </div>");
		outputRow += ("<div class='col-xs-6 col-sm-3'> <div class='tableHead'> <div class='num'>"+time+" yrs</div> Term </div> </div>");
		outputRow += ("<div class='col-xs-6 col-sm-3'> <div class='tableHead'> <div class='num'>"+c+"</div> Periods per year </div> </div>");
		outputRow += "</div> <div class='row'>";
		outputRow += "<div class='col-xs-3'> <div class='colA colHead'>Period</div> </div>";
		outputRow += "<div class='col-xs-3'> <div class='colB colHead'>Principal Paid</div> </div>";
		outputRow += "<div class='col-xs-3'> <div class='colB colHead'>Interest Paid</div> </div>";
		outputRow += "<div class='col-xs-3'> <div class='colC colHead'>Balance</div> </div>";
		outputRow += "</div>";
		table.html( outputRow );
		/*
		var prefix;
		if (c==1) prefix = 'Yr ';
		else if (c==4) prefix = 'Qtr ';
		else if (c==12) prefix = 'Mo ';
		else if (c==52) prefix = 'Wk ';
		else if (c==365) prefix = 'Day ';
		else prefix = 'Pd ';*/
		var prefix = undefined;
		var numPaymentsScheduled = c*time;
		var loanBalance = [];
		var principalPayments = [];
		var interestPayments = [];
		var periodsPerExtra = c / extraFreq;

		var yearlyPrincipalCount = 0;
		var yearlyInterestCount = 0;
		var msg = "";
		
		// Populate the balance[] array with values for the upcoming output table. 
		var lb = 1*principal; 
		loanBalance.push(lb);
		for( var i=0 ; i<=numPaymentsScheduled ; i++ ) {
			lb = lb * ( 1+(apr/c) ) - payment;
			var arrow = ' ==> ';
			var nl = '\n';
			/*if(lb < payment) {
				alert('lb < payment' +nl+ 'loanBalance['+i+'] = ' + loanBalance[i] +nl+ '[lb,payment] = [' + lb+','+payment + ']' );
				// payment = lb;
			}*/
			if(doExtraPayment && i%periodsPerExtra==0) lb -= extraAmount;
			loanBalance.push(lb);

			/****************************/

			if(loanBalance[i]<-1) break;			// Needs work. 
			if(!loanBalance[i-10] && i>=10) break;	// Needs work. 

			if(loanBalance[i]) {
				if(i%3==0) msg += "\n";
				else msg += "   ";
				// if(i%3==0) msg += "<br>";
				// else msg += "&nbsp;&nbsp;&nbsp;";
				msg += ( "lb["+i+"] = " + dollar(loanBalance[i]) );
			}

			var pPortion = loanBalance[i-1]-loanBalance[i];
			var iPortion = payment - pPortion;
			if(doExtraPayment && i%periodsPerExtra==0) iPortion += extraAmount;

			if(pPortion) yearlyPrincipalCount += 1*pPortion;
			if(iPortion) yearlyInterestCount += 1*iPortion;
			if(pPortion && iPortion) {
				principalPayments.push(pPortion);
				interestPayments.push(iPortion);
			}

			var yearNumber = Math.floor( 1 + (i-1)/c );
			var outputRow = "";
			
			if(c==1) outputRow += "<div id='row"+i+"' class='row within1 year"+yearNumber+"'>";
			else outputRow += "<div id='row"+i+"' class='row within year"+yearNumber+"'>";

			if(i==0) {				
				// Disbursement & Starting Balance Statement
				yearlyPrincipalCount = 0; yearlyInterestCount = 0;

				outputRow += "<div class='col-xs-6'> <div class='colA'>Disburse</div> </div>";
				outputRow += "<div class='col-xs-6'> <div class='colC'>" + dollar(loanBalance[i]) + "</div> </div>";
				// if(c!=1) outputRow += "<div class='col-xs-12'> <div class='yearTitle'>Year " + (1+(i/c)) + "</div> </div>";

				// outputRow += "<div class='col-xs-5 col-sm-4'> <div class='colA'>Progress: "+loanProgress(loanBalance[i])+"</div> </div>";
				// outputRow += "<div class='col-xs-7 col-sm-8'> <div class='colC'>"+loanProgressBar(loanBalance[i])+"</div> </div>";

				outputRow += "</div>";
				outputRow += "<div class='row yearEnd' onclick=\"$('.year"+yearNumber+"').slideToggle(500)();\">";
				outputRow += "<div class='col-xs-3'> <div class='colA'>Origination</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>"+dollar(yearlyPrincipalCount)+"</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>"+dollar(yearlyInterestCount)+"</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colC'>"+dollar(loanBalance[i])+"</div> </div>";
				outputRow += "<div class='col-xs-5 col-sm-4'> <div class='colA'>Progress: "+loanProgress(loanBalance[i])+"</div> </div>";
				outputRow += "<div class='col-xs-7 col-sm-8'> <div class='colC'>"+loanProgressBar(loanBalance[i])+"</div> </div>";
			}

			else if(i%c==1) {
				// Start of Year Balances (for sub-annual compounding)
				yearlyPrincipalCount = 0; yearlyInterestCount = 0;

				if(c!=1) outputRow += "<div class='col-xs-12'> <div class='yearTitle' onclick=\"$('.year"+yearNumber+"').slideToggle(500)();\">Year " + Math.ceil(i/c) + "</div> </div>";
				if(prefix) outputRow += "<div class='col-xs-3'> <div class='colA'>" + prefix + c + "</div> </div>";
				else outputRow += "<div class='col-xs-3'> <div class='colA'>Payment " + i + "</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>" + dollar(pPortion) + "</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>" + dollar(iPortion) + "</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colC'>" + dollar(loanBalance[i]) + "</div> </div>";
			}

			else if(c!=1 && i%c==0) {
				// End of Year Balances (for sub-annual compounding)
				if(prefix) outputRow += "<div class='col-xs-3'> <div class='colA'>" + prefix + c + "</div> </div>";
				else outputRow += "<div class='col-xs-3'> <div class='colA'>Payment " + i + "</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>" + dollar(pPortion) + "</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>" + dollar(iPortion) + "</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colC'>" + dollar(loanBalance[i]) + "</div> </div>";
				outputRow += "</div>";
				outputRow += "<div class='row yearEnd' onclick=\"$('.year"+yearNumber+"').slideToggle(500)();\">";
				outputRow += "<div class='col-xs-3'> <div class='colA'>Year " + (i/c) + "</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>"+dollar(yearlyPrincipalCount)+"</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>"+dollar(yearlyInterestCount)+"</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colC'>"+dollar(loanBalance[i])+"</div> </div>";
				outputRow += "<div class='col-xs-5 col-sm-4'> <div class='colA'>Progress: "+loanProgress(loanBalance[i])+"</div> </div>";
				outputRow += "<div class='col-xs-7 col-sm-8'> <div class='colC'>"+loanProgressBar(loanBalance[i])+"</div> </div>";

				// Executes on every iteration except the very last
				// if(i/c < time) outputRow += "<div class='col-xs-12'> <div class='yearTitle'>Year " + (1+(i/c)) + "</div> </div>";
				// if(doBaloon && i/c >= time) outputRow += "<div class='col-xs-12'> <div class='yearTitle'>Finale</div> </div>";
			}
			else {						
				// Intermediate Balances (for sub-annual compounding) & All (for annual compounding)
				if(c==1) outputRow += "<div class='col-xs-3'> <div class='colA' style='font-weight:bold;'>Year " + i + "</div> </div>";
				else {
					if(prefix) outputRow += "<div class='col-xs-3'> <div class='colA'>" + prefix + i%c + "</div> </div>";
					else outputRow += "<div class='col-xs-3'> <div class='colA'>Payment " + i + "</div> </div>";
				}
				outputRow += "<div class='col-xs-3'> <div class='colB'>" + dollar(pPortion) + "</div> </div>";
				outputRow += "<div class='col-xs-3'> <div class='colB'>" + dollar(iPortion) + "</div> </div>";
				if(c==1) outputRow += "<div class='col-xs-3'> <div class='colC' style='font-weight:bold;'>" + dollar(loanBalance[i]) + "</div> </div>";
				else outputRow += "<div class='col-xs-3'> <div class='colC'>" + dollar(loanBalance[i]) + "</div> </div>";

				if(c==1){
					outputRow += "</div>";
					outputRow += "<div class='row yearEnd'>";
					outputRow += "<div class='col-xs-5 col-sm-4'> <div class='colA'>Progress: "+loanProgress(loanBalance[i])+"</div> </div>";
					outputRow += "<div class='col-xs-7 col-sm-8'> <div class='colC'>"+loanProgressBar(loanBalance[i])+"</div> </div>";
				}
			}
			outputRow += "</div>";
			table.append(outputRow);
			// if(loanBalance[i+1]<-1) break;
		}

		var debug = $('#debugger').prop('checked');
		if(debug){
			alert(msg);
			// longerToast(msg);
		}
		

		if(doBaloon) {
			lb = lb * ( 1+(apr/c) ) - baloonAmount;
			loanBalance.push(lb);

			/****************************/

			var pPortion = loanBalance[i-1] - loanBalance[i];
			var iPortion = baloonAmount - pPortion;

			var outputRow = "<div class='row within year" + Math.floor(1+(i-1)/c) + "'>";
			if(doBaloon && i/c >= time) outputRow += "<div class='col-xs-12'> <div class='yearTitle'>Finale</div> </div>";
			outputRow += "<div class='col-xs-3'> <div class='colA'>Baloon Payment</div> </div>";
			outputRow += "<div class='col-xs-3'> <div class='colB'>" + dollar(pPortion) + "</div> </div>";
			outputRow += "<div class='col-xs-3'> <div class='colB'>" + dollar(iPortion) + "</div> </div>";
			outputRow += "<div class='col-xs-3'> <div class='colC'>" + dollar(loanBalance[i]) + "</div> </div>";
			outputRow += "</div>";
			outputRow += "<div class='row yearEnd' onclick=\"$('.year"+Math.floor(1+(i-1)/c)+"').slideToggle(500)();\">";
			outputRow += "<div class='col-xs-3'> <div class='colA'>Maturity</div> </div>";
			outputRow += "<div class='col-xs-3'> <div class='colB'>"+dollar(pPortion)+"</div> </div>";
			outputRow += "<div class='col-xs-3'> <div class='colB'>"+dollar(iPortion)+"</div> </div>";
			outputRow += "<div class='col-xs-3'> <div class='colC'>"+dollar(loanBalance[i])+"</div> </div>";
			// outputRow += "</div>";
			// outputRow += "<div class='row yearEnd'>";
			outputRow += "<div class='col-xs-5 col-sm-4'> <div class='colA'>Progress: "+loanProgress(loanBalance[i])+"</div> </div>";
			outputRow += "<div class='col-xs-7 col-sm-8'> <div class='colA'>"+loanProgressBar(loanBalance[i])+"</div> </div>";
			outputRow += "</div>";
			table.append(outputRow);

			yearlyPrincipalCount = 0;
			yearlyInterestCount = 0;
		}

		toPaymentGraph(selectOutput,payment,time,c);

		/***/

		function showBalances() {
			var result = "";

			for (var i=0; i < loanBalance.length; i++) {
				if(i%3==0) result += "\n";
				else result += "   ";
				// if(i%3==0) msg += "<br>";
				// else msg += "&nbsp;&nbsp;&nbsp;";
				result += loanBalance[i]
			}

			return result;
		}
		
		function loanProgress(balance) {
			return percent( 1 - balance/principal , 1 );
		}
		function loanProgressBar(balance) {
			blPercentage = percent( 1 - balance/principal , 1 );
			brPercentage = percent( balance/principal , 1 );

			var result = "";
			result += "<div class='loanProgressBarHolder'>";
			result += "<div class='loanProgressBar br' style='width:"+blPercentage+";'>";
			result += "</div>";
			result += "</div>";
			return result;
		}

		function percent(ratio,numDigits) {
			var percentage = 100*ratio;
			
			if(numDigits!==undefined) {
				return (percentage).toFixed(numDigits)+'%';
			}
			else {
				if(percentage%1==0) return (percentage)+'%';
				else if(percentage%.1==0) return (percentage).toFixed(1)+'%';
				else if(percentage%.01==0) return (percentage).toFixed(2)+'%';
				else return (percentage).toFixed(3)+'%';
			}
		}

		function toPaymentGraph(selectOutput, fullPayment, t, c) {
			var n = c*t
			var title = "<div class='graphTitle'> <span style='color:dodgerblue'>Principal</span> and <span style='color:red'>Interest</span><br/>Payment Components</div>";
			var xAxis = "", yAxis = "", barsP = "", barsI = "";
			var graphHeight = 200;
			var hScale = (1/fullPayment)*graphHeight;
			var barWidth = 100*(1/n);
			var res = 1;
			var verticalUnit = 300; 
			while(fullPayment/verticalUnit>8) verticalUnit*=2;
			while(fullPayment/verticalUnit<2) verticalUnit/=5;

			for(var i=0 ; i<=n ; i++){
				if(i%res==0 && (principalPayments[i]*hScale)<graphHeight ) barsP += "<div class='bar P' style='width:" + (res*barWidth) + "%; height:" + (principalPayments[i]*hScale) + "px; left:" + (barWidth*i) + "%;'></div>";
				if(i%res==0) barsI += "<div class='bar I' style='width:" + (res*barWidth) + "%; height:" + (interestPayments[i]*hScale) + "px; left:" + (barWidth*i) + "%;'></div>";
				if(i%c==0) xAxis += "<div class='xMark' style='left:" + (barWidth*i) + "%;'>" + (i/c) + "</div>";
			}
			var yLimit = verticalUnit*Math.ceil(fullPayment/verticalUnit);
			for(var i=0 ; i<=yLimit ; i+=verticalUnit){
				yAxis += "<div class='yMark' style='bottom:"+(100*i/yLimit)+"%;'>"+dollar0(i)+"</div>";
			}

			$('#paymentGraph' + selectOutput).html( title + xAxis + yAxis + barsP + barsI );
			$('#paymentGraph' + selectOutput).height( graphHeight );
		}
	}
}

function scrollPageTo(level) {
	$('html,body').animate( {scrollTop:1*level} , 500 );
}

// Update scroll progress indicators.
function onScroll() {
	var a = Math.max( document.body.scrollTop , document.documentElement.scrollTop );
	var b = $('html').height() - $(window).height(); if(b==0) return;
	var scrollPercent = (100*(a/b)).toFixed();
	$('#scrollProgressBar').css( 'width' , scrollPercent+'%' );
}

