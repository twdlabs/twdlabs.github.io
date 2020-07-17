

function onClear(parameter) {
	if (parameter==0){
		document.getElementById('growthRateDouble').value = '';
	}
	else if (parameter==1){
		document.getElementById('growthRate').value = '';
		document.getElementById('priceToEarnings').value = '';
		$('div#card1 div.output-row').slideUp();
	}
	else if (parameter==2){
		document.getElementById('interestRate').value = '';
		document.getElementById('timeHorizon').value = '';
		$('div#card2 div.output-row').slideUp();
	}
}

function setDefault(parameter){
	if (parameter==1){
		document.getElementById('growthRate').value = '10';
		document.getElementById('priceToEarnings').value = '7';
	}
	else if (parameter==2){
		document.getElementById('interestRate').value = '10';
		document.getElementById('timeHorizon').value = '10';
	}
}

function calculateTime() {
	var r = document.getElementById('growthRate').value / 100.0;
	var PtoE = document.getElementById('priceToEarnings').value;
	var result = [ Math.log(r*PtoE + 1) / Math.log(1+r) ] - 1;

	var msg = 'At a growth rate of <b>'+(100*r)+'%</b>, you will get your original capital back in <b>' + result.toFixed(2) + ' years</b>, after which you can withdraw the original capital invested.'
	document.getElementById('howLong').innerHTML = msg;
	$('div#card1 div.output-row').slideDown();
}

function valueBirds() {
	var r = .01 * document.getElementById('interestRate').value;
	var t = document.getElementById('timeHorizon').value;
	var result = Math.pow(1+r,t);

	var msg = '';
	msg += 'r = ' + (100*r) + '%<br>t = '+t+' yrs<br>';
	msg += 'A bird in the hand is worth <b>'+ result.toFixed(2) +'</b> birds in the bush. ';
	// if(result>=) msg += 'Invest your money.';
	// else msg += 'Keep your money.';

	document.getElementById('birdValue').innerHTML = msg;
	$('div#card2 div.output-row').slideDown();
}

