// src/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

// Utility function to handle the base API URL
const baseApiHandler = () => {
  // const apiUrl = "http://10.0.10.66:5198/api/v1";
  const apiUrl = "https://syoung-zeta.vercel.app/api/v1";
  // const apiUrl = "http://localhost:5000/api/v1"
  //   process.env.API_BASE_URL || "http://104.236.194.254:5198/api/v1";
  return apiUrl;
};

// Define the base API using RTK Query
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiHandler(),
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["contact", "review"],
});
