


// Set boundary for randomly-generated dates. 
const earliestDate = '2023-1-6';

// Get late date. 
const now = Date.now();

// Define extra content for comments. 
// const commentoverflow = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beautae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum.';
const commentoverflow = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beautae harum.';


/*****/


// Generate additional random data for all blog posts. 
function generateRandomPostData() {
	
	// Get date of origin. 
	let t0 = new Date(earliestDate).valueOf();

	// Go thru all post data items. 
	for(let post of blogdata) {

		// Assign random post author. 
		post.authorid = getRandomUserId();

		// Assign random picture url. 
		post.picurl = getRandomPhotoUrl();

		// Assign random time posted. 
		post.timeposted = getRandomTimeAfter(t0);

		// Assign fixed post content. 
		post.content = [
			'This is the first paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum.',
			'This is the second paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum.',
			'This is the third paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum.',
			'This is the fourth paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum.',
			'This is the fifth paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum.',
			'This is the sixth paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt dolores aut optio labore amet ut recusandae doloremque quia asperiores quidem mollitia nesciunt ipsa, cumque totam vel dicta beatae harum.',
		];
	}

	/****/

	// Get random url for blog post image. 
	function getRandomPhotoUrl() {

		// Get number of images. 
		let n = imageData.length;

		// Choose random image index. 
		let randomimageindex = Math.floor( n * Math.random() );

		// 
		return `../gallery/assets/images/full/${ imageData[randomimageindex].imageurl }`;
	}
}

// Generate data for 12 random comments by 12 random users on each blog post. 
function generateRandomCommentData() {

	// Go thru each post. 
	for(let post of blogdata) {

		// Add 12 random comments for given post. 
		for(let i=0;i<12;i++) {

			let authorid = getRandomUserId();

			// Define comment data. 
			let c = {
				postid:post.postid,
				authorid:authorid,
				timeposted:getRandomTimeAfter(post.timeposted),
				commentcontent:`Hi, my name is ${ getUserById(authorid).fname }. This is a randomly generated commment I'm writing in relation to this blog post. ${ commentoverflow/* .split(' ') */ }`,
			};

			// Add comment data to list. 
			allCommentData.push(c);
		}
	}
}

// Get random id for post author. 
function getRandomUserId() {

	// Get number of users. 
	let n = userDataList.length;

	// Choose random user index. 
	let randomuserindex = Math.floor( n * Math.random() );

	// 
	return userDataList[randomuserindex].userid;
}

// Get random time integer between two given boundary integers. 
function getRandomTimeAfter(a) {

	// Get time difference. 
	let dt = now - a;

	// 
	return Math.floor( ( Math.random() * dt ) + a );
}
