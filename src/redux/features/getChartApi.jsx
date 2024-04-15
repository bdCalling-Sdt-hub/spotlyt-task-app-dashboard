import { baseApi } from "../api/baseApi";

const getChatApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getChat:builder.query({
            query:(year)=>`/payment/chart?year=${year}`
        })
    })
})

export const {useGetChatQuery} = getChatApi;