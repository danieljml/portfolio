import React from 'react';
import shortid from 'shortid';
import { BsLinkedin } from 'react-icons/bs';

import firstSliderImage from '../../images/alejandro-escamilla-yC-Yzbqy7PY-unsplash.jpg';
import secondSliderImage from '../../images/alejandro-escamilla-LNRyGwIJr5c-unsplash.jpg';
import thirdSliderImage from '../../images/alejandro-escamilla-Dl6jeyfihLk-unsplash.jpg';
import './styles.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const SliderComponent = () => {
  const sliderInfo = [{ image: firstSliderImage }, { image: secondSliderImage }, { image: thirdSliderImage }];
  return (
    <div className="swiper mySwiper">
      <Swiper
        lazy="true"
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bullets: Array(3),
        }}
        className="swiper"
        loop
      >
        {sliderInfo.map(item => (
          <SwiperSlide className="swiper-slide" key={shortid.generate()}>
            <img loading="lazy" className="d-block w-100" src={item.image} alt={item.image} />
          </SwiperSlide>
        ))}
        <article loading="lazy" className="swiper__content">
          <div className="content">
            <h6 className="content__welcome">Hello, my name is</h6>
            <h1 className="content__name">Daniel Martinez</h1>
            <h5 className="content__dev">I am a Fullstack Developer</h5>
            <a className="content__contact" href="https://www.linkedin.com/in/daniel-j-martinez-5a4a171ba/" target="_blank" rel="noreferrer">
              LINKEDIN {<BsLinkedin className="contact__icon" />}
            </a>
          </div>
        </article>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
