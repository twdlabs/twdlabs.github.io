
var quoteData = [];
var dollarCostAvg = false;
var priceCheckOn = false;
var datesOn = false;
var mLength = [31,28,31, 30,31,30, 31,31,30, 31,30,31];

function onClear() {
	document.getElementById('symbolInput').value = "";
	document.getElementById('startingPrice').value = "";
	document.getElementById('endingPrice').value = "";
	document.getElementById('timeInput').value = "";
	if(datesOn) {
		document.getElementById('month0').value = "";
		document.getElementById('date0').value = "";
		document.getElementById('year0').value = "";
		document.getElementById('month').value = "";
		document.getElementById('date').value = "";
		document.getElementById('year').value = "";
	}
}

function setDefault() {
	document.getElementById('startingPrice').value = document.getElementById('startingPrice').placeholder;
	document.getElementById('endingPrice').value = document.getElementById('endingPrice').placeholder;
	document.getElementById('timeInput').value = document.getElementById('timeInput').placeholder;
}

function onSubmit() {
	var m0,d0,y0, m,d,y;
	var dt, price0, price;
	var overallGrowth, cagr;
	
	// Determine the time span, based on (a) specific dates or (b) a given number of years.
	if (datesOn){
		m0 = document.getElementById('month0').value; //if(m0>12) m0=12;
		d0 = document.getElementById('date0').value; //if(d0>mLength[m0-1]) d0=mLength[m0-1];
		y0 = document.getElementById('year0').value; //if(y0>2017) y0=2017;
		m = document.getElementById('month').value; //if(m>12) m=12;
		d = document.getElementById('date').value; //if(d>mLength[m-1]) d=mLength[m-1];
		y = document.getElementById('year').value; //if(y>2017) y=2017;
		if(m0&&d0&&y0&&m&&d&&y) dt = yearNumber(y,m,d) - yearNumber(y0,m0,d0);
		else alert("Error: Invalid date input.");
		document.getElementById('timeInput').value = dt.toFixed(3);
	}
	else{
		dt = 1.0*document.getElementById('timeInput').value;
	}
	
	// Do something crazy when dollar cost averaging.
	if(dollarCostAvg){
		alert("Sorry I have not been implemented quite yet.");
	}
	
	// Obtain price from loaded quote data if available.
	if(priceCheckOn){
		price0 = 1.0*getPrice(m0,d0,y0);
		price = 1.0*getPrice(m,d,y);
		document.getElementById('startingPrice').value = price0;
		document.getElementById('endingPrice').value = price;
	}
	
	// Save the user input prices.
	price0 = document.getElementById('startingPrice').value;
	price = document.getElementById('endingPrice').value;
	if(!price0 || !price || !dt){
		toast("Invalid input.")
		return;
	}
	
	// Calculate the overall return and average annual return.
	overallGrowth = (price/price0) - 1;
	cagr = Math.pow( (price/price0), (1/dt) ) - 1; // cagr = (price/price0)^[1/(t-t0)] - 1;
	document.getElementById('overallGrowth').innerHTML = percent(overallGrowth);
	document.getElementById('cagr').innerHTML = percent(cagr);
}


// See how data is stored in data array.
function displayIt(data){
	var dataString = "";
	for(var i=0;i<data.length;i++){
		if(i>0) dataString += ", ";
		dataString += (i + ":[" + data[i] + "]");
	}
	//alert(dataString + " displayed.")
	return dataString;
}

// Display number as a percentage.
function percent(num) {
	return (num*100.0).toFixed(1) + "%";
}

function yearNumber(yyyy,mm,dd) {
	var result;
	var tmp = 0.0
	for(var i=0;i<(mm-1);i++){
		tmp+=1.0*mLength[i]
	}
	tmp+=1.0*dd;
	
	result = 1.0*yyyy + (tmp/365.0);
	toast("yearNumber("+yyyy+"/"+mm+"/"+dd+") = " + result.toFixed(3) + " yrs");
	return ( result );
}

// Save separated quote data into quoteData[] array for analysis.
function loadData(data) {
	var msg = "";

	// Check if data is loaded.
	if(!data) {
		alert("Error: Quote data empty.");
		return;
	}
	
	// Create quoteData[] array of quote objects and display the data.
	data = data.split("\n")
	msg += "data.length = "+data.length;
	msg += "<br/>i&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[i]";

	for (var i=0;i<data.length;i++){
		data[i] = data[i].split(',');
		
		quote = {date:data[i][0], open:data[i][1], high:data[i][2], low:data[i][3], close:data[i][4], volume:data[i][5], adjClose:data[i][6]};
		quoteData.push(quote);
		
		msg += "<br/>["+i+"]&nbsp;&nbsp;&nbsp;";
		msg += displayIt( data[i] );
	}
	msg += "Quote data succesfully loaded.";
	toast(msg);
}

// Return the closing price for the given date.
function getPrice(mm,dd,yyyy) {
	var result;
	if(mm.length<2) mm = "0"+mm;
	if(dd.length<2) dd = "0"+dd;
	if(yyyy.length<4) yyyy = "0"+yyyy;
	
	// Return closing price if date is found.
	for(var i=0;i<quoteData.length;i++){
		var quote = quoteData[i];
		var str = yyyy+'-'+mm+'-'+dd;
		
		if(quote.date==str){
			result = quote.adjClose;
			//alert( "quoteData["+i+"] = " + displayIt(quote) + "\ngetPrice("+str+") = "+result );
			return result;
		}
	}
	
	// Show message if date is not found (result undefined).
	if(!result){
		alert("Error: Value not found for "+str);
		return 0.00;
	}
}

function toggleStrategy(selection){
	// Lump sum investment strategy
	if(selection==0){
		dollarCostAvg = false;
		// Show checkboxes
		document.getElementById('checkboxes').style.display = "block";
		document.getElementById('datesOn').checked = false;
		toggleDates();
	}
	
	// Dollar-cost averaging investment strategy
	else if(selection==1){
		dollarCostAvg = true;
		// Turn on market check (required for DCA)
		document.getElementById('priceCheckOn').checked = true;
		togglePriceCheck();
		// Hide checkboxes
		document.getElementById('checkboxes').style.display = "none";
	}
	
	// Invalid input notification
	else alert("Error: Invalid strategy selected.");
}

function toggleDates() {
	if(document.getElementById('datesOn').checked){
		datesOn = true;
		document.getElementById('dateArea').style.display = "block";
	}
	else {
		datesOn = false;
		document.getElementById('dateArea').style.display = "none";
		document.getElementById('priceCheckOn').checked = false;
		togglePriceCheck();
	}
}

function togglePriceCheck() {
	if(document.getElementById('priceCheckOn').checked){
		priceCheckOn = true;
		document.getElementById('symbolArea').style.display = "block";
		document.getElementById('datesOn').checked = true;
		toggleDates();
	}
	else {
		priceCheckOn = false;
		document.getElementById('symbolArea').style.display = "none";
	}
	
}
