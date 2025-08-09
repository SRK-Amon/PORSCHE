import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { ColoursFilter, MaterialsFilter, WheelsFilter } from "../products";
import check from "../assets/images/check_icon.svg";

import "swiper/css";
const FilterSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [colourActiveIndex, setColourActiveIndex] = useState(0);
    const [wheelsActiveIndex, setWheelsActiveIndex] = useState(0);
    const [materialsActiveIndex, setMaterialsActiveIndex] = useState(0);

    return (
        <Swiper
            slidesPerView={3.9}
            spaceBetween={50}
            centeredSlides={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="filters_card_box"
        >
            <SwiperSlide className={`card_box ${activeIndex === 0 ? "active" : ""}`}>
                <div className="card_top_box">
                    <h4 className="card_top_box_title">Exterior Colours</h4>
                    <p className="card_top_box_text">+2,207</p>
                </div>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={50}
                    centeredSlides={true}
                    onSlideChange={(swiper) => setColourActiveIndex(swiper.realIndex)}
                    className="card_center_box"
                >
                    {ColoursFilter.map((product, index) => (
                        <SwiperSlide
                            key={product.id}
                            className={`card_center_mini_box ${index === colourActiveIndex ? "active" : ""}`}
                        >
                            <img
                                src={product.img}
                                alt=""
                                className="card_center_mini_box_img"
                            />
                            <h4 className="card_center_mini_box_title">{product.name}</h4>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img src={check} alt="" className="card_bottom_img" />
            </SwiperSlide>
            <SwiperSlide className={`card_box ${activeIndex === 1 ? "active" : ""}`}>
                <div className="card_top_box">
                    <h4 className="card_top_box_title">Wheels</h4>
                    <p className="card_top_box_text">+1,931</p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides={true}
                    onSlideChange={(swiper) => setWheelsActiveIndex(swiper.realIndex)}
                    className="card_center_box"
                >
                    {WheelsFilter.map((product, index) => (
                        <SwiperSlide
                            key={product.id}
                            className={`card_center_mini_box ${index === wheelsActiveIndex ? "active" : ""}`}
                        >
                            <img
                                src={product.img}
                                alt=""
                                className="card_center_mini_box_img"
                            />
                            <h4 className="card_center_mini_box_title">{product.name}</h4>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img src={check} alt="" className="card_bottom_img" />
            </SwiperSlide>
            <SwiperSlide className={`card_box ${activeIndex === 2 ? "active" : ""}`}>
                <div className="card_top_box">
                    <h4 className="card_top_box_title">Interior Colours & Materials</h4>
                    <p className="card_top_box_text">+7,613</p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides={true}
                    onSlideChange={(swiper) => setMaterialsActiveIndex(swiper.realIndex)}
                    className="card_center_box"
                >
                    {MaterialsFilter.map((product, index) => (
                        <SwiperSlide
                            key={product.id}
                            className={`card_center_mini_box ${index === materialsActiveIndex ? "active" : ""}`}
                        >
                            <img
                                src={product.img}
                                alt=""
                                className="card_center_mini_box_img"
                            />
                            <h4 className="card_center_mini_box_title">{product.name}</h4>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img src={check} alt="" className="card_bottom_img" />
            </SwiperSlide>
            <SwiperSlide className={`card_box ${activeIndex === 3 ? "active" : ""}`}>SOON</SwiperSlide>
        </Swiper>
    );
};

export default FilterSwiper;
