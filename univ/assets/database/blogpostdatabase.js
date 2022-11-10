


// Define month names. 
const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',];

// Define blog post data. 
const blogPostData = [

	{
		posttype:'post',
		postid:'001',
		title: 'Hi world',
		authorid:0,
		postedtime:0,
		content: 'This is my first blog post! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum omnis fuga, accusamus magnam, aliquam autem mollitia facilis rerum, repudiandae eveniet officia voluptate excepturi incidunt aliquid! Quisquam sint illum porro distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam molestias eos similique aut dicta, earum consequuntur dolores aperiam ad. Vero possimus, accusantium neque eligendi porro aperiam.',
		posttime: {
			year:2021,
			month:2,
			date:9,
			hour:13,
			minute:59,
			second:59
		},
	},
	{
		posttype:'post',
		postid:'002',
		title: 'Hey world',
		authorid:2,
		postedtime:0,
		content: 'This is my second blog post! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum omnis fuga, accusamus magnam, aliquam autem mollitia facilis rerum, repudiandae eveniet officia voluptate excepturi incidunt aliquid! Quisquam sint illum porro distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam molestias eos similique aut dicta, earum consequuntur dolores aperiam ad. Vero possimus, accusantium neque eligendi porro aperiam.',
		posttime: {
			year:2021,
			month:3,
			date:3,
			hour:13,
			minute:59,
			second:59
		},
	},
	{
		posttype:'post',
		postid:'003',
		title: 'Hello world',
		authorid:3,
		postedtime:0,
		content: 'This is my third blog post! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum omnis fuga, accusamus magnam, aliquam autem mollitia facilis rerum, repudiandae eveniet officia voluptate excepturi incidunt aliquid! Quisquam sint illum porro distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam molestias eos similique aut dicta, earum consequuntur dolores aperiam ad. Vero possimus, accusantium neque eligendi porro aperiam.',
		posttime: {
			year:2021,
			month:4,
			date:4,
			hour:13,
			minute:59,
			second:59
		},
	},
	{
		posttype:'post',
		postid:'004',
		title: 'Greetings world',
		authorid:0,
		postedtime:0,
		content: 'This is my fourth blog post! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum omnis fuga, accusamus magnam, aliquam autem mollitia facilis rerum, repudiandae eveniet officia voluptate excepturi incidunt aliquid! Quisquam sint illum porro distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam molestias eos similique aut dicta, earum consequuntur dolores aperiam ad. Vero possimus, accusantium neque eligendi porro aperiam.',
		posttime: {
			year:2021,
			month:10,
			date:10,
			hour:13,
			minute:59,
			second:59
		},
	},
	
];


/*****/


// Add additional post properties. 
addPostProperties();


/*****/


// Define additional post properties. 
function addPostProperties() {

	// Go thru all blog posts. 
	for(let post of blogPostData) {
		
		// Get searchable post data. 
		post.searchtags = getPostTags(post);
	}

	/****/
	
	// Define searchable post tags. 
	function getPostTags(post) {

		// Get post author. 
		let author = userData[post.authorid];
	
		// Compile searchable components for this post type: post. 
		let tagsources = [ author.username, author.lastname, author.firstname, post.title, post.content ];
		
		// 
		return tagsources.join(' ').split(' ');
	}
}

