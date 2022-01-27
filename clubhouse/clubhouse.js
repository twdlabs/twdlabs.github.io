

$(document).ready(loadPage);


// Load groups of items. 
function loadPage() {
	// Catch any size errors in data. 
	let sameSize = (groupNames.length == groupItems.length);
	if(!sameSize) {
		console.log('Unmatched size of arrays. ');
		return;
	}

	let result = '';

	// Add each group. 
	for(let h=0 ; h<groupNames.length ; h++) {
		result += '<div class="group">';

			// Add group header. 
			result += '<h2>'+groupNames[h]+'</h2>'

			// Add each line. 
			result += '<div class="line">';

			// Add each item. 
			for(let i=0 ; i<groupItems[h].length ; i++) {
				// Get item caption. 
				let caption = groupItems[h][i];

				// Add item. 
				if(caption) result += '<span class="item">'+caption+'</span> ';
				
				// Create new line on empty caption. 
				else result += '</div><div class="line">'
			}

			result += '</div>';

		result += '</div>';
	}

	// Add contents to page. 
	$('div#container div.inner').html(result);

	// Allow click to activate items. 
	$('span.item').on('click', activateItem);
	// $('span.item').on('dblclick', activateItem);

	// Allow commensurate scrolling within a group of line items. 
	// $('div.line').on('scroll', handleLineScrolling);

	/*****/

	// Handle line scrolling. 
	function handleLineScrolling(event) {
		// console.log(event);

		// Get scrolled line. 
		let scrLine = event.currentTarget;
		// console.log(scrLine);

		// Get scroll proportion. 
		let x = scrLine.scrollLeft;
		let y = scrLine.scrollLeftMax;
		let p = x / y;
		// console.log(p);

		// Get group that scrolled line belongs to. 
		let group = scrLine.parentElement;

		// Collect all lines in the group. 
		let $lines = $(group).children();

		// Set same scroll for all. 
		for(let i=0 ; i<$lines.length ; i++) {
			// Get line. 
			let line = $lines[i];
			// console.log( line, $lines[i] );

			// Skip original line. 
			if(line==scrLine) {
				continue;
				console.log('Scrolled line @ index',i);
			}

			// Get maximum scroll. 
			let m = line.scrollLeftMax;

			// Set scroll by proportion. 
			$( line ).scrollLeft(p*m);
		}
	}

	// Activate item. 
	function activateItem(event) {
		console.log('\n'+event.type);

		// Get item. 
		let item = event.currentTarget;
		// console.log(item);

		// Check if active. 
		let isActive = $(item).hasClass('active');
		// console.log(isActive);

		// Change active state. 
		if(isActive) {
			$(item).removeClass('active');
			console.log('turned off');
		}
		else {
			$(item).addClass('active');
			console.log('turned on');
		}
	}
}


const groupNames = [ 
				'🗺 Places',
				'🌍 World Affairs',
				'🔥 Hustle',
				'🎸 Entertainment',
				'💡 Knowledge',
				'🥳 Hanging Out',
				'🧭 Tech',
				'🌿 Wellness',
				'🌻 Life',
				'💭 Arts',
				'🗣 Identity',
				'💬 Languages',
				'🏆 Sports',
				'🕊 Faith' ];

const groupItems = [

	[
		'🌅 Los Angeles',
		'🇳🇬 Nigeria',
		'🗽 New York',
		'🌁 San Francisco',
		'🇬🇧 London',
		'',
		'🇫🇷 Paris',
		'🇮🇳 India',
		'🍑 Atlanta',
		'🌍 Africa'
	],

	[
		'👥 Social Issues',
		'📰 Current Events',
		'🧮 Markets',
		'🌦 Climate',
		'',
		'🇺🇸 U.S. Politics',
		'🌏 Geopolitics',
		'🏭 Economics'
	],

	[
		'🏹 Entrepreneurship',
		'🏛 Stocks',
		'🌈 Instagram',
		'📎 Small Business',
		'🎯 Pitch Practice',
		'',
		'👋 Clubhouse',
		'🌱 Networking',
		'🎵 TikTok',
		'🏡 Real Estate'
	],

	[
		'🎫 Performances',
		'🙊 Comedy',
		'🙋🏾‍♀️ Trivia',
		'🎞 Movies',
		'📻 Podcasts',
		'',
		'☕️ Advice',
		'🕹 Gaming',
		'💯 Variety',
		'🎧 Music',
		'🎤 Karaoke',
		'',
		'💥 Fun',
		'👄 Celebrities',
		'🎙 Storytelling',
		'📺 Television',
		'😸 Anime & Manga'
	],

	[
		'🍏 Education',
		'🔬 Science',
		'🌳 Philosophy',
		'🛰 Space',
		'',
		'🦠 Covid-19',
		'🧀 Psychology',
		'🗿 History',
		'🎱 Math',
		'',
		'⏳ The Future',
		'🧬 Biology',
		'🧲 Physics'
	],

	[
		'🧊 Chill Vibes',
		'🦙 \_(``)_/',
		'👩🏽‍💻 Coworking',
		'🍷 Bring a Drink',
		'',
		'🎉 Welcome Newbies',
		'🌙 Late Night',
		'✨ Meet People',
		'🌀 PTR'
	],

	[
		'🐇 Crypto',
		'💰 Venture Capital',
		'📱 Product',
		'☁️ SaaS',
		'',
		'🥽 VR/AR',
		'🍕 Engineering',
		'🛍 DTC',
		'🦄 Startups',
		'',
		'🧠 AI',
		'📈 Marketing',
		'💵 Angel Investing'
	],

	[
		'🥕 Veganism',
		'⛺️ Outdoors',
		'🧘🏻‍♀️ Meditation',
		'💊 Medicine',
		'🍓 Psychedelics',
		'',
		'🌽 Nutrition',
		'🏋🏾 Weights',
		'🏃🏽 Fitness',
		'🍃 Mindfulness',
		'🍎 Health'
	],

	[
		'✈️ Traveling',
		'💍 Weddings',
		'🐣 Pregnancy',
		'💘 Dating',
		'',
		'💸 Grownuping',
		'🧶 Relationships',
		'🧸 Parenting',
		'☕️ Support'
	],

	[
		'🌊 Art',
		'🍣 Food & Drink',
		'📖 Writing',
		'💈 Advertising',
		'📚 Books',
		'',
		'🎭 Theater',
		'💋 Beauty',
		'👘 Fashion',
		'💃🏽 Dance',
		'📐 Architecture',
		'',
		'🛸 Sci-Fi',
		'🎏 Design',
		'🤯 Burning Man',
		'📷 Photography'
	],

	[
		'😴 Gen Z',
		'🧨 Baby Boomers',
		'🧡 Black',
		'👩🏻‍🤝‍👩🏿 Women',
		'🏳️‍🌈 LGBTQ',
		'',
		'♿️ Disabled',
		'💛 Latino',
		'💜 East Asian',
		'💙 South Asian',
		'',
		'👖 Gen X',
		'💚 Indigenous',
		'👻 Millennials',
		'❤️ BIPOC'
	],

	[
		'🇮🇩 Indonesian',
		'🇩🇪 German',
		'🇪🇸 Spanish',
		'🇯🇵 Japanese',
		'🇮🇳 Hindi',
		'',
		'🇷🇺 Russian',
		'🇪🇬 Arabic',
		'🇧🇷 Portuguese',
		'🇫🇷 French',
		'🇨🇳 Mandarin'
	],

	[
		'⛳️ Golf',
		'🥋 MMA',
		'🚲 Cycling',
		'🏎 Formula 1',
		'🏏 Cricket',
		'',
		'⚾️ Baseball',
		'🏈 Football',
		'🏀 Basketball',
		'🎾 Tennis',
		'⚽️ Soccer'
	],

	[
		'🚩 Sikhism',
		'🕍 Judaism',
		'🕌 Islam',
		'❓ Agnosticism',
		'🪐 Atheism',
		'',
		'👣 Taoism',
		'📿 Buddhism',
		'🛕 Hinduism',
		'⛪️ Christianity',
		'🕯 Spirituality',
	]

];

// console.log('groupNames',groupNames);
// console.log('groupItems',groupItems);
