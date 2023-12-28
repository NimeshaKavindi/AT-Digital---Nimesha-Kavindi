import React from "react";
import "../styles/navBar.css";
import logo from "../assests/Picture1.png"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <img src= {logo}  className="logo"/>
                </span>
                
            </div>
        </nav>
    );
}

export default NavBar;
