import React from "react";
import "./MyProjects.css";

import CardProjects from "./CardsProjects/CardProjects";
import { projData } from "../../constants/projData";

// Filtrar los proyectos para cada sección
const experienciaTitles = [
  "7 Way Security",
  "Pagina web - Billetera digital",
  "Landing page trading",
  "Amatrix",
  "Página de Reservas",
];

const experiencia = projData.filter((proj) =>
  experienciaTitles.includes(proj.title)
);
const proyectos = projData.filter(
  (proj) => !experienciaTitles.includes(proj.title)
);

const MyProjects = () => {
  return (
    <section id="projects" className="projects pb-5">
      {/* Sección Experiencia */}
      <div className="section-block experiencia-block">
        <h3 className="section-title experiencia-title">Experiencia</h3>
        <div className="containerCards">
          {experiencia.map((proj, index) => (
            <CardProjects
              key={index}
              urlProjects={proj.urlProjects}
              title={proj.title}
              tiempo={proj.tiempo}
              icons={proj.icons}
              img={proj.img}
              description={proj.description}
              urlCertificado={proj.urlCertificado} // Nuevo prop
            />
          ))}
        </div>
      </div>
      {/* Sección Proyectos */}
      <div className="section-block">
        <h3 className="proyectos-title section-title experiencia-title">
          Proyectos
        </h3>
        <div className="text-center textProjects m-3">
          <p className="text-white fs-5">
            (Todo lo que puedas imaginar, lo puedes programar)
          </p>
        </div>
        <div className="containerCards">
          {proyectos.map((proj, index) => (
            <CardProjects
              key={index}
              urlProjects={proj.urlProjects}
              title={proj.title}
              tiempo={proj.tiempo}
              icons={proj.icons}
              img={proj.img}
              description={proj.description}
              urlCertificado={proj.urlCertificado} // Nuevo prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
