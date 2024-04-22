import { baseApi } from "../api/baseApi";

const getReferAmount = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getReferAmount:builder.query({
            query:()=>`/referral/amount`
        })
    })
})

export const {useGetReferAmountQuery} = getReferAmount;