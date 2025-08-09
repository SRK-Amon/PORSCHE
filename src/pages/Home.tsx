  import { Link } from "react-router-dom"
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation } from "swiper/modules";

  import arrow from "../assets/images/arrow.svg";
  import save from "../assets/images/save.svg";
  import TechnicalData from "../assets/images/Technical_data_img.svg";


  import 'swiper/css';
  import 'swiper/css/navigation';


  import { filterOptions, HomeGallery } from "../products";

  import { useState } from "react";
  import FilterSwiper from "../swiper/FilterSwiper";
  const Home = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    return (
      <div className="home">
        <div className="home_box">
          <div className="home_box_top">
            <Link to="/gallery" className="home_box_top_link"><img src={arrow} alt="" /><span>Model overview</span></Link>
            <h1 className="home_box_top_title">911 Carrera S</h1>
            <Link to="/" className="home_box_top_link"><span>Model overview</span><img src={save} alt="" /></Link>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="home_box_swiper"
          >
            {
              HomeGallery.map(product => (
                <SwiperSlide key={product.id} className="swiper_card"><img src={product.img} alt="" /></SwiperSlide>
              ))
            }
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
              {filterOptions.map(option => (
                <div
                  key={option.id}
                  className={`filter_mini_box ${activeFilter === option.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveFilter(prev => prev === option.id ? null : option.id);
                  }}
                >
                  <img
                    src={option.img}
                    alt=""
                    className="filter_mini_box_img"
                    style={{ display: activeFilter === option.id && option.imgActive ? "none" : "block" }}
                  />
                  {option.imgActive && (
                    <img
                      src={option.imgActive}
                      alt=""
                      className="filter_mini_box_img_active"
                      style={{ display: activeFilter === option.id ? "block" : "none" }}
                    />
                  )}
                  <h4 className="filter_mini_box_title">{option.title}</h4>
                </div>
              ))}
            </div>
            <div className="bottom_price_box">
              <h4 className="bottom_price_box_title">Total Price</h4>
              <p className="bottom_price_box_price">£125,356.00</p>
            </div>
          </div>
        </div>
      </div>
      // <FilterSwiper/>
    )
  }
  export default Home
