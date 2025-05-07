import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const BudgetsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //constact the admin
    postBudgets: build.mutation({
      query: (data) => ({
        url: `/budgets`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    //constact the admin
    getBudgets: build.query({
      query: () => ({
        url: `/budgets`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { usePostBudgetsMutation, useGetBudgetsQuery } = BudgetsApi;
export default BudgetsApi;
