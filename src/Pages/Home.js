import React from "react"
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import hero from "../assests/Hero Image.png";
import "../styles/home.css"

function Home(){
   return(
    <div className="home-container">
        <NavBar/>
            <div className="hero-section">
               <img src ={hero} className="hero-img"/>
            </div>
            <div className="custom-box">
                <div className="custom-text">
                  We Crush Your<br/> Competitors, Goals, And <br/> Sales Records - Without<br/> The B.S.
                </div> 
                <div>
                 <Button/>                   
                </div>

            </div>

        <Footer/>

    </div>
    





   );


}

export default Home;