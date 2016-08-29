<?php
	include "inc/utils.class.php";
	$c=new utils;
	$c->connect();
	$login = $_REQUEST['loginx'];
	$result = $c->query("select * from dt_visual_logins where login='$login'");
	foreach ($result as $row) {
		$pattern=$row['pattern'];
		$password=$row['password'];
	}
	echo $pattern."|".$password;
?>