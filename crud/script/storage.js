


// Define names for data sources. 
const crudDataSources = [
	// 

	/* Users */
	{
		databasename:'cruduserdata',
		dataorigin:defaultUserDataList,
		keymetadata:userListMetaData,
	},

	/* Blog Posts */
	{
		databasename:'crudblogdata',
		dataorigin:blogDataList,
		keymetadata:blogListMetaData,
	},

	/* Blog Post Comments */
	{
		databasename:'crudblogcommentdata',
		dataorigin:blogCommentDataList,
		keymetadata:blogCommentListMetaData,
	},
];

// Define index of currenly selected data source. 
let dataSourceIndex = 1;

// Initialize crud data list. 
let crudDataList;
// console.log('crudDataList:',crudDataList);


/*****/


// Retrieve database from storage. 
function getDatabaseFromStorage() {
	console.log('Retrieving database...',dataSourceIndex);

	// Get from storage: string represntation of database. 
	let str = localStorage.getItem( crudDataSources[dataSourceIndex]['databasename'] );

	// Parse data string into array form. 
	let result = JSON.parse(str);

	// Return database. 
	crudDataList = result ? result : [];
	console.log('Retrieved database:',crudDataList);
}

// Save database to storage. 
function saveDatabaseToStorage() {
	console.log('Saving database...');

	// Check for empty database. 
	let isEmptyDatabase = !(crudDataList.length);

	// Handle empty database. 
	if(isEmptyDatabase) {
	
		// Remove database from storage. 
		localStorage.removeItem( crudDataSources[dataSourceIndex]['databasename'] );
	}

	// Handle non-empty database. 
	else {

		// Create string version of database. 
		let str = JSON.stringify(crudDataList);
	
		// Save to storage: string version of database. 
		localStorage.setItem( crudDataSources[dataSourceIndex]['databasename'] ,str);
	}
	console.log('Saved database:',crudDataList);
	
	// Display items in selected database. 
	displaySelectedDatabase();
}
