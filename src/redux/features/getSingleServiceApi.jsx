import { baseApi } from "../api/baseApi";

const getSingleServiceApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSingleService:builder.query({
            query:(id)=>`/service/category/single/one?id=${id}`
        })
    })
})

export const {useGetSingleServiceQuery} = getSingleServiceApi;