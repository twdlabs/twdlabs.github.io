
// An array containing all the country names in the world:
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
"Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi",
"Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China",
"Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic",
"Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
"Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies",
"Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana",
"Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan",
"Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
"Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar",
"Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman",
"Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar",
"Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
"Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria",
"Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu",
"Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var cities = ["Chicago","Los Angeles","New York","Houston","Dallas","Austin","Little Rock","St. Louis","San Francisco","Trenton","Phladelphia","New Orleans","Orlando","Miami","Atlanta","Las Vegas","Sacramento","Portland","Cleveland","Cincinatti","Indianapolis","Tulsa"];

// Initiate the autocomplete function on the "country" element, and pass along the countries array as possible autocomplete values:
autocomplete(document.getElementById("country"), countries);
autocomplete(document.getElementById("city"), cities);


function autocomplete(inp, arr) {

	// The autocomplete function takes two arguments, the text field element and an array of possible autocompleted values: 
	var currentFocus;

	// Do stuff when user writes in the text field:
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;

		// Close any already open lists of autocompleted values
		closeAllLists();
		if (!val) { return false; }
		currentFocus = -1;
		
		// Create a DIV element that will contain the items (values):
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		
		// Append the DIV element as a child of the autocomplete container:
		this.parentNode.appendChild(a);

		// For each item in the array...
		for (i = 0; i < arr.length; i++) {
			// Check if the item starts with the same letters as the text field value:
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				// Create a DIV element for each matching element:
				b = document.createElement("DIV");
				// Make the matching letters bold:
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				// Insert a hidden input field that will hold the current array item's value:
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				// Execute a function when someone clicks on the item value (DIV element):
				b.addEventListener("click", function(e) {
					// Insert the value for the autocomplete text field:
					inp.value = this.getElementsByTagName("input")[0].value;
					// Close the list of autocompleted values, (or any other open lists of autocompleted values):
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});

	// Do stuff when user presses a key on the keyboard:
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
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
	document.addEventListener("click", function (e) {
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
		x[currentFocus].classList.add("autocomplete-active");
	}

	function removeActive(x) {
		// A function to remove the "active" class from all autocomplete items:
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}

	function closeAllLists(elmnt) {
		// Close all autocomplete lists in the document, except the one passed as an argument:
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}

}
