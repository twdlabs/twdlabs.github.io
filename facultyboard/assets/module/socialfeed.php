
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php $errormsg = ''; ?>
		<?php $successmsg = ''; ?>
		<?php if( $errormsg  || $successmsg ): ?>

			<!-- xyz -->
			<section class="xyz">

				<!-- msgcenter -->
				<div class="msgcenter" style="margin:0;">

					<?php if( $errormsg ): ?>

						<!-- msg -->
						<div class="msg r"><?php print $errormsg; ?></div>
						<!-- /msg -->

					<?php endif; ?> 

					<?php if($successmsg): ?>

						<!-- msg -->
						<div class="msg g"><?php print $successmsg; ?></div>
						<!-- /msg -->

					<?php endif; ?>

				</div>
				<!-- /msgcenter -->

			</section>
			<!-- /xyz -->

		<?php endif; ?>

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

			<?php foreach($databasetables['issues']['entries'] as $issuerow): ?>

				<!-- <?php print json_encode($issuerow); ?> -->

				<?php $issueid = $issuerow['id']; ?>
				<?php $title = $issuerow['issuetitle']; ?>
				<?php $description = $issuerow['issuedescription']; ?>
				<?php $totalcomments = $issuerow['totalcomments']; ?>

				<!-- issue -->
				<article class="issue">

					<!-- title -->
					<h3 class="title">

						<!-- caption -->
						<span class="caption"><?php print $title; ?></span>
						<!-- /caption -->

						<!-- number -->
						<span class="number"><?php print $totalcomments; ?></span>
						<!-- /number -->

					</h3>
					<!-- /title -->

					<!-- description -->
					<p class="description"><?php print $description; ?></p>
					<!-- /description -->

					<!-- commentlist -->
					<ul class="commentlist">

						<?php foreach($databasetables['comments']['entries'] as $commentrow): ?>

							<!-- <?php print json_encode($commentrow); ?> -->

							<?php $name = $commentrow['personname']; ?>
							<?php $comment = $commentrow['commenttext']; ?>

							<?php if( $commentrow['issueid']==$issueid ): ?>

								<!-- commentitem -->
								<li class="commentitem">

									<!-- name -->
									<span class="name"><?php print $name; ?>:</span>
									<!-- /name -->

									<!-- comment -->
									<span class="comment"><?php print $comment; ?></span>
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
						<input class="parameter" type="hidden" name="issueid" value="<?php print $issueid; ?>">
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
