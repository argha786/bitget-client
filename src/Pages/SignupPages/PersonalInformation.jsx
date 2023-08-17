import React, { useState } from "react";
import "../../css/Payment.css"
import { CountryDropdown } from 'react-country-region-selector';
import ParticleAnimation from "../components/ParticleAnimation";
import axios from "axios"
import { useHistory } from "react-router-dom"

import swal from "sweetalert";
export default function PersonalInformation() {
    let history = useHistory();
    let [fName, setFName] = useState("");
    let [lName, setLName] = useState("");
    let [dob, setDob] = useState("");
    let [address, setAddress] = useState("");
    let [postalCode, setPostalCode] = useState("");
    let [country, setCountry] = useState("");

    let tempUserId = sessionStorage.getItem("tempUserId")
    let [image, setImage]=useState();
    // eslint-disable-next-line
    let [Id, setId]=useState();
    // eslint-disable-next-line
    let [postImageBase64, setPostImageBase64] = useState();


    function handleClick(e) {
        e.preventDefault();
        //Createing new form data
        const data = new FormData();

        //Apending the image to image json "image is name for the image input" json that is sent is {image: "theImage"}
        data.append('tempUserId', tempUserId);
        data.append('fName', fName);
        data.append('lName', lName);
        data.append('dob', dob);
        data.append('address', address);
        data.append('postalCode', postalCode);
        data.append('country', country);
        data.append('image', image);
        data.append('Id', Id);



        axios.post(`${process.env.REACT_APP_SERVER}/signupstep3`, data)
            .then((response) => {
                if (response.status === 200) {
                    sessionStorage.clear();
                    history.push("/signup/requestsent")
                } else if (response.status === 202) {
                    swal(`${response.data.message}`, "", "error")
                }
            })
    }


    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    function handleFileChange(e) {

        console.log(e.target.files[0]);
        //We get the file in files[0]
        setImage(e.target.files[0]);
        const uploadedFile = e.target.files[0];
        toBase64(uploadedFile)
            .then((res) => {
                // console.log(res)
                setPostImageBase64(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="payment" >
            <ParticleAnimation />
            <h2>Enter your personal information.</h2>
            <form encType="multipart/form-data" method="POST">
                <input
                    type="text"
                    placeholder="First Name"
                    value={fName}
                    onChange={(e) => { setFName(e.target.value) }}

                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lName}
                    onChange={(e) => { setLName(e.target.value) }}

                />
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => { setDob(e.target.value) }}

                />
                <input
                    type="text"
                    placeholder="Residential Address"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value) }}

                />
                <input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => { setPostalCode(e.target.value) }}

                />
                <CountryDropdown
                    value={country}
                    onChange={(val) => setCountry(val)} />
                <label style={{ "color": "orange", "width": "80%", "textAlign": "left", "marginBottom": "0" }} >Upload your national ID</label>
                <input name="image" id="file-input" type="file" accept="image/*" onChange={handleFileChange} />
                <button onClick={handleClick} >Submit</button>
            </form>
        </div>
    )
}