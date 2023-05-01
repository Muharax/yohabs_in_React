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
                    <Link to="/home">Matrix</Link>
                    <Link to="/home">Zdjęcia</Link>
                    <Link to="/home">F5</Link>
                    <Link to="/home">Kontakt</Link>
                    <Link to="/home">SkyNET</Link>
                </nav>
            </div>

            <div>
                <Link to="/logowanie"><button className={classes.btn1}>Logowanie</button></Link>
            </div>

        </div>
    );
}



export default MainNavigation;