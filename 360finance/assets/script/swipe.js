

// TODO: Begin swipe gesture. 
function beginSwipe(event) {
	// console.log(event.type,event);

	// 
	lastPointX = event.clientX || event.touches[0].clientX;
	// console.log('Last point x:',lastPointX);
}

// TODO: End swipe gesture. 
function endSwipe(event) {
	console.log(event.type,event);

	// 
	let newPointX = event.clientX || event.touches[0].clientX;
	// console.log('New point x:',newPointX);

	// Check direction of swipe gesture. 
	if(swipeActive) checkSwipe(newPointX-lastPointX);

	// Reset horizontal position of pointer. 
	lastPointX = undefined;
}

// TODO: Check direction of swipe gesture. 
function checkSwipe(dx) {
	console.log('dx:',dx);

	// Set swipe length threshold. 
	const dxThreshold = 100;
	
	// Handle left swipe gesture. 
	if(dx<(-1)*dxThreshold) {

		// Increment page index (if possible). 
		currentPageIndex++;
		if(currentPageIndex>=navdata.length) currentPageIndex = 0;

		// Open page at current index. 
		openSelectedPage();
	}

	// Handle right swipe gesture. 
	if(dx>dxThreshold) {

		// Decrement page index (if possible). 
		currentPageIndex--;
		if(currentPageIndex<0) currentPageIndex = navdata.length-1;

		// Open page at current index. 
		openSelectedPage();
	}
}
