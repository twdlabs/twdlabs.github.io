


// Define types of files. 
const fileTypeData = [

	{
		filetype:'folder',
		icontag:'filefolder',
	},
	{
		filetype:'text',
		icontag:'paragraph',
	},
	{
		filetype:'image',
		icontag:'image',
	},
	{
		filetype:'audio',
		icontag:'speaker',
	},
	{
		filetype:'video',
		icontag:'film',
	},

];


// Define file data hierarchy. 
const fileData = [

	{
		filename:'root',
		filetype:'folder',
		foldercontents:[
			{
				filename:'documents',
				filetype:'folder',
				foldercontents:[
					{
						filename:'xyz.doc',
						filetype:'text',
					},
					{
						filename:'xyz.rtf',
						filetype:'text',
					},
					{
						filename:'xyz.txt',
						filetype:'text',
					},
				],
			},
			{
				filename:'pictures',
				filetype:'folder',
				foldercontents:[
					{
						filename:'xyz.jpg',
						filetype:'image',
					},
					{
						filename:'xyz.png',
						filetype:'image',
					},
					{
						filename:'xyz.gif',
						filetype:'image',
					},
				],
			},
			{
				filename:'music',
				filetype:'folder',
				foldercontents:[
					{
						filename:'xyz.mp3',
						filetype:'audio',
					},
					{
						filename:'xyz.mp3',
						filetype:'audio',
					},
					{
						filename:'xyz.mp3',
						filetype:'audio',
					},
				],
			},
			{
				filename:'movies',
				filetype:'folder',
				foldercontents:[
					{
						filename:'xyz.mp4',
						filetype:'video',
					},
					{
						filename:'xyz.mp4',
						filetype:'video',
					},
					{
						filename:'xyz.mp4',
						filetype:'video',
					},
				],
			},
		],
	},

];
