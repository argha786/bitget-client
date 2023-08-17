import React, { useState } from "react";
import "../css/Payment.css"

import axios from "axios"
import { useHistory } from "react-router-dom";

export default function AdminLogin() {
    let [adminUsername, setAdminUsername] = useState();
    let [password, setPassword] = useState();

    let history=useHistory();
    localStorage.removeItem("token");
    localStorage.removeItem("data");

    async function handleClick(e) {
        e.preventDefault();
        const adminData = {
            "adminUsername": adminUsername,
            "password": password
        }
        await axios.post(`${process.env.REACT_APP_SERVER}/adminlogin`, adminData)
            .then(async (response) => {
                console.log(response.status);
                if (response.status === 200) {
                    await localStorage.setItem("aToken", response.data.token);
                    await history.push("/admin/home");
                }
            })
    }
    return (
        <div className="payment" >
            
            <form>
                <br />
                <br />
                <h2>Admin Login</h2>
                <input
                    type="text"
                    placeholder="Admin username"
                    onChange={(e) => { setAdminUsername(e.target.value) }}
                    value={adminUsername}
                />
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    value={password}
                />
                <br />
                <button type="submit" onClick={handleClick} >Login</button>
                <br />
            </form>
           
        </div>
    )
}