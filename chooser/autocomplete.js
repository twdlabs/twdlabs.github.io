

// The autocomplete function takes two arguments: text field element and array of possible autocompleted values.
function startAutocomplete(inputBox, sourceList) {
	console.log( 'sourceList['+sourceList.length+']' );
	console.table( sourceList );
	console.log( 'sourceList' + showAll(sourceList) );


	// 1. Establish data variables. 
	
	// Store global access to index of current focus. 
	var currentFocusIndex;


	// 2. Add event listeners. 

	// Do stuff when user writes in text field.
	inputBox.addEventListener('input', oninput);

	// Do stuff when user presses key on keyboard.
	inputBox.addEventListener('keydown', onkeydown);

	// Do stuff when user clicks elsewhere on document.
	document.addEventListener('click', onclizick);


	// 3. Do other stuff. 

	// Notify user autocomplete function is ready.
	showToast('Autocomplete ready');

	// Bring focus to page input box.
	$('input#pageName').focus();


	/*****/


	// Do stuff when input is added to text field. 
	function oninput(e) {
		var a, b, i, val = this.value;

		// Close any previously open lists of autocomplete values. 
		closeAllLists();
		if (!val) { return false; }
		currentFocusIndex = -1;

		// Create element that will contain the items (values):
		a = document.createElement('DIV');
		a.setAttribute('id', this.id + 'autocomplete-list');
		a.setAttribute('class', 'autocomplete-items');

		// Append the DIV element as a child of the autocomplete container:
		this.parentNode.appendChild(a);

		// For each item in the source list...
		for (i = 0; i < sourceList.length; i++) {

			// Check if the item starts with the same letters as the text field value. 
			let matchFound = sourceList[i].substr(0, val.length).toUpperCase() == val.toUpperCase();

			// 
			if (matchFound) {
				// Create element for each matching element. 
				b = document.createElement('DIV');

				// Make matching letters normal and suggestions bold. 
				b.innerHTML = sourceList[i].substr(0, val.length);
				b.innerHTML += '<strong>' + sourceList[i].substr(val.length) + '</strong>';

				// Insert a hidden input field to hold current item's complete value. 
				b.innerHTML += "<input type='hidden' value='" + sourceList[i] + "'>";

				// Execute when user selects autocomplete value. 
				b.addEventListener('click', function(e) {

					// Insert selected autocomplete value into text field. 
					inputBox.value = this.getElementsByTagName('input')[0].value;

					// Close list of autocomplete values (and any other open lists of autocomplete values). 
					closeAllLists();
				});

				// What is this ???
				a.appendChild(b);
			}
		}
	}

	// Do stuff. 
	function onkeydown(e) {
		var x = document.getElementById(this.id + 'autocomplete-list');
		if (x) x = x.getElementsByTagName('div');
		if (e.keyCode == 40) {
			// If the arrow DOWN key is pressed, increase the currentFocusIndex variable:
			currentFocusIndex++;
			// and make the current item more visible:
			addActive(x);
		} else if (e.keyCode == 38) { //up
			// If the arrow UP key is pressed, decrease the currentFocusIndex variable:
			currentFocusIndex--;
			// and make the current item more visible:
			addActive(x);
		} else if (e.keyCode == 13) {
			// If the ENTER key is pressed, prevent the form from being submitted,
			e.preventDefault();
			if (currentFocusIndex > -1) {
				// and simulate a click on the "active" item:
				if (x) x[currentFocusIndex].click();
			}
		}
	}

	// Do stuff. 
	function onclizick(e) {
		closeAllLists(e.target);
	}

	//
	function showAll(elmnts,x) {
		// 
		var result = '['+elmnts.length+']';
		// 
		for (var i=0; i<elmnts.length; i++) {
			result += '\n'+i+': \"' + elmnts[i] + '\"';
		}
		return result;
	}

	// A function to classify an item as "active":
	function addActive(x) {
		// 
		if (!x) return false;

		// Start by removing the "active" class on all items:
		removeActive(x);
		if (currentFocusIndex >= x.length) currentFocusIndex = 0;
		if (currentFocusIndex < 0) currentFocusIndex = (x.length - 1);

		// Add class "autocomplete-active":
		x[currentFocusIndex].classList.add('autocomplete-active');
	}

	// 
	function removeActive(x) {
		// A function to remove the "active" class from all autocomplete items:
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove('autocomplete-active');
		}
	}

	// Close all open lists of autocomplete values. 
	function closeAllLists(elmnt) {
		// Close all autocomplete lists in document, except the one passed as an argument. 
		var x = document.getElementsByClassName('autocomplete-items');
		// 
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inputBox) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}

}
