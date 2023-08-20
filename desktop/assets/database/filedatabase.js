


// Define icon tags for different file types. 
const fileTypeData = {
	folder:'filefolder',
	text:'paragraph',
	image:'imagelandscape',
	audio:'speaker',
	video:'film',
};


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


// TODO: Get file by path. 
function getFileByPath() {

	// 
}
