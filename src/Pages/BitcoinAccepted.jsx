import React from "react";
import "../css/Payment.css"

import BitcoinAcceptedHere from "../Assets/BitcoinAccepted.jpeg"
import QR from "../Assets/Qr.jpeg"
import { useHistory } from "react-router-dom";

import PaymentSecured from "../Assets/PaymentSecured.jpeg"
import ParticleAnimation from "./components/ParticleAnimation";
export default function BitcoinAccepted() {

    let history=useHistory();
    function handleClick(){
        history.push("user/dashboard")
    }
    return (
        <div className="payment">
            <ParticleAnimation/>

            <h2>Bitcoin Accepted</h2>
            <form style={{"marginTop":"40px"}} >

                
                <img src={BitcoinAcceptedHere} alt="BitcoinAccepted" />
                <br/>
                <h2>SCAN OR COPY ADDRESS TO PAY</h2>
                <br/>
                <img src={QR} alt="Qr" />
                <h3>b165f2a9-1497-4260-8844-9bce4c5a54b0</h3>
                <br/>
                <p style={{"color": "#DF2D07"}} >Note: After payment please send the  payment receipt or screenshot to</p>
                <a href="mailto:random@random.com" style={{"color":"#EF9228"}} >random@random.com</a>
                <br/>
                <p>Your debit card will be activated within 24 hours after payment and also you will get back your card activation fees in your account.</p>
                <p>For further information contact at <a href="mailto:random@random.com" style={{"color":"#EF9228"}}>random@random.com</a></p>
                <br/>
                <button style={{"width":"20%", "borderRadius":"20px"}} onClick={handleClick}>My Account</button>
                <br/>
            </form>
            <div style={{ "width": "100%", "textAlign": "center" }} >

                <img style={{ "width": "100%" }} src={PaymentSecured} alt="PaymentSecured" />
            </div>
        </div>
    );
}