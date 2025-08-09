
import { CarGallery } from "../products";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import 'swiper/css';
import { useNavigate } from "react-router-dom";

const ModelSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleSlideClick = () => {
    navigate("/")
  }
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
          onClick={handleSlideClick}
        >
          {index === activeIndex && (
            <>
              <h1 className="swiper_box_card_title">{product.name}</h1>
              <p className="swiper_box_card_price" >
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

export default ModelSwiper;
