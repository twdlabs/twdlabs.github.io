


// Define artist data. 
const artistData = [
	
	{
		posttype:'artist',
		artistid:'ABC',
		title:'Jobs Steve',
	},
	{
		posttype:'artist',
		artistid:'DEF',
		title:'Peterson Jordan',
	},
	{
		posttype:'artist',
		artistid:'GHI',
		title:'Wozniak Steve',
	},
	{
		posttype:'artist',
		artistid:'JKL',
		title:'Gates Bill',
	},
	{
		posttype:'artist',
		artistid:'MNO',
		title:'Jackson Curtis',
	},
	{
		posttype:'artist',
		artistid:'PQR',
		title:'Tyson Mike',
	},
	{
		posttype:'artist',
		artistid:'STU',
		title:'Dupri Jermaine',
	},
	{
		posttype:'artist',
		artistid:'VWX',
		title:'Robbins Anthony',
	},
	{
		posttype:'artist',
		artistid:'YZA',
		title:'Cook Owen',
	},
	{
		posttype:'artist',
		artistid:'BCD',
		title:'Proctor Bob',
	},
	{
		posttype:'artist',
		artistid:'EFG',
		title:'Dalio Ray',
	},
	{
		posttype:'artist',
		artistid:'HIJ',
		title:'Tyson Neil',
	},
	{
		posttype:'artist',
		artistid:'KLM',
		title:'Trump Donald',
	},
	{
		posttype:'artist',
		artistid:'NOP',
		title:'Picasso Pablo',
	},
	{
		posttype:'artist',
		artistid:'QRS',
		title:'Cochran Johnny',
	},
	{
		posttype:'artist',
		artistid:'TUV',
		title:'Kardashian Robert',
	},
	{
		posttype:'artist',
		artistid:'WXY',
		title:'Obama Barack',
	},
	{
		posttype:'artist',
		artistid:'ZAB',
		title:'Lopez Taino',
	},
	{
		posttype:'artist',
		artistid:'CDE',
		title:'Vaynerchuk Gary',
	},
	{
		posttype:'artist',
		artistid:'FGH',
		title:'Belfort Jordan',
	},
	{
		posttype:'artist',
		artistid:'IJK',
		title:'Jakes TD',
	},
	{
		posttype:'artist',
		artistid:'LMN',
		title:'Covey Stephen',
	},
	{
		posttype:'artist',
		artistid:'OPQ',
		title:'Carter Sean',
	},
	{
		posttype:'artist',
		artistid:'RST',
		title:'Cole Jermaine',
	},
	{
		posttype:'artist',
		artistid:'UVW',
		title:'Austin Johnta',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Cox Bryan-Michael',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Garrett Sean',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Dean Ester',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Carter Brandon',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Hulse Elliott',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'O\'Gallagher Gregory',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Darwin Charles',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Einstein Albert',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Newton Isaac',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Faraday Michael',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Tesla Nikola',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'One KRS',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Tracy Brian',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Buffett Warren',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Hormozi Alex',
	},

	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Washington George',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Adams John',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Jefferson Thomas',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Jackson Andrew',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Adams John Quincy',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Monroe James',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Lincoln Abraham',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Johnson Andrew',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Coolidge Calvin',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Cleveland Grover',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Wilson Woodrow',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Truman Harry S.',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'F. Kennedy John',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'B. Johnson Lyndon',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Nixon Richard M.',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Carter James',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Reagan Ronald',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Bush George H.W.',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Clinton Bill',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Bush George W.',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Obama Barack',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Trump Donald',
	},
	{
		posttype:'artist',
		artistid:'XYZ',
		title:'Biden Joseph',
	},

	// {
	// 	posttype:'artist',
	// 	artistid:'XYZ',
	// 	title:'LastName FirstName',
	// },

];


/*****/


// Add additional artist properties. 
addArtistProperties();


/*****/


// Define additional artist properties. 
function addArtistProperties() {

	// 
	for(let artist of artistData) {

		// Set bio as post content. 
		artist.content = getBio(artist);
		
		// Set searchable artist data. 
		artist.searchtags = getArtistTags(artist);
	}

	/****/

	// Define bio of given artist. 
	function getBio(artist) {
		// 
		return `This is a brief bio about ${artist.title}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, alias soluta, debitis dolore porro sapiente quae cumque saepe facere quaerat eius, itaque aspernatur eos repellat reprehenderit illo reiciendis tempora.`;
	}
	
	// Define searchable artist tags. 
	function getArtistTags(artist) {
	
		// Get name of artist. 
		let name = artist.title;
	
		// Get bio of artist. 
		let bio = artist.content;
	
		// Compile searchable components for this post type: artist. 
		let tagsources = [ name, bio ];
		
		// Return string of tags. 
		return tagsources.join(' ').split(' ');
	}
}


// Get artist by id. 
function getArtistById(artistid) {

	// Ensure capitalization of artist id. 
	artistid = (`${artistid}`).toUpperCase();

	// Go thru all artist items. 
	for(let artist of artistData) {

		// Check for matching artist. 
		let matchingProgram = (artistid == artist.artistid);

		// Return matching artist if found. 
		if( matchingProgram ) return artist;
	}

	// Return nothing if artist not found. 
	return null;
}

