
import * as React from "react";
import classes from './MainNavigation.module.css';
import skynet from './skynet.png';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
// import Logowanie from "./links/links";
import { Link } from "react-router-dom";

function MainNavigation(){

    const [state,setState] = React.useState(false);
    let url = "logowanie";

    return (
        <header className={classes.logout}>
            <div className={classes.logow1}>
                <a href="/"><img id="BHH" alt="Nieznany" src={skynet} /></a>
            </div>
            <div>
                <Router>
                <button className={classes.btn1}>
                        <Link to="/logowanie">
                        
                        </Link></button>
                    
                </Router>
                {/* <a href={url}> */}
                    {/* <button className={classes.btn1}>Logowanie</button>         */}
                {/* </a> */}
            </div>

        </header>
    );
}



export default MainNavigation;