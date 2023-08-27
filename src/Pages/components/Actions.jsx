import React from "react";
import "../../css/Actions.css"

import Order from "../../Assets/Order.png"
import Pay from "../../Assets/Pay.png"
import Pay2 from "../../Assets/Pay2.png"

import USD from "../../Assets/USD.png"
import Bank from "../../Assets/BankWithdrawal2.png"
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
                <h1>Automatic Trade</h1>
            </div>
            <div className="actionCard" >
                <img src={USD} alt="USD" />
                <h1>Exciting gifts and referral.</h1>
            </div>
            <div className="actionCard" >
                <img src={Bank} alt="USD" />
                <h1>Withdrawal</h1>
            </div>
        </div>
    ); 
}