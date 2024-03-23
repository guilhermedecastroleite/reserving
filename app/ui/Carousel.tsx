import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselType {
  children: React.ReactNode[];
}

const Carousel = ({ children }: CarouselType) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
