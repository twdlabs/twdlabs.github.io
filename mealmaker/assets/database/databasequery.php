
<?php

	// Define metadata for database tables. 
	$databasetablequery = [


		'persons' => [

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				p.id,
				p.childname, p.personname,
				p.username, p.phonenumber
			FROM (persons as p)
			ORDER BY p.id ",
		],


		'users' => [

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				u.id,
				u.childname, u.personname,
				u.username, u.phonenumber,
				-- count(distinct mo.mealid) as nummeals,
				count(distinct o.id) as totalnumorders
			FROM (users as u)
			LEFT JOIN (mealorders as o) ON (o.userid = u.id)
			GROUP BY u.id 
			ORDER BY u.id ",
		],


		'meals' => [

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

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				o.id,
				u.childname, u.personname,
				m.mealname
			FROM (mealorders as o)
			LEFT JOIN (users as u) ON (o.userid = u.id)
			LEFT JOIN (meals as m) ON (o.mealid = m.id)
			ORDER BY o.modifiedat ",
		],
	];
?>
