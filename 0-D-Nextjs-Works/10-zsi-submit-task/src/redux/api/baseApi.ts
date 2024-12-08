import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi =createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({
        // baseUrl:'https://api.zsimarketing.com/api/auth/user/login'
        baseUrl:'https://api.zsimarketing.com/api',
        credentials:'include'
    }),
    endpoints:()=>({})
})