
function onClear(){
	//$('.output-row').slideUp(1000)
	document.getElementById('purchasePrice').value = "";
	document.getElementById('ltvRatio').value = "";
	document.getElementById('loanPoints').value = "";
	document.getElementById('rehabCost').value = "";
	document.getElementById('assignmentFee').value = "";
	document.getElementById('marketValue').value = "";
	$('.output-row').slideUp(1000);
	// $('.output-row #textOutput').slideUp(1000);
	$('.output-row #textOutput .result').html('');
	$('.output-row #purchaseBar .innerBar').css('width', 0);
	$('.output-row #purchaseBar .innerBar label').html('');
}

function setDefault(){
	document.getElementById('purchasePrice').value = "104550";
	document.getElementById('ltvRatio').value = "65";
	document.getElementById('loanPoints').value = "2.5";
	document.getElementById('rehabCost').value = "19000";
	document.getElementById('assignmentFee').value = "4400";
	document.getElementById('marketValue').value = "187000";
}

function onSubmit(){
	var purchasePrice = 1 * document.getElementById('purchasePrice').value;
	var ltv = 1 * document.getElementById('ltvRatio').value / 100;
	var loanPointsPct = 1 * document.getElementById('loanPoints').value / 100;
	var rehabCost = 1 * document.getElementById('rehabCost').value;
	var assignmentFee = 1 * document.getElementById('assignmentFee').value;
	var marketValue = 1 * document.getElementById('marketValue').value;
	
	if(purchasePrice<0 || ltv<0 || loanPointsPct<0 || rehabCost<0 || assignmentFee<0 || marketValue<0){
		var ids = ['#purchasePrice', '#ltvRatio', '#loanPoints', '#rehabCost', '#assignmentFee', '#marketValue'];
		var inputs = [purchasePrice, ltv, loanPointsPct, rehabCost, assignmentFee, marketValue<0];
		
		for(var x=0 ; x<ids.length ; x++){
			if(inputs[x]<0) $(ids[x]).css('border-color','red');
			showToast("Invalid input "+ids[x]+". Try again.");
		}
		return;
	}
	$('input[type=number]').css('border-color','#888');
	
	var downPayment = (1-ltv) * purchasePrice;
	var loanAmount = ltv * purchasePrice;
	var loanPointsFee = loanPointsPct * loanAmount;
	var allInCost = purchasePrice + rehabCost + loanPointsFee + assignmentFee;
	var purchaseRatio = allInCost / marketValue;
	var potentialProfit = marketValue - allInCost;
	
	var textOutput = "";
	textOutput += "<div class='row'>";
	textOutput += "<div class='col-xs-6'>Down Payment:</div> <div class='col-xs-6 result'>" + dollar(downPayment) + "</div>";
	textOutput += "</div> <div class='row'>";
	textOutput += "<div class='col-xs-6'>Loan Amount:</div> <div class='col-xs-6 result'>" + dollar(loanAmount) + "</div>";
	textOutput += "</div> <div class='row'>";
	textOutput += "<div class='col-xs-6'>Loan Points Fee:</div> <div class='col-xs-6 result'>" + dollar(loanPointsFee) + "</div>";
	textOutput += "</div> <br/> <div class='row'>";
	textOutput += "<div class='col-xs-6'>All In Cost:</div> <div class='col-xs-6 result'>" + dollar(allInCost) + "</div>";
	textOutput += "</div> <div class='row'>";
	textOutput += "<div class='col-xs-6'>Purchase Ratio:</div> <div class='col-xs-6 result'>" + (purchaseRatio*100).toFixed(1) + "%</div>";
	textOutput += "</div> <div class='row'>";
	textOutput += "<div class='col-xs-6'>Potential Profit:</div> <div class='col-xs-6 result'>" + dollar(potentialProfit) + "</div>";
	textOutput += "</div>";
	
	$('#loanBar').css( {'width':(100*ltv)+'%' , 'font-size':'8px'} );
	$('#loanBar label').html( (100*ltv).toFixed(0)+'% LTV' )
	$('#dpBar').css( {'width':(100*(1-ltv))+'%' , 'font-size':'8px'} );
	$('#dpBar label').html( (100*(1-ltv)).toFixed(0)+'% DP' )
	
	$('.output-row #textOutput').html(textOutput);//.slideDown(1000);
	$('.output-row').slideDown(1000);
}

function openPopupBox(){
	$('#popupContainer').fadeIn(1000);
}

function produceReport(){
	$('#reportText').html("Hello");
}

function closePopupBox(){
	$('#popupContainer').fadeOut(1000);
}
