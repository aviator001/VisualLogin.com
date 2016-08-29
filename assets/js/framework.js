	var err_img = '"http://gaysugardaddyfinder.com/assets/avatars/a3.png"'
	var lat = getCookie('lat')
	var lng = getCookie('lng')
	var login
	var data_type
	var pass
	var password_confirmation
	var con_id = 1, k, n=1, p_n=0, ec
	var validate = true
	var ns
	var x6,cnt=0
	var m_to, me, you, t, s, objH
	var mobile
	var timx
	var op = 0
	var y_axis = 1
	var toast = []
	var dismissed = 0
	var msid
	var page, path
	var imgs = 'http://gaysugardaddyfinder.com/assets/images/box.png'
	var none='none'
	var ht, ct
	var old_msg = ''
	var block = 'block'
	var none = 'none'
	var g_msgs
	var tt
	var iMsgCont
	var dismissed = ''
	var ofp, opm, owb = 0
	var fp, pm, wb, lb
	var inc_a = 0.01
	var inc_b = 0.05
	var timer_a
	var usr_input = ''
	var v = ''
	var objPhrase
	var pass 
	var aes_user_token
	var str
	var image_job = ''
	var swt = true
	var img_arr
	var im = new Array
	var ObjUser = new Array
	var d = ''
	var cntAtt = 1
	var new_wh
	var curr_att = ''
	var ObjCtr = 0
	var ObjChild
	var tmr
	var blue='#0093D9'
	var black='#000'
	var red='red'
	var orange='orange'
	var gold='gold'
	var white='#FFF'
	var f0f0f0='#f0f0f0'
	var none='none'
	var folder='fa fa-chevron-circle-right'
	var folder_open='fa fa-chevron-circle-down'
	var photo_on=1
	var err_pic='assets/avatars/a7.jpg'
	var soon='Coming Soon'
	var sid, xxid
	var err_src='assets/avatars/a3.png'
	var pointer = 0
	var ptr = 0
	//START: jalert and wait
	var html = document.documentElement;
	var objText, objType, objStyle, objWait, spinner
	var alpha = document.getElementById('alpha')
	var toast = document.createElement('span');
	var jToastWn = document.createElement('div');
	var jModalWn = document.createElement('div');
	var jBoxCont = document.createElement('div');
	var spinner = document.createElement('div');
	var objWait = document.createElement('img');
	var objW = document.createElement('img');
	var objT = document.createElement('span');
	var x_gender='Male Sugar Baby'
	var x_age=50
	var x_miles=50
	var x_photos='No'
	var zip = ''
	var miles = ''
	var age = ''
	var gender = ''
	var photos=''
	var pclip = 'assets/images/pclip.png'
	var pclip_o = 'assets/images/pclip_o.png'
	var err_img = 'assets/images/a000.png';
	var dot2 = 'http://gaysugardaddyfinder.com/assets/images/dot4.png'
	var dot1='http://gaysugardaddyfinder.com/assets/images/dot1.png'
	var user_offline = 'User is Offline!'
	var x_validate=true
	jModalWn.id='jModalWn'
	objW.id='objW'
	objT.id='objT'
	spinner.style.cssText = "display:none;position:fixed;width:100%;height:100%;top:0px;bottom:0px;left:0px;right:0px;margin:auto;z-index:99999999999;background:;opacity:1"
	jModalWn.style.cssText = "display:none;position:fixed;width:100%;height:100%;top:0px;bottom:0px;left:0px;right:0px;margin:auto;z-index:999999999999999999999;background:;opacity:1"
	jToastWn.style.cssText = "text-align:center;padding:10px;display:none;position:fixed;z-index:99999999999999999999999;right:10px;top:10px;font-size:18px;color:white"
	toast.style.cssText = "text-align:center;padding:10px;display:none;position:fixed;z-index:999999999999999999990;right:10px; top: 10px; font-size:18px; color: white"
	objWait.style.cssText = "margin:auto;position:fixed;z-index:9999999999999999999991;left:0;right:0;top:0;bottom:0;width:100px;padding:20px;background:#fff;border-radius:8px;opacity:0.8;box-shadow:0px 0px 5px #333"
	objW.style.cssText = "margin:auto;position:fixed;z-index:9999999999999999999991;left:0;right:0;top:0;bottom:0;width:125px;padding:20px;padding-top:10px;background:#fff;border-radius:8px;opacity:0.9;box-shadow:0px 0px 5px #333"
	objT.style.cssText = "margin:auto;position:fixed;z-index:9999999999999999999992;left:0;right:0;top:0;bottom:0;width:125px;height:125px;padding:5px;padding-top:80px;font-size:14px;font-family:Open sans Condensed;text-align:center;word-wrap:break-word;background:none;text-shadow:1px 1px 0px #fff;border-radius:8px;opacity:1.0;"
	objWait.src='http://gaysugardaddyfinder.com/assets/img/wait.gif'
	objW.src='http://gaysugardaddyfinder.com/assets/img/wait.gif'
	
	toast.id='toast'
	spinner.id='spinner'
	
	html.appendChild(jModalWn)
	html.appendChild(jBoxCont)
	html.appendChild(jToastWn)
	html.appendChild(toast)
	html.appendChild(spinner)
	spinner.appendChild(objWait)

	if (!getCookie("search_age")) setCookie("search_age","50")
	if (!getCookie("search_gender")) setCookie("search_gender","Male Sugar Baby")
	if (!getCookie("search_miles")) setCookie("search_miles","50")
	if (!getCookie("search_photos")) setCookie("search_photos","No")

function show_lightbox(filename_1) {
	document.getElementById('modal').style.zIndex='1000'
	document.getElementById('modal').style.display='block'
	document.getElementById('modal_bg').style.opacity='0.9'
	document.getElementById('modal_window').innerHTML="<img title='Click to close me'  onclick='document.all.modal.style.display=none' src='attach/"+filename_1+"' class='www_box2' style='max-width:400px;max-height:600px;border:10px solid #fff'>"
}		
function show_photo(filename_1) {
	document.getElementById('modal').style.zIndex='1000'
	document.getElementById('modal').style.display='block'
	document.getElementById('modal_bg').style.opacity='0.9'
	document.getElementById('modal_window').innerHTML="<img title='Click to close me'  onclick='document.all.modal.style.display=none' src='photos/"+filename_1+"' class='www_box2' style='max-width:400px;max-height:600px;border:10px solid #fff'>"
}		
function show_text(filename_1) {
	document.getElementById('modal').style.zIndex='1000'
	document.getElementById('modal').style.display='block'
	document.getElementById('modal_bg').style.opacity='0.9'
	document.getElementById('modal_window').innerHTML="<div contentEditable=true id='secure_password'>"
}		
function show(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += show(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	alert( dumped_text );
}

function show_map() {
	
	var g = document.getElementById('g_map')
	if (g.style.display=='none') g.style.display='block'
		else g.style.display='none'
}	
	
function find_ticket_x() {
	if (document.getElementById('tdv').style.display=='none') {
		document.getElementById('tdv').style.display='block'
		document.getElementById('ticket').style.display='block'
		document.getElementById('tt').style.display='block'
	} else {
		document.getElementById('tdv').style.display='none'
		document.getElementById('ticket').style.display='none'
		document.getElementById('tt').style.display='none'
	}
}
	
	function jwait(objTxt) {
		objT.innerHTML=objTxt
		jModalWn.appendChild(objWait)
		jModalWn.appendChild(objT)
		jModalWn.style.display='block'
	}

	function jhide() {
		document.getElementById('jModalWn').style.display=='none'
		jModalWn.style.display='none'
		objW.style.display='none'
		objT.style.display='none'
	}

	WebFontConfig = {
		google: { families: [ 'Open+Sans+Condensed:300:latin' ] }
	  };
	  (function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	  })(); 

		function close_modal() {
			jModalWn.style.display='none'
			jBoxCont.style.display='none'
		}
		
		function close_modal_f() {
			jModalWn.style.display='none'
			jBoxCont.style.display='none'
			return false
		}
	//END: jalert and wait
	
	setTimeout('init()', 200)
	if (getCookie('mobile')) mobile = getCookie('mobile')
	var path = window.location.href.substring(window.location.href.lastIndexOf('/')+1)
	var page = path.substring(0,path.length-4)
	
	function init() {
		if (page=='profile') {
			getProfileData()
		}
	}

	function format_sms(objSMS) {
		return ' (' + objSMS.substr(1,3) + ') ' + objSMS.substr(4,3) + '-' + objSMS.substr(7,4)
	}
	
	function jalert(objA, objF) {
		if (!objA) objA = "[No Message]"
		if (!objF) objF = ""
			$.alert({
			title: ' ',
			content: "<span style='color:#333'>" + objA + "</span>",
			confirm: function () {
				eval(objF)
			}
		});
	}

	function show_error(f,i) {
		if (document.getElementById(f.id + '_updated')) {
			document.getElementById(f.id + '_updated').style.display='block'
			document.getElementById(f.id + '_updated_img').src='assets/images/e3.png'
		}
		if (document.getElementById(f.id+'_original')) {
			if (document.getElementById(f.id+'_original').value == f.value) return false
		}
		var r = f.id + '_err'
		var e = '<i class="fa fa-bomb"></i> No Blanks!'
		var t = r + '_txt'
		if(!i) i = 'Invalid Entry! Please re-enter'
		x_validate = false
		r = document.getElementById(r)
		t = document.getElementById(t)
		validate = false
		f.style.background = 'lavenderblush'
		t.style.color='silver'
		var obj = f.id
		if (f.value.length == 0) t.innerHTML = e
			else t.innerHTML = i
		t.innerHTML += '<br>'
	}
	
	function show_error_reg(f,i) { 
		if (document.getElementById(f.id + '_updated')) {
			document.getElementById(f.id + '_updated').style.display='block'
			document.getElementById(f.id + '_updated_img').src='assets/images/e3.png'
		}
		var r = f.id + '_err'
		var e = '<i class="fa fa-bomb"></i> No Blanks!'
		var t = r + '_txt'
		if(!i) i = 'Invalid Entry! Please re-enter'
		x_validate = false
		r = document.getElementById(r)
		t = document.getElementById(t)
		validate = false
		f.style.background = 'lavenderblush'
		t.style.color='silver'
		var obj = f.id
		if (f.value.length == 0) t.innerHTML = e
			else t.innerHTML = i
		t.innerHTML += '<br>'
	}
	function show_login_error(err) {
		validate = false
		r = document.getElementById('form_login_errors')
		r.style.display = 'block'
		r.innerHTML = err + ''
		document.getElementById('loginMain').style.height='675px'
		document.getElementById('meh').className='fa fa-meh-o'
	}

	function clear_error(f) {
		if (document.getElementById(f.id + '_updated')) {
			document.getElementById(f.id + '_updated_img').src='assets/images/e5.png'
			document.getElementById(f.id + '_updated').style.display='none'
		}
		x_validate=true
		validate = true
		var r = f.id + '_err'
		var t = r + '_txt'
		var p = f.value
		f.style.background = '#fff'
		f.style.color='grey'
		t = document.getElementById(t)
		t.innerHTML = ''
		if (document.getElementById('form_errors')) document.getElementById('form_errors').style.display='none'
	}

	function validate_form(){
		mobile = document.getElementById('mobile')
		pass = document.getElementById('pass')
		email = document.getElementById('email')
		login = document.getElementById('login')
		age = document.getElementById('age')
		if ( document.getElementById('form_errors')) form_errors = document.getElementById('form_errors')
		if (!mobile.value) {
			show_error_reg(mobile)
			validate = false
		}

		if (!email.value) {
			show_error_reg(email)
			validate = false
		}

		if (!pswd.value) {
			show_error_reg(pswd)
			validate = false
		}

		if (!login.value) {
			show_error_reg(login)
			validate = false
		}
/*		if (form_errors) {
			form_errors.style.display='block'
			form_errors.style.display='block'
			form_errors.style.fontSize='18px'
			form_errors.style.color='black'
			form_errors.style.fontFamily='Open Sans Condensed'
			form_errors.style.textAlign='left'
		}
*/
		if (validate == true) create_user()
			else form_errors.innerHTML = '<i class="fa fa-frown-o"></i>Error(s) found.</i>'
	}	

	function validate_login(){
		user_input = document.getElementById('user_input')
		pswd = document.getElementById('pswd')
		form_errors = document.getElementById('form_errors')
		
		if (!user_input.value) {
			show_error(user_input)
			validate = false
		}

		if (!pswd.value) {
			show_error(pswd)
			validate = false
		}

		if (validate == true) login()
			else {
					form_login_errors.innerHTML = '<i class="fa fa-frown-o"></i>Error(s) found.</i>'
					form_login_errors.style.display='block'
				}
	}	

	function is_valid_mobile(f) {
		if (f.value.length >10) {
			show_error(f,'Invalid Mobile! Format: 10 Digits only. (123) 456-7890 or XXXYYYZZZZ or 123.456.7890')
			return false
		}
		var number = f.value
		var m = /^(\W|^)[(]{0,1}\d{3}[)]{0,1}[.]{0,1}[\s-]{0,1}\d{3}[\s-]{0,1}[\s.]{0,1}\d{4}(\W|$)/
		if(!m.test(number)) {
				validate = false
				show_error(f,'Invalid Mobile! Format: 10 Digits only. (123) 456-7890 or XXXYYYZZZZ or 123.456.7890')
				return false
			}
	}

	function is_valid_age(f) {
		var number = f.value*1
		if (isNumber(number) && (number>=18) && (number<=80)) {
			return true 
		} else {
				validate = false
				show_error(f,'Invalid Age!')
				return false
		}
	}

	function is_valid_currency(f) {
		var obj = f.value
		var c=!jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		if((!c) || (c==false)) {
				validate = false
				show_error(f,'Invalid $ Amount!')
				return false
			} else {
				return true
			}
	}

	function is_valid_pswd(f) {
		var pswd = f.value
		if(pswd.trim().length) {
				return true
			} else 	{
				validate = false
				show_error(f,'Invalid Password!')
				return false
			}
	}
	var old_money=''
	var old_date_money=''
	
	function is_valid_email(f) {
	var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email.test(f.value)) 
		{
			return true
		} else {
			validate = false
			show_error(f,'Invalid Email! Please re-enter')
			return false
		}
	}

	function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function validate_money(f)	{
		if (f.value) {
			if (isNumber(f.value) == true) {
				if (old_money != f.value) update_field('system_status', f.value)
				old_money=f.value
				return true
			} else {
				show_error(f)
				return false	
			}
		}
	}
	function validate_date_money(f)	{
		if (f.value) {
			if (isNumber(f.value) == true) {
				if (old_date_money != f.value)  update_field('system_status_end', f.value)
				old_money=f.value
				return true
			} else {
				show_error(f)
				return false	
			}
		}
	}

	function validate_field(f)	{
		if (document.getElementById(f.id+'_original')) {
			if (document.getElementById(f.id+'_original').value == f.value) return false
		}
		if (f.id=='age') {
			if (!is_valid_age(f)) {
				show_error(f)
				return false 
			} else {
				update_field(f.id,f.value)
				return true
			}
		}
		if (f.id=='pswd') {
			if (!is_valid_pswd(f)) {
				show_error(f)
				return false 
			} else {
				update_field(f.id,f.value)
				return true
			}
		}
		if (f.id=='system_status') {
			if (!is_valid_currency(f)) {
				show_error(f)
				return false 
			} else {
				update_field(f.id,f.value)
				return true
			}
		}

		if (f.id=='system_status_end') {
			if (!is_valid_currency(f)) {
				show_error(f)
				return false 
			} else {
				update_field(f.id,f.value)
				return true
			}
		}

		if (f.id=='mobile') is_valid_mobile(f)
		if (f.id=='email') is_valid_email(f)
		var e = '<span style="color:orange">' + f.value + '</span> Already Exists.<br><a href="login.php">Login</a> with this ' + f.id + ' instead?'
		if (f.value.length > 0) {
			if (f.id == 'mobile') {
				var number = '1' + f.value
				number = number.replace('-','')
				number = number.replace(' ','')
				number = number.replace('(','')
				number = number.replace(')','')
				number = number.replace('.','')
				number = number.replace('-','')
				number = number.replace(' ','')
				number = number.replace('(','')
				number = number.replace(')','')
				number = number.replace('.','')
			}
			var x = ''
			var r = f.id + '_err'
			var t = r + '_txt'
			var i = f.value
			if (f.id == 'mobile') i = number
			r = document.getElementById(r)
			t = document.getElementById(t)

			var url = 'inc/x_validate_field.php?d=' + f.id + '&i=' + i
			var request = $.ajax({
			url: url,
			type: "GET",
			dataType:'html',
			cache: false,
			success: function(msg) {
					if (msg != 0) {
						validate = false
						ns = false
						t.style.display = ''
						t.innerHTML = e
					}
					else {
						validate = true
						update_field(f.id,f.value)
					}
				}
			})
		}
	}

	function validate_field_register(f)	{
		if (document.getElementById(f.id+'_original')) {
			if (document.getElementById(f.id+'_original').value == f.value) return false
		}
		if (f.id=='age') {
			if (!is_valid_age(f)) {
				show_error(f)
				return false 
			} else {
				return true
			}
		}
		if (f.id=='pswd') {
			if (!is_valid_pswd(f)) {
				show_error(f)
				return false 
			} else {
				return true
			}
		}
		if (f.id=='mobile') is_valid_mobile(f)
		if (f.id=='email') is_valid_email(f)
		var e = '<span style="color:orange">' + f.value + '</span> Already Exists.<br><a href="login.php">Login</a> with this ' + f.id + ' instead?'
		if (f.value.length > 0) {
			if (f.id == 'mobile') {
				var number = '1' + f.value
				number = number.replace('-','')
				number = number.replace(' ','')
				number = number.replace('(','')
				number = number.replace(')','')
				number = number.replace('.','')
				number = number.replace('-','')
				number = number.replace(' ','')
				number = number.replace('(','')
				number = number.replace(')','')
				number = number.replace('.','')
			}
			var x = ''
			var r = f.id + '_err'
			var t = r + '_txt'
			var i = f.value
			if (f.id == 'mobile') i = number
			r = document.getElementById(r)
			t = document.getElementById(t)
			var url = 'inc/x_validate_field.php?d=' + f.id + '&i=' + i
			var request = $.ajax({
			url: url,
			type: "GET",
			dataType:'html',
			cache: false,
			success: function(msg) {
					if (msg != 0) {
						validate = false
						ns = false
						t.style.display = ''
						t.innerHTML = e
					}
					else {
						validate = true
						return true
					}
				}
			})
		}
	}
	
	var digit_code
	
	function create_user() {
		clean_cookies()
		var x = ''
		validate_code()
		/*
		document.getElementById('pay_modal').style.display='block'
		document.getElementById('wait').style.display='block'
		document.getElementById('spl_text').innerHTML='GENERATING VALIDATION CODE, PLEASE WAIT'
			var url = 'send_code.php?cell=' + document.getElementById('mobile').value
			var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
					if (msg.trim() != '') {
						document.getElementById('wait').style.display='none'
						document.getElementById('bo').style.display='block'
						document.getElementById('v1').focus()
						digit_code = msg.trim()	
					} else {
						jalert(msg)
						return false
					}
				}
			})
		*/
		}
		
	function send_code() {
		if (document.getElementById('mobile_original').value == document.getElementById('mobile').value) return false
		var x = ''
		var mobile = document.getElementById('mobile')
		validate_field(mobile)
		if (validate == true) {
		document.getElementById('pay_modal').style.display='block'
		document.getElementById('wait').style.display='block'
		document.getElementById('spl_text').innerHTML='GENERATING VALIDATION CODE, PLEASE WAIT'
			var url = 'send_code.php?cell=' + document.getElementById('mobile').value
			var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
					if (msg.trim() != '') {
						document.getElementById('wait').style.display='none'
						document.getElementById('co').style.display='block'
						document.getElementById('c1').focus()
						digit_code = msg.trim()	
					} else {
						jalert(msg)
						return false
					}
				}
			})
		} else {
			return false
		}
	}
		
		function validate_code_minor() {
			var x=''
			var mobile = document.getElementById('mobile').value
			c1=document.getElementById('c1').value
			c2=document.getElementById('c2').value
			c3=document.getElementById('c3').value
			c4=document.getElementById('c4').value
			var cv = (c1+c2+c3+c4)
			if (cv = digit_code) {
				update_field('mobile', mobile)
				$.alert('Phone Number Updated Succesfully')
				document.getElementById('co').style.display='none'
				document.getElementById('pay_modal').style.zIndex='1'
				document.getElementById('c1').value=''
				document.getElementById('c2').value=''
				document.getElementById('c3').value=''
				document.getElementById('c4').value=''
				document.getElementById('wait').style.display='none'
				document.getElementById('pay_modal').style.display='none'
				
			} else {
				jalert('Code Validation Failure','hide_verify()',1,0,'Try Again')
			}
		}
	
		function hide_verify(){
				document.getElementById('co').style.display='none'
				document.getElementById('pay_modal').style.zIndex='1'
				document.getElementById('c1').value=''
				document.getElementById('c2').value=''
				document.getElementById('c3').value=''
				document.getElementById('c4').value=''
				document.getElementById('wait').style.display='none'
				document.getElementById('pay_modal').style.display='none'
		}

		function update_field(f,v) {
		if (!x_validate) return false
		var t = 'dt_members'
		var url = 'inc/x_update_table.php?table=' + t + '&field=' + f + '&value=' + v + '&id=' + getCookie('mid')
		var request = $.ajax({
				url: url,
				type: "GET",
				dataType: "html",
				cache: false,
				success: function(msg) {
					if (!msg) {
						if (f.id=="mobile") {
									jalert('Update Successfull')
									document.getElementById('co').style.display='none'
									document.getElementById('pay_modal').style.zIndex='1'
									document.getElementById('c1').value=''
									document.getElementById('c2').value=''
									document.getElementById('c3').value=''
									document.getElementById('c4').value=''
									document.getElementById('wait').style.display='none'
									document.getElementById('pay_modal').style.display='none'
						} else {
							if (document.getElementById(f + '_updated')) {
								document.getElementById(f + '_updated').style.display='block'
								document.getElementById(f + '_updated_img').src='assets/images/e5.png'
							}
							if (document.getElementById(f + '_original')) {
								if (document.getElementById(f + '_original').value) {
									document.getElementById(f + '_original').value=v
								} else if (document.getElementById(f + '_original').innerHTML) {
									document.getElementById(f + '_original').innerHTML = v
								}
							}
						}
					} else {
						jalert(msg)
					}
				}
			})			
		}

		function validate_code() {
				var url='inc/x_get_city_state_zip.php?lat='+getCookie('lat')+'&lng='+getCookie('lng')
				console.log(url)
				var request = $.ajax({
					url: url,
					type: "GET",
					dataType: "html",
					cache: false,
					success: function(msg) {
						setCookie('location',msg)
					}
				})
			if (getCookie('location')) {
				var lxc=getCookie('location').trim()
				lx=lxc.split(',')
				var cc_city = lx[0]
				var cc_state=lx[1]
				var cc_location = cc_city + ', ' + cc_state + ' ' + getCookie('zipcode')
				var x=''
			}
/*			v1=document.getElementById('v1').value
			v2=document.getElementById('v2').value
			v3=document.getElementById('v3').value
			v4=document.getElementById('v4').value
			var vc = (v1+v2+v3+v4)
			if (vc == digit_code) {
*/				
				document.getElementById('bo').style.display='none'
				x += 'mob=' + document.getElementById('mobile').value 
				x += '&password=' + document.getElementById('pswd').value 
				x += '&email=' + document.getElementById('email').value 
				x += '&login=' + document.getElementById('login').value 
				x += '&gender=' + getCookie('gender')
				x += '&age=' + document.getElementById('age').value 
				x += '&cc_city=' + cc_city
				x += '&cc_state=' + cc_state
				x += '&lat=' + getCookie('lat')
				x += '&lng=' + getCookie('lng')
				x += '&zip=' + getCookie('zipcode')
				x += '&location=' + cc_location 
				x += '&aff=' + getCookie('aff')
				x += '&pro=' + Math.random() * 100000000 + '' + Math.random() * 100000000 + '' + Math.random() * 100000000 + '' + Math.random() * 100000000 + '' + Math.random() * 100000000
				document.getElementById('wait').style.display='block'
//				document.getElementById('spl_text').innerHTML='CODE VERIFIED SUCCESSFULLY. PLEASE WAIT'
					var url = 'create.php?' + x
					console.log(url)
					var request = $.ajax({
					url: url,
					type: "GET",
					dataType: "html",
					cache: false,
					success: function(msg) {
							if (msg.trim() == 'Registration failed!') {
									document.getElementById('pay_modal').style.zIndex='-1'
									show(msg)
									return false
							} else {
									document.getElementById('wait').style.display='none'
//									document.getElementById('pay_modal').style.zIndex='1'
									jalert('Account created succesfully')
									location.href='home.php?page=my_account&first=true'
							}
						}
					})
/*			} else {
				document.getElementById('bo').style.display='none'
				document.getElementById('pay_modal').style.zIndex='1'
				document.getElementById('v1').value=''
				document.getElementById('v2').value=''
				document.getElementById('v3').value=''
				document.getElementById('v4').value=''
				document.getElementById('wait').style.display='none'
				document.getElementById('pay_modal').style.zIndex='1'
				jalert('Code Validation Failure','document.all.bo.style.display=block',1,0,'Try Again')
			}
*/
	}

	function login() {
		jwait("Hold on, I'm logging you in...")
		var url = 'inc/x_login.php?user_input=' + document.getElementById('user_input').value + '&pswd=' + document.getElementById('pswd').value + '&type=' + whats_this(document.getElementById('user_input').value) + '&lat=' +lat + '&lng=' + lng
		url = url + '&seed=' + Math.random() * 1000000000000 + '&salt=' + Math.random() * 10000000000
		console.log(url)
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
			var st=msg.split('|')
			var stat=st[0]
			if (stat == "OK") {
					setTimeout('go()', 500)
				} else {
					jhide()
					show_login_error('Login Failed. ' + msg)
				}
			}
		})
	}

	function go() {
		var loc
		if (getCookie('return')) {
			 var url = 'home.php?page='+ getCookie('return')
			 delCookie('return')
			 location.href=url
		}
		location.href = 'home.php?ilogin=done'
	}
	
	function forgot() {
		fp = document.getElementById('password')
		fb = document.getElementById('forgot_button')
		pm = document.getElementById('pass_modal')
		wb = document.getElementById('form_login_errors')
		lb = document.getElementById('lbox')
		lt = document.getElementById('lt')
		pm.style.display='block'
		wb.innerHTML='FORGOT PASSWORD<BR><BR>'
		lt.style.display='none'
		fp.style.display='none'
		fb.style.display='block'
		fb.style.borderColor = '#357ebd'
		fb.style.background = '#428bca'
		wb.style.opacity = '0'
		fb.style.opacity = '0'
		pm.style.opacity = '0.3'
		pm.style.zIndex = '10000'
		transform()
	}

	function forgot_modal() {
		fp = document.getElementById('password')
		fb = document.getElementById('forgot_button')
		pm = document.getElementById('pass_modal')
		wb = document.getElementById('myModalLabel')
		lb = document.getElementById('basicModal')
		lt = document.getElementById('lt')
		pm.style.display='block'
		wb.innerHTML='FORGOT PASSWORD'
		lt.style.display='none'
		fp.style.display='none'
		fb.style.display='block'
		fb.style.borderColor = '#357ebd'
		fb.style.background = '#428bca'
		fb.style.opacity = '0'
		pm.style.opacity = '0.3'
		pm.style.zIndex = '10000'
		transform_modal()
	}

	function transform() {
		if (inc_a < 1) {
			fb.style.opacity = inc_a
			wb.style.opacity = inc_a
			lb.style.width = 30 - inc_a*10 + '%'
			lb.style.height = 440 - inc_a*155 + 'px'
			inc_a = inc_a + 0.05
			timer_a = setTimeout('transform()', 1)
			if (inc_b < 1) {
				pm.style.opacity = inc_b
				inc_b = inc_b + 0.1
			}
		} else {
			wb.style.color='skyblue'
			pm.style.opacity = '0.8'
			clearTimeout(timer_a)
		}
	}

	function transform_modal() {
		if (inc_a < 1) {
			fb.style.opacity = inc_a
			inc_a = inc_a + 0.05
			timer_a = setTimeout('transform_modal()', 1)
			if (inc_b < 1) {
				fb.style.marginTop = -1 * inc_a*75 + 'px'
				lb.style.height = 600 - inc_a*475 + 'px'
				pm.style.opacity = inc_b
				inc_b = inc_b + 0.1
			}
		} else {
			wb.style.color='skyblue'
			pm.style.opacity = '0.8'
			pm.style.zIndex='10000'
			lt.style.position = 'absolute'
			lt.style.zIndex = '99999999999'
			clearTimeout(timer_a)
		}
	}

	function send_password() {
		pm.style.zIndex = '11111'
		var fw = document.getElementById('wait')
		var user_mobile = document.getElementById('mobile').value
		var url = 'php/x_sms_api.php?sms=' + user_mobile
		fw.style.display='block'
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				fw.style.display='none'
				wb.innerHTML = 'PASSWORD SENT. PLEASE CHECK YOUR PHONE'
				wb.style.width = '320px'
				fb.style.display='none'
				fp.style.display='block'
				lt.style.display='block'
				pm.style.display='none'
				lb.style.width = '30%'
				lb.style.height = '440px'
				fp.focus()
			}
		})
	}

	function send_password_new() {
		var user_mobile = getCookie('mobile')
		if (!user_mobile) {
			user_mobile=prompt('Please enter your mobile phone number')
			send_pass_api_new(user_mobile.trim())
		}
	}
	
	function send_pass_api_new(user_mobile) {
		jwait('Sending Password...')
		var url = 'send_code.php?type=password&cell=' + user_mobile
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				jhide()
				jalert('Password sent to mobile number')
			}
		})
	}

	function send_password_modal() {
		var fw = document.getElementById('wait')
		var user_mobile = document.getElementById('mobile').value
		var url = 'php/x_sms_api.php?sms=' + user_mobile
		fw.style.display='block'
		lb.style.display='none'
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				location.href='login.php?mob=' + getCookie('mobile')
			}
		})
	}

	function whats_this(data) {
		var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		var mm = /^(\W|^)[(]{0,1}\d{3}[)]{0,1}[.]{0,1}[\s-]{0,1}\d{3}[\s-]{0,1}[\s.]{0,1}\d{4}(\W|$)/
		if(email.test(data)) {
			data_type = 'email'
		} else {
			if(mm.test(data)) {
				data_type = 'mobile'
			} else {
				data_type = 'login'
			}
		}
		return data_type
	}

	function delCookie(cname) {
		var d = new Date();
		d.setTime(d.getTime());
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + "" + "; " + expires;
	 }

	function setCookie(cname,cvalue,exdays)	{
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	 }

	function getCookie(cname)	{
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
		  var c = ca[i].trim();
		  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		}
		return "";
	}

	function clean_cookies() {
		delCookie('currPage')
		delCookie('msid')
		delCookie('chat_with')
		delCookie('USER_DATA')
		delCookie('SEND_SMS')
		delCookie('SEND_SMS_NAME')
		delCookie('KEEP_LOGGED_IN')
		delCookie('mobile')
		delCookie('long_code')
		delCookie('user_data')
		delCookie('points_balance')
	}

	function do_logout() {
		delCookie('msid')
		delCookie('chat_with')
		delCookie('USER_DATA')
		delCookie('SEND_SMS')
		delCookie('SEND_SMS_NAME')
		delCookie('KEEP_LOGGED_IN')
		delCookie('mobile')
		delCookie('long_code')
		delCookie('user_data')
		delCookie('points_balance')
		if(location.href='login.php') location.href='login.php'
			else location.href='../login.php'
	}

	function getProfileData() {
		var url = "php/x_profile_data.php?mobile=" + mobile;
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				if (msg) {
					var profile_data = msg.split('|')
					document.getElementById('email').value = profile_data[1]
					document.getElementById('up_password').value = profile_data[2]
					document.getElementById('name').value = profile_data[0].trim()
					document.getElementById('up_mobile').value = getCookie('mobile')
				} else {
					jalert('Profile not found!')
				}
			}
		})
	}

	function show_hide() {
		if (document.getElementById('five').innerHTML == 'Hide Photo') {
				document.getElementById('two').style.display = 'none'
				document.getElementById('two').style.display = 'none'
				document.getElementById('three').style.display = 'none'
				document.getElementById('four').style.display = 'none'
				document.getElementById('five').innerHTML = 'Show Photo'
		} else {
				document.getElementById('one').style.display = ''
				document.getElementById('two').style.display = ''
				document.getElementById('three').style.display = ''
				document.getElementById('four').style.display = ''
				document.getElementById('five').innerHTML = 'Hide Photo'
			}
		}

	function charge_paypal(oA, oQ, plan_id) {
		setCookie('plan_id', plan_id)
		var url = "paypal/sample/payments/CreatePaymentUsingPayPal.php?oAmt=" + oA + "&oQty=" + oQ + "&plan_id=" + plan_id + "&x_phone=" + getCookie('mobile')
		var request = $.ajax({
		   type: 'GET',
			url: url,
			success: function(msg) {
				location.href=msg
			}
		})
	}
		
	function del_photo(id) {
		var url = "inc/x_del_photo.php?id="+id
		var request = $.ajax({
		   type: 'GET',
			url: url,
			success: function(msg) {
				location.reload()
			}
		})
	}

	function strpos(haystack, needle, offset) {
	  var i = (haystack + '')
		.indexOf(needle, (offset || 0));
	  return i === -1 ? false : i;
	}
	
	function urldecode(str) {
	   return decodeURIComponent((str + '').replace(/\+/g, '%20'));
	}	

	function delCookie(cname) {
		var d = new Date();
		d.setTime(d.getTime());
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + "" + "; " + expires;
	 }

	function setCookie(cname,cvalue,exdays)	{
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	 }

	function getCookie(cname)	{
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
		  var c = ca[i].trim();
		  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		}
		return "";
	}

	function set_location() {
	   if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else { 
			alert("Geolocation is not supported by this browser.")
		}
	}

	function showPosition(position) {
		setCookie('lat', position.coords.latitude)
		setCookie('lng', position.coords.longitude)
		get_address(position.coords.latitude, position.coords.longitude)
		get_zip(position.coords.latitude, position.coords.longitude)
	}
			
	function get_address(objLat,objLng) {
		var url = "inc/x_address_from_latlng.php?a="+objLat+"&b="+objLng
		var request = $.ajax({
		   type: 'GET',
			url: url,
			success: function(msg) {
				setCookie('location', msg.trim())
				return msg.trim()
			}
		})
	}

	function get_zip(lat, lng){
		var lat
		var lng
		if (!lat) lat = getCookie('lat')
		if (!lng) lng = getCookie('lng')
		var url = 'inc/x_get_zip.php?lat=' + lat + '&lng=' + lng
		console.log(url)
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				setCookie('zipcode', msg.trim())
				if (document.getElementById('zip')) document.getElementById('zip').value=msg.trim()
				return msg.trim()
			}
		})
	}

	function mark_read(mid){
		var m = getCookie('mid')
		m = m.replace('%7C','|')
		m=m.split('|')
		var mo = m[0]
		var lc = m[1]
		var url = 'inc/x_sms_mark_read.php?mid=' + mid + '&x=' + Math.random() * 100000000000000000
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				var mobl=getCookie('mobile')
				show_msgs(mobl)
			}
		})
	}
	
	if (window_height() < screen.height) objH = window_height()
		else objH = screen.height

	function add_fav(member_id) {
		var url = 'inc/x_add_fav.php?m=' + member_id + '&my=' + getCookie('mid')
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				jalert(msg.trim())
			}
		})
	}
	
	function clear_all_timers() {
		var maxId = setTimeout(function(){}, 0);
		for(var i=0; i < maxId; i+=1) { 
			clearTimeout(i);
		}
	}

	function charge_card( token_id, token_email, plan_id, amt, desc, qty, coupon_id) {
		if ((coupon_id != '') && (verified != '1')) {
			jalert('Please apply coupon first!')
			return false
		}
		var aff=getCookie('aff')
		document.getElementById('pay_modal').style.display='block'
		document.getElementById('wait').style.display='block'
		var mm = getCookie('mobile')
		var url = 'charge.php?token_id=' + token_id + '&token_email=' + token_email + '&plan_id=' + plan_id + '&amt=' + amt + '&desc=' + desc + '&qty=' + qty + '&coupon_id=' + coupon_id + '&mob=' + mm + '&aff=' + aff
		var request = $.ajax({
			url: url,
			type: "POST",
			dataType: "html",
			cache: false,
			success: function(msg) {
				document.getElementById('wait').style.display='none'
				if (!msg.trim()) {
					document.getElementById('wait_empty').style.display='block'
					document.getElementById('wait_empty').innerHTML='<br>PAYMENT SUCCESFUL<BR><font color=skyblue>'+desc+'</font><font color=grey><br>CLICK HERE TO PROCEED</grey>'
					setTimeout("location.href='send.php'", 30000)
				} else {
					document.getElementById('wait_error').style.display='block'
					document.getElementById('wait_error').innerHTML = msg
				}
			}
		})
	}
	
	function window_height() {
		if (document.body) {
		 winH = document.body.offsetHeight;
		}

		if (document.compatMode=='CSS1Compat' &&
			document.documentElement &&
			document.documentElement.offsetHeight ) {
			winH = document.documentElement.offsetHeight;
			return winH
		}

		if (window.innerHeight && window.innerHeight) {
			 winH = window.innerHeight;
			 return winH;
		}
	}		

	function view_album(m_id, p_id) {
		location.href='page.php?page=view_photo&member_id='+m_id+'&pid='+p_id
	}
	
	function edit_photo(m_id, p_id) {
		location.href='page.php?page=view_photo&member_id='+m_id+'&pid='+p_id
		
	}
	
	function crop_photo(m_id, p_id) {
		location.href='page.php?page=edit_photo&member_id='+m_id+'&id='+p_id
		
	}
	
	function show_hide() {
		if (document.getElementById('five').innerHTML == 'Hide Photo') {
				document.getElementById('one').style.display = 'none'
				document.getElementById('two').style.display = 'none'
				document.getElementById('three').style.display = 'none'
				document.getElementById('four').style.display = 'none'
				document.getElementById('five').innerHTML = 'Show Photo'
		} else {
				document.getElementById('one').style.display = ''
				document.getElementById('two').style.display = ''
				document.getElementById('three').style.display = ''
				document.getElementById('four').style.display = ''
				document.getElementById('five').innerHTML = 'Hide Photo'
			}
		}
		function toggle_gender() {
			setCookie("cat", 'gender')
			x_gender=getCookie('search_gender')
			if (x_gender == 'Male Sugar Baby') x_gender = 'Gay Sugar Daddy'
				else x_gender = 'Male Sugar Baby'
			gender = x_gender
			document.getElementById('x_gender').innerHTML = x_gender
			setCookie("search_gender",gender)
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				distance_search()			
			}
		}
		
		function set_cat_all() {
			setCookie('cat', 'all')
		}	
		
		function down_age() {
			setCookie("cat", 'age')
			clearTimeout(a)
			x_age=getCookie('search_age')
			x_age=x_age*1
			if (x_age > 80) x_age = 80
			if (x_age < 18) x_age = 18
			else if (x_age<=20) x_age=x_age-1
			else if (x_age>=25) x_age=x_age-5

			if (x_age >= 80) x_age = 80
			if (x_age <= 18) x_age = 18

			document.getElementById('x_age').innerHTML = x_age
			age = x_age
			setCookie("search_age",age)
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				a=setTimeout('distance_search()',500)			
			}
		}
		function down_age_mobile() {
			setCookie("cat", 'age')
			clearTimeout(a)
			x_age=getCookie('search_age')
			x_age=x_age*1
			if (x_age >= 80) x_age = 80
			if (x_age <= 18) x_age = 18
			else if (x_age<=20) x_age=x_age-1
			else if (x_age>=25) x_age=x_age-5

			if (x_age >= 80) x_age = 80
			if (x_age <= 18) x_age = 18

			document.getElementById('x_age').innerHTML = x_age
			age = x_age
			setCookie("search_age",age)
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				a=setTimeout('distance_search()',500)			
			}
		}
				
		function up_age() {
			setCookie("cat", 'age')
			clearTimeout(a)
			x_age=getCookie('search_age')
			x_age=x_age*1
			if (x_age > 80) x_age = 80
			if (x_age < 18) x_age = 18
			else if (x_age<20) x_age=x_age+1
			else if (x_age>=20) x_age=x_age+5
			if (x_age > 80) x_age = 80
			if (x_age < 18) x_age = 18
			
			document.getElementById('x_age').innerHTML = x_age
			age = x_age
			setCookie("search_age", age)
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				a=setTimeout('distance_search()',500)			
			}
		}

		function up_age_mobile() {
			setCookie("cat", 'age')
			clearTimeout(a)
			x_age=getCookie('search_age')
			x_age=x_age*1
			if (x_age >= 80) x_age = 80
			if (x_age <= 18) x_age = 18
			else if (x_age<20) x_age=x_age+1
			else if (x_age>=20) x_age=x_age+5
			if (x_age >= 80) x_age = 80
			if (x_age <= 18) x_age = 18
			
			document.getElementById('x_age').innerHTML = x_age
			age = x_age
			setCookie("search_age", age)
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				a=setTimeout('distance_search()',500)			
			}
		}
		var t
		var a
		function down_miles() {
			setCookie("cat", 'miles')
			clearTimeout(a)
			x_miles=getCookie('search_miles')
			x_miles=x_miles*1
			if (x_miles==7500) x_miles=x_miles-500
			else if ((x_miles >= 5000) && (x_miles < 7500)) x_miles=x_miles-500
			else if ((x_miles >= 2500) && (x_miles < 5000)) x_miles=x_miles-250
			else if ((x_miles >= 1000) && (x_miles < 2500)) x_miles=x_miles-100
			else if ((x_miles >= 500) && (x_miles < 1000)) x_miles=x_miles-50
			else if ((x_miles >= 250) && (x_miles < 500)) x_miles=x_miles-25
			else if ((x_miles >= 10) && (x_miles < 250)) x_miles=x_miles-10
			if (x_miles<=10) x_miles=10
			setCookie("search_miles", x_miles)
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = x_miles
			if (document.getElementById('miles')) document.getElementById('miles').value = x_miles
			miles = x_miles
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				a=setTimeout('distance_search()',500)			
			}
		}
				
		function down_miles_mobile() {
			setCookie("cat", 'miles')
			clearTimeout(a)
			x_miles=getCookie('search_miles')
			x_miles=x_miles*1
			if (x_miles==7500) x_miles=x_miles-500
			else if ((x_miles >= 5000) && (x_miles < 7500)) x_miles=x_miles-500
			else if ((x_miles >= 2500) && (x_miles < 5000)) x_miles=x_miles-250
			else if ((x_miles >= 1000) && (x_miles < 2500)) x_miles=x_miles-100
			else if ((x_miles >= 500) && (x_miles < 1000)) x_miles=x_miles-50
			else if ((x_miles >= 250) && (x_miles < 500)) x_miles=x_miles-25
			else if ((x_miles >= 10) && (x_miles < 250)) x_miles=x_miles-10
			if (x_miles<=10) x_miles=10
			setCookie("search_miles", x_miles)
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = x_miles
			if (document.getElementById('miles')) document.getElementById('miles').value = x_miles
			miles = x_miles
				if(getCookie('curr_page')=='browse') {
					get_local()
				} else {
					a=setTimeout('distance_search()',500)			
				}
			}
				
		function up_miles() {
			setCookie("cat", 'miles')
			clearTimeout(a)
			x_miles=getCookie('search_miles')
			x_miles=x_miles*1
			if (x_miles>=7500) x_miles=7500
			else if ((x_miles >= 5000) && (x_miles < 7500)) x_miles=x_miles+500
			else if ((x_miles >= 2500) && (x_miles < 5000)) x_miles=x_miles+250
			else if ((x_miles >= 1000) && (x_miles < 2500)) x_miles=x_miles+100
			else if ((x_miles >= 500) && (x_miles < 1000)) x_miles=x_miles+50
			else if ((x_miles >= 250) && (x_miles < 500)) x_miles=x_miles+25
			else if ((x_miles >= 10) && (x_miles < 250)) x_miles=x_miles+10
			if (x_miles<=10) x_miles=10
			setCookie("search_miles", x_miles)
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = x_miles
			if (document.getElementById('miles')) document.getElementById('miles').value = x_miles
			miles = x_miles
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				a=setTimeout('distance_search()',500)			
			}
		}

		function up_miles_mobile() {
			setCookie("cat", 'miles')
			clearTimeout(a)
			x_miles=getCookie('search_miles')
			x_miles=x_miles*1
			if (x_miles>=7500) x_miles=7500
			else if ((x_miles >= 5000) && (x_miles < 7500)) x_miles=x_miles+500
			else if ((x_miles >= 2500) && (x_miles < 5000)) x_miles=x_miles+250
			else if ((x_miles >= 1000) && (x_miles < 2500)) x_miles=x_miles+100
			else if ((x_miles >= 500) && (x_miles < 1000)) x_miles=x_miles+50
			else if ((x_miles >= 250) && (x_miles < 500)) x_miles=x_miles+25
			else if ((x_miles >= 10) && (x_miles < 250)) x_miles=x_miles+10
			if (x_miles<=10) x_miles=10
			setCookie("search_miles", x_miles)
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = x_miles
			if (document.getElementById('miles')) document.getElementById('miles').value = x_miles
			miles = x_miles
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				a=setTimeout('distance_search()',500)			
			}
		}

		function toggle_photos_over() {
		if (document.getElementById('img_photos_only').src == 'http://gaysugardaddyfinder.com/assets/images/chk_2.png') document.getElementById('img_photos_only').src = 'assets/images/chk_2.png'
				else document.getElementById('img_photos_only').src = 'assets/images/chk_1.png'
		}

		function toggle_photos_out() {
		if (document.getElementById('img_photos_only').src == 'http://gaysugardaddyfinder.com/assets/images/chk_2.png') document.getElementById('img_photos_only').src = 'assets/images/chk_2.png'
				else document.getElementById('img_photos_only').src = 'assets/images/chk_0.png'
		}

		var photos_only
		function toggle_photos() {
			setCookie("cat", 'photos_only')
			x_photos = document.getElementById('x_photos').value
			if (x_photos == 'No') x_photos = 'Yes'
				else x_photos = 'No'
			photos_only = (x_photos=='Yes') ? ' Photo profiles only' : ' All profiles';
			photos = (x_photos=='Yes') ? 'Yes' : 'No';
			document.getElementById('x_photos').value = x_photos
			document.getElementById('photos_only').innerHTML = photos_only
			document.getElementById('img_photos_only').src = (document.getElementById('photos_only').innerHTML==' Photo profiles only') ? 'assets/images/chk_2.png' : 'assets/images/chk_0.png'
			setCookie("search_photos", photos)
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				distance_search()			
			}
		}
				
		function toggle_photos_mobile() {
			setCookie("cat", 'photos_only')
			x_photos = getCookie('search_photos')
			if (x_photos == 'No') x_photos = 'Yes'
				else x_photos = 'No'
			photos_only = (x_photos=='Yes') ? ' Must Have' : ' Optional';
			setCookie("search_photos", x_photos)
			document.getElementById('photos_only').innerHTML = photos_only
			if(getCookie('curr_page')=='browse') {
				get_local()
			} else {
				distance_search()			
			}
		}
				
		function init_nav() {
			if(!getCookie('search_photos')) setCookie("search_photos", 'No')
			if(!getCookie('search_age')) setCookie("search_age", '70')
			if(!getCookie('search_miles')) setCookie("search_miles", '250')
			if(!getCookie('search_gender')) setCookie("search_gender", 'Male Sugar Baby')
			
			x_photo = getCookie('search_photos')
			photos_only = (x_photo=='Yes') ? ' Photo profiles only' : ' All profiles';
			photos = (x_photo=='Yes') ? 'Yes' : 'No';
			
			if (document.getElementById('x_photos')) document.getElementById('x_photos').value = x_photo
			if (document.getElementById('photos_only')) document.getElementById('photos_only').innerHTML = photos_only
			if (document.getElementById('img_photos_only')) document.getElementById('img_photos_only').src = (document.getElementById('photos_only').innerHTML==' Photo profiles only') ? 'assets/images/chk_2.png' : 'assets/images/chk_0.png'			
			
			if (document.getElementById('x_age')) document.getElementById('x_age').innerHTML = getCookie("search_age")
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = getCookie("search_miles")
			if (document.getElementById('miles')) document.getElementById('miles').value = getCookie("search_miles")
			if (document.getElementById('so_01')) {
				for (s=1;s<=5;s++) {
					//document.getElementById('so_0'+s).style.display='none'
				}
			}
		}

		function browse_cat_all() {
			if (getCookie('cat') == 'all') {
				setCookie("search_gender",'Male Sugar Baby')
				setCookie("search_age",'80')
				setCookie("search_miles",'2500')
				setCookie("search_photos", 'No')
				setCookie("cat", 'all')
				document.getElementById('search_filter').style.display='block'
				document.getElementById('x_photos').innerHTML = 'No'
				if (document.getElementById('x_gender')) document.getElementById('x_gender').innerHTML = getCookie("search_gender")
				if (document.getElementById('x_age')) document.getElementById('x_age').innerHTML = getCookie("search_age")
				if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = getCookie("search_miles")
				if (document.getElementById('miles')) document.getElementById('miles').value = getCookie("search_miles")
				for (s=1;s<=5;s++) {
					document.getElementById('so_0'+s).style.display='block'
				}
			}
		}

		function browse_cat_local() {
			setCookie("cat", 'local')
			setCookie('search_miles', '100')
			if(!getCookie('search_photos')) setCookie('search_photos', 'No')
			document.getElementById('search_filter').style.display='block'
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = getCookie('search_miles')
			if (document.getElementById('miles')) document.getElementById('miles').value = getCookie('search_miles')
			for (s=1;s<=5;s++) {
				document.getElementById('so_0'+s).style.display='block'
			}
		}

		function browse_cat_new() {
			setCookie("cat", 'new')
			setCookie('search_miles', '2500')
			if(!getCookie('search_photos')) setCookie('search_photos', 'No')
			document.getElementById('search_filter').style.display='block'
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = getCookie('search_miles')
			if (document.getElementById('miles')) document.getElementById('miles').value = getCookie('search_miles')
			for (s=1;s<=5;s++) {
				document.getElementById('so_0'+s).style.display='block'
			}
		}
		function browse_cat_new_local() {
			setCookie("cat", 'new_local')
			setCookie('search_miles', '100')
			if(!getCookie('search_photos')) setCookie('search_photos', 'No')
			document.getElementById('search_filter').style.display='block'
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = getCookie('search_miles')
			if (document.getElementById('miles')) document.getElementById('miles').value = getCookie('search_miles')
			for (s=1;s<=5;s++) {
				document.getElementById('so_0'+s).style.display='block'
			}
		}

		function show_options() {
			setCookie('search_miles', (Math.round(getCookie('search_miles')/10))*10)
			if (document.getElementById('x_miles')) document.getElementById('x_miles').innerHTML = getCookie("search_miles")
			document.getElementById('search_filter').style.display='block'
			document.getElementById('x_gender').innerHTML = getCookie("search_gender")
			document.getElementById('x_photos').innerHTML = getCookie("search_photos")
			if (document.getElementById('so_01')) {
				for (s=1;s<=5;s++) {
					document.getElementById('so_0'+s).style.display='block'
				}
			}
		}

		function hide_options() {
			if (document.getElementById('so_01')) {
				for (s=1;s<=5;s++) {
					document.getElementById('so_0'+s).style.display='none'
				}
			}
		}
		
		setTimeout('init_nav()',100)
		var acc=getCookie('zipcode')
		if (!acc) {
			setTimeout('get_zip()',1000)
		} else {
			if (document.getElementById('zip')) document.getElementById('zip').value=acc
		}

	function fix_wrapper_height() {
		document.getElementById('wrapper').style.height='100%'
	}
	
	function inc_wrapper_height() {
		document.getElementById('section').style.height='800px'
		document.getElementById('wrapper').style.height='100%'
	}
