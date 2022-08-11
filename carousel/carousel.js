

var currentIndex = 0;


// Create carousel content. 
var items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
console.log('items', items);


var inner;
var nav;


// $(document).ready(function() {

	// Get carousel inner. 
	inner = document.getElementById('myCarousel').children[0];
	console.log('inner', inner);

	// Get navigation. 
	nav = document.getElementById('myCarousel').children[1];
	console.log('nav', nav);

	// Create carousel items and navigation. 
	let code = '';
	let codeNav = '';
	for (var i=0; i<items.length; i++) {
		code += '<div class="item" style="left:'+(i*100)+'%">';
		code += items[i];
		code += '</div>';
		codeNav += '<span class="dot" onclick="goToIndex('+i+')"></span>';
	}

	// Add carousel contents to page. 
	inner.innerHTML += code;

	// Add carousel navigation. 
	nav.innerHTML += codeNav;

	// Initialize page at index 0. 
	goToIndex(currentIndex);

// });


// Go to previous page in carousel. 
function prevPage() {
	console.log('prevPage()');

	// Decrement page index. 
	currentIndex--;

	// Reset to end when pushed past beginning. 
	if(currentIndex<0) currentIndex = items.length - 1;

	// Go to page if index is valid. 
	if( currentIndex>-1 ) {
		goToIndex(currentIndex);
	}
	// Otherwise, reset index and send error message. 
	else {
		// Show error message. 
		console.log('Invalid index:',currentIndex);

		// Reset invalid index to previous value; 
		currentIndex++;
	}
}


// Go to next page in carousel. 
function nextPage() {
	console.log('nextPage()');

	// Increment page index. 
	currentIndex++;

	// Reset to beginning when pushed past end. 
	if(currentIndex>=items.length) currentIndex = 0;

	// Go to page if index is valid. 
	if( currentIndex<items.length ) {
		goToIndex(currentIndex);
	}
	// Otherwise, reset index and send error message. 
	else {
		// Show error message. 
		console.log('Invalid index:',currentIndex);

		// Reset invalid index to previous value; 
		currentIndex--;
	}
}


// Go to specific page in carousel. 
function goToIndex(index) {
	console.log('goToIndex('+index+')');
	console.log();

	// Translate horizontally to appropriate position. 
	inner.style.transform = 'translateX('+(index*-100)+'%)';

	// Highlight the chosen page's navigation link. 
	for (let i=0; i<nav.children.length; i++) {
		nav.children[i].style.backgroundColor = '';
	}
	nav.children[index].style.backgroundColor = '#fff';
}

