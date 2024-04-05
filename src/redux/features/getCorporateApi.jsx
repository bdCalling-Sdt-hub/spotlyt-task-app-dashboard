import { baseApi } from "../api/baseApi";

const getCorporateApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getCorporate:builder.query({
            query:()=>`/tasks/admin?type=video`
        })
    })
})

export const {useGetCorporateQuery} = getCorporateApi;