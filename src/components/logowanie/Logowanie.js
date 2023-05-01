import React from "react";
import classes from './Logowanie.module.css'


function Logowanie(){
    return(
        <>
        <div className={classes.loginForm}>
            <div>
                <div>
                    Login
                </div>
                <div className={classes.inputLogowanie}>
                    <input type="text" />
                </div>
            </div>

                <div>
                    Hasło
                </div>
                <div className={classes.inputLogowanie}>
                    <input type="password" />
                </div>

                <div className="SignIn">
                    <button className="">Sign In</button>
                </div>

                <div className="ForgotPassword">
                    <a href="#">
                        Forgot Password?
                    </a>
                </div>
        </div>  
        </>
    )
}



export default Logowanie;
