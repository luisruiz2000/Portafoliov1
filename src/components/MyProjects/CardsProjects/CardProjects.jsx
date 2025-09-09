import React from "react";
import "./cardsProjects.css";
import BtnComponent from "../../BtnComponent/BtnComponent";
const CardProjects = ({
  title,
  description,
  icons,
  img,
  urlProjects,
  tiempo,
  urlCertificado, // Nuevo prop opcional
}) => {
  return (
    <a href={urlProjects} className="card" target="_blank">
      <img src={img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          {title} <span className="colorTitle">{tiempo}</span>
        </h5>
        <p className="card-text">{description}</p>
        <div className="iconsCards">
          {icons.map((icon, index) => {
            return <img key={index} src={icon} width={30} />;
          })}
        </div>
        <div className="btns-projects-container">
          <BtnComponent viwUrl={urlProjects} textBtn="Información" />
          {urlCertificado && (
            <BtnComponent viwUrl={urlCertificado} textBtn="Certificado" />
          )}
        </div>
      </div>
    </a>
  );
};
export default CardProjects;
