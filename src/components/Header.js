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

  /*==================== DARK LIGHT THEME ====================*/
  // const themeButton = document.getElementById("theme-button");
  // const darkTheme = "dark-theme";
  // const iconTheme = "uil-sun";

  // // Previously selected topic (if user selected)
  // const selectedTheme = localStorage.getItem("selected-theme");
  // const selectedIcon = localStorage.getItem("selected-icon");

  // // We obtain the current theme that the interface has by validating the dark-theme class
  // const getCurrentTheme = () =>
  //   document.body.classList.contains(darkTheme) ? "dark" : "light";
  // const getCurrentIcon = () =>
  //   themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

  // // We validate if the user previously chose a topic
  // if (selectedTheme) {
  //   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  //   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
  //     darkTheme
  //   );
  //   themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
  //     iconTheme
  //   );
  // }

  // // Activate / deactivate the theme manually with the button
  // themeButton.addEventListener("click", () => {
  //   // Add or remove the dark / icon theme
  //   document.body.classList.toggle(darkTheme);
  //   themeButton.classList.toggle(iconTheme);
  //   // We save the theme and the current icon that the user chose
  //   localStorage.setItem("selected-theme", getCurrentTheme());
  //   localStorage.setItem("selected-icon", getCurrentIcon());
  // });

  // const sections = document.querySelectorAll("section[id]");

  // function scrollActive() {
  //   const scrollY = window.pageYOffset;

  //   sections.forEach((current) => {
  //     const sectionHeight = current.offsetHeight;
  //     const sectionTop = current.offsetTop - 50;
  //     sectionId = current.getAttribute("id");

  //     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //       document
  //         .querySelector(".nav__menu a[href*=" + sectionId + "]")
  //         .classList.add("active-link");
  //     } else {
  //       document
  //         .querySelector(".nav__menu a[href*=" + sectionId + "]")
  //         .classList.remove("active-link");
  //     }
  //   });
  // }
  // window.addEventListener("scroll", scrollActive);
  function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);

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
            {/* <-- Theme change button --> */}
            <i className="uil uil-moon change-theme" id="theme-button"></i>

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
