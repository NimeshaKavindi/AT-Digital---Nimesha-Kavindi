import React from "react";
import "../styles/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assests/Picture1.png"

function Footer() {
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row align-items-start">
                <div className="col-6">
                
                    <div className="logo">
                        <img src ={logo} className="logo"/>
                    </div><br/>
                    <div className="text">
                        <p>
                    Your goal is our target. Not anything in between. We use<br/>
                    online marketing platforms and tools to achieve single<br/>
                    objective - your business results.
                    </p>
                    </div>
                
                </div>
                <div className="col-6">

                    <div className="row technologies-service">
                        <div className="col-4">Our Technologies</div>
                        <div className="col-4">Our Service</div>
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
