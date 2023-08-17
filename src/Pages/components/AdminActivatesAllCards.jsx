import React, { useState } from "react";
import axios from "axios";

import "../../css/AdminActivatesAllCards.css"
import swal from "sweetalert"
export default function AdminActivatesAllCards(props) {

    let [primeNumber, setPrimeNumber] = useState(props.primeData.cardNumber);
    let [primeMonth, setPrimeMonth] = useState(props.primeData.expiryMonth);
    let [primeYear, setPrimeYear] = useState(props.primeData.expiryYear);
    let [primeCvv, setPrimeCvv] = useState(props.primeData.cvv);
    
    let [classicNumber, setClassicNumber] = useState(props.classicData.cardNumber);
    let [classicMonth, setClassicMonth] = useState(props.classicData.expiryMonth);
    let [classicYear, setClassicYear] = useState(props.classicData.expiryYear);
    let [classicCvv, setClassicCvv] = useState(props.classicData.cvv);

    let primeData = {
        userId: props.userId,
        cardName: "prime",
        cardNumber: primeNumber,
        expiryMonth: primeMonth,
        expiryYear: primeYear,
        cvv: primeCvv
    }
    let classicData = {
        userId: props.userId,
        cardName: "classic",
        cardNumber: classicNumber,
        expiryMonth: classicMonth,
        expiryYear: classicYear,
        cvv: classicCvv
    }
    function handlePrimeCardUpdate(e) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER}/updatecarddata`, primeData )
        .then((response)=>{
            if (response.status === 200) {
                swal(`${response.data.message}`, "", "success")
            }else if (response.status === 202) {
                swal(`${response.data.message}`, "", "error")
            }
        })
    }
    function handleClassicCardUpdate(e) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER}/updatecarddata`, classicData )
        .then((response)=>{
            if (response.status === 200) {
                swal(`${response.data.message}`, "", "success")
            }else if (response.status === 202) {
                swal(`${response.data.message}`, "", "error")
            }
        })
    }


    return (
        <div style={{ "border": "2px solid orange", "padding": "4px", "marginBottom": "11px" }} className="adminActivatesAllCards" >

            <div>First Name: <p>{props.fName}</p></div>
            <div>Last Name: <p>{props.lName}</p></div>
            <div>Email: <p>{props.email}</p></div>
            <div>Image: <a href={props.image} target="_blank" rel="noreferrer">View image</a></div>
            <div>ID: <a href={props.Id} target="_blank" rel="noreferrer">View ID</a></div>
            <br />
            <div className="actionButton">
                <div>Update Prime Master Card</div>
                <input
                    placeholder="Card Number "
                    value={primeNumber}
                    onChange={(e) => setPrimeNumber(e.target.value)}
                />
                <input
                    placeholder="Expiry Month"
                    value={primeMonth}
                    onChange={(e) => setPrimeMonth(e.target.value)}
                />
                <input
                    placeholder="Expiry Year"
                    value={primeYear}
                    onChange={(e) => setPrimeYear(e.target.value)}
                />
                <input
                    placeholder="CVV"
                    value={primeCvv}
                    onChange={(e) => setPrimeCvv(e.target.value)}
                />
                <button onClick={handlePrimeCardUpdate} >Update</button>
            </div>
            <div className="actionButton">
                <div>Update Classic Master Card</div>
                <input
                    placeholder="Card Number "
                    value={classicNumber}
                    onChange={(e)=>setClassicNumber(e.target.value)}
                />
                <input
                    placeholder="Expiry Month"
                    value={classicMonth}
                    onChange={(e)=>setClassicMonth(e.target.value)}
                />
                <input
                    placeholder="Expiry Year"
                    value={classicYear}
                    onChange={(e)=>setClassicYear(e.target.value)}
                />
                <input
                    placeholder="CVV"
                    value={classicCvv}
                    onChange={(e)=>setClassicCvv(e.target.value)}
                />
                <button onClick={handleClassicCardUpdate} >Update</button>
            </div>

            <br />
            <div className="actionButton" >
                <div>Prime Master Card <p>(Status: {props.prime})</p></div>
                {(props.prime === "Pending" || props.prime === "Inactive")
                    ? <button onClick={async () => {
                        await axios.post(`${process.env.REACT_APP_SERVER}/adminactivatedeactivatecontrol`, { userId: props.userId, cardName: "prime", action: "activate" })
                        await axios.post(`${process.env.REACT_APP_SERVER}/adminactivatedeactivatecontrol`, { userId: props.userId, cardName: "classic", action: "deactivate" })
                        await props.clickFunction();
                    }} >Activate</button>
                    : <button style={{ "color": "#DF2D07", "backgroundColor": "black" }} >Activated</button>
                }
                {(props.prime === "Approved" || props.prime === "Inactive")
                    ? <button onClick={async () => {
                        await axios.post(`${process.env.REACT_APP_SERVER}/adminactivatedeactivatecontrol`, { userId: props.userId, cardName: "prime", action: "pending" })
                        await props.clickFunction();
                    }} >Await</button>
                    : <button style={{ "color": "#DF2D07", "backgroundColor": "black" }} >Pending</button>
                }
                {(props.prime === "Pending" || props.prime === "Approved")
                    ? <button onClick={async () => {
                        await axios.post(`${process.env.REACT_APP_SERVER}/adminactivatedeactivatecontrol`, { userId: props.userId, cardName: "prime", action: "deactivate" })
                        await props.clickFunction();
                    }} >Deactivate</button>
                    : <button style={{ "color": "#DF2D07", "backgroundColor": "black" }} >Deactivated</button>
                }
            </div>
            <div className="actionButton" >
                <div>Classic Master Card <p>(Status: {props.classic})</p></div>

                {(props.classic === "Pending" || props.classic === "Inactive")
                    ? <button onClick={async () => {
                        await axios.post(`${process.env.REACT_APP_SERVER}/adminactivatedeactivatecontrol`, { userId: props.userId, cardName: "classic", action: "activate" })
                        await axios.post(`${process.env.REACT_APP_SERVER}/adminactivatedeactivatecontrol`, { userId: props.userId, cardName: "prime", action: "deactivate" })
                        await props.clickFunction();

                    }} >Activate</button>
                    : <button style={{ "color": "#DF2D07", "backgroundColor": "black" }} >Activated</button>
                }
                {(props.classic === "Approved" || props.classic === "Inactive")
                    ? <button onClick={async () => {
                        await axios.post(`${process.env.REACT_APP_SERVER}/adminactivatedeactivatecontrol`, { userId: props.userId, cardName: "classic", action: "pending" })
                        await props.clickFunction();
                    }} >Await</button>
                    : <button style={{ "color": "#DF2D07", "backgroundColor": "black" }} >Pending</button>
                }
                {(props.classic === "Pending" || props.classic === "Approved")
                    ? <button onClick={async () => {
                        await axios.post(`${process.env.REACT_APP_SERVER}/adminactivatedeactivatecontrol`, { userId: props.userId, cardName: "classic", action: "deactivate" })
                        await props.clickFunction();
                    }} >Deactivate</button>
                    : <button style={{ "color": "#DF2D07", "backgroundColor": "black" }} >Deactivated</button>
                }
            </div>
        </div>
    )
}