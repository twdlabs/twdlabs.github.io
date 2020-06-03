

window.onload = function(){
	for(let i=1 ; i<=18 ; i++) {
		// Assign the table row to a variable
		let row = document.getElementById('row'+i);
		let td = row.children[4];

		let plusBtn = td.children[0];
		let minusBtn = td.children[1];
		let clearBtn = td.children[2];

		// Assign add1() function to the + button. 
		plusBtn.onclick = function(){add1(row);}

		// Assign subtr1() function to the - button. 
		minusBtn.onclick = function(){subtr1(row);}

		// Assign resetScore() function to the c button. 
		clearBtn.onclick = function(){resetScore(row);}
	}
}

// Add 1 point to the score. 
function add1(row) {
	console.log("Adding 1 to "+row.id);

	var par = Number.parseInt(row.children[1].innerHTML);
	var scoreTD = row.children[2];
	var overTD = row.children[3];

	// Update the score.
	var newScore;
	if(scoreTD.innerHTML=='-') newScore = 1;
	else newScore = Number.parseInt(scoreTD.innerHTML) + 1;
	scoreTD.innerHTML = newScore;

	// Update the number over par.
	// if(newScore>par) overTD.innerHTML = newScore - par;
	// else overTD.innerHTML = '-';
	overTD.innerHTML = newScore - par;

	// Highlight birdies and bogeys. 
	checkStatus(row);

	// Update the totals.
	updateTotals();
}

// Subtract 1 point from the score. 
function subtr1(row) {
	console.log("Subtracting 1 from "+row.id);

	var par = Number.parseInt(row.children[1].innerHTML);
	var scoreTD = row.children[2];
	var overTD = row.children[3];

	// Update the score.
	var newScore;
	if(scoreTD.innerHTML=='-') newScore = -1;
	else newScore = Number.parseInt(scoreTD.innerHTML) - 1;
	scoreTD.innerHTML = newScore;

	// Update the number over par.
	// if(newScore>par) overTD.innerHTML = newScore - par;
	// else overTD.innerHTML = '-';
	overTD.innerHTML = newScore - par;

	// Highlight birdies and bogeys. 
	checkStatus(row);

	// Update the totals.
	updateTotals();
}

// Reset the current score. 
function resetScore(row) {
	console.log("Clearing "+row.id);

	var par = Number.parseInt(row.children[1].innerHTML);
	var scoreTD = row.children[2];
	var overTD = row.children[3];

	// Reset the score.
	scoreTD.innerHTML = '-';

	// Reset the number over par.
	overTD.innerHTML = '-';

	// Un-highlight birdies and bogeys. 
	checkStatus(row);

	// Update the totals.
	updateTotals();
}

function checkStatus(row) {
	var over = Number.parseInt(row.children[3].innerHTML);

	var birdie = over==-1;
	var bogey = over==1;
	scoreTD = row.children[2];

	if(birdie) scoreTD.classList.add('circle');
	else scoreTD.classList.remove('circle');
	if(bogey) scoreTD.classList.add('square');
	else scoreTD.classList.remove('square');
}

function updateTotals() {
	// Intitalize all sum values to zero. 
	var allTotal = 0;
	var parTotal = 0;
	var scoreTotal = 0;
	var overTotal = 0;

	// Sum up values from each row to get totals. 
	for(let i=1 ; i<=18 ; i++) {
		let row = document.getElementById('row'+i);

		// Add to par total. 
		var parTD = row.children[1];
		if (parTD.innerHTML!='-') parTotal += Number.parseInt(parTD.innerHTML);

		// Add to score total. 
		var scoreTD = row.children[2];
		if (scoreTD.innerHTML!='-') scoreTotal += Number.parseInt(scoreTD.innerHTML);

		// Add to over total. 
		var overTD = row.children[3];
		if (overTD.innerHTML!='-') overTotal += Number.parseInt(overTD.innerHTML);
	}

	// Display the totals on the page. 
	document.getElementById('parTotal').innerHTML = parTotal;
	document.getElementById('scoreTotal').innerHTML = scoreTotal;
	document.getElementById('overTotal').innerHTML = overTotal;
}
