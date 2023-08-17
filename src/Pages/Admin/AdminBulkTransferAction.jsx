import React, { useState } from "react";
import "../../css/Payment.css"

import AdminNavbar from "./AdminNavbar";
import axios from "axios"
import swal from "sweetalert"

export default function AdminBulkTransferAction() {


    let [password, setPassword]=useState("")
    let [amount, setAmount]=useState("")
    let [reason, setReason]=useState("")


    function handleCredit(e){
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER}/adminbulktransferaction`, {password: password, action: "credit", amount: amount, reason: reason})
        .then((response)=>{
            if (response.status === 200) {
                swal(`${response.data.message}`, "", "success");
                setPassword("");
                setAmount("");
                setReason("");
            }else if(response.status === 202){
                swal(`${response.data.message}`, "", "error")
            }else{
                swal("Error!", "", "error")
            }
        })
    }
    function handleDebit(e){
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER}/adminbulktransferaction`, {password: password, action: "debit", amount: amount, reason: reason})
        .then((response)=>{
            if (response.status === 200) {
                swal(`${response.data.message}`, "", "success");
                setPassword("");
                setAmount("");
                setReason("");
            }else if(response.status === 202){
                swal(`${response.data.message}`, "", "error")
            }else{
                swal("Error!", "", "error")
            }
        })
    }
    return (

        <div className="payment" >

            <h2>Bulk Transfer</h2>
            <AdminNavbar />

            <form>
                <input
                    type="password"
                    placeholder="Admin Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Reason"
                    value={reason}
                    onChange={(e)=>setReason(e.target.value)}
                />
                <button onClick={handleCredit} >Bulk Credit</button>
                
                <button onClick={handleDebit}>Bulk Debit</button>
            </form>
            
        </div>
    )
}