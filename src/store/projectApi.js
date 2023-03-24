import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://94p50dfz.api.sanity.io/v2021-10-21/data/query/production?query=*[_type == "projects"]`,
  }),
  endpoints: (builder) => ({
    getProject: builder.query({
      query: (query) => ``,
    }),
  }),
});

export const { useGetProjectQuery } = projectApi;
