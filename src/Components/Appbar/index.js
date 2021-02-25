import React from "react";
import {Link} from "react-router-dom"
import "./styles.css"
import {AppBar, Toolbar} from "@material-ui/core";
export default function NavBar(){
    
    return <AppBar position="sticky" style={{backgroundColor:"#323232", padding:"0.75rem 0.25rem", textAlign:"left"}}>
    <Toolbar>
    <span className="app-bar-title"><Link to="/">Krishna Mohan</Link></span>
    
    <ul className="app-bar-links">
        <li className="app-bar-link">
            <Link to="#personal">About</Link>
        </li>
        <li className="app-bar-link">
            <Link to="#academics">Academics</Link>
        </li>
        <li className="app-bar-link">
        <Link to="#skills">Skills</Link>
        </li>
        <li className="app-bar-link">
            <Link to="#projects">Projects and Trainings</Link>
        </li>
    </ul>
    </Toolbar>
    </AppBar>
}