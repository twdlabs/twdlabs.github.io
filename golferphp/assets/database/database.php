


<?php


	// Set state of fwds back to home page. 
	$stayhome = true;
	$stayhome = false;

	// Define database tables. 
	$databasetables = [
		'shots' => [

			// Define id of primary field. 
			// 'pfid' => 'shotid',
			// 'pfid' => 'id',

			// Define table fields. 
			'fields' => [
				[
					'type'=>'select',
					'id'=>'clubid',
					'tid'=>'clubs',
					'caption'=>'Club',
				],
				[
					'type'=>'select',
					'id'=>'holeid',
					'tid'=>'holes',
					'caption'=>'Hole',
				],
				[
					'type'=>'number',
					'id'=>'distance',
					'caption'=>'Distance',
				],
			],

			// Define table entries. 
			'entries' => [],

			// Define caption getter functions. 
			'captioner' => 'getShotCaption',
		],
		'holes' => [

			// Define id of primary field. 
			// 'pfid' => 'holeid',
			// 'pfid' => 'id',

			// Define table fields. 
			'fields' => [
				[
					'type'=>'text',
					'id'=>'holename',
					'caption'=>'Hole Name',
				],
				[
					'type'=>'number',
					'id'=>'holepar',
					'caption'=>'Hole Par',
				],
				[
					'type'=>'number',
					'id'=>'holeelevation',
					'caption'=>'Hole Elevation',
				],
			],

			// Define table entries. 
			'entries' => [],

			// Define caption getter functions. 
			'captioner' => 'getHoleCaption',
		],
		'clubs' => [

			// Define id of primary field. 
			// 'pfid' => 'clubid',
			// 'pfid' => 'id',

			// Define table fields. 
			'fields' => [
				[
					'type'=>'text',
					'id'=>'clubbrand',
					'caption'=>'Club Brand',
				],
				[
					'type'=>'text',
					'id'=>'clubname',
					'caption'=>'Club Name',
				],
			],

			// Define table entries. 
			'entries' => [],

			// Define caption getter functions. 
			'captioner' => 'getClubCaption',
		],
	];
?>
