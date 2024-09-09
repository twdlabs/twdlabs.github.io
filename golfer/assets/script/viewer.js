


// Get currently displayed table. 
let selectedtable = databasetables[displaytableid];
console.log('Selected table:',selectedtable);

// Restore saved table entries from memory. 
restoreTableFromMemory();

// Update history restore buttons. 
updateHistoryBtns();
