import React from "react";
import "../styles/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assests/Picture1.png"

function Footer() {
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row align-items-start">
                <div className="col-6" id="first">
                
                    <div className="logo">
                        <img src ={logo} className="logo"/>
                    </div><br/>
                    <div className="text">
                        <p className="content">
                            Your goal is our target. Not anything in between. We use<br/>
                            online marketing platforms and tools to achieve single<br/>
                            objective - your business results.
                       </p>
                    </div>
                
                </div>
                <div className="col-6" id="second">

                    <div className="row technologies-service">
                        <div className="col-4">
                            <div><p className="technologies-title">Our Technologies</p></div>
                            <div><p className="technologies-list">React Js</p></div>
                            <div><p className="technologies-list">Gatsby</p></div>
                            <div><p className="technologies-list">NextJS</p></div>
                            <div><p className="technologies-list">NodeJS</p></div>
                            <div><p className="technologies-list">GraphQL</p></div>
                            <div><p className="technologies-list">Laravel</p></div>

                            
                        </div>

                        <div className="col-4">
                            <div><p className="technologies-title">Our Services</p></div>
                            <div><p className="technologies-list">Social media Marketing</p></div>
                            <div><p className="technologies-list">Web & Mobile App Development</p></div>
                            <div><p className="technologies-list">Data & Analytics</p></div>
                            <div><p className="technologies-list">Google Marketing solutions</p></div>
                            <div><p className="technologies-list">Search Engine Optimization</p></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="col-12">
                <div className="footer-bottom">
                    <br/><hr className="footer-line" />
                    <div className="text"></div><p className="privacy-text">Privacy | Terms & Conditions</p>
                </div>
            </div>
        </div>
  </footer>
  );
}

export default Footer;
