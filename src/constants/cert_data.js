// src/constants/certData.js

import webResponsivo from "../assets/image/Img_cursos/responsi_web_certificate.jpg";
import jsAnsStructuraDatos from "../assets/image/Img_cursos/img_certificado_js.jpg";
import programadorImg from "../assets/image/Img_cursos/img_programador.png";
import JsUdemy from "../assets/image/Certificados/cursos/JavaScriptUdemy.jpg";
import imgEmprendimiento from "../assets/image/Img_cursos/emprendimiento_img.jpg";
import CertificadoEmprendimiento from "../assets/image/Certificados/cursos/EmprendimientoSena.pdf";
import Terminal from "../assets/image/Img_cursos/terminal.jpeg";
import CertificadoTerminal from "../assets/image/Certificados/cursos/diploma-terminal.pdf";
import GitGitHub from "../assets/image/Img_cursos/git_github.jpeg";
import CertificadoGitGitHub from "../assets/image/Certificados/cursos/diploma-git-github.pdf";
import Efrmaworkimg from "../assets/image/Img_cursos/eframework_img.png";
import CertificateEf from "../assets/image/Certificados/cursos/diploma-entity-framework.pdf";
import BackendImg from "../assets/image/Img_cursos/backend_img.jpeg";
import CertificadoBackend from "../assets/image/Certificados/cursos/diploma-backend.pdf";
import frontendImg from "../assets/image/Img_cursos/frontend_img.jpeg";
import Certificadofrontend from "../assets/image/Certificados/cursos/diploma-frontend-developer.pdf";
import csharpImg from "../assets/image/Img_cursos/csharp_img.jpeg";
import CertificadoBackendcsharp from "../assets/image/Certificados/cursos/diploma-csharp-basic.pdf";
// import EstrategiasEnglishImg from "../assets/image/estrategias_english_img.jpeg";
// import CertificadoEstrategiasEnglishImg from "../assets/image/Certificados/cursos/diploma-estrategias-ingles.pdf";
import EstrategiasEnglishImg from "../assets/image/Img_cursos/estrategias_english_img.jpeg";
import CertificadoEstrategiasEnglishImg from "../assets/image/Certificados/cursos/diploma-ingles-a1-principiantes.pdf";
import SQL from "../assets/image/Img_cursos/sql.jpeg";
import CertificadoSQL from "../assets/image/Certificados/cursos/diploma-db-sql.pdf";
import FullStack from "../assets/image/Img_cursos/full_stack.jpeg";
import CertificadoFullStackJs from "../assets/image/Certificados/cursos/diploma-javascript-full-stack.pdf";
import CertificadoJavaOpp from "../assets/image/Certificados/cursos/diploma-java-oop.pdf";
import JavaScriptAlgorithms from "../assets/image/Certificados/cursos/JavaScript-algorithms-and-data-structures.pdf";
import responsiWebCertificate from "../assets/image/Certificados/cursos/responsive-web-design.pdf";
import Titulo_SENA from "../assets/image/Certificados/cursos/Titulo_SENA.jpg";


export const CERT_DATA = [
  {
    img: programadorImg,
    cardTitle: "Programador de Software",
    cardText: "SENA",
    urlBtn: Titulo_SENA,
  },
  {
    img: frontendImg,
    cardTitle: "Frontend Developer",
    cardText: "Platzi",
    urlBtn: Certificadofrontend,
  },
  {
    img: webResponsivo,
    cardTitle: "Responsive Web Design",
    cardText: "FreeCodeCamp",
    urlBtn: responsiWebCertificate,
  },
  {
    img: jsAnsStructuraDatos,
    cardTitle: "JS Algorithms & Data Structures",
    cardText: "FreeCodeCamp",
    urlBtn: JavaScriptAlgorithms,
  },
  {
    img: JsUdemy,
    cardTitle: "JavaScript Moderno",
    cardText: "Udemy",
    urlBtn:
      "https://www.udemy.com/certificate/UC-d1c2f5d4-7b36-4b7c-aae2-b5860f654571/",
  },
  {
    img: GitGitHub,
    cardTitle: "Profesional en Git y Github",
    cardText: "Platzi",
    urlBtn: CertificadoGitGitHub,
  },
  {
    img: FullStack,
    cardTitle: "Full Stack Developer",
    cardText: "Platzi",
    urlBtn: CertificadoFullStackJs,
  },
  {
    img: BackendImg,
    cardTitle: "Introducción Backend",
    cardText: "Platzi",
    urlBtn: CertificadoBackend,
  },
  {
    img: csharpImg,
    cardTitle: "C# Fundamentos",
    cardText: "Platzi",
    urlBtn: CertificadoBackendcsharp,
  },
  {
    img: SQL,
    cardTitle: "SQL",
    cardText: "Platzi",
    urlBtn: CertificadoSQL,
  },
  {
    img: Terminal,
    cardTitle: "Terminal y Líneas de Comando",
    cardText: "Platzi",
    urlBtn: CertificadoTerminal,
  },
  {
    img: Efrmaworkimg,
    cardTitle: "Fundamentos de EF",
    cardText: "Platzi",
    urlBtn: CertificateEf,
  },
  {
    img: imgEmprendimiento,
    cardTitle: "Emprendimiento",
    cardText: "SENA",
    urlBtn: CertificadoEmprendimiento,
  },
  {
    img: EstrategiasEnglishImg,
    cardTitle: "English A1 Basic",
    cardText: "Platzi",
    urlBtn: CertificadoEstrategiasEnglishImg,
  },
];
