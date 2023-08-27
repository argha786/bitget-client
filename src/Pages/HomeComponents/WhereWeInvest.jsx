import React from "react";
import "../../css/Contact.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image1 from "../../Assets/WhereWeInvest1.jpg";
import Image2 from "../../Assets/WhereWeInvest2.jpg";
import Image3 from "../../Assets/WhereWeInvest3.jpg";
import Image4 from "../../Assets/WhereWeInvest4.jpg";
import Image5 from "../../Assets/WhereWeInvest5.jpg";

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
export default function WhereWeInvest() {
  return (
    <div className="contact">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        arrows={false}
      >
        <div className="contact1" style={{ backgroundImage: `url(${Image1})`}}>
          <div className="solid" >Apple</div>
        </div>
        <div className="contact2" style={{ backgroundImage: `url(${Image2})` }}>
          <div className="solid">Head Office: SFalkenstreet 14 , Zurich 8024 , Switzerland</div>
        </div>
        <div className="contact2" style={{ backgroundImage: `url(${Image3})` }}>
          <div className="solid">Head Office: SFalkenstreet 14 , Zurich 8024 , Switzerland</div>
         
        </div>
        <div className="contact2" style={{ backgroundImage: `url(${Image4})` }}>
          <div className="solid">Head Office: SFalkenstreet 14 , Zurich 8024 , Switzerland</div>
          
        </div>
        <div className="contact2" style={{ backgroundImage: `url(${Image5})` }}>
          <div className="solid">Head Office: SFalkenstreet 14 , Zurich 8024 , Switzerland</div>
        </div>
      </Carousel>
    </div>
  );
}
