import React from "react";
import "../../css/Welcome.css";

import BitcoinWelcome from "../../Assets/BitcoinWelcome.png";
import Header from "../components/Header";
export default function Welcome() {
  return (
    <div className="onlyBack" >
    <Header />
      <div className="welcome">
        <div style={{ textAlign: "center" }}>
          <img src={BitcoinWelcome} alt="Bitcoin" style={{ width: "100%" }} />
        </div>
        <div className="welcomeMain">
          <h1>WELCOME TO THE BITGET INVESTMENT OFFICIAL WEBSITE</h1>
          <h3>World’s Most Trusted Investment & Automatic Trading Platform</h3>
          <div style={{ textAlign: "center" }}></div>
        </div>
      </div>
    </div>
  );
}
