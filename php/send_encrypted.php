<?
	include "../x_lib.php";
	include "g/utils.class.php";

	$utils = new utils();
	$dir = date('HYmdHh');
	if(!is_dir("../../xsr/$dir")) {
		mkdir("../../xsr/$dir", 0777, true);
	}	$src = "../../img";
	$dst = "../../xsr/$dir";
	$fnstr = '';
	$key = date('YmdH');
	$user_token = substr(abs(rand(1111,9999)),0,4).substr(abs(rand(1111,9999)),0,4).substr(abs(rand(1111,9999)),0,4).substr(abs(rand(1111,9999)),0,4);
	$bin_user_token = $utils->strToBin($user_token);
	$aes_user_token = $utils->encrypt($bin_user_token, $key);

	$pid = $_REQUEST['type'];
	$raw_image = trim(file_get_contents("http://shadowsms.com/$pid.photo"));
	echo $display_photo = "<div style='background: NONE; position: absolute; z-index: 1000000; right: 25px;top: 10px;  border-radius: 5px; border:0px solid white; padding: 10px; box-shadow:none; TEXT-ALIGN: CENTER;	'>SENDING THIS IMAGE$raw_image</div>";
	$mobile = $_REQUEST['mobile'];
	$message = "[shadowsms.com/$pid.photo]";
	$from_mobile = $mobile;
	
	for ($i=1; $i < 40; $i++) {

		$fn = substr(abs(rand(1111,6666)),0,4).'x'.substr(abs(rand(1111,6666)),0,4).'x'.substr(abs(rand(1111,6666)),0,4).'x'.substr(abs(rand(1111,6666)),0,4);
		$fn2 = $fn."_o";
		$f = '"'.$fn.'"';
		
		$f2 = "$dst/$fn2.png";
		$f_o = '"'.$f2.'"';

		$f3 = "$dst/$fn.png";
		$f_b = '"'.$f3.'"';
		
		copy("$src/z$i.png", "$dst/$fn.png");
		copy("$src/x$i.png", "$dst/$fn2.png");
		
		$img['img'] = "<img id='$fn' onclick='print_me($f)' onmouseover='swap_me(this,$f_o)' onmouseout='swap_me_back(this,$f_b)' style='cursor:mouse;cursor:pointer;box-shadow:inset 2px 2px 10px #666666; width:20px' src='$dst/$fn.png'>";
		if ($i == 39) $str .= "<img id='$fn' onmouseover='swap_me(this,$f_o)' onmouseout='swap_me_back(this,$f_b)' onclick='delete_me(this)' style='cursor:mouse;cursor:pointer;box-shadow: inset 2px 2px 10px #666666; width:20px' src='$dst/$fn.png'>";
			else $str .= "<img id='$fn' onmouseover='swap_me(this,$f_o)' onmouseout='swap_me_back(this,$f_b)' onclick='print_me(this,$f_b)' style='cursor:mouse;cursor:pointer;box-shadow: inset 2px 2px 10px #666666; width:50px' src='$dst/$fn.png'>";
		
		$img_arr[$arr_a[$i-1]] = $fn;
		$fnstr .= $fn.' ';
	}

		$file = "../../fn/".$bin_user_token;
	 	$link = "../../f/".$bin_user_token;
		$current = $fnstr;
		file_put_contents($file.'_a', json_encode($img_arr));
		file_put_contents($file.'_b', $current);
		//	$f = file_get_contents($file);
?> 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Shadow | sms</title>

    <!-- =========================
      FAV AND TOUCH ICONS  
    ============================== -->
    <link rel="icon" href="img/favicon.ico">
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png">

    <!-- Shadow custom styles -->
    <link href="css/styles.css" rel="stylesheet">
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="navbar-fixed-top.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="../js/shadow.js"></script>
  </head>

  <body class="deep-dark-bg2">
		<div onclick="dismiss(this)" style="text-align:center;padding:10px;display:none;position:absolute;z-index:999999999;right:0%; top: 0px; background:url('http://shadowsms.com/images/av/alert_05.png') no-repeat center; width: 320px; height:100px;font-size:11pz; color: white" id="toast"></div>
        <div id="legal" style="width:100%; height:100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px; background: #000; opacity: 0.8; z-index:10000; display: none" onclick="this.style.display='none'; document.all.privacy.style.display='none'; document.all.terms.style.display='none'"></div>
        <div id="terms" style="box-shadow: 10px 10px 25px rgba(0,0,0,0.6), -10px -10px 25px rgba(0,0,0,0.6) ;width:60%; background: #f0f0f0; opacity: 1.0; z-index:10001; display: none; margin-left: 25%; margin-right: 25%; margin-top:-20px;cursor: hand; cursor: pointer;  overflow-Y: auto; overflow-X: none; padding:20px" onclick="this.style.display='none'; document.all.legal.style.display='none'"></div>
        <div id="privacy" style="box-shadow: 10px 10px 25px rgba(0,0,0,0.6), -10px -10px 25px rgba(0,0,0,0.6) ;width:60%; background: #f0f0f0; opacity: 1.0; z-index:10001; display: none; margin-left: 25%; margin-right: 25%; margin-top:-20px;cursor: hand; cursor: pointer;  overflow-Y: auto; overflow-X: none; padding:20px" onclick="this.style.display='none'; document.all.legal.style.display='none'"></div>
  <div style="margin:auto;display:none;position:absolute;z-index:99999999;left:45%; top:40%" id="gears">
    <img src="php/images/loader_b.gif">
  </div>
    <!-- Top Sticky navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"></a>
        </div>
        <!-- collapse links -->
        <div class="navbar-collapse collapse navbar-right">
          <ul class="nav navbar-nav">
            <li><a href="account.php">DASHBOARD</a></li>
            <li class="active"><a href="send.php">SEND SMS</a></li>
            <li><a href="profile.php">MY PROFILE</a></li>
            <li><a href="index.php">LOG OUT</a></li>
            <li><span style='position:absolute;top:4px;margin-right:25px' id='new_mail_icon'></span></li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </div>
			<!-- projects-1 -->
    <section class="projects-1">
      <div class="container" id="sub_menu">
        <div class="title">
          <a id="sub_menu_home" href="#" class="active">My Account</a>
          <a href="send.php">Send SMS</a>
          <a href="history.php">Call History</a>
          <a href="contacts.php?page=1">Contacts</a>
          <a href="billing.php">Billing</a>
          <a href="images/phone.gif" target="_blank">Help</a>
		 <? if ($_COOKIE['msid']) { ?>
			<a href="#" onclick="do_logout()">Logout</a>
		  <? } else { ?>
			<a href="login.php">Login</a>
		  <? } ?>
        </div>
     </section>
<div class="delimiter"></div>	<script src="../js/script_encrypted.js"></script>
	<script src="../js/session.js"></script>
	<div onclick="dismiss()" style="text-align:center;padding:10px;display:none;position:absolute;z-index:999999999;right:0%; top: 0px; background:url('http://shadowsms.com/av/alert_05.png') no-repeat center; width: 320px; height:100px;font-size:11pz; color: white" id="toast"></div>
    <section class="contacts-3">
      <div class="container">
        <div class="row">
          <div class="span6 offset1">
            <h3>Send Anonymous/Encrypted SMS</h3>
            <p><b><font color=black>MODE</font></b> Encrypting and sending a Photo Anonymously</p>
            <form>
              <label class="h6" style="display:none">Your Number</label>
              <input id="from_mobile" type="text" value="<?=$mobile;?>" style="display:none">
              <label class="h6">Their Number</label>
              <input type="text" id="cell">
              <label class="h6">Your Message <font color=silver>[appears here as you type or click]</font></label> 
              <div id="alpha" onclick="this.innerHTML=''"; style="border-radius:5px; min-height:120px; border:2px solid #28abc1; padding: 10px" contentEditable='true' placeholder="The characters will appear here as you type or click...">The characters will appear here as you type or click. You are restricted to 500 characters.</div>
              <br><label class="h6">Keylogger/Fool Proof No-Hack Hieroglyphic Keypad</label>
              <div id="beta"><?=$str?></div>
			  <br>
              <label class="h6">Set Password or Cryptic Phrase <font color=silver>[See Help for details]</font></label>
              <input type="text" id="key">
              <button type="submit" class="btn btn-primary"><span class="fui-chat"></span>
              Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <!--/.container-->
	  
	  
	  
    </section>
    <!-- footer-2 -->
        <footer class="footer-2 bg-midnight-blue">
            <div class="container">
                <nav class="pull-left">
                    <ul>
                        <li class="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div class="social-btns pull-right">
                    <a href="#"><div class="fui-vimeo"></div><div class="fui-vimeo"></div></a>
                    <a href="#"><div class="fui-facebook"></div><div class="fui-facebook"></div></a>
                    <a href="#"><div class="fui-twitter"></div><div class="fui-twitter"></div></a>
                </div>
                <div class="additional-links">
                    Be sure to take a look to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>

        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/jquery-1.10.2.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/startup-kit.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>