

var notSupported = "Sorry, your browser does not support web storage..."



function showAll() {
	if( localStorage.length==0 ) document.getElementById("inventory").innerHTML += '[empty]';

	for(let i=0 ; i<localStorage.length ; i++) {
		var dataKey = localStorage.key(i);
		var dataValue = localStorage.getItem(dataKey);
		document.getElementById("inventory").innerHTML += '<br>'+i+': ' + dataKey + ' = ' + dataValue;
	}
}

window.onload = showAll;


function clickCounter() {
	// Check browser support for localStorage and sessionStorage. 
	if(typeof(Storage) !== "undefined") {
		if (localStorage.getItem('clickcount')) {
			localStorage.setItem('clickcount', Number(localStorage.clickcount) + 1);
		} else {
			localStorage.setItem('clickcount', 1);
		}
		document.getElementById("result").innerHTML = "Click count: " + localStorage.getItem('clickcount') + " time(s)";
	} else {
		document.getElementById("result").innerHTML = notSupported;
	}
}

function clickCounter2() {
	// Check browser support for localStorage and sessionStorage. 
	if(typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}
		document.getElementById("result").innerHTML = "Click count: " + localStorage.clickcount + " time(s)";
	} else {
		document.getElementById("result").innerHTML = notSupported;
	}
}

function clickCounter3() {
	// Check browser support for localStorage and sessionStorage. 
	if(typeof(Storage) !== "undefined") {
		if (localStorage['clickcount']) {
			localStorage['clickcount'] = Number(localStorage['clickcount']) + 1;
		} else {
			localStorage['clickcount'] = 1;
		}
		document.getElementById("result").innerHTML = "Click count: " + localStorage['clickcount'] + " time(s)";
	} else {
		document.getElementById("result").innerHTML = notSupported;
	}
}

