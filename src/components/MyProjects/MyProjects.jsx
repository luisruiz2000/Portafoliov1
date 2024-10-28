import React from "react";
import "./MyProjects.css";

import CardProjects from "./CardsProjects/CardProjects";
import { projData } from "../../constants/projData";
const MyProjects = () => {
  return (
    <section id="projects" className="projects pb-5">
      <div className="text-center textProjects m-3">
        <h2 className="colorTitle titleFontFamily">Proyectos y experiencia</h2>
        <p className="text-white fs-5">
          (Todo lo que puedas imaginar, lo puedes programar)
        </p>
      </div>
      <div className="containerCards">
        {projData.map((proj, index) => {
          return (
            <CardProjects
              key={index}
              urlProjects={proj.urlProjects}
              title={proj.title}
              tiempo={proj.tiempo}
              icons={proj.icons}
              img={proj.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyProjects;
