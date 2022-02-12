// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apikey, baseUrl } from '../api.config'

const apiparam = `api_key=${apikey}`

// Define a service using a base URL and expected endpoints
export const homePageApi = createApi({
  reducerPath: 'homePageApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: () => ({url: `/trending/movie/week?${apiparam}`, method:"GET"}),
    }),
    getTVs: builder.mutation({
      query: () => ({url: `/trending/tv/week?${apiparam}`, method:"GET"}),
    }),
    getPeople: builder.mutation({
      query: () => ({url: `/trending/person/week?${apiparam}`, method:"GET"}),
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesMutation, useGetTVsMutation, useGetPeopleMutation } = homePageApi