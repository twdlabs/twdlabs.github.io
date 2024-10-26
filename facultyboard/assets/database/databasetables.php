
<?php

	// Define metadata for database tables. 
	$databasetables = [

		'admins' => [

			// Define table display mode. 
			'tabledisplay' => true,

			// Define table title. 
			'tabletitle' => 'Admins',
			// Define table navigation icon. 
			'tablenavicon' => 'personsquare',
			// Define caption for single item. 
			'singlecaption' => 'Admin',

			// Define table entries. 
			'entries' => [],

			// Define reference tables. 
			'reftableids' => [
				'persons',
			],

			// Define database query (away). 
			// 'awayquery' => "",
			// Define database query (home). 
			'homequery' => 
			"SELECT 
				a.id, a.personid, p.personname 
			FROM (admins as a) 
			JOIN (persons as p) ON (a.personid = p.id)",

			// Define table display fields (from home query results). 
			'displayfields' => [
				[
					'fid'=>'personid',
					'fieldtitle'=>'Name',
					'capref'=>[
						// 'tid'=>'persons',
						'fid'=>'personname',
					],
				],
			],

			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'select',
					'fid'=>'personid',
					'fieldtitle'=>'Name',
					'required'=>true,
					'editable'=>false,
					'capref'=>[
						'tid'=>'persons',
						'fid'=>'personname',
					],
				],
			],
		],

		'persons' => [

			// Define table display mode. 
			'tabledisplay' => true,

			// Define table title. 
			'tabletitle' => 'Faculty',
			// Define table navigation icon. 
			'tablenavicon' => 'personcard',
			// Define caption for single item. 
			'singlecaption' => 'Person',

			// Define table entries. 
			'entries' => [],

			// Define reference tables. 
			'reftableids' => [],

			// Define database query (away). 
			'awayquery' => 
			"SELECT 
				id, personname, emailaddress,
				genderid, department 
			FROM persons",
			// Define database query (home). 
			'homequery' => 
			"SELECT 
				p.id, p.personname, p.emailaddress, p.passwdsalt, p.passwdhash,
				p.genderid, g.gendername, p.department, r.personname as referralname,
				-- count(i.id) as issueshit,
				count(c.id) as totalcomments 
			FROM (persons as p)
			LEFT JOIN (comments as c) ON (c.personid = p.id)
			LEFT JOIN (genders as g) ON (p.genderid = g.id)
			LEFT JOIN (persons as r) ON (p.referralsource = r.id)
			GROUP BY p.id",

			// Define table display fields (from home query results). 
			'displayfields' => [
				[
					'fid'=>'personname',
					'fieldtitle'=>'Name',
				],
				[
					'fid'=>'genderid',
					'fieldtitle'=>'Gender',
					'capref'=>[
						// 'tid'=>'genders',
						'fid'=>'gendername',
					],
				],
				[
					'fid'=>'department',
					'fieldtitle'=>'Department',
				],
				[
					'fid'=>'referralsource',
					'fieldtitle'=>'Referred by',
					'capref'=>[
						// 'tid'=>'persons',
						'fid'=>'referralname',
					],
				],
				[
					'fid'=>'totalcomments',
					'fieldtitle'=>'Comments',
				],
				[
					'fid'=>'emailaddress',
					'fieldtitle'=>'E-mail',
				],
				// [
				// 	'fid'=>'passwdsalt',
				// 	'fieldtitle'=>'Password Salt',
				// ],
				// [
				// 	'fid'=>'passwdhash',
				// 	'fieldtitle'=>'Password Hash',
				// ],
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
					'type'=>'select',
					'fid'=>'genderid',
					'fieldtitle'=>'Gender',
					'required'=>true,
					'editable'=>true,
					'capref'=>[
						'tid'=>'genders',
						'fid'=>'gendername',
					],
				],
				[
					'type'=>'text',
					'fid'=>'department',
					'fieldtitle'=>'Department',
					'required'=>false,
					'editable'=>true,
				],
				[
					'type'=>'select',
					'fid'=>'referralsource',
					'fieldtitle'=>'Referred by',
					'required'=>false,
					'editable'=>true,
					'capref'=>[
						'tid'=>'persons',
						'fid'=>'personname',
					],
				],
				[
					'type'=>'email',
					'fid'=>'emailaddress',
					'fieldtitle'=>'E-mail',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'password',
					'type'=>'text',
					'fid'=>'password',
					'fieldtitle'=>'Password',
					'required'=>true,
					'editable'=>false,
				],
			],
		],

		'issues' => [

			// Define table display mode. 
			'tabledisplay' => true,

			// Define table title. 
			'tabletitle' => 'Issues',
			// Define table navigation icon. 
			'tablenavicon' => 'journaltext',
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
				i.id, i.issuetitle, i.issuedescription,
				count(c.id) as totalcomments,
				count(distinct p.id) as totalcommenters 
			FROM (issues as i)
			LEFT JOIN (comments as c) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id)
			GROUP BY i.id",
			// Define database query (home). 
			// 'homequery' => 
			// "SELECT 
			// 	i.id,
			// 	i.issuetitle,
			// 	i.issuedescription
			// FROM (issues as i)",

			// Define table display fields (from home query results). 
			'displayfields' => [
				[
					'fid'=>'issuetitle',
					'fieldtitle'=>'Title',
				],
				[
					'fid'=>'issuedescription',
					'fieldtitle'=>'Description',
				],
				[
					'fid'=>'totalcomments',
					'fieldtitle'=>'Comments',
				],
				[
					'fid'=>'totalcommenters',
					'fieldtitle'=>'People',
				],
			],

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

			// Define table display mode. 
			'tabledisplay' => true,

			// Define table title. 
			'tabletitle' => 'Comments',
			// Define table navigation icon. 
			'tablenavicon' => 'chatbubble',
			'tablenavicon' => 'chatbubbletext',
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
			'awayquery' => 
			"SELECT 
				c.id, c.commenttext, c.createdat,
				c.issueid, i.issuetitle,
				c.personid, p.personname
			FROM (comments as c) 
			JOIN (issues as i) ON (c.issueid = i.id)
			JOIN (persons as p) ON (c.personid = p.id)",
			// Define database query (home). 
			'homequery' => 
			"SELECT 
				c.id, c.commenttext, c.createdat,
				c.personid, p.personname,
				c.issueid, i.issuetitle/* ,
				count(cl.id) as numlikes */
			FROM (comments as c) 
			JOIN (issues as i) ON (c.issueid = i.id)
			JOIN (persons as p) ON (c.personid = p.id) 
			/* JOIN (commentlikes as cl) ON (cl.commentid = c.id) */",

			// Define table display fields (from home query results). 
			'displayfields' => [
				[
					'fid'=>'personid',
					'fieldtitle'=>'Person',
					'capref'=>[
						// 'tid'=>'persons',
						'fid'=>'personname',
					],
				],
				[
					'fid'=>'issueid',
					'fieldtitle'=>'Issue',
					'capref'=>[
						// 'tid'=>'issues',
						'fid'=>'issuetitle',
					],
				],
				[
					'fid'=>'commenttext',
					'fieldtitle'=>'Comment',
				],
				[
					'fid'=>'createdat',
					'fieldtitle'=>'Created',
				],
			],

			// Define table editor fields. 
			'editorfields' => [
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
					'type'=>'select',
					'fid'=>'issueid',
					'fieldtitle'=>'Issue',
					'required'=>true,
					'editable'=>false,
					'editable'=>true,
					'capref'=>[
						'tid'=>'issues',
						'fid'=>'issuetitle',
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
		
		'genders' => [

			// Define table display mode. 
			'tabledisplay' => false,

			// Define table title. 
			'tabletitle' => 'Genders',
			// Define table navigation icon. 
			'tablenavicon' => 'personsquare',
			// Define caption for single item. 
			'singlecaption' => 'Gender',

			// Define table entries. 
			'entries' => [],

			// Define reference tables. 
			'reftableids' => [],

			// Define database query (away). 
			// 'awayquery' => "",
			// Define database query (home). 
			'homequery' => 
			"SELECT g.id, g.gendername
			FROM (genders as g)",

			// Define table display fields (from home query results). 
			'displayfields' => [
				[
					'fid'=>'gendername',
					'fieldtitle'=>'Gender',
				],
			],

			// Define table editor fields. 
			'editorfields' => [],
		],
		
		'departments' => [

			// Define table display mode. 
			'tabledisplay' => true,

			// Define table title. 
			'tabletitle' => 'Departments',
			// Define table navigation icon. 
			'tablenavicon' => 'personlines',
			// Define caption for single item. 
			'singlecaption' => 'Department',

			// Define table entries. 
			'entries' => [],

			// Define reference tables. 
			'reftableids' => [],

			// Define database query (away). 
			// 'awayquery' => "",
			// Define database query (home). 
			'homequery' => 
			"SELECT d.id, d.deptname
			FROM (departments as d)",

			// Define table display fields (from home query results). 
			'displayfields' => [
				[
					'fid'=>'deptname',
					'fieldtitle'=>'Department',
				],
			],

			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'deptname',
					'fieldtitle'=>'Department Name',
					'required'=>true,
					'editable'=>true,
				],
			],
		],
	];

	// Define database table icons. 
	$databasetablesicons = [
		'journals'=>'<path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/><path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>',
		'personsquare'=>'<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>',
		'personcard'=>'<path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>',
		'journaltext'=>'<path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>',
		'chatbubble'=>'<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>',
		'chatbubbletext'=>'<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>',
		// 'personcircle'=>'<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>',
		// 'person'=>'<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>',
		'personlines'=>'<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>',
		// 'xyz'=>'xyz',
		// 'xyz'=>'xyz',
	];
?>
