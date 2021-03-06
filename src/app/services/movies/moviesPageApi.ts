import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { MoviesTVsItem } from "../../../features/Content/Home/home.reducer";
import { apikey, baseUrl, posterImgBaseUrl, sliderImgBaseUrl } from "../api.config";

const apiparam = `api_key=${apikey}`;



const formatMoviesArray = (data: any) => {
  let dataFormatted: Array<MoviesTVsItem> = [
    {
      id: 2,
      title: "mo title",
      poster: "no poster",
      year: 2,
      rating: 2,
      mediaType: "no type",
      backdrop: "no backdrop",
    },
  ];
  for (let i = 0; i < data.results.length; i++) {
    let title: string = data.results[i].title;
    let date = new Date(data.results[i].release_date);
    let year: number = date.getFullYear();
    let rating: number = data.results[i].vote_average * 10;
    let poster: string = posterImgBaseUrl + data.results[i].poster_path;
    let backdrop: string = sliderImgBaseUrl + data.results[i].backdrop_path;
    let mediaType: string = "movie"
    let id: number = data.results[i].id;
    i === 0
      ? (dataFormatted[i] = {
          id: id,
          title: title,
          poster: poster,
          year: year,
          rating: rating,
          mediaType: mediaType,
          backdrop: backdrop,
        })
      : dataFormatted.push({
          id: id,
          title: title,
          poster: poster,
          year: year,
          rating: rating,
          mediaType: mediaType,
          backdrop: backdrop,
        });
  }

  return dataFormatted;
};

export const moviesPageApi = createApi({
  reducerPath: "moviesPageApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: () => ({ url: `/movie/popular?${apiparam}`, method: "GET" }),
      transformResponse: (data: any) => {
        return formatMoviesArray(data);
      },
    }),
    getOneMovie: builder.mutation({
      query: (id:string) => ({ url: `/movie/${id}?${apiparam}`, method: "GET" }),
      transformResponse: (data: any) => {
        return data;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints

export const { useGetMoviesMutation, useGetOneMovieMutation } = moviesPageApi;
