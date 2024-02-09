


// Define post register. 
const postregister = {
	'author':'authorid',
	'project':'projectid',
	// 'category':'categoryid',
	'category':'groupid',
	// 'collection':'collectionid',
	'collection':'groupid',
};
console.log(`Post register:`,postregister);


// Define default search results, the basis of final search results. 
const defaultResultSet = [
	{
		blockname:'Developers',
		folderpath:'./authors',
		searchlabel:{
			plural:'developers',
			singular:'developer',
		},
		itemlist: authorData,
		matchingitemlist: [],
		visual:false,
	},
	{
		blockname:'Projects',
		folderpath:'./library/project/?pid=',
		searchlabel:{
			plural:'projects',
			singular:'project',
		},
		itemlist: projectData,
		matchingitemlist: [],
		visual:false,
	},
	{
		blockname:'Categories',
		folderpath:'./category',
		searchlabel:{
			plural:'categories',
			singular:'category',
		},
		itemlist: projectCategoryData,
		matchingitemlist: [],
		visual:false,
	},
	{
		blockname:'Collections',
		folderpath:'./collection',
		searchlabel:{
			plural:'collections',
			singular:'collection',
		},
		itemlist: projectCollectionData,
		matchingitemlist: [],
		visual:false,
	},
];
console.log(`Default result set:`,defaultResultSet);
