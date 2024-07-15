


// Save data to memory. 
function saveData() {
    console.log('Saving data to memory...');

    // Create list of clubs and distances in string form. 
    let strclubslist = JSON.stringify(tabledata.clubslist);
    console.log('\tlocalStorage:',localStorage);

    // Save list of clubs and distances. 
    localStorage.setItem('savedclubslist',strclubslist);

	// Show updated table of clubs. 
	loadClubTableBody();
}

// Restore saved data from memory (if it exists). 
function restoreSavedData() {
    console.log('Restoring saved data from memory...');

    // Get saved list of clubs and distances (in string form). 
    let strclubslist = localStorage.getItem('savedclubslist');
    console.log('\tlocalStorage:',localStorage);
    
    // Restore saved list of clubs and distances. 
    if(strclubslist) tabledata.clubslist = JSON.parse(strclubslist);
}

// Reset club database. 
function resetClubDatabase() {
    console.log('Resetting club database...');

    // Delete list of clubs and distances. 
    localStorage.removeItem('savedclubslist');
    console.log('\tlocalStorage:',localStorage);

	// Show updated table of clubs. 
	// loadClubTableBody();
    window.location.reload();
}
