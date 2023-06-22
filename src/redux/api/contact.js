import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://contact-app.mmsdev.site/api/v1`,
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: "Auth",
    }),
    login: builder.mutation({
      query: (user) => ({
        url: `/login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: "Auth",
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: "/user-logout",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  contactApi;
