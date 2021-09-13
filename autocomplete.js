

// Initiate the autocomplete function on the "page" element, and pass along the pageNames array as possible autocomplete values. 
$(document).ready(function() {
	// Assign pageNames array as the source for autocomplete values. 
	autocomplete(document.getElementById('pageName'), pageNames);

	// Notify user that autocomplete function is ready. 
	showToast('Autocomplete ready');

	// Bring page focus to the text input box. 
	$('input#pageName').focus();
});



function autocomplete(nameInput, arr) {
	// 
	// console.log( 'arr['+arr.length+']' );
	// console.table( arr );
	// console.log( 'arr' + showAll(arr) );

	// 
	function showAll(elmnts,x) {
		var result = '['+elmnts.length+']';
		for (var i=0; i<elmnts.length; i++) {
			result += '\n'+i+': \"' + elmnts[i] + '\"';
		}
		return result;
	}

	// The autocomplete function takes two arguments, the text field element and an array of possible autocompleted values: 
	var currentFocus;

	// Do stuff when user writes in the text field:
	nameInput.addEventListener('input', function(e) {
		var a, b, i, val = this.value;

		// Close any already open lists of autocompleted values
		closeAllLists();
		if (!val) { return false; }
		currentFocus = -1;
		
		// Create a DIV element that will contain the items (values):
		a = document.createElement('DIV');
		a.setAttribute('id', this.id + 'autocomplete-list');
		a.setAttribute('class', 'autocomplete-items');
		
		// Append the DIV element as a child of the autocomplete container:
		this.parentNode.appendChild(a);

		// For each item in the array...
		for (i = 0; i < arr.length; i++) {
			// Check if the item starts with the same letters as the text field value:
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				// Create a DIV element for each matching element:
				b = document.createElement('DIV');
				// Make the matching letters normal and the suggestions bold:
				b.innerHTML = arr[i].substr(0, val.length);
				b.innerHTML += '<strong>' + arr[i].substr(val.length) + '</strong>';
				// Insert a hidden input field that will hold the current array item's value:
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				// Execute a function when someone clicks on the item value (DIV element):
				b.addEventListener('click', function(e) {
					// Insert the value for the autocomplete text field:
					nameInput.value = this.getElementsByTagName('input')[0].value;
					// Close the list of autocompleted values, (or any other open lists of autocompleted values):
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});

	// Do stuff when user presses a key on the keyboard:
	nameInput.addEventListener('keydown', function(e) {
		var x = document.getElementById(this.id + 'autocomplete-list');
		if (x) x = x.getElementsByTagName('div');
		if (e.keyCode == 40) {
			// If the arrow DOWN key is pressed, increase the currentFocus variable:
			currentFocus++;
			// and make the current item more visible:
			addActive(x);
		} else if (e.keyCode == 38) { //up
			// If the arrow UP key is pressed, decrease the currentFocus variable:
			currentFocus--;
			// and make the current item more visible:
			addActive(x);
		} else if (e.keyCode == 13) {
			// If the ENTER key is pressed, prevent the form from being submitted,
			e.preventDefault();
			if (currentFocus > -1) {
				// and simulate a click on the "active" item:
				if (x) x[currentFocus].click();
			}
		}
	});

	// Do stuff when user clicks in the document:
	document.addEventListener('click', function (e) {
		closeAllLists(e.target);
	});

	function addActive(x) {
		// A function to classify an item as "active":
		if (!x) return false;

		// Start by removing the "active" class on all items:
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		
		// Add class "autocomplete-active":
		x[currentFocus].classList.add('autocomplete-active');
	}

	function removeActive(x) {
		// A function to remove the "active" class from all autocomplete items:
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove('autocomplete-active');
		}
	}

	function closeAllLists(elmnt) {
		// Close all autocomplete lists in the document, except the one passed as an argument:
		var x = document.getElementsByClassName('autocomplete-items');
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != nameInput) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}

}

