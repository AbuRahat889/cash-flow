// /* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createuser: build.mutation({
      query: ({ username, email, password, role, authProvider }) => {
        return {
          url: `/auth/registation`,
          method: "POST",
          body: { username, email, password, role, authProvider },
        };
      },
      invalidatesTags: ["auth"],
    }),
    loginuser: build.mutation({
      query: ({ username, password }) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: { username, password },
        };
      },
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useCreateuserMutation, useLoginuserMutation } = AuthApi;
export default AuthApi;
