import React from "react";
import "../../css/Contact.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image2 from "../../Assets/ProfitPercentage2.png";
import Image3 from "../../Assets/ProfitPercentage3.jpg";

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
export default function ProfitPercentage() {
  return (
    <div className="contact">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        arrows={false}
      >
        
        <div className="contact2" style={{ backgroundImage: `url(${Image2})` }}>
          {/* <div className="solid">Head Office: SFalkenstreet 14 , Zurich 8024 , Switzerland</div> */}
        </div>
        <div className="contact2" style={{ backgroundImage: `url(${Image3})` }}>
          {/* <div className="solid">Head Office: SFalkenstreet 14 , Zurich 8024 , Switzerland</div> */}
         
        </div>
        
        
      </Carousel>
    </div>
  );
}
