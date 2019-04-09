<?php
	include "utils.class.php";
	$c=new utils;
	$c->connect();
	$to = $_REQUEST['to'];
	$from = $_REQUEST['from'];
	$type = $_REQUEST['type'];
	$amount = $_REQUEST['amount'];
	$sql = "insert into dt_offers values('NULL',$to,$from,'$type',$amount)";
	$result = $c->insert($sql);
	if (!$result) {
		$rx=$c->query("select amount from dt_offers where to=$to and from=$from and type='$type'");
		echo "Cannot make offer. You have previously made this user the same offer of $" . $rx[0][amount];
	} else {
		echo "User was notified of you offer. Please be patient as it could take a few days for people to get around to this stuff. And oh hey - Good Luck!";
	}
?>