// src/constants/projData.js
import Chimba from "../assets/image/chimba.png";
import Trading from "../assets/image/projectTrading.png";
import Amatrix from "../assets/image/projectAmatrix.png";
import Carbonera from "../assets/image/carbonera.png";
import ProjectWeather from "../assets/image/projectWeather.png";
import PokeDex from "../assets/image/projectPokemon.png";
import PasksManager from "../assets/image/imgTasksManager.png";
import storeImg from "../assets/image/storeImg.png";
import renderingtternsInReactBase from "../assets/image/rendering-patterns-in-react-base.png";
import WS from "../assets/image/7ws.png";
import WSCertificate from "../assets/image/WS.jpg";
import santosblock from "../assets/image/santosblock.jpg";

import IconJs from "../assets/icon/icon_js.png";
import IconReact from "../assets/icon/icon_react.png";
import IconRedux from "../assets/icon/icon_redux.png";
import IconCss from "../assets/icon/icon_css.png";
import IconNodejs from "../assets/icon/icon_node.png";
import IconHtml from "../assets/icon/icon_html.png";
import IconVue from "../assets/icon/icon_vue.png";
import IconSQL from "../assets/icon/icon_sql.png";
import IconSass from "../assets/icon/icon_sass.png";
import iconGitHub from "../assets/icon/icon_github.png";
import IconBootstrap from "../assets/icon/icon_bootstrap.png";
import IconAngular from "../assets/icon/icon_angular.png";
import IconTypescript from "../assets/icon/icon_typescript.png";
import IconoTailwind from "../assets/icon/icono_tailwind.png";

export const projData = [
  {
    urlProjects: "https://www.7waysecurity.co/",
    title: "7 Way Security",
    tiempo: "(6 mes)",
    icons: [IconHtml, IconCss, IconReact, IconJs, IconRedux, iconGitHub],
    img: WS,
    urlCertificado: WSCertificate,
  },
  {
    urlProjects:
      "https://santoblockchain.com/effortless-transactions-bitcoin-for-sending-and-receiving-money/",
    title: "Pagina web - Billetera digital",
    tiempo: "(+1 Año)",
    icons: [
      IconHtml,
      IconCss,
      IconJs,
      IconReact,
      IconRedux,
      IconSQL,
      iconGitHub,
    ],
    img: Chimba,
    urlCertificado: santosblock,
  },
  {
    urlProjects: "https://curious-meerkat-e262a3.netlify.app/",
    title: "Renderizado y composición en React",
    tiempo: "(1 mes)",
    icons: [IconHtml, IconCss, IconReact, IconTypescript, iconGitHub],
    img: renderingtternsInReactBase,
  },
  {
    urlProjects: "https://legendary-tartufo-116c35.netlify.app/",
    title: "E-Commerce",
    tiempo: "(2 mes)",
    icons: [IconHtml, IconoTailwind, IconAngular, IconTypescript, iconGitHub],
    img: storeImg,
  },
  {
    urlProjects: "https://tasksmanagermorxxo.netlify.app/",
    title: "Tasks Manager",
    tiempo: "(1 Semana)",
    icons: [IconHtml, IconCss, IconAngular, IconTypescript, iconGitHub],
    img: PasksManager,
  },
  {
    urlProjects: "https://landing-page-tranding.netlify.app/",
    title: "Landing page trading",
    tiempo: "(4 meses)",
    icons: [
      IconHtml,
      IconCss,
      IconSass,
      IconJs,
      IconVue,
      IconNodejs,
      iconGitHub,
    ],
    img: Trading,
  },
  {
    urlProjects: "https://amatrix.netlify.app/",
    title: "Amatrix",
    tiempo: "(3 meses)",
    icons: [
      IconHtml,
      IconCss,
      IconJs,
      IconVue,
      IconNodejs,
      IconSass,
      iconGitHub,
    ],
    img: Amatrix,
  },
  {
    urlProjects: "https://tickets.tablaolascarboneras.com/",
    title: "Página de Reservas",
    tiempo: "(6 meses)",
    icons: [IconHtml, IconCss, iconGitHub],
    img: Carbonera,
  },
  {
    urlProjects: "https://good-weather-forecast-app.netlify.app/",
    title: "Predicción meteorológica",
    tiempo: "(2 meses)",
    icons: [IconHtml, IconCss, IconJs, IconReact, IconBootstrap],
    img: ProjectWeather,
  },
  {
    urlProjects: "https://search-pokemones.netlify.app/",
    title: "Pokédex",
    tiempo: "(1 mes)",
    icons: [IconHtml, IconCss, IconJs, IconReact, IconBootstrap, IconSQL],
    img: PokeDex,
  },
];
