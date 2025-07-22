
<?php

	// Define metadata for database tables. 
	$databasetablequery = [


		'parents' => [

			// Define mini database query. 
			'miniquery' => "",

			// Define full database query. 
			'fullquery' => 
			" SELECT 
				p.id, p.parentname, 
				p.phonenumber, p.emailaddress, p.id as loginas/* ,
				count(distinct o.id) as totalnumorders */
			FROM (parents as p)
			LEFT JOIN (mealorders as o) ON (o.orderedby = p.id)
			GROUP BY p.id 
			ORDER BY p.id ",
		],


		'students' => [

			// Define mini database query. 
			'miniquery' => "",

			// Define full database query. 
			'fullquery' => 
			" SELECT 
				s.id, s.studentname,
				/* s.parentid, */ p.parentname/* ,
				count(distinct o.id) as totalnumorders */
			FROM (students as s)
			LEFT JOIN (parents as p) ON (s.parentid = p.id)
			LEFT JOIN (mealorders as o) ON (o.studentid = s.id)
			GROUP BY s.id 
			ORDER BY s.createdat ",

			// Define full database query (user-specific). 
			'userspecificquery' => function($pid) {
				return " SELECT 
					s.id, s.studentname,
					/* s.parentid, */ p.parentname/* ,
					count(distinct o.id) as totalnumorders */
				FROM (students as s)
				LEFT JOIN (parents as p) ON (s.parentid = p.id)
				LEFT JOIN (mealorders as o) ON (o.studentid = s.id)
				WHERE (s.parentid=$pid)
				GROUP BY s.id 
				ORDER BY s.createdat ";
			},
		],


		'drinks' => [

			// Define mini database query. 
			'miniquery' => "",

			// Define full database query. 
			'fullquery' => 
			" SELECT 
				d.id, d.drinkname/* ,
				count(distinct o.id) as totalnummeals */
			FROM (drinks as d)
			-- LEFT JOIN (meals as m) ON (m.drinkid = d.id)
			-- GROUP BY d.id
			ORDER BY d.modifiedat ",
		],


		'meals' => [

			// Define mini database query. 
			'miniquery' => "",

			// Define full database query. 
			'fullquery' => 
			" SELECT 
				m.id, m.entree, m.sidedish, d.drinkname,
				count(distinct o.id) as totalnumorders/* ,
				count(distinct p.id) as totalnumparents,
				count(distinct s.id) as totalnumstudents */
			FROM (meals as m)
			LEFT JOIN (drinks as d) ON (m.drinkid = d.id)
			LEFT JOIN (mealorders as o) ON (o.mealid = m.id)
			-- LEFT JOIN (parents as p) ON (o.orderedby = p.id)
			-- LEFT JOIN (students as s) ON (o.studentid = s.id)
			GROUP BY m.id
			ORDER BY m.modifiedat ",
		],


		'mealtimes' => [

			// Define mini database query. 
			'miniquery' => "",

			// Define full database query. 
			'fullquery' => 
			" SELECT 
				t.id, t.mealtime/* ,
				count(distinct o.id) as totalnummeals */
			FROM (mealtimes as t)
			-- LEFT JOIN (mealorders as o) ON (o.typeid = t.id)
			-- GROUP BY t.id
			ORDER BY t.id ",
		],


		'mealorders' => [

			// Define mini database query. 
			'miniquery' => "",

			// Define full database query. 
			'fullquery' => 
			" SELECT 
				o.id, o.deliverydate,
				/* t.id, */ t.mealtime,
				concat(m.entree,'<br>',m.sidedish,'<br>',d.drinkname) as mealsummary,
				/* m.id, */ /* m.entree, m.sidedish, */
				/* s.id, */ s.studentname,
				/* p.id, */ p.parentname as orderedby
			FROM (mealorders as o)
			LEFT JOIN (students as s) ON (o.studentid = s.id)
			LEFT JOIN (parents as p) ON (o.orderedby = p.id)
			LEFT JOIN (meals as m) ON (o.mealid = m.id)
			LEFT JOIN (drinks as d) ON (m.drinkid = d.id)
			LEFT JOIN (mealtimes as t) ON (o.typeid = t.id)
			GROUP BY o.id
			ORDER BY o.deliverydate, o.typeid, mealsummary, s.id ",

			// Define full database query (user-specific). 
			'userspecificquery' => function($pid) {
				return " SELECT 
					o.id, o.deliverydate,
					/* t.id, */ t.mealtime,
					concat(m.entree,'<br>',m.sidedish,'<br>',d.drinkname) as mealsummary,
					/* m.id, */ /* m.entree, m.sidedish, */
					/* s.id, */ s.studentname,
					/* p.id, */ p.parentname as orderedby
				FROM (mealorders as o)
				LEFT JOIN (students as s) ON (o.studentid = s.id)
				LEFT JOIN (parents as p) ON (o.orderedby = p.id)
				LEFT JOIN (meals as m) ON (o.mealid = m.id)
				LEFT JOIN (drinks as d) ON (m.drinkid = d.id)
				LEFT JOIN (mealtimes as t) ON (o.typeid = t.id)
				WHERE (o.orderedby=$pid)
				GROUP BY o.id
				ORDER BY o.deliverydate, o.typeid, mealsummary, s.id ";
			},
		],


		'sessions' => [

			// Define mini database query. 
			'miniquery' => "",

			// Define full database query. 
			'fullquery' => 
			" SELECT 
				s.id, s.startedat, s.useripaddress, p.parentname/* , s.useragent *//* ,
				convert_tz(s.startedat,'utc',user_timezone) as localtimestartedat *//* ,
				count(distinct o.id) as totalnummeals */
			FROM (sessions as s)
			LEFT JOIN (parents as p) ON (s.userid = p.id)
			ORDER BY s.startedat asc ",
		],
	];
?>
