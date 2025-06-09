
<?php

	// Define metadata for database tables. 
	$databasetables = [


		'useraccounts' => [

			// Define table title. 
			'tabletitle' => 'User Accounts',
			// Define table navigation icon. 
			'tableicontag' => 'personbadge',
			// Define caption for single item. 
			'singlecaption' => 'User Account',

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				// [
				// 	'fid'=>'id',
				// 	'fieldtitle'=>'ID',
				// 	'visibleintable'=>false,
				// ],
				[
					'fid'=>'username',
					'fieldtitle'=>'Email',
					'visibleintable'=>true,
				],
				[
					'fid'=>'childname',
					'fieldtitle'=>'Child',
					'visibleintable'=>true,
				],
				[
					'fid'=>'parentname',
					'fieldtitle'=>'Parent',
					'visibleintable'=>true,
				],
				[
					'fid'=>'phonenumber',
					'fieldtitle'=>'Phone Number',
					'visibleintable'=>true,
				],
				// [
				// 	'fid'=>'nummeals',
				// 	'fieldtitle'=>'Number of Meals',
				// 	'visibleintable'=>true,
				// ],
				[
					'fid'=>'totalnumorders',
					'fieldtitle'=>'Total Orders',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'username',
					'fieldtitle'=>'Email',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'phonenumber',
					'fieldtitle'=>'Phone Number',
					'required'=>true,
					'editable'=>true,
				],
			],

			// Define basic database query. 
			'basicdataquery' => "",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				u.id,
				u.childname, u.parentname,
				u.username, u.phonenumber,
				-- count(distinct mo.mealid) as nummeals,
				count(distinct o.id) as totalnumorders
			FROM (useraccounts as u)
			LEFT JOIN (mealorders as o) ON (o.userid = u.id)
			GROUP BY u.id 
			ORDER BY u.id ",
		],


		'meals' => [

			// Define table title. 
			'tabletitle' => 'Meals',
			// Define table navigation icon. 
			'tableicontag' => 'foodmenu',
			// Define caption for single item. 
			'singlecaption' => 'Meals',

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				// [
				// 	'fid'=>'id',
				// 	'fieldtitle'=>'ID',
				// 	'visibleintable'=>false,
				// ],
				[
					'fid'=>'mealname',
					'fieldtitle'=>'Meal Name',
					'visibleintable'=>true,
				],
				[
					'fid'=>'numorders',
					'fieldtitle'=>'Orders',
					'visibleintable'=>true,
				],
				[
					'fid'=>'numpeople',
					'fieldtitle'=>'People',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'mealname',
					'fieldtitle'=>'Meal Name',
					'required'=>true,
					'editable'=>true,
				],
			],

			// Define basic database query. 
			'basicdataquery' => "",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				m.id, m.mealname,
				count(o.id) as numorders,
				count(distinct o.userid) as numpeople
			FROM (meals as m)
			LEFT JOIN (mealorders as o) ON (o.mealid = m.id)
			GROUP BY m.id
			ORDER BY m.mealname ",
		],


		'mealorders' => [

			// Define table title. 
			'tabletitle' => 'Meal Orders',
			// Define table navigation icon. 
			'tableicontag' => 'pass',
			// Define caption for single item. 
			'singlecaption' => 'Meal Order',

			// Define downloaded table entry data. 
			'entrydata' => [],

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
					'selectorsource'=>[
						'tid'=>'events',
						'fid'=>'eventname',
					],
				],
				[
					'type'=>'select',
					'fid'=>'personid',
					'fieldtitle'=>'Person',
					'fieldtitle'=>'Volunteer',
					'required'=>true,
					'editable'=>true,
					'selectorsource'=>[
						'tid'=>'persons',
						'fid'=>'personname',
					],
				],
				// [
				// 	'type'=>'text',
				// 	'fid'=>'notes',
				// 	'fieldtitle'=>'Notes',
				// 	'required'=>false,
				// 	'editable'=>true,
				// ],
			],

			// Define basic database query. 
			'basicdataquery' => "",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				o.id,
				u.childname, u.parentname,
				m.mealname
			FROM (mealorders as o)
			LEFT JOIN (useraccounts as u) ON (o.userid = u.id)
			LEFT JOIN (meals as m) ON (o.mealid = m.id)
			ORDER BY o.modifiedat ",
		],
	];
?>
