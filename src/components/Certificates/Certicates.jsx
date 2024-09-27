import React from "react";
import "./Certificates.css";

import webResponsivo from "../../assets/image/responsiWebCertificate.jpg";
import jsAnsStructuraDatos from "../../assets/image/certificateJs.jpg";
import CertificateComponent from "./CertificateComponent";
import JsUdemy from "../../assets/image/Certificados/JavaScriptUdemy.jpg";
import imgEmprendimiento from "../../assets/image/CertificadoEmprendimiento.jpg";
import CertificadoEmprendimiento from "../../assets/image/Certificados/EmprendimientoSena.pdf";
import Terminal from "../../assets/image/Terminal.jpeg";
import CertificadoTerminal from "../../assets/image/Certificados/diploma-terminal.pdf";
import GitGitHub from "../../assets/image/GitGitub.jpeg";
import CertificadoGitGitHub from "../../assets/image/Certificados/diploma-git-github.pdf";

import Efrmaworkimg from "../../assets/image/EframeworkImg.png";
import CertificateEf from "../../assets/image/Certificados/diploma-entity-framework.pdf";

import BackendImg from "../../assets/image/BackendImg.jpeg";
import CertificadoBackend from "../../assets/image/Certificados/diploma-backend.pdf";

import frontendImg from "../../assets/image/frontendImg.jpeg";
import Certificadofrontend from "../../assets/image/Certificados/diploma-frontend-developer-practico.pdf";

import csharpImg from "../../assets/image/csharpImg.jpeg";
import CertificadoBackendcsharp from "../../assets/image/Certificados/diploma-csharp-basic.pdf";

import EstrategiasEnglishImg from "../../assets/image/EstrategiasEnglishImg.jpeg";
import CertificadoEstrategiasEnglishImg from "../../assets/image/Certificados/diploma-estrategias-ingles.pdf";

const Certificates = () => {
  return (
    <div id="certificates" className="certificates">
      <h2 className="titleFontFamily colorTitle">Certificados</h2>
      <br />
      <div className="cards">
        <CertificateComponent
          className="card"
          img={frontendImg}
          cardTitle="Frontend Developer"
          cardText="Platzi"
          urlBtn={Certificadofrontend}
          onClick={() => openImage(Certificadofrontend)}
        />
        <CertificateComponent
          className="card"
          img={JsUdemy}
          cardTitle="JavaScript Moderno"
          cardText="Udemy"
          urlBtn="https://www.udemy.com/certificate/UC-d1c2f5d4-7b36-4b7c-aae2-b5860f654571/"
        />
        <CertificateComponent
          className="card"
          img={jsAnsStructuraDatos}
          cardTitle="JS Algorithms & Data Structures"
          cardText="FreeCodeCamp"
          urlBtn="https://www.freecodecamp.org/certification/LuisRuiz/javascript-algorithms-and-data-structures"
        />
        <CertificateComponent
          className="card"
          img={GitGitHub}
          cardTitle="Profesional en Git y Github"
          cardText="Platzi"
          urlBtn={CertificadoGitGitHub}
          onClick={() => openImage(CertificadoGitGitHub)}
        />
        <CertificateComponent
          className="card"
          img={webResponsivo}
          cardTitle="Responsive Web Design"
          cardText="FreeCodeCamp"
          urlBtn="https://www.freecodecamp.org/certification/LuisRuiz/responsive-web-design"
        />
        <CertificateComponent
          className="card"
          img={Terminal}
          cardTitle="Terminal Y Líneas De Comando"
          cardText="Platzi"
          urlBtn={CertificadoTerminal}
          onClick={() => openImage(CertificadoTerminal)}
        />

        <CertificateComponent
          className="card"
          img={imgEmprendimiento}
          cardTitle="Emprendimiento"
          cardText="SENA"
          urlBtn={CertificadoEmprendimiento}
          onClick={() => openImage(CertificadoEmprendimiento)}
        />

        <CertificateComponent
          className="card"
          img={BackendImg}
          cardTitle="Introduccion Backend"
          cardText="Platzi"
          urlBtn={CertificadoBackend}
          onClick={() => openImage(CertificadoBackend)}
        />

        <CertificateComponent
          className="card"
          img={Efrmaworkimg}
          cardTitle="Fundamentos de EF"
          cardText="Platzi"
          urlBtn={CertificateEf}
          onClick={() => openImage(CertificateEf)}
        />

        <CertificateComponent
          className="card"
          img={csharpImg}
          cardTitle="C# Fundamentos"
          cardText="Platzi"
          urlBtn={CertificadoBackendcsharp}
          onClick={() => openImage(CertificadoBackendcsharp)}
        />

        <CertificateComponent
          className="card"
          img={EstrategiasEnglishImg}
          cardTitle="Strategies to Learn English Online"
          cardText="Platzi"
          urlBtn={CertificadoEstrategiasEnglishImg}
          onClick={() => openImage(CertificadoEstrategiasEnglishImg)}
        />
      </div>
    </div>
  );
};

export default Certificates;
