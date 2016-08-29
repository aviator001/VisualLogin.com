<?
ob_start();
	session_start();
	ini_set("error_reporting",'1');
	include "inc/utils.class.php";
	$c = new utils;
	try {
		$c->connect();
		try {
				$sql="select * from dt_members where login = '".$_REQUEST['loginx']."'";
				if($result = $c->query($sql)){
					foreach($result as $Q){
						$mid        	=  $Q[id];
						$login 			=  $Q[login];
						$mobile    		=  $Q[mobile]; 
						$email     		=  $Q[email];
						$name      		=  $Q[name];
						$gender 		=  $Q[gender];
						$filename_1  	=  $Q[filename_1]; 
						$age   			=  $Q[age];
						$unlimited   	=  $Q[unlimited];
						$ip   			=  $Q[ip];
						$lat   			=  $Q[lat];
						$lng   			=  $Q[lng];
					}
						if ($Q[filename_1] == "") {
							$filename_1 = $_COOKIE[fb_img];
							$c->insert("update dt_members set filename_1='$filename_1' where email ='$email'");
						}
						setCookie( "mid", $mid, time() + 3600*24*30, "/");
						setCookie( "mobile", $mobile, time() + 3600*24*30, "/" );
						setCookie( "long_code", $long_code, time() + 3600*24*30, "/" );
						setCookie( "img", $filename_1, time() + 3600*24*30, "/");
						setCookie( "login", $login, time() + 3600*24*30, "/");
						setCookie( "gender", $gender, time() + 3600*24*30, "/");
						setCookie( "lat", $lat, time() + 3600*24*30, "/");
						setCookie( "lng", $lng, time() + 3600*24*30, "/");
						
						$_SESSION['mid'] = $mid;
						$_SESSION['login'] = $login;
						$c->close();
						header("Location:home.php");
			}
			} catch (Exception $e) {
			echo 'No Data';
		}
	flush();	
	} catch (Exception $e) {
		echo "Unable to connect";
		exit;
	}