<?
 $USER_ID = 'shadowsmssand@strikeiron.com'; 
 $PASSWORD = 'Strike1';
 $WSDL = 'http://ws.strikeiron.com/SMSAlerts4?WSDL';
 $client = new SoapClient($WSDL, array('trace' => 0, 'exceptions' => 0));
 $registered_user = array("RegisteredUser" => array("UserID" => $USER_ID,"Password" => $PASSWORD));
 $header = new SoapHeader("http://ws.strikeiron.com", "LicenseInfo", $registered_user);
 $client->__setSoapHeaders($header);
 
 sms_notify($_GET[cell], $_GET[msg]);
 
 function sms_notify($mobile, $system_message, $from = 'GS') {
  global $client;
  $params = array("ToNumber" => $mobile, "FromName" => $from, "MessageText" => $system_message);
 echo $result = $client->__soapCall("SendMessage", array($params), null, null, $output_header);
 }
?>