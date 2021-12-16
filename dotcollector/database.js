
// Define list of users. 
let users = [
	{
		fname:'Ray',
		photourl:'avatar-m.png'
	},
	{
		fname:'Larry',
		photourl:'avatar-m.png'
	},
	{
		fname:'Mary',
		photourl:'avatar-f.png'
	},
	{
		fname:'Rachel',
		photourl:'avatar-f.png'
	},
	{
		fname:'Steve',
		photourl:'avatar-m.png'
	},
	{
		fname:'Sean',
		photourl:'avatar-m.png'
	},
	{
		fname:'Tiffany',
		photourl:'avatar-f.png'
	},
	{
		fname:'Jake',
		photourl:'avatar-m.png'
	},
	{
		fname:'Tom',
		photourl:'avatar-m.png'
	},
	{
		fname:'Anthony',
		photourl:'avatar-m.png'
	},
	{
		fname:'Jason',
		photourl:'avatar-m.png'
	},
	{
		fname:'Daniel',
		photourl:'avatar-m.png'
	},
	// {
	// 	fname:'John',
	// 	photourl:'avatar-m.png'
	// },
];

// Define matrix of ratings. 
let ratingsmatrix = [

	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],

	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],

	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
	[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],

];

for(y in ratingsmatrix) {
	for(x in ratingsmatrix[y]) {
		let r = Math.random();
		ratingsmatrix[y][x] = Math.floor(10*r);
	}
}


/*****/


// Update participants list on page. 
function updateParticipantsList() {

	// Get empty person list on page. 
	let personlist = document.getElementById('personlist');

	// 
	let result = '';
	for(user of users) {
		result += `
		<!-- person -->
		<li class="person">

			<!-- user -->
			<a class="user" href="javascipt:void(0)">

				<!-- photo -->
				<div class="photo" style="background-image:url('${user.photourl}');"></div>
				<!-- /photo -->

				<!-- name -->
				<div class="name">${user.fname}</div>
				<!-- /name -->

			</a>
			<!-- /user -->

		</li>
		<!-- /person -->`;
	}

	// 
	personlist.innerHTML = result;
}

// Update ratings grid on page. 
function updateRatingsGrid() {

	// Get ratings grid box. 
	let ratingsgrid = document.getElementById('ratingsgrid');

	// 
	let result = '';

	// 
	result += `
	<!-- row -->
	<div class="row">
		
		<!-- item -->
		<div class="item"></div>
		<!-- /item -->`;

		for(user of users) {
			result += `
			<!-- item -->
			<div class="item user subj" style="background-image:url('${user.photourl}');"></div>
			<!-- /item -->`;
		}

	// 
	result += `
	</div>
	<!-- /row -->`;

	// 
	for(h in ratingsmatrix) {

		// Get row of rating values. 
		let row = ratingsmatrix[h];

		result += `
		<!-- row -->
		<div class="row">

			<!-- item -->
			<div class="item user auth" style="background-image:url('${users[h].photourl}');"></div>
			<!-- /item -->`;
			
			for(i in row) {
				// Get rating value. 
				let value = row[i];

				result += `
				<!-- item -->
				<div class="item rating r${value}">${ (value>0) ? (value) : ('') }</div>
				<!-- /item -->`;
			}

		// 
		result += `
		</div>
		<!-- /row -->`;

	}

	// 
	ratingsgrid.innerHTML = result;
}
