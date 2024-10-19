import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vinh_phu from "../../assets/images/vinh_phu.svg";

export default function Slides() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
  };

  return (
    <div>
      <h2>Carousel Component</h2>
      <Slider {...settings}>
        <div>
          <img src={vinh_phu} alt="vp" />
        </div>
        <div>
          <img src={vinh_phu} alt="vp" />
        </div>
        <div>
          <img src={vinh_phu} alt="vp" />
        </div>
        <div>
          <img src={vinh_phu} alt="vp" />
        </div>
      </Slider>
    </div>
  );
}
