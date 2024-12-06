
<?php

	// Define metadata for database tables. 
	$databasetables = [
		
		'departments' => [

			// Define table title. 
			'tabletitle' => 'Departments',
			// Define table navigation icon. 
			'tableicontag' => 'personcard',
			// Define caption for single item. 
			'singlecaption' => 'Department',
			// Define table entry accessibility (for non-admin users). 
			'tableentrieseditable' => false,
			'tableentriescomposable' => false,
			// Define table visibility in navigation (for non-admin users). 
			'tablenavvisible' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'deptname',
					'fieldtitle'=>'Department',
					'visibleintable'=>true,
				],
				[
					'fid'=>'numpersons',
					'fieldtitle'=>'People',
					'visibleintable'=>true,
				],
				[
					'fid'=>'numissues',
					'fieldtitle'=>'Issues',
					'visibleintable'=>true,
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
			// Define field ids for 'new entry' query. 
			'newentryfieldids' => [] /* [
				// 'xyz',
			] */,

			// Define basic database query. 
			'basicdataquery' => 
			" SELECT
				id, deptname
			FROM departments ",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT
				d.id, d.deptname,
				count(distinct i.id) as numissues,
				count(distinct p.id) as numpersons
			FROM (departments as d)
			LEFT JOIN (persons as p) ON (p.deptid = d.id)
			LEFT JOIN (issues as i) ON (i.deptid = d.id)
			GROUP BY d.id ",
			// Define database query for single entry. 
			'singleentryquery' => 
			" SELECT
				d.id, d.deptname,
				count(distinct i.id) as numissues,
				count(distinct p.id) as numpersons
			FROM (departments as d)
			LEFT JOIN (persons as p) ON (p.deptid = d.id)
			LEFT JOIN (issues as i) ON (i.deptid = d.id)
			WHERE d.id=xyz
			GROUP BY d.id ",
		],
		
		'genders' => [

			// Define table title. 
			'tabletitle' => 'Genders',
			// Define table navigation icon. 
			'tableicontag' => 'personsquare',
			// Define caption for single item. 
			'singlecaption' => 'Gender',
			// Define table entry accessibility (for non-admin users). 
			'tableentrieseditable' => false,
			'tableentriescomposable' => false,
			// Define table visibility in navigation (for non-admin users). 
			'tablenavvisible' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'avatarfilename',
					'fieldtype'=>'image',
					'fieldtitle'=>'Avatar',
					'visibleintable'=>true,
				],
				[
					'fid'=>'gendername',
					'fieldtitle'=>'Gender',
					'visibleintable'=>true,
				],
				[
					'fid'=>'numpersons',
					'fieldtitle'=>'Count',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'gendername',
					'fieldtitle'=>'Gender',
					'required'=>true,
					'editable'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'avatarfilename',
					'fieldtitle'=>'Avatar Image',
					'required'=>false,
					'editable'=>true,
				],
			],
			// Define field ids for 'new entry' query. 
			'newentryfieldids' => [] /* [
				// 'xyz',
			] */,

			// Define basic database query. 
			'basicdataquery' => 
			" SELECT 
				id, gendername
			FROM genders ",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				g.id, g.gendername, g.avatarfilename,
				count(distinct p.id) as numpersons
			FROM (genders as g)
			LEFT JOIN (persons as p) ON (p.genderid = g.id)
			GROUP BY g.id ",
		],

		'persons' => [

			// Define table title. 
			'tabletitle' => 'Faculty',
			// Define table navigation icon. 
			'tableicontag' => 'personlines',
			// Define caption for single item. 
			'singlecaption' => 'Person',
			// Define table entry accessibility (for non-admin users). 
			'tableentrieseditable' => false,
			'tableentriescomposable' => false,
			// Define table visibility in navigation (for non-admin users). 
			'tablenavvisible' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [
				'departments',
				'genders',
				// 'persons',
			],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'avatarfilename',
					// 'fieldtype'=>'text',
					'fieldtype'=>'image',
					'fieldtitle'=>'Avatar',
					'visibleintable'=>true,
				],
				[
					'fid'=>'personname',
					'fid'=>'displayname',
					'fieldtitle'=>'Name',
					'visibleintable'=>true,
				],
				[
					'fid'=>'gendername',
					'fieldtitle'=>'Gender',
					'visibleintable'=>false,
				],
				[
					'fid'=>'position',
					'fieldtitle'=>'Position',
					'visibleintable'=>true,
				],
				[
					'fid'=>'deptname',
					'fieldtitle'=>'Department',
					'visibleintable'=>true,
				],
				[
					'fid'=>'username',
					'fieldtitle'=>'Username',
					'visibleintable'=>true,
				],
				[
					'fid'=>'isadmin',
					'fieldtitle'=>'Admin',
					'visibleintable'=>false,
				],
				[
					'fid'=>'totalsessions',
					'fieldtitle'=>'Logins',
					'visibleintable'=>false,
				],
				[
					'fid'=>'lastlogin',
					'fieldtitle'=>'Last Login',
					'visibleintable'=>false,
				],
				[
					'fid'=>'relevantissues',
					'fieldtitle'=>'Issues',
					'visibleintable'=>true,
				],
				[
					'fid'=>'totalcomments',
					'fieldtitle'=>'Comments',
					'visibleintable'=>true,
				],
				[
					'fid'=>'totalreferrals',
					'fieldtitle'=>'Referred',
					'fieldtitle'=>'Referrals',
					// 'fieldtitle'=>'Network',
					'visibleintable'=>true,
				],
				// [
				// 	'fid'=>'referrername',
				// 	'fieldtitle'=>'Referrer',
				// ],
				[
					'fid'=>'referrerusername',
					'fieldtitle'=>'Referrer',
					'visibleintable'=>false,
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
			// Define table editor fields (used for registration). 
			'editorfields' => [
				[
					'type'=>'text',
					'fid'=>'personname',
					'fieldtitle'=>'Name',
					'required'=>true,
					'editable'=>true,
					'fieldicon'=>'person',
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
					'fieldicon'=>'briefcase',
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
					'fid'=>'referrerid',
					'fieldtitle'=>'Referrer',
					'required'=>false,
					'editable'=>true,
					'capref'=>[
						'tid'=>'persons',
						'fid'=>'personname',
					],
					'skipinregistration'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'username',
					'fieldtitle'=>'Username',
					'fieldtitle'=>'Create Username',
					'required'=>true,
					'editable'=>true,
					'fieldicon'=>'person',
				],
				[
					'type'=>'password',
					'fid'=>'password',
					'fieldtitle'=>'Create Password',
					'required'=>true,
					'editable'=>false,
					'fieldicon'=>'key',
				],
				[
					'type'=>'password',
					'fid'=>'passwordrepeat',
					'fieldtitle'=>'Confirm Password',
					'required'=>true,
					'editable'=>false,
					'fieldicon'=>'key',
				],
			],
			// Define table checker fields (used for login). 
			'checkerfields' => [
				[
					'type'=>'select',
					'fid'=>'userid',
					'fieldtitle'=>'Select User',
					'required'=>true,
				],
				[
					'type'=>'text',
					'fid'=>'username',
					'fieldtitle'=>'Username',
					'required'=>true,
					'fieldicon'=>'person',
					'fieldicon'=>'personbold',
				],
				[
					'type'=>'password',
					'fid'=>'password',
					'fieldtitle'=>'Password',
					'required'=>true,
					'fieldicon'=>'key',
					'fieldicon'=>'keybold',
				],
			],

			// Define basic database query. 
			// 'basicdataquery' => 
			// " SELECT 
			// 	p.id, personname, username,
			// 	genderid, position,
			// 	max(s.createdat) as lastlogin
			// FROM (persons as p)
			// LEFT JOIN (sessions as s) ON (s.personid = p.id)
			// /* GROUP BY p.id */ ",
			'basicdataquery' => 
			" SELECT 
				id, personname, username
			FROM persons ",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				p.id, p.personname,
				concat( p.personname , if( count(distinct a.personid) > 0 , ' ⭐️' , '' ) ) as displayname,
				p.username, p.passwdsalt, p.passwdhash,
				p.genderid, g.gendername, g.avatarfilename,
				p.position, p.deptid, d.deptname,
				count(distinct a.personid) as admincount,
				if( count(distinct a.personid) > 0 , '👍' , '' ) as isadmin,
				max(s.createdat) as lastlogin,
				count(distinct s.id) as totalsessions,
				count(distinct r.id) as totalreferrals,
				p.referrerid, rs.personname as referrername, rs.username as referrerusername,
				count(distinct c.issueid) as relevantissues,
				count(distinct c.id) as totalcomments 
			FROM (persons as p)
			LEFT JOIN (comments as c) ON (c.personid = p.id)
			LEFT JOIN (genders as g) ON (p.genderid = g.id)
			LEFT JOIN (persons as r) ON (r.referrerid = p.id)
			LEFT JOIN (persons as rs) ON (p.referrerid = rs.id)
			LEFT JOIN (departments as d) ON (p.deptid = d.id)
			LEFT JOIN (admins as a) ON (a.personid = p.id)
			LEFT JOIN (sessions as s) ON (s.personid = p.id)
			GROUP BY p.id/* ,r.referrerid */ ",
		],

		'admins' => [

			// Define table title. 
			'tabletitle' => 'Admins',
			// Define table navigation icon. 
			'tableicontag' => 'briefcasebold',
			'tableicontag' => 'persongearbold',
			// Define caption for single item. 
			'singlecaption' => 'Admin',
			// Define table entry accessibility (for non-admin users). 
			'tableentrieseditable' => false,
			'tableentriescomposable' => false,
			// Define table visibility in navigation (for non-admin users). 
			'tablenavvisible' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [
				'persons',
			],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'personname',
					'fieldtitle'=>'Person',
					'visibleintable'=>true,
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
			// Define field ids for 'new entry' query. 
			'newentryfieldids' => [] /* [
				// 'xyz',
			] */,

			// Define basic database query. 
			// 'basicdataquery' => 
			// " SELECT 
			// 	id, personid 
			// FROM admins ",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				a.id, a.personid, p.personname 
			FROM (admins as a) 
			LEFT JOIN (persons as p) ON (a.personid = p.id) ",
		],

		'sessions' => [

			// Define table title. 
			'tabletitle' => 'Login Sessions',
			// Define table navigation icon. 
			'tableicontag' => 'opendoor',
			// Define caption for single item. 
			'singlecaption' => 'Session',
			// Define table entry accessibility (for non-admin users). 
			'tableentrieseditable' => false,
			'tableentriescomposable' => false,
			// Define table visibility in navigation (for non-admin users). 
			'tablenavvisible' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [
				'persons',
			],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'personname',
					'fieldtitle'=>'Person',
					'visibleintable'=>true,
				],
				[
					'fid'=>'createdat',
					'fieldtitle'=>'Session Start',
					'visibleintable'=>false,
				],
				[
					'fid'=>'sessiondate',
					'fieldtitle'=>'Session Date',
					'fieldtitle'=>'Date',
					'visibleintable'=>false,
				],
				[
					'fid'=>'sessiondatelocal',
					'fieldtitle'=>'Session Date',
					'fieldtitle'=>'Date',
					'visibleintable'=>true,
				],
				[
					'fid'=>'sessiontime',
					'fieldtitle'=>'Session Time',
					'fieldtitle'=>'Time',
					'visibleintable'=>false,
				],
				[
					'fid'=>'sessiontimelocal',
					'fieldtitle'=>'Session Time',
					'fieldtitle'=>'Time',
					'visibleintable'=>true,
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
			// Define field ids for 'new entry' query. 
			'newentryfieldids' => [] /* [
				// 'xyz',
			] */,

			// Define basic database query. 
			// 'basicdataquery' => 
			// " SELECT 
			// 	id, createdat, personid
			// FROM sessions ",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				s.id,
				s.personid, p.personname,
				date(s.createdat) as sessiondate,
				time(s.createdat) as sessiontime,
				date( convert_tz( s.createdat, '+00:00', '-05:00' ) ) as sessiondatelocal,
				time( convert_tz( s.createdat, '+00:00', '-05:00' ) ) as sessiontimelocal,
				-- date_format( convert_tz( s.createdat, '+00:00', '-05:00' ) ) as sessiontimelocalB,
				s.createdat
			FROM (sessions as s) 
			LEFT JOIN (persons as p) ON (s.personid = p.id) ",
		],

		'issues' => [

			// Define table title. 
			'tabletitle' => 'Issues',
			// Define table navigation icon. 
			'tableicontag' => 'journaltext',
			// Define caption for single item. 
			'singlecaption' => 'Issue',
			// Define table entry accessibility (for non-admin users). 
			'tableentrieseditable' => false,
			'tableentriescomposable' => false,
			// Define table visibility in navigation (for non-admin users). 
			'tablenavvisible' => true,

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [
				'departments',
			],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'deptname',
					'fieldtitle'=>'Department',
					'visibleintable'=>true,
				],
				[
					'fid'=>'issuetitle',
					'fieldtitle'=>'Issue',
					'visibleintable'=>true,
				],
				[
					'fid'=>'issuedescription',
					'fieldtitle'=>'Issue Description',
					'visibleintable'=>true,
				],
				[
					'fid'=>'totalcomments',
					'fieldtitle'=>'Comments',
					'visibleintable'=>true,
				],
				[
					'fid'=>'totalcommenters',
					'fieldtitle'=>'People',
					'visibleintable'=>false,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				[
					'type'=>'select',
					'fid'=>'deptid',
					'fieldtitle'=>'Department',
					'required'=>true,
					'editable'=>true,
					'capref'=>[
						'tid'=>'departments',
						'fid'=>'deptname',
					],
				],
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
			// Define field ids for 'new entry' query. 
			'newentryfieldids' => [] /* [
				// 'xyz',
			] */,

			// Define basic database query. 
			'basicdataquery' => 
			" SELECT 
				id, issuetitle
			FROM issues ",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				i.id, i.issuetitle, i.issuedescription,
				i.deptid, d.deptname,
				count(distinct c.id) as totalcomments,
				count(distinct p.id) as totalcommenters 
			FROM (issues as i)
			LEFT JOIN (comments as c) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id)
			LEFT JOIN (departments as d) ON (i.deptid = d.id)
			GROUP BY i.id ",
		],

		'comments' => [

			// Define table title. 
			'tabletitle' => 'Comments',
			// Define table navigation icon. 
			'tableicontag' => 'chatbubbletext',
			// Define caption for single item. 
			'singlecaption' => 'Comment',
			// Define table entry accessibility (for non-admin users). 
			'tableentrieseditable' => false,
			'tableentriescomposable' => false,
			// Define table visibility in navigation (for non-admin users). 
			'tablenavvisible' => false,

			// Define downloaded table entry data. 
			'entrydata' => [],
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
					'visibleintable'=>true,
				],
				[
					'fid'=>'issuetitle',
					'fieldtitle'=>'Issue',
					'visibleintable'=>true,
				],
				[
					'fid'=>'commenttext',
					'fieldtitle'=>'Comment',
					'visibleintable'=>true,
				],
				[
					'fid'=>'createdat',
					'fieldtitle'=>'Created',
					'visibleintable'=>true,
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
			// Define field ids for 'new entry' query. 
			'newentryfieldids' => [] /* [
				// 'xyz',
			] */,

			// Define basic database query. 
			// 'basicdataquery' => 
			// " SELECT 
			// 	id, commenttext, createdat,
			// 	issueid, personid
			// FROM comments ",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				c.id, c.commenttext, c.createdat,
				c.personid, p.personname,
				c.issueid, i.issuetitle/* ,
				count(distinct cl.id) as numlikes */
			FROM (comments as c) 
			LEFT JOIN (issues as i) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id) 
			/* LEFT JOIN (commentlikes as cl) ON (cl.commentid = c.id) */ ",
		],

		'mycomments' => [

			// Define table title. 
			'tabletitle' => 'My Comments',
			// Define table navigation icon. 
			'tableicontag' => 'activity',
			'tableicontag' => 'chatbubbletext',
			// Define caption for single item. 
			'singlecaption' => 'Comment',
			// Define table entry accessibility (for non-admin users). 
			'tableentrieseditable' => true,
			'tableentriescomposable' => true,
			// Define table visibility in navigation (for non-admin users). 
			'tablenavvisible' => true,

			// Define downloaded table entry data. 
			'entrydata' => [],
			// Define reference tables. 
			'reftableids' => [
				// 'persons',
				'issues',
				// 'comments',
			],

			// Define table display fields (from detailed query results). 
			'displayfields' => [
				[
					'fid'=>'personname',
					'fieldtitle'=>'Person',
					'visibleintable'=>false,
				],
				[
					'fid'=>'issuetitle',
					'fieldtitle'=>'Issue',
					'visibleintable'=>true,
				],
				[
					'fid'=>'commenttext',
					'fieldtitle'=>'Comment',
					'visibleintable'=>true,
				],
				[
					'fid'=>'createdat',
					'fieldtitle'=>'Created',
					'visibleintable'=>true,
				],
			],
			// Define table editor fields. 
			'editorfields' => [
				// [
				// 	'type'=>'select',
				// 	'fid'=>'personid',
				// 	'fieldtitle'=>'Person',
				// 	'required'=>true,
				// 	'editable'=>false,
				// 	'capref'=>[
				// 		'tid'=>'persons',
				// 		'fid'=>'personname',
				// 	],
				// ],
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
			// Define field ids for 'new entry' query. 
			'newentryfieldids' => [] /* [
				// 'xyz',
			] */,

			// Define basic database query. 
			// 'basicdataquery' => 
			// " SELECT 
			// 	id, commenttext, createdat,
			// 	issueid, personid
			// FROM comments
			// WHERE personid= ",
			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				c.id, c.commenttext, c.createdat,
				c.personid, p.personname,
				c.issueid, i.issuetitle/* ,
				count(distinct cl.id) as numlikes */
			FROM (comments as c) 
			LEFT JOIN (issues as i) ON (c.issueid = i.id)
			LEFT JOIN (persons as p) ON (c.personid = p.id) 
			/* LEFT JOIN (commentlikes as cl) ON (cl.commentid = c.id) */
			WHERE p.id= ",
		],
	];
?>
