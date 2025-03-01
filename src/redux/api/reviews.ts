// /* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // sign up user or client

    getAllReview: build.query({
      query: () => ({
        url: `/review`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    //clinet post review
    postReview: build.mutation({
      query: ({ name, email, message, rating }) => {
        return {
          url: `/review`,
          method: "POST",
          body: { name, email, message, rating },
        };
      },
      invalidatesTags: ["review"],
    }),

    // login: build.mutation({ /service/6794c35daa3733ef4437d16e/review
    // method: "GET",
    //   query: (data: any) => ({  /service/6794c35daa3733ef4437d16e/review
    //     url: `/auth/login`, /service/6795cb6a032957768373187b/review
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
  }),
});

export const { usePostReviewMutation, useGetAllReviewQuery } = ServiceApi;
export default ServiceApi;
