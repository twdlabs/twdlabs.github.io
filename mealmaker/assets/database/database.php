
<?php

	// Define metadata for database tables. 
	$databasetables = [


		'parents' => [

			// Define table title. 
			'tabletitle' => 'Users',
			// Define table navigation icon. 
			'tableicontag' => 'personbadge',
			// Define caption for single item. 
			'singlecaption' => 'User',
			// 'singlecaption' => 'Parent',
			// Define accessibility of table (for parents/non-operators). 
			'adminaccess' => true,
			'operatoraccess' => false,
			'allparentsaccess' => false,
			// Define modifiability in app. 
			'modifytableinapp' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'id',
					'fieldtitle'=>'ID',
					'visibleintable'=>false,
				],
				[
					'fid'=>'parentname',
					'fieldtitle'=>'Name',
					'visibleintable'=>true,
				],
				[
					'fid'=>'phonenumber',
					'fieldtitle'=>'Phone',
					'visibleintable'=>true,
				],
				[
					'fid'=>'emailaddress',
					'fieldtitle'=>'Email',
					'visibleintable'=>true,
				],
				[
					'fid'=>'loginas',
					'fieldtitle'=>'Login as..',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'parentname',
					'fieldtitle'=>'Name',
					'placeholder'=>'John Smith',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'phonenumber',
					'fieldtitle'=>'Phone Number',
					'placeholder'=>'2134567890',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'emailaddress',
					'fieldtitle'=>'Email Address',
					'placeholder'=>'johnsmith@gmail.com',
					'required'=>true,
					'editable'=>true,
				],
				// [
				// 	'type'=>'password',
				// 	'fid'=>'password',
				// 	'fieldtitle'=>'Password',
				// 	'placeholder'=>'passwd',
				// 	'required'=>true,
				// 	'editable'=>true,
				// ],
			],
		],


		'students' => [

			// Define table title. 
			'tabletitle' => 'Students',
			// Define table navigation icon. 
			'tableicontag' => 'backpack',
			// Define caption for single item. 
			'singlecaption' => 'Student',
			// Define accessibility of table (for parents/non-operators). 
			'adminaccess' => true,
			'operatoraccess' => true,
			'allparentsaccess' => true,
			// Define modifiability in app. 
			'modifytableinapp' => true,

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'id',
					'fieldtitle'=>'ID',
					'visibleintable'=>false,
				],
				[
					'fid'=>'studentname',
					'fieldtitle'=>'Student',
					'visibleintable'=>true,
				],
				[
					'fid'=>'parentname',
					'fieldtitle'=>'Parent',
					'visibleintable'=>true,
				],
				// [
				// 	'fid'=>'nummeals',
				// 	'fieldtitle'=>'Variety of Meals',
				// 	'visibleintable'=>true,
				// ],
				// [
				// 	'fid'=>'totalnumorders',
				// 	'fieldtitle'=>'Total Orders',
				// 	'visibleintable'=>true,
				// ],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'studentname',
					'fieldtitle'=>'Student Name',
					// 'fieldtitle'=>'Name',
					'placeholder'=>'Johnny Smith',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'select',
					'fid'=>'parentid',
					'fieldtitle'=>'Parent Name',
					'fieldtitle'=>'Parent',
					'required'=>true,
					'editable'=>true,
					'selectorsource'=>[
						'tid'=>'parents',
						'fid'=>'parentname',
					],
				],
			],
		],


		'drinks' => [

			// Define table title. 
			'tabletitle' => 'Drinks',
			// Define table navigation icon. 
			'tableicontag' => 'drinkingcup',
			// Define caption for single item. 
			'singlecaption' => 'Drink',
			// Define accessibility of table (for parents/non-operators). 
			'adminaccess' => false,
			'operatoraccess' => false,
			'allparentsaccess' => false,
			// Define modifiability in app. 
			'modifytableinapp' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'id',
					'fieldtitle'=>'ID',
					'visibleintable'=>false,
				],
				[
					'fid'=>'drinkname',
					'fieldtitle'=>'Drink Name',
					'visibleintable'=>true,
				],
				// [
				// 	'fid'=>'nummeals',
				// 	'fieldtitle'=>'Associated Meals',
				// 	'visibleintable'=>true,
				// ],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'drinkname',
					'fieldtitle'=>'Drink Name',
					'placeholder'=>'Water',
					'required'=>true,
					'editable'=>true,
				],
			],
		],


		'meals' => [

			// Define table title. 
			'tabletitle' => 'Meals',
			'tabletitle' => 'Menu',
			// Define table navigation icon. 
			'tableicontag' => 'foodmenu',
			// Define caption for single item. 
			'singlecaption' => 'Meal',
			// Define accessibility of table (for parents/non-operators). 
			'adminaccess' => true,
			'operatoraccess' => true,
			'allparentsaccess' => true,
			// Define modifiability in app. 
			'modifytableinapp' => true,

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'id',
					'fieldtitle'=>'ID',
					'visibleintable'=>false,
				],
				[
					'fid'=>'entree',
					'fieldtitle'=>'Main Dish',
					'visibleintable'=>true,
				],
				[
					'fid'=>'sidedish',
					'fieldtitle'=>'Veggie/Fruit',
					'visibleintable'=>true,
				],
				[
					'fid'=>'drinkname',
					'fieldtitle'=>'Drink',
					'visibleintable'=>true,
				],
				[
					'fid'=>'totalnumorders',
					'fieldtitle'=>'Order Count',
					'visibleintable'=>true,
				],
				// [
				// 	'fid'=>'totalnumparents',
				// 	'fieldtitle'=>'Parents',
				// 	'visibleintable'=>true,
				// ],
				// [
				// 	'fid'=>'totalnumstudents',
				// 	'fieldtitle'=>'Students',
				// 	'visibleintable'=>true,
				// ],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'entree',
					'fieldtitle'=>'Main Dish',
					'placeholder'=>'Chicken Nuggets',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'sidedish',
					'fieldtitle'=>'Veggie/Fruit',
					'placeholder'=>'Avocado',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'select',
					'fid'=>'drinkid',
					'fieldtitle'=>'Select Drink',
					'required'=>true,
					'editable'=>true,
					'selectorsource'=>[
						'tid'=>'drinks',
						'fid'=>'drinkname',
					],
				],
			],
		],


		'mealtimes' => [

			// Define table title. 
			'tabletitle' => 'Meal Times',
			// Define table navigation icon. 
			'tableicontag' => 'clock',
			// Define caption for single item. 
			'singlecaption' => 'Meal Time',
			// Define accessibility of table (for parents/non-operators). 
			'adminaccess' => false,
			'operatoraccess' => false,
			'allparentsaccess' => false,
			// Define modifiability in app. 
			'modifytableinapp' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'id',
					'fieldtitle'=>'ID',
					'visibleintable'=>false,
				],
				[
					'fid'=>'mealtimes',
					'fieldtitle'=>'Meal Time',
					'visibleintable'=>true,
				],
				// [
				// 	'fid'=>'nummeals',
				// 	'fieldtitle'=>'Associated Meals',
				// 	'visibleintable'=>true,
				// ],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'mealtimes',
					'fieldtitle'=>'Meal Time',
					'placeholder'=>'Dinner',
					'required'=>true,
					'editable'=>true,
				],
			],
		],


		'mealorders' => [

			// Define table title. 
			'tabletitle' => 'Orders',
			// 'tabletitle' => 'Order History',
			// Define table navigation icon. 
			'tableicontag' => 'pass',
			// Define caption for single item. 
			'singlecaption' => 'Order',
			// Define accessibility of table (for parents/non-operators). 
			'adminaccess' => true,
			'operatoraccess' => true,
			'allparentsaccess' => true,
			// Define modifiability in app. 
			'modifytableinapp' => true,

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'id',
					'fieldtitle'=>'ID',
					'visibleintable'=>false,
				],
				[
					'fid'=>'deliverydate',
					'fieldtitle'=>'Delivery Date',
					'visibleintable'=>true,
				],
				[
					'fid'=>'typeid',
					'fieldtitle'=>'Meal Time',
					'visibleintable'=>true,
				],
				[
					'fid'=>'entree',
					'fid'=>'mealsummary',
					'fieldtitle'=>'Meal Choice',
					'visibleintable'=>true,
				],
				[
					'fid'=>'studentname',
					'fieldtitle'=>'Student',
					'visibleintable'=>true,
				],
				[
					'fid'=>'orderedby',
					'fieldtitle'=>'Ordered',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'date',
					'fid'=>'deliverydate',
					'fieldtitle'=>'Delivery Date',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'select',
					'fid'=>'studentid',
					'fieldtitle'=>'Student',
					'required'=>true,
					'editable'=>true,
					'selectorsource'=>[
						'tid'=>'students',
						'fid'=>'studentname',
					],
				],
				[
					'type'=>'select',
					'fid'=>'typeid',
					'fieldtitle'=>'Meal Time',
					'required'=>true,
					'editable'=>true,
					'selectorsource'=>[
						'tid'=>'mealtimes',
						'fid'=>'mealtime',
					],
				],
				[
					'type'=>'select',
					'fid'=>'mealid',
					'fieldtitle'=>'Meal Choice',
					'required'=>true,
					'editable'=>true,
					'selectorsource'=>[
						'tid'=>'meals',
						'fid'=>'entree',
						// 'fid'=>'mealsummary',
					],
				],
				[
					'type'=>'select',
					'fid'=>'orderedby',
					'fieldtitle'=>'Ordered By',
					'required'=>true,
					'editable'=>true,
					'selectorsource'=>[
						'tid'=>'parents',
						'fid'=>'parentname',
					],
				],
			],
		],


		'sessions' => [

			// Define table title. 
			'tabletitle' => 'Sessions',
			// Define table navigation icon. 
			'tableicontag' => 'clock',
			// Define caption for single item. 
			'singlecaption' => 'Session',
			// 'singlecaption' => 'Parent',
			// Define accessibility of table (for parents/non-operators). 
			'adminaccess' => true,
			'operatoraccess' => false,
			'allparentsaccess' => false,
			// Define modifiability in app. 
			'modifytableinapp' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'id',
					'fieldtitle'=>'ID',
					'visibleintable'=>false,
				],
				[
					'fid'=>'startedat',
					'fieldtitle'=>'Login Time',
					'fieldtitle'=>'Date',
					'visibleintable'=>true,
				],
				[
					'fid'=>'useripaddress',
					'fieldtitle'=>'IP Address',
					'visibleintable'=>true,
				],
				[
					'fid'=>'parentname',
					'fieldtitle'=>'Name',
					'visibleintable'=>true,
				],
				[
					'fid'=>'useragent',
					'fieldtitle'=>'Device',
					'visibleintable'=>false,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
			],
		],
	];

	// Define order of database tables. 
	$databasetablesnavbarorder = [
		'parents',
		'sessions',
		'students',
		'mealorders',
		'meals',
		'drinks',
		'mealtimes',
	];
?>
