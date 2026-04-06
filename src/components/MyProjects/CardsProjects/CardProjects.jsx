import React from "react";
import "./cards_projects.css";
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
    <div className="card">
      <img src={img} className="card-img-top" alt={title} loading="lazy" />
      <div className="card-body">
        <h5 className="card-title">
          {title} <span className="colorTitle">{tiempo}</span>
        </h5>
        <p className="card-text">{description}</p>
        <div className="iconsCards">
          {icons.map((icon, index) => {
            return <img key={index} src={icon} width={30} alt="tech-icon" loading="lazy" />;
          })}
        </div>
        <div className="btns-projects-container">
          <BtnComponent viwUrl={urlProjects} textBtn="Ver Proyecto" />
          {urlCertificado && (
            <BtnComponent viwUrl={urlCertificado} textBtn="Certificado" />
          )}
        </div>
      </div>
    </div>
  );
};
export default CardProjects;
