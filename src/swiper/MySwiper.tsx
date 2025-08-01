
import { CarGallery } from "../products";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import 'swiper/css';

const MySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={300}
      centeredSlides={true}
      className="swiper_box"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {CarGallery.map((product, index) => (
        <SwiperSlide
          key={product.id}
          data-id={product.id}
          className={`swiper_box_card ${index === activeIndex ? 'active' : ''}`}
        >
          {index === activeIndex && (
            <>
              <h1 className="swiper_box_card_title">{product.name}</h1>
              <p className="swiper_box_card_price">
                from £ <span>{product.price}</span>
              </p>
            </>
          )}
          <img src={product.img} alt="" className="swiper_box_card_img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
