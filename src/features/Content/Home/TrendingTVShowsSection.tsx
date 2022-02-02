import { useAppSelector } from "../../../app/hooks";
import { HomeGridItem } from "../../../components/HomeGridItem";

let baseUrl = "https://image.tmdb.org/t/p/";
let size = "w500";

export const TrendingTVShowsSection = () => {
  const imgUrl = `${baseUrl}${size}/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg`;
  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);
  return (
    <div className="">
      <h2 className=" dark:text-white font-semibold text-xl md:text-2xl mb-3 md:mb-6">
        Trending TV Shows
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        {!isMobile
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <HomeGridItem key={i} imgUrl={imgUrl} />
            ))
          : [1, 2, 3, 4].map((i) => <HomeGridItem key={i} imgUrl={imgUrl} />)}
      </div>
    </div>
  );
};
