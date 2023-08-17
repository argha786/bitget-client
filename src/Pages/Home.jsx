import React from "react";
import Welcome from "./components/Welcome";
import WhatIs from "./components/WhatIs";
import Actions from "./components/Actions";

import FeaturedIn from "./components/FeaturedIn";
import Reviews from "./components/Reviews";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
// eslint-disable-next-line
import Footer from "./components/Footer";

import Phone from "./components/Phone"

import PaymentSecure from "../Assets/PaymentSecured.jpeg"
export default function Home(){
    return(
        <div>

                  
            <Welcome/>
            <WhatIs/>
            <Actions/>

            <FeaturedIn/>
            <Phone/>
            <Reviews/>
            <Founder/>
            <Contact/>
            {/* <Footer/> */}
            <img src={PaymentSecure} alt="paymentSecure" style={{"width":"100%"}} />

        </div>
    );
}