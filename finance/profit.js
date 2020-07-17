
function onClear(){
	document.getElementById('grossIncome').value = "";
	document.getElementById('netIncome').value = "";
}

function setDefault(){
	document.getElementById('grossIncome').value = "1000";
	document.getElementById('netIncome').value = "500";
	document.getElementById('desiredMargin').value = ".80";
}

function onSubmit(){
	var G = document.getElementById('grossIncome').value;
	var N = document.getElementById('netIncome').value;
	var p = document.getElementById('desiredMargin').value;
	var result;
	var output = "";

	if(G==0 || p==0){
		alert("Invalid input. Try again.");
		return;
	}
	result = (p*G-N) / (1-p);

	output += "<div class='col-xs-6'>Current margin: <b>" + (100*(N/G)).toFixed(0) + "%</b></div>";
	output += "<div class='col-xs-6'>Desired margin: <b>" + (100*p).toFixed(0) + "%</b></div>";
	output += "<div class='col-xs-12'>Action to take:<br/>";
	if(result<0)	output += "Spend <b>" + dollar( 0-result ) + "</b>";
	else 			output += "Earn and keep <b>" + dollar( result ) + "</b>";
	output += "</div>";
	
	document.getElementById('output').innerHTML = output;
}
