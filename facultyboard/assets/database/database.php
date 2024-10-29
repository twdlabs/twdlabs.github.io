
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
			LEFT JOIN (persons as p) ON (a.personid = p.id)",

			// Define table display fields (from home query results). 
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
				p.referralid, p.genderid, g.gendername, p.department, r.personname as referralsource,
				-- count(i.id) as issueshit,
				count(c.id) as totalcomments 
			FROM (persons as p)
			LEFT JOIN (comments as c) ON (c.personid = p.id)
			LEFT JOIN (genders as g) ON (p.genderid = g.id)
			LEFT JOIN (persons as r) ON (p.referralid = r.id)
			GROUP BY p.id",

			// Define table display fields (from home query results). 
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
					'fid'=>'department',
					'fieldtitle'=>'Position',
				],
				[
					'fid'=>'referralsource',
					'fieldtitle'=>'Referred by',
				],
				[
					'fid'=>'emailaddress',
					'fieldtitle'=>'E-mail',
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
					'fid'=>'department',
					'fieldtitle'=>'Position',
					'required'=>false,
					'editable'=>true,
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
			LEFT JOIN (issues as i) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id)",
			// Define database query (home). 
			'homequery' => 
			"SELECT 
				c.id, c.commenttext, c.createdat,
				c.personid, p.personname,
				c.issueid, i.issuetitle/* ,
				count(cl.id) as numlikes */
			FROM (comments as c) 
			LEFT JOIN (issues as i) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id) 
			/* LEFT JOIN (commentlikes as cl) ON (cl.commentid = c.id) */",

			// Define table display fields (from home query results). 
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
			"SELECT
				d.id, d.deptname/* ,
				count(p.id) as personcount */
			FROM (departments as d)
			/* LEFT JOIN (persons as p) ON (p.deptid = d.id) */",

			// Define table display fields (from home query results). 
			'displayfields' => [
				[
					'fid'=>'deptname',
					'fieldtitle'=>'Department',
				],
				[
					'fid'=>'personcount',
					'fieldtitle'=>'Participants',
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
?>
