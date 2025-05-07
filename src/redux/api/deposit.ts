import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const DepositApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //constact the admin
    postDeposite: build.mutation({
      query: (data) => ({
        url: `/deposits`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    //constact the admin
    getDeposite: build.query({
      query: () => ({
        url: `/deposits`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { usePostDepositeMutation, useGetDepositeQuery } = DepositApi;
export default DepositApi;
