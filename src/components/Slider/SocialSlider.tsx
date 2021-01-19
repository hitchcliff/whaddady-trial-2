import Slider from 'react-slick';

interface SocialSliderProps {
  children?: any;
}

export default function SocialSlider({ children }: SocialSliderProps) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: 'linear',
  };

  return (
    <div className="w-full">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
