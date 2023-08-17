import React, { useState } from "react";
import "../css/Payment.css"

import ParticleAnimation from "./components/ParticleAnimation";
export default function Report() {
    let [yourEmail, setYourEmail] = useState(JSON.parse(localStorage.getItem("data")).email);

    let [reportEmail, setReportEmail]=useState()
    return (

        <div className="payment" >
            <ParticleAnimation />
            <h2>Submit a Report</h2>
            <form>
                <label>Your email address</label>
                <input
                    placeholder="Your email address"
                    value={yourEmail}
                    onChange={(e) => {
                        setYourEmail(e.target.value)
                    }}
                />
                <label>Report account email address</label>
                <input
                    placeholder="Report account email address"
                    value={reportEmail}
                    onChange={(e)=>{
                        setReportEmail(e.target.value)
                    }}
                />
                <label>Report Reason</label>
                <textarea
                    placeholder="Report reason"
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