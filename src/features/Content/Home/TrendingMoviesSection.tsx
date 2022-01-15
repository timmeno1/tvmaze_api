import { useAppSelector } from "../../../app/hooks";
import { GridItem } from "./GridItem";

let baseUrl = "https://image.tmdb.org/t/p/";
let size = "w500";

export const TrendingMoviesSection = () => {
  const imgUrl = `${baseUrl}${size}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`;

  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);

  return (
    <>
      <h2 className="font-semibold dark:text-white text-xl md:text-2xl  mb-3 md:mb-6">
        Trending Movies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        {!isMobile
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <GridItem key={i} imgUrl={imgUrl} />
            ))
          : [1, 2, 3, 4].map((i) => <GridItem key={i} imgUrl={imgUrl} />)}
      </div>
    </>
  );
};
