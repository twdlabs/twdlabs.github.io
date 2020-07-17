

// Layout Methods //

// Normalize the card height. 
function onResize(){
	var screenWidth = $(window).width();
	if(screenWidth >= 768){
		var mH = Math.max( $('#flipper').innerHeight() , $('#landlord').innerHeight() );
		$('.card').css('min-height', mH);
	} else {
		$('.card').css('min-height', 0 );
	}
}


// Flipper Methods //

function onClearA(){
	$('#arv').val("");
	$('#qualifyRatio').val("0");
	$('#repairCost').val("");
	$('#assignmentFeeA').val("");
}

function setDefaultA(){
	$('#arv').val("160000");
	$('#qualifyRatio').val(".65");
	$('#repairCost').val("20000");
	$('#assignmentFeeA').val("5000");
}

function onSubmitA(){
	var result = "";
	var arv = 1 * $('#arv').val();
	var repairCost = 1 * $('#repairCost').val();
	var assignmentFee = 1 * $('#assignmentFeeA').val();
	var qRatio = 1 * $('#qualifyRatio').val();
	if(!qRatio){
		alert("Please choose a qualifying ratio.")
		return;
	}
	
	var outputBox = $('#outputA');
	var maxOffer = arv * qRatio - repairCost - assignmentFee;
	var firstOffer = maxOffer*.85;

	result = "<div class='row'>";
	
	result += "<div class='col-sm-3 col-xs-6'><b>" + dollar0(arv) + "</b>";
	result += "<label>ARV</label></div>";
	result += "<div class='col-sm-3 col-xs-6'><b>" + (100*qRatio) + "%</b>";
	result += "<label>qRatio</label></div>";
	result += "<div class='col-sm-3 col-xs-6'><b>" + dollar0(repairCost) + "</b>";
	result += "<label>Repairs</label></div>";
	result += "<div class='col-sm-3 col-xs-6'><b>" + dollar0(assignmentFee) + "</b>";
	result += "<label>Assignment</label></div>";
	result += "<div class='col-xs-12' style='margin-top:12px;'></div>";
	
	result += "<div class='col-xs-12' style='font-size:12px;'><b>Purchase Price</b> + ("+ dollar0(repairCost) +" + "+ dollar0(assignmentFee) + " )&nbsp;&nbsp;&le;&nbsp;&nbsp;"+ qRatio+' *'+dollar0(arv) + "</div>";
	result += "<div class='col-xs-12' style='font-size:12px;'><b>Purchase Price</b> + "+ dollar0(repairCost+assignmentFee) + "&nbsp;&nbsp;&le;&nbsp;&nbsp;"+ dollar0(qRatio*arv) + "</div>";
	result += "<div class='col-xs-12' style='font-size:12px;'><b>Purchase Price</b>&nbsp;&nbsp;&le;&nbsp;&nbsp;"+ dollar0(qRatio*arv) +" &minus; "+ dollar0(repairCost+assignmentFee) + "</div>";
	result += "<div class='col-xs-12' style='font-size:12px;'><b>Purchase Price</b>&nbsp;&nbsp;&le;&nbsp;&nbsp;"+ dollar0( qRatio*arv - (repairCost+assignmentFee) ) + "</div>";
	result += "<div class='col-xs-12' style='margin-top:8px;'></div>";
	
	result += "<div class='col-xs-6'><div style='font-size:20px; font-weight:bold;'>" + dollar0(maxOffer) + "</div><label>Max Allowable Offer</label></div>";
	result += "<div class='col-xs-6'><div style='font-size:20px; font-weight:bold;'>" + dollar0(firstOffer) + "</div><label>First Offer (MAO less 15%)</label></div>";

	result += "</div>"

	outputBox.html(result);
	onResize();
}


// Landlord Methods //

function onClearB(){
	$('#aic').val("");
	$('#grossMonthly').val("");
	$('#expenses').val("");
	$('#assignmentFeeB').val("");
}

function setDefaultB(){
	$('#aic').val("120000");
	$('#grossMonthly').val("2000");
	$('#expenses').val("1000");
	$('#assignmentFeeB').val("5000");
}

function onSubmitB(){
	var result = "";
	var aic = 1 * $('#aic').val();
	var grossMonthly = 1 * $('#grossMonthly').val();
	var expenses = 1 * $('#expenses').val();
	var assignmentFee = 1 * $('#assignmentFeeB').val();
	
	var outputBox = $('#outputB');
	var roi = 12*(grossMonthly - expenses) / (aic + assignmentFee) ;
	
	result = "<div class='row'>";
	
	result += "<div class='col-sm-3 col-xs-6'><b>" + dollar0(aic) + "</b>";
	result += "<label>All In Cost</label></div>";
	result += "<div class='col-sm-3 col-xs-6'><b>" + dollar0(grossMonthly) + "</b>";
	result += "<label>Gross Income</label></div>";
	result += "<div class='col-sm-3 col-xs-6'><b>" + dollar0(expenses) + "</b>";
	result += "<label>Expenses</label></div>";
	result += "<div class='col-sm-3 col-xs-6'><b>" + dollar0(assignmentFee) + "</b>";
	result += "<label>Assignment</label></div>";
	result += "<div class='col-sm-12' style='margin-top:12px;'></div>";
	
	result += "<div class='col-sm-12' style='font-size:12px;'><b>Buyer's Annual ROI</b> = <br>[ (Gross Income) - (Expenses) ] &nbsp;/&nbsp; [ (All In Cost) + (Assignment Fee) ]</div>";
	result += "<div class='col-sm-12' style='font-size:12px;'></div>";
	result += "<div class='col-sm-12' style='margin-top:8px;'></div>";
	
	result += "<div class='col-sm-12'><div style='font-size:20px; font-weight:bold;'>" + (roi*100).toFixed(1) + "%</div></div>";
	result += "<div class='col-sm-12'><label>Buyer's Annual<br>Return On Investment</label></div>";

	result += "</div>"

	outputBox.html(result);
	onResize();
}
