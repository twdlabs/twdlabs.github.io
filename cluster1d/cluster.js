

// Number of divisions on the number line
const numDivisions = 4;

// Maximium value for any given data point
var maxValue;


// Number of data points
var numDataPoints;

// Array of data points
var dataPoints;	// = [ 4.5, 0.9, 20.9, 2.5, 30.1, 27.9, 8.8, 19.1, 20.0, 24.5 ]


// Number of clusters
var numClusters;

// Arrays representing clusters: integer indexes of the contained data points (for the dataPoints array)
var clusters;	// = [  [ ], [ ], [ ], [ ]  ]

// Number values of cluster centroids
var centroids;


// Repeating function
var repeatingFunctions = [];

// Cluster sizes (stability detection)
var clusterSizes = [];

// Number of repeated iterations
var numIterations;

// Stability of current cluster solution
var stableSolution;






// Create a new data set when the page is loaded. 
$(document).ready(createDataSet);





// 1. Create original data points. 
function createDataSet() {
	console.log('\n\n1. Creating original data points...');

	// Initialize data set. 
	dataPoints = [];

	// Set size of data set. 
	numDataPoints = 100;

	// Create data points. 
	maxValue = 500;
	let dataItems = '';
	let dataList = '<table>';
	for(let i=0 ; i<numDataPoints ; i++) {
		// Generate a new random data point. 
		let x = Math.random() * maxValue;

		// Save to storage for data points. 
		dataPoints.push(x);

		// Add to data items (on number line). 
		let proportion = x/maxValue;
		dataItems += '<div id="x'+i+'" class="item" style="left:'+(100*proportion)+'%;">'+x.toFixed(1)+'</div>';

		// Add to list of data (in legend). 
		dataList += '<tr id="var'+i+'" class="var">  <td class="name">x<sub>'+i+'</sub></td>  <td class="value">'+x.toFixed(1)+'</td>  </tr>';
	}
	dataList += '</table>';

	// Create markers. 
	let markers = '';
	for(let i=0 ; i<=numDivisions ; i++) {
		let proportion = i / numDivisions;
		markers += '<div class="marker" style="left:'+(100*proportion)+'%;"> <div class="x">'+(maxValue*proportion)+'</div> </div>';
	}

	// Add data points to page.
	$('#legend .in').html(dataList);
	$('#numLine').html(dataItems + markers);

	// Remove previous centroids and clusters. 
	numClusters = undefined;
	clusters = undefined;
	clusterA = undefined;
	clusterB = undefined;
	clusterC = undefined;
	clusterD = undefined;
	centroids = undefined;
	centroidA = undefined;
	centroidB = undefined;
	centroidC = undefined;
	centroidD = undefined;
}
// 1. Get original data points. 
function getUserDataSet() {
	console.log('\n\n1. Getting original data points...');

	// Initialize data set. 
	dataPoints = [];

	// Initialize size of data set. 
	numDataPoints = 0;

	// Get data points. 
	while(true) {
		// Ask user for new data point. 
		let x = 1 * prompt('dataPoints['+numDataPoints+']');
		
		// Save to storage for data points. 
		if(x) {
			console.log('x['+numDataPoints+']:',x);
			dataPoints.push(x);
		}
		// End user input when invalid data is received. 
		else {
			console.log('Now ending input.')
			console.log('x['+numDataPoints+']:',x)
			break;
		}
	}
	console.log('numDataPoints',numDataPoints);

	// Create data points. 
	maxValue = getMaxValue(dataPoints);
	let dataList = '';
	let dataItems = '';
	for(let i=0 ; i<numDataPoints ; i++) {
		// Add to data items (on number line). 
		let proportion = x/maxValue;
		dataItems += '<div id="x'+numDataPoints+'" class="item" style="left:'+(100*proportion)+'%;">'+x.toFixed(1)+'</div>';

		// Add to list of data (in legend). 
		dataList += '<tr id="var'+numDataPoints+'" class="var">  <td class="name">x<sub>'+numDataPoints+'</sub></td>  <td class="value">'+x.toFixed(1)+'</td>  </tr>';

		// Increment counter. 
		numDataPoints++;
	}

	// Create markers. 
	let markers = '';
	for(let i=0 ; i<=numDivisions ; i++) {
		let proportion = i / numDivisions;
		markers += '<div class="marker" style="left:'+(100*proportion)+'%;"> <div class="x">'+(maxValue*proportion)+'</div> </div>';
	}

	// Add data points to page.
	$('#legend .in').html(dataList);
	$('#numLine').html(dataItems + markers);

	/*****/

	function getMaxValue(dataSource) {
		// Initialize to lowest possible 'number value'. 
		let result = -Infinity;

		// Check every item in the data source. 
		for(let i=0 ; i<dataSource.length ; i++) {
			let x = 1*dataSource[i]
			if(x>result) result = x;
		}

		// Round it up a bit. 
		result
		return result;
	}
}







// GENERAL VERSION
function runAll() {
}

/*****/

// 2. Create initial cluster centroids. 
function createCentroids() {
	// Create initial cluster centroids (using randomly generated points). 
	console.log('\n\n2. Creating initial cluster centroids...');

	// Create new clusters. 
	createNewClusters();

	// Create new centroids. 
	centroids = [];
	for(let h=0 ; h<numClusters ; h++) {
		centroids.push( maxValue * Math.random() );
	}

	// Show centroids on page. 
	showCentroids();

	/*****/

	// Create new clusters. 
	function createNewClusters() {
		// Set number of clusters. 
		numClusters = 1*$('input#numClusters').val();
		console.log(numClusters,'clusters');

		// Error correction
		if(!numClusters) {
			toast('Invalid number of clusters. Please try again.');
			return;
		}
		
		// Initialize empty clusters. 
		clusters = [];
		for(let h=0 ; h<numClusters ; h++) {
			clusters.push( [] );
		}
	}
}

/*****/

// 2. Move centroids to center of clusters. 
function centerCentroids() {
	console.log('\n\n2. Moving centroids to center of clusters...');

	// Refresh centroids (to center of clusters). 
	for(h=0 ; h<numClusters ; h++) {
		centroids[h] = getClusterMean( clusters[h] );
	}
	
	// Show centroids on page. 
	showCentroids();
}
/*****/
// Calculate arithmetic mean of cluster. 
function getClusterMean(cluster) {
	// console.log('Calculating mean...',cluster);

	// Check if clusters have been initialized. 
	if( !cluster ) {
		console.log('Cluster undefined');
		toast('Cluster undefined');
		return 0;
	}

	// Sum up data points. 
	let result = 0;
	for(let i=0 ; i<cluster.length ; i++){
		result += dataPoints[ cluster[i] ];
	}
	// console.log('sum:',result);

	// Divide by number of data points. 
	result /= cluster.length;
	// console.log('mean:',result);

	return result;
}
/*****/
// Update representation of cluster centroids on page. 
function showCentroids() {
	console.log('Updating centroids on page...');

	// Check if centroids have been initialized. 
	if( !clusters ) {
		console.log('Centroids undefined');
		toast('Centroids undefined');
		return;
	}

	let clusterCentroids = '';
	for(let i=0 ; i<numClusters ; i++) {
		console.log( 'centroids['+i+']', centroids[i].toFixed(1) );
		clusterCentroids += '<div id="c'+i+'" class="item centroid" style="left:'+(100 * centroids[i]/maxValue)+'%;">'+centroids[i].toFixed(1)+'</div>';
	}
	$('#numLine .centroid').remove();
	$('#numLine').append(clusterCentroids);
}

/*****/

// 3. Associate points to clusters by proximity. 
function clusterDataPoints() {
	console.log('\n\n3. Associating points to clusters by proximity...');

	// Re-initiate clusters. 
	for(let h=0 ; h<numClusters ; h++) {
		clusters[h] = [];
	}

	// Associate points to clusters by proximity. 
	for(let i=0 ; i<numDataPoints ; i++) {
		// Calculate distance to each cluster centroid. 
		let deltaX = [];
		for(let j=0 ; j<numClusters ; j++) {
			let dx = Math.abs( dataPoints[i] - centroids[j] )
			deltaX.push(dx);
			// console.log('deltaX['+j+']:',deltaX[i]);
		}

		// Find closest centroid (minimum distance). 
		let minDistance = Infinity;
		let indexOfClosestCluster = -1;
		// Check each to see if its smaller than the previous minimum. 
		for(let j=0 ; j<numClusters ; j++) {
			// 
			if(deltaX[j] < minDistance) {
				minDistance = deltaX[j];
				indexOfClosestCluster = j;
			}
		}

		// console.log('x'+i, 'cluster['+indexOfClosestCluster+']', minDistance.toFixed(1));

		// Add index reference to appropriate cluster array. 
		clusters[indexOfClosestCluster].push(i);
	}
	// Show clusters on page. 
	showClusters();
}
/*****/
// Update representation of cluster groupings on page. 
function showClusters() {
	console.log('Updating clusters on page...');

	// Check if clusters have been initialized. 
	if( !clusters ) {
		console.log('Clusters undefined');
		toast('Clusters undefined');
		return;
	}

	for(let h=0 ; h<clusters.length ; h++) {
		console.log('clusters[h]',clusters[h]);
	}

	// Color codes for clusters
	// clusterColor = ['gold', 'limegreen', 'blue', 'red', 
	clusterColor = ['#ffd70088', '#32cd3288', '#0000ff88', '#ff000088', 
					'#9400ff', '#df00a9', '#0a84ff', '#12bc00', 
					'#ea8000', '#00b0bd', '#d70022', '#4b42ff', 
					'#b5007f', '#058b00', '#a47f00', '#005a71' ];

	// Add group color to each cluster. 
	for(let h=0 ; h<clusters.length ; h++) {
		for(let i=0 ; i<clusters[h].length ; i++) {
			// Get index of data point. 
			indexOfDataPoint = clusters[h][i];

			// Set color of data point by cluster (on number line). 
			$('#x'+indexOfDataPoint).css('background-color',clusterColor[h]);

			// Set color of data point by cluster (in legend). 
			$('#var'+indexOfDataPoint).css('color',clusterColor[h]);
		}
	}
}

/*****/

// 4. Repeat steps 2-3 until solution is stable. 
function repeatCenterAndCluster() {
	// Create centroids. 
	createCentroids();

	// Associate points to clusters by proximity. 
	clusterDataPoints();

	// Repeat functions until stable. 
	let rptFunc = setInterval(function(){
		// Refresh centroids to center of clusters. 
		centerCentroids();
		setTimeout(function(){
			// Associate points to clusters by proximity.
			clusterDataPoints();

			// Equate solution's stability to same array sizes over 4 subsequent iterations.
			stableSolution = true;

			// Stop repeating when the solution is stable. 
			if(stableSolution) stopRepeating();
		},125);
	},250);
	repeatingFunctions.push(rptFunc);

	// Refresh centroids to center of clusters. 
	// centerCentroids();

	// Associate points to clusters by proximity. 
	// clusterDataPoints();
}
// Stop the repeating function. 
function stopRepeating() {
	console.log('\n\n4. Stopping all repeating functions...');
	
	// Stop all repeating functions. 
	for(let h=0 ; h<repeatingFunctions.length ; h++) {
		clearInterval(repeatingFunctions[h]);
	}
	toast('Done');

	// Reset group of repeating functions. 
	repeatingFunctions = [];
}






/******************************/
	// // Create initial cluster centroids (using random points from existing data set). 
	// else {
	// 	let iA = 0, iB = 0, iC = 0;
	// 	// Choose a distinct random index for each cluster centroid seed. 
	// 	do {
	// 		iA = Math.floor( numDataPoints * Math.random() );
	// 		iB = Math.floor( numDataPoints * Math.random() );
	// 		iC = Math.floor( numDataPoints * Math.random() );
	// 	} while(iA==iB || iB==iC || iC==iA);

	// 	// Reset previous highlights. 
	// 	$('#legend .var').removeClass('A B C seed');
	// 	// Highlight seed variables in legend. 
	// 	$('#legend #var'+iA).addClass('A seed');
	// 	$('#legend #var'+iB).addClass('B seed');
	// 	$('#legend #var'+iC).addClass('C seed');

	// 	// Highlight variables in legend (color-coded by cluster affiliation). 
	// 	clusterClass = ['A','B','C'];
	// 	for(let i=0 ; i<clusters.length ; i++) {
	// 		console.log('Cluster',i);
	// 		cluster = clusters[i];
	// 		for(let j=0 ; j<clusters[i].length ; j++) {
	// 			// Get index of data point in cluster. 
	// 			let indexOfDataPoint = cluster[j];
	// 			// Add class to corresponding variable indicator in legend. 
	// 			$('#legend #var'+indexOfDataPoint).addClass(clusterClass[i]);
	// 		}
	// 	}

	// 	// Assign random choices from existing data points as seed for each cluster centroid. 
	// 	centroidA = dataPoints[iA];
	// 	centroidB = dataPoints[iB];
	// 	centroidC = dataPoints[iC];
	// 	// console.log( 'centroidA',centroidA.toFixed(1), '@ iA',iA );
	// 	// console.log( 'centroidB',centroidB.toFixed(1), '@ iB',iB );
	// 	// console.log( 'centroidC',centroidC.toFixed(1), '@ iC',iC );
	// }

	// // Create initial centroid seeds (using random points from data set). 
	// else {
	// 	// Choose a distinct random index for each cluster centroid seed. 
	// 	// Assign random choices from existing data points as seed for each cluster centroid. 
	// 	for(let i=0 ; i<numClusters ; i++) {
	// 		let isDistinct = false;
	// 		let index = -1;
	// 		do {
	// 			let index = Math.floor( numDataPoints * Math.random() );
	// 			let x = dataPoints[index]
	// 			isDistinct = checkUniqueSeed(x,centroids);
	// 		} while(!isDistinct);
			
	// 		centroids[index] = dataPoints[xyz];
	// 	}
	// }

	/*****/

	// // Confirm that a value does not exist in array.
	// function checkUniqueSeed(val,arr) {
	// 	return !( arr.includes(val) );
	// }
/******************************/
