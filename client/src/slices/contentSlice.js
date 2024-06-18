import { apiSlice } from "./apiSlice";
import { CONTENT_URL } from "../constants";

export const contentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomeContent: builder.query({
      query: () => ({
        url: `CONTENT_URL/home`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetHomeContentQuery } = contentApiSlice;
