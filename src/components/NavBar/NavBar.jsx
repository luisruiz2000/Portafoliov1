import React, { useRef } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import IconCopy from "./IconoCopy/IconCopy";
import { Collapse } from "bootstrap";

const NavBar = () => {
  const navbarCollapseRef = useRef(null);

  const handleNavClick = () => {
    if (navbarCollapseRef.current) {
      const collapse = new Collapse(navbarCollapseRef.current, {
        toggle: false
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

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" ref={navbarCollapseRef}>
            <div className="navbar-nav">
              <Link
                className="nav-link"
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
                onClick={handleNavClick}>
                Inicio
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
                onClick={handleNavClick}>
                Proyectos
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
                onClick={handleNavClick}>
                Sobre mí
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="certificates"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
                onClick={handleNavClick}>
                Certificados
              </Link>
              <div className="iconsNavMovil">
                <a
                  title="GitHub"
                  target="_blank"
                  href="https://github.com/luisruiz2000"
                  className="bi bi-github iconNav"
                  onClick={handleNavClick}></a>
                <a
                  title="Linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
                  className="bi bi-linkedin iconNav"
                  onClick={handleNavClick}></a>
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

        <div className="iconsNavActivo">
          <IconCopy
            classIcon="bi bi-envelope-fill iconNav"
            valueCopy="luisruiz462000@gmail.com"
          />
          <a
            title="GitHub"
            target="_blank"
            href="https://github.com/luisruiz2000"
            className="bi bi-github iconNav"></a>
          <a
            title="Linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
            className="bi bi-linkedin iconNav"></a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
