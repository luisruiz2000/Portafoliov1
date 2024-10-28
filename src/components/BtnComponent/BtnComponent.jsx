import React from "react";
import './BtnComponent.css'
const BtnComponent = ({ viwUrl, textBtn }) => {
  return (
    <a href={viwUrl} target="_blank" className="btn btnProjects">
      {textBtn} <i className="bi bi-eye ms-2"></i>
    </a>
  );
};

export default BtnComponent;
