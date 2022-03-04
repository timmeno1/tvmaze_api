import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { useGetMoviesMutation } from "../../../app/services/movies/moviesPageApi";
import { HomeGridItem } from "../../../components/HomeGridItem";
import { SideBoard } from "../../../components/SideBoard";
import { MoviesTVsItem } from "../Home/home.reducer";
import { setMoviesArray } from "./movies.reducer";


export const Movies = () => {

  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);

  const dispatch = useDispatch();
  const movies = useAppSelector((state) => state.moviesPage.movies);
  const [getMovies, { isLoading, data }] = useGetMoviesMutation();

  useEffect(() => {
    if (movies.length < 19) {
      getMovies(null);
      if (data) {
        dispatch(setMoviesArray(data));
      }
    }
  }, [movies, data, getMovies]);

  return (
    <div className="container px-2 py-4 md:p-4">
      <h2 className="font-semibold dark:text-white text-xl md:text-2xl  mb-3 md:mb-6">
        Popuar Movies
      </h2>

      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 lg:gap-x-8">
        <div>
          <SideBoard />
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {!isMobile
              ? movies.map((movie: MoviesTVsItem) => (
                  <HomeGridItem
                    id={movie.id}
                    mediaType={movie.mediaType}
                    key={movie.id}
                    imgUrl={movie.poster}
                    title={movie.title}
                    year={movie.year}
                    rating={movie.rating}
                  />
                ))
              : movies.map((movie: MoviesTVsItem) => (
                  <HomeGridItem
                    id={movie.id}
                    mediaType={movie.mediaType}
                    key={movie.id}
                    imgUrl={movie.poster}
                    title={movie.title}
                    year={movie.year}
                    rating={movie.rating}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
