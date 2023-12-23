


// Define number of items shown per page. 
const pagecapacity = 10;


// Define source of raw data. 
const rawdatasource = defaultUserData.map( x => x.username );
console.log('Raw data:',rawdatasource);

// Get total number of data items. 
const dataitemcount = rawdatasource.length;
console.log('Item count:',dataitemcount);


// Create source of paged data. 
const pageddatasource = paginateData(rawdatasource,pagecapacity);
console.log('Paged data:',pageddatasource);

// Get total number of pages. 
const pagecount = pageddatasource.length;
// const pagecount = Math.ceil(dataitemcount/pagecapacity);
console.log('Page count:',pagecount);
