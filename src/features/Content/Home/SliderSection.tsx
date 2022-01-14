import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, EffectCoverflow, Navigation } from "swiper";
import "swiper/css/bundle";
import { Slide } from "./Slide";

// image request configuration
let baseUrl = "https://image.tmdb.org/t/p/";
let size = "w1280";
let imgPath = "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg";

export const SliderSection = () => {
  const imgUrl = `${baseUrl}${size}${imgPath}`;

  return (
    <Swiper
      // install Swiper modules
      modules={[Scrollbar, A11y, Autoplay, EffectCoverflow, Navigation]}
      spaceBetween={10}
      autoplay
      effect="coverflow"
      slidesPerView={1}
      initialSlide={0}
      speed={500}
      navigation={true}
      scrollbar={{ draggable: true }}
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log("slide change")}
      coverflowEffect={{
        rotate: 10,
        stretch: 50,
        depth: 100,
        modifier: 5,
        slideShadows: false,
      }}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <SwiperSlide key={i}>
          <Slide imgUrl={imgUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
