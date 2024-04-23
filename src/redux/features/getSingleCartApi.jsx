import { baseApi } from "../api/baseApi";

const getSingleCartApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSingleCart:builder.query({
            query:(id)=>`/service/one?id=${id}`
        })
    })
})

export const {useGetSingleCartQuery} = getSingleCartApi;