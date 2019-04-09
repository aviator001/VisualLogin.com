	var m1=0
	var m2=1
	var t1
	var t2
	var bg1=3
	var bg2=3
	
	var html = document.documentElement;
	var magic1=document.createElement('magic1')
	var magic2=document.createElement('magic2')
	magic1.style.cssText="border-radius:4px;box-shadow:0 0 4px #0093D9 inset, 0 10px 50px RGBA(0,0,0,0.5);position:absolute;background:url(assets/images/mb6.png) center center;background-size:cover;height:"+magic_h+";width:"+magic_w+";top:0;left:0;;top:0;left:0;right:0;margin:auto;z-index:9999999999999;cursor:hand;cursor:pointer;opacity:1"
	magic2.style.cssText="border-radius:4px;box-shadow:0 0 4px #0093D9 inset;position:absolute;background:url(assets/images/mb5.png) center center;background-size:cover;height:"+magic_h+";width:"+magic_h+";top:0;left:0;right:0;margin:auto;z-index:9999999999999;cursor:hand;cursor:pointer;opacity:1"
	
	magic1.id='magic1'
	magic2.id='magic2'

	if (start_magic) {
		html.appendChild(magic1)
		html.appendChild(magic2)
		setTimeout('magicUP()',100)
		setTimeout('magicDN()',1000)
	}
	function magicUP() {
		magic1.style.opacity=m1
		magic2.style.opacity=m2
		if (m1<1) {
			m1=m1+0.01
			m2=m2-0.01
			t1=setTimeout('magicUP()',1)
			magic1.style.width=magic_w+m1*1 + 'px'
			magic2.style.height=magic_h+m1*1 + 'px'
			magic1.style.background="url(assets/images/mb" + bg1 + ".png)" 
			magic2.style.background="url(assets/images/mb" + bg2 + ".png)"
		} else {
			clearTimeout(t1)
			if (bg1 < 8) {
				bg1++
			} else {
				bg1=3
			}
			magicDN()
		}
	}
	function magicDN() {
		magic1.style.opacity=m1
		magic2.style.opacity=m2
		if (m1>0) {
			m1=m1-0.01
			m2=m2+0.01
			t2=setTimeout('magicDN()',5)
			magic1.style.background="url(assets/images/mb" + bg1 + ".png)"
			magic2.style.background="url(assets/images/mb" + bg2 + ".png)"
			magic1.style.width=magic_w-m1*1 + 'px'
			magic2.style.height=magic_w-m1*1 + 'px'
		} else {
			clearTimeout(t2)
			if (bg1 < 8) {
				bg1++
			} else {
				bg1=3
			}
			magicUP()
		}
	}