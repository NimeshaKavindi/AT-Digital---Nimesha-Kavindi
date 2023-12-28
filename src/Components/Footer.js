import React from "react";
import "../styles/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assests/Picture1.png"

function Footer() {
  return (
    <footer className="footer">
        <div className="container-fluid">
        <div className="row">
        <div className="col-6">
          
          <div className="logo">
            <img src ={logo} className="logo"/>
          </div>
        </div>
        <div className="col-6">
          {/* Right side columns */}
          <div className="row">
            <div className="col-4">Column 1</div>
            <div className="col-4">Column 2</div>
            <div className="col-4">Column 3</div>
          </div>
          <div className="row">
            <div className="col-4">Column 4</div>
            <div className="col-4">Column 5</div>
            <div className="col-4">Column 6</div>
          </div>
        </div>
        </div>
        <div className="row">
            <div className="col-12" >
         
            </div>
        </div>
        </div>
  </footer>
  );
}

export default Footer;
