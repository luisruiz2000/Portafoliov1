import "./AboutMe.css";
import videoFile from "../../assets/image/202407180931.mp4";

import IconJs from "../../assets/icon/icon_js.png";
import IconReact from "../../assets/icon/icon_react.png";
import IconRedux from "../../assets/icon/icon_redux.png";
import IconCss from "../../assets/icon/icon_css.png";
import IconNodejs from "../../assets/icon/icon_node.png";
import IconHtml from "../../assets/icon/icon_html.png";
import IconVue from "../../assets/icon/icon_vue.png";
import icon_angular from "../../assets/icon/icon_angular.png";
import IconSQL from "../../assets/icon/icon_sql.png";
import IconSass from "../../assets/icon/icon_sass.png";
import iconGitHub from "../../assets/icon/icon_github.png";
import IconBotstrap from "../../assets/icon/icon_bootstrap.png";
import iconGit from "../../assets/icon/icon_git.png";
import iconPg from "../../assets/icon/postgre.png";
import slqServer from "../../assets/icon/servidor-sql.png";
import linux from "../../assets/icon/linux.png";
import icon_ubuntu from "../../assets/icon/icon_ubuntu.png";
import icon_csharp from "../../assets/icon/icon_csharp.png";
import icon_typescript from "../../assets/icon/icon_typescript.png";
import icon_java from "../../assets/icon/icon_java.png";
import icono_tailwind from "../../assets/icon/icono_tailwind.png";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="bgAllComponent">
      <div data-aos="flip-left" className="textAndVideoAbout">
        <h2 className="titleFontFamily titleAboutMe colorTitle">Sobre mí</h2>
        <div className="descriptionAndVideo">
          <article className="descriptionAboutMe">
            Soy <span className="colorTitle fw-bold">Técnico en Programación de Software </span> con 3 años de experiencia en
            desarrollo Full Stack. He participado en proyectos que van desde
            landing pages y sistemas de reservas hasta aplicaciones
            empresariales con integración de APIs RESTful y bases de datos
            relacionales. Me especializo en Angular, React y Node.js, además de
            tener experiencia sólida en C#, .NET y SQL. A lo largo de mi
            trayectoria he trabajado tanto en modalidad freelance como en
            empresas de tecnología, desarrollando interfaces dinámicas,
            optimizando aplicaciones y aplicando buenas prácticas de
            arquitectura y diseño responsivo. Me considero una persona
            autodidacta, proactiva y orientada a resultados, con la capacidad de
            adaptarme rápidamente a nuevas tecnologías y aportar valor a los
            equipos y proyectos en los que participo. 
          </article>
        </div>

        <h2 className="titleFontFamily titleAboutMe colorTitle">Skills</h2>
        <div className="d-flex flex-wrap skillsContainer">
          <div className="iconsAboutMe">
            <img className="iconAboutMe" src={IconJs} width={50} />
            <img className="iconAboutMe" src={icon_typescript} width={50} />
            <img className="iconAboutMe" src={icon_angular} width={50} />
            <img className="iconAboutMe" src={IconReact} width={50} />
            <img className="iconAboutMe" src={IconVue} width={50} />
            <img className="iconAboutMe" src={IconHtml} width={50} />
            <img className="iconAboutMe" src={IconCss} width={50} />
            <img className="iconAboutMe" src={icono_tailwind} width={50} />
            <img className="iconAboutMe" src={IconBotstrap} width={50} />
            <img className="iconAboutMe" src={IconSass} width={50} />
            <img className="iconAboutMe" src={IconRedux} width={50} />
            {/* <span className="fw-bold">Y voy por más...</span> */}
          </div>
          <div className="iconsAboutMe">
            <img
              className="iconAboutMe bg-white rounded-2"
              src={icon_java}
              width={50}
            />
            <img className="iconAboutMe" src={IconNodejs} width={50} />
            <img className="iconAboutMe" src={IconSQL} width={50} />
            <img className="iconAboutMe" src={iconPg} width={50} />
            <img className="iconAboutMe" src={slqServer} width={50} />
            <img className="iconAboutMe" src={icon_csharp} width={100} />
          </div>
          <div className="iconsAboutMe">
            <img className="iconAboutMe" src={iconGitHub} width={50} />
            <img className="iconAboutMe" src={iconGit} width={50} />
            <img className="iconAboutMe" src={linux} width={50} />
            <img className="iconAboutMe" src={icon_ubuntu} width={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
