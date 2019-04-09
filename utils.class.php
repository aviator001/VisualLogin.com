<?
class ImageKick {
    private $Imagick = null;

    public function __construct($url = null){
        return $this->Imagick = new Imagick($url);
    } 

    public function __call($n,$p){
//		return $this->Imagick = call_user_func_array($n,$p);
		echo $n;
		echo call_user_func_array($n,$p);
    }
}
class utils {

	/**
	 * php extension
	 * @var	string
	 */
	protected $debug;
	protected $result;
	protected $r;
	public $record;

	/**
	 * Constructs a new instance of UTILS class.
	 */
	public function __construct ($ip='') {
	ini_set("error_reporting", 1);
/*
	$f="/home/gaysugar/settings.ini";
	try {
			$iniSet = fopen($f, "r");
			while(!feof($iniSet)) {
				$xln=fgets($iniSet);
				$str .= "&".$xln;
				$v=split("=",$xln);
				${$v[0]}=$v[1];
				global $_CONSTANTS;
				$_CONSTANTS[$v[0]]=$v[1];
				
			}
				foreach($_CONSTANTS as $key => $val)
					define(trim($key), trim($val));

				parse_str($str,$ini);
				fclose($iniSet);
				
		} catch (Exception $e) {
			throw new Exception("'settings.ini' file not found.");
		}*/
	}

	public function connect() {
			global $db;
			try {
				global $conn;
				$db = new mysqli("199.91.65.85", "gautamadmin", "gautam2014!", "gaysugardaddyforme");
				$this->conn = $db;
				return $this->conn = $db;
			} catch (Exception $e) {
				return "Unable to connect";
				exit;
			}
	}

	public function close() {
		try {
			$this->conn->close();
			return "Closed";
		} catch (Exception $e) {
			return "Unable to Close";
			exit;
		}
	}


	public function icrop($filename) {
		list($current_width, $current_height) = getimagesize($filename);
		$left = 0;
		$top = 0;
		$crop_width = 200;
		$crop_height = 200;
		$canvas = imagecreatetruecolor($crop_width, $crop_height);
		$current_image = imagecreatefromjpeg($filename);
		imagecopy($canvas, $im, 0, 0, $left, $top, $current_width, $current_height);
		imagejpeg($canvas, $filename, 100);
	}
		protected function imagecolorf($im,$co){ 
			
			$height = imagesy($im); 
			$width = imagesx($im); 
			for($x=0; $x<$width; $x++){ 
				for($y=0; $y<$height; $y++){ 
					$rgb = ImageColorAt($im, $x, $y); 
					$r = ($rgb >> 16) & 0xFF; 
					$g = ($rgb >> 8) & 0xFF; 
					$b = $rgb & 0xFF; 
					$c=($r+$g+$b)/3; 
					
		if ($co=="G") if($g<$r || $g<$b+20){$r=$c;$g=$c; $b=$c;}//leaves only green 
		if ($co=="B") if($b<$r || $b<$g){$r=$c;$g=$c; $b=$c;}//only blue 
		if ($co=="R") if($r<$g+30 || $r<$b){$r=$c;$g=$c; $b=$c;}//only red 
		if ($co=="Y") if($r<$g-1 || $r>$g+60 || $b>$g-50){$r=$c;$g=$c; $b=$c;}//only yellow 
					
		imagesetpixel($im, $x, $y,imagecolorallocate($im, $r,$g,$b)); 
				} 
			} 
		} 

	public function adjustImage($filename1,$mode=0) {
	require("/home/gaysugar/public_html/assets/wi/WideImage.php");
		$filename="/home/gaysugar/public_html/photos/" . $filename1;
		$filename_p="/home/gaysugar/public_html/photos/" .$filename1;
		$filename_o="/home/gaysugar/public_html/photos/original_" . $filename1;
		$filename_r="photos/" . $filename1; 
		
		$im=WideImage::load($filename);
		if (!getimagesize("/home/gaysugar/public_html/photos/original_" . $filename1)) $im->saveToFile($filename_o);

		switch ( $mode ) {
			case "CCW":
						echo $im->rotate(-90)->saveToFile($filename_p);
						break;
			case "EDG":
						$im = imagecreatefromjpeg($filename1);
						imagefilter($im, IMG_FILTER_EMBOSS);
						imagejpeg($im, $filename_p);
						break;
			case "CW":
						$im->rotate(90)->saveToFile($filename_p);
						break;
			case "MIR":
						$im = imagecreatefromjpeg($filename1);
						imageflip($src_image, IMG_FLIP_HORIZONTAL);
						imagejpeg($im, $filename_p);
						break;
			case "NEG":
						$im->applyFilter(IMG_FILTER_NEGATE)->saveToFile($filename_p);
				 		break;
			case "GREY":
						$im = imagecreatefromjpeg($filename);
						imagefilter($im, IMG_FILTER_GRAYSCALE);
						imagejpeg($im, $filename_p);
						break;
			case "BRT+":
						$im = imagecreatefromjpeg($filename);
						imagefilter($im, IMG_FILTER_BRIGHTNESS, 30);
						imagejpeg($im, $filename_p);
						break;
			case "BRT-":
						$im = imagecreatefromjpeg($filename);
						imagefilter($im, IMG_FILTER_BRIGHTNESS, -30);
						imagejpeg($im, $filename_p);
						break;
			case "CON+":
						$im = imagecreatefromjpeg($filename);
						imagefilter($im, IMG_FILTER_CONTRAST, -30);
						imagejpeg($im, $filename_p);
						break;
			case "CON-":
						$im = imagecreatefromjpeg($filename);
						imagefilter($im, IMG_FILTER_CONTRAST, 30);
						imagejpeg($im, $filename_p);
						break;
			case "MBLUR":
						$img = new Imagick($filename);
						$img->motionBlurImage(50,30,30);
						$img->writeImage($filename_p);
						return $img;
			case "OIL":
						$img = new Imagick($filename);
						$img->oilPaintImage( 3 ); 
						$img->writeImage($filename_p);
						return $img;
			case "EMB":
						$img = new Imagick($filename);
						$img->shadeImage(180,10,30); 
						$img->writeImage($filename_p);
						return $img;
			case "CHAR":
						$img = new Imagick($filename);
						$img->charcoalImage(5,2); 
						$img->writeImage($filename_p);
						return $img;
			case "EN":
						$img = new Imagick($filename);
						$img->enhanceImage();
						$img->writeImage($filename_p);
						return $img;
			case "EQ":
						$img = new Imagick($filename);
						$img->equalizeImage();
						$img->writeImage($filename_p);
						return $img;
			case "ED":
						$img = new Imagick($filename);
						$img->despeckleImage(); 
						$img->writeImage($filename_p);
						return $img;
			case "E":
						$img = new Imagick($filename);
						$img->encipherImage ( "123456" );
						$img->writeImage($filename_p);
						return $img;
			case "D":
						$img = new Imagick($filename);
						$img->decipherImage ( "123456" );
						$img->writeImage($filename_p);
						return $img;
			case "RESET":
						$img=WideImage::load($filename_o)->saveToFile($filename_p);
						return $img;
			}
		imagedestroy($im);
		//return $filename_r;
	}

	public function fix($filename, $x=400, $b=0, $default='http://gaysugardaddyfinder.com/assets/avatars/a7.png') {
		require("/home/gaysugar/public_html/assets/wi/WideImage.php");
		$dir = "/home/gaysugar/public_html/photos/";
		$dir_www = "photos/";
		$thumb="thumb_";

			$image=$dir.$filename;
			if ($size = getimagesize($image)) {
				$w=$size[0];
				$h=$size[1];
				if ($w>$h) {
					$new_width=$h;
					$new_height=$h;
					$c=$h;
				} else {
					$new_width=$w;
					$new_height=$w;
					$c=$w;
				}
			}
			$targetFile = $dir.$thumb.$filename;
			WideImage::load($image)->resize($x)->saveToFile($dir.$filename);
			WideImage::load($image)->crop(0,0,500,500)->saveToFile($dir.$filename);
			$x=$x . 'px';
			return "<img src='$targetFile'>";
	}

	public function sendSMSPassword($to, $message="Lost Password", $from="GSD Admin") {

		mysql_connect("199.91.65.87", "gautamadmin", "gautam2014!");
		mysql_select_db("gaysugardaddyforme");
		echo $query="select login, pswd, email, mobile from dt_members where (email='$to' or login='$to' or mobile='$to')";
		
		$login=mysql_fetch_array(mysql_query($query))[login];
		$pswd=mysql_fetch_array(mysql_query($query))[pswd];
		$email=mysql_fetch_array(mysql_query($query))[email];
		
		$message="Login:gaysugardaddyfinder.com/page.php?page=login\r\n\r\nLogin:$login\r\nPassword:$pswd";
		echo file_get_contents("http://shadowsms.com/php/x_send_api.php?to=$to&from=$from&message=$message"); 
	
	}

	public function sms($to, $from, $message) {
		echo file_get_contents("http://shadowsms.com/php/x_send_api.php?to=$to&from=$from&message=$message"); 
	}
	
	public function sql($sql) {
		return $this->_sql($sql);
	}

	public function insert($sql) {
		return $this->_insert($sql);
	}

	public function query($sql) {
		return $this->_sql_arr($sql);
	}

	public function show($obj) {
		echo "<pre>";
			print_r($obj);
		echo "</pre>";
	}
	
	public function user_info($id) {
		$arr=$this->_sql_arr('select * from dt_members where id='.$id);
		return $arr;
	}

	public function user_login($id) {
		$arr=$this->_sql_arr('select login, filename_1 from dt_members where id='.$id);
		return $arr[0];
	}

	public function login_info($mbl) {
		$arr=$this->query("select email, login, pswd from dt_members where mobile='".$mbl."'");
		$str = "PASS: " . $arr[0][pswd] . "\r\nLOGIN: " . $arr[0][login] . "\r\nEMAIL: " . $arr[0][email];
		return $str;
	}

	public function user_photo($id) {
		$arr=$this->_sql_arr('select filename_1 from dt_photos where member_id=$id');
		return array( "<img src='photos/" . $arr[filename_1] . "", $arr[filename_1] );
	}

	public function user_thumb($id, $size=30) {
		$arr=$this->_sql_arr('select filename_1 from dt_photos where member_id='.$id.' limit 1');
		$f=$arr[0][filename_1];
		$f=explode('.',$f);
		$f1=$f[0];
		$f2=$f[1];
		$x=$size . "px";
		return array("<img style='width:$x; height:$x' src='photos/" . $f1 . "." . $f2 . "'>",$f1.".".$f2);
	}
	
	public function user_thumb_search($f='axx.png', $size=30) {
		if (empty($f)) $f='axx.png';
		$f=explode('.',$f);
		$f1=$f[0];
		$f2=$f[1];
		$x=$size . "px";
		$x_src='"photos/a29.png"';
		return array("<img onError='this.src=$x_src' class='' style='border:2px solid skyblue;width:$x; max-height:$x; height:$x; border-radius: 150px; --moz-corner-radius: 150px; margin:0px;' src='photos/" . $f1 . "." . $f2 . "'>",$f1.".".$f2);
	}
	
	protected function _sql($sql) {
		global $result;
		try {	
				$db=$this->conn;
				if($this->result = $db->query($sql)){
					return $this->result;
				} else {
					return null;
				}
			} catch (Exception $e) {
			return null;
		}
	}

	protected function _insert($sql) {
		global $result;
		try {	
				$db=$this->conn;
				if($db->query($sql)){
					return $db->insert_id;
				} else {
					return null;
				}
			} catch (Exception $e) {
			return null;
		}
	}

	protected function _sql_arr($sql) {
		global $dbs;
		global $row;
		global $rowset;
		try {
				$db=$this->conn;
			try {
					if($r = $db->query($sql)){
						while ($row =  $r->fetch_assoc()) {
							$arr[] = $row;
						}
						$this->rowset = $arr;
						$r->free();
						return $this->rowset;
					} else {
							return null;
					}
				} catch (Exception $e) {
					return null;
				}
			return $res;
		} catch (Exception $e) {
			return "Unable to connect";
			exit;
		}
	}

	public function add_date($date, $days, $unit="Days"){
		$date = strtotime("+".$days." ".$unit, strtotime($date));
		return  date("Y-m-d H:i:s", $date);
	}

	public function query2HTML($query, $c) {
		echo '<style>';
		echo'.table_custom{font:Open Sans Condensed;color:#333; background:#f0f0f0; text-shadow:1px 1px 1px #fff} .table_header{color:#fff;background:#000;text-shadow:none} .table_row{color:#333; text-shadow:2px 2px 0px #fff} .table_row_alt{color:#000;background:lightblue}';
		echo '</style>';
		$x=0; $first_row = true;
		$header = "<table class='table_custom' cellpadding=10 cellspacing=0><tr id='th'>";	
		$f = $this->strAB('select','from', $query);
		$f = explode(',', $f);
		$f = $this->_sql_arr($query);
		$table  = $header;
		$rows = count($f);
			for($c=0; $c <= $rows; $c++){
				$class = ($x==0) ? 'table_row' : 'table_row_alt';
				$x = ($x == 1) ? 0 : 1;
				 if ($c == 0) $table .= "<tr class='$class' id='th'>";
					else $table .= "<tr class='$class' id='r$x'>";
					foreach($f[$c] as $_key => $_value)
						{
							if ($c == 0) $table .= "<td class='table_header'>" . strtoupper($_key) . "</td>";
								else $table .= "<td class='$class'>" . ($_value) . "</td>";
						}
			}
		$table .= "</table>";
		echo $table;
	}
	
	public function fixMobile($mob) {
		$num = trim($mob);
		$arr_a = array("-","."," ","(",")");
		$arr_b = array("","","","","");
		$num = str_replace($arr_a, $arr_b, $num);

		if ((strlen($num) < 10) || (strlen($num) > 11)) return false;
		$num = (strlen($num) == 11) ? $num : ("1$num");	
		
		if ((strlen($num) == 11) && (substr($num, 0, 1) == "1")) {
			return $num;
		} else {
			return false;
		}
	}

	public function cpu_load() {
		$output = `vmstat`;
		$s = strpos(trim($output),'wa st');
			return str_replace(" ","",trim(substr($output, $s+7, 5)));
	}

	public function get_lat_lng($ip) {
		require("geoipcity.inc");
		require("geoipregionvars.php");
			$gi	= geoip_open("../GeoLiteCity.dat", GEOIP_STANDARD);	
			$latLng=geoip_record_by_addr($gi, $ip);
			$lat=$latLng->latitude;
			$lng=$latLng->longitude;
				return "$lat|$lng";
	}
	
	public function get_lat_lng_zip($zip) {
		$arr=$this->_sql_arr('select latn, longw from dt_zips where zipcode='.$zip.' limit 1');
			return array($arr[0][latn], $arr[0][longw]);
	}
	
	public function getLatLngFromCityState($city_state) {
		$r = json_decode(file_get_contents("http://maps.googleapis.com/maps/api/geocode/json?address=$city_state"));
			return array($r->results[0]->geometry->location->lat,$r->results[0]->geometry->location->lng);
	}
	public function getZip($city_state) {
		$r = json_decode(file_get_contents("http://maps.googleapis.com/maps/api/geocode/json?address=$city_state"));
			return $r->results[0]->postal_code;
	}
	public function street($lat,$lng) {
		$r = json_decode(file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&sensor=true"));
			return $r->results[0]->formatted_address;
	}
	
	public function cityState($lat,$lng) {
		$r = json_decode(file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&sensor=true"));
			return $r->results[2]->formatted_address;
	}
	
	public function zip($lat,$lng) {
		$r = json_decode(file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&sensor=true"));
			return $r->results[1]->address_components[0]->long_name;
	}
	
	public function city($lat,$lng) {
		$r = json_decode(file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&sensor=true"));
			return $r->results[1]->address_components[1]->long_name;
	}

	protected function strAB($a, $b, $str)	{
		return substr($str, (strPos($str, $a) + strlen($a)), (strPos($str, $b) - (strPos($str, $a) + strlen($a))));
	}
	
	public function strGetAB($a, $b, $str)	{
		return substr($str, (strPos($str, $a) + strlen($a)), (strPos($str, $b) - (strPos($str, $a) + strlen($a))));
	}

	//Get all Characters between 2 strings or tags in a URL
	public function urlGetAB($a, $b, $url) {
		$str = file_get_contents($url);
		return substr($str, (strPos($str, $a) + strlen($a)), (strPos($str, $b) - (strPos($str, $a) + strlen($a))));
	}

	public function clean($objHTMLText){
		$event_desc = preg_replace("/(\\t|\\r|\\n)/","",trim($objHTMLText));  //recursively remove new lines \\n, tabs and \\r
	}

	public function strDate($strDate, $format = "D jS \of M \[h A\]") {
		return date_format(date_create($strDate), $format);
	}
	
	public function date_add($hours) {
		$ts1 = strtotime(date("Y")."-".date("m")."-".date("d"));
		return $ts1+$hours*60;
	}
	public function date_to_words($strDate) {
		$ts1 = strtotime(date("Y")."-".date("m")."-".date("d"));
		$ts2 = strtotime($strDate);
		$dateDiff    = $ts1 - $ts2;
		$units="Day";
		$fd    = floor($dateDiff/(60*60*24));
		$plurl = ($fd==1)?"":"s";
		
		if ($fd == 0) $rt = "Today!";
			
		if ($fd > 0) {
			$rt = "$fd $units{$plurl} Ago";
		}
			
		if ($fd < 0) $rt = "In ".$fd*(-1)." ".$units{$plurl};

		if ($fd==7){
			$datap = "1";
			$prefx = "";
			$units = "Week";
			$plurl = "";
			$tense = "Ago";
			$rt="$prefx $datap  $units{$plural} $tense";

		} elseif (($fd>7)&&($fd<31)) {
			$datap = round($fd/7,0);
			$prefx = "Approx";
			$units = "Week";
			$plurl = "s";
			$tense = "Ago";
			$rt="$prefx $datap $units{$plurl} $tense";

		} elseif (($fd>31)&&($fd<=365)) {
			$datap = round($fd/30.5,0);
			$prefx = "Approx";
			$units = "Month";
			$plurl = ($datap==1)?"":"s";
			$tense = "Ago";
			if ($datap=12) {
				$units='year';
				$plurl='s';
				$extra='';
				$datap++;
			}
			$rt="$prefx $datap  $units{$plurl} $tense";

		} elseif ($fd>365) {
			$bal_days = $fd%365;
			$datap = round($fd/365,0);
			$prefx = "Approx";
			$units = "Year";
			$plurl = ($datap==1)?"":"s";
			$tense = "Ago";

			if ($bal_days > 15) {
				$extra = "and";
				$e_month="1";
				$e_unit="Month";
				$e_plurl=($e_month>1)?"s":"";
			}

			if ($bal_days > 31) {
				$extra = "and";
				$e_month=round($bal_days/30.5,0);
				$e_unit="Month";
				$e_plurl=($e_month>1)?"s":"";
				if ($e_month>11) {
					$e_month='';
					$e_unit='';
					$e_plurl='';
					$extra='';
					$datap++;
				}
			}
			$rt="$prefx $datap $units{$plurl} $extra $e_month $e_unit{$e_plurl} $tense";
		}
			return $rt;
	}
	
	public function paginate_me($x_total_rows, $no_of_pages, $x_rows_per_page, $nav_links_per_row = 35) {

		$page = (!isset($_REQUEST['start'])) ? 1 : $_REQUEST['start'];
		echo "<font color=white>";
		$q_str = urldecode($_SERVER['QUERY_STRING']);
		parse_str($q_str);

		$x_mid_start = 1;
		$x_mid_end = $no_of_pages;

		$jump_around = floor($no_of_pages / 10);
		$jump_around = floor($jump_around / 10) * 10;
		$jump_around = ($no_of_pages <= $nav_links_per_row) ? 5 :  $jump_around;
		$jump_fwd = (int)($page - $jump_around);
		$jump_bck = (int)($page - $jump_around);
		
		//echo $jump_around;
		$x_site = urldecode($_SERVER['HTTP_REFERER']);
		parse_str($x_site, $output);
		$qs = explode('?',urldecode($x_site));
		$p_me .= "<div style='background:none;margin-left:auto;margin-right:auto;left:0;right:0;position:absolute;width:100%;text-align:center'>	
					<ul class='pagination' style='background:none;border:none'>
						<table style='background:none' cellpadding = '1' border = '0'><tr>";

		$page = $_REQUEST['start'];
		if ($page=='') $page=0;
		// Go Back ONE page
		if ( $page > 0 ){
		
			$bg_color = "red";
			$title = "Previous Page";
			$prev = $page - 1;

			if (!$q_str) 
			{
				$q_str = "start=$page";
			} else {
				if (!$_REQUEST[start]) $q_str = $q_str."&start=$page";
			}

			$this_page = str_replace("start=$page","start=$prev;","?".$q_str);
			$p_me .=  "<td><div class='pages' id=".$ObjTopBar." onMouseOver='javascript: onMouseOverOut(".$ObjTopBar.")' onMouseOut='javascript: onMouseOverOut(".$ObjTopBar.")'><a title='$title' href='".$this_page."'><i class='fa fa-minus-circle' style='color:#666;height:20px'></i></a></div></td>";
		}

		if ($no_of_pages > $nav_links_per_row)
		{
			// Go Back a bunch of pages
			if ( $page > $jump_around ){
				$bg_color = "White";
				$ObjTopBar = '"jTopBar_start"';

				$title = "Dinner Dates: Jump Back $jump_around Pages";

				if (!$q_str) 
				{
					$q_str = "start=$page";
				} else {
				if (!$_REQUEST[start]) $q_str = $q_str."&start=$page";
				}

				$this_page = "page.php?page=mail&start=$i";
				$p_me .=  "<td><a title='$title' href='".$this_page."'><div class='pages' id=".$ObjTopBar." onMouseOver='javascript: onMouseOverOut(".$ObjTopBar.")' onMouseOut='javascript: onMouseOverOut(".$ObjTopBar.")'><i class='fa fa-backward' style='color:#999'></i></div></a></td>";
			}

			//1 to 8
			for ($i = 0; $i <= 7; $i++) 
			{
				if ($i == $_REQUEST[start]*1) $bg_color = "orange";
					else $bg_color = "";
				
				$ObjTopBar = '"jTopBar'.$i.'"';

				if (!$q_str) 
				{
					$q_str = "start=$page";
				} else {
					if (!$_REQUEST[page]) $q_str = $q_str."&start=$page";
				}
				
				$this_page = "page.php?page=mail&start=$i";
				$title = "Dinner Dates: Jump to Page $i";

				$p_me .=  "<td><a title='$title S' href='".$this_page."'><div style='background:$bg_color' class='pages' id=".$ObjTopBar." onMouseOver='javascript: onMouseOverOut(".$ObjTopBar.")' onMouseOut='javascript: onMouseOverOut(".$ObjTopBar.")'>" . ($i+1) . "</div></a></td>";
			}

			$p_me .=  "<td> <font color=#333>...</td>";
			$x_mid_start = floor($no_of_pages / 2) - 3;
			$x_mid_end = floor($no_of_pages / 2) + 4;

			//if selected page is between half - 5  to half + 5 SHOW start: selected page, end: selected page + 9
			if (($page > 8) && ($page < $no_of_pages - 8)) {
				$x_mid_start = $page - 5;
				$x_mid_end = $page + 5;
			}
		}
		
		//Empty Blocks...First Few Spaces...if Page Count < $nav_links_per_row
		if ($no_of_pages < $nav_links_per_row) {	
			for ($k = 0; $k <= floor(($nav_links_per_row - $no_of_pages) / 2); $k++)	
				{
					$ObjTopBarLinks = '"divBEnd_'.$k.'"';
					$ObjTopBarEmpty = '"divBStart'.$k.'"';
					$p_me .=  "<td style='display:none'><div id=".$ObjTopBarEmpty." class='pages' onMouseOver='javascript: onMouseOverOutE(".$ObjTopBarLinks.")' onMouseOut='javascript: onMouseOverOutE(".$ObjTopBarLinks.")'></div></td>";
				}
		}
		
		// Print Page Numbers in the Center ... 
		for ($i = $x_mid_start-1; $i <= $x_mid_end; $i++) 
			{
				if ($i == $_REQUEST[start]) $bg_color = "orange";
					else $bg_color = "";
				
				$ObjTopBar = '"jTopBar'.$i.'"';
				$q_str = $_SERVER['QUERY_STRING'];
				
				if (!$q_str) 
				{
					$q_str = "start=$page";
				} else {
					if (!$_REQUEST[page]) $q_str = $q_str."&start=$page";
				}
				
				$this_page = "page.php?page=mail&start=$i";
				$title = "Find Dinner Dates: Jump to Page $i";

				$p_me .=  "<td class='' style='background:$bgcolor'><a title='$title' href='".$this_page."'> <div class='pages' style='background:$bg_color' id=".$ObjTopBar." onMouseOver='javascript: onMouseOverOut(".$ObjTopBar.")' onMouseOut='javascript: onMouseOverOut(".$ObjTopBar.")'>". ($i+1) ."</div> </a></td>";

				if (fmod($i, $nav_links_per_row) == 0)
				{
					$r++;
					//$p_me .=  "</tr><tr>";
				}

			}
		
		//Empty Blocks...Last Few Spaces...If Page Count < $nav_links_per_row
		if ($no_of_pages < $nav_links_per_row) {	
			for ($k = 0; $k <= ceil(($nav_links_per_row - $x_mid_end)/2); $k++)	
				{
					$ObjTopBarLinks = '"divBStart'.$k.'"';
					$ObjTopBarEmpty = '"divBEnd_'.$k.'"';
					$p_me .=  "<td><div id=".$ObjTopBarEmpty." class='' onMouseOver='javascript: onMouseOverOutE(".$ObjTopBarLinks.")' onMouseOut='javascript: onMouseOverOutE(".$ObjTopBarLinks.")'> </div></td>";
				}
		}
		else
		{
			$p_me .=  "<td> <font color=#333>... </td>";
			//no_of_pages-10 to end
			for ($i = $no_of_pages - 8; $i <= $no_of_pages; $i++) 
			{

				if ($i == $_REQUEST[start]) $bg_color = "orange";
					else $bg_color = "";
				
				$ObjTopBar = '"jTopBar'.$i.'"';
				$q_str = $_SERVER['QUERY_STRING'];

				if (!$q_str) 
				{
					$q_str = "start=$page";
				} else {
					if (!$_REQUEST[page]) $q_str = $q_str."&start=$page";
				}

				$this_page = "page.php?page=mail&start=$i";
				$title = "Dinner Dates: Jump to Page $i";
				$p_me .=  "<td><a title='$title' href='".$this_page."'> <div class='pages' style='background:$bg_color' id=".$ObjTopBar." onMouseOver='javascript: onMouseOverOut(".$ObjTopBar.")' onMouseOut='javascript: onMouseOverOut(".$ObjTopBar.")'>".$i."</div> </a></td>";
			}

			// Go Forward 5
			if ( $page < $no_of_pages - $jump_around ){
				$bg_color = "White";
				$ObjTopBar = '"jTopBar_end"';
				$q_str = $_SERVER['QUERY_STRING'];

				if (!$q_str) 
				{
					$q_str = "start=$page";
				} else {
					if (!$_REQUEST[page]) $q_str = $q_str."&start=$page";
				}
				
				$jump_fwd = (int)$page + $jump_around;
				$title = "Dinner Dates: Jump Forward $jump_around Pages";
				$this_page = str_replace("start=$page","start=$jump_fwd","?".$q_str);
				$p_me .=  "<td><a title='$title' href='".$this_page."'> <div class='pages' id=".$ObjTopBar." onMouseOver='javascript: onMouseOverOut(".$ObjTopBar.")' onMouseOut='javascript: onMouseOverOut(".$ObjTopBar.")'><i class='fa fa-forward' style='color:#999'></i></div></a></td>";			}
		}
		// Go Forward ONE page
		if ( $page < $no_of_pages ){
			$bg_color = "#99CC00";
			$title = "Next Page";
			$next = $page + 1;

				if (!$q_str) 
				{
					$q_str = "start=$page";
				} else {
					if (!$_REQUEST[page]) $q_str = $q_str."&start=$page";
				}

			$this_page = str_replace("start=$page","start=$next;","?".$q_str);
			$p_me .=  "<td><div class='pages label-danger' id=".$ObjTopBar." onMouseOver='javascript: onMouseOverOut(".$ObjTopBar.")' onMouseOut='javascript: onMouseOverOut(".$ObjTopBar.")'><a title='$title' href='".$this_page."'><i class='fa fa-plus-circle' style='height:20px;color:#666'></i></a></div></td>";
		}
		
				$p_me .="		</tr>
							</table>
						</ul>
					</div>";
			return  $p_me;
	}

	public function is_mobile() {
		if (preg_match('/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
			$tablet_browser++;
		}
		 
		if (preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile)/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
			$mobile_browser++;
		}
		 
		if ((strpos(strtolower($_SERVER['HTTP_ACCEPT']),'application/vnd.wap.xhtml+xml') > 0) or ((isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE'])))) {
			$mobile_browser++;
		}
		 
		$mobile_ua = strtolower(substr($_SERVER['HTTP_USER_AGENT'], 0, 4));
		$mobile_agents = array(
			'w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac',
			'blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno',
			'ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-',
			'maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-',
			'newt','noki','palm','pana','pant','phil','play','port','prox',
			'qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar',
			'sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-',
			'tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp',
			'wapr','webc','winw','winw','xda ','xda-');
		 
		if (in_array($mobile_ua,$mobile_agents)) {
			$mobile_browser++;
		}
		 
		if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'opera mini') > 0) {
			$mobile_browser++;
			//Check for tablets on opera mini alternative headers
			$stock_ua = strtolower(isset($_SERVER['HTTP_X_OPERAMINI_PHONE_UA'])?$_SERVER['HTTP_X_OPERAMINI_PHONE_UA']:(isset($_SERVER['HTTP_DEVICE_STOCK_UA'])?$_SERVER['HTTP_DEVICE_STOCK_UA']:''));
			if (preg_match('/(tablet|ipad|playbook)|(android(?!.*mobile))/i', $stock_ua)) {
			  $tablet_browser++;
			}
		}
	
		if ($tablet_browser > 0) {
		   // do something for tablet devices
		  return false;
		}
		else if ($mobile_browser > 0) {
			setCookie("is_mobile",$mobile_browser, time() + 3600 * 24, "/");
		   return true;
		}
		else {
		   // do something for everything else
		   return false;
		}   		
	}	
	
    public function background($Command, $Priority = 0){
       if($Priority)
           $PID = shell_exec("nohup nice -n $Priority $Command > /dev/null & echo $!");
       else
           $PID = shell_exec("nohup $Command > /dev/null & echo $!");
       return($PID);
   }
   /**
    * Check if the Application running !
    *
    * @param     unknown_type $PID
    * @return     boolean
    */
   public function is_running($PID){
       exec("ps $PID", $ProcessState);
       return(count($ProcessState) >= 2);
   }
   /**
    * Kill Application PID
    *
    * @param  unknown_type $PID
    * @return boolean
    */
   public function kill($PID){
       if(exec::is_running($PID)){
           exec("kill -KILL $PID");
           return true;
       }else return false;
   }
   
   public function getStateCode($state) {
		$state = str_replace("Outside United States","Non US",$state);
		$arr['California']="CA";
		$arr['Georgia']="GA";
		$arr['New Jersey']="NJ";
		$arr['New York']="NY";
		$arr['Arizona']="AZ";
		$arr['Texas']="TX";
		$arr['Oregon']="OR";
		$arr['Florida']="FL";
		$arr['Wyoming']="WY";
		$arr['Nevada']="NV";
		$arr['Pennsylvania']="PA";
		$arr['Illinois']="IA";
		$arr['Indiana']="IN";
		$arr['Nebraska']="NB";
		$arr['Wisconsin']="WI";
		$arr['Michigan']="MI";
		$arr['New Hampshire']="NH";
		$arr['North Carolina']="NC";
		$arr['South Carolina']="SC";
		$arr['Connecticut']="CN";
		$arr['Washington']="WA";
		$arr['North Dakota']="ND";
		$arr['South Dakota']="SD";
		$arr['Colorado']="CO";
		$arr['Oklahoma']="OK";
		$arr['Tennessee']="TN";
		$arr['Mississippi']="MS";
		$arr['Arkansas']="AK";
		$arr['New Mexico']="NM";
		$arr['Maryland']="MD";
		$arr['Delaware']="DA";
		$arr['Ohio']="OH";
		return(empty($arr[$state]))?$state:$arr[$state];
	}
	
	function get_mini_profile($mid) {
		$q = $this->query("select * from dt_members where id=$mid");
		if (count($q)>0) {
			$str .= '<div class="" style="margin:auto;position:absolute;left:0;right:0;display:block;width:100%">';
			$str .= '	<div class="row">';
			for ($i = 0; $i<count($q); $i++) {
				$userid=$q[$i][id];
				$n=$this->query("select * from dt_members where id>$mid and (general_info !='') and (general_info !='0') order by id asc limit 1");
				
				$x=$this->query("select filename_1 from dt_photos where member_id=$mid");
				$ft = str_replace("photos/","",trim($x[0][filename_1]));
				
				if (($ft == '')||(empty($ft))) {
					$ff='assets/avatars/a29.png';
					$has_photo='0';
				} else {
					$ff = 'photos/'.$ft;
					$has_photo='1';
				}
				$arr=array('mask1','mask2','mask3','mask4','mask5','mask6','mask7','mask8','mask9','mask10','mask11','mask11');
				$mask_a = $arr[rand(0,11)];
				$mask_b = $arr[rand(0,11)];
								
				$ref  = '"page.php?page=view_profile&member_id='.$n[0][id].'"';
				$str .= "	<div  id='header_to_".$mid."' >
								<img src='assets/images/$mask_a.png' style='width:200px;height:150px;position:absolute;opacity:0.7;left:0;right:0;margin:auto;box-shadow: 0px 0px 40px #333 inset;top:55px'><img src='img/gold.png' style='position:absolute;margin-left:100px;opacity:0;left:0;right:0;margin:auto;margin-top:-10px;z-index:99999999999999999999999999'><br><br><h5><span style='font-weight:300;color:#000;text-shadow:1px 1px 1px #fff'>".strtoupper($q[$i][login]).", ".$q[$i][age]."</span></h3><div style='font-size:16px;font-family:Open Sans Condensed;font-weight:300;color:#000;text-shadow:1px 1px 0px #fff'>".$q[$i][gender] ." - ".$q[$i][cc_city].", ".$q[$i][cc_state] ."</div>
							</div>";
				$str .= 			'<div class="container" id="compose_to_'.$mid.'" style="position:absolute;margin:auto;left:0;right:0;text-align:center;margin-top:0px;display:none">';
				$str .=					'<div class="row">';
				$str .=						'<div class="col-xs-12" style="background:">';
				$str .=							"<span><img onerror='this.src=err_img' id='".$q[$i][id]."' draggable='true' ondragstart='drag(event)' class='' src='".$ff."' style='position:absolute;top:0;cursor:all-scroll;width:145px; max-width:145px;height:145px; max-height:145px'></span>";
				$str .=							'<span><textarea id="message_text_'.$q[$i][id].'" style="height:145px;max-height:150px;text-align:left;width:400px;border:none;margin-left:150px"></textarea></span>';
				$str .=						'</div>';
				$str .=					'</div>';
				$str .=					'<div class="row">';
				$str .=						'<div class="col-xs-12" style="background:">';
				$str .=							'<span><form action="upload_mail.php" class="dropzone dz-clickable" id="MyDropZoneForm_'.$mid.'" name="MyDropZoneForm_'.$mid.'" style="height:auto;display:none;width:100%;overflow-x:hidden"><div class="dz-default dz-message"><span>Drop files here to upload</span></div></form></span>';
				$str .=							'<span></span>';
				$str .=						'</div>';
				$str .=					'</div>';
				$str .=					'<div class="row">';
				$str .=						'<div id="btn_to_'.$mid.'" class="col-xs-12" style="background:">';
				$str .=							'<span><button onclick="send_to_from('.$q[$i][id].','.$my_mid.')" style="background:#CCC" class="btn btn-xs" style="width:100px"> Send </button></span>';
				$str .=							'<span><button class="btn btn-danger btn-xs" onclick="cancel_reply('.$q[$i][id].')">Cancel</button></span>';
				$str .=							'<span><button class="btn btn-xs btn-info" style="cursor: pointer; cursor: hand;" onclick="toggle_photo('.$q[$i][id].')">Attach Photo</button></span>';
				$str .=						'</div>';
				$str .=					'</div>';
				$str .=				'</div>
						';
				$str .= "	<div id='profile'>";
				$str .= "		<div style='height:600px;box-shadow: 0px 0px 50px #333;width:300px;padding:0;margin:auto;left:0;right:0;position:absolute'><div class='' onclick='location.href=$ref'><img onerror='this.src=err_img' id='img_profile' draggable='true' ondragstart='drag(event)' class='www_box2' src='".$ff."' style='cursor:all-scroll;width:300px;border:0px solid #fff;border-bottom:25px solid #fff; width:300px;height:300px;max-width:300px;margin-top:0px;margin-bottom:25px'></div>";
				$str .= '		<div style="position:absolute;margin:auto;left:0;right:0;text-align:center;margin-top:0px"><div style="width:300px;background:#f0f0f0;position:absolute;margin:auto;left:0;right:0;text-align:center;margin-top:-50px">';
				for ($v=0;$v<count($x);$v++) {
					$fid=$x[$v][id];
					$fip="'".$x[$v][filename_1]."'";
					$str .= '		<span><img src="assets/images/dot1.png" onmouseover="next_photo('.$q[$i][id].','.$fip.');this.src=dot2" onmouseout="this.src=dot1" class="profile_view_dots"></span>';
				}
				$str .= "		</div><div style='margin-top:100px;background:;position:absolute;left:0;right:0;margin:auto;width:300px;max-width:300px;padding:25px;word-wrap:break-word;font-size:20px;font-family:Open Sans Condensed;font-weight:300;color:#000;text-shadow:0px 0px 1px #fff;margin-top:15px;z-index:99999999999999999999999999'>".$q[$i][general_info]."</div></div>"; 
				$str .= '		
								<div style="padding:10px;position:absolute;margin:auto;left:0;right:0;text-align:center;margin-top:100px;background:;width:300px;top:203px;opacity:1;z-index:9999999999999999999">
									<span><a href="#" onclick="show_compose('.$q[$i][id].')"><img style="width:40px;background:#fff" onmouseover="this.src=get(this)" onmouseout="this.src=check(this)" class="profile_view" src="http://gaysugardaddyfinder.com/assets/images/i31g.png"></a></span>';
			if ($has_photo=='1') {
				$str .='					<span><a href="page.php?page=view_album&amp;member_id='.$q[$i][id].'"><img style="width:40px;background:#fff" onmouseover="this.src=get(this)" onmouseout="this.src=check(this)" class="profile_view" src="http://gaysugardaddyfinder.com/assets/images/i03g.png"></a></span>';
			}
				$str .='					<span><a href="page.php?page=3dmap&track='.$q[$i][id].'"><img style="width:40px;background:#fff" class="profile_view" onmouseover="this.src=get(this)" onmouseout="this.src=check(this)" src="http://gaysugardaddyfinder.com/assets/images/i15g.png"></a></span>';
			if($this->query("select online from dt_usersonline where userid=$userid")[0][online] == '1') {
				$str .=	'			<span><a onclick="initMsg('.$q[$i][id].')" href="#"><img style="width:40px;background:#fff" class="profile_view" onmouseover="this.src=get(this)" onmouseout="this.src=check(this)" src="http://gaysugardaddyfinder.com/assets/images/i27g.png"></a></span>';
			}
				$str .=	'			<span><a href="#" onclick="initMsg('.$q[$i][id].')"><img style="width:40px;background:#fff" class="profile_view" onmouseover="this.src=get(this)" onmouseout="this.src=check(this)" src="http://gaysugardaddyfinder.com/assets/images/i12g.png"></a></span>
									<span><a href="page.php?page=view_album&amp;member_id='.$q[$i][id].'"><img style="width:40px;background:#fff" class="profile_view" onmouseover="this.src=get(this)" onmouseout="this.src=check(this)" src="http://gaysugardaddyfinder.com/assets/images/i32g.png"></a></span>
								</div></div>';
								$str .= "<img src='assets/images/$mask_b.png' style='width:300px;height:300px;position:absolute;opacity:0.7;left:0;right:0;margin:auto;box-shadow: 0px 0px 40px #333 inset;margin-top:360px'>";
			}
			$str .= '	</div>';
			return $str;
		}
	}
	
	function get_user_data($mid) {
		$sql="select login, ip, age,  lat, lng, cc_zip as zip, id as member_id, filename_1, cc_city as city, cc_state as state, general_info from dt_members where id='$mid'";
		$q = $this->query($sql);
			foreach($q as $r){
				$login = $r['login'];
				$id = $r['member_id'];
				$pic = $r['filename_1'];
				$lat = $r['lat'];
				$lng = $r['lng'];
				$age = $r['age'];
				$gen = $r['gender'];
				$city = $r['city'];
				$state = str_replace("Outside United States","Non US",$r['state']);
				$ip = $r['ip'];
				$loc = "$city, $state";
				$p2['lat']=$lat;
				$p2['long']=$lng;
				$dist=calc_distance($p1,$p2);
				try {
					$s=getimagesize("../photos/".$pic);
					if ($s[0]!=$s[1]) {
						$filename="/home/gaysugar/public_html/photos/".$pic;
					}
					$x_img=$this->user_thumb_search($id, 65)[0];
				} Catch (Exception $e) {}
			}
			$x_d="$dist Miles";
			if ($dist*1 > 7000) $x_d = "Far, far away";
		
			$arr=array('mask1','mask2','mask3','mask4','mask5','mask6','mask7','mask8','mask9','mask10','mask11','mask12');
			$mask = $arr[rand(0,12)];
			
			$x_d="$dist Mls";
			$x_login = '"'.$login.'"';
			$str[$ctr] = " 
				<div class = 'www_box2 row' style='width:420px;border-bottom:1px solid lightblue;font-family:Open Sans Condensed;font-size:18px;padding:10px;background:url(assets/images/$mask.png) center center;margin-top:-5px;margin-bottom:5px;padding-bottom:2px;padding-top:2px'>
					<div class='col-sm-2'>
						<a href='page.php?page=view_profile&member_id=$id'>$x_img</a>
					</div>
					<div class='col-sm-4' style='position:absolute;left:100px;margin-left:0;margin-right:0;margin-left:0;margin-right:0;padding:0;top:10px'> 
						<div>
							".substr($login,0,14).", $agex 
						</div>
						<div>
							<span>
								
							</span>
							<span>
								$x_d
							</span>
							<span>
								<a href='page.php?page=3dmap&track=$id'>
									<i class='fa fa-location-arrow' style='cursor:hand; cursor:pointer;color:#0093D9'></i>
								</a>
							</span>
						</div>
					</div>
					<div style='position:absolute;top:10px;right:0;margin-right:10px;padding:0;padding-right:15px;color:gold;'>
						<span>
							$loc
						</span>
					</div>
					<div style='position:absolute;top:50%;right:0;margin-right:10px;padding:0;padding-right:15px'>

						<span>
							<a onclick='initMsg($id,$x_login)' href='#'><img src='assets/images/i27g.png' style='height:30px; opacity:0.8'></a>
						</span>
						<span>
							<img src='assets/images/i31g.png' style='height:30px; opacity:0.8'>
						</span>
						<span>
							<img src='assets/images/i32g.png' style='height:30px; opacity:0.8'>
						</span>
						<span>
							<img src='assets/images/i04g.png' style='height:30px; opacity:0.8'>
						</span>
						<span>
							<img src='assets/images/i10g.png' style='height:30px; opacity:0.8'>
						</span>
					</div>						
				</div>";	
			return $str[$ctr];
	}
}

