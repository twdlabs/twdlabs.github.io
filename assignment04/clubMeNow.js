

// Initialize "clubs" array. 
function loadClubDistances() {
	var clubs;

	// Load from local storage if array already exists. 
	if(localStorage.getItem('clubs')) {
		clubs = JSON.parse( localStorage.getItem('clubs') );
	}
	// Create a new array otherwise.
	else {
		resetAllClubDistances();
		clubs = JSON.parse( localStorage.getItem('clubs') );
	}

	return clubs;
}

// Create a new "clubs" array. 
function resetClubDistances() {
	clubs = [
				[ 199, "Dr","Driver", 	0,0,0,0, 10.5,230,200],
				[ 300, "3+w","3+ wood", 0,0,0,0, 13.5,210,180],
				[ 350, "3h","3 hybrid", 0,0,0,0, 18.0,180,160],
				[ 399, "3i","3 iron", 	0,0,0,0, 18.5,180,160],
				[ 499, "4i","4 iron", 	0,0,0,0, 18.5,170,150],
				[ 599, "5i","5 iron", 	0,0,0,0, 21.0,160,140],
				[ 699, "6i","6 iron", 	0,0,0,0, 24.0,150,130],
				[ 799, "7i","7 iron", 	0,0,0,0, 27.0,140,120],
				[ 899, "8i","8 iron", 	0,0,0,0, 31.5,130,110],
				[ 999, "9i","9 iron", 	0,0,0,0, 36.0,120,100],
				[1099, "Pw","Pitching", 0,0,0,0, 41.0,110,90],
				[1199, "Aw","Approach", 0,0,0,0, 46.0,100,80],
				[1299, "Gw","Gap", 		0,0,0,0, 51.0,90,70],
				[1399, "Sw","Sand", 	0,0,0,0, 56.0,80,60],
				[1499, "Lw","Lob", 		0,0,0,0, 60.0,60,40],
				[1599, "abc","Putter", 	0,0,0,0, 60.0,3,3],
	];

	// Store array in local storage. 
	var str = JSON.stringify(clubs);
	localStorage.setItem('clubs',str);

	// Refresh screen. 
	window.location.href = "clubMeNow.html";
}

// Add data to the table. 
function populateTable() {
	// Select the HTML table. 
	var clubTable = document.getElementById('clubTable');

	// Append one row to table for each row in "clubs" array. 
	for (var i=0 ; i < clubs.length ; i++) {
		// Create an empty row (at the bottom). 
		var row = clubTable.insertRow(i+1);

		// Create an empty cell for each column. 
		var cell0 = row.insertCell(0);	// clubAbbrev
		var cell1 = row.insertCell(1);	// avgDist
		var cell2 = row.insertCell(2);	// minDist
		var cell3 = row.insertCell(3);	// maxDist
		var cell4 = row.insertCell(4);	// numOfShots
		var cell5 = row.insertCell(5);	// ("+" button)
		var cell6 = row.insertCell(6);	// clubName

		// Create an empty cell for each column. 
		cell0.className = "c_";	// clubAbbrev
		cell1.className = "c_";	// avgDist
		cell2.className = "c_";	// minDist
		cell3.className = "c_";	// maxDist
		cell4.className = "c_";	// numOfShots
		cell5.className = "c_";	// ("+" button)
		cell6.className = "c_";	// clubName

		// Create an empty cell for each column. 
		cell0.innerHTML = clubs[i][0];	// clubAbbrev
		cell1.innerHTML = clubs[i][1];	// avgDist
		cell2.innerHTML = clubs[i][2];	// minDist
		cell3.innerHTML = clubs[i][3];	// maxDist
		cell4.innerHTML = clubs[i][4];	// numOfShots
		cell5.innerHTML = clubs[i][5];	// ("+" button)
		cell6.innerHTML = clubs[i][6];	// clubName

		// 
		
	}
}
