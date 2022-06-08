

// Handle beginning of search. 
function onSearchStart() {
	// Modify placeholder text in search field. 
	$('#searchBox').attr('placeholder','Search');

	// $('.floatBar .menuBtn, .floatBar .acctBtn').fadeOut(100);
	// $('.floatBar .backBtn').fadeIn(100);

	// Handle initial search query. 
	onQueryChange();

}



// Handle change of search query. 
function onQueryChange() {

	// Get current search query. 
	let currentQuery = $('#searchBox').val();

	// Set search status to 'active' if text field has content. 
	if( currentQuery ) {
		searchActive();
		// $('.floatBar .dictateBtn').hide();
		// $('.floatBar .clearBtn').show();
		// $('.floatBar .clearBtn').fadeIn(100);
	}

	// Set search status to 'ready' if text field has no content. 
	else {
		searchReady();
		// $('.floatBar .clearBtn').hide();
		// $('.floatBar .dictateBtn').show();
		// $('.floatBar .dictateBtn').fadeIn(100);
	}

	/*****/
	
	// Set search status to 'active'. 
	function searchActive() {
		$('.floatBar').removeClass('searchReady').addClass('searchActive');
	}
	// Set search status to 'ready'. 
	function searchReady() {
		$('.floatBar').removeClass('searchActive').addClass('searchReady');
	}
}




// Handle end of search. 
function onSearchEnd() {
	// Clear search field. 
	$('#searchBox').val('')
	// Modify placeholder text in search field. 
	.attr('placeholder','Search here');

	// 
	searchOver();
	// $('.floatBar .backBtn, .floatBar .dictateBtn, .floatBar .clearBtn').fadeOut(100);
	// $('.floatBar .menuBtn, .floatBar .acctBtn').fadeIn(100);

	/*****/

	// Remove search status. 
	function searchOver() {
		$('.floatBar').removeClass('searchReady searchActive');
	}
}




// Synchronize the contents of both search text fields. 
function syncronizeInput(event) {
	
	// Get content of chnaged search field. 
	var trgt = event.currentTarget.value;

	// Update both search fields. 
	$('#searchBox').val(trgt);
	$('#pageName').val(trgt);
}
