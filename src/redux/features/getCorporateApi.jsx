import { baseApi } from "../api/baseApi";

const getCorporateApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getCorporate:builder.query({
            query:(currentPage)=>`/tasks/admin?type=corporate&page=${currentPage}`
        })
    })
})

export const {useGetCorporateQuery} = getCorporateApi;