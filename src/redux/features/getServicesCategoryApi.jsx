import { baseApi } from "../api/baseApi";

const getServicesCategoryApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getServicesCategory:builder.query({
            query:()=>`/service`
        })
    })
})

export const {useGetServicesCategoryQuery} = getServicesCategoryApi;