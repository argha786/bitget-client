import React from "react";
import "../css/Payment.css"

import Bitcoin from "../Assets/BitcoinWithdrawal.jpeg"
import Bank from "../Assets/BankWithdrawal.jpeg"
import { Link } from "react-router-dom";

import ParticleAnimation from "./components/ParticleAnimation";
import "../css/Account.css"
export default function Withdrawal() {
    return (
        <div className="payment account" style={{ "height": "100vh" }}>
        <ParticleAnimation/>
            <h2>Withdrawal</h2>
            <br />
            <div className="options" >
                <Link to="/bitcoinwithdrawal">
                    <img src={Bitcoin} alt="BitcoinWithdrawal"/>
                </Link>
                <Link to="/paypal">
                    <img src="https://thumbs.dreamstime.com/b/paypal-logo-paypal-logo-white-background-vector-format-avaliable-124289807.jpg" alt="Paypal" />
                </Link>
                <Link to="bankwithdrawal">
                    <img src={Bank} alt="BankWithdrawal" />
                </Link>
            </div>
        </div>
    );
}