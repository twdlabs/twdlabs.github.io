


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
		archivefolderpath:'./authors',
		archivefolderpath:'./',
		searchlabel:{
			plural:'developers',
			singular:'developer',
		},
		itemlist: authorData,
		itemlist: [],
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Projects',
		archivefolderpath:'./library',
		archivefolderpath:'./project/?pid=',
		archivefolderpath:'./',
		searchlabel:{
			plural:'projects',
			singular:'project',
		},
		itemlist: projectData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Categories',
		archivefolderpath:'./category',
		archivefolderpath:'./',
		searchlabel:{
			plural:'categories',
			singular:'category',
		},
		itemlist: projectCategoryData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Collections',
		archivefolderpath:'./collection',
		archivefolderpath:'./',
		searchlabel:{
			plural:'collections',
			singular:'collection',
		},
		itemlist: projectCollectionData,
		matchingitemlist: [],
		usevisual:false,
	},
];
console.log(`Default result set:`,defaultResultSet);


// Define list of attributes to include in search tag. 
const searchtagattributekeys = ['title','content',];
