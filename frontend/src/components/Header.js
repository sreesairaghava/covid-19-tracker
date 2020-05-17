import React from "react";
//import logo
import logo from "../resources/logo.png";
//styling
const divStyle = {
  width: "auto",
  height: "auto",
  backgroundColor: "#d0faea",
};
const imgStyle = {
  width: "236px",
  height: "108px",
  objectFit: "contain",
};
const titleStyle = {
  width: "600px",
  height: "48px",
  fontFamily: "Montserrat",
  fontSize: "30px",
  fontWeight: "500",
  fontStrech: "normal",
  fontStyle: "normal",
  letterSpacing: "normal",
  lineHeight: "1.21",
  color: "#000000",
  textAlign: "left",
  marginTop: "30px",
  marginLeft: "10px",
};
const Header = () => {
  return (
    <div className="nav" style={divStyle}>
      <img src={logo} alt="logo" style={imgStyle} />
      <p style={titleStyle}>COVID-19 DATA VISUALISATION</p>
    </div>
  );
};

export default Header;
