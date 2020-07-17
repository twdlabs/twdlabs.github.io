
function clearA(){
	document.getElementById('xA').value = "";
	document.getElementById('pA').value = "";
	document.getElementById('nA').value = "";
	document.getElementById('outputA').innerHTML = "&nbsp;";
}
function clearB(){
	document.getElementById('xB').value = "";
	document.getElementById('pB').value = "";
	document.getElementById('nB').value = "";
	document.getElementById('outputB').innerHTML = "&nbsp;";
}

function submitA(){
	var x = 1 * document.getElementById('xA').value;
	var p = 1 * document.getElementById('pA').value;
	var n = 1 * document.getElementById('nA').value;
	
	var y = x / (p*n);
	document.getElementById('outputA').innerHTML =  dollar(y) + "/g";
}

function submitB(){
	var x = 1 * document.getElementById('xB').value;
	var p = 1 * document.getElementById('pB').value;
	var n = 1 * document.getElementById('nB').value;
	
	var y = x / (p*n);
	document.getElementById('outputB').innerHTML =  dollar(y) + "/g";
}
