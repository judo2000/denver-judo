import { apiSlice } from "./apiSlice";
import { EVENT_URL } from "../constants";

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEventsByYearAndMonth: builder.query({
      query: (eventData) => ({
        url: `${EVENT_URL}/${eventData.year}/${eventData.month}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetEventsByYearAndMonthQuery } = eventsApiSlice;
