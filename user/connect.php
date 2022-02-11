
<?php 

	// Save form data. 
	$firstname = $_POST['fname'];
	$lastname = $_POST['lname'];
	$username = $_POST['username'];
	$password = $_POST['password'];

	// Connect to database. 
	$host = 'localhost';
	$un = 'easydubpeezy-3d1ab3';
	$pw = 'myw-DDxE8Rm-s1ckfzuY';
	$dbname = '573350_e2def2d1826e95877a7c66b2d054abcd';
	$connection = new mysqli( $host, $un, $pw, $dbname );

	// Notify if any connection error. 
	if($connection->connect_error) {

		// Exit script and print message. 
		die('Connection failed: ' . $connection->connect_error);
	}
	
	// Establish connection otherwise. 
	else {

		// Create statement (i:integer d:double s:string b:blob). 
		$query = 'insert into Users(FirstName, LastName, Username, Password) values(?,?,?,?)';

		// Execute statement. 
		$statement = $connection->prepare( $query );
		$statement->bind_param('ssss',$firstname,$lastname,$username,$password);
		$statement->execute();

		// Close resources and notify user. 
		echo ('Registration successful.');
		$statement->close();
		$connection->close();
	}
?>
