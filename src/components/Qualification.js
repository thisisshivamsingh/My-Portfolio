import React, { useState } from "react";

const Qualification = () => {
  const [activeEducation, setActiveEducation] = useState(
    "qualification__active"
  );
  const [activeWork, setActiveWork] = useState(null);

  const showQualification = () => {
    setActiveEducation("qualification__active");
    setActiveWork(null);
  };

  const showWork = () => {
    setActiveWork("qualification__active");
    setActiveEducation(null);
  };

  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${activeEducation}`}
              data-target="#education"
              onClick={() => showQualification()}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={`qualification__button button--flex ${activeWork}`}
              data-target="#work"
              onClick={() => showWork()}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
          </div>

          <div className="qualification__sections">
            {/* <!--==================== QUALIFICATION CONTENT 1====================--> */}
            <div
              className={`qualification__content ${activeEducation}`}
              data-content
              id="education"
            >
              {/* <!--==================== QUALIFICATION 1====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Civil Engineer</h3>
                  <span className="qualification__subtitle">
                    RTU University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2016 - 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 2====================--> */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>

                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Web Design</h3>
                  <span className="qualification__subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2014 - 2017
                  </div>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 3====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">
                    Peru - Institute
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2017 - 2019
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 4====================--> */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
                <div>
                  <h3 className="qualification__title">Master in Ui/Ux</h3>
                  <span className="qualification__subtitle">
                    Peru - Institute
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2019 - 2021
                  </div>
                </div>
              </div>
            </div>
            {/* <!--==================== QUALIFICATION CONTENT 2====================--> */}
            <div
              className={`qualification__content ${activeWork}`}
              data-content
              id="work"
            >
              {/* <!--==================== QUALIFICATION 1====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Software Engineer</h3>
                  <span className="qualification__subtitle">
                    Microsoft - Peru
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2016 - 2018
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 2====================--> */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>

                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Frontend Developer</h3>
                  <span className="qualification__subtitle">
                    Apple Inc - Spain
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2020
                  </div>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 3====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Ui Designer</h3>
                  <span className="qualification__subtitle">Figma - Spain</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2017 - 2019
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
