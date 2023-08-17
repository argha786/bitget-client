import React, { useState } from "react";
import "../css/Payment.css"

import ParticleAnimation from "./components/ParticleAnimation";
export default function Support(){
    let [yourEmail, setYourEmail]=useState(JSON.parse(localStorage.getItem("data")).email);

    return(
        <div className="payment" >
            <ParticleAnimation/>
            <h2>Submit a request</h2>
            <form>
                <label>Subject</label>
                <input
                    type="text"
                    placeholder="Subject"
                />
                <label>Your email address</label>
                <input
                    type="email"
                    placeholder="Your email address"
                    value={yourEmail}
                    onChange={(e)=>{
                        setYourEmail(e.target.value)
                    }}
                />

                <label>Description</label>
                <textarea
                    placeholder="Description"
                />
                <label>Attachments</label>
                <input

                    type="file"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}