
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php include('./assets/module/message.php'); ?>

		<!-- socialfeed -->
		<section class="socialfeed">

			<!-- head -->
			<div class="head">

				<!-- head -->
				<h2 class="head">

					<!-- selflink -->
					<a class="selflink" href="<?php print $selfurl; ?>">

						<!-- caption -->
						<span class="caption">Social Feed</span>
						<!-- /caption -->
						
					</a>
					<!-- /selflink -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

			<?php foreach($databasetables['issues']['entrydata'] as $issuerow): ?>

				<!-- <?php print json_encode($issuerow); ?> -->

				<?php $currentissueid = $issuerow['id']; ?>
				<?php $currentissuetitle = $issuerow['issuetitle']; ?>
				<?php $currentissuedescription = $issuerow['issuedescription']; ?>
				<?php $currentissuetotalcomments = $issuerow['totalcomments']; ?>

				<!-- issue -->
				<article class="issue">

					<!-- title -->
					<h3 class="title">

						<!-- caption -->
						<span class="caption"><?php print $currentissuetitle; ?></span>
						<!-- /caption -->

						<!-- number -->
						<span class="number"><?php print $currentissuetotalcomments; ?></span>
						<!-- /number -->

					</h3>
					<!-- /title -->

					<!-- description -->
					<p class="description"><?php print $currentissuedescription; ?></p>
					<!-- /description -->

					<!-- commentlist -->
					<ul class="commentlist">

						<?php foreach($databasetables['comments']['entrydata'] as $commentrow): ?>

							<!-- <?php print json_encode($commentrow); ?> -->

							<?php $commenttext = $commentrow['commenttext']; ?>
							<?php $commentername = $commentrow['personname']; ?>

							<?php if( $commentrow['issueid']==$currentissueid ): ?>

								<!-- commentitem -->
								<li class="commentitem">

									<!-- name -->
									<span class="name"><?php print $commentername; ?>:</span>
									<!-- /name -->

									<!-- comment -->
									<span class="comment"><?php print $commenttext; ?></span>
									<!-- /comment -->

								</li>
								<!-- /commentitem -->

							<?php endif; ?>

						<?php endforeach; ?>

					</ul>
					<!-- /commentlist -->

					<!-- newcomment -->
					<form class="newcomment" method="post" action="<?php print $selfurl; ?>">

						<!-- parameter -->
						<input class="parameter" type="hidden" name="optypeid" value="create">
						<input class="parameter" type="hidden" name="tableid" value="comments">
						<!-- /parameter -->

						<!-- parameter -->
						<input class="parameter" type="hidden" name="personid" value="<?php print $currentuserid; ?>">
						<input class="parameter" type="hidden" name="issueid" value="<?php print $currentissueid; ?>">
						<!-- /parameter -->

						<!-- fieldinput -->
						<input class="fieldinput" type="text" name="commenttext" placeholder="New Comment" value="" required>
						<!-- <textarea class="fieldinput" name="commenttext" placeholder="New Comment" required></textarea> -->
						<!-- /fieldinput -->

					</form>
					<!-- /newcomment -->

				</article>
				<!-- /issue -->

			<?php endforeach; ?>

		</section>
		<!-- /socialfeed -->

	</body>

</html>
