

function onClear(){
	$('#n').val("");
	$('#p').val("");
	$('#outputBox').html("&nbsp;").slideUp();
	$('#snackbar').html("&nbsp;").fadeOut();
}

function setDefault(){
	$('#n').val("16");
	$('#p').val(".4");
}

function onSubmit(){
	var result = "";
	var n = $('#n').val();
	var p = $('#p').val();
	var q = 1 - p; $('#q').val(q)

	var mean = n * p;
	var variance = n * p * q;
	var stdDev = Math.sqrt(variance);
	result += "<p>X ~ B(n,p) <br/>";
	result += "E(X) = " + mean.toFixed(4) + "<br/>";
	result += "V(X) = " + variance.toFixed(4) + "&nbsp;=&gt;&nbsp;";
	result += "&sigma;<sub>X</sub> = " + stdDev.toFixed(4) + "</p>";

	var chart = "";
	chart += "<div class='row'>";
	chart += "<div class='col-xs-4' style='font-weight:bold; text-decoration:underline;'>";
	chart += "x";
	chart += "</div>";
	chart += "<div class='col-xs-4' style='font-weight:bold; text-decoration:underline;'>";
	chart += "P(X = x)";
	chart += "</div>";
	chart += "<div class='col-xs-4' style='font-weight:bold; text-decoration:underline;'>";
	chart += "P(X &le; x)";
	chart += "</div>";
	chart += "</div>";
	for(var i=0 ; i<=n ; i++) {
		chart += "<div class='row'>";
		chart += "<div class='col-xs-4'>";
		chart += i;
		chart += "</div>";
		chart += "<div class='col-xs-4'>";
		chart += pmf(i).toFixed(6);
		chart += "</div>";
		chart += "<div class='col-xs-4'>";
		chart += cdf(i).toFixed(6);
		chart += "</div>";
		chart += "</div>";
	}
	
	if(true){
		toast(result);
		$('#outputBox').html(result+chart).slideDown();
	}

	/*****/

	// Probability Mass Function
	function pmf(k) {
		return ( combinations(n,k) * Math.pow(p,k) * Math.pow(q,(n-k)) ) ;
	}

	// Cumulative Distribution Function
	function cdf(k) {
		var cum = 0;
		for (var i=0; i <=k; i++) {
			cum += pmf(i);
		}
		return cum;
	}

	/*****/

	function factorial(x) {
		if(x==0 || x==1) return 1;
		else if(x>1) return x * factorial(x-1);
		else {
			alert('Invalid parameter in funtion factorial(x)');
			return 0;
		}
	}
	function permutations(n,k) {
		return factorial(n)/factorial(n-k)
	}
	function combinations(n,k) {
		return permutations(n,k)/factorial(k);
	}
}