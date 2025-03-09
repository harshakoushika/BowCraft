export default function Login(){


    return( 
    <>
    

<div class="containers flex">
	  <div class="library-page flex">
		<div class="text">
		  <h1>BOWCRAFT</h1>
		  <p>Love To Craft,</p>
		  <p> Learn With Us.</p>
		</div>
		<form action="#" method="post">
		  <input type="email" name="email" placeholder="Email" required></input>
		  <input type="password" name="password"placeholder="Password" required></input>
		  <div class="link">
			<button type="submit" class="login">Login</button>
			<a href="#" class="forgot">Forgot password?</a>
		  </div>
		  <hr></hr>
		  <div class="button">
			<a href="#">Create new account</a>
		  </div>
		  
		</form>
	  </div>
	</div>
	

    </>

    );



};