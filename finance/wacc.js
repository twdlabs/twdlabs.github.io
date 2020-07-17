

function onClear(){
	document.getElementById('costOfEquity').value = "";
	document.getElementById('costOfDebt').value = "";
	document.getElementById('valueOfEquity').value = "";
	document.getElementById('valueOfDebt').value = "";
	document.getElementById('taxRate').value = "";
}

function setDefault(){
	document.getElementById('costOfEquity').value = "15";
	document.getElementById('costOfDebt').value = "10";
	document.getElementById('valueOfEquity').value = "50000";
	document.getElementById('valueOfDebt').value = "50000";
	document.getElementById('taxRate').value = "35";
}

function getWACC() {
	var Re = document.getElementById('costOfEquity').value;
	var Rd = document.getElementById('costOfDebt').value;
	var E = document.getElementById('valueOfEquity').value * 1.0;
	var D = document.getElementById('valueOfDebt').value * 1.0;
	var Tc = document.getElementById('taxRate').value / 100.0;
	var result  =  Re * (E/(E+D))  +  Rd * (D/(E+D)) * (1-Tc);
	document.getElementById('bizWACC').innerHTML = 'WACC discount rate: <b>' + result.toFixed(2) + '%</b>';
}
