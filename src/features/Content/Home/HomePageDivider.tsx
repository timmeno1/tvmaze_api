import { Background, Parallax } from "react-parallax";
import crew from "../../../assets/img/crew_photo.jpg";

export const HomePageDivider = () => {
  return (
    <Parallax
      blur={{ min: 1, max: -1 }}
      bgImage={crew}
      bgImageAlt="the cat"
      strength={300}
    >
      <div className="relative h-32 md:h-52 bg-gray-800 bg-opacity-40">
        <div className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-3 md:p-4 bg-white text-lg md:text-2xl  dark:bg-gray-800 text-gray-600 dark:text-gray-300 ring-1 ring-pink-600 ring-opacity-50">
          Popular people
        </div>
      </div>
    </Parallax>
  );
};
