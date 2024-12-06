
<?php

	// Get functions to access server database. 
	require_once('./../sharedassets/script/config.php');
	// Get functions to handle database queries. 
	require_once('./../sharedassets/script/query.php');
	// // Get functions to access user input. 
	// require_once('./../sharedassets/script/input.php');
	// Get functions to display output. 
	require_once('./../sharedassets/script/output.php');

	// Get metadata for database tables. 
	require_once('./assets/database.php');
	// require_once('./assets/database/database.php');
	// Get metadata for database table icons. 
	require_once('./assets/tableicons.php');
	// require_once('./assets/database/tableicons.php');
	// Get functions to perform CRUD operations. 
	require_once('./../sharedassets/script/crudops.php');
	require_once('./assets/crudops.php');

	// TODO: Define state of dark theme. 
	$usedarktheme = true;
?>

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
		<title>Event Volunteers</title>

		<!-- Main Stylesheet (shared) -->
		<link href="./../sharedassets/style/style.css" rel="stylesheet" type="text/css"/>
		<!-- Query Stylesheet (shared) -->
		<link href="./../sharedassets/style/query.css" rel="stylesheet" type="text/css"/>
		<!-- CRUD Form Stylesheet (shared) -->
		<link href="./../sharedassets/style/crudform.css" rel="stylesheet" type="text/css"/>

		<!-- Main Stylesheet -->
		<link href="./assets/style.css" rel="stylesheet" type="text/css"/>

		<!-- <style type="text/css"></style> -->

		<script type="text/javascript">
			// console.log('Server data:', <?php print isset($_SERVER) ? json_encode($_SERVER) : null; ?>);
			console.log('Session data:', <?php print isset($_SESSION) ? json_encode($_SESSION) : null; ?>);
			console.log('Get response data:', <?php print isset($_GET) ? json_encode($_GET) : null; ?>);
			console.log('Post response data:', <?php print isset($_POST) ? json_encode($_POST) : null; ?>);
			console.log('Database tables (start):', <?php print json_encode( getDatabaseEntries() ); ?>);
		</script>
	</head>

	<body class="<?php print $usedarktheme ? 'dark' : ''; ?>" ondblclick="this.classList.toggle('dark')">

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
						$db = openDb('cis355eventvolunteers');

						// Check for new C.R.U.D. operations. 
						checkCrudOps();

						// Download all table entries from database. 
						getAllTables(1);

						// Get self-reference url (for forms and links). 
						$selfurl = getSelfRefUrl();
						$selfurlbase = getSelfRefUrl(false);
					?>

				</div>
				<!-- /stage -->

			</div>
			<!-- /queryarena -->

			<?php foreach( $databasetables as $tid=>$currenttable ): ?>

				<!-- datatable -->
				<section class="datatable">

					<!-- head -->
					<div class="headbar spbtw">

						<!-- head -->
						<h2 class="headline"><?php print $currenttable['tabletitle']; ?></h2>
						<!-- /head -->

						<!-- newbtn -->
						<button class="newbtn btn" onclick="toggleEntryComposer()">

							<!-- icon -->
							<svg class="icon plus" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">New</span>
							<!-- /caption -->

						</button>
						<!-- /newbtn -->

					</div>
					<!-- /head -->

					<!-- scroller -->
					<div class="scroller">

						<!-- table -->
						<table class="table">

							<!-- head -->
							<thead class="head">

								<?php foreach( $currenttable['displayfields'] as $displayfield ): ?>

									<!-- cell -->
									<th class="cell"><?php print $displayfield['fieldtitle']; ?></th>
									<!-- /cell -->

								<?php endforeach; ?>

							</thead>
							<!-- /head -->

							<!-- body -->
							<tbody class="body">

								<?php foreach( $currenttable['entrydata'] as $tablerow ): ?>

									<!-- row -->
									<tr class="row">

										<?php foreach( $currenttable['displayfields'] as $displayfield ): ?>

											<?php $fid = $displayfield['fid']; ?>
											<?php $fval = $tablerow[$fid]; ?>

											<!-- cell -->
											<td class="cell"><?php print $fval; ?></td>
											<!-- /cell -->

										<?php endforeach; ?>

									</tr>
									<!-- /row -->

								<?php endforeach; ?>

							</tbody>
							<!-- /body -->

						</table>
						<!-- /table -->

					</div>
					<!-- /scroller -->

				</section>
				<!-- /datatable -->

				<!-- composer -->
				<section class="composer float">

					<!-- head -->
					<div class="headbar spbtw">

						<!-- head -->
						<h2 class="headline">

							<!-- caption -->
							<span class="caption">New <?php print $currenttable['singlecaption']; ?></span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- closebtn -->
						<button class="closebtn btn" onclick="closeEntryComposer()">

							<!-- icon -->
							<svg class="icon xbig" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
								<path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Close</span>
							<!-- /caption -->

						</button>
						<!-- /closebtn -->

					</div>
					<!-- /head -->

					<!-- create -->
					<form class="create crudform" method="post" action="<?php print $selfurl; ?>">

						<!-- parameter -->
						<input class="parameter" type="hidden" name="crudopid" value="create">
						<input class="parameter" type="hidden" name="crudtableid" value="<?php print $tid; ?>">
						<!-- /parameter -->

						<!-- fieldlist -->
						<ul class="fieldlist">

							<?php foreach( $currenttable['editorfields'] as $editorfield ): ?>

								<?php $fid = $editorfield['fid']; ?>
								<?php $fieldtype = $editorfield['type']; ?>
								<?php $fieldtitle = $editorfield['fieldtitle']; ?>

								<!-- field -->
								<li class="field">

									<?php if( $fieldtype=='select' ): ?>

										<!-- fieldinput -->
										<select class="fieldinput" name="<?php print $fid; ?>">

											<!-- option -->
											<option class="option" value="">Select <?php print $fieldtitle; ?></option>
											<!-- /option -->

											<? foreach($editorfield['xyz'] as $xyz): ?>

												<!-- option -->
												<option class="option" value="<?php print 'hi'; ?>"><?php print 'hi'; ?></option>
												<!-- /option -->

											<? endforeach; ?>

										</select>
										<!-- /fieldinput -->

									<?php else: ?>

										<!-- fieldinput -->
										<input class="fieldinput" name="<?php print $fid; ?>" type="<?php print $fieldtype; ?>" placeholder="<?php print $fieldtitle; ?>">
										<!-- /fieldinput -->

									<?php endif; ?>

								</li>
								<!-- /field -->

							<?php endforeach; ?>

						</ul>
						<!-- /fieldlist -->

						<!-- action -->
						<div class="action">

							<!-- sendbtn -->
							<button class="sendbtn btn">

								<!-- caption -->
								<span class="caption">Add <?php print $currenttable['singlecaption']; ?></span>
								<!-- /caption -->

							</button>
							<!-- /sendbtn -->

						</div>
						<!-- /action -->
						
					</form>
					<!-- /create -->

				</section>
				<!-- /composer -->

			<?php endforeach; ?>

		</div>
		<!-- /#container -->

		<script type="text/javascript">
			console.log('Database tables (end):', <?php print json_encode( getDatabaseEntries() ); ?>);
		</script>

	</body>

</html>

<?php

	// Disconnect server database. 
	closeDb($db);
?>
