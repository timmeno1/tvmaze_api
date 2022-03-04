import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PeopleType } from "../../../features/Content/Home/home.reducer";
import { apikey, baseUrl, posterImgBaseUrl } from "../api.config";

const apiparam = `api_key=${apikey}`;

const formatPeopleArray = (data: any) => {
  let dataFormatted: Array<PeopleType> = [
    {
      id: 2,
      name: "name",
      profile_path: "image link",
      mediaType: "no type",
    },
  ];
  for (let i = 0; i < data.results.length; i++) {
    let name = data.results[i].name;
    let profile_path = posterImgBaseUrl + data.results[i].profile_path;
    let mediaType = "person";
    let id = data.results[i].id;
    i === 0
      ? (dataFormatted[i] = {
          id: id,
          name: name,
          profile_path: profile_path,
          mediaType: mediaType,
        })
      : dataFormatted.push({
          id: id,
          name: name,
          profile_path: profile_path,
          mediaType: mediaType,
        });
  }
  return dataFormatted;
};

export const peoplePageApi = createApi({
  reducerPath: "peoplePageApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPeople: builder.mutation({
      query: () => ({ url: `/person/popular?${apiparam}`, method: "GET" }),
      transformResponse: (data: any) => {
        return formatPeopleArray(data);
      },
    }),
    getPerson: builder.mutation({
      query: (id: string) => ({
        url: `/person/${id}?${apiparam}`,
        method: "GET",
      }),
      transformResponse: (data: any) => {
        return data;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints

export const { useGetPeopleMutation, useGetPersonMutation } = peoplePageApi;
