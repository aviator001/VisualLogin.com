<?
include "inc/utils.class.php";
$c=new utils;
$c->connect();
$result=$c->query("select reg_date as dt from dt_members order by id DESC limit 100 ");
//$c->show($result);

for ($i=0;$i<count($result);$i++) {
	//echo $c->date_to_words($result[$i][dt])."<br>";
}
/*
foreach ($result as $q) {
	echo $q[login];
}

$c->query2HTML("select * from dt_members where gender='Gay Sugar Daddy' limit 50");

*/

echo $c->date_to_words("01-01-2015")."<br>";

echo date("Y-m-d");