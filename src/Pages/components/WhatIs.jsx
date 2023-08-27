import React from "react";
import "../../css/WhatIs.css"

import Bitcoin from "../../Assets/Bitcoin.png"
import "../../css/Payment.css"
import { Link } from "react-router-dom"

export default function WhatIs() {
    return (
        <div className="whatIs" id="whatIs">
            <div className="whatIsContent" >
                <h1>WHAT IS BITGET INVESTMENT   ?</h1>
                <h3>Bitget Investment is an Automatic Trading and Investment Platform, people from different countries can invest their crypto currency and get daily profit easily. We do invest in various sectors after having established in 2018. Bitget investment provides advanced trading technology like Algo trading systems and Super Systems also offers inclusive platforms for investors and traders of all levels. Also we do Invest on BlockChain Technology and Crypto Currency. Now a days also we are doing Real Estate Projects in Dubai. By joining Bitget Investment, investors can become a part of us and can start a profitable investment for future.</h3>
                <img src={Bitcoin} alt="Bitcoin" />
            </div>
            <Link to="/signup" style={{ "width": "100%" }}>
                <button className="customButton">Sign Up</button>
            </Link>
        </div>
    );
}