import React from "react";
//import images
import india from "../resources/india.png";
const imgStyle = {
  width: "330px",
  height: "360px",
  float: "left",
  marginLeft: "10px",
  marginTop: "20px",
};
const headingStyle = {
  width: "1200px",
  height: "63px",
  fontFamily: "Montserrat",
  fontSize: "36px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.21",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#005003",
  marginTop: "10px",
};
const factStyle = {
  width: "1235px",
  height: "35px",
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.21",
  letterSpacing: "normal",
  textAlign: "left",
  color: "#000000",
};
const converted = {
  ".Stay-Home": {
    width: "1200px",
    marginTop: "80px",
    textAlign: "center",
    height: "86px",
    fontFamily: "Montserrat",
    fontSize: "50px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.23",
    letterSpacing: "normal",
    color: "#000000",
  },
};

const Banner = () => {
  return (
    <div className="banner">
      <img src={india} alt="india-banner" style={imgStyle} />
      <p style={headingStyle}>Covid-19 Data Visualisation Web Portal</p>
      <span style={factStyle}>
        Know more about Covid-19 information from trusted sources. Stay away
        from rumors
      </span>
      <div>
        <h1 style={converted[".Stay-Home"]}>Stay Home and Stay Safe</h1>
      </div>
    </div>
  );
};

export default Banner;
