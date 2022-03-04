import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { useGetTVsMutation } from "../../../app/services/shows/showsPageApi";
import { HomeGridItem } from "../../../components/HomeGridItem";
import { SideBoard } from "../../../components/SideBoard";
import { setShowsArray } from "./shows.reducer";

export const Shows = () => {
  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);

  const dispatch = useDispatch();
  const shows = useAppSelector((state) => state.showsPage.shows);
  const [getShows, { isLoading, data }] = useGetTVsMutation();

  useEffect(() => {
    if (shows.length < 19) {
      getShows(null);
      if (data) {
        dispatch(setShowsArray(data));
      }
    }
  }, [shows, data, getShows]);

  return (
    <div className="container p-2 md:p-4">
      <h2 className="font-semibold dark:text-white text-xl md:text-2xl  mb-3 md:mb-6">
        Popuar Shows
      </h2>

      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 lg:gap-x-8">
        <div>
          <SideBoard />
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {!isMobile
              ? shows.map((show) => (
                  <HomeGridItem
                    mediaType={show.mediaType}
                    id={show.id}
                    key={show.id}
                    imgUrl={show.poster}
                    title={show.title}
                    year={show.year}
                    rating={show.rating}
                  />
                ))
              : shows.map((show) => (
                  <HomeGridItem
                    mediaType={show.mediaType}
                    id={show.id}
                    key={show.id}
                    imgUrl={show.poster}
                    title={show.title}
                    year={show.year}
                    rating={show.rating}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
