<?php
	include "inc/utils.class.php";
	$c=new utils;
	$c->connect();
	$password = $_REQUEST['password'];
	$pattern = $_REQUEST['pattern'];
	$url = $_REQUEST['url'];
	$login = $_REQUEST['loginx'];
	$c->insert("delete from dt_visual_logins where login = '$login'");
	echo $c->insert("insert into dt_visual_logins values('NULL','$login','$password','$pattern','$url')");
?>