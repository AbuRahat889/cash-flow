import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const GoalApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //constact the admin
    postGoals: build.mutation({
      query: (data) => ({
        url: `/goals`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    //constact the admin
    getGoals: build.query({
      query: () => ({
        url: `/goals`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { usePostGoalsMutation, useGetGoalsQuery } = GoalApi;
export default GoalApi;
