import { baseApi } from "../api/baseApi";

const getAllWithdrawalApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllWithdrawal:builder.query({
            query:({currentPage,startDate})=>`/withdrawal?page=${currentPage}&startDate=${startDate}`
        })
    })
})

export const {useGetAllWithdrawalQuery} = getAllWithdrawalApi;