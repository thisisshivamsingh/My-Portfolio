import React from "react";
import img from "../assets/img/about.jpg";
import file from "../assets/pdf/Alexa-Cv.pdf";

const About = () => {
  return (
    <>
      <section class="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
          <img src={img} alt="" className="about__img" />
          <div class="about__data">
            <p className="about__description">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">Fresher</span>
                <span className="about__info-name">
                  Years <br /> experience
                </span>
              </div>
              <div>
                <span className="about__info-title">20+</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>
              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">
                  Companies <br /> worked
                </span>
              </div>
            </div>
            <div className="about__buttons">
              <a download="" href={file} className="button button--flex">
                Download CV<i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
