


// Get chart element. 
var canvas = document.getElementById('normalChart').getContext('2d');

// Get chart data analyzer. 
var normalChart;

// Define number of standard deviations to include in graph. 
var N = 4;

// Initialize chart data. 
const chart = {
	type:'bar',
	type:'line',
	data:{
		labels:[],
		datasets:[
			{
				label:'Normal distribution',
				backgroundColor:'rgba(0,137,255,0.625)',
				data:[]
			}
		]
	}
};


/*****/


function go() {

	// Get user input: sample mean. 
	const mean = 1 * document.getElementById('mean').value;
	// Get user input: sample standard deviation. 
	const stdev = 1 * document.getElementById('stdev').value;

	// Reset previous data points. 
	chart.data.labels = [];
	chart.data.datasets[0].data = [];

	// Go thru each data point. 
	for (let x=(mean-N) ; x<=(mean+N) ; x+=.125) {

		// Add data point label. 
		chart.data.labels.push(x);

		// Calculate function value for current data point. 
		let y = pdf(x, mean,stdev);

		// Add data point. 
		chart.data.datasets[0].data.push(y);
	}

	// Remove any previously charted data. 
	if(normalChart!=null) {
		normalChart.destroy();
	}

	// Add charted data to canvas (thru Chart object). 
	normalChart = new Chart(canvas,chart);

	/****/

	// Probability Density Function for Normal Distribution
	function pdf(x, mu, s) {
		let result = (1 / (Math.sqrt(2*Math.PI)*s) ) * Math.exp( (x-mu)*(x-mu) / (-2*s*s) );
		console.log('pdf('+x+', '+mu+','+s+') =', result);
		return result;
	}
}
