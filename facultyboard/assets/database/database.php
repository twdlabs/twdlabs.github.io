
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

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'personname',
					'fieldtitle'=>'Person',
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

			// Define basic database query. 
			'basicquery' => 
			" SELECT 
				id, personid 
			FROM admins ",
			// Define detailed database query. 
			'detailquery' => 
			" SELECT 
				a.id, a.personid, p.personname 
			FROM (admins as a) 
			LEFT JOIN (persons as p) ON (a.personid = p.id) ",
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
			'reftableids' => [
				'persons',
			],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'personname',
					'fieldtitle'=>'Name',
				],
				[
					'fid'=>'gendername',
					'fieldtitle'=>'Gender',
				],
				[
					'fid'=>'position',
					'fieldtitle'=>'Position',
				],
				[
					'fid'=>'deptname',
					'fieldtitle'=>'Department',
				],
				[
					'fid'=>'referralsource',
					'fieldtitle'=>'Referred by',
				],
				[
					'fid'=>'username',
					'fieldtitle'=>'Username',
				],
				[
					'fid'=>'totalcomments',
					'fieldtitle'=>'Comments',
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
					'fid'=>'position',
					'fieldtitle'=>'Position',
					'required'=>false,
					'editable'=>true,
				],
				[
					'type'=>'select',
					'fid'=>'deptid',
					'fieldtitle'=>'Department',
					'required'=>false,
					'editable'=>true,
					'capref'=>[
						'tid'=>'departments',
						'fid'=>'deptname',
					],
				],
				[
					'type'=>'select',
					'fid'=>'referralid',
					'fieldtitle'=>'Referred by',
					'required'=>false,
					'editable'=>true,
					'capref'=>[
						'tid'=>'persons',
						'fid'=>'personname',
					],
				],
				[
					'type'=>'text',
					'fid'=>'username',
					'fieldtitle'=>'Username',
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

			// Define basic database query. 
			'basicquery' => 
			" SELECT 
				id, personname, username,
				genderid/* , position  */
			FROM persons ",
			// Define detailed database query. 
			'detailquery' => 
			" SELECT 
				p.id, p.personname,
				p.username, p.passwdsalt, p.passwdhash,
				p.genderid, g.gendername, 
				p.position, p.deptid, d.deptname, 
				p.referralid, r.personname as referralsource,
				-- count(i.id) as issueshit,
				count(c.id) as totalcomments 
			FROM (persons as p)
			LEFT JOIN (comments as c) ON (c.personid = p.id)
			LEFT JOIN (genders as g) ON (p.genderid = g.id)
			LEFT JOIN (persons as r) ON (p.referralid = r.id)
			LEFT JOIN (departments as d) ON (p.deptid = d.id)
			GROUP BY p.id ",
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

			// Define table display fields (from detailed query results). 
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

			// Define basic database query. 
			'basicquery' => 
			" SELECT 
				id, issuetitle 
			FROM issues ",
			// Define detailed database query. 
			'detailquery' => 
			" SELECT 
				i.id, i.issuetitle, i.issuedescription,
				count(c.id) as totalcomments,
				count(distinct p.id) as totalcommenters 
			FROM (issues as i)
			LEFT JOIN (comments as c) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id)
			GROUP BY i.id ",
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

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'personname',
					'fieldtitle'=>'Person',
				],
				[
					'fid'=>'issuetitle',
					'fieldtitle'=>'Issue',
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
					'editable'=>false,
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

			// Define basic database query. 
			'basicquery' => 
			" SELECT 
				c.id, c.commenttext, c.createdat,
				c.issueid, i.issuetitle,
				c.personid, p.personname
			FROM (comments as c) 
			LEFT JOIN (issues as i) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id) ",
			// Define detailed database query. 
			'detailquery' => 
			" SELECT 
				c.id, c.commenttext, c.createdat,
				c.personid, p.personname,
				c.issueid, i.issuetitle/* ,
				count(cl.id) as numlikes */
			FROM (comments as c) 
			LEFT JOIN (issues as i) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id) 
			/* LEFT JOIN (commentlikes as cl) ON (cl.commentid = c.id) */ ",
		],
		
		'genders' => [

			// Define table display mode. 
			'tabledisplay' => true,
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

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'gendername',
					'fieldtitle'=>'Gender',
				],
				[
					'fid'=>'numpersons',
					'fieldtitle'=>'Count',
				],
			],
			// Define table editor fields. 
			'editorfields' => [],

			// Define basic database query. 
			'basicquery' => 
			" SELECT 
				id, gendername
			FROM genders ",
			// Define detailed database query. 
			'detailquery' => 
			" SELECT 
				g.id, g.gendername,
				count(p.id) as numpersons
			FROM (genders as g)
			LEFT JOIN (persons as p) ON (p.genderid = g.id)
			GROUP BY g.id ",
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

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'deptname',
					'fieldtitle'=>'Department',
				],
				[
					'fid'=>'numpersons',
					'fieldtitle'=>'Count',
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

			// Define basic database query. 
			'basicquery' => 
			" SELECT
				id, deptname
			FROM departments ",
			// Define detailed database query. 
			'detailquery' => 
			" SELECT
				d.id, d.deptname,
				count(p.id) as numpersons
			FROM (departments as d)
			LEFT JOIN (persons as p) ON (p.deptid = d.id)
			GROUP BY d.id ",
		],

		'sessions' => [

			// Define table display mode. 
			'tabledisplay' => false,
			// Define table title. 
			'tabletitle' => 'Sessions',
			// Define table navigation icon. 
			'tablenavicon' => 'personlines',
			// Define caption for single item. 
			'singlecaption' => 'Session',

			// Define table entries. 
			'entries' => [],
			// Define reference tables. 
			'reftableids' => [
				'persons',
			],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'personname',
					'fieldtitle'=>'Person',
				],
				[
					'fid'=>'createdat',
					'fieldtitle'=>'Session Start',
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
				// [
				// 	'type'=>'text',
				// 	'fid'=>'createdat',
				// 	'fieldtitle'=>'Session Start',
				// 	'required'=>false,
				// 	'editable'=>false,
				// 	'capref'=>[
				// 		'tid'=>'issues',
				// 		'fid'=>'issuetitle',
				// 	],
				// ],
			],

			// Define basic database query. 
			'basicquery' => 
			" SELECT 
				s.id, s.createdat,
				s.personid, p.personname
			FROM (sessions as s) 
			LEFT JOIN (persons as p) ON (s.personid = p.id) ",
			// Define detailed database query. 
			'detailquery' => 
			" SELECT 
				s.id, s.createdat,
				s.personid, p.personname
			FROM (sessions as s) 
			LEFT JOIN (persons as p) ON (s.personid = p.id) ",
		],
	];
?>
