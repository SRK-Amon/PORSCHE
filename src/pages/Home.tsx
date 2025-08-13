import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

import arrow from "../assets/images/arrow.svg";
import save from "../assets/images/save.svg";
import TechnicalData from "../assets/images/Technical_data_img.svg";
import modal_911 from "../assets/images/Modal_911.svg";
import porsche from "../assets/images/Modal_img.png";
import location from "../assets/images/location.svg";
import order_save from "../assets/images/save.svg";
import order from "../assets/images/Modal_order_img.svg";
import close from "../assets/images/Modal_close.svg";

import "swiper/css";
import "swiper/css/navigation";

import { filterOptions, HomeGallery } from "../products";

import FilterSwiper from "../swiper/FilterSwiper";
const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [active, setActive] = useState(true);
  return (
    <div className="home">
      <div className={`modal ${active ? "active" : ""}`}>
        <div className="modal_box">
          <div className="modal_top_box">
            <img src={modal_911} alt="" className="modal_top_box_911_img" />
            <img src={porsche} alt="" className="modal_top_box_porsche_img" />
          </div>
          <div className="modal_center_box">
            <h3 className="modal_center_box_title">Price information</h3>
            <div className="modal_center_price_box">
              <p className="modal_center_price_box_title">Base Price</p>
              <p className="modal_center_price_box_price">£110,000.00</p>
            </div>
            <div className="modal_center_price_box">
              <p className="modal_center_price_box_title">
                Sum of selected options
              </p>
              <p className="modal_center_price_box_price">£15,356.00</p>
            </div>
            <div className="modal_center_total_price_box">
              <h3 className="modal_center_total_price_box_title">
                Total Price
              </h3>
              <p className="modal_center_total_price_box_price">£125,356.00</p>
            </div>
          </div>
          <div className="modal_bottom_box">
            <Link to="/" className="modal_bottom_left_box">
              <img
                src={location}
                alt=""
                className="modal_bottom_left_box_img"
              />
              <p className="modal_bottom_left_box_text">Find Porsche Center</p>
            </Link>
            <Link to="/" className="modal_bottom_center_box">
              <img
                src={order_save}
                alt=""
                className="modal_bottom_center_box_img"
              />
              <p className="modal_bottom_center_box_text">Save configuration</p>
            </Link>
              <Link to="/" className="modal_bottom_right_box">
            <button className="modal_bottom_right_box_btn">

                <p className="modal_bottom_right_box_text">Order Now</p>
                <img
                  src={order}
                  alt=""
                  className="modal_bottom_right_box_img"
                />
            </button>
              </Link>
          </div>
          <img
            src={close}
            alt=""
            className="modal_close"
            onClick={() => setActive(true)}
          />
        </div>
      </div>
      <div className="home_box">
        <div className="home_box_top">
          <Link to="/gallery" className="home_box_top_link">
            <img src={arrow} alt="" />
            <span>Model overview</span>
          </Link>
          <h1 className="home_box_top_title">911 Carrera S</h1>
          <Link to="/" className="home_box_top_link">
            <span>Save configuration</span>
            <img src={save} alt="" />
          </Link>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="home_box_swiper"
        >
          {HomeGallery.map((product) => (
            <SwiperSlide key={product.id} className="swiper_card">
              <img src={product.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`home_box_filters ${activeFilter ? "active" : ""}`}>
          <FilterSwiper />
        </div>
        <div className="home_box_bottom">
          <button className="bottom_btn_box">
            <p className="bottom_btn_box_text">Technical Data</p>
            <img src={TechnicalData} alt="" className="bottom_btn_box_img" />
          </button>

          <div className="home_filter_box">
            {filterOptions.map((option) => (
              <div
                key={option.id}
                className={`filter_mini_box ${
                  activeFilter === option.id ? "active" : ""
                }`}
                onClick={() => {
                  setActiveFilter((prev) =>
                    prev === option.id ? null : option.id
                  );
                }}
              >
                <img
                  src={option.img}
                  alt=""
                  className="filter_mini_box_img"
                  style={{
                    display:
                      activeFilter === option.id && option.imgActive
                        ? "none"
                        : "block",
                  }}
                />
                {option.imgActive && (
                  <img
                    src={option.imgActive}
                    alt=""
                    className="filter_mini_box_img_active"
                    style={{
                      display: activeFilter === option.id ? "block" : "none",
                    }}
                  />
                )}
                <h4 className="filter_mini_box_title">{option.title}</h4>
              </div>
            ))}
          </div>
          <div className="bottom_price_box" onClick={() => setActive(false)}>
            <h4 className="bottom_price_box_title">Total Price</h4>
            <p className="bottom_price_box_price">£125,356.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
