


<?php

	// Show result of database query. 
	function showResult($result) {

		// 
		echo '<br>';

		// Show details of result. 
		if($result) {
			echo 'Result count: ' . $result->num_rows;
			echo '<br>';
			echo 'Result: ' . $result;
			echo '<br>';
		}

		// Notify of no result. 
		else {
			echo 'No result...';
			echo '<br>';
		}

		// 
		logResult($result);
	}

	// Log result of database query. 
	function logResult($result) {
		?>
		<script>
			console.log(<?php echo $result; ?>);
		</script>
		<?php
	}
?>
