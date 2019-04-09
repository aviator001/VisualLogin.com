						
						var lineElem,x,y,posX,posY,startX,startY
						var ln,x_curr,x_prev
						var x = []
						var y = []
						var incX = 37.5
						var incY = 37.5
						var rMax = 3;
						var cMax = 3;
						var pass = ''
						var p=new Array(4)
						var iM, iC, iC2
						var b,c
						
						var dragging=false
						var first=true
						var firstlinedone = false
						var startLine = false
						var ctr=0
						var barlog=''
						var user_prompt 
						var previous
						var x_start=''
						var line
						
						var bar=new Array(16)
						for (r=1; r <=16; r++) {
							bar[r]=new Array(16)
						}

						var mouseDown = 0;
						document.body.onmousedown = function() { 
						  ++mouseDown;
						}
						document.body.onmouseup = function() {
						  --mouseDown;
						}
												bar[1][2] = document.createElement("div")
						bar[1][5] = document.createElement("div")
						bar[1][6] = document.createElement("div")
						bar[2][3] = document.createElement("div")
						bar[2][6] = document.createElement("div")
						bar[2][7] = document.createElement("div")
						bar[3][4] = document.createElement("div")
						bar[3][7] = document.createElement("div")
						bar[3][8] = document.createElement("div")
						bar[4][8] = document.createElement("div")
						bar[1][2].className='bar'
						bar[1][5].className='bar'
						bar[1][6].className='bar'
						bar[2][3].className='bar'
						bar[2][6].className='bar'
						bar[2][7].className='bar'
						bar[3][4].className='bar'
						bar[3][7].className='bar'
						bar[3][8].className='bar'
						bar[4][8].className='bar'
						bar[1][2].style.cssText="top:55px;left:55px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[1][5].style.cssText="top:55px;left:45px;height:100px;width:10px"
						bar[1][6].style.cssText="top:55px;left:50px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[2][3].style.cssText="top:55px;left:155px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[2][6].style.cssText="top:55px;left:145px;height:100px;width:10px"
						bar[2][7].style.cssText="top:55px;left:150px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[3][4].style.cssText="top:55px;left:255px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[3][7].style.cssText="top:55px;left:245px;height:100px;width:10px"
						bar[3][8].style.cssText="top:55px;left:250px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[4][8].style.cssText="top:55px;left:345px;height:100px;width:10px"
						bar[5][6] = document.createElement("div")
						bar[5][9] = document.createElement("div")
						bar[5][10] = document.createElement("div")
						bar[6][7] = document.createElement("div")
						bar[6][10] = document.createElement("div")
						bar[6][11] = document.createElement("div")
						bar[7][8] = document.createElement("div")
						bar[7][11] = document.createElement("div")
						bar[7][12] = document.createElement("div")
						bar[8][12] = document.createElement("div")
						bar[5][6].className='bar'
						bar[5][9].className='bar'
						bar[5][10].className='bar'
						bar[6][7].className='bar'
						bar[6][10].className='bar'
						bar[6][11].className='bar'
						bar[7][8].className='bar'
						bar[7][11].className='bar'
						bar[7][12].className='bar'
						bar[8][12].className='bar'
						bar[5][6].style.cssText="top:155px;left:55px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[5][9].style.cssText="top:155px;left:45px;height:100px;width:10px"
						bar[5][10].style.cssText="top:155px;left:50px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[6][7].style.cssText="top:155px;left:155px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[6][10].style.cssText="top:155px;left:145px;height:100px;width:10px"
						bar[6][11].style.cssText="top:155px;left:150px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[7][8].style.cssText="top:155px;left:255px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[7][11].style.cssText="top:155px;left:245px;height:100px;width:10px"
						bar[7][12].style.cssText="top:155px;left:250px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[8][12].style.cssText="top:155px;left:345px;height:100px;width:10px"
						bar[9][10] = document.createElement("div")
						bar[9][13] = document.createElement("div")
						bar[9][14] = document.createElement("div")
						bar[10][11] = document.createElement("div")
						bar[10][14] = document.createElement("div")
						bar[10][15] = document.createElement("div")
						bar[11][12] = document.createElement("div")
						bar[11][15] = document.createElement("div")
						bar[11][16] = document.createElement("div")
						bar[12][16] = document.createElement("div")
						bar[9][10].className='bar'
						bar[9][13].className='bar'
						bar[9][14].className='bar'
						bar[10][11].className='bar'
						bar[10][14].className='bar'
						bar[10][15].className='bar'
						bar[11][12].className='bar'
						bar[11][15].className='bar'
						bar[11][16].className='bar'
						bar[12][16].className='bar'
						bar[9][10].style.cssText="top:255px;left:55px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[9][13].style.cssText="top:255px;left:45px;height:100px;width:10px"
						bar[9][14].style.cssText="top:255px;left:50px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[10][11].style.cssText="top:255px;left:155px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[10][14].style.cssText="top:255px;left:145px;height:100px;width:10px"
						bar[10][15].style.cssText="top:255px;left:150px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[11][12].style.cssText="top:255px;left:255px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[11][15].style.cssText="top:255px;left:245px;height:100px;width:10px"
						bar[11][16].style.cssText="top:255px;left:250px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg)"
						bar[12][16].style.cssText="top:255px;left:345px;height:100px;width:10px"
						bar[13][14] = document.createElement("div")
						bar[14][15] = document.createElement("div")
						bar[15][16] = document.createElement("div")
						bar[16][15] = document.createElement("div")
						bar[13][14].className='bar'
						bar[14][15].className='bar'
						bar[15][16].className='bar'
						bar[16][15].className='bar'
						bar[13][14].style.cssText="top:355px;left:55px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[14][15].style.cssText="top:355px;left:145px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[15][16].style.cssText="top:355px;left:250px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[16][15].style.cssText="top:355px;left:250px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
						bar[5][2] = document.createElement("div")
						bar[6][3] = document.createElement("div")
						bar[7][4] = document.createElement("div")
						bar[9][6] = document.createElement("div")
						bar[10][7] = document.createElement("div")
						bar[11][8] = document.createElement("div")
						bar[13][10] = document.createElement("div")
						bar[14][11] = document.createElement("div")
						bar[15][12] = document.createElement("div")
						bar[5][2].className='bar'
						bar[6][3].className='bar'
						bar[7][4].className='bar'
						bar[9][6].className='bar'
						bar[10][7].className='bar'
						bar[11][8].className='bar'
						bar[13][10].className='bar'
						bar[14][11].className='bar'
						bar[15][12].className='bar'
						bar[5][2].style.cssText="top:155px;left:55px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"
						bar[6][3].style.cssText="top:155px;left:155px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"
						bar[7][4].style.cssText="top:155px;left:255px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"
						bar[9][6].style.cssText="top:255px;left:55px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"
						bar[10][7].style.cssText="top:255px;left:155px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"
						bar[11][8].style.cssText="top:255px;left:255px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"
						bar[13][10].style.cssText="top:355px;left:55px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"
						bar[14][11].style.cssText="top:355px;left:155px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"
						bar[15][12].style.cssText="top:355px;left:255px;height:137.5px;width:10px;transform:rotate(-135deg);-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg)"

						var html = document.documentElement;
						var iImg = document.createElement('img');
						iImg.src="pattern.png";
						iImg.style.cssText="width:35px;opacity:0.8;margin:10px;border-radius:4px;margin-top:0px; cursor:hand;cursor:pointer"
						iImg.title="Use VisualLogin to Login. Never forget a password again!";
						iImg.className="hastip";
						iImg.addEventListener("mouseup", function(e){
							pattern()
						})
						iM = document.createElement('div');
						iC2 = document.createElement('div');
						iC = document.createElement('div');
						var iT = document.createElement('div');
						var iL = document.createElement('div');
						var tV = document.createElement('div');
						var hijackFB = document.getElementById('pattern_logo')
						hijackFB.style.cssText="margin:10px";
						hijackFB.appendChild(iImg)
						var div=[]
						var i26="i26.png"
						var i26g="i26g.png"
						var i20="i20.png"
						var i20g="i20g.png"
						var i09="i09.png"
						var i09g="i09g.png"
						iC.style.cssText = "display:block;position:absolute;width:100%;height:100%;top:0px;bottom:0px;left:0px;right:0px;margin:auto;z-index:9999;background:url(assets/images/mb2.png) center center;opacity:0.9;box-shadow:inset 2px 2px 10px #000;"
						iT.style.cssText = "cursor:hand;cursor:pointer;display:block;position:absolute;width:400px;height:50px;top:-275px;left:0px;right:0px;margin:auto;z-index:9999"
						iL.style.cssText = "cursor:hand;cursor:pointer;display:block;position:absolute;width:400px;height:50px;top:-210px;left:0px;right:0px;margin:auto;z-index:9999"
						tV.style.cssText = "cursor:hand;cursor:pointer;display:block;position:absolute;width:400px;height:50px;top:400px;left:0px;right:0px;margin:auto;z-index:9999"
						iC2.style.cssText = "display:none;position:absolute;width:400px;height:400px;top:0px;bottom:0px;left:0px;right:0px;margin:auto;z-index:99999;background:#333;opacity:1.5"
						tV.innerHTML="<img onclick='login_pattern()' onmouseover='this.src=i26' onmouseout='this.src=i26g' src='assets/images/i26g.png' style='margin-top:-5px;background:#fcfcfc'><img onclick='register_pattern()' onmouseover='this.src=i20' onmouseout='this.src=i20g' src='assets/images/i20g.png'><img onmouseover='this.src=i09' onmouseout='this.src=i09g' src='assets/images/i09g.png'><img title='Reset and Start Over' class='hastip' onclick='reset_board()' src='assets/images/i11g.png'><img onclick='exit_pattern()' title='Close this and return to the main screen' align=right class='hastip' src='assets/images/x_pink.png'>";
						iT.innerHTML="<span id='iT' style='color:red;font-family:Open Sans Condensed;font-size:32px'>New User Registration</span><br><br><span id='iT' style='color:#f0f0f0;font-family:Open Sans Condensed;font-size:18px'>Enter a Password and draw a pattern. Once done, it will be encrypted and auto saved. Thats it! To login the next time, all you have to do is enter your user name and draw your password. On ANY site that uses VisualLogin. You will nenver have to remember your passwords again. More info? <a href=''>Click Here for Help</a><br></span><br><span style='color:orange;font-family:Open Sans Condensed;font-size:18px'>To draw a pattern, simply click on the first dot and drag mouse over other dots you want to include as part of your pattern,</span>";
						iL.innerHTML="<span id='iL' style='color:#f0f0f0;font-family:Open Sans Condensed;font-size:32px;font-weight:300;color:orange'>Welcome to Visual Login</span><br><br><span style='font-size:18px;color:#f0f0f0;font-family:Open Sans Condensed'>Draw your pattern to login.<br><br>Click on second icon below if you are a new member and wish to register.</span>"
						iM.id="iM"
						iC.id="iC"
						iC.appendChild(bar[1][2])
						iC.appendChild(bar[1][5])
						iC.appendChild(bar[1][6])
						iC.appendChild(bar[2][3])
						iC.appendChild(bar[2][6])
						iC.appendChild(bar[2][7])
						iC.appendChild(bar[3][4])
						iC.appendChild(bar[3][7])
						iC.appendChild(bar[3][8])
						iC.appendChild(bar[4][8])
						iC.appendChild(bar[5][6])
						iC.appendChild(bar[5][9])
						iC.appendChild(bar[5][10])
						iC.appendChild(bar[6][7])
						iC.appendChild(bar[6][10])
						iC.appendChild(bar[6][11])
						iC.appendChild(bar[7][8])
						iC.appendChild(bar[7][11])
						iC.appendChild(bar[7][12])
						iC.appendChild(bar[8][12])
						iC.appendChild(bar[9][10])
						iC.appendChild(bar[9][13])
						iC.appendChild(bar[9][14])
						iC.appendChild(bar[10][11])
						iC.appendChild(bar[10][14])
						iC.appendChild(bar[10][15])
						iC.appendChild(bar[11][12])
						iC.appendChild(bar[11][15])
						iC.appendChild(bar[11][16])
						iC.appendChild(bar[12][16])
						iC.appendChild(bar[13][14])
						iC.appendChild(bar[14][15])
						iC.appendChild(bar[15][16])
						iC.appendChild(bar[5][2])
						iC.appendChild(bar[6][3])
						iC.appendChild(bar[7][4])
						iC.appendChild(bar[9][6])
						iC.appendChild(bar[10][7])
						iC.appendChild(bar[11][8])
						iC.appendChild(bar[13][10])
						iC.appendChild(bar[14][11])
						iC.appendChild(bar[15][12])
						iC.appendChild(bar[16][15])

						iT.style.display='none'
						var mode='login'

						var mc = new Hammer(iC);
						mc.get('pinch').set({ enable: true });
						mc.on("swipe pan press pinch rotate tap doubletap", function(ev) {
							x=ev.deltaX
							y=ev.deltaY
							console.log([ev.srcEvent.type, ev.pointers.length, ev.isFinal, ev.deltaX, ev.deltaY].join("<br>"));
							dragging=true
							//setTimeout('createLine('+startX+','+startY+','+x+','+y+')',10)
						})

						function register_pattern() {
							mode='record'
							iT.style.display='block'
							iL.style.display='none'
							var p = prompt('Must verify your password (One time verification only)')
							if (p != 'admin') {
								jalert('Invalid Password!')
								return false
							}							
							pattern()
						}
						
						function login_pattern() {
							mode='login'
							iT.style.display='none'
							iL.style.display='block'
							pattern()
						}

						function tap(ev) {
							startX=ev.deltaX
							startY=ev.deltaY
						}
						
						function pattern() {
								if (!document.getElementById('user_input').value && !user_prompt) {
									user_prompt=prompt('Please enter your Username or Email or Mobile Number')
									setCookie('user_prompt', user_prompt)
									if (!user_prompt) {
										jalert('Must enter a valid login name|email|mobile value in the login field. Visual Login is a replacement for your password alone')
										return false
									}
								}

							html.appendChild(iM)
							html.appendChild(iC)
							html.appendChild(iC2)
							iC.appendChild(tV)
							iC.appendChild(iT)
							iC.appendChild(iL)
							iC.addEventListener("mousemove", function(e){
								if(startLine){
									x = e.pageX;
									y = e.pageY;
									//setTimeout('createLine(startX,startY,'+x+','+y+')',10)
								}
							})
							var mc = new Hammer(iC);
							mc.get('pinch').set({ enable: true });
								mc.on("touchmove", function(ev) {
								dx=ev.deltaX
								dy=ev.deltaY
								x=x+dx
								y=y+dy
							});
							for (var r=1;r<=4;r++) {
								for (var c=1;c<=4;c++) {
									div[r,c] = document.createElement("div");
									iC.appendChild(div[r,c])
									div[r,c].id=(r-1)*4+c
									div[r,c].style.cssText="cursor:crosshair;margin-left:37.5px;margin-top:37.5px;width:25px;height:25px;border-radius:50px;background:#fff;position:absolute;left:"+(c-1)*100 + "px;top:"+(r-1)*100+"px;box-shadow:inset 1px 0px 5px #000;z-index:999999"
									 
									div[r,c].addEventListener("touchmove", function(e){
										iC2.style.display='none'
										e.target.style.background='orange'
										startLine=true
										x = e.pageX;
										y = e.pageY;
										startX=x
										startY=y
										dragging=true
										x_prev=e.target.id*1
										pass=x_prev+','
									}); 

										div[r,c].addEventListener("", function(e){
										startLine=false
										dragging=false
										e.target.style.background='orange'
										e.target.style.cursor='crosshair'
										iC2.style.display='block'
										pass=pass.substring(0,pass.length-1)
										//Get user name
										var user_name=document.getElementById('user_input').value
										if (mode=='record') {
											//Save new user pattern to database
											var password
											var url = 'x_get_user_password.php?loginx=' + user_name
											var request = $.ajax({
												url: url, 
												type: "GET",
												dataType: "html",
												cache: false,
												success: function(msg) {
													password=msg.trim()
													//Encrypt pattern sequence string with password
													pattern = Aes.Ctr.encrypt(pass, password, 256);
													//Save to database
													var url = 'x_save_pattern.php?loginx=' + user_name + '&password=' + password + '&pattern=' + pattern + '&url=' + 'visualogin.com|demo'
													if (user_name) {
														$.ajax({
															url: url, 
															type: "GET",
															dataType: "html",
															cache: false,
															success: function(msg) {
																	if (!isNaN(msg)) {
																	jalert('New Pattern Saved!')
																	iT.innerHTML="<span style='color:#f0f0f0;font-family:Open Sans Condensed;font-size:32px;font-weight:300;color:#A3D900'>Your pattern was saved successfully.</span><br><br><span style='color:#f0f0f0;font-family:Open Sans Condensed;font-size:24px;font-weight:300;color:#f0f0f0'>Click <a href='javascript:pattern_login()'><span style='color:red'>here</span></a> to return to the login screen where you can return here to login by using your new pattern!</span>"
																}
															}
														})
													}
												}
											})	
										} else {
											//fetch pattern using given user_input
											var user_name=document.getElementById('user_input').value
											var url = 'x_get_pattern.php?loginx=' + user_name
											var request = $.ajax({
												url: url,
												type: "GET",
												dataType: "html",
												cache: false,
												success: function(msg) {
													var data=msg.split('|')
													var pattern=data[0]
													var password=data[1]
													//decrypt it using stored password
													pattern = Aes.Ctr.decrypt(pattern, password, 256);
													//now compare it
													if (pattern==pass) {
														location.href='process_pattern.php?loginx='+user_name
													} else {
														$.confirm({
															theme: 'black',
															confirmButtonClass: 'btn-info',
															cancelButtonClass: 'btn-danger',
															content: 'Invalid Pattern!'
														})
													}
												}
											})	
										}
									});

									div[r,c].addEventListener("mouseover", function(e){
											if ((dragging)) {
												var p=e.target.id*1
												x_curr=p
												x = e.pageX;
												y = e.pageY;
												startX=x
												startY=y
												e.target.style.cursor='crosshair'
												console.log('setting x_curr: '+x_curr)
											if (x_prev){
												if (bar[x_prev*1][x_curr*1]) {
													bar[x_prev*1][x_curr*1].style.display='block'
													barlog = barlog + x_prev + '|' + x_curr + ','
													e.target.style.background='#BFFF00'
													pass=pass+p+','
												} else {
													if (bar[x_curr*1][x_prev*1]) {
														bar[x_curr*1][x_prev*1].style.display='block'
														barlog = barlog + x_prev + '|' + x_curr + ','
														e.target.style.background='#BFFF00'
														pass=pass+p+','
													} 
												}
											} else {
												first=false
												pass=pass+p+','
											}
												x_prev=x_curr
										}
									});
									
									div[r,c].addEventListener("mouseout", function(e){

									});
									
									div[r,c].addEventListener("onmousedown", function(e){
										var pl = pass.substring(0,pass.length-1)
										if (pl.split(',').length > 1) {
											if (previous==x_prev) ended_pattern()
											previous = x_prev
										}
										e.target.style.background='orange'
									});

									div[r,c].addEventListener("click", function(e){
										var pl = pass.substring(0,pass.length-1)
										if (pl.split(',').length > 1) {
											if (previous==x_prev) ended_pattern()
											previous = x_prev
										}
										e.target.style.background='orange'
									});
								}
							}
						}

						function ended_pattern() {
							if (mode=='record') {
								save_pattern()
							} else {
								fetch_pattern()
							}
						}
						
						function pattern_login() {
							history.go(0)
						}
						
						function exit_pattern() {
							history.go(0)
						}

						function reset_board_old() {
							b=barlog.split(',')
							for (i=0;i<b.length;i++) {
								c=b[i].split('|')
								curr=c[1]
								prev=c[0]
								if ((!isNaN(curr))&&(!isNaN(prev))){
									if (bar[prev*1][curr*1]) bar[prev*1][curr*1].style.display='none'
										else bar[curr*1][prev*1].style.display='none'
								}
							}
							barlog=''
							iC2.style.display='none'
							iT.style.display='none'
							iL.style.display='block'
							pass=''
							dragging=false
							first=false
							firstlinedone = false
							startLine = false
							ctr=0
						}

						function reset_board() {
							location.href='login.php?show_login=1'
						}

						function createLine(x1,y1, x2,y2){
							var offY=(y1<y2)? y1:y2;
							var offX=(x1<x2)? x1:x2;
								if (startLine) $('.line').fadeOut(100, function(){ $(this).remove(); });
									dX=0
									dY=0
									if ((posX > 37.5) && (posX <= 60)) {
										var dX=posX-37.5
									}
									if ((posY > 37.5) && (posY <= 60)) {
										var dy=posY-37.5
									}

									x1=last_x
									y1=last_y
									var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
									var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
									var transform = 'rotate('+angle+'deg)';
										line = $('<div>')
										.appendTo('#iC')
										.addClass('line')
										.css({
										  'position': 'absolute',
										  'transform': transform
										})
										.width(length)
										.offset({left: offX, top: offY});
						}

						
					var e_pattern
					function save_pattern() {
						//Save new user pattern to database
						if (!user_prompt) user_prompt=getCookie('user_prompt')
						var user_name=document.getElementById('user_input').value||user_prompt
						var password
						var url = 'x_get_user_password.php?loginx=' + user_name
						var request = $.ajax({
							url: url, 
							type: "GET",
							dataType: "html",
							cache: false,
							success: function(msg) {
								password=msg.trim()
								//Encrypt pattern sequence string with password
								pass=pass.substring(0,pass.length-1)
								e_pattern = Aes.Ctr.encrypt(pass, "admin", 256);
								setCookie('e_pattern',e_pattern)
								//Save to database
								var test = Aes.Ctr.decrypt(e_pattern, "admin", 256)
								var url = 'x_save_pattern.php?loginx=' + user_name + '&password=' + password + '&pattern=' + e_pattern + '&url=' + 'visualogin.com|demo'
								if (user_name) {
									$.ajax({
										url: url, 
										type: "GET",
										dataType: "html",
										cache: false,
										success: function(msg) {
											if (!isNaN(msg)) {
											jalert('New Pattern Saved!')
											iT.innerHTML="<span style='color:#f0f0f0;font-family:Open Sans Condensed;font-size:32px;font-weight:300;color:#A3D900'>Your pattern was saved successfully.</span><br><br><span style='color:#f0f0f0;font-family:Open Sans Condensed;font-size:24px;font-weight:300;color:#f0f0f0'>Click <a href='javascript:pattern_login()'><span style='color:red'>here</span></a> to return to the login screen where you can return here to login by using your new pattern!</span>"
										}}
									})
								}
							}
						})								
					}
						
					function fetch_pattern() {
						//fetch pattern using given user_input
						if (!user_prompt) user_prompt=getCookie('user_prompt')
						var user_name=document.getElementById('user_input').value||user_prompt
						var url = 'x_get_pattern.php?loginx=' + user_name
						var request = $.ajax({
							url: url,
							type: "GET",
							dataType: "html",
							cache: false,
							success: function(msg) {
								var data=msg.split('|')
								var e_pattern=data[0]
								var password=data[1]
								e_pattern=e_pattern.replace(/&plus;/g,'+')
								//decrypt it using password stored in the client sites database
								var enc_pass = Aes.Ctr.decrypt(e_pattern, password, 256);
								//now compare it
								if (enc_pass==pass.substring(0,pass.length-1)) {
									$.alert({
										title: '<font color=#000>Visual Login</font> <font color=#A3D900>Ok</font>',
										content: '<font color=black>Login Successfull! Click OK to continue on to the <font color=#0093D9> Members Home Page',
										confirmButtonClass: 'btn-danger',
										confirm: function(){
											location.href='members_home.php';
										}
									});														
								} else {
									jalert('<font color=red>Login Not Successfull</font> - Invalid Pattern!')
								}
							}
						})							
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

					function getCookie(cname) {
						var name = cname + "=";
						var ca = document.cookie.split(';');
						for(var i=0; i<ca.length; i++) {
						  var c = ca[i].trim();
						  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
						}
						return "";
					}

	/*					Automation?
						c=0
						for(r=1;r<=4;r++) {
							c=c+r;
							for (n=0;n<=2;n++) {
								bar[c+n][c+n+1] = document.createElement("div")
								bar[c+n][c+n+4] = document.createElement("div")
								bar[c+n][c+n+5] = document.createElement("div")
								bar[c+n][c+n+1].className='bar'
								bar[c+n][c+n+4].className='bar'
								bar[c+n][c+n+5].className='bar'
								bar[c+n][c+n+1].style.cssText="top:55px;left:55px;height:100px;width:10px;transform:rotate(-90deg);-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg)"
								bar[c+n][c+n+4].style.cssText="top:55px;left:45px;height:100px;width:10px"
								bar[c+n][c+n+5].style.cssText="top:55px;left:50px;height:137.5px;width:10px;transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-deg)"
							}
							bar[c+3][c+3+4] = document.createElement("div")
							c=c+4;
						} 

						    -   3,4,5
							+/- 1
							+   3,4,5
							
							p + (-5,-4,-3,-1,1,3,4,5) fall between (1 to 16)
						
						for (r=0; r <=3; r++) {
							p[r]=new Array(4)
						}
						
					
						var rules = new Array(16)
						for (r=1; r <=16; r++) {
							rules[r]=new Array(8)
						}
						
						rules[1]=Array(2,5,6)
						rules[2]=Array(1,3,5,6,7)
						rules[3]=Array(2,4,6,7,8)
						rules[4]=Array(3,8,7)
						rules[5]=Array(1,9,6,10,3)
						rules[6]=Array(5,7,9,10,11,1,2,3)
						rules[7]=Array(6,8,10,11,12,2,3,4)
						rules[8]=Array(4,12,7,3,11)
						rules[9]=Array(4,12,5,13,10)
						rules[10]=Array(9,11,5,13,4,6,12,14)
						rules[11]=Array(10,11,6,155,8,14,16)
						rules[12]=Array(8,16,11,7,15)
						rules[13]=Array(9,14,10)
						rules[14]=Array(13,15,10,9,11)
						rules[15]=Array(14,15,11,10,12)
						rules[16]=Array(15,12,11)
	*/
