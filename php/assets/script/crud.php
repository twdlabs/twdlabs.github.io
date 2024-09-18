


<?php

	// Get value of form field by name. 
	function getFieldValue($fieldname) {

		// Get field value from form submission. 
		$fieldvalue = $_POST[$fieldname];

		// Display field value. 
		echo "$fieldname: " . $fieldvalue;
		echo '<br>';

		// Return field value. 
		return $fieldvalue;
	}
?>
