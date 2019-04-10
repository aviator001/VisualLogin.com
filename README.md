# VisualLogin.com
Pattern based login - for all your sites with one password

				
		
<h2><b>Summary</b><h2>
<p>Visual login provides a mechanism to authenticate a user using just his user name or email or mobile number, and a unique user created pattern instead of a password.</p>

<h2><b>Objective</b></h2>
<p>Providing a convenience to the user by not requiring the user to remember their password each time they want to login on the site that provides this mechanism. The biggest advantage to users is that they will no longer be required to remember multiple usernames and passwords.</p>

<h2><b>High level steps</b></h2>
<p>First time use users will be required to register a pattern with vilogin.com, in lieu of their password. This pattern created by a user will be used on multiple websites that employ the vilogin service. Essentially, from the end-user perspective, the user is exchanging their passwords for multiple sites with a single pattern, which will now be accepted by any website that is vilogin ready (or enabled).</p>
<p>Once an account is authenticated via a sms code sent to the user’s mobile phone, the account will then be activated and will be available for use for authentication purposes across an unlimited number of websites, such as email service providers, social networks, classifieds, dating sites – just about any site that enforces username/password based authentication over the web.</p>
<p>Vilogin will act as a convenience service layer between online service providers and end users, and will auto fill the challenge part of the login process (example the username or email) and display a grid to the user on which the user will use his pointing device to connect the dots to replicate their pattern.</p>
<p>Following authentication, the vilogin.com api will be used by the website to log the user in</p>

<h2><b>Existing patents and niche</b></h2>
<p>Authentication via pattern has already been patented by us patent no wo2001077792a2 and has been re-patented as a method with an improvement over the first method (us patent no us20060206918), by way of adding an extra layer of security by authentication the user with a username and password each time the user authenticates himself using a pattern. The pattern is also encoded before transmission to the server.</p>
<p>This really completely defeats the purpose of pattern authentication, based on the declared objectives of using such system:</p>
<p>Providing a convenience to the user by not requiring the user to remember their password each time they want to login on the site that provides this mechanism.</p>
<p>Making the user authenticate the pattern with their login/password, is not only counterproductive, but is also idiotic at best, and borderline retarded at worst.</p>

<h2><b>Advantages</b></h2>
<h3>Security</h3>
<p>1. We are a service that provides a pattern based authentication mechanism for users across multiple websites that choose to offer this service. We provide apis that interact with the user on one end and the application layer of the service provider on the other end.</p>
<p>2. We offer several additional layers of security for the user. During registration, we confirm the user’s identity (to circumvent identity theft) by forcing the user to confirm a verification code sent to the email address on file.</p>
<p>3. Upon successful code verification, we require the registration of the users mobile phone to their visual login account for optional identity verification as an added layer of security during future pattern authentication sessions (instead of additional username/password verification)</p>
<p>4. We streamline and standardize the login user experience across all sites by using the users mobile phone number as a primary identification/challenge token. Behind the scenes, this data is then used to recall and set either the email address or login name as the first data entity in the login process. The user now has to no longer keep track of and guess if the login text box for any given site expects a email address or a login name. User doesn’t have to remember their password either. The pattern does it all.</p>
<p>5. Additional security during each login attempt. The user may also elect to be verified via a sms code required during each login, along with just pattern entry.</p>
<p>6. We can also store level 2 data such as addresses, name, age, cc info etc. This may be programmatically provided to the site in question, based on set preferences and adequate permissions.</p>
<p>7. For extra security, our patterns are 3 dimensional – which means that in addition to storing 2d pattern data on the xy axis, we also store time as the 3rd dimensions for each leg or the grid as a whole. This is especially important in public environments where others may see and try to replicate your grid. To circumvent this, we also store time based data for each leg, such as the speed of drawing each leg – or – the length of time paused between legs. This could be static (in seconds) or as a ratio of total time.</p>
<h3>Responsive Design</h2>
<p>Works on your PC, tablet and mobile phone. All platforms supported.</span>
<h3>QUICK Turn AROUND</h3>
<p>Easy to use API - Integrate within hours</span>
<h3>User Experience</h3>
<p>Provides a rich user experience - increase your conversions</span>
<h3>Light and Nimble</h3>
<p>Extremely light weight - Written in PHP/MySQL, it barely adds any increase in CPU load.</p>
<h2>API</h2>
<p>
	
...

</p>
<h2>Screenshots</h2>
<img src="https://github.com/aviator001/VisualLogin.com/blob/master/images/bg1.png">
<img src="https://github.com/aviator001/VisualLogin.com/blob/master/images/b1.png">
<img src="https://github.com/aviator001/VisualLogin.com/blob/master/images/b2.png">
<img src="https://github.com/aviator001/VisualLogin.com/blob/master/images/b3.png">
<img src="https://github.com/aviator001/VisualLogin.com/blob/master/images/b4.png">
<img src="https://github.com/aviator001/VisualLogin.com/blob/master/images/b5.png">
<img src="https://github.com/aviator001/VisualLogin.com/blob/master/images/b6.png">
