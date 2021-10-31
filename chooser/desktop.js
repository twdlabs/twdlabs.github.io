

// Set desktop state.
let setupDesktop = true;
let setupMiniFrames = false;



/*********************************************************/



$(document).ready(function() {

	// Setup desktop items on page.
	if(setupDesktop) {

		// Setup desktop items on page.
		if(currentlyOnPublicPage)
			setupDesktopItems(projectPublicData);
		else
			setupDesktopItems(projectOrigData);

		// Setup desktop mini-frames.
		if(setupMiniFrames) setupMiniFrameItems();

		// Toggle desktop group upon clicking group head.
		$('div#desktop div.group div.ghead').on('click', toggleGroup);
	}
});



/*********************************************************/



// Setup desktop items on page.
function setupDesktopItems(desktopData) {
	console.log('desktopData',desktopData);

	// Initialize result of desktop items.
	let result = '';

	// Add dashboard items.

	// Add recent items.

	// Get number of item groups.
	let numGroups = desktopData.length;
	console.log('numGroups', numGroups);
	// Prepare desktop groups.
	for(h in desktopData)
	// for(let h=0 ; h<numGroups ; h++)
	{

		// Get group of items.
		let itemgroup = desktopData[h];
		console.log();
		console.log('itemgroup', itemgroup);

		//
		if(!itemgroup.includeInDesktop) continue;

		// Open group container.
		result += '<!-- group -->';
		result += '<div class="group active">';
		// result += (itemgroup.include) ? '<div class="group active">' : '<div class="group hidden">';

		// Open and close group head.
		result += '<!-- ghead -->';
		result += `<div class="ghead">${itemgroup.title}</div>`;
		result += '<!-- /ghead -->';

		// Open group body.
		result += '<!-- gbody -->';
		result += '<div class="gbody">';

		// Get number of items in group.
		let numItems = itemgroup.items.length;
		console.log('numItems', numItems);
		// Add desktop items.
		for(let i=0 ; i<numItems ; i++) {
			// Get item.
			let item = itemgroup.items[i];
			// console.log('item',item);

			// Compile item from data.
			result += '<!-- item -->';
			if(item.link) {
				result += '<a class="item" href="../';
				result += (item.directory) ? (item.directory+'/') : '';
				result += 'index.html">';
			}
			else {
				result += '<a class="item" href="javascript:void(0)" onclick="'+item.onclick+'">';
			}
					result += '<!-- icon -->';
					result += '<div class="icon">';
						result += `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">${item.innersvg}</svg>`;
					result += '</div>';
					result += '<!-- /icon -->';
					result += ' ';
					result += '<!-- label -->';
					result += `<div class="label">${item.name}</div>`;
					result += '<!-- /label -->';
			result += '</a>';
			result += '<!-- /item -->';
		}

		// Close group body.
		result += '</div>';
		result += '<!-- /gbody -->';

		// Close group container.
		result += '</div>';
		result += '<!-- /group -->';
	}

	// Show the resulting desktop items.
	$('div#container div#desktop').html(result);
	// console.log(result);
}


// Setup desktop mini-frames.
function setupMiniFrameItems() {

	// Add mini-frame to each desktop item.
	addMiniFrames();

	// Position mini-frame when hovering over desktop item.
	$('div#desktop a.item').on('mouseenter', positionMiniframe);

	/*****/

	// Add mini-frame to each desktop item.
	function addMiniFrames() {
		// Get desktop items.
		let $desktopItems = $('div#desktop a.item');

		// Add mini-frame to each desktop item.
		for(let i=0 ; i<$desktopItems.length ; i++) {
			// Get desktop item.
			let item = $desktopItems[i];
			let url = item.href;
			// console.log('item',item, 'url',url);

			// Create new mini-frame.
			let mnfrm = newMiniframe(url);

			// Add mini-frame into desktop item.
			$(item).append( mnfrm );
		}

		/*****/

		// Create new mini-frame for desktop item.
		function newMiniframe(url) {
			let result = '';
			result += '<div class="miniframe">';
				result += '<div class="mfbox">';
					result += '<div class="section">';
						result += '<div class="preview"><iframe src="'+url+'" frameborder="0"></iframe></div>';
					result += '</div>';
					result += '<div class="section">';
						result += '<div class="desc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum necessitatibus distinctio, illo ex animi consequatur minima, reiciendis esse veritatis architecto dolor! Perspiciatis non, rem natus, veniam voluptatem suscipit corporis ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae laudantium accusantium cupiditate dolorem quas, itaque natus numquam eum odit odio tenetur veniam culpa mollitia reiciendis animi veritatis fuga, placeat.</p></div>';
						// result += '<div class="desc"><p>The repressed content must be made conscious so as to produce a tension of opposites, without which no forward movement is possible. The conscious mind is on top, the shadow underneath, and just as high always longs for low and hot for cold, so all consciousness, perhaps without being aware of it, seeks its unconscious opposite, lacking which it is doomed to stagnation, congestion, and ossification. Life is born only of the spark of opposites.</p></div>';
					result += '</div>';
				result += '</div>';
			result += '</div>';
			return result;
		}
	}

	// Set position of mini-frame, which automatically shows on a.item:hover (in CSS).
	function positionMiniframe(event) {
		// Get (x,y) position in window.
		let x = event.clientX;
		let y = event.clientY;

		// Get size of window.
		let X = $(window).outerWidth();
		let Y = $(window).outerHeight();

		// Get quadrant of window.
		let pX = x/X;
		let pY = y/Y;
		// console.log('\nmouseenter (x,y):',percent(pX,1),percent(pY,1));

		// Get mini-frame for this item.
		let $miniframe = $(this).children('div.miniframe');

		// Open mini-frame permanently.
		// $miniframe.css('display','block');

		// Bottom right quadrant: Flip horizontally and vertically.
		if(pX>0.5 && pY>0.5) {
			$miniframe.addClass('flip-x-y');
			$miniframe.removeClass('flip-x');
			$miniframe.removeClass('flip-y');
			$miniframe.removeClass('def');
		}
		// Right half: Flip horizontally.
		else if(pX>0.5) {
			$miniframe.removeClass('flip-x-y');
			$miniframe.addClass('flip-x');
			$miniframe.removeClass('flip-y');
			$miniframe.removeClass('def');
		}
		// Bottom half: Flip vertically.
		else if(pY>0.5) {
			$miniframe.removeClass('flip-x-y');
			$miniframe.removeClass('flip-x');
			$miniframe.addClass('flip-y');
			$miniframe.removeClass('def');
		}
		// Default.
		else {
			$miniframe.removeClass('flip-x-y');
			$miniframe.removeClass('flip-x');
			$miniframe.removeClass('flip-y');
			$miniframe.addClass('def');
		}

		// console.log($miniframe);

		// Adjust mini-frame size.
		adjustMiniFrameSize();

		/*****/

		function percent(d,n) {
			return ( (100*d).toFixed(n) + '%' );
		}

		// Add 'tall' class when screen is narrow.
		function adjustMiniFrameSize() {
			// Get width of screen.
			let vpw = $(window).outerWidth();

			// Set maximum screen width for narrow mini-frame.
			let threshold = 1200;

			// Make mini-frames narrow on narrow screen.
			if (vpw<=threshold)	$miniframe.addClass('tall');
			else 				$miniframe.removeClass('tall');
		}
	}
}


// Toggle collapsible content of group.
function toggleGroup() {

	// Get corresponding group.
	let $group = $(this).parent();

	// Toggle group visibility.
	$group.toggleClass('active');
}
