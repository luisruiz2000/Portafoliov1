// src/constants/projData.js
import chimba from "../assets/image/chimba.png";
import trading from "../assets/image/project_trading.png";
import amatrix from "../assets/image/project_amatrix.png";
import carbonera from "../assets/image/carbonera.png";
import projectWeather from "../assets/image/project_weather.png";
import pokeDex from "../assets/image/project_pokemon.png";
import tasksManager from "../assets/image/img_tasks_manager.png";
import storeImg from "../assets/image/store_img.png";
import renderingPatternsInReactBase from "../assets/image/rendering_patterns_in_react_base.png";
import weatherProject from "../assets/image/weather_p.png";
import ws from "../assets/image/7ws.png";
import wsCertificate from "../assets/image/ws.jpg";
import santosBlock from "../assets/image/santosblock.jpg";
import imgPersonalSoft from "../assets/image/img_personal_soft.png";
import certificadoPersonalSoft from "../assets/image/certificado_personal_soft.png";
import iconJs from "../assets/icon/icon_js.png";
import iconReact from "../assets/icon/icon_react.png";
import iconRedux from "../assets/icon/icon_redux.png";
import iconCss from "../assets/icon/icon_css.png";
import iconNodejs from "../assets/icon/icon_node.png";
import iconHtml from "../assets/icon/icon_html.png";
import iconVue from "../assets/icon/icon_vue.png";
import iconSql from "../assets/icon/icon_sql.png";
import iconSass from "../assets/icon/icon_sass.png";
import iconGitHub from "../assets/icon/icon_github.png";
import iconBootstrap from "../assets/icon/icon_bootstrap.png";
import iconAngular from "../assets/icon/icon_angular.png";
import iconTypescript from "../assets/icon/icon_typescript.png";
import iconTailwind from "../assets/icon/icono_tailwind.png";
import iconNet from "../assets/icon/iconnet.png";

export const PROJECTS_DATA = [
  {
    urlProjects: "https://www.personalsoft.com/co/",
    title: "PersonalSoft",
    tiempo: "(2 mes)",
    icons: [iconHtml, iconCss, iconAngular, iconTypescript, iconNet, iconGitHub],
    img: imgPersonalSoft,
    urlCertificado: certificadoPersonalSoft,
    type: "experiencia",
  },
  {
    urlProjects: "https://www.7waysecurity.co/",
    title: "7 Way Security",
    tiempo: "(6 mes)",
    icons: [iconHtml, iconCss, iconReact, iconAngular, iconJs, iconRedux, iconGitHub],
    img: ws,
    urlCertificado: wsCertificate,
    type: "experiencia",
  },
  {
    urlProjects: "https://santoblockchain.com/effortless-transactions-bitcoin-for-sending-and-receiving-money/",
    title: "Pagina web - Billetera digital",
    tiempo: "(+1 Año)",
    icons: [iconHtml, iconCss, iconJs, iconReact, iconRedux, iconSql, iconGitHub],
    img: chimba,
    urlCertificado: santosBlock,
    type: "experiencia",
  },
  {
    urlProjects: "https://good-weather-forecast-app.netlify.app/",
    title: "Clima & Pronóstico",
    tiempo: "(1 mes)",
    icons: [iconHtml, iconCss, iconReact, iconJs, iconGitHub, iconBootstrap],
    img: weatherProject,
    type: "proyecto",
  },
  {
    urlProjects: "https://curious-meerkat-e262a3.netlify.app/",
    title: "Renderizado y composición en React",
    tiempo: "(1 mes)",
    icons: [iconHtml, iconCss, iconReact, iconTypescript, iconGitHub],
    img: renderingPatternsInReactBase,
    type: "proyecto",
  },
  {
    urlProjects: "https://legendary-tartufo-116c35.netlify.app/",
    title: "E-Commerce",
    tiempo: "(2 mes)",
    icons: [iconHtml, iconTailwind, iconAngular, iconTypescript, iconGitHub],
    img: storeImg,
    type: "proyecto",
  },
  {
    urlProjects: "https://tasksmanagermorxxo.netlify.app/",
    title: "Tasks Manager",
    tiempo: "(1 Semana)",
    icons: [iconHtml, iconCss, iconAngular, iconTypescript, iconGitHub],
    img: tasksManager,
    type: "proyecto",
  },
  {
    urlProjects: "https://landing-page-tranding.netlify.app/",
    title: "Landing page trading",
    tiempo: "(4 meses)",
    icons: [iconHtml, iconCss, iconSass, iconJs, iconVue, iconNodejs, iconGitHub],
    img: trading,
    type: "experiencia",
  },
  {
    urlProjects: "https://amatrix.netlify.app/",
    title: "Amatrix",
    tiempo: "(3 meses)",
    icons: [iconHtml, iconCss, iconJs, iconVue, iconNodejs, iconSass, iconGitHub],
    img: amatrix,
    type: "experiencia",
  },
  {
    urlProjects: "https://tickets.tablaolascarboneras.com/",
    title: "Página de Reservas",
    tiempo: "(6 meses)",
    icons: [iconHtml, iconCss, iconGitHub],
    img: carbonera,
    type: "experiencia",
  },
  {
    urlProjects: "https://good-weather-forecast-app.netlify.app/",
    title: "Predicción meteorológica",
    tiempo: "(2 meses)",
    icons: [iconHtml, iconCss, iconJs, iconReact, iconBootstrap],
    img: projectWeather,
  },
  {
    urlProjects: "https://search-pokemones.netlify.app/",
    title: "Pokédex",
    tiempo: "(1 mes)",
    icons: [iconHtml, iconCss, iconJs, iconReact, iconBootstrap, iconSql],
    img: pokeDex,
    type: "proyecto",
  },
];