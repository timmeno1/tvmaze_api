import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { useGetMoviesMutation } from "../../../app/services/home/homePageApi";
import { HomeGridItem } from "../../../components/HomeGridItem";
import { Preloader } from "../../../components/Preloader";
import { setMoviesSection } from "./home.reducer";

export const TrendingMoviesSection = () => {
  const dispatch = useDispatch();
  const movies = useAppSelector((state) => state.homePage.movies);
  const [getMovies, { isLoading, data }] = useGetMoviesMutation();

  useEffect(() => {
    if (movies.length !== 8) {
      getMovies(null);
      if (data) {
        dispatch(setMoviesSection(data));
      }
    }
  }, [movies, data, getMovies]);

  return (
    <>
      <h2 className="font-semibold dark:text-white text-xl md:text-2xl  mb-3 md:mb-6">
        Trending Movies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        {!isLoading ? (
          movies.map((movie) => (
            <HomeGridItem
              key={movie.id}
              imgUrl={movie.poster}
              title={movie.title}
              rating={movie.rating}
              year={movie.year}
            />
          ))
        ) : (
          <Preloader />
        )}
      </div>
    </>
  );
};
