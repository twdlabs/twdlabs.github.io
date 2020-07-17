

function resetFullDiv(){
	var vpH = $(window).height();
	//$('.fullDiv').css('min-height', vpH+'px');
}

function onClear(){
	document.getElementById('avgRent').value = "";
	document.getElementById('units').value = "";
	document.getElementById('occupancyRatio').value = "";
	document.getElementById('expenseRatio').value = "";
	document.getElementById('capRate').value = "";
	$('#output').slideUp();
}

function setDefault(){
	document.getElementById('units').value = 32;
	document.getElementById('avgRent').value = 900;
	document.getElementById('avgRent2').value = 950;
	document.getElementById('occupancyRatio').value = 70;
	document.getElementById('occupancyRatio2').value = 90;
	document.getElementById('expenseRatio').value = 50;
	document.getElementById('capRate').value = 10;
}

function onSubmit(){
	var units = 1 * document.getElementById('units').value;
	var avgRent = 1 * document.getElementById('avgRent').value;
	var avgRent2 = 1 * document.getElementById('avgRent2').value;
	var occupancyRatio = 1 * document.getElementById('occupancyRatio').value / 100;
	var occupancyRatio2 = 1 * document.getElementById('occupancyRatio2').value / 100;
	var expenseRatio = 1 * document.getElementById('expenseRatio').value / 100;
	var capRate = 1 * document.getElementById('capRate').value / 100;
	
	if(capRate<=0) {
		alert('Caprate must me greater than 0 to continue');
		return;
	}
	
	var gpr = units * (avgRent * 12);
	var gpr2 = units * (avgRent2 * 12);
	var grossIncome = gpr * occupancyRatio;
	var grossIncome2 = gpr2 * occupancyRatio2;
	var noi = grossIncome - (gpr*expenseRatio);
	var noi2 = grossIncome2 - (gpr2*expenseRatio);
	var asIsValue = noi / capRate;
	var stabilizedValue = noi2 / capRate;
	
	var outputBox = document.getElementById('output');
	
	outputText = "";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Units </div> <div class='col-sm-8 result'>" + units + " units</div>";
	outputText += "</div>";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Average Rent </div> <div class='col-sm-8 result'>" + dollar0(avgRent) + " &nbsp;&nbsp;<i class='fa fa-long-arrow-right'></i>&nbsp;&nbsp; " + dollar0(avgRent2) + "</div>";
	outputText += "</div>";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Occupancy Rate </div> <div class='col-sm-8 result'>" + (100*occupancyRatio) + "% &nbsp;&nbsp;<i class='fa fa-long-arrow-right'></i>&nbsp;&nbsp; " + (100*occupancyRatio2) + "%</div>";
	outputText += "</div>";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Gross Potential Rent </div> <div class='col-sm-8 result'>" + dollar0(gpr) + "/yr &nbsp;&nbsp;<i class='fa fa-long-arrow-right'></i>&nbsp;&nbsp; " + dollar0(gpr2) + "/yr</div>";
	outputText += "</div>";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Gross Operating Income </div> <div class='col-sm-8 result'>" + dollar0(grossIncome) + "/yr &nbsp;&nbsp;<i class='fa fa-long-arrow-right'></i>&nbsp;&nbsp; " + dollar0(grossIncome2) + "/yr</div>";
	outputText += "</div>";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Estimated Expenses </div> <div class='col-sm-8 result'>" + dollar0(gpr*expenseRatio) + "/yr &nbsp;&nbsp;<i class='fa fa-long-arrow-right'></i>&nbsp;&nbsp; " + dollar0(gpr2*expenseRatio) + "/yr</div>";
	outputText += "</div>";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Net Operating Income </div> <div class='col-sm-8 result'>" + dollar0(noi) + "/yr &nbsp;&nbsp;<i class='fa fa-long-arrow-right'></i>&nbsp;&nbsp; " + dollar0(noi2) + "/yr</div>";
	outputText += "</div>";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Property Value </div> <div class='col-sm-8 result'>" + dollar0(asIsValue) + " &nbsp;&nbsp;<i class='fa fa-long-arrow-right'></i>&nbsp;&nbsp; " + dollar0(stabilizedValue) + "</div>";
	outputText += "</div>";
	
	outputText += "<div class='row'>";
	outputText += "<div class='col-sm-4 rLabel'>Value Created </div> <div class='col-sm-8 result'>" + dollar0( stabilizedValue - asIsValue ) + "</div>";
	outputText += "</div>";

	outputBox.innerHTML = outputText;
	$(outputBox).slideDown();
}
