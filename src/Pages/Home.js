import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import hero from "../assests/Hero Image.png";
import "../styles/home.css"
import web from "../assests/web.png";

function Home(){
   return(
    <div>
        <NavBar/>
        <div className="home-container">

            <div className="hero-section">
                <img src ={hero} className="hero-img"/>
                
                <div className="custom-box">
                    <div className="custom-text">
                    We Crush Your<br/> Competitors, Goals, And <br/> Sales Records - Without<br/> The B.S.
                    </div> 
                    <div className="button-container" >
                    <Button text="GET FREE CONSULTATION" />                   
                    </div>

                </div>
            </div>
            <div className="webDevelop-section">
                    <div className="web-img">
                        <img src={web} alt="Web Development" />
                    </div>
                    <div className="column2">
                     <div className="text-box">
                        <div className="title">Web & Mobile App Development</div><br/>
                        <div className="text">
                            <p>
                            Your web and mobile Apps are pieces of the puzzle to grow your <br/>
                            business. We use frameworks which tailor content and engagement<br/> 
                            methods to respond to different intents shown by your potential <br/>
                            customers who interact with your business online.
                            </p>
                        </div>
                        <Button text="Learn More" style="btn_viewmore"></Button>

                     </div>

                    </div>
            </div>


        </div> 
        <Footer/>

    </div>
    





   );


}

export default Home;