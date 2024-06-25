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
    createEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENT_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetEventsByYearAndMonthQuery, useCreateEventMutation } =
  eventsApiSlice;
