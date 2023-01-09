


// Define blog post data. 
const blogdata = [

	{
		postid:'abc',
		title:'Blog Post A',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:1672870380000,
	},
	{
		postid:'def',
		title:'Blog Post B',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:1659561180000,
	},
	{
		postid:'ghi',
		title:'Blog Post C',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:1665004380000,
	},

	{
		postid:'jkl',
		title:'Blog Post D',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:1670451180000,
	},
	{
		postid:'mno',
		title:'Blog Post E',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:1667423580000,
	},
	{
		postid:'pqr',
		title:'Blog Post F',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:1662585180000,
	},

	{
		postid:'stu',
		title:'Blog Post G',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'vwx',
		title:'Blog Post H',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'yza',
		title:'Blog Post I',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},

	{
		postid:'bcd',
		title:'Blog Post J',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'efg',
		title:'Blog Post K',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'hij',
		title:'Blog Post L',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},

	{
		postid:'klm',
		title:'Blog Post M',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'nop',
		title:'Blog Post N',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'qrs',
		title:'Blog Post O',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},

	{
		postid:'tuv',
		title:'Blog Post P',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'wxy',
		title:'Blog Post Q',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'zab',
		title:'Blog Post R',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},

	{
		postid:'cde',
		title:'Blog Post S',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'fgh',
		title:'Blog Post T',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'ijk',
		title:'Blog Post U',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},

	{
		postid:'lmn',
		title:'Blog Post V',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'opq',
		title:'Blog Post W',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'rst',
		title:'Blog Post X',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	
	{
		postid:'uvw',
		title:'Blog Post Y',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},
	{
		postid:'xyz',
		title:'Blog Post Z',
		authorid:'',
		picurl:'',
		content:[],
		timeposted:0,
	},

];


/*****/


// Generate additional random data for all blog posts. 
generateRandomPostData();


/*****/


// Get post by id. 
function getPostById(id) {

	// Go thru all posts. 
	for(let post of blogdata) {

		// Return post if found. 
		if(post.postid==id) return post;
	}

	// Return nothing if post not found. 
	return null;
}
