import { baseApi } from "../api/baseApi";

const getPaiApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPai:builder.query({
            query:()=>`/users/ratio`
        })
    })
})

export const {useGetPaiQuery} = getPaiApi;