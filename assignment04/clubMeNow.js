
// var clubs = loadDistanceList();



//////////////////////////////////////////////
// ------ Functions (clubMeNow.html) ------ //
//////////////////////////////////////////////


// Initialize "clubs" array. 
function loadDistanceList() {
	var clubs;

	// Load from local storage if array already exists. 
	if(localStorage.getItem('clubsArray')) {
		clubs = JSON.parse( localStorage.getItem('clubsArray') );
	}
	// Create a new array otherwise.
	else {
		newDistanceList();
		clubs = JSON.parse( localStorage.getItem('clubsArray') );
	}

	return clubs;
}

// Add refreshed data to the table (whenever home screen in loaded). 
function refreshDistanceList() {
	// Select the HTML table. 
	var clubTable = document.getElementById('clubTable');

	// Append one row to table for each row in "clubs" array. 
	for (var i=0 ; i < clubs.length ; i++) {
		// Create an empty row (at the bottom). 
		var row = clubTable.insertRow(i+1);

		// Create an empty cell for each column. 
		var cell0 = row.insertCell(0);	// clubNameAbbrev
		var cell1 = row.insertCell(1);	// avgDist
		var cell2 = row.insertCell(2);	// minDist
		var cell3 = row.insertCell(3);	// maxDist
		var cell4 = row.insertCell(4);	// numOfShots
		var cell5 = row.insertCell(5);	// ("+" button)
		var cell6 = row.insertCell(6);	// clubName

		// Right align the appropriate cells. 
		cell0.className = 'CMN_hidden';					// clubAbbrev
		cell1.className = 'CMN_right CMN_fullHeight';	// avgDist
		cell2.className = 'CMN_right CMN_hidden';		// minDist
		cell3.className = 'CMN_right CMN_fullHeight';	// maxDist
		cell4.className = 'CMN_right CMN_hidden';		// numOfShots
		cell5.className = '';							// ("+" button)
		cell6.className = 'CMN_fullHeight';				// clubName

		// Populate table with data from "clubs" array. 
		cell0.innerHTML = clubs[i][1];				// clubAbbrev
		cell1.innerHTML = Math.round(clubs[i][3]);	// avgDist
		cell2.innerHTML = Math.round(clubs[i][4]);	// minDist
		cell3.innerHTML = Math.round(clubs[i][5]);	// maxDist
		cell4.innerHTML = Math.round(clubs[i][6]);	// numOfShots
		let plusBtn = '<button class="btn btn-success CMN_noPadding CMN_fullHeight" onclick="newDistance('+ i +');">&plus;</button>';
		cell5.innerHTML = plusBtn;					// ("+" button)
		cell6.innerHTML = clubs[i][2];				// clubName
		cell6.innerHTML = clubs[i][2] +', '+ clubs[i][7] + '&deg;';	// clubName
	}
}

// Create a new "clubs" array. 
function newDistanceList() {
	// Create new 2d array in global variable "clubs". 
	// Columns...
	// 0: Sort Position
	// 1: Club Name Abbreviation
	// 2: Club Name
	// 3: Average Distance
	// 4: Minimum Distance
	// 5: Maximum Distance
	// 6: Number Of Shots
	// 7: Loft / Degrees
	// 8: Typical (Men)
	// 9: Typical (Women)
	clubs = [
				[ 199, "Dr","Driver", 	0,0,0,0, 10.5,230,200],
				[ 300, "3+w","3+ wood", 0,0,0,0, 13.5,210,180],
				[ 350, "3h","3 hybrid", 0,0,0,0, 18.0,180,160],
				// [ 399, "3i","3 iron", 	0,0,0,0, 18.5,180,160],
				// [ 499, "4i","4 iron", 	0,0,0,0, 18.5,170,150],
				// [ 599, "5i","5 iron", 	0,0,0,0, 21.0,160,140],
				// [ 699, "6i","6 iron", 	0,0,0,0, 24.0,150,130],
				[ 799, "7i","7 iron", 	0,0,0,0, 27.0,140,120],
				[ 899, "8i","8 iron", 	0,0,0,0, 31.5,130,110],
				[ 999, "9i","9 iron", 	0,0,0,0, 36.0,120,100],
				[1099, "Pw","Pitching", 0,0,0,0, 41.0,110,90],
				[1199, "Aw","Approach", 0,0,0,0, 46.0,100,80],
				[1299, "Gw","Gap", 		0,0,0,0, 51.0,90,70],
				[1399, "Sw","Sand", 	0,0,0,0, 56.0,80,60],
				[1499, "Lw","Lob", 		0,0,0,0, 60.0,60,40],
				[1599, "Ptr","Putter", 	0,0,0,0, 60.0,3,3],
	];

	// Store the array in local storage. 
	var str = JSON.stringify(clubs);
	localStorage.setItem('clubsArray',str);

	// Refresh the screen. 
	window.location.href = "clubMeNow.html";
}



// Navigate to "Distance Entry" screen. 
function newDistance(i) {
	// Save the index of chosen club. 
	localStorage.setItem('clubIndex',i);
	// Redirect to the entry form. 
	window.location.href = "newDistance.html";
}


// Replace the current "clubs" array with the previous one. 
function undoLastShot() {
	// Confirm before undo. 
	var go = confirm('Are you sure you want to permanently undo the last shot?');
	if(!go) return;7 

	var str = localStorage.getItem('clubsArrayOld');
	clubs = JSON.parse(str);
}

// Navigate to "About" screen. 
function displayAbout() {
	window.location.href = "clubAbout.html";
}

// Navigate to "Penalty Info" screen. 
// TODO: Is this used ?
function displayPenaltyInfo() {
	window.location.href = "clubPenaltyInfo.html";
}

// TODO: Reset one specific club in the list. 
function resetOneClub(i) {
	// Confirm before reset. 
	var go = confirm('Are you sure you want to reset this club ?');
	if(!go) return;

}

// TODO: Remove one specific club in the list. 
function removeOneClub(i) {
	// Confirm before removal. 
	var go = confirm('Are you sure you want to permanently remove this club ?');
	if(!go) return;
	// 
}




////////////////////////////////////////////////
// ------ Functions (newDistance.html) ------ //
////////////////////////////////////////////////


// TODO: Add how many yards left/right of target, lie (fairway, rough, sand, trees). 
function addYardage() {}

// TODO: Error checking for distnaces > 400. 
function checkForNewDistanceErrors(shotDistance) {
	if (shotDistance>400) ;
	else ;
}


// Place precise numbers into stats table.
function populateStatsTable() {
	document.getElementById('CMN_club').innerHTML = '<strong>'+ Math.round(clubs[clubRow][1]) +'</strong>';
	document.getElementById('CMN_min').innerHTML = Math.round(clubs[clubRow][4]);
	document.getElementById('CMN_avg').innerHTML = '<strong>'+ Math.round(clubs[clubRow][3]) +'</strong>';
	document.getElementById('CMN_max').innerHTML = Math.round(clubs[clubRow][5]);
	document.getElementById('CMN_num').innerHTML = Math.round(clubs[clubRow][6]);
}

// Add fast-entry buttons for pre-set "realistic" distances (in decrements of 5 yards). 
function addTapEntryBtns() {
	// Set a reasonable range for the tapEntry buttons.
	var variation = 30;
	var avgPlus = Math.round( clubs[clubRow][3] + variation );
	var avgMinus = Math.max( avgPlus - 2*variation , 0 );
	if( Math.round(clubs[clubRow][3])==0 ) {
		avgPlus = 320;
		avgMinus = 0;
	}

	// Add buttons to newDistance entry page 
	var code = '';
	for (var i=320 ; i>0 ; i-=5) {
		
		if( Math.round(clubs[clubRow][3])==i ) {
			code += '<span class="CMN_green">';
			code += '<button class="CMN_noPadding CMN_fullHeight CMN_tapEntry CMN_bold" onclick="updateStats('+i+');">';
			code += i;
			code += '</button>';
			code += '</span>';
		}
		else {
			code += '<span>';
			code += '<button class="CMN_noPadding CMN_fullHeight CMN_tapEntry" onclick="updateStats('+i+');">';
			code += i;
			code += '</button>';
			code += '</span>';
		}
		
	}
	document.getElementById('CMN_tapEntryBtns').innerHTML = code;
}

// TODO: Update distances based on user-entered value (shotDistance). 
function updateStats(shotDistance=0) {
	// shotDistance can be user-entered by fast tap-entry button (shotDistance = s) or by typed input (shotDistance = 0). 

	// When the input is typed, save the given input. 
	if(shotDistance==0) shotDistance = parseInt( document.getElementById('clubVal').value );

	// Check for errors in input (distance > 400). 
	checkForNewDistanceErrors(shotDistance);

	if(parseInt(shotDistance) > 0) {
		// Save the current "clubs" array for "Undo" functionality. 
		var str = JSON.stringify(clubs);
		localStorage.setItem('clubsArrayOld', str)

		// Update average. 
		currentAvg = clubs[clubRow][3];
		currentNumShots = clubs[clubRow][6];
		newAvg = (currentAvg*currentNumShots + shotDistance) / (currentNumShots+1);
		clubs[clubRow][3] = newAvg;
		
		// Update shot count. 
		clubs[clubRow][6] += 1;
		
		// Update min. 
		if(clubs[clubRow][4]==0 || shotDistance<clubs[clubRow][4]) {
			clubs[clubRow][4] = shotDistance;
		}
		
		// Update max. 
		if(clubs[clubRow][5]==0 || shotDistance>clubs[clubRow][5]) {
			clubs[clubRow][5] = shotDistance;
		}
		
		// Save updated "clubs" array in local storage. 
		var str = JSON.stringify(clubs);
		localStorage.setItem('clubsArray',str);
		
		// Return to home screen. 
		window.location.href = "clubMeNow.html";
	}
}


// Navigate to home screen (club distance list).
function cancelEntry() {
	window.location.href = "clubMeNow.html";
}

// Navigate to new club screen.
function newClubEntry() {
	window.location.href = "newClub.html";
}




////////////////////////////////////////////////
// ------ Functions (newClub.html) ------ //
////////////////////////////////////////////////

// TODO: Add error checking for club count > 14. 
function checkForNewClubErrors() {}




