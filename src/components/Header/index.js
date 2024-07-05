import React from "react";
import "./index.css";
import image from "./Group 5.png";
import profileimg from "./Avatar - Desktop - Light.png";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <>
        <img src={image} alt="logo" />
      </>
      <img src={profileimg} alt="profileimg" />
    </div>
  );
};

export default Header;
