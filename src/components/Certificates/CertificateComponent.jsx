import React from "react";
import "./Certificates.css";
import BtnComponent from "../BtnComponent/BtnComponent";

const CertificateComponent = ({
  img,
  cardTitle,
  cardText,
  urlBtn,
  objContain,
}) => {
  return (
    <a
      href={urlBtn}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      style={{ width: "18rem", height: "auto" }}>
      <img src={img} className={"card-img-top" + " " + objContain} />
      <div className="card-body">
        <h5 className="card-title fw-bold cardTitle">{cardTitle}</h5>
        <p className="card-text colorTitle fw-bold">{cardText}</p>
        <BtnComponent viwUrl={urlBtn} textBtn="Ver Certificado" />
      </div>
    </a>
  );
};

export default CertificateComponent;
