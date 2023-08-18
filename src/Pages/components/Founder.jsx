import React from "react";
import "../../css/Founder.css"

import FounderImage from "../../Assets/Founder.png"
import FounderImage1 from "../../Assets/Founder1.png"
import FounderImage2 from "../../Assets/Founder2.png"

import FounderImage3 from "../../Assets/Founder3.png"
export default function Founder() {
    return (

        <>
            <div className="founder" >

                <div className="founderName" >
                    <h1>Kalilah Madrigal</h1>
                    <h3>FOUNDER</h3>
                </div>
                <div className="founderImage" >
                    <img src={FounderImage} alt="founder" />
                </div>
            </div>
            <div className="founder" >

                <div className="founderName" >
                    <h1>Nixi Delphi</h1>
                    <h3>FOUNDER</h3>
                </div>
                <div className="founderImage" >
                    <img src={FounderImage1} alt="founder" />
                </div>
            </div>
            <div className="founder" >

                <div className="founderName" >
                    <h1>Elowen Snow</h1>
                    <h3>FOUNDER</h3>
                </div>
                <div className="founderImage" >
                    <img src={FounderImage2} alt="founder" />
                </div>
            </div>
            <div className="founder" >

                <div className="founderName" >
                    <h1>Hugo August</h1>
                    <h3>FOUNDER</h3>
                </div>
                <div className="founderImage" >
                    <img src={FounderImage3} alt="founder" />
                </div>
            </div>
        </>
    );
}