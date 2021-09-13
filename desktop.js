

// Dynamic array for desktop items
var desktopItems = [
	['',''],
	['','']
];



$(document).ready(function() {
	// Toggle group when clicking desktop group head. 
	$('div#desktop div.group div.ghead').on('click', toggleGroup);

	// Add mini-frame to each desktop item. 
	addMiniFrames();

	// Position mini-frame when hovering over desktop item. 
	$('div#desktop a.item').on('mouseenter', positionMiniframe);

	// Notify user. 
	// console.log('desktop ready');
});


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
					result += '<div class="desc"><p>The repressed content must be made conscious so as to produce a tension of opposites, without which no forward movement is possible. The conscious mind is on top, the shadow underneath, and just as high always longs for low and hot for cold, so all consciousness, perhaps without being aware of it, seeks its unconscious opposite, lacking which it is doomed to stagnation, congestion, and ossification. Life is born only of the spark of opposites.</p></div>';
				result += '</div>';
			result += '</div>';
		result += '</div>';
		return result;
	}
}


// Toggle collapsible content of group. 
function toggleGroup() {
	// Get corresponding group. 
	let $group = $(this).parent();

	// Toggle group visibility. 
	$group.toggleClass('active');
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
