import React from "react";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 bottom-0 transform translate-x-1/2 cursor-pointer text-white bg-gray-700 rounded-full p-2"
      onClick={onClick}
    >
      &gt; {/* Hoặc sử dụng biểu tượng mũi tên của bạn */}
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 bottom-0 transform -translate-x-1/2 cursor-pointer text-white bg-gray-700 rounded-full p-2 mr-2"
      onClick={onClick}
    >
      &lt; {/* Hoặc sử dụng biểu tượng mũi tên của bạn */}
    </div>
  );
};

export default function Slided() {
  const settings = {
    dots: false, // Đặt thành false vì chúng ta sẽ sử dụng mũi tên
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <h3 className="text-center">1</h3>
        </div>
        <div>
          <h3 className="text-center">2</h3>
        </div>
        <div>
          <h3 className="text-center">3</h3>
        </div>
        <div>
          <h3 className="text-center">4</h3>
        </div>
        <div>
          <h3 className="text-center">5</h3>
        </div>
        <div>
          <h3 className="text-center">6</h3>
        </div>
      </Slider>
      <div className="absolute right-0 bottom-0 flex space-x-2 mb-4 mr-4">
        <PrevArrow onClick={() => {}} />
        <NextArrow onClick={() => {}} />
      </div>
    </div>
  );
}
