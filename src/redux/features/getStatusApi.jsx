import { baseApi } from "../api/baseApi";

const getStatusApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getStatus:builder.query({
            query:()=>`/payment/status`
        })
    })
})

export const {useGetStatusQuery} = getStatusApi;