
// āáǎà
// ēéěè
// īíǐì
// ōóǒò
// ūúǔù

var consonants = ['b','p','m','f','d','t','n','l','g','k','h','z','c','s','zh','ch','sh','r','j','q','x'];
var vowels = ['a','o','e','i','i','er','ai','ei','ao','ou','an','en','ang','eng','ong','i','ia','iao','ie','iu','ian','in','iang','ing','iong','u','ua','uo','uai','ui','uan','un','uang','ueng','ü','üe','üan','ün'];
var vowels2 = ['a','o','e','','','er','ai','','ao','ou','an','en','ang','eng','','yi','ya','yao','ye','you','yan','yin','yang','ying','yong','wu','wa','wo','wai','wei','wan','wen','wang','weng','yu','yue','yuan','yun'];
var table = document.getElementById('table');

// Create new empty table. 
table.innerHTML = '';

// Add the vowels to the table. 
let row1 = '<tr> <td></td>';
let row2 = '<tr> <th></th>';
for (var j=0 ; j<vowels.length ; j++) {
	row1 += '<th>' + vowels[j] + '</th>'
	row2 += '<th>' + vowels2[j] + '</th>'
}
row1 += '</tr>'
row2 += '</tr>'

table.innerHTML += row1;
table.innerHTML += row2;

// Populate the table with all consonant-vowel combinations. 
for(var i=0 ; i<consonants.length ; i++) {
	let rowX = '<tr><th>'+consonants[i]+'</th>';
	for (var j=0 ; j<vowels.length ; j++) {
		let valid = true;
		let word = consonants[i] + vowels[j];
		// Only add word if it's valid.
		if(valid) rowX += '<td id="'+word+'">' + word + '</td>';
		else 	  rowX += '<td></td>';
	}
	rowX += '</tr>';
	table.innerHTML += rowX;
}

// $('table th, table td')
$('table td')

// Highlight the table row and column when mouse ponter hovers over any cell. 
.hover(function() {
	let index = $(this).index();

	var tr = $(this).parent();
	tr.addClass('highlight');
	$('tr :nth-child('+(index+1)+')').addClass('highlight');
})
// Un-highlight the table row and column when mouse ponter leaves any cell. 
.mouseout(function() {
	let index = $(this).index();

	var tr = $(this).parent();
	tr.removeClass('highlight');
	$('tr :nth-child('+(index+1)+')').removeClass('highlight');
})

// When table cell is clicked, take the following action...
.click(function() {
	let x = $(this).offset().left + $(this).outerWidth() + 8;
	let y = $(this).offset().top - 32;
	let chosenWord = $(this).html();
	let toneNumber = $('#toneNumber').val();
	console.log( 'Clicked cell - ' + chosenWord + '' + toneNumber ,  '- ('+Math.round(x) + ', ' + Math.round(y) + ')' );

	// Open the sound chooser, allowing the user to choose which word tone to play. 
	if(toneNumber==0) {
		showSoundChooser(x,y, chosenWord);
	}
	// 
	else if( toneNumber==1 || toneNumber==2 || toneNumber==3 || toneNumber==4 ) {
		playTone(chosenWord+toneNumber+'.wav');
	}
	// 
	else {
		// $('div#soundChooser div.btn')[toneNumber-1].find('audio').play();
		console.log( $('div#soundChooser div.btn') );
		console.log( $('div#soundChooser div.btn:nth-child(1)').children('audio') );
		console.log( $('div#soundChooser div.btn:nth-child(2)').children('audio') );
		console.log( $('div#soundChooser div.btn:nth-child(3)').children('audio') );
		console.log( $('div#soundChooser div.btn:nth-child(4)').children('audio') );
	}
});

// Play the audio of the chosen word and tone. 
function playTone(fileName) {
	// Get file name of chosen word and tone. 
	console.log( 'Now playing sound.wav in place of ' + fileName );

	// Create an audio element to insert into sound player. 
	// let audio = '<audio src="'+fileName+'"><source src="'+fileName+'">Your browser does not support audio.</audio>';
	// console.log( audio );

	// Use temporary placeholder sound until sounds are recorded. 
	let audio = '<audio src="sound.wav"><source src="sound.wav">Your browser does not support audio.</audio>';
	// console.log( audio );

	// Insert audio element into sound player. 
	$('div#soundPlayer').html(audio);

	// Play the audio of the chosen word and tone. 
	audio = document.getElementById('soundPlayer').children[0];
	audio.play();
}

// Show sound chooser box with 4 pronunciation options to play audio. 
function showSoundChooser(x,y, chosenWord) {
	// Collect user input for positioning (if necessary). 
	if(!x) x = Number.parseInt( prompt('x = ') );
	if(!y) y = Number.parseInt( prompt('y = ') );

	// Position sound player based on user input. 
	$('div#soundChooser').css('left',x+'px').css('top',y+'px');

	// Populate the buttons in the sound chooser window. 
	let volIcon = '<svg viewBox="0 0 16 16" class="bi bi-volume-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/><path fill-rule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg>';
	for(var n=1 ; n<=4 ; n++) {
		// Get file name of word tone. 
		let fileName = chosenWord + n + '.wav';
		console.log( 'fileName: sound.wav (in place of ' + fileName + ')' , 'fileName: ' + fileName );

		// Create an audio element to insert into sound player. 
		// let audio = '<audio src="'+fileName+'"><source src="'+fileName+'">Your browser does not support audio.</audio>';
		// console.log( audio );

		// Use temporary placeholder sound until sounds are recorded. 
		// let audio = '<audio src="sound.wav"><source src="sound.wav">Your browser does not support audio.</audio>';
		// console.log( audio );

		// Insert audio element into sound chooser play button. 
		// $('div#soundChooser div.btn:nth-child('+n+')').html( volIcon + chosenWord + audio );

		// 
		$('div#soundChooser div.btn:nth-child('+n+')').html( volIcon + chosenWord );

		// Set word and tone as value in sound chooser play button. 
		$('div#soundChooser div.btn:nth-child('+n+')').attr( 'fileName', fileName );
	}

	// Make sound chooser visible. 
	$('div#soundChooser').show();
}

// Play the chosen sound when the user clicks a pronunciation button in the sound chooser. 
$('div#soundChooser div.btn').click(function() {
	// Save the word and tone from this button
	let fileName = $(this).attr('fileName');
	console.log( 'Clicked play button ', fileName );
	playTone( fileName );

	// Play the audio element that's inside this play button. 
	// $(this).find('audio')[0].play();
});

// Close sound chooser when clicking outside the box. 
$('#bg').click(function() {
	console.log( 'Clicked outside' );
	$('div#soundChooser').hide();

	// Remove the fileName attribute of the sound chooser play buttons. 
	$('div#soundChooser div.btn').attr('fileName','');
});


