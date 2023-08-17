import React,{useState} from "react";
import "../../css/Payment.css"

import ParticleAnimation from "../components/ParticleAnimation";
import swal from "sweetalert"
import axios from "axios"
import { useHistory } from "react-router-dom";

export default function Paypal() {

    let [amount, setAmount] = useState();
    let history=useHistory()


    function handleClick(e) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER}/withdrawal`, { userId: JSON.parse(localStorage.getItem("data")).userId, amount: amount })
            .then((response) => {
                if (response.status === 200) {
                    swal("Withdrawal Complete!", "Withdrawal amount has been deducted from your balance.", "success")
                } else if (response.status === 203) {
                    
                    swal({
                        title: "Oops! Your card is inactive!",
                        text: "Your withdrawal is not allowed. Please activate your debit card for withdrawal",
                        icon: "error",
                        button: "Activate Now ",
                    })
                    .then(()=>{
                        history.push("/card");
                    })
                }else if (response.status === 202) {
                    
                    swal(`${response.data.message}`, "", "error")
                }
                
            })
    }



    return (
        <div className="payment" >
            <ParticleAnimation />
            <h2>Withdraw using Paypal</h2>
            <form style={{ "marginTop": "20px" }} >
                <br />
                <br />
                <img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png" alt="Paypal" />
                <input
                    type="text"
                    placeholder="Full Name*"
                />
                <input
                    type="text"
                    placeholder="Paypal Email Address*"
                />
                <input
                    type="text"
                    placeholder="Amount*"
                    value={amount}
                    onChange={(e)=>{
                        setAmount(e.target.value)
                    }}
                />
                <button onClick={handleClick} >Withdraw</button>
                <br />
                <br />
            </form>
        </div>
    )
}