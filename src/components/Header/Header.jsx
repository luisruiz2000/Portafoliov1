import React from "react";
import "./header.css";
import BtnComponent from "../BtnComponent/BtnComponent.jsx";
import bgHeader from "../../assets/image/bg_headerr.jpg";

const Header = () => {
  return (
    <header id="header" style={{ backgroundImage: `url(${bgHeader})` }}>
      <h2 data-aos="fade-up" className="titleHeader titleFontFamily">
        <span className="m-0">
           <span className="colorTitle">Luis Fernando</span>
        </span>
        <br />
        <span className="m-0">
          Desarrollador <span className="colorTitle"> <br /> Full Stack</span>
        </span>
      </h2>
      <div className="containerBtn color-white">
        <BtnComponent viwUrl="LuisFernandoCV.pdf" textBtn="Ver currículum" />
      </div>
    </header>
  );
};

export default Header;
