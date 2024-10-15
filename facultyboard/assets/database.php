
<?php

	// Define database tables. 
	$databasetables = [
		'persons' => [

			// Define table title. 
			'tabletitle' => 'Faculty',
			// Define caption for single item. 
			'singlecaption' => 'Person',

			// Define table entries. 
			'entries' => [],

			// Define reference tables. 
			'reftableids' => [],

			// Define database query (away). 
			'awayquery' => "SELECT id,personname FROM persons",
			// Define database query (home). 
			'homequery' => 
			"SELECT 
				id,
				personname /* as 'Name' */, 
				emailaddress /* as 'E-mail' */, 
				department /* as 'Department' */ 
			FROM persons",

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
					'type'=>'email',
					'fid'=>'emailaddress',
					'fieldtitle'=>'E-mail',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'department',
					'fieldtitle'=>'Department',
					'required'=>false,
					'editable'=>true,
				],
			],
		],
		'users' => [

			// Define table title. 
			'tabletitle' => 'Users',
			// Define caption for single item. 
			'singlecaption' => 'User',

			// Define table entries. 
			'entries' => [],

			// Define reference tables. 
			'reftableids' => [
				'persons',
			],

			// Define database query (away). 
			// 'awayquery' => "SELECT id,personid,username FROM users",
			// Define database query (home). 
			'homequery' => 
			"SELECT 
				id,
				personname, 
				emailaddress, 
				department 
			FROM persons",

			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'username',
					'fieldtitle'=>'Username',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'password',
					'fid'=>'password',
					'fieldtitle'=>'Password',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'select',
					'fid'=>'personid',
					'fieldtitle'=>'Person',
					'required'=>true,
					'editable'=>false,
					'capref'=>[
						'tid'=>'persons',
						'fid'=>'personname',
					],
				],
			],
		],
		'issues' => [

			// Define table title. 
			'tabletitle' => 'Issues',
			// Define caption for single item. 
			'singlecaption' => 'Issue',

			// Define table entries. 
			'entries' => [],

			// Define reference tables. 
			'reftableids' => [],

			// Define database query (away). 
			'awayquery' => "SELECT id,issuetitle FROM issues",
			// Define database query (home). 
			'homequery' => 
			"SELECT 
				id,
				issuetitle /* as 'Title' */, 
				issuedescription /* as 'Description' */ 
			FROM issues",

			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'issuetitle',
					'fieldtitle'=>'Title',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'textarea',
					'fid'=>'issuedescription',
					'fieldtitle'=>'Description',
					'required'=>false,
					'editable'=>true,
				],
			],
		],
		'comments' => [

			// Define table title. 
			'tabletitle' => 'Comments',
			// Define caption for single item. 
			'singlecaption' => 'Comment',

			// Define table entries. 
			'entries' => [],

			// Define reference tables. 
			'reftableids' => [
				'persons',
				'issues',
			],

			// Define database query (away). 
			// 'awayquery' => "",
			// Define database query (home). 
			'homequery' => 
			"SELECT 
				c.id,
				issuetitle/*  as 'Issue' */, 
				personname/*  as 'Person' */, 
				commenttext/*  as 'Comment' */,
				c.personid,
				c.issueid
			FROM (comments as c) 
			JOIN (persons as p) ON (c.personid = p.id) 
			JOIN (issues as i) ON (c.issueid = i.id)",

			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'select',
					'fid'=>'issueid',
					'fieldtitle'=>'Issue',
					'required'=>true,
					'editable'=>false,
					'capref'=>[
						'tid'=>'issues',
						'fid'=>'issuetitle',
					],
				],
				[
					'type'=>'select',
					'fid'=>'personid',
					'fieldtitle'=>'Person',
					'required'=>true,
					'editable'=>false,
					'capref'=>[
						'tid'=>'persons',
						'fid'=>'personname',
					],
				],
				[
					'type'=>'textarea',
					'fid'=>'commenttext',
					'fieldtitle'=>'Comment',
					'required'=>true,
					'editable'=>true,
				],
			],
		],
	];
?>
