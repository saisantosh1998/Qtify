import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { Stack } from "@mui/material";

const Carousel = ({ data, renderedItem }) => {
  const swiperRef = useRef();
  const breakpoints = {
    0:{
      slidesPerView:1,
    },
    600: {
      slidesPerView:2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  };

  return (
    <Stack spacing={2} direction="row">
      <LeftButton click={() => swiperRef.current.slidePrev()}/>
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={breakpoints}
      >
        {data.length > 0 &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              {renderedItem({ key: item.id, album: item })}
            </SwiperSlide>
          ))}
      </Swiper>
      <RightButton click={() => swiperRef.current.slideNext()}/>
    </Stack>
  );
};

export default Carousel;
