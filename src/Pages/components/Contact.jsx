import React from "react";
import "../../css/Contact.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Contact1 from "../../Assets/Contact.jpg";
import Contact2 from "../../Assets/Contact2.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Contact() {
  return (
    <div className="contact">
      <Carousel responsive={responsive} autoPlay={true} infinite={true} arrows={false}>
        <div className="contact1" style={{backgroundImage: `url(${Contact1})`}}>
          <div>Head Office: SFalkenstreet 14 , Zurich 8024 , Switzerland</div>
          <div>Regional Office: 3rd Floor, Church St, New York, NY 10006, United States</div>
          <div>customer help:{" "}<a href="mailto:swiftbusinesspayteam@gmail.com">swiftbusinesspayteam@gmail.com</a></div>
        </div>
        <div className="contact2" style={{backgroundImage: `url(${Contact2})`}}>
            <div>Head Office: SFalkenstreet 14 , Zurich 8024 , Switzerland</div>
          <div>Regional Office: 3rd Floor, Church St, New York, NY 10006, United States</div>
          <div>customer help:{" "}<a href="mailto:swiftbusinesspayteam@gmail.com">swiftbusinesspayteam@gmail.com</a></div>
        </div>
      </Carousel>
    </div>
  );
}
