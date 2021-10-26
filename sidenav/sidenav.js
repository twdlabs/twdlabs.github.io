



$(document).ready(function() {
	// 
	$('div#mySidenav div.container').on( 'mouseenter' , function(event){
		// Allow default scroll bars to come back. 
		$(this).css('overflow-y','')
		console.log('sidenav container ', event.type);
	} );
	
	// 
	$('div#mySidenav div.container').on( 'mouseleave' , function(event){
		// Remove scroll bars temporarily. 
		$(this).css('overflow-y','hidden')
		console.log('sidenav container ', event.type);
	} );
});






// let events = ['click','dblclick','mousedown','mouseup','mousewheel','wheel',  'touchcancel','touchend','touchstart',  'drag','dragstart','dragend','dragenter','dragleave','drop', 'change','keydown','keypress','keyup','input'];
// var debugSideNav = confirm('Debug side menu ?');
// var debugSideNav = true;
// var debugSideNav = false;


// window.onload = debugSideNav;
function debugSideNav(dbsn) {
	if(!dbsn) return;

	$('#mySidenav').addClass('debug');

	// Move Starters
	document.getElementById('mySidenav').addEventListener( 'dragstart' , startMovement );
	document.getElementById('mySidenav').addEventListener( 'mousedown' , startMovement );
	document.getElementById('mySidenav').addEventListener( 'touchstart' , startMovement );

	// Move Makers
	document.body.addEventListener( 'drag' , doMovement );
	document.body.addEventListener( 'mousemove' , doMovement );
	document.body.addEventListener( 'touchmove' , doMovement );

	// Move Finishers
	document.body.addEventListener( 'dragend' , endMovement );
	document.body.addEventListener( 'mouseup' , endMovement );
	//document.body.addEventListener( 'mouseleave' , endMovement );
	document.body.addEventListener( 'touchend' , endMovement );
	document.body.addEventListener( 'touchcancel' , endMovement );
}





///////////////////////////////////////////
///////////// Side Navigation /////////////
///////////////////////////////////////////

function toggleMenu() {
	var alreadyOpen = $('#menuBtn').hasClass('open') || $('#mySidenav').hasClass('open');

	if(!alreadyOpen) openSideNav();
	else 			 closeSideNav();
}

function openSideNav() {
	console.log('Opening mySidenav');

	// Remove custom positioning. 
	$('#mySidenav').css('transform', '');

	// Open side nav. 
	$('#menuBtn,#mySidenav').addClass('open');

	// Show page overlay. 
	$('#overlay').fadeIn();

	// Remove scrollability from rest of page. 
	$('body').addClass('fixed');
}

function closeSideNav(keepOverlay) {
	console.log('Closing mySidenav');

	// Remove custom positioning. 
	$('#mySidenav').css('transform', '');

	// Open side nav. 
	$('#menuBtn,#mySidenav').removeClass('open');

	// Hide page overlay. 
	if(!keepOverlay) $('#overlay').fadeOut();

	// Add scrollability back to rest of page. 
	$('body').removeClass('fixed');
}





var lockedIn = false;
var origX;



function startMovement(event){
	console.log('sidenav ', event.type, event);
	// event.preventDefault();

	// Get width of sidenav. 
	let width = document.getElementById('mySidenav').offsetWidth; 
	// console.log('width ', width);

	// Get mouse x-location. 
	if(event.type=='touchstart') {
		origX = event.touches[0].offsetX;
		console.log('touch origX ', origX);
	}
	else {
		origX = event.offsetX;
		console.log('mouse origX ', origX);
	}

	// Get proportion. 
	// let proportion = 100 * ( x / width );
	// console.log( 'proportion =', x+'/'+width, '=', Math.round(proportion)+'%' );

	// Attach sidenav position to mouse pointer location. 
	lockedIn = true;
}



function moveOut(event) {
}


function moveIn(event) {
}



function doMovement(event) {
	console.log('sidenav ', event.type, event);

	// Follow the mouse pointer x-location with sidenav if it's attached. 
	// Ignore if tmove not started yet. 
	if(!lockedIn) return;


	// Get width of sidenav. 
	let width = document.getElementById('mySidenav').offsetWidth; 
	// console.log('width ', width);

	// Get mouse x-location. 
	if(event.type=='touchmove') {
		var x = event.touches[0].clientX;
	}
	else {
		var x = event.clientX;
	}
	console.log('x ', x);
	let xIn = event.offsetX;
	console.log('xIn ', xIn);

	// Get proportion. 
	let proportion = 100 * ( x / width );
	console.log( 'proportion =', x+'/'+width, '=', Math.round(proportion)+'%' );

	// Close sidenav
	if( !proportion || proportion <= 0 ) {
		console.log('<--- saturated');
		// $('#mySidenav').css( 'left', 0-width );
		$('#mySidenav').css( 'transform', 'translateX(0)' );
	}
	// Open sidenav
	else if( proportion > 100 ) {
		console.log('saturated --->');
		// $('#mySidenav').css( 'left', width-width );
		$('#mySidenav').css( 'transform', 'translateX(100%)' );
	}
	// Set sidenav the mouse pointer x location. 
	else {
		console.log('in between');
		// $('#mySidenav').css( 'left', x-width );
		// $('#mySidenav').css( 'transform', 'translateX( calc(100% - '+x+'px) )' );
		let open = $('#mySidenav').hasClass('open');
		if(open) {
			$('#mySidenav').css( 'transform', 'translateX( calc(100% - '+origX+'px) ' );
		}
		else {
			$('#mySidenav').css( 'transform', 'translateX('+proportion+'%)' );
		}
	}
}



function endMovement(event){
	console.log('sidenav ', event.type, event);

	// Ignore if tmove not started yet. 
	if(!lockedIn) return;


	// Get width of sidenav. 
	let width = document.getElementById('mySidenav').offsetWidth; 
	// console.log('width ', width);

	// Get mouse x-location. 
	if(event.type=='touchend' || event.type=='touchcancel') {
		var x = event.changedTouches[0].clientX;
	}
	else {
		var x = event.clientX;
	}
	console.log('x ', x);

	// Get proportion. 
	let proportion = 100 * ( x / width );
	console.log( 'proportion =', x+'/'+width, '=', Math.round(proportion)+'%' );

	// Release sidenav position from mouse pointer location. 
	lockedIn = false;

	// Let go of the side navigation menu
	onLetGoSideNav(proportion);
}

function onLetGoSideNav(proportion) {
	console.log('onLetGoSideNav ', proportion);

	// Check if it is already open. 
	let open = $('#mySideNav').hasClass('open');

	// Automatically close it if it's already open.
	if(open) {
		// console.log('open', open);
		// console.log('proportion', proportion);
		// closeSideNav();
		// $('#mySideNav').css('background-color','orange');
	}
	// If sidenav is out 50% or more, let the sidenav open completely. 
	else if( proportion>50 ) {
		console.log('open', open);
		console.log('proportion (>30)', proportion);
		openSideNav();
	}
	// Otherwise, let it snap back closed. 
	else {
		console.log('else');
		console.log('open', open);
		console.log('proportion', proportion);
		closeSideNav();
	}
}

