
$(document).ready(function(){
	var currdeg = 0;

	$('.prev').on('click',{direction:'prev'},rotate);
	$('.next').on('click',{direction:'next'},rotate);
	
	function rotate(event){
		if(event.data.direction=='prev') currdeg += 20;
		if(event.data.direction=='next') currdeg -= 20;
		$('.carousel').css('transform','rotateY('+currdeg+'deg)');
	}

	$('.item').removeClass('untouched');
});
