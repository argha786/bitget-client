import React from "react";
import axios from "axios";

import "../../css/AdminActivatesAllCards.css"
import swal from "sweetalert"
export default function AdminApproveCard(props) {


    // userId={element.userId}
    // fName={element.fName}
    // lName={element.lName}
    // email={element.email}
    // dob={element.dob}
    // address={element.address}
    // postalCode={element.postalCode}
    // country={element.country}

    function handleApprove(e){
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER}/adminapproveaccount`, {userId: props.userId})
        .then(async (response)=>{
            if (response.status === 200) {
                swal(`${response.data.message}`, "", "success")
                await props.clickFunction();
            }
        })
    }

    function handleDisapprove(e){
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER}/admindisapproveaccount`, {userId: props.userId})
        .then(async (response)=>{
            if (response.status === 200) {
                swal(`${response.data.message}`, "", "success")
                await props.clickFunction();
            }
        })
    }

    return (
        <div style={{ "border": "2px solid orange", "padding": "4px", "marginBottom": "11px" }} className="adminActivatesAllCards" >

            <div>First Name: <p>{props.fName}</p></div>
            <div>Last Name: <p>{props.lName}</p></div>
            <div>Email: <p>{props.email}</p></div>
            <div>Date of birth: <p>{props.dob}</p></div>
            <div>Address: <p>{props.address}</p></div>
            <div>Postal Code: <p>{props.postalCode}</p></div>
            <div>Country: <p>{props.country}</p></div>
            <br/>
            <div>Image: <a href={props.image} target="_blank" rel="noreferrer">View image</a></div>
            <div>ID: <a href={props.Id} target="_blank" rel="noreferrer">View ID</a></div>
            <br/>
            <div>
                <button onClick={handleApprove} >Approve Account</button>
                <button onClick={handleDisapprove}>Disapprove Account</button>
            </div>



        </div>
    )
}