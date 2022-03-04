import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { MoviesTVsItem } from "../../../features/Content/Home/home.reducer";
import { apikey, baseUrl, posterImgBaseUrl, sliderImgBaseUrl } from "../api.config";

const apiparam = `api_key=${apikey}`;



const formatTVsArray = (data: any) => {
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
    let title = data.results[i].name;
    let date = new Date(data.results[i].first_air_date);
    let year = date.getFullYear();
    let rating = data.results[i].vote_average * 10;
    let poster = posterImgBaseUrl + data.results[i].poster_path;
    let backdrop: string = sliderImgBaseUrl + data.results[i].backdrop_path;
    let mediaType: string = "tv"
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

export const showsPageApi = createApi({
  reducerPath: "showsPageApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getTVs: builder.mutation({
      query: () => ({ url: `/tv/popular?${apiparam}`, method: "GET" }),
      transformResponse: (data: any) => {
        return formatTVsArray(data);
      },
    }),
    getOneTV: builder.mutation({
      query: (id:string) => ({ url: `/movie/${id}?${apiparam}`, method: "GET" }),
      transformResponse: (data: any) => {
        return data;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints

export const { useGetTVsMutation, useGetOneTVMutation } = showsPageApi;
