import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper";
import "swiper/css/bundle";

// image request configuration
let baseUrl = "https://image.tmdb.org/t/p/";
let size = "w780";
let imgPath = "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg";

export const SliderSection = () => {
  const imgUrl = `${baseUrl}${size}${imgPath}`;

  return (
    <Swiper
    className="my-6"
      // install Swiper modules
      modules={[Scrollbar, A11y, Autoplay, EffectCoverflow]}
      spaceBetween={50}
      autoplay
      effect="coverflow"
      slidesPerView={1}
      initialSlide={1}
      loop
      scrollbar={{ draggable: true }}
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log("slide change")}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 200,
        modifier: 5,
        slideShadows: true,
      }}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <SwiperSlide key={i}>
          <div className="max-w-7xl  flex flex-row justify-center mx-auto w-4/5">
            <img src={imgUrl} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
