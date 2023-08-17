import React from "react";
import "../../css/Welcome.css"

import MouseScroll from "../components/MouseScroll"
// import Particles from "react-tsparticles";
import BitcoinWelcome from "../../Assets/BitcoinWelcome.png"

export default function Welcome() {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="welcome">
            <div id="tsparticles">
                
            </div>
            <div style={{"textAlign":"center"}} >

                <img src={BitcoinWelcome} alt="Bitcoin" style={{ "width": "100%", }} />
            </div>
            <div className="welcomeMain" >

                <h1>WELCOME TO THE BITGET INVESTMENT OFFICIAL WEBSITE</h1>
                <h3>World’s Most Trusted Investment & Automatic Trading Platform</h3>
                <div style={{ "textAlign": "center" }} >
                    
                    <a href="#whatIs" ><button>LEARN MORE</button></a>
                </div>
                <MouseScroll />
            </div>
        </div>
    );
}