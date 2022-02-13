import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { apikey, baseUrl } from "../api.config";

const apiparam = `api_key=${apikey}`;

export const moviesPageApi = createApi({
  reducerPath: "moviesPageApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: () => ({ url: `/trending/movie/week?${apiparam}`, method: "GET" }),
      transformResponse: (data: any) => {
        return data;
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
