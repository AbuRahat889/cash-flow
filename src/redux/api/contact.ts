import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //constact the admin
    postContact: build.mutation({
      query: ({ name, email, zip, picture, message, address, phone }) => ({
        url: `/contact`,
        method: "POST",
        body: { name, email, zip, picture, message, address, phone },
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const { usePostContactMutation } = ServiceApi;
export default ServiceApi;
