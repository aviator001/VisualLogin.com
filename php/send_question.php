<?php
	
	
	//$email_to = "ted@therevolution.com";
	//$email = $_POST['email'];
	//$message = $_POST['message'];
	//$subject = "customer question";
	$email_to = $_REQUEST['email'];
	$email = $_REQUEST['email'];
	$message = $_REQUEST['message'];
	$subject = $_REQUEST['subject'];
	
	//$email = 'ted@therevolution.com';
	//$message = 'this is a test';
	$headers = "From: $email \r\n" .
				"Reply-To:" . $email . "\r\n" .
				'X-Mailer: PHP/' . phpversion();

	$result = 	mail($email_to,$subject,$message,$headers);

	var_dump($result);

?>
