import { baseApi } from "../api/baseApi";

const getVeryfyRequestListApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
     getVeryfyRequestList:builder.query({
            query:()=>`/users/nidVerifySubmitList`
        })
    })
})

export const {useGetVeryfyRequestListQuery} = getVeryfyRequestListApi;