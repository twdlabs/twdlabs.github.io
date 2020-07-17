
var doBmi = true;
var kgperlb = .45359237;	// kilograms per pound
var mperin = .0254;			// meters per inch
var mpercm = .01;			// meters per centimeter

function onClear() {
	$('#height').val("");
	$('#weight').val("");
	$('#bmi').val("");
	$('#outputBox').slideUp().html('&nbsp;');
}

function setDefault() {
	$('#height').val( document.getElementById('height').placeholder );
	$('#weight').val( document.getElementById('weight').placeholder );
	$('#bmi').val( document.getElementById('bmi').placeholder );
}

function onSubmit() {
	var output = "", result;
	var height, weight, bmi;
	var hFactor, wFactor;

	if( $('#heightInInches').prop('checked') ) hFactor = mperin;
	else if( $('#heightInCentimeters').prop('checked') ) hFactor = mpercm;
	else if( $('#heightInMeters').prop('checked') ) hFactor = 1;
	else {
		alert("Please select a unit for height.");
		return;
	}

	if( $('#weightInPounds').prop('checked') ) wFactor = kgperlb;
	else if( $('#weightInKilograms').prop('checked') ) wFactor = 1;
	else {
		alert("Please select a unit for weight.");
		return;
	}

	height = 1*$('#height').val();
	weight = 1*$('#weight').val();
	bmi = 1*$('#bmi').val();

	
	if(doBmi) {
		// toast('Calculating BMI...');

		if(!height || !weight) {
			toast('Invalid input detected. Try again.');
			return;
		}

		result = calcBmi(hFactor*height,wFactor*weight);	// inches into meters, pounds into kilograms

		output += "BMI: <br><div class='result'>" + result.toFixed(1) + " <small>kg/m<sup>2</sup></small></div>";
	}	
	else {
		// toast('Calculating weight...');

		if(!height || !bmi) {
			toast('Invalid input detected. Try again.');
			return;
		}

		result = calcWeight(hFactor*height,bmi) / wFactor;	// inches into meters

		output += "Weight: <br><div class='result'>" + result.toFixed(1) + " <small>lbs</small> </div>";
	}

	$('#outputBox').html(output).slideDown();

	// Calculate BMI using given height and given weight.
	function calcBmi(h,w) {
		return w / (h*h) ;
	}
	// Calculate weight using given height and given BMI.
	function calcWeight(h,b) {
		return b * (h*h) ;
	}
}

function toggleStrategy(choice){
	doBmi = choice;
	if(choice) {
		$('.B').hide(); 
		$('.A').show();
	}
	else if(!choice) {
		$('.A').hide(); 
		$('.B').show();
	}
}
