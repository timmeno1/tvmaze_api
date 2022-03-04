// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  MoviesTVsItem,
  PeopleType,
} from "../../../features/Content/Home/home.reducer";
import {
  apikey,
  baseUrl,
  posterImgBaseUrl,
  sliderImgBaseUrl,
} from "../api.config";

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
  for (let i = 0; i < 8; i++) {
    let title: string = data.results[i].title;
    let date = new Date(data.results[i].release_date);
    let year: number = date.getFullYear();
    let rating: number = data.results[i].vote_average * 10;
    let poster: string = posterImgBaseUrl + data.results[i].poster_path;
    let backdrop: string = sliderImgBaseUrl + data.results[i].backdrop_path;
    let mediaType: string = data.results[i].media_type
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
const formatTVsArray = (data: any) => {

  let dataFormatted: Array<MoviesTVsItem> = [
    {
      id: 2,
      title: "mo title",
      poster: "no poster",
      year: 2,
      rating: 2,
      mediaType: "mediaType",
      backdrop: "no backdrop",
    },
  ];
  for (let i = 0; i < 8; i++) {
    let title = data.results[i].name;
    let date = new Date(data.results[i].first_air_date);
    let year = date.getFullYear();
    let rating = data.results[i].vote_average * 10;
    let poster = posterImgBaseUrl + data.results[i].poster_path;
    let backdrop: string = sliderImgBaseUrl + data.results[i].backdrop_path;
    let mediaType: string = data.results[i].media_type
    let id = data.results[i].id;
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
const formatPeopleArray = (data: any) => {

  let dataFormatted: Array<PeopleType> = [
    {
      id: 2,
      name: "name",
      profile_path: "image link",
      mediaType: "no type"
    },
  ];
  for (let i = 0; i < 8; i++) {
    let name = data.results[i].name;
    let profile_path = posterImgBaseUrl + data.results[i].profile_path;
    let mediaType = data.results[i].media_type
    let id = data.results[i].id;
    i === 0
      ? (dataFormatted[i] = {
          id: id,
          name: name,
          profile_path: profile_path,
          mediaType: mediaType
        })
      : dataFormatted.push({
          id: id,
          name: name,
          profile_path: profile_path,
          mediaType: mediaType
        });
  }
  return dataFormatted;
};

// Define a service using a base URL and expected endpoints
export const homePageApi = createApi({
  reducerPath: "homePageApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: () => ({ url: `/trending/movie/week?${apiparam}`, method: "GET" }),
      transformResponse: (data: Array<MoviesTVsItem>) => {
        return formatMoviesArray(data);
      },
    }),
    getTVs: builder.mutation({
      query: () => ({ url: `/trending/tv/week?${apiparam}`, method: "GET" }),
      transformResponse: (data: Array<MoviesTVsItem>) => {
        return formatTVsArray(data);
      },
    }),
    getPeople: builder.mutation({
      query: () => ({
        url: `/trending/person/week?${apiparam}`,
        method: "GET",
      }),
      transformResponse: (data: Array<PeopleType>) => {
        return formatPeopleArray(data);
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesMutation, useGetTVsMutation, useGetPeopleMutation } =
  homePageApi;
