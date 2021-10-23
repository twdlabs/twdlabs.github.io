

// 
function onSearchStart() {
	$('#searchBox').attr('placeholder','Search');

	// $('.menuBtn, .acctBtn').fadeOut(100);
	// $('.backBtn').fadeIn(100);

	if( $('#searchBox').val() ) {
		searchActive();
		// $('.clearBtn').fadeIn(100);
	}
	else {
		searchReady();
		// $('.dictateBtn').fadeIn(100);
	}
}

// 
function onQueryChange() {
	if( $('#searchBox').val() ) {
		searchActive();
		// $('.dictateBtn').hide();
		// $('.clearBtn').show();
	} 
	else {
		searchReady();
		// $('.clearBtn').hide();
		// $('.dictateBtn').show();
	}
}

// 
function onSearchEnd() {
	$('#searchBox').val('').attr('placeholder','Search here');
	searchOver();
	// $('.backBtn, .dictateBtn, .clearBtn').fadeOut(100);
	// $('.menuBtn, .acctBtn').fadeIn(100);
}

// 
function searchReady() {
	$('.floatBar').removeClass('searchActive').addClass('searchReady');
}
// 
function searchActive() {
	$('.floatBar').removeClass('searchReady').addClass('searchActive');
}
// 
function searchOver() {
	$('.floatBar').removeClass('searchReady searchActive');
}

