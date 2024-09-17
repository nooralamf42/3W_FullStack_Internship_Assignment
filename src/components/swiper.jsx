import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperComponent = () => {
  const dummyImages = [
    "https://via.placeholder.com/800x450.png?text=Slide+1",
    "https://via.placeholder.com/800x450.png?text=Slide+2",
    "https://via.placeholder.com/800x450.png?text=Slide+3",
  ];

  return (
    <div className="m-2 rounded-xl overflow-hidden bg-neutral-300">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {dummyImages.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="relative w-full h-32 rounded-xl overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
