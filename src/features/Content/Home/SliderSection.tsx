import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, EffectCoverflow, Navigation } from "swiper";
import "swiper/css/bundle";
import { Slide } from "./Slide";
import { useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react";
import { MoviesTVsItem } from "./home.reducer";


export const SliderSection = () => {

  const slidesData = useAppSelector((state)=>(state.homePage.slides))
  const [slides, setSlides] = useState<Array<MoviesTVsItem>>([
    {
      id: 1,
      title: "no title",
      poster: "no poster",
      year: 1,
      rating: 1,
      mediaType: "no type",
      backdrop: "no backdrop"
    }])

  useEffect(()=>{
    if(slidesData.length === 8) {
      setSlides(slidesData)
    }
  }, [slidesData])

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
    {slides.map((slide) => (
      <SwiperSlide key={slide.id}>
        <Slide id={slide.id} mediaType={slide.mediaType} poster={slide.poster} backdrop={slide.backdrop} rating={slide.rating}  title={slide.title} year={slide.year} />
      </SwiperSlide>
    ))}
    </Swiper>
  );
};
