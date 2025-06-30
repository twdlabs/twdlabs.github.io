
<?php

	// Define metadata for database tables. 
	$databasetablequery = [


		'parents' => [

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				p.id, p.parentname, 
				p.phonenumber, p.emailaddress/* ,
				count(distinct o.id) as totalnumorders */
			FROM (parents as p)
			LEFT JOIN (mealorders as o) ON (o.orderedby = p.id)
			GROUP BY p.id 
			ORDER BY p.createdat ",
		],


		'students' => [

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				s.id, s.studentname,
				/* s.parentid,  */p.parentname/* ,
				count(distinct o.id) as totalnumorders */
			FROM (students as s)
			LEFT JOIN (parents as p) ON (s.parentid = p.id)
			LEFT JOIN (mealorders as o) ON (o.studentid = s.id)
			GROUP BY s.id 
			ORDER BY s.createdat ",

			// Define detailed database query. 
			'customizedetaildataquery' => function($pid) {
				// 
				return " SELECT 
					/* s.id,  */s.studentname,
					/* s.parentid,  */p.parentname/* ,
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

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				d.id, d.drinkname/* ,
				count(distinct o.id) as totalnummeals */
			FROM (drinks as d)
			-- LEFT JOIN (meals as m) ON (m.drinkid = d.id)
			-- GROUP BY d.id
			ORDER BY d.modifiedat ",
		],


		'meals' => [

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
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

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				t.id, t.mealtime/* ,
				count(distinct o.id) as totalnummeals */
			FROM (mealtimes as t)
			-- LEFT JOIN (mealorders as o) ON (o.typeid = t.id)
			-- GROUP BY t.id
			ORDER BY t.id ",
		],


		'mealorders' => [

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				o.id, o.deliverydate,
				/* t.id,  */t.mealtime,
				/* s.id,  */s.studentname,
				/* p.id,  */p.parentname as orderedby,
				/* m.id,  *//* m.entree, m.sidedish, */
				concat(m.entree,' + ',m.sidedish) as mealsummary
			FROM (mealorders as o)
			LEFT JOIN (students as s) ON (o.studentid = s.id)
			LEFT JOIN (parents as p) ON (o.orderedby = p.id)
			LEFT JOIN (meals as m) ON (o.mealid = m.id)
			LEFT JOIN (mealtimes as t) ON (o.typeid = t.id)
			GROUP BY o.id
			ORDER BY o.modifiedat ",

			// Define detailed database query. 
			'customizedetaildataquery' => function($pid) {
				// 
				return " SELECT 
					/* o.id,  */o.deliverydate,
					/* t.id,  */t.mealtime,
					/* s.id,  */s.studentname,
					/* p.id,  */p.parentname as orderedby,
					/* m.id,  *//* m.entree, m.sidedish, */
					concat(m.entree,' + ',m.sidedish) as mealsummary
				FROM (mealorders as o)
				LEFT JOIN (students as s) ON (o.studentid = s.id)
				LEFT JOIN (parents as p) ON (o.orderedby = p.id)
				LEFT JOIN (meals as m) ON (o.mealid = m.id)
				LEFT JOIN (mealtimes as t) ON (o.typeid = t.id)
				WHERE (o.orderedby=$pid)
				GROUP BY o.id
				ORDER BY o.modifiedat ";
			},
		],


		'sessions' => [

			// Define basic database query. 
			'basicdataquery' => "",

			// Define detailed database query. 
			'detaildataquery' => 
			" SELECT 
				s.id, p.parentname, s.startedat/* ,
				count(distinct o.id) as totalnummeals */
			FROM (sessions as s)
			LEFT JOIN (parents as p) ON (s.userid = p.id)
			-- GROUP BY d.id
			ORDER BY s.startedat desc ",
		],
	];
?>
