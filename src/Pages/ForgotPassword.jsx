import React, { useState } from "react";
import "../css/Payment.css"

import ParticleAnimation from "./components/ParticleAnimation";
import axios from "axios"
import { useHistory } from "react-router-dom";

export default function ForgotPassword() {

    let history=useHistory()
    let [email, setEmail]=useState();
    function handleClick(e){
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_SERVER}/handleotp`, {email: email})
        .then((response)=>{
            sessionStorage.setItem("otpId", response.data);
            history.push("/user/changepassword")
        })
    }





    return (
        <div className="payment" >
            <ParticleAnimation/>
            <form>
                <h1>ForgotPassword</h1>
                <input
                    placeholder="Enter email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <button onClick={handleClick} >Submit</button>

            </form>
        </div>
    )
}