import React, { useState } from "react";
import "../css/Payment.css"

import "../css/Checkout.css"
// import axios from "axios";
import ParticleAnimation from "./components/ParticleAnimation"

import { CountryDropdown} from 'react-country-region-selector';

export default function Account() {
    let data = JSON.parse(localStorage.getItem("data"));



    let [password, setPassword] = useState("0123456789");
    let [email, setEmail] = useState(data.email);
    let [phone, setPhone] = useState(data.mobile);
    let [postalCode, setPostalCode] = useState();
    let [city, setCity] = useState(data.city);
    let [country, setCountry] = useState(data.country);
    let image=data.image

    return (
        <div className="payment" >

            <h1>Account Settings</h1>
            <ParticleAnimation />
            <form>
                <img src={image} alt="UserImage" />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >First Name</label>
                <input
                    type="text"
                    placeholder="First Name"
                    value={data.fName}
                />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Last Name</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={data.lName}
                />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Account Number</label>
                <input
                    type="text"
                    placeholder="User ID"
                    value={data.accountNumber}
                />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Phone Number</label>
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Postal Code</label>
                <input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => {
                        setPostalCode(e.target.value)
                    }}
                />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >City</label>
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value)
                    }}
                />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Country</label>
                <CountryDropdown
                    value={country}
                    onChange={(val) => setCountry(val)} />
                
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Date of Birth</label>
                <input
                    type="date"
                    style={{"width":"fitContent"}}
                />
                <button>Update profile</button>
            </form>

        </div>
    );
}