


var waitingToStartGame = true;
var gameOver = true;
var participantAmounts;
var startingAmount, population, numTransactions, betAmount, weightedGame = true;
var totalTransactions;
var numOfBins, binBoundaries, binCount;
var loaderTime = 250;
var varChecker;
var doAnimations = true;



//////////////////////////////
// Clear user input fields. //
//////////////////////////////
function onClear0() {
	$('#startAmount').val('');
	$('#population').val('');
}


//////////////////////////////////////////////
// Insert default values into input fields. //
//////////////////////////////////////////////
function setDefault0() {
	$('#startAmount').val( document.getElementById('startAmount').placeholder );
	$('#population').val( document.getElementById('population').placeholder );
}


//////////////////////////////
// Clear user input fields. //
//////////////////////////////
function onClear() {
	$('#numTransactions').val('');
	$('#betAmount').val('');
	document.getElementById("matthewMode").checked = false;
}


//////////////////////////////////////////////
// Insert default values into input fields. //
//////////////////////////////////////////////
function setDefault() {
	$('#numTransactions').val( document.getElementById('numTransactions').placeholder );
	$('#betAmount').val( document.getElementById('betAmount').placeholder );
	document.getElementById("matthewMode").checked = true;
}


///////////////////////////////////////////////
// Reset the game to its initial conditions. //
///////////////////////////////////////////////
function onReset() {
	totalTransactions = 0;
	gameOver = false;

	// Update the traffic light indicator. 
	$('#gameLight').css('background-color','#FFC107');

	// Reset all game data to initial state. 
	participantAmounts = [], binCount = [], binBoundaries = [];
	getSetupInput();
	// Start with a society of people, everyone starting with the exact same dollar amount. 
	for(var i=0 ; i<population ; i++) {
		participantAmounts.push(startingAmount);
	}

	updateGraph(25,1000);
	updateChart();
	updateOutput();

	waitingToStartGame = false;

	varChecker = setInterval(function(){
		// alert("alert");
		$('#varA').html(startingAmount);
		$('#varB').html(population);
		$('#varC').html(numTransactions);
		$('#varD').html(betAmount);
		$('#varE').html(""+weightedGame);
		$('#varF').html(totalTransactions);
		$('#varG').html(""+gameOver);
	}, 1000 );

	// Re-enable all game inputs.
	enableGameInput();

	// Re-caption the reset button. 
	$('#resetBtn').html('Reset');

	//*****//

	function getSetupInput() {
		// Save user input into appropriate variables.
		inputA = $('#startAmount').val();
		inputB = $('#population').val();
		if (inputA && inputB){
			startingAmount = 1*inputA;
			population = 1*inputB;
			/*
			var msg = "User Input";
			msg += "\nstartingAmount: "+startingAmount;
			msg += "\npopulation: "+population;
			alert(msg);*/
		}
		else {
			startingAmount = 1*document.getElementById('startAmount').placeholder;
			population = 1*document.getElementById('population').placeholder;
			$('#startAmount').val(startingAmount);
			$('#population').val(population);
			alert("Invalid input. Now using default values.");
		}
	}
	// Re-enable the inputs at the end of the game. 
	function enableGameInput() {
		$('#betAmount').removeAttr('disabled');
		$('#matthewMode').removeAttr('disabled');
		$('#clearBtn').removeAttr('disabled');
		$('#exampleBtn').removeAttr('disabled');
	}
}


///////////////////////////////////////////////////////
// Start the game with the given initial conditions. //
///////////////////////////////////////////////////////
function runTheGame() {
	// Stop game from running if initial conditions haven't been set beforehand. 
	if(gameOver) {
		toast('Game is not active. Set initial conditions for new game.');
		return;
	}

	// Update the traffic light indicator. 
	$('#gameLight').css('background-color','#7FFF94');

	// Show load screen.
	openLoader();

	// Get user input and update graph
	getGameInput();
	disableGameInput();

	// Play the numerous iterations of the game.
	for(var i=0 ; i<numTransactions ; i++) {
		do {
			idA = randomPerson();
			idB = randomPerson();
		} while( participantAmounts[idA]<=0 || participantAmounts[idB]<=0 )

		betIteration(idA, idB, betAmount);
		// updateGraph(25,500);	// 
		// updateChart()
		// updateOutput();		// 
		if(gameOver) {
			endTheGame();
			break;
		} 
	}
	totalTransactions += 1*i;

	// Sort the wealth distribution from richest to poorest.
	participantAmounts.sort( function(a,b){ return (a-b) } ).reverse();

	// Display the results: (1) histogram bar graph (2) distribution details.
	updateGraph(25,500);
	updateChart();
	updateOutput();

	// Hide load screen.
	closeLoader(loaderTime);

	//*****//

	// Show the load screen. 
	function openLoader() {
		$('#loadingScreen').css('display','block');
	}

	// Hide the load screen. 
	function closeLoader(closeBuffer) {
		setTimeout(function(){
			$('#loadingScreen').css('display','none');
		} , closeBuffer);
	}

	// Save user input into appropriate variables.
	function getGameInput() {
		inputA = $('#numTransactions').val();
		inputB = $('#betAmount').val();
		if (inputA && inputB){
			numTransactions = 1*inputA;
			betAmount = 1*inputB;
			weightedGame = $('#matthewMode').prop('checked');
			doAnimations = $('#doAnimations').prop('checked');
			/*
			var msg = "User Input";
			msg += "\nnumTransactions: "+numTransactions;
			msg += "\nbetAmount: "+betAmount;
			msg += "\nweightedGame: "+weightedGame;
			alert(msg);*/
		}
		else {
			numTransactions = 1*document.getElementById('numTransactions').placeholder;
			betAmount = 1*document.getElementById('betAmount').placeholder;
			weightedGame = true;
			doAnimations = $('#doAnimations').prop('checked');
			$('#numTransactions').val(numTransactions);
			$('#betAmount').val(betAmount);
			$('#matthewMode').prop('checked',weightedGame);
			alert("Invalid input. Now using default values.");
		}
	}

	// Disable certain inputs to keep each game's rules consistent.
	function disableGameInput() {
		$('#betAmount').attr('disabled','true');
		$('#matthewMode').attr('disabled','true');
		$('#clearBtn').attr('disabled','true');
		$('#exampleBtn').attr('disabled','true');
	}

	// Random number generator: 0 to (population-1).
	function randomPerson() {
		return Math.floor( Math.random() * population ) ;
	}

	// Run one iteration of this game's bets.
	function betIteration(idA, idB, bet) {
		var flip, winnersPot;
		var msg = "Start \nparticipantAmounts("+idA+") "+dollar0(1*participantAmounts[idA])+" \nparticipantAmounts("+idB+") "+dollar0(1*participantAmounts[idB])+". \n";

		// The game ends when one person has all the money. 
		if( participantAmounts[0] >= (startingAmount*population) ) {
			gameOver = true;
			return;
		}
		// Play the round only if there are two different players that both have money.
		if( idA==idB || participantAmounts[idA]<=0 || participantAmounts[idB]<=0 ) return;

		// Each player puts money in the pot. 
		participantAmounts[idA] -= bet;
		participantAmounts[idB] -= bet;
		winnersPot = 2*bet;


		// Each round's outcome is based on the relative wealth btwn the players involved. (Matthew principle)
		if(weightedGame){
			var weightA = participantAmounts[idA] / (1*participantAmounts[idA] + 1*participantAmounts[idB]);
			// Resort to 50/50 if they both have 0.
			if(!weightA) weightA = .5; 
			
			// Flip the coin. Winner takes all bets. 
			flip = weightedCoinFlip();
			if(flip < weightA) {
				participantAmounts[idA] += winnersPot;
			}
			else if(flip > weightA) {
				participantAmounts[idB] += winnersPot;
			}
			else { /*Possible but highly unlikely condition (flip == weightA)*/
				msg += "\nBets In \nA "+dollar0(1*participantAmounts[idA])+"   B "+dollar0(1*participantAmounts[idB])+"\n";
				msg += "Bet:"+dollar0(1*bet)+"ea. Winner's Pot:"+dollar0(1*winnersPot)+". \n"
				msg += "\nFlip = "+flip + "  weightA = "+weightA + "\n";
				msg += "Draw. Both parties get their money back. \n"
				participantAmounts[idA] += bet;
				participantAmounts[idB] += bet;
				msg += "\nCurrent State \nA:"+dollar0(1*participantAmounts[idA])+"   B:"+dollar0(1*participantAmounts[idB])+". \n";
				alert(msg)
			}
		}
		// Each round's outcome is randomly determined by a coin flip.
		else {
			// Flip the coin. Winner takes all bets. 
			flip = simpleCoinFlip();
			if(flip==0) {
				participantAmounts[idA] += winnersPot;
			}
			else if(flip==1) {
				participantAmounts[idB] += winnersPot;
			}
			else { /*Possible but highly unlikely condition (flip == weightA)*/
				participantAmounts[idA] += bet;
				participantAmounts[idB] += bet;
				alert("Error in coin toss. Iteration skipped and money returned.")
			}
		}

		//*****//

		// Random integer generator: 0 or 1.
		function simpleCoinFlip() {
			return Math.floor( Math.random() * 2 ) ;
		}
		// Random integer generator: 0.000 (inclusive) thru 1.000 (exclusive).
		function weightedCoinFlip() {
			return Math.random();
		}
	}

	// End the game. 
	function endTheGame() {
		// Update the traffic light indicator. 
		$('#gameLight').css('background-color','red');
		// Stop the variable updater. 
		setTimeout( function(){
			alert("Game Over\nAfter "+totalTransactions+" rounds");
			clearInterval(varChecker);
		} , 1000 )
	}
}


/////////////////////////////////////////////
// Update the graph with the current data. //
/////////////////////////////////////////////
function updateChart() {
	// Skip the graph update if no data is available. 
	if(!participantAmounts) { toast("No data available. Setup game first."); return; }

	var maxDollar = maxValue(participantAmounts);
	maxDollar = (population*startingAmount);

	/*****/

	var ctx = document.getElementById('paretoChart').getContext('2d');
	var chartData = {};
	chartData.type = 'bar';
	chartData.data = {}
	chartData.data.labels = [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ];
	chartData.data.datasets = [];
	chartData.data.datasets[0] = {}
	chartData.data.datasets[0].label = '# of people';
	chartData.data.datasets[0].backgroundColor = 'rgba(0,136,255,0.75)';
	chartData.data.datasets[0].data = [ 0, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	// var chartData = {
	// 	type:'line',
	// 	type:'bar',
	// 	data:{
	// 		labels:[ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
	// 		datasets:[
	// 			{
	// 				label:'# of people',
	// 				backgroundColor:'rgba(0,136,255,0.75)',
	// 				data: [ 0, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
	// 			}
	// 		]
	// 	}
	// };

	// Add the population data
	let dataArray = chartData.data.datasets[0].data;
	dataArray = [];
	for(var i=0 ; i<participantAmounts.length ; i++) {
		if(participantAmounts[i]===0) {
			if(dataArray[0]) dataArray[0]++;
			else dataArray[0] = 1;
		}
		// If the data point already exists, just add to it. 
		else if(dataArray[ participantAmounts[i] ]) {
			dataArray[ participantAmounts[i] ]++;
		}
		// If the data point doesn't exist, create a new one
		else {
			dataArray[ participantAmounts[i] ] = 1;
		}
	}

	// Add labels for the chart
	chartData.data.labels = [];
	for(var i=0 ; i<maxDollar ; i++) {
		chartData.data.labels[ participantAmounts[i] ]++;
	}

	// Populate chart. 
	var paretoChart = new Chart(ctx, chartData);

	/*****/

	function maxValue(array) {
		var max = 0;
		// Go thru the array starting with the last item in the array. 
		for (var i=array.length-1 ; i>=0 ; i--) {
			if(array[i]>max) max = array[i];
		}
		return max;
	}
}
// dx = the width of each given bin
// dt = 
function updateGraph(dx,dt) {
	// Skip the graph update if no data is available. 
	if(!participantAmounts) { toast("No data available. Setup game first."); return; }

	var maxDollar = maxValue(participantAmounts);
	maxDollar = (population*startingAmount);
	numOfBins = 2 + Math.ceil(maxDollar / dx);	// Intermediate bins + 2 extras: (1) below the min, and (2) above the max.

	// toast("maxDollar: "+dollar0(maxDollar));
	
	// Initiate the bin intervals based on the given bin width and the number of bins. 
	// binBoundaries = [ 0 , 25,50,75,100 , 125,150,175,200 , 225,250,275,300 , inf ];
	binBoundaries = [];
	for(var i=0 ; i<(numOfBins-1) ; i++) {
		binBoundaries.push(dx*i);
	}
	
	// Initiate all bin counters to 0. 
	binCount = [];
	for(var j=0 ; j<numOfBins ; j++) {
		binCount.push(0);
	}

	// Put people into specific bin/category based on their current wealth. 
	// Each bin includes all the people up to and including that bin interval, excluding those in previous bins.
	for(var x=0 ; x<participantAmounts.length ; x++) {
		var abc = participantAmounts[x];
		//////////////////////////////////////////////////////////////////////////////////////////////
		var looking = true;
		if(abc<=binBoundaries[0]) {
			binCount[0]++;
			looking = false;
		}
		for(var y=1 ; y<(numOfBins-1) ; y++) {
			// if(!looking) break;
			if(abc>binBoundaries[y-1]&&abc<=binBoundaries[y]) {
				binCount[y]++;
				looking = false;
			}
		}
		if(looking && abc>binBoundaries[numOfBins-2]) {
			binCount[numOfBins-1]++;
			looking = false;
		}
		if(looking) alert("Error in graphing data for participantAmounts["+x+"].");
		//////////////////////////////////////////////////////////////////////////////////////////////
			//////////////////////////////////////////////////////////////////////////////////////////////
			// How can I turn this into a loop ? 
			// Preferably, a loop with an arbitrary number of iterations based on the numOfBins variable. 
			/* if(abc <= binBoundaries[0])					binCount[0]++;
			else if(abc>binBoundaries[0] && abc<=binBoundaries[1])	binCount[1]++;
			else if(abc>binBoundaries[1] && abc<=binBoundaries[2])	binCount[2]++;
			else if(abc>binBoundaries[2] && abc<=binBoundaries[3])	binCount[3]++;
			else if(abc>binBoundaries[3] && abc<=binBoundaries[4])	binCount[4]++;
			else if(abc>binBoundaries[4] && abc<=binBoundaries[5])	binCount[5]++;
			else if(abc>binBoundaries[5] && abc<=binBoundaries[6])	binCount[6]++;
			else if(abc>binBoundaries[6] && abc<=binBoundaries[7])	binCount[7]++;
			else if(abc>binBoundaries[7] && abc<=binBoundaries[8])	binCount[8]++;
			else if(abc>binBoundaries[8] && abc<=binBoundaries[9])	binCount[9]++;
			else if(abc>binBoundaries[9] && abc<=binBoundaries[10])	binCount[10]++;
			else if(abc>binBoundaries[10] && abc<=binBoundaries[11])binCount[11]++;
			else if(abc>binBoundaries[11] && abc<=binBoundaries[12])binCount[12]++;
			else if(abc>binBoundaries[12])					binCount[13]++;
			else alert("Error in graphing data for participantAmounts["+x+"]."); */
			//////////////////////////////////////////////////////////////////////////////////////////////
	}
	
	// Build the visual graph data inside some string arrays. 
	let bGraph = '', bLabels = '';
	let width = 100 / numOfBins;
	for (let i=0 ; i<numOfBins ; i++) {
		bGraph += '<div class="bar" style="width:'+width+'%">';
			bGraph += '<div class="barDigits"></div>';
		bGraph += '</div>';
		if(binBoundaries[i] || binBoundaries[i]==0) {
			bLabels += '<div class="barLabel" style="width:'+width+'%">'+binBoundaries[i]+'</div>';
		}
	}
	
	if(waitingToStartGame) {
		// Refresh with new data.
		insertBars(bGraph,bLabels);
	}
	else {
		// Animate all graph data to 0 before refreshing with new data.
		if(doAnimations) $('#histogram #barGraph .bar').animate( {height:0} , dt , insertBars );
		else {
			$('#histogram #barGraph .bar').height(0);
			insertBars(bGraph,bLabels);
		}
	}

	/*****/

	// $('#output').html( '<span style="text-align:left;"">'+ checkGraphData('<br>') +'</span>' );
	// alert( checkGraphData('\n') );
	// var msg = '[' + binBoundaries + ']';
	// msg += '<br>binBoundaries.length = '+binBoundaries.length;
	// msg += '<br>';
	// msg += '<br>[' + binCount + ']';
	// msg += '<br>binCount.length = '+binCount.length;
	// longerToast(msg);

	/*****/

	function maxValue(array) {
		var max = 0;
		// Go thru the array starting with the last item in the array. 
		for (var i=array.length-1 ; i>=0 ; i--) {
			if(array[i]>max) max = array[i];
		}
		return max;
	}

	function insertBars(bGraph,bLabels) {
		// Insert the visual graph data into the page with height animation. 
		$('#histogram #barGraph').html(bGraph); 
		$('#histogram #barLabels').html(bLabels);

		var graphHeight = 400, maxCount = maxValue(binCount);
		for(var k=0 ; k<binCount.length ; k++) {
			var barSelector = '#histogram #barGraph .bar:nth-of-type('+(k+1)+')';
			var barHeight = graphHeight * binCount[k] / maxCount;

			if(doAnimations) $(barSelector).animate( {height:barHeight} , dt );
			else $(barSelector).height(barHeight);

			if(doAnimations) countThisTo( binCount[k] , dt , barSelector + ' .barDigits' );
			else $(barSelector + ' .barDigits').html(binCount[k]);
		}
	}

	function countThisTo(destination, duration, selector) {
		if(destination==0) {
			$(selector).html(destination);
			return;
		}

		var dt = duration/destination;
		var i = 0;
		countNumber();
		function countNumber() {
			if(i <= destination) {
				$(selector).html(i);
				i++
				setTimeout(countNumber, dt);
			}
		}
	}
}


///////////////////////////////////////////////////////////////////////////////
// Show the distribution of wealth, including the wealth of each individual. //
///////////////////////////////////////////////////////////////////////////////
function updateOutput(label){
	var result = '';
	result += '<!-- row -->';
	result += '<div class="row">';
		result += '<div class="col-12">';
			result += '<h1 style="font-size:2em;">Distribution</h1>';
		result += '</div>';
		result += '<div class="col-4">';
			result += '<div>Population</div>';
			result += '<div class="bold">' + population + '</div>';
		result += '</div>'
		result += '<div class="col-4">';
			result += '<div>Total Transactions</div>';
			result += '<div class="bold">' + totalTransactions + '</div>';
		result += '</div>'
		// result += '<div class="col-3">';
			// result += '<div>Bet Amount</div>';
			// result += '<div class="bold">' + betAmount + '</div>';
		// result += '</div>';
		result += '<div class="col-4">';
			result += '<div>Start Amount</div>';
			result += '<div class="bold">' + dollar0(1*startingAmount);
		result += '</div>';
	result += '</div>';
	result += '<!-- /row -->';

	var totalEconomy = countEconomy();
	var topOnePercent = countTopOnePercent();

	result += '<!-- row -->';
	result += '<div class="row">';
		result += '<div class="col-12">';
			result += 'Total Economy: '+ dollar0(totalEconomy) + '<br>';
		result += '</div>';
		result += '<div class="col-12">';
			result += 'Top 1%: '+ dollar0(topOnePercent);
		result += '</div>';
		result += '<div class="col-12">';
			if(totalEconomy>0) result += 'The top 1% of people have '+ (100*topOnePercent/totalEconomy).toFixed(1) + '% of the money';
		result += '</div>';
	result += '</div>';
	result += '<!-- /row -->';

	result += '<!-- row -->';
	result += '<div class="row">';
	for (var i=0 ; i<participantAmounts.length ; i++) {
		result += '<div class="col-12">';
		result += 'person['+i+']: ';
		result += '<span class="bold">' + dollar0(participantAmounts[i]) + '</span>';
		result += '</div>';
	}
	result += '</div>';
	result += '<!-- /row -->';
	
	$('#output').html( result );
	//alert( result );

	//*****//

	function countEconomy() {
		var total = 0;
		for (var i=0 ; i<participantAmounts.length ; i++) {
			total += 1*participantAmounts[i];
		}
		return total;
	}
	function countTopOnePercent() {
		var total = 0;
		for (var i=0 ; i<participantAmounts.length/100 ; i++) {
			total += 1*participantAmounts[i];
		}
		return total;
	}
}

function checkGraphData(brLine) {
	if(binCount) {
		var result = "Graph Data";
		for(var i=0 ; i<numOfBins ; i++) {
			result += brLine;
			result += "["+i+"]: " + binCount[i];
		}
	}
	else {
		result = "No graph data available. Start game first."
	}
	return result;
}

