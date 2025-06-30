
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body>

		<?php if( $validviewselected ): ?>

			<?php $currenttableid = $_GET['view']; ?>
			<?php $currentdatabasetable = $databasetables[ $currenttableid ]; ?>

			<!-- section -->
			<section class="section">

				<?php include('./assets/module/dashboardtable.php'); ?>

				<?php include('./assets/module/dashboardform.php'); ?>

			</section>
			<!-- /section -->

		<?php else: ?>

			<!-- section -->
			<section class="section schedule">

				<?php include('./assets/module/dashboardschedule.php'); ?>

			</section>
			<!-- /section -->

		<?php endif; ?>

	</body>

</html>
