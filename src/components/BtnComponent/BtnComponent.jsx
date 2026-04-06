import React from "react";
import './btn_component.css'
const BtnComponent = ({ viwUrl, textBtn }) => {
  return (
    <a href={viwUrl} target="_blank" rel="noopener noreferrer" title={textBtn} className="btn btnProjects">
      {textBtn} <i className="bi bi-eye ms-2" aria-hidden="true"></i>
    </a>
  );
};

export default BtnComponent;
