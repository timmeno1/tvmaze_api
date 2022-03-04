import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Mousewheel, Scrollbar } from "swiper";
import { useAppSelector } from "../../../app/hooks";
import { useDispatch } from "react-redux";
import { useGetPeopleMutation } from "../../../app/services/home/homePageApi";
import { useEffect } from "react";
import { PeopleType, setPeopleSection } from "./home.reducer";

const PeopleItem = (props:PeopleType) => {
  return (
    <div className="flex flex-row justify-center mx-auto w-full lg:w-2/3 rounded-lg  border-2 border-pink-600 border-opacity-50">
      <img
        className="rounded-lg"
        src={props.profile_path}
        alt=""
      />
      <div className="absolute rounded-b-lg mx-auto w-full lg:w-2/3 h-1/3 bottom-0 flex justify-start items-end p-2 text-pink-600 md:text-xl bg-gradient-to-b to-gray-800 from-transparent">
        {props.name}
      </div>
    </div>
  );
};

export const PopularPeopleSection = () => {
  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);
  const dispatch = useDispatch();
  const people = useAppSelector((state) => state.homePage.people);
  const [getPeople, { isLoading, data }] = useGetPeopleMutation();

  useEffect(() => {
    if (people.length !== 8) {
      getPeople(null);
      if (data) {
        dispatch(setPeopleSection(data));
      }
    }
  }, [getPeople, data, people]);

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
        {people.map((person) => (
          <SwiperSlide key={person.id}>
            <PeopleItem id={person.id} mediaType={person.id.toString()}  name={person.name} profile_path={person.profile_path}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
