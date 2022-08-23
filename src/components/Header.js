import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";

const Header = () => {
  const [navToggleClassName, setNavToggleClassName] = useState("");
  const navToggle = () => {
    setNavToggleClassName("show-menu");
  };
  const navClose = () => {
    setNavToggleClassName("");
  };
  const linkAction = () => {
    setNavToggleClassName("");
  };
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            Shivam
          </Link>
          <div className={`nav__menu ${navToggleClassName}`} id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link
                  smooth
                  to="#home"
                  className="nav__link"
                  onClick={linkAction}
                >
                  <i className="uil uil-estate nav__icon"></i> Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  smooth
                  to="#about"
                  className="nav__link"
                  onClick={linkAction}
                >
                  <i className="uil uil-user nav__icon"></i> About
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  smooth
                  to="#skills"
                  className="nav__link"
                  onClick={linkAction}
                >
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  smooth
                  to="#services"
                  className="nav__link"
                  onClick={linkAction}
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  smooth
                  to="#portfolio"
                  className="nav__link"
                  onClick={linkAction}
                >
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  smooth
                  to="#contact"
                  className="nav__link"
                  onClick={linkAction}
                >
                  <i className="uil uil-message nav__icon"></i> Contactme
                </Link>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              id="nav-close"
              onClick={navClose}
            ></i>
          </div>
          <div className="nav__btns">
            <div className="nav__toggle" id="nav-toggle" onClick={navToggle}>
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
