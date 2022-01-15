import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Mousewheel, Scrollbar } from "swiper";
import { useAppSelector } from "../../../app/hooks";

export const PopularPeopleSection = () => {
  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);
  return (
    <div className="py-6">
      <Swiper
        // install Swiper modules
        modules={[Scrollbar, A11y, Autoplay, Mousewheel]}
        spaceBetween={0}
        autoplay
        mousewheel={{
          forceToAxis:true,
          
        }}
        slidesPerView={isMobile ? 3 : 4}
        scrollbar={{ draggable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log("slide change")}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SwiperSlide key={i}>
            <div className="max-w-7xl  flex flex-row justify-center mx-auto w-4/5">
              <img
                src={
                  "https://www.themoviedb.org/t/p/original/cm4csWdIzLzLLY0slynfk1B71QF.jpg"
                }
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
