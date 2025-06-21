
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
			// Define accessibility of table (for non-operators). 
			'parentaccessible' => false,
			// Define name of script for creating new item entry. 
			'creatorscriptname' => 'xyz',

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
			// Define accessibility of table (for non-operators). 
			'parentaccessible' => true,
			// Define name of script for creating new item entry. 
			'creatorscriptname' => 'createstudent',

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
					'fieldtitle'=>'Name',
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
			// Define accessibility of table (for non-operators). 
			'parentaccessible' => false,
			// Define name of script for creating new item entry. 
			'creatorscriptname' => 'xyz',

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
			// Define table navigation icon. 
			'tableicontag' => 'foodmenu',
			// Define caption for single item. 
			'singlecaption' => 'Meal',
			// Define accessibility of table (for non-operators). 
			'parentaccessible' => false,
			// Define name of script for creating new item entry. 
			'creatorscriptname' => 'xyz',

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
					'fid'=>'numorders',
					'fieldtitle'=>'Orders',
					'visibleintable'=>true,
				],
				// [
				// 	'fid'=>'numpeople',
				// 	'fieldtitle'=>'People',
				// 	'visibleintable'=>true,
				// ],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'entree',
					'fieldtitle'=>'Main Dish',
					'placeholder'=>'Baked Chicken Nuggets',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'sidedish',
					'fieldtitle'=>'Veggie/Fruit',
					'placeholder'=>'Avocado Slices',
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


		'mealorders' => [

			// Define table title. 
			'tabletitle' => 'Orders',
			// Define table navigation icon. 
			'tableicontag' => 'pass',
			// Define caption for single item. 
			'singlecaption' => 'Order',
			// Define accessibility of table (for non-operators). 
			'parentaccessible' => true,
			// Define name of script for creating new item entry. 
			'creatorscriptname' => 'xyz',

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
					'fid'=>'deliverydate',
					'fieldtitle'=>'Delivery Date',
					'visibleintable'=>true,
				],
				[
					'fid'=>'entree',
					// 'fid'=>'mealsummary',
					'fieldtitle'=>'Meal',
					'visibleintable'=>true,
				],
				[
					'fid'=>'studentname',
					'fieldtitle'=>'Student',
					'visibleintable'=>true,
				],
				[
					'fid'=>'creatorname',
					'fieldtitle'=>'Ordered By',
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
					'fid'=>'mealid',
					'fieldtitle'=>'Select Meal',
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
					'fid'=>'studentid',
					'fieldtitle'=>'Select Student',
					'required'=>true,
					'editable'=>true,
					'selectorsource'=>[
						'tid'=>'students',
						'fid'=>'studentname',
					],
				],
				[
					'type'=>'select',
					'fid'=>'creatorid',
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
	];
?>
