
import Footer from '../components/Footer';
import ModelSwiper from '../swiper/ModelSwiper';
const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery_box">
        <p className="gallery_box_text">Model overview</p>
        <ModelSwiper />
      </div>
      <Footer />
    </section>
  );
}

export default Gallery;
