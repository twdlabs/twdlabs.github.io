
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="./../sharedassets/flaskicon.png" rel="icon"/>
		<link href="./../sharedassets/flaskicon.png" rel="apple-touch-icon"/>
		<title>Data Type Tester</title>

		<!-- Query Stylesheet -->
		<link href="./../sharedassets/style/query.css" rel="stylesheet" type="text/css"/>
		<!-- Main Stylesheet -->
		<link href="./../sharedassets/style/style.css" rel="stylesheet" type="text/css"/>
		<style type="text/css">
			div#container {background-color:white; text-align:center; border-radius:var(--cornersize); box-shadow:var(--boxshadow);}
			div#container h1.head {font-size:1.7rem; margin:0; margin-top:.75em;}
			div#container table.datatable {padding:.75rem .5rem;}
		</style>
	</head>

	<body>
		<!-- #container -->
		<div id="container">

			<!-- queryarena -->
			<div class="queryarena head openx">
				
				<!-- togglebtn -->
				<div class="togglebtn" onclick="this.parentElement.classList.toggle('open')">
					
					<!-- icon -->
					<svg class="icon dn arrowdown" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon up arrowup" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Toggle</span>
					<!-- /caption -->
					
				</div>
				<!-- /togglebtn -->

				<!-- stage -->
				<div class="stage">

					<?php

						// Connect to server database. 
						// $db = openDb('test');

						// Initialize list of data types. 
						$datatypeslist = [];

						// Save data marker. 
						function saveDataMarker($x,$desc) {
							global $datatypeslist;

							// 
							$datatypeslist[] = [
								'data'=> $x,
								'desc'=> $desc,
								'type'=> gettype($x),
								'isset'=> isset($x),
								'isnull'=> is_null($x),
								'bool'=> !!($x),
								'isempty'=> empty($x),
							];
						}

						// undefined
						$var;
						saveDataMarker( $var , "undefined" );
						// null
						saveDataMarker( null , "null" );
						// false
						saveDataMarker( false , "false" );
						// true
						saveDataMarker( true , "true" );

						// Negative Two
						saveDataMarker( -2 , "-2" );
						// Negative One
						saveDataMarker( -1 , "-1" );
						// 'Double zero'
						saveDataMarker( 00 , "00" );
						// Zero
						saveDataMarker( 0 , "0" );
						// Half
						saveDataMarker( 0.5 , "0.5" );
						// One
						saveDataMarker( 1 , "1" );
						// Two
						saveDataMarker( 2 , "2" );
						// Three
						saveDataMarker( 3 , "3" );

						// Array (empty)
						saveDataMarker( [] , "[]" );
						// Array (non-empty)
						saveDataMarker( ['null'] , "[null]" );
						// Array (non-empty)
						saveDataMarker( ['xyz'] , "[xyz]" );

						// 'undefined'
						saveDataMarker( 'undefined' , "'undefined'" );
						// 'null'
						saveDataMarker( 'null' , "'null'" );
						// 'false'
						saveDataMarker( 'false' , "'false'" );
						// 'true'
						saveDataMarker( 'true' , "'true'" );

						// 'Negative Two'
						saveDataMarker( '-2' , "'-2'" );
						// 'Negative One'
						saveDataMarker( '-1' , "'-1'" );
						// 'Double zero'
						saveDataMarker( '00' , "'00'" );
						// 'Zero'
						saveDataMarker( '0' , "'0'" );
						// 'One'
						saveDataMarker( '1' , "'1'" );
						// 'Two'
						saveDataMarker( '2' , "'2'" );
						// 'Three'
						saveDataMarker( '3' , "'3'" );

						// String (empty)
						saveDataMarker( '' , "''" );
						// String (non-empty)
						saveDataMarker( ' ' , "' '" );
						// String (non-empty)
						saveDataMarker( 'hi' , "'xyz'" );
					?>

				</div>
				<!-- /stage -->

			</div>
			<!-- /queryarena -->

			<!-- head -->
			<h1 class="head">Data Type Tester</h1>
			<!-- /head -->

			<!-- datatable -->
			<table class="datatable">

				<!-- head -->
				<thead class="head">

					<!-- colhead -->
					<th class="colhead">Description</th>
					<!-- /colhead -->

					<!-- colhead -->
					<th class="colhead">Type</th>
					<!-- /colhead -->

					<!-- colhead -->
					<th class="colhead">isset</th>
					<!-- /colhead -->

					<!-- colhead -->
					<th class="colhead">isnull</th>
					<!-- /colhead -->

					<!-- colhead -->
					<th class="colhead">bool</th>
					<!-- /colhead -->

					<!-- colhead -->
					<th class="colhead">isempty</th>
					<!-- /colhead -->

				</thead>
				<!-- /head -->

				<!-- body -->
				<tbody class="body">

					<?php foreach($datatypeslist as $x): ?>

						<!-- row -->
						<tr class="row">

							<!-- cell -->
							<td class="cell"><?php print $x['desc']; ?></td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell"><?php print $x['type']; ?></td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell"><?php print $x['isset']; ?></td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell"><?php print $x['isnull']; ?></td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell"><?php print $x['bool']; ?></td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell"><?php print $x['isempty']; ?></td>
							<!-- /cell -->

						</tr>
						<!-- /row -->

					<?php endforeach; ?>

				</tbody>
				<!-- /body -->

			</table>
			<!-- /datatable -->

		</div>
		<!-- /#container -->

	</body>

</html>

<?php

	// Disconnect server database. 
	// closeDb($db);
?>
