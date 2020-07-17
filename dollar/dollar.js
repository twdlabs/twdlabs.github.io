

function dollarFormat(n,d) {
	// Dummy Proof
	n *= 1;			// Ensure that dollar amount is actually stored as a number (not as a string).
	if(!n) n = 0;	// Ensure that dollar amount is a number.
	if(d<0) d = 0;	// Ensure that num of digits is a non-negative number.

	var result;
	var numDigits = d; // Number of digits after decimal point
	var numberString = n.toFixed(numDigits);

	// Separate negative sign to process unsigned number alone.
	var negSign = false;
	if(n < 0){
		negSign = true;
		numberString = numberString.substring( 1 , numberString.length );
	}

	// Add commas as 'thousands' separators (for numbers greater than 999.99).
	var integerLength;
	if(numDigits) integerLength = numberString.length - (1 + numDigits);
	else integerLength = numberString.length;

	if( integerLength > 3 ){
		var a = integerLength % 3;
		result = numberString.substr(0, a);

		for(var i=a ; i<=integerLength ; i+=3){
			if(i!=0 && i!=integerLength) result += ",";

			if(i==integerLength) result += numberString.substr(i, numDigits+1);
			else result += numberString.substr(i, 3);
		}
	} else result = numberString;

	// Remove negative signs for values that are rounded to 0.00
	if(result=="0.00") negSign = false;

	// Add dollar sign & positive/negative sign. Return final result.
	if(negSign) return ("-$" + result);
	else		return (" $" + result);
}

function dollar0(n) {
	return dollarFormat(n,0);
}

function dollar(n) {
	return dollarFormat(n,2);
}
