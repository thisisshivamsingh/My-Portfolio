import React from "react";
import img from "../assets/img/portfolio1.jpg";
import imgTwo from "../assets/img/portfolio2.jpg";
import imgThree from "../assets/img/portfolio3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <div className="portfolio__container container ">
            <div>
              {/* <!--==================== PORTFOLIO 1 ====================--> */}
              <SwiperSlide>
                <div className="portfolio__content grid ">
                  <img src={img} alt="" className="portfolio__img" />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Modern Website</h3>
                    <p className="portfolio__description">
                      Website adaptable to all devices, with ui components and
                      animated interactions.
                    </p>
                    <a
                      href="#"
                      className="button button--flex button--small portfolio__button"
                    >
                      Demo
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* <!--==================== PORTFOLIO 2 ====================--> */}
              <SwiperSlide>
                <div className="portfolio__content grid ">
                  <img src={imgTwo} alt="" className="portfolio__img" />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Brand Design</h3>
                    <p className="portfolio__description">
                      Website adaptable to all devices, with ui components and
                      animated interactions.
                    </p>
                    <a
                      href="#"
                      className="button button--flex button--small portfolio__button"
                    >
                      Demo
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* <!--==================== PORTFOLIO 3 ====================--> */}
              <SwiperSlide>
                <div className="portfolio__content grid ">
                  <img src={imgThree} alt="" className="portfolio__img" />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Online Store</h3>
                    <p className="portfolio__description">
                      Website adaptable to all devices, with ui components and
                      animated interactions.
                    </p>
                    <a
                      href="#"
                      className="button button--flex button--small portfolio__button"
                    >
                      Demo
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Portfolio;

// const Portfolio = () => {
//   let swiper = new Swiper(".portfolio__container", {
//     cssMode: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     mousewheel: true,
//     keyboard: true,
//   });
//   return (
//     <>
//       <section className="portfolio section" id="portfolio">
//         <h2 className="section__title">Portfolio</h2>
//         <span className="section__subtitle">Most recent work</span>

//         <div className="portfolio__container container swiper-container">
//           <div className="swiper-wrapper">
//             {/* <!--==================== PORTFOLIO 1 ====================--> */}

//             <div className="portfolio__content grid swiper-slide">
//               <img src={img} alt="" className="portfolio__img" />

//               <div className="portfolio__data">
//                 <h3 className="portfolio__title">Modern Website</h3>
//                 <p className="portfolio__description">
//                   Website adaptable to all devices, with ui components and
//                   animated interactions.
//                 </p>
//                 <a
//                   href="#"
//                   className="button button--flex button--small portfolio__button"
//                 >
//                   Demo
//                   <i className="uil uil-arrow-right button__icon"></i>
//                 </a>
//               </div>
//             </div>

//             {/* <!--==================== PORTFOLIO 2 ====================--> */}

//             <div className="portfolio__content grid swiper-slide">
//               <img src={imgTwo} alt="" className="portfolio__img" />
//               <div className="portfolio__data">
//                 <h3 className="portfolio__title">Brand Design</h3>
//                 <p className="portfolio__description">
//                   Website adaptable to all devices, with ui components and
//                   animated interactions.
//                 </p>
//                 <a
//                   href="#"
//                   className="button button--flex button--small portfolio__button"
//                 >
//                   Demo
//                   <i className="uil uil-arrow-right button__icon"></i>
//                 </a>
//               </div>
//             </div>

//             {/* <!--==================== PORTFOLIO 3 ====================--> */}

//             <div className="portfolio__content grid swiper-slide">
//               <img src={imgThree} alt="" className="portfolio__img" />
//               <div className="portfolio__data">
//                 <h3 className="portfolio__title">Online Store</h3>
//                 <p className="portfolio__description">
//                   Website adaptable to all devices, with ui components and
//                   animated interactions.
//                 </p>
//                 <a
//                   href="#"
//                   className="button button--flex button--small portfolio__button"
//                 >
//                   Demo
//                   <i className="uil uil-arrow-right button__icon"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* <!-- Add Arrows --> */}
//           <div className="swiper-button-next"></div>
//           <div className="swiper-button-prev"></div>

//           {/* <-- Add Pagination --> */}
//           <div className="swiper-pagination"></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;
