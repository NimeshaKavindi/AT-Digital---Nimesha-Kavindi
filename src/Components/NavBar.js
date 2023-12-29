import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navBar.css'; 
import logo from "../assests/Picture1.png"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        <div className="navbar-brand col-md-8 col-lg-8">
            <img src= {logo}  className="logo"/>
        </div>


        <div className="collapse navbar-collapse col-md-4 col-lg-4" id="navbarSupportedContent">          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#services">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">CONTACT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#careers">CAREERS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
