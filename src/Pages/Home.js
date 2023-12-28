import React from "react"
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
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
                {/* Content for the box goes here */}
            </div>

        <Footer/>

    </div>
    





   );


}

export default Home;