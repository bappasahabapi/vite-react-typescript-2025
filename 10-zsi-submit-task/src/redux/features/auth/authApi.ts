import { baseApi } from "@/redux/api/baseApi";

// https://api.zsimarketing.com/api/auth/user/login
const AUTH_URL = "/auth/user";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      login: build.mutation({
        query: (userInfo) => ({
          url:`${AUTH_URL}/login`,
          method: "POST",
          body: userInfo,
        }),
      }),
    }),
  });

  export const {useLoginMutation} =authApi;

