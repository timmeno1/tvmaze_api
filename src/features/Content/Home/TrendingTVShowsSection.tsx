import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { useGetTVsMutation } from "../../../app/services/home/homePageApi";
import { HomeGridItem } from "../../../components/HomeGridItem";
import { Preloader } from "../../../components/Preloader";
import { setTVsSection } from "./home.reducer";

export const TrendingTVShowsSection = () => {
  const dispatch = useDispatch();
  const TVs = useAppSelector((state) => state.homePage.TVs);
  const [getTVs, { isLoading, data }] = useGetTVsMutation();

  useEffect(() => {
    if (TVs.length !== 8) {
      getTVs(null);
      if (data) {
        dispatch(setTVsSection(data));
      }
    }
  }, [TVs, data, getTVs]);
  return (
    <div className="">
      <h2 className=" dark:text-white font-semibold text-xl md:text-2xl mb-3 md:mb-6">
        Trending TV Shows
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        {!isLoading ? (
          TVs.map((tv) => (
            <HomeGridItem
              mediaType={tv.mediaType}
              id={tv.id}
              key={tv.id}
              imgUrl={tv.poster}
              title={tv.title}
              year={tv.year}
              rating={tv.rating}
            />
          ))
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};
