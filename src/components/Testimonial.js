import React from "react";
import imgA from "../assets/img/testimonial1.jpg";
import imgB from "../assets/img/testimonial2.jpg";
import imgC from "../assets/img/testimonial3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial section">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">My client saying</span>

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="testimonial__container container">
            <div>
              {/* <!--==================== TESTIMONIAL 1 ====================--> */}
              <SwiperSlide>
                <div
                  className="testimonial__content"
                  style={{ marginLeft: "40px", marginRight: "40px" }}
                >
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={imgA} alt="" className="testimonial__img" />
                      <div>
                        <h3 className="testimonial__name">Sara Smith</h3>
                        <span className="testimonial__client">Client</span>
                      </div>
                    </div>
                    <div>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                    </div>
                  </div>
                  <p className="testimonial__description">
                    I get a good impression, I carry out my project with all the
                    possible quality and attention and support 24 hours a day.
                  </p>
                </div>
              </SwiperSlide>

              {/* <!--==================== TESTIMONIAL 2 ====================--> */}
              <SwiperSlide>
                <div
                  className="testimonial__content"
                  style={{ marginLeft: "40px", marginRight: "40px" }}
                >
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={imgB} alt="" className="testimonial__img" />
                      <div>
                        <h3 className="testimonial__name">Matt Robinson</h3>
                        <span className="testimonial__client">Client</span>
                      </div>
                    </div>
                    <div>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                    </div>
                  </div>
                  <p className="testimonial__description">
                    I get a good impression, I carry out my project with all the
                    possible quality and attention and support 24 hours a day.
                  </p>
                </div>
              </SwiperSlide>

              {/* <!--==================== TESTIMONIAL 3 ====================--> */}
              <SwiperSlide>
                <div
                  className="testimonial__content"
                  style={{ marginLeft: "40px", marginRight: "40px" }}
                >
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={imgC} alt="" className="testimonial__img" />
                      <div>
                        <h3 className="testimonial__name">Raul Harris</h3>
                        <span className="testimonial__client">Client</span>
                      </div>
                    </div>
                    <div>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                    </div>
                  </div>
                  <p className="testimonial__description">
                    I get a good impression, I carry out my project with all the
                    possible quality and attention and support 24 hours a day.
                  </p>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
