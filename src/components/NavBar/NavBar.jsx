import React, { useRef } from "react";
import "./nav_bar.css";
import { Link } from "react-scroll";
import IconCopy from "./IconoCopy/IconCopy";
import { Collapse } from "bootstrap";

// Array de datos para los links de navegación
const NAV_LINKS = [
  { id: "header", label: "Inicio" },
  { id: "projects", label: "Experiencia" },
  { id: "aboutMe", label: "Sobre mí" },
  { id: "certificates", label: "Certificados" },
];

// Array de datos para los iconos
const SOCIAL_LINKS = [
  {
    id: "github",
    icon: "bi bi-github iconNav",
    title: "GitHub",
    href: "https://github.com/luisruiz2000",
  },
  {
    id: "linkedin",
    icon: "bi bi-linkedin iconNav",
    title: "Linkedin",
    href: "https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/",
  },
];

const NavBar = () => {
  const navbarCollapseRef = useRef(null);

  const handleNavClick = () => {
    if (navbarCollapseRef.current) {
      const collapse = new Collapse(navbarCollapseRef.current, {
        toggle: false,
      });
      collapse.hide();
    }
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg p-0 navContent px-5">
        <div className="container-fluid">
          <a className="navbar-brand logo fs-1 colorTitle" href="#">
            LF
          </a>
          <button
            className="navbar-toggler bg-white border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            ref={navbarCollapseRef}>
            <div className="navbar-nav">
              {/* Links de navegación renderizados dinámicamente */}
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  className="nav-link"
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  onClick={handleNavClick}>
                  {link.label}
                </Link>
              ))}

              {/* Iconos de redes sociales para móvil */}
              <div className="iconsNavMovil">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    title={social.title}
                    target="_blank"
                    href={social.href}
                    className={social.icon}
                    onClick={handleNavClick}
                    rel="noopener noreferrer"
                    aria-label={`Visita nuestro perfil en ${social.title}`}></a>
                ))}
                <div onClick={handleNavClick}>
                  <IconCopy
                    classIcon="bi bi-envelope-fill iconNav"
                    valueCopy="luisruiz462000@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Iconos de redes sociales para desktop */}
        <div className="iconsNavActivo">
          <IconCopy
            classIcon="bi bi-envelope-fill iconNav"
            valueCopy="luisruiz462000@gmail.com"
          />
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.id}
              title={social.title}
              target="_blank"
              href={social.href}
              className={social.icon}
              rel="noopener noreferrer"
              aria-label={`Visita nuestro perfil en ${social.title}`}></a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
