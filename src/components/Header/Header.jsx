import React from "react";
import "./header.css";
import BtnComponent from "../BtnComponent/BtnComponent.jsx";
import bgHeader from "../../assets/image/bg_header.jpg";

const Header = () => {
  return (
    <header id="header" style={{ backgroundImage: `url(${bgHeader})` }}>
      <h2 data-aos="fade-up" className="titleHeader titleFontFamily">
        <span className="m-0">
           <span className="">Luis Fernando</span>
        </span>
        <br />
        <span className="m-0"> 
          <span className="colorTitle">Software Engineer</span>
        </span>
      </h2>
      <div className="containerBtn color-white">
        <BtnComponent viwUrl="Luis_Fernando_Rengifo_Frontend_Developer.pdf" textBtn="Ver currículum" />
      </div>
    </header>
  );
};

export default Header;
