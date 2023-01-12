

// Arrays representing clusters: integer indexes of the contained data points (for the dataPoints array)
var clusterA;	// = [1, 3, 0]
var clusterB;	// = [7, 8, 2]
var clusterC;	// = [5, 4]
var clusterD;	// = [6, 9]

// Number values of cluster centroids
var centroidA, centroidB, centroidC, centroidD;


// Cluster size trackers (stability detection)
var clusterSizesA;
var clusterSizesB;
var clusterSizesC;
var clusterSizesD;






// SPECIAL VERSION for k = 4
function runAll4() {
}

/*****/

// 2. Create initial cluster centroids. 
function createCentroids4() {
	// Create initial cluster centroids (using randomly generated points). 
	console.log('\n\n2. Creating initial cluster centroids...');

	// Create new clusters. 
	createNewClusters4();

	// Create new centroids. 
	createNewCentroids4();

	// Show centroids on page. 
	showCentroids4();

	/*****/

	// Create new clusters. 
	function createNewClusters4() {
		// Set number of clusters. 
		numClusters = 4;
		// console.log(numClusters,'clusters');

		// Initialize empty clusters. 
		clusterA = [];
		clusterB = [];
		clusterC = [];
		clusterD = [];

		// Initialize cluster size trackers for stability detection. 
		clusterSizesA = [];
		clusterSizesB = [];
		clusterSizesC = [];
		clusterSizesD = [];
	}
	// Create new centroids. 
	function createNewCentroids4() {
		let x = 0, y = 0;
		x = maxValue * Math.random();
		y = maxValue * Math.random();
		centroidA = [x,y];
		x = maxValue * Math.random();
		y = maxValue * Math.random();
		centroidB = [x,y];
		x = maxValue * Math.random();
		y = maxValue * Math.random();
		centroidC = [x,y];
		x = maxValue * Math.random();
		y = maxValue * Math.random();
		centroidD = [x,y];
	}
}

/*****/

// 2. Move centroids to center of clusters. 
function centerCentroids4() {
	console.log('\n\n2. Moving centroids to center of clusters...');

	// Refresh centroids (to center of clusters). 
	centroidA = [ getClusterMeanX(clusterA), getClusterMeanY(clusterA) ];
	centroidB = [ getClusterMeanX(clusterB), getClusterMeanY(clusterB) ];
	centroidC = [ getClusterMeanX(clusterC), getClusterMeanY(clusterC) ];
	centroidD = [ getClusterMeanX(clusterD), getClusterMeanY(clusterD) ];

	// Show centroids on page. 
	showCentroids4();
}
/*****/
// Update representation of cluster centroids on page. 
function showCentroids4() {
	console.log('Updating centroids on page...');

	// Check if centroids have been initialized. 
	if( !centroidA || !centroidB || !centroidC || !centroidD ) {
		console.log('Centroids undefined');
		toast('Centroids undefined');
		return;
	}

	// Create cluster centroid elements. 
	let clusterCentroids = '', x = 0, y = 0;
	x = centroidA[0];
	y = centroidA[1];
	clusterCentroids += '<div id="c0" class="item centroid" style="left:'+(100 * centroidA[0]/maxValue)+'%; top:'+(100 * (1-centroidA[1]/maxValue) )+'%;">'+x.toFixed(1)+','+y.toFixed(1)+'</div>';
	console.log( 'centroidA  =  (', x.toFixed(1),',',y.toFixed(1),')' );
	x = centroidB[0];
	y = centroidB[1];
	clusterCentroids += '<div id="c1" class="item centroid" style="left:'+(100 * centroidB[0]/maxValue)+'%; top:'+(100 * (1-centroidB[1]/maxValue) )+'%;">'+x.toFixed(1)+','+y.toFixed(1)+'</div>';
	console.log( 'centroidB  =  (', x.toFixed(1),',',y.toFixed(1),')' );
	x = centroidC[0];
	y = centroidC[1];
	clusterCentroids += '<div id="c2" class="item centroid" style="left:'+(100 * centroidC[0]/maxValue)+'%; top:'+(100 * (1-centroidC[1]/maxValue) )+'%;">'+x.toFixed(1)+','+y.toFixed(1)+'</div>';
	console.log( 'centroidC  =  (', x.toFixed(1),',',y.toFixed(1),')' );
	x = centroidD[0];
	y = centroidD[1];
	clusterCentroids += '<div id="c3" class="item centroid" style="left:'+(100 * centroidD[0]/maxValue)+'%; top:'+(100 * (1-centroidD[1]/maxValue) )+'%;">'+x.toFixed(1)+','+y.toFixed(1)+'</div>';
	console.log( 'centroidD  =  (', x.toFixed(1),',',y.toFixed(1),')' );


	$('#numLine .centroid').remove();
	$('#numLine').append(clusterCentroids);
}

/*****/

// 3. Associate points to clusters by proximity. 
function clusterDataPoints4() {
	console.log('\n\n3. Associating points to clusters by proximity...');

	// Re-initiate clusters. 
	clusterA = [];
	clusterB = [];
	clusterC = [];
	clusterD = [];

	// Associate points to clusters by proximity. 
	for(let i=0 ; i<numDataPoints ; i++) {
		// Calculate distance to each cluster centroid. 
		let deltaA = getDistanceBtwn( dataPoints[i], centroidA );
		let deltaB = getDistanceBtwn( dataPoints[i], centroidB );
		let deltaC = getDistanceBtwn( dataPoints[i], centroidC );
		let deltaD = getDistanceBtwn( dataPoints[i], centroidD );
		console.log( 'deltaA',deltaA.toFixed(1), '\t', 'deltaB',deltaB.toFixed(1), '\t', 'deltaC',deltaC.toFixed(1), '\t', 'deltaD',deltaD.toFixed(1) );

		// Find closest centroid (minimum distance). 
		let minDistance = Math.min(deltaA, deltaB, deltaC, deltaD);
		let indexOfClosestCluster = [ deltaA, deltaB, deltaC, deltaD ].indexOf(minDistance);
		// console.log( 'x'+i, 'cluster['+indexOfClosestCluster+']', minDistance.toFixed(1));

		// Add index reference to appropriate cluster array. 
		if(indexOfClosestCluster==0) {
			clusterA.push(i);
		}
		else if(indexOfClosestCluster==1) {
			clusterB.push(i);
		}
		else if(indexOfClosestCluster==2) {
			clusterC.push(i);
		}
		else if(indexOfClosestCluster==3) {
			clusterD.push(i);
		}
	}

	// Show clusters on page. 
	showClusters4();

	/*****/

	// Get the distance between two given points. 
	function getDistanceBtwn(pointA,pointB) {
		let dx = pointA[0] - pointB[0];
		let dy = pointA[1] - pointB[1];
		return Math.sqrt( dx*dx + dy*dy );
	}
}
/*****/
// Update representation of cluster groupings on page. 
function showClusters4() {
	console.log('Updating clusters on page...');

	// Check if clusters have been initialized. 
	if( !clusterA || !clusterB || !clusterC || !clusterD ) {
		console.log('Clusters undefined');
		toast('Clusters undefined');
		return;
	}

	// console.log('clusterA',clusterA);
	// console.log('clusterB',clusterB);
	// console.log('clusterC',clusterC);
	// console.log('clusterD',clusterD);

	// Color codes for clusters
	// clusterColor = ['red','gold','blue','limegreen'];
	clusterColor = ['#ffd70088', '#32cd3288', '#0000ff88', '#ff000088'];

	// Add group color to each cluster. 
	for(let i=0 ; i<clusterA.length ; i++) {
		// Get index of data point. 
		indexOfDataPoint = clusterA[i];

		// Set color of data point by cluster (on number line). 
		$('#x'+indexOfDataPoint).css('background-color',clusterColor[0]);

		// Set color of data point by cluster (in legend). 
		$('#var'+indexOfDataPoint).css('color',clusterColor[0]);
	}
	for(let i=0 ; i<clusterB.length ; i++) {
		// Get index of data point. 
		indexOfDataPoint = clusterB[i];

		// Set color of data point by cluster (on number line). 
		$('#x'+indexOfDataPoint).css('background-color',clusterColor[1]);

		// Set color of data point by cluster (in legend). 
		$('#var'+indexOfDataPoint).css('color',clusterColor[1]);
	}
	for(let i=0 ; i<clusterC.length ; i++) {
		// Get index of data point. 
		indexOfDataPoint = clusterC[i];

		// Set color of data point by cluster (on number line). 
		$('#x'+indexOfDataPoint).css('background-color',clusterColor[2]);

		// Set color of data point by cluster (in legend). 
		$('#var'+indexOfDataPoint).css('color',clusterColor[2]);
	}
	for(let i=0 ; i<clusterD.length ; i++) {
		// Get index of data point. 
		indexOfDataPoint = clusterD[i];

		// Set color of data point by cluster (on number line). 
		$('#x'+indexOfDataPoint).css('background-color',clusterColor[3]);

		// Set color of data point by cluster (in legend). 
		$('#var'+indexOfDataPoint).css('color',clusterColor[3]);
	}
}

/*****/

// 4. Repeat steps 2-3 until solution is stable. 
function repeatCenterAndCluster4() {
	// Reset number of repeated iterations. 
	numIterations = 0;

	// Create centroids. 
	createCentroids4();

	// Associate points to clusters by proximity. 
	clusterDataPoints4();

	// Set time period of repetitions (in milliseconds). 
	let period = 250;

	// Repeat functions until stable. 
	let rptFunc = setInterval(function(){
		// Refresh centroids to center of clusters. 
		centerCentroids4();
		setTimeout(function(){
			// Associate points to clusters by proximity. 
			clusterDataPoints4();

			// Track cluster sizes for each iteration. 
			clusterSizesA.push(clusterA.length);
			clusterSizesB.push(clusterB.length);
			clusterSizesC.push(clusterC.length);
			clusterSizesD.push(clusterD.length);
			console.log();
			// console.log('clusterA',clusterA.length);
			console.log('clusterSizesA',clusterSizesA);
			// console.log('clusterB',clusterB.length);
			console.log('clusterSizesB',clusterSizesB);
			// console.log('clusterC',clusterC.length);
			console.log('clusterSizesC',clusterSizesC);
			// console.log('clusterD',clusterD.length);
			console.log('clusterSizesD',clusterSizesD);

			// Increment number of iterations. 
			// console.log('numIterations',numIterations);
			numIterations++;
			console.log('numIterations',numIterations);

			// Equate solution's stability to same array sizes over 2 subsequent iterations.
			let n = numIterations-1;
			stableSolution = true;
			stableSolution = ( clusterSizesA[n]==clusterSizesA[n-1] ) 
							&& ( clusterSizesB[n]==clusterSizesB[n-1] ) 
							&& ( clusterSizesC[n]==clusterSizesC[n-1] ) 
							&& ( clusterSizesD[n]==clusterSizesD[n-1] );

			// Stop repeating when the solution is stable. 
			if(stableSolution) stopRepeating();
		},period/2);
	},period);
	repeatingFunctions.push(rptFunc);

	// Refresh centroids to center of clusters. 
	// centerCentroids4();

	// Associate points to clusters by proximity. 
	// clusterDataPoints4();
}

