import React, { useState } from "react";
import "../css/Payment.css"

import axios from "axios"
import { useHistory } from "react-router-dom";
import swal from "sweetalert"

import CircularProgress from '@mui/material/CircularProgress';
export default function AdminLogin() {
    let [adminUsername, setAdminUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loginButton, setLoginButton]=useState("Login");

    let history=useHistory();
    localStorage.removeItem("token");
    localStorage.removeItem("data");

    async function handleClick(e) {
        e.preventDefault();
        setLoginButton(<CircularProgress  color="inherit"/>)
        const adminData = {
            "adminUsername": adminUsername,
            "password": password
        }
        await axios.post(`${process.env.REACT_APP_SERVER}/adminlogin`, adminData)
            .then(async (response) => {
                // console.log(response.status)
                setLoginButton("Login")
                if (response.status === 200) {
                    localStorage.setItem("aToken", response.data.token);
                    history.push("/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/home");
                }else{
                    swal(`${response.data.message}`,"","error")
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
                <button type="submit" onClick={handleClick} >{loginButton}</button>
                <br />
            </form>
           
        </div>
    )
}