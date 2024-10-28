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

const AboutMe = () => {
  return (
    <section id="aboutMe" className="bgAllComponent">
      <div data-aos="flip-left" className="textAndVideoAbout">
        <h2 className="titleFontFamily titleAboutMe colorTitle">Sobre mí</h2>
        <div className="descriptionAndVideo">
          <article className="descriptionAboutMe">
            Soy un{" "}
            <span className="colorTitle fw-bold">
              desarrollador full stack{" "}
            </span>
            con experiencia en tecnologías como HTML, CSS, JavaScript y React.
            Recientemente trabajé en Santos Blockchain, contribuyendo al
            desarrollo de una billetera digital con habilidades en React y SQL.
            Soy proactivo, con una fuerte ética de trabajo y un gran interés por
            aprender continuamente. Actualmente estudio para ser{" "}
            <span className="colorTitle fw-bold">
              Técnico en programación de software en el SENA
            </span>
            . Estoy listo para contribuir a tu próximo proyecto.
          </article>
          <article data-aos="zoom-in-up" className="text-center">
            <video className="video" controls>
              <source src={videoFile} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </article>
        </div>

        <h2 className="titleFontFamily titleAboutMe colorTitle">Skills</h2>
        <div className="d-flex flex-wrap">
          <div className="iconsAboutMe">
            <img className="iconAboutMe" src={IconJs} width={50} />
            <img className="iconAboutMe" src={icon_typescript} width={50} />
            <img className="iconAboutMe" src={icon_angular} width={50} />
            <img className="iconAboutMe" src={IconReact} width={50} />
            <img className="iconAboutMe" src={IconVue} width={50} />
            <img className="iconAboutMe" src={IconHtml} width={50} />
            <img className="iconAboutMe" src={IconCss} width={50} />
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
