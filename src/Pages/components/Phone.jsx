import React,{useEffect} from "react";
import "../../css/Phone.css"
import Vid from "../../Assets/image01.gif"
import Img from "../../Assets/R.png"
import Img2 from "../../Assets/S.png"
// import Img3 from "../../Assets/star.png"
import Aos from "aos";
import "aos/dist/aos.css"




export default function Phone(){
    useEffect(()=>{
        Aos.init({duration:2000});
    
        },[]);
        
    return(
        <div className="phone" style={{"width":"100%"}} >
            <div data-aos="flip-right">
                <img src={Vid} alt="Video" />
            </div>
            <div>
                <img className="stars" style={{"width":"20vw" ,"height":"10vh"}} src="https://swiftbusinesspay.site/wp-content/uploads/2021/12/trustpilot-stars.svg" data-aos="zoom-in" alt="Stars" />
                <h1 className="stars" style={{"color": "white"}}>Excelent score: 4.5</h1> 

            </div>
            <div className="download" data-aos="zoom-in">
                <div>
                <img  style={{"width":"36vw"}} src={Img} alt="Download" />
                </div>
                
                <div className="windows">
                <img style={{"width":"16vw"}} src={Img2} alt="Windows" />
                </div>
            </div>    
             </div>
    )
    
}