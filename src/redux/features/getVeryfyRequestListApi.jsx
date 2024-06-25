import { baseApi } from "../api/baseApi";

const getVeryfyRequestListApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
     getVeryfyRequestList:builder.query({
            query:()=>`/users/nidVerifySubmitList`,
            providesTags:["Nid"],

        })
    })
})

export const {useGetVeryfyRequestListQuery} = getVeryfyRequestListApi;