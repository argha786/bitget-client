import React from "react";
import "../../css/Actions.css"

import Order from "../../Assets/Order.png"
import Pay from "../../Assets/Pay.png"
import Pay2 from "../../Assets/Pay2.png"

import USD from "../../Assets/USD.png"

export default function Actions(){
    return(
        <div className="actions" >

            <div className="actionCard" >
                <img src={Order} alt="Order"/>
                <h1>Sign Up</h1>
            </div>
            <div className="actionCard" >
                <img src={Pay} alt="pay" />
                <h1>Fund Receive/Transfer globally</h1>
            </div>
            <div className="actionCard" >
                <img src={Pay2} alt="pay" />
                <h1>Activate Debit Card</h1>
            </div>
            <div className="actionCard" >
                <img src={USD} alt="USD" />
                <h1>Withdraw funds to bank/bitcoin and paypal</h1>
            </div>
        </div>
    );
}