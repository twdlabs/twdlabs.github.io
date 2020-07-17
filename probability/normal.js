

// 
function onClear(){
	// Clear inputs. 
	$('#iterations').val('');
	// Clear and hide outputs. 
	$('#outputBox').html('&nbsp;').slideUp();
	$('#snackbar').html('&nbsp;').fadeOut();
}

// 
function setDefault(){
	$('#iterations').val('3');
}

// 
function deriveDistribution(){
	var numLevels = 1 * $('#iterations').val();
	var length = Math.pow(2,numLevels);

	var perms = [];
	var netPosition = [];

	var frequency = [];
	var minimum = 0, maximum = 0;

	var resultA = "<div class='row heading'> <div class='col-xs-6'>Pattern</div> <div class='col-xs-6'>Net Position</div> </div>";
	var resultB = "<div class='row heading right'> <div class='col-xs-4 center'>Position</div> <div class='col-xs-4'>Frequency</div> <div class='col-xs-4'>Proportion</div> </div>";
	resultB += "<div class='row right'> <div class='col-xs-4 center'>" + "---------------" + "</div> <div class='col-xs-4'>" + "---------------" + "</div> <div class='col-xs-4'>" + "---------------" + "</div> </div>";

	for (var i=0; i<length; i++) {
		var p = '';
		var netCount = 0;

		for (var j=numLevels-1; j>=0; j--) {
			if( digitAtPos(i,j) ) {
				p += '<span class="r">';
				p += 'R';
				p += '</span>';
				netCount += +1;
			}
			else {
				p += '<span class="l">';
				p += 'L';
				p += '</span>';
				netCount += -1;
			}
		}

		if(netCount<minimum) minimum = netCount;
		if(netCount>maximum) maximum = netCount;

		resultA += "<div class='row'> <div class='col-xs-6'>" + p + "</div> <div class='col-xs-6 center'>" + netCount + "</div> </div>";

		perms.push(p);
		netPosition.push(netCount);
	}

	for (var i=minimum; i<=maximum; i+=2) {
		var abs = getFrequencyOf(i);
		var rel = abs / length;
		frequency.push( [i, abs, rel] );
	}

	for (var i=0; i<frequency.length; i++) {
		resultB += "<div class='row'> <div class='col-xs-4 center'>" + frequency[i][0] + "</div> <div class='col-xs-4 right'>" + frequency[i][1] + "</div> <div class='col-xs-4 right'>" + percent(frequency[i][2]) + "</div> </div>";
	}
	resultB += "<div class='row right'> <div class='col-xs-4 center'>" + "---------------" + "</div> <div class='col-xs-4'>" + "---------------" + "</div> <div class='col-xs-4'>" + "---------------" + "</div> </div>";
	resultB += "<div class='row heading right'> <div class='col-xs-4 center'>" + "Total" + "</div> <div class='col-xs-4'>" + length + "</div> <div class='col-xs-4'>" + percent(1.00) + "</div> </div>";

	$('#outputBox').html( "<p>" + resultB + "</p><p>" + resultA + "</p>").slideDown();
	// longToast("numLevels: " + numLevels + "\n" + "length: " + length);

	/*****/

	function digitAtPos(a,b) {
		return a & Math.pow(2,b); 
	}


	function getFrequencyOf(x) {
		var count = 0;
		for (var i=0; i<netPosition.length; i++) {
			if(x==netPosition[i]) count++;
		}
		return count;
	}

	function percent(x) {
		return (100*x).toFixed(1) + '%';
	}
}


// 
function onClearZ(){
	// Clear inputs. 
	$('#mu').val('');
	$('#sigma').val('');
	$('#testValue').val('');
	// Clear and hide outputs. 
	$('#outputBox').html('&nbsp;').slideUp();
	$('#snackbar').html('&nbsp;').fadeOut();
}

// 
function setDefaultZ(){
	$('#mu').val('100');
	$('#sigma').val('15');
	$('#testValue').val('150');
}

// 
function testValue(){
	var mu = $('#mu').val();
	var sigma = $('#sigma').val();
	var X = $('#testValue').val();
	var Z = (X-mu)/sigma;
	var percentile = 0;

	// percentile = 100*percentile(Z);

	var output = '';
	output +=  'x = <i>&mu;</i> + <i>&sigma;</i> &bull; z&nbsp;&nbsp;&equals;&gt;&nbsp;&nbsp;';
	output +=  'z = (x &minus; <i>&mu;</i>) / <i>&sigma;</i><br>';
	output += '<i>&mu;</i> = <b>'+mu + '</b><br>';
	output += '<i>&sigma;</i> = <b>'+sigma + '</b><br>';
	output += 'x = <b>'+X + '</b>&nbsp;&nbsp;&equals;&gt;&nbsp;&nbsp;';
	output += 'z = <b>' + Z.toFixed(4) + '</b>&nbsp;&nbsp;&nbsp;&nbsp;<br>';
	output += 'Test value <b>'+X+'</b> is about <b>' + Z.toFixed(2) + '</b> standard deviations from the mean, which makes it greater than about <b>'+(100*probabilityLessThan(Z)).toFixed(3)+'%</b> of the population.<br>';

	$('#outputBox').html(output).slideDown();
	// longerToast(output);

	function percentile() {
		return 0;
	}
}

