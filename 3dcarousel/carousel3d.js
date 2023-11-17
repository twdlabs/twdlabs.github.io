


// Initialize current angle. 
var currentangle = 0;

// Activate direction buttons. 
activateDirectionBtns();


/*****/


// Activate direction buttons. 
function activateDirectionBtns() {
	
	// Activate back button. 
	$('.prev').on('click',{direction:'prev'},rotate);
	
	// Activate next button. 
	$('.next').on('click',{direction:'next'},rotate);
}

function rotate(event){
	if(event.data.direction=='prev') currentangle += 20;
	if(event.data.direction=='next') currentangle -= 20;
	$('.carousel').css('transform','rotateY('+currentangle+'deg)');
}

$('.item').removeClass('seed');
