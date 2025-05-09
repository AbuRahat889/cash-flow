// src/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Utility function to handle the base API URL
const baseApiHandler = () => {
  const apiUrl = "https://cashflowbackend-2.onrender.com/api/";

  return apiUrl;
};
// Define the base API using RTK Query
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiHandler(),
    prepareHeaders: (headers) => {
      let token = "";

      if (typeof window !== "undefined") {
        token = localStorage.getItem("token") || "";
      }

      console.log(token, "this is the token from baseApi");

      if (token) {
        headers.set("Authorization", `Bearar ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["contact", "review", "auth"],
});
