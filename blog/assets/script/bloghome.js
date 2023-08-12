


// Get destination for featured post. 
const featuredestination = document.querySelector('div#container section.feature main.grid ul.postlist');

// Get destination for list of posts. 
const bloglistdestination = document.querySelector('div#container section.allposts main.grid ul.postlist');

// Get destination for block of blog contributors. 
const contributorsdestination = document.querySelector('div#container section.contributors main.grid');


/*****/


// Create time calculator. 
const t = new TimeCalculator();


/*****/


// Load blog posts. 
loadBlogPosts();

// Load list of blog contributors. 
loadBlogContibutors();


/*****/


// Load list of blog posts. 
function loadBlogPosts() {

	// Initialize result. 
	let result = '';

	// Sort list of blog posts chronologically. 
	// console.log('Blog data list (pre-sort):', blogDataList.map(x=>x.postid) );
	blogDataList.sort( (a,b) => b.timeposted-a.timeposted );
	// console.log('Blog data list (post-sort):', blogDataList.map(x=>x.postid) );
	
	// Go thru all posts. 
	for(let post of blogDataList) {
		
		// Add layout for given post. 
		result += createBlogPostLayout(post);
	}
	
	// Add result to page. 
	bloglistdestination.innerHTML = result;
}

// Load list of blog contributors. 
function loadBlogContibutors() {

	// Initialize result. 
	let result = '';
	
	// Go thru multiple rows. 
	// for(let i=0 ; i<4 ; i++) {

		// Get random number of cards to include in row. 
		// let l = Math.floor( userDataList.length * Math.random() );

		// Initialize number of cards in row. 
		// let n = 0;
		
		// Initialize list of contributor cards. 
		let cards = '';
		
		// Create layout for list of contributor cards. 
		for(let item of userDataList.sort(sortRandom) ) {
	
			// Compile individual card. 
			cards += `
			<!-- card -->
			<a class="card" href="${ item.linkurl ? item.linkurl : 'javascript:void(0)' }">
	
				<!-- avatar -->
				<img class="avatar" src="${ `../user/${item.avatarurl}` }" alt="${ item.userid }">
				<!-- /avatar -->
	
				<!-- username -->
				<span class="username">${ item.fullname }</span>
				<!-- /username -->
	
			</a>
			<!-- /card -->`;

			// Limit number of cards to randomly generated number. 
			// n++;
			// if(n>=l) break;
		}
	
		// Compile contents of card slider row. 
		result += `
		<!-- row -->
		<div class="row">
			${cards}
			${cards}
		</div>
		<!-- /row -->`;
	// }
	
	// Load to destination. 
	contributorsdestination.innerHTML = result;

	// Sort randomly. 
	function sortRandom(a,b) {
		// 
		return ( Math.random() - Math.random() );
	}
}
