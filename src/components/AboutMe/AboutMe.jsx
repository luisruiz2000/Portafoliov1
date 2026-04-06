import "./about_me.css";
// import videoFile from "../../assets/image/202407180931.mp4";

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

// Skills categorized by column
const FRONTEND_SKILLS = [
  { id: "js", src: IconJs, label: "JavaScript", width: 50 },
  { id: "ts", src: icon_typescript, label: "TypeScript", width: 50 },
  { id: "angular", src: icon_angular, label: "Angular", width: 50 },
  { id: "react", src: IconReact, label: "React", width: 50 },
  { id: "vue", src: IconVue, label: "Vue", width: 50 },
  { id: "html", src: IconHtml, label: "HTML", width: 50 },
  { id: "css", src: IconCss, label: "CSS", width: 50 },
  { id: "tailwind", src: icono_tailwind, label: "Tailwind", width: 50 },
  { id: "bootstrap", src: IconBotstrap, label: "Bootstrap", width: 50 },
  { id: "sass", src: IconSass, label: "Sass", width: 50 },
  { id: "redux", src: IconRedux, label: "Redux", width: 50 },
];

const BACKEND_SKILLS = [
  { id: "java", src: icon_java, label: "Java", width: 50, bgWhite: true },
  { id: "nodejs", src: IconNodejs, label: "Node.js", width: 50 },
  { id: "sql", src: IconSQL, label: "SQL", width: 50 },
  { id: "postgres", src: iconPg, label: "PostgreSQL", width: 50 },
  { id: "sqlserver", src: slqServer, label: "SQL Server", width: 50 },
  { id: "csharp", src: icon_csharp, label: "C#", width: 100 },
];

const DEVOPS_SKILLS = [
  { id: "github", src: iconGitHub, label: "GitHub", width: 50 },
  { id: "git", src: iconGit, label: "Git", width: 50 },
  { id: "linux", src: linux, label: "Linux", width: 50 },
  { id: "ubuntu", src: icon_ubuntu, label: "Ubuntu", width: 50 },
];

const AboutMe = () => {
  return (
    <section id="aboutMe" className="bgAllComponent">
      <div data-aos="flip-left" className="textAndVideoAbout">
        <h2 className="titleFontFamily titleAboutMe colorTitle">Sobre mí</h2>
        <div className="descriptionAndVideo">
          <article className="descriptionAboutMe">
            <span className="colorTitle fw-bold">Frontend Developer</span>{" "}
             con más de 3 años de experiencia desarrollando aplicaciones web empresariales con Angular, React y Vue. He trabajado en sectores de seguridad, fintech y blockchain, construyendo interfaces escalables, consumo de APIs RESTful y flujos complejos con TypeScript. Cuento con experiencia complementaria en backend con .NET, Node.js, Java y Python, lo que me permite integrarme eficientemente en equipos full stack y arquitecturas modernas como la hexagonal.
          </article>
        </div>

        <h2 className="titleFontFamily titleAboutMe colorTitle">Skills</h2>
        <div className="d-flex flex-wrap skillsContainer">
          <div className="iconsAboutMe">
            {FRONTEND_SKILLS.map((skill) => (
              <img
                key={skill.id}
                className="iconAboutMe"
                src={skill.src}
                width={skill.width}
                loading="lazy"
                alt={skill.label}
              />
            ))}
            {/* <span className="fw-bold">Y voy por más...</span> */}
          </div>
          <div className="iconsAboutMe">
            {BACKEND_SKILLS.map((skill) => (
              <img
                key={skill.id}
                className={`iconAboutMe ${skill.bgWhite ? "bg-white rounded-2" : ""}`}
                src={skill.src}
                width={skill.width}
                loading="lazy"
                alt={skill.label}
              />
            ))}
          </div>
          <div className="iconsAboutMe">
            {DEVOPS_SKILLS.map((skill) => (
              <img
                key={skill.id}
                className="iconAboutMe"
                src={skill.src}
                width={skill.width}
                loading="lazy"
                alt={skill.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
