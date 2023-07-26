import * as React from "react";
import classes from './MainNavigation.module.css';
import skynet from './skynet.png';
import { Link } from "react-router-dom";

function MainNavigation(){
    return (
        <div className={classes.logout}>
            <div className={classes.logow1}>
                <Link to="/home"><img src={skynet}></img></Link>
            </div>
            <div>
                <nav className="navigationHolder">
                    <Link to="/home">Home</Link>
                    <Link to="/matrix">Matrix</Link>
                    <Link to="/pictures">Zdjęcia</Link>
                    <Link to="/f5">F5</Link>
                    <Link to="/contact">Kontakt</Link>
                    <Link to="/home">SkyNET</Link>
                    <Link to="/test">TEST</Link>
                </nav>
            </div>

            <div>
                <Link to="/logowanie"><button className={classes.btn1}>Logowanie</button></Link>
            </div>

        </div>
    );
}



export default MainNavigation;