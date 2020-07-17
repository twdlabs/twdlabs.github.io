

// JS CODE FOR CREDIT PROGRAM


function onResize() {
    var vpH = $(window).height();
    //$('.container').css( 'min-height' , (vpH-64)+'px' );
}

function clearItOut(section){
	if(section=='A'){
		$('#outputA').addClass('empty');
		document.getElementById('a0').value = "0";
		document.getElementById('T0').value = "0";
		document.getElementById('P').value = "0";
		//document.getElementById('rT').value = "0.00";
		outputA.innerHTML = "";
		emptyOutput('#outputA');
	}
	else if(section=='B'){
		$('#outputB').addClass('empty');
		document.getElementById('totalBalance').value = "0";
		document.getElementById('totalLimit').value = "0";
		//document.getElementById('rU').value = "0.00";
		outputB.innerHTML = "";
		emptyOutput('#outputB');
	}
	else if(section=='C'){
		$('#outputC').addClass('empty');
		document.getElementById('currentAge').value = "0";
		//document.getElementById('desiredAge').value = "0";
		outputC.innerHTML = "";
		emptyOutput('#outputC');
	}
}

function setTimelyRatio(rT){
	document.getElementById('rT').value = rT;
}

function setUseRatio(rU){
	document.getElementById('rU').value = rU;
}

function setCreditAge(age){
	document.getElementById('desiredAge').value = age;
}

function submitA(){
	var a0 = document.getElementById('a0').value * 1;
	var T0 = document.getElementById('T0').value * 1;
	var P = document.getElementById('P').value * 1;
	var rT = document.getElementById('rT').value / 100.0;
	var rA = 1.00 - rT;
	var m = 1000000;
	
	var result = "";
	var outputA = document.getElementById('outputA');
	
	if(!a0) {
		result += "<b>You need an open credit account to be in the game!</b><br>";
		outputA.innerHTML = result;
		$('#outputA').removeClass('empty');
		return;
	}
	
	if(!P && !rA) result += "You already have a perfect 100% on-time payment history.<br>";	
	if(!P && rA) result += "Level already achieved.<br>";
	if(P && !rA) result += "You have to dispute or somehow remove the late/missed payments from your report in order to have a perfect 100% on-time payment history.<br>";
	if(P && rA) {
		var list = "<pre>";
		
		var T = P / rA;
		var N = T - T0;
		
		if(N<0){
			result += "<b>Level already achieved.</b>";
			outputA.innerHTML = result;
			$('#outputA').removeClass('empty');
			return;
		}
		
		result += "The amount of time to have a<span class='mark'>" + 100*rT + "%</span>on-time ratio will depend on how many open credit accounts you have. The more accounts you have open, the faster it happens.";
		result += "<br>You need<span class='mark'>" + Math.ceil(N) + "</span>future on-time payments. ";
		result += "And with the<span class='mark'>"+a0+"</span>currently open accounts you have, it would take<span class='mark'>" + Math.ceil(N/a0) + " months</span>.<br><br>";
		
		list += 'Accounts Amount of Time<br>';
		list += '---------------------------';
		for(var a=1 ; a<100 && m>6 ; a++){
			var thisIsIt = a==a0;
			m = N / a;
			list += '<br>';
			if(thisIsIt) list += '<i>'
			list += a;
			list += '\t';
			list += Math.ceil(m) + ' months';
			if(m>12) list += ' ('+ (m/12).toFixed(1) +' yrs)';
			if(thisIsIt) list += '</i>'
			
			if(a>=40) a+=19;
			else if(a>=20) a+=9;
			//else if(a>=5) a+=4;
		}	list += '</pre>'
		
		result += list;							/*
		result += '<br>a0 = ' + a0;
		result += '\t| T0 = ' + T0;
		result += '\t| P = ' + P;
		result += '\t| rA = ' + rA.toFixed(2);
		result += '<br>T = ' + Math.ceil(T);
		result += '\t| N = ' + Math.ceil(N);	*/
	}
	
	outputA.innerHTML = result;
	fillOutput('#outputA ');
}

function submitB(){
	var B = document.getElementById('totalBalance').value * 1;
	var T = document.getElementById('totalLimit').value * 1;
	var rU = document.getElementById('rU').value / 100.0;
	var rU0 = (B/T);
	
	var result = "";
	var outputB = document.getElementById('outputB');
	
	if(!T) {
		result += "<b>You need an open credit account to be in the game!</b><br>";
		outputB.innerHTML = result;
		$('#outputB').removeClass('empty');
		return;
	}
	
	var X = B - (T*rU);
	var Y = (B/rU) - T;
	
	result += "Current Utilization Ratio: " + (100*rU0).toFixed(2) + "%<br>";
	result += "Desired Utilization Ratio: " + (100*rU).toFixed(2) + "%<br>";
	
	if(rU0<rU) result += "<b>Level already achieved.</b>";
	else {
		result += "<br>Possible Solutions:<ol>";
		result += "<li>Pay it down. Lower your balances by <b>" + dollar(X) + "</b>.</li>";
		result += "<li>Apply for new credit lines. Increase available credit by <b>" + dollar(Y) + "</b>.</li>";
		result += "</ol>";
	}
	
	outputB.innerHTML = result;
	fillOutput('#outputB');
}

function submitC(){
	var currentAge = document.getElementById('currentAge').value * 1;
	var desiredAge = document.getElementById('desiredAge').value * 12;
	var result = "";
	
	var delta = desiredAge - currentAge;
	
	if(delta>0) result += "You need to wait " + delta + " months (" + (delta/12).toFixed(1) + " yrs) to have the desired age of credit history.";
	else result += "<b>Level already achieved.</b>";
	
	outputC.innerHTML = result;
	fillOutput('#outputC');
}

function play(){
	
}
function fillOutput(selector){
	$(selector).removeClass('empty');
	//$('.outputSpace').removeClass('empty');
}
function emptyOutput(selector){
	$(selector).addClass('empty');
	//$('.outputSpace').addClass('empty');
}

