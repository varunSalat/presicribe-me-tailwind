import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, loginEndPoint } from "../../utils/apiEndpoints";

const loginModuleAPIs = createApi({
  reducerPath: "loginModuleAPIs",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: loginEndPoint,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginModuleAPIs;

export default loginModuleAPIs;
