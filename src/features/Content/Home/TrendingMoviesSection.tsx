import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { posterImgBaseUrl } from "../../../app/services/api.config";
import { useGetMoviesMutation } from "../../../app/services/home/homePageApi";
import { HomeGridItem } from "../../../components/HomeGridItem";
import { Preloader } from "../../../components/Preloader";
import { MoviesArray, setMoviesSection } from "./home.reducer";

export const TrendingMoviesSection = () => {
  const dispatch = useDispatch();
  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);
  const movies = useAppSelector((state) => state.homePage.movies);
  const [getMovies, { isLoading, isSuccess, data }] = useGetMoviesMutation();

  useEffect(() => {
    console.log(movies.length);
    let moviesFormatted: MoviesArray = [
      {
        id: 123,
        title: "qwe",
        poster: "qwe",
        year: 123,
        rating: 123,
      },
    ];
    if (movies.length !== 8) {
      getMovies(null);
      if (data) {
        for (let i = 0; i < 8; i++) {
          let date = new Date(data.results[i].release_date);
          let year = date.getFullYear();
          let title: string = data.results[i].title;
          let rating = data.results[i].vote_average * 10;
          let poster = posterImgBaseUrl + data.results[i].poster_path;
          let id = Math.random() * i * 10000;
          i === 0
            ? (moviesFormatted[i] = {
                id: id,
                title: title,
                poster: poster,
                year: year,
                rating: rating,
              })
            : moviesFormatted.push({
                id: id,
                title: title,
                poster: poster,
                year: year,
                rating: rating,
              });

          if (i === 7) {
            dispatch(setMoviesSection(moviesFormatted));
          }
        }
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
          !isMobile ? (
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
            movies.map((movie) => (
              <HomeGridItem
                key={movie.id}
                imgUrl={movie.poster}
                title={movie.title}
                rating={movie.rating}
                year={movie.year}
              />
            ))
          )
        ) : (
          <Preloader />
        )}
      </div>
    </>
  );
};
