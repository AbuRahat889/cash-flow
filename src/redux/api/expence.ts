import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ExpencesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //constact the admin
    postExpences: build.mutation({
      query: (data) => ({
        url: `/expenses`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    //constact the admin
    getExpences: build.query({
      query: () => ({
        url: `/expenses`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { usePostExpencesMutation, useGetExpencesQuery } = ExpencesApi;
export default ExpencesApi;
