export default function Regsiter(){

    return(

<>
<section class="containers forms">
		

        <div class="form signup">
            <div class="form-content">
                <header>CREATE AN ACCOUNT</header>
                <form action="#" method="post">
                    <div class="field input-field" method="post">
                        <input type="email" placeholder="Email" name="email" class="input"></input>
                    </div>

                    <div class="field input-field">
                        <input type="password" placeholder="Create password" name="password"class="password"></input>
                    </div>

                    <div class="field input-field">
                        <input type="password" placeholder="Confirm password" name="password" class="password"></input>
                        <i class='bx bx-hide eye-icon'></i>
                    </div>

                    <div class="field button-field"> 
                        <button type="submit" name="submit">Signup</button>
                    </div>
                </form>

                <div class="form-link">
                    <span>Already have an account? <a href="#" class="link login-link">Login</a></span>
                </div>
            </div>

            <div class="line"></div>

            <div class="media-options">
                <a href="#" class="field facebook">
                    <i class='bx bxl-facebook facebook-icon'></i>
                    <span>Login with Facebook</span>
                </a>
            </div>

            <div class="media-options">
                <a href="#" class="field google">
                    <img src="#" alt="" class="google-img"></img>
                    <span>Login with Google</span>
                </a>
            </div>

        </div>
    </section>




</>


    )
    
    }