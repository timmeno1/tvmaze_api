import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Mousewheel, Scrollbar } from "swiper";
import { useAppSelector } from "../../../app/hooks";

const PeopleItem = () => {
  return (
    <div className="flex flex-row justify-center mx-auto w-full lg:w-2/3 rounded-lg  border-2 border-pink-600 border-opacity-50">
      <img
        className="rounded-lg"
        src={
          "https://www.themoviedb.org/t/p/original/cm4csWdIzLzLLY0slynfk1B71QF.jpg"
        }
        alt=""
      />
      <div className="absolute rounded-b-lg mx-auto w-full lg:w-2/3 h-1/3 bottom-0 flex justify-start items-end p-2 text-pink-500 md:text-xl bg-gradient-to-b to-gray-800 from-transparent">
        Gong Yoo
      </div>
    </div>
  );
};

export const PopularPeopleSection = () => {
  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);
  return (
    <div className="py-6">
      <Swiper
        modules={[Scrollbar, A11y, Autoplay, Mousewheel]}
        spaceBetween={20}
        autoplay
        mousewheel={{
          forceToAxis: true,
        }}
        slidesPerView={isMobile ? 2 : 4}
        scrollbar={{ draggable: true }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SwiperSlide key={i}>
            <PeopleItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
