
<?php

	// Define metadata for database tables. 
	$databasetables = [

		'events' => [

			// Define table title. 
			'tabletitle' => 'Events',
			// Define table navigation icon. 
			'tableicontag' => 'calevent',
			// Define caption for single item. 
			'singlecaption' => 'Event',

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				// [
				// 	'fid'=>'id',
				// 	'fieldtitle'=>'ID',
				// 	'visibleintable'=>false,
				// ],
				[
					'fid'=>'eventstartdate',
					'fieldtitle'=>'Start Date',
					'visibleintable'=>true,
				],
				[
					'fid'=>'eventenddate',
					'fieldtitle'=>'End Date',
					'visibleintable'=>true,
				],
				[
					'fid'=>'eventname',
					'fieldtitle'=>'Name',
					'visibleintable'=>true,
				],
				[
					'fid'=>'eventlocation',
					'fieldtitle'=>'Location',
					'visibleintable'=>true,
				],
				[
					'fid'=>'numvolunteers',
					'fieldtitle'=>'Volunteers',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'date',
					'fid'=>'eventstartdate',
					'fieldtitle'=>'Start',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'date',
					'fid'=>'eventenddate',
					'fieldtitle'=>'End',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'eventname',
					'fieldtitle'=>'Name',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'eventlocation',
					'fieldtitle'=>'Location',
					'required'=>true,
					'editable'=>true,
				],
			],

			// Define basic database query. 
			'basicdataquery' => "",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				e.id,
				e.eventstartdate, e.eventenddate,
				e.eventname, e.eventlocation,
				count(distinct a.personid) as numvolunteers
			FROM (events as e)
			LEFT JOIN (assignments as a) ON (a.eventid = e.id)
			GROUP BY e.id ",
		],

		'persons' => [

			// Define table title. 
			'tabletitle' => 'Volunteers',
			// Define table navigation icon. 
			'tableicontag' => 'personlines',
			// Define caption for single item. 
			'singlecaption' => 'Volunteer',

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				// [
				// 	'fid'=>'id',
				// 	'fieldtitle'=>'ID',
				// 	'visibleintable'=>false,
				// ],
				[
					'fid'=>'personname',
					'fieldtitle'=>'Name',
					'visibleintable'=>true,
				],
				[
					'fid'=>'personrole',
					'fieldtitle'=>'Role',
					'visibleintable'=>true,
				],
				// [
				// 	'fid'=>'emailaddress',
				// 	'fieldtitle'=>'Email',
				// 	'visibleintable'=>true,
				// ],
				// [
				// 	'fid'=>'mobilenumber',
				// 	'fieldtitle'=>'Mobile',
				// 	'visibleintable'=>true,
				// ],
				[
					'fid'=>'numevents',
					'fieldtitle'=>'Events',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'personname',
					'fieldtitle'=>'Name',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'personrole',
					'fieldtitle'=>'Role',
					'required'=>true,
					'editable'=>true,
				],
			],

			// Define basic database query. 
			'basicdataquery' => "",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				p.id,
				p.personname, p.personrole,
				count(distinct a.eventid) as numevents
			FROM (persons as p)
			LEFT JOIN (assignments as a) ON (a.personid = p.id)
			GROUP BY p.id ",
		],

		'assignments' => [

			// Define table title. 
			'tabletitle' => 'Assignments',
			// Define table navigation icon. 
			'tableicontag' => 'linkdiagonal',
			// Define caption for single item. 
			'singlecaption' => 'Assignment',

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				// [
				// 	'fid'=>'id',
				// 	'fieldtitle'=>'ID',
				// 	'visibleintable'=>false,
				// ],
				[
					'fid'=>'personname',
					'fieldtitle'=>'Person',
					'visibleintable'=>true,
				],
				[
					'fid'=>'eventname',
					'fieldtitle'=>'Event',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'select',
					'fid'=>'eventid',
					'fieldtitle'=>'Event',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'select',
					'fid'=>'personid',
					'fieldtitle'=>'Person',
					'fieldtitle'=>'Volunteer',
					'required'=>true,
					'editable'=>true,
				],
			],

			// Define basic database query. 
			'basicdataquery' => "",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				a.id,
				p.personname,
				e.eventname
			FROM (assignments as a)
			LEFT JOIN (events as e) ON (a.eventid = e.id)
			LEFT JOIN (persons as p) ON (a.personid = p.id)
			/* GROUP BY a.id */ ",
		],
	];
?>
