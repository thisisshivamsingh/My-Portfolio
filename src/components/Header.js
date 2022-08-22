import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            Alexa
          </Link>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link to="/home" className="nav__link">
                  <i class="uil uil-estate"></i> Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  <i class="uil uil-user"></i> About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/skills" className="nav__link">
                  <i class="uil uil-file-alt"></i> Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/services" className="nav__link">
                  <i class="uil uil-briefcase-alt"></i> Services
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/portfolio" className="nav__link">
                  <i class="uil uil-scenery"></i> Portfolio
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link">
                  <i class="uil uil-message"></i> Contactme
                </Link>
              </li>
            </ul>
            <i class="uil uil-times nav__close" id="nav-close"></i>
          </div>
          <div className="nav__btns">
            <div className="nav__toggle" id="nav-toggle">
              <i class="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
