import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import { useState, useEffect } from "react";

const Carousel = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper === null) {
      const newSwiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 2000,
        },
      });

      setSwiper(newSwiper);
    }
  }, [swiper]);

  const slides = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/curso-react-flex.appspot.com/o/silider%2Fslider1.jpg?alt=media&token=89a7f9c3-db1a-4175-b3d4-8f247d889caf",
      title: "Slide 1",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/curso-react-flex.appspot.com/o/silider%2Fslider2.jpg?alt=media&token=1319dbf3-f7b6-4810-b88e-9ff2df8198a6",
      title: "Slide 2",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/curso-react-flex.appspot.com/o/silider%2Fslider3.jpg?alt=media&token=4aaa003f-5fe8-41a3-b0f9-38cbc4471e2f",
      title: "Slide 3",
    },
  ];

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className="swiper-slide">
            <img src={slide.src} alt={slide.title} />
            {/* <h3>{slide.title}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
